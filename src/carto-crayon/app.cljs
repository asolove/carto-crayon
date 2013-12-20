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
;; Util

(defn- with-id
  [m]
  (assoc m :id (guid)))

(defn- value-from-node
  [owner field]
  (let [n (om/get-node owner field)
        v (-> n .-value clojure.string/trim)]
    (when-not (empty? v)
      [v n])))

(defn- clear-nodes!
  [& nodes]
  (doall (map #(set! (.-value %) "") nodes)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Components

(def app-state
  (atom {:selection {:layer "States"}
         :layers [{:name "Districts" :features [{:id "CA-1" :Obama 10 :Romney 20}]}
                  {:name "States" :features [{:id "MN" :Obama 10 :Romney 14}]}]}))

(defn comment
  "Having some trouble getting the markdown to display properly. I've
   tried with:

    (dom/span {:dangerouslySetInnerHTML (js-obj {:__html raw-markup})})

   and other variants...but haven't gotten anywhere."

  [{:keys [author text] :as c} opts]
  (om/component
   (let [raw-markup (md/mdToHtml text)]
     (dom/div #js {:className "comment"}
              (dom/h2 #js {:className "commentAuthor"} author)
              raw-markup))))

(defn comment-list [app opts]
  (om/component
   (dom/div #js {:className "commentList"}
            (into-array
             (map #(om/build comment app
                             {:path [:comments %]
                              :key :id})
                  (range (count (:comments app))))))))

(defn save-comment!
  [comment app opts]
  (do (om/update! app [:comments]
                  (fn [comments] (conj comments (assoc comment :id (guid)))))))

(defn handle-submit
  [e app owner opts]
  (let [[author author-node] (value-from-node owner "author")
        [text text-node]     (value-from-node owner "text")]
    (when (and author text)
      (save-comment! {:author author :text text} app opts)
      (clear-nodes! author-node text-node))
    false))

(defn comment-form
  [app opts]
  (reify
    om/IRender
    (render [_ owner]
      (dom/form
       #js {:className "commentForm" :onSubmit #(handle-submit % app owner opts)}
       (dom/input #js {:type "text" :placeholder "Your Name" :ref "author"})
       (dom/input #js {:type "text" :placeholder "Say something..." :ref "text"})
       (dom/input #js {:type "submit" :value "Post"})))))

(defn comment-box [app opts]
  (reify
    om/IInitState
    (init-state [_ owner]
      (om/update! app #(assoc % :comments [])))
    om/IRender
    (render [_ owner]
      (dom/div
       #js {:className "commentBox"}
       (dom/h1 nil "Comments")
       (om/build comment-list app)
       (om/build comment-form app {:opts opts})))))

(defn get-layer [app name]
  (first (filter #(= name (:name %)) (:layers app))))

(defn columns [features]
  (into #{} (apply concat (map keys features))))

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

(defn select-layer [app layer]
  (om/update! app [:selection :layer]
              (constantly layer)))

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
               (dom/div #js {:id "map"}
                        (dom/h2 nil "Map"))))))

(om/root app-state carto-crayon-ui (.getElementById js/document "app"))
