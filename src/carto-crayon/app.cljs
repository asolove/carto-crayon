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

(defn select-feature [layer feature]
  (om/update! layer [:features] (fn [features]
                                  (vec (map #((if (= % feature) assoc dissoc) % :selected true) features)))))


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
(declare empty-feature-styles)

(defn feature-row [feature {:keys [cols select]}]
  (om/component
   (dom/tr #js {:onClick #(select feature)
                :className (when (feature :selected) "selected")}
           (into-array (map #(dom/td nil (feature %)) cols)))))

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
                                                                             :select (partial select-feature layer)}})
                                                          (range (count features)))))))
                        (dom/h2 nil "No layer")))

             (if-let [feature-index (first-match-index :selected (:features layer))]
               (om/build feature-styles layer {:path [:features feature-index]})
               (om/build empty-feature-styles layer {:path [:features]})))))

; Styles

(def default-styles {:fillColor "blue" :color "blue" :weight 5 :opacity 0.5 :fillOpacity 0.2})

(defn feature-style [styles {:keys [prop]}]
  (let [value (styles prop)]
    (om/component
     (dom/tr nil
             (dom/th nil
                     (dom/label #js {:for (str (name prop) "-field")} (name prop)))
             (dom/td nil
                     (dom/input #js {:id (str (name prop) "-field") :value value :onChange #(om/update! styles [prop] (constantly (.. % -target -value)))}))))))

(defn feature-styles [feature]
  (om/component
    (dom/div #js {:id "styles"}
             (dom/h2 nil "Styles")
             (dom/table nil
                      (into-array
                       (map #(om/build feature-style feature {:path [:styles] :opts {:prop (key %)}})
                            (:styles feature)))))))

(defn empty-feature-styles [features]
  (om/component
   (dom/div #js {:id "styles"}
            (dom/h2 nil "Styles")
            (dom/p nil "Select features to style"))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Map UI

(defn map-feature [feature {:keys [group select]}]
  (reify
    om/IInitState
    (init-state [a _]
      (let [feature-layer (L.geoJson (:geometry feature))]
        (.on feature-layer "click" #(select feature))
        (.addLayer group feature-layer)
        {:feature-layer feature-layer}))
    om/IDidUpdate
    (did-update [_ owner _ _ _]
      (.setStyle (om/get-state owner [:feature-layer]) (clj->js (:styles feature))))
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
                                                                                         :select (partial select-feature layer)}})
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
   (dom/div nil nil
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

