(ns carto-crayon.app
  (:require-macros [cljs.core.async.macros :refer [go alt!]]
                   [secretary.macros :refer [defroute]])
  (:require [goog.events :as events]
            [cljs.core.async :refer [put! <! >! chan timeout]]
            [markdown.core :as md]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [secretary.core :as secretary]
            [carto-crayon.utils :refer [guid]])
  (:import [goog History]
           [goog.history EventType]))

(enable-console-print!)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Data

(def app-state
  (atom {:selection {:layer "States"}
         :layers [{:name "Districts" :features [{:id "CA-1" :Obama 10 :Romney 20}]}
                  {:name "States" :features [{:id "MN" :Obama 10 :Romney 14}]}]}))

(defn get-layer [app name]
  (first (filter #(= name (:name %)) (:layers app))))

(defn columns [features]
  (into #{} (apply concat (map keys features))))

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

(defn map-view [app]
  (reify
    om/IDidMount
    (did-mount [_ _ _]
      (let [map (L.mapbox.map "map" "imthepusher.gjbmo715")]))
    om/IRender
    (render [_ owner]
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

(om/root app-state carto-crayon-ui (.getElementById js/document "app"))
