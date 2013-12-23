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
             (om/build feature-styles layer {:path [:features (:selected layer)]}))))

; Styles

(def default-styles {:fillColor "blue" :color "blue"})

(defn feature-style [styles {:keys [prop]}]
  (let [value (styles prop)]
    (om/component
     (dom/div nil
              (dom/label nil (name prop))
              (dom/input #js {:value value :onChange #(om/update! styles [prop] (constantly "red"))})))))

(defn feature-styles [feature]
  (om/component
    (dom/div #js {:id "styles"}
             (dom/h2 nil "Styles")
             (dom/div nil
                      (into-array
                       (map #(om/build feature-style feature {:path [:styles] :opts {:prop (key %)}})
                            (:styles feature)))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Map UI

(def leaflet-map (atom false))

(defn map-feature [feature {:keys [group]}]
  (reify
    om/IWillMount
    (will-mount [_ owner]
      (let [feature-layer (L.geoJson (:geometry feature))]
        (.addLayer group feature-layer)
        (om/set-state! owner [:feature-layer] (L.geoJson (:geometry feature)))))
    om/IRender
    (render [_ owner]
      (.setStyle (om/get-state owner [:feature-layer]) (clj->js (:styles feature)))
      (dom/span nil ""))))

(defn map-layer [layer]
  (let [feature-group (L.featureGroup)]
    (reify
      om/IDidMount
      (did-mount [_ _ _]
        (js/setTimeout (fn [] (.addTo feature-group @leaflet-map)) 100))
      om/IRender
      (render [_ owner]
        (dom/div nil
                 (into-array (map #(om/build map-feature layer {:path [:features %] :opts { :group feature-group}})
                                  (range (count (:features layer))))))))))

(defn map-view [layers]
  (reify
    om/IDidMount
    (did-mount [_ _ _]
      (swap! leaflet-map (fn [_] (L.mapbox.map "map" "imthepusher.gjbmo715"))))
    om/IRender
    (render [_ owner]
      (dom/div #js {:id "map"}
               (into-array (map #(om/build map-layer layers {:path [%]})
                                (range (count layers))))))))


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

               (om/build map-view app {:path [:layers]})))))

; Load initial data
(go (let [districtTopology (js/JSON.parse (:body (<! (http/get "data/cd113.topojson"))))
          districtGeoJSON (js/topojson.feature districtTopology (.-cd113 (.-objects districtTopology)))
          ; convert everything but the geometry to edn
          districtLayer { :name "Districts"
                          :features (vec (.map (.-features districtGeoJSON)
                                               (fn [f] {:id (.-id f)
                                                       :geometry (.-geometry f)
                                                       :styles (merge default-styles (js->clj (.-styles f)))})))}]
      (swap! app-state (fn [state]
                         (update-in state [:layers]
                                    #(conj % districtLayer))))
      (om/root app-state carto-crayon-ui (.getElementById js/document "app"))))

