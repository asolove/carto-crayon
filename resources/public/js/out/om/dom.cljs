(ns om.dom
  (:refer-clojure :exclude [map meta time])
  (:require-macros [om.dom :as dom]))

(dom/gen-react-dom-fns)

(defn wrap-form-element [ctor]
  (js/React.createClass
    #js
    {:getInitialState
     (fn []
       (this-as this
         #js {:value (aget (.-props this) "value")}))
     :onChange
     (fn [e]
       (this-as this
         (let [handler (aget (.-props this) "onChange")]
           (when-not (nil? handler)
             (handler e)
             (.setState this #js {:value (.. e -target -value)})))))
     :componentWillReceiveProps
     (fn [new-props]
       (this-as this
         (.setState this #js {:value (aget new-props "value")})))
     :render
     (fn []
       (this-as this
         (.transferPropsTo this
           ;; NOTE: if switch to macro we remove a closure allocation
           (ctor #js {:value (aget (.-state this) "value")
                      :onChange (aget this "onChange")}))))}))

(def input (wrap-form-element js/React.DOM.input))

(def textarea (wrap-form-element js/React.DOM.textarea))

(def option (wrap-form-element js/React.DOM.option))

(defn render [component el]
  (js/React.renderComponent component el))
