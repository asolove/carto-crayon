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
         :layers []}))

(defn get-layer [app name]
  (first (filter #(= name (:name %)) (:layers app))))

(defn get-feature [layer id]
  (first (filter #(= id (:id %)) (:features layer))))

(defn selected-layer [app]
  (get-layer app (get-in app [:selection :layer])))

(defn selected-feature [app]
  (let [layer (selected-layer app)]
    (when layer
      (get-feature layer (get-in app [:selection :feature])))))

(defn columns [features]
  (disj (into #{} (apply concat (map keys features))) :geometry))

(defn select-layer [app layer]
  (om/update! app [:selection]
              #(merge % {:layer layer :feature nil})))

(defn select-feature [app feature]
  (print "selecting feature!" feature)
  (om/update! app [:selection :feature]
              (constantly feature)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; UI helpers

(defn feature-row [feature cols app]
  (dom/tr #js {:onClick #(select-feature app (:id feature))
               :className (when (= (:id feature) (get-in app [:selection :feature])) "selected")}
          (into-array (map #(dom/td nil (feature %)) cols))))

(defn features-table [app options]
  (let [layer (selected-layer app)
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
                                           (map #(feature-row % cols app) features))))))))

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

(defn feature-style [feature]
  (om/component
    (dom/div #js {:id "styles"}
             (dom/h2 nil "Styles")
             (dom/h1 nil (str (:id feature))))))


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


(defn carto-crayon-ui [app]
  (reify
    om/IRender
    (render [_ owner]
      (dom/div nil nil
               (dom/header #js {:className "auth"})

               (let [feature (selected-feature app)]
                 (dom/div #js {:id "data"}
                          (om/build layer-list app)
                          (om/build features-table app)
                          (om/build feature-style feature)))

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

