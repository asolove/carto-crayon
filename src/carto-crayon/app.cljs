(ns carto-crayon.app
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [cljs.core.async :refer [put! <! >! chan timeout]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs-http.client :as http]))

(enable-console-print!)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Data

(def app-state
  (atom {:selected false
         :layers []}))

(defn columns [features]
  (disj (into #{} (apply concat (map keys features))) :geometry))

(defn select-layer [app layer]
  (om/update! app [:selected] (constantly layer)))

(defn select-feature [layer feature]
  (om/update! layer [:selection]
              (constantly feature)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; UI helpers

(defn feature-row [layer {:keys [cols n]}]
  (let [feature (get-in layer [:features n])
        selected (= (:selected layer) n)]
    (om/component
     (dom/tr #js {:onClick #(select-feature layer n)
                  :className (when selected "selected")}
             (into-array (map #(dom/td nil (feature %)) cols))))))

(defn feature-style [feature])

(defn feature-styles [feature]
  (om/component
    (dom/div #js {:id "styles"}
             (dom/h2 nil "Styles")
             (dom/div nil
                      (into-array
                        (map #(om/build feature-style {:opts {:feature feature :style (key %)}})
                             (:styles feature)))))))

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
                                                                     {:opts {:cols cols :n %}})
                                                          (range (count features)))))))
                        (dom/h2 nil "No layer")))
             (om/build feature-styles layer {:path [:features (:selection layer)]}))))

(defn layer-list-item
  [app {:keys [n]}]
  (om/component
    (let [layer (get-in app [:layers n])
          selected (= n (:selected app))]
      (dom/li #js {:className (if selected "selected" "not-selected") :onClick #(select-layer app n)}
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

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Map UI

(def leaflet-map (atom false))

(defn map-feature [feature {:keys [group]}]
  (let [feature-layer (L.geoJson (:geometry feature))]
    (.addLayer group feature-layer)
    (reify
      om/IRender
      (render [_ owner]
        (.setStyle feature-layer (:style feature))
        (dom/span nil "")))))

(defn map-layer [layer]
  (let [feature-group (L.featureGroup)]
    (reify
      om/IDidMount
      (did-mount [_ _ _]
        (js/setTimeout (fn [] (.addTo feature-group @leaflet-map)) 100))
      om/IRender
      (render [_ owner]
        (dom/div nil
                 (into-array (map #(om/build map-feature % {:opts {:group feature-group}})
                                  (:features layer))))))))

(defn map-view [app]
  (reify
    om/IDidMount
    (did-mount [_ _ _]
      (swap! leaflet-map (fn [_] (L.mapbox.map "map" "imthepusher.gjbmo715"))))
    om/IRender
    (render [_ owner]
      (dom/div #js {:id "map"}
               (into-array (map #(om/build map-layer %) (:layers app)))))))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; App bootstrap

(defn carto-crayon-ui [app]
  (reify
    om/IRender
    (render [_ owner]
      (dom/div nil nil
               (dom/header #js {:className "auth"})

               (dom/div #js {:id "data"}
                        (om/build layer-list app)
                        (om/build layer-features app {:path [:layers (:selected app)]}))

               (om/build map-view app)))))

; Load initial data
(go (let [districtTopology (js/JSON.parse (:body (<! (http/get "data/cd113.topojson"))))
          districtGeoJSON (js/topojson.feature districtTopology (.-cd113 (.-objects districtTopology)))
          ; convert everything but the geometry to edn
          districtLayer { :name "Districts"
                          :features (vec (.map (.-features districtGeoJSON)
                                               (fn [f] {:id (.-id f) :geometry (.-geometry f)})))}]
      (swap! app-state (fn [state]
                         (update-in state [:layers]
                                    #(conj % districtLayer))))
      (om/root app-state carto-crayon-ui (.getElementById js/document "app"))))

