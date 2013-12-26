(ns carto-crayon.app
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [cljs.core.async :refer [put! <! >! chan timeout]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs-http.client :as http]))

(enable-console-print!)

; util, move
(defn filter-indexed
  [f col]
  (filter #(= (val %) true)
          (map-indexed (fn [idx item] [idx (f item)]) col)))

(defn first-match-index
  [f col]
  (when-let [items (filter-indexed f col)]
    (first (first items))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Data

(def app-state
  (atom {:selected false
         :layers []}))

(defn columns [features]
  (disj (into #{} (apply concat (map keys features))) :geometry :styles :selected))

(defn select-layer [app layer]
  (om/update! app [:selected] (constantly layer)))

(defn select-features
  ([layer f add]
     (let [test (if add #(or (:selected %) (f %)) f)
           op #(if (test %) assoc dissoc)]
       (om/update! layer [:features]
                   (fn [features]
                     (vec (map #((op %) % :selected true) features)))))))

(defn select-feature
  ([layer feature add]
     (select-features layer #(= (:id feature) (:id %)) add)))

(defn deselect-feature
  [layer feature]
  (om/update! layer [:features]
              (fn [features]
                (vec (map #(if (= (:id %) (:id feature)) (dissoc % :selected) %) features)))))

(defn toggle-selection
  ([layer feature]
     (select-features layer
                      #(if (= (:id feature) (:id %))
                         (not (:selected %))
                         (:selected %)) false)))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Components

;; Dom helpers
; FIXME: implement shift v. meta distinction
(defn event-adds-to-selection?
  [e]
  (or (.-shiftKey e) (.-metaKey e)))

; Layer List

(defn layer-list-item
  [app {:keys [n]}]
  (om/component
    (let [layer (get-in app [:layers n])
          selected (= n (:selected app))]
      (dom/li #js {:className (when selected "selected") :onClick #(select-layer app n)}
              (:name layer)))))

(defn layer-list [app]
  (om/component
    (let [selected (:selected app)]
      (dom/div #js {:id "layers"}
               (dom/h2 nil "Layers")
               (dom/ol nil (into-array
                             (map #(om/build layer-list-item
                                             app
                                             {:opts {:n %}})
                                  (range (count (:layers app))) )))))))

; Feature table
(declare feature-styles)

(defn ensure-feature-visible
  [node]
  (let [parent (.getElementById js/document "features")
        parent-top (.-scrollTop parent)
        parent-bottom (+ parent-top (.-offsetHeight parent))
        node-top (.-offsetTop node)]
    (when (or (< node-top parent-top) (> node-top parent-bottom))
      (aset parent "scrollTop" node-top))))

(defn feature-row [feature {:keys [cols select]}]
  (reify
    om/IRender
    (render [_ owner]
      (dom/tr #js {:onClick #(select feature (event-adds-to-selection? %))
                :className (when (feature :selected) "selected")}
              (into-array (map #(dom/td nil (feature %)) cols))))
    om/IDidUpdate
    (did-update [_ _ prev _ node]
      (let [prev-props (.-__om_value prev)]
        (if (and (:selected feature) (not (:selected prev-props)))
          (ensure-feature-visible node))))))

(defn layer-features [layer opts]
  (om/component
    (dom/div nil
             (dom/div #js {:id "features"}
                      (dom/h2 nil "Features")

                      (if layer
                        (let [features (:features layer)
                              cols (columns features)]
                          (dom/table nil
                                     (dom/thead nil (dom/tr nil
                                                            (into-array
                                                             (map #(dom/th nil (name %)) cols))))
                                     (dom/tbody nil (into-array
                                                     (map #(om/build feature-row
                                                                     layer
                                                                     {:path [:features %]
                                                                      :opts {:cols cols
                                                                             :select (partial toggle-selection layer)}})
                                                          (range (count features)))))))
                        (dom/h2 nil "No layer")))

             (om/build feature-styles layer {:path [:features]}))))

; Styles

(def default-styles {:fillColor "blue" :color "blue" :weight 5 :opacity 0.5 :fillOpacity 0.2})

(defn update-selected-features-property
  [features prop value]
  (om/update! features (fn [fs]
                         (vec (map (fn [f] (if (:selected f)
                                            (assoc-in f [:styles prop] value)
                                            f))
                                   fs)))))

(defn feature-style
  [features [prop value]]
  (let [field-name (str prop "-field")]
    (dom/tr nil
            (dom/th nil
                    (dom/label #js {:htmlFor field-name} (name prop)))
            (dom/td nil
                    (dom/input #js {:id field-name
                                    :value value
                                    :onChange (fn [e] (update-selected-features-property
                                                      features
                                                      prop
                                                      (.. e -target -value)))})))))

(defn all-feature-styles [])

(defn feature-styles [features]
  (om/component
   (let [selected-features (filter :selected features)]
     (dom/div #js {:id "styles"}
              (dom/h2 nil "Styles")
              (if (empty? selected-features)
                (dom/p nil "Select features to style")
                (dom/table nil
                           (into-array
                            (map #(feature-style features %)
                                 ; fixme: get shared styles for all selected
                                 (:styles (first selected-features))))))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Map UI

(defn resolve-styles [feature]
  (let [styles (:styles feature)
        ; resolvers here
        resolved styles]
    (clj->js resolved)))

(defn map-feature [feature {:keys [group select]}]
  (reify
    om/IInitState
    (init-state [_ _]
      (let [feature-layer (L.geoJson (:geometry feature))]
        (.on feature-layer "click" #(select feature (event-adds-to-selection? (.-originalEvent %))))
        (.addLayer group feature-layer)
        {:feature-layer feature-layer}))
    om/IDidUpdate
    (did-update [_ owner _ _ _]
      (.setStyle (om/get-state owner [:feature-layer]) (resolve-styles feature))
      (.eachLayer (om/get-state owner [:feature-layer])
                  (fn [layer]
                    (when (.-_container layer)
                      (let [classList (.. layer -_path -classList)]
                        (if (:selected feature)
                          (.add classList "selected")
                          (.remove classList "selected")))))))
    om/IRender
    (render [_ owner]
      (dom/span nil nil))))

(defn map-layer [layer {:keys [leaflet-map]}]
  (reify
    om/IInitState
    (init-state [_ _]
      {:feature-group (L.featureGroup)})
    om/IRender
    (render [_ owner]
      (when leaflet-map
        (js/setTimeout #(.addTo (om/get-state owner [:feature-group]) leaflet-map) 100))
      (dom/div nil
               (into-array (map #(om/build map-feature layer {:path [:features %] :opts {:group (om/get-state owner [:feature-group])
                                                                                         :select (partial toggle-selection layer)}})
                                (range (count (:features layer)))))))))

(defn map-view [layers]
  (reify
    om/IDidMount
    (did-mount [_ owner _]
      (om/set-state! owner [:leaflet-map] (L.mapbox.map "map" "imthepusher.gjbmo715")))
    om/IRender
    (render [_ owner]
      (dom/div #js {:id "map"}
               (into-array (map #(om/build map-layer layers {:path [%] :opts {:leaflet-map (om/get-state owner [:leaflet-map])}})
                                (range (count layers))))))))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; App bootstrap

(defn carto-crayon-ui [app]
  (om/component
   (dom/div nil
            (dom/header #js {:className "auth"})

            (dom/div #js {:id "data"}
                     (om/build layer-list app)
                     (om/build layer-features app {:path [:layers (:selected app)]}))

            (om/build map-view app {:path [:layers]}))))

; Load initial data

(go (let [districtTopology (js/JSON.parse (:body (<! (http/get "data/cd113.topojson"))))
          districtGeoJSON (js/topojson.feature districtTopology (.-cd113 (.-objects districtTopology)))
                                        ; convert everything but the geometry to edn
          districtLayer {:name "Districts"
                         :features (vec (map (fn [f] {:id (.-id f)
                                                     :geometry (.-geometry f)
                                                     :styles (merge default-styles (js->clj (.-styles f)))})
                                             (vec (.-features districtGeoJSON))))}]
      (swap! app-state (fn [state]
                         (update-in state [:layers]
                                    #(conj % districtLayer))))
      (om/root app-state carto-crayon-ui (.getElementById js/document "app"))))

