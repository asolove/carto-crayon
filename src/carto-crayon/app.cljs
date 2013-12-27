(ns carto-crayon.app
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [cljs.core.async :refer [put! <! >! chan timeout]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs-http.client :as http]))

(enable-console-print!)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Data

(def empty-state
  {:selected false
   :layers []})

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

(defn toggle-feature-selection
  ([layer feature add]
     (select-features layer
                      #(if (= (:id feature) (:id %))
                        (not (:selected %))
                        (if add (:selected %) false))
                      false)))

(defn set-feature-style-text
  [features prop value]
  (om/update! features (fn [fs]
                         (vec (map (fn [f] (if (:selected f)
                                            (assoc-in f [:styles prop :text] value)
                                            f))
                                   fs)))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; DOM helpers

; FIXME: implement shift v. meta distinction
(defn event-adds-to-selection?
  [e]
  (or (.-shiftKey e) (.-metaKey e)))

; FIXME: make table fixed-height, then this can be entirely generic
(defn ensure-feature-visible
  [node]
  (let [parent (.getElementById js/document "features")
        parent-top (.-scrollTop parent)
        parent-bottom (+ parent-top (.-offsetHeight parent))
        node-top (.-offsetTop node)]
    (when (or (< node-top parent-top) (> node-top parent-bottom))
      (aset parent "scrollTop" node-top))))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Components

; Layer List
(defn layer-list-item
  [app {:keys [n]}]
  (om/component
    (let [layer (get-in app [:layers n])
          selected (= n (:selected app))]
      (dom/li #js {:className (when selected "selected") :onClick #(select-layer app n)}
              (:name layer)))))

(defn layers-list [app]
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
(declare feature-styles-list)

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

(defn features-list [layer opts]
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
                                                                             :select (partial toggle-feature-selection layer)}})
                                                          (range (count features)))))))
                        (dom/h2 nil "No layer")))

             (om/build feature-styles-list layer {:path [:features]}))))

; Styles

(def default-styles {:fillColor {:text "blue"}
                     :color {:text "blue"}
                     :weight {:text 1}
                     :opacity {:text 0.5}
                     :fillOpacity {:text  0.2}})

(def style-types {:fillColor :color :color :color :weight :length
                  :opacity :percent :fillOpacity :percent})

(defn formula?
  [config]
  (= "=" (get-in config [:text 0])))

(defn preview-color-config
  [config features]
  ; FIXME: handle complex case
  (get config :text))

(defn feature-color-row
  [features [prop config]]
  (let [field-name (str prop "-field")
        bgColor (preview-color-config config features)
        text (:text config)
        summary (dom/tr nil
                        (dom/th nil
                                (dom/label #js {:htmlFor field-name} (name prop)))
                        (dom/td nil
                                (dom/input #js {:id field-name
                                                :value text
                                                :onChange (fn [e] (set-feature-style-text
                                                                  features
                                                                  prop
                                                                  (.. e -target -value)))}))
                        (dom/td nil
                                (dom/span #js {:className "swatch" :style #js {:backgroundColor bgColor}}
                                          " ")))]
    (if (formula? config)
      [summary
       (dom/tr nil
               (dom/td #js {:colSpan 3}
                       (dom/input #js {} (:domain-min config))
                       (dom/input #js {} (:domain-max config))
                       (dom/span #js {:className "color-preview"})
                       (dom/input #js {} (:range-min config))
                       (dom/input #js {} (:range-max config))
                       ))]
      summary)))

(defn feature-other-row
  [features [prop config]]
  (let [field-name (str prop "-field")
        text (:text config)]
    (dom/tr nil
            (dom/th nil
                    (dom/label #js {:htmlFor field-name} (name prop)))
            (dom/td nil
                    (dom/input #js {:id field-name
                                    :value text
                                    :onChange (fn [e] (set-feature-style-text
                                                      features
                                                      prop
                                                      (.. e -target -value)))})))))

(defn feature-style-row
  [features [prop value]]
  (if (= :color (style-types prop))
    (feature-color-row features [prop value])
    (feature-other-row features [prop value])))

(defn feature-styles-list [features]
  (om/component
   (let [selected-features (filter :selected features)]
     (dom/div #js {:id "styles"}
              (dom/h2 nil "Styles")
              (if (empty? selected-features)
                (dom/p nil "Select features to style")
                (dom/table nil
                           (into-array (flatten
                                        (map #(feature-style-row features %)
                                        ; FIXME: get styles for all selected features
                                             (:styles (first selected-features)))))))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Map UI

(defn resolve-styles [feature]
  (let [styles (:styles feature)
        ; resolvers here
        resolved (into {} (map #(vec [(key %) (:text (val %))]) styles))]
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
               (let [feature-group (om/get-state owner [:feature-group])
                     select (partial toggle-feature-selection layer)]
                 (into-array (map #(om/build map-feature layer
                                             {:path [:features %]
                                              :opts {:group feature-group :select select}})
                                  (range (count (:features layer))))))))))

(defn map-view [layers]
  (reify
    om/IDidMount
    (did-mount [_ owner _]
      (om/set-state! owner [:leaflet-map] (L.mapbox.map "map" "imthepusher.gjbmo715")))
    om/IRender
    (render [_ owner]
      (dom/div #js {:id "map"}
               (let [leaflet-map (om/get-state owner [:leaflet-map])]
                 (into-array (map #(om/build map-layer layers
                                             {:path [%] :opts {:leaflet-map leaflet-map}})
                                  (range (count layers)))))))))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; App bootstrap

(defn carto-crayon-ui [app]
  (om/component
   (dom/div nil
            (dom/header #js {:className "auth"})

            (dom/div #js {:id "data"}
                     (om/build layers-list app)
                     (om/build features-list app {:path [:layers (:selected app)]}))

            (om/build map-view app {:path [:layers]}))))

(go (let [districtTopology (js/JSON.parse (:body (<! (http/get "data/cd113.topojson"))))
          districtGeoJSON (js/topojson.feature districtTopology
                                               (.-cd113 (.-objects districtTopology)))
          districtFeatures (vec (map (fn [f] {:id (.-id f)
                                             :geometry (.-geometry f)
                                             :styles (merge default-styles
                                                            (js->clj (.-styles f)))})
                                     (vec (.-features districtGeoJSON))))
          districtLayer {:name "Districts"
                         :features districtFeatures}]
      (let [init-state (update-in empty-state [:layers] #(vec (conj % districtLayer)))]
        (om/root init-state carto-crayon-ui (.getElementById js/document "app")))))
