(ns carto-crayon.app
  (:require-macros [cljs.core.async.macros :refer [go alt!]]
                   [secretary.macros :refer [defroute]])
  (:require [goog.events :as events]
            [cljs.core.async :refer [put! <! >! chan timeout]]
            [markdown.core :as md]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [secretary.core :as secretary]
            [cljs-http.client :as http]
            [carto-crayon.utils :refer [guid]])
  (:import [goog History]
           [goog.history EventType]))

(enable-console-print!)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Data

(def app-state
  (atom {:selection {:layer "States"}
         :layers [{:name "States" :features [{:id "MN" :Obama 10 :Romney 14}]}]}))

(defn get-layer [app name]
  (first (filter #(= name (:name %)) (:layers app))))

(defn columns [features]
  (disj (into #{} (apply concat (map keys features))) :geometry))

(defn select-layer [app layer]
  (om/update! app [:selection :layer]
              (constantly layer)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; UI helpers

(defn feature-row [feature cols]
  (dom/tr nil
          (into-array (map #(dom/td nil (feature %)) cols))))

(defn feature-table [app options]
  (let [layer (get-layer app (:layer (:selection app)))
        features (:features layer)
        cols (columns features)]
    (om/component
      (dom/div #js {:id "features"}
               (dom/h2 nil "Features")
               (dom/table nil
                          (dom/thead nil (dom/tr nil
                                                 (into-array
                                                   (map #(dom/th nil (name %)) cols))))
                          (dom/tbody nil (into-array
                                           (map #(feature-row % cols) features))))))))

(defn layer
  [app {{:keys [name]} :layer}]
  (let [selected (= name (:layer (:selection app)))]
    (om/component
      (dom/li #js {:className (when selected "selected") :onClick #(select-layer app name)} name))))

(defn layer-list [app]
  (om/component
    (dom/div #js {:id "layers"}
             (dom/h2 nil "Layers")
             (dom/ol nil (into-array
                           (map #(om/build layer app {:opts {:layer %}})
                                (:layers app)))))))

(def leaflet-map (atom false))

(defn map-view [app]
  (reify
    om/IDidMount
    (did-mount [_ _ _]
      (swap! leaflet-map (fn [_] (L.mapbox.map "map" "imthepusher.gjbmo715"))))
    ; FIXME: re-renders each time. Should make a declarative Leaflet bindings layer cf. https://github.com/facebook/react-art/blob/master/src/ReactART.js
    om/IRender
    (render [_ owner]
      (when @leaflet-map
        (let [features (get-in app [:layers 1 :features])]
          (doseq [feature features]
            (.addTo (L.geoJson (clj->js {:type "Feature" :geometry (:geometry feature)})) @leaflet-map))))
      (dom/div #js {:id "map"}))))


(defn carto-crayon-ui [app]
  (reify
    om/IRender
    (render [_ owner]
      (dom/div nil nil
               (dom/header #js {:className "auth"})
               (dom/div #js {:id "data"}
                        (om/build layer-list app)
                        (om/build feature-table app)
                        (dom/div #js {:id "styles"}
                                 (dom/h2 nil "Styles")))
               (om/build map-view app)))))

(def topology (atom 1))

(go (let [districtTopology (js/JSON.parse (:body (<! (http/get "data/cd113.topojson"))))
          districtGeoJSON (js/topojson.feature districtTopology (.-cd113 (.-objects districtTopology)))
          ; convert everything but the geometry to edn
          districtLayer { :name "Districts"
                          :features (vec (.map (.-features districtGeoJSON)
                                               (fn [f] {:id (.-id f) :geometry (.-geometry f)})))}]
      (swap! topology (constantly districtTopology))
      (swap! app-state (fn [state]
                         (update-in state [:layers]
                                    #(conj % districtLayer))))
      (om/root app-state carto-crayon-ui (.getElementById js/document "app"))))

