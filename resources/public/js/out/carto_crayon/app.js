// Compiled by ClojureScript 0.0-2127
goog.provide('carto_crayon.app');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs_http.client');
goog.require('cljs_http.client');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_.call(null);
carto_crayon.app.empty_state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selected","selected",2205476365),false,new cljs.core.Keyword(null,"layers","layers",4199139508),cljs.core.PersistentVector.EMPTY], null);
carto_crayon.app.columns = (function columns(features){return cljs.core.disj.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,(function (p1__15068_SHARP_){return cljs.core.keys.call(null,new cljs.core.Keyword(null,"properties","properties",4382818469).cljs$core$IFn$_invoke$arity$1(p1__15068_SHARP_));
}),features))));
});
carto_crayon.app.select_layer = (function select_layer(app,layer){return om.core.update_BANG_.call(null,app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected","selected",2205476365)], null),cljs.core.constantly.call(null,layer));
});
carto_crayon.app.select_features = (function select_features(layer,f,add){var test = (cljs.core.truth_(add)?(function (p1__15069_SHARP_){var or__3391__auto__ = new cljs.core.Keyword(null,"selected","selected",2205476365).cljs$core$IFn$_invoke$arity$1(p1__15069_SHARP_);if(cljs.core.truth_(or__3391__auto__))
{return or__3391__auto__;
} else
{return f.call(null,p1__15069_SHARP_);
}
}):f);var op = ((function (test){
return (function (p1__15070_SHARP_){if(cljs.core.truth_(test.call(null,p1__15070_SHARP_)))
{return cljs.core.assoc;
} else
{return cljs.core.dissoc;
}
});})(test))
;return om.core.update_BANG_.call(null,layer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"features","features",723244975)], null),(function (features){return cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__15071_SHARP_){return op.call(null,p1__15071_SHARP_).call(null,p1__15071_SHARP_,new cljs.core.Keyword(null,"selected","selected",2205476365),true);
}),features));
}));
});
carto_crayon.app.select_all_features = (function select_all_features(layer){return carto_crayon.app.select_features.call(null,layer,cljs.core.constantly.call(null,true),true);
});
carto_crayon.app.toggle_feature_selection = (function toggle_feature_selection(layer,feature,add){return carto_crayon.app.select_features.call(null,layer,(function (p1__15072_SHARP_){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(feature),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__15072_SHARP_)))
{return cljs.core.not.call(null,new cljs.core.Keyword(null,"selected","selected",2205476365).cljs$core$IFn$_invoke$arity$1(p1__15072_SHARP_));
} else
{if(cljs.core.truth_(add))
{return new cljs.core.Keyword(null,"selected","selected",2205476365).cljs$core$IFn$_invoke$arity$1(p1__15072_SHARP_);
} else
{return false;
}
}
}),false);
});
carto_crayon.app.set_feature_style_config = (function set_feature_style_config(features,style,prop,value){return om.core.update_BANG_.call(null,features,(function (fs){return cljs.core.vec.call(null,cljs.core.map.call(null,(function (f){if(cljs.core.truth_(new cljs.core.Keyword(null,"selected","selected",2205476365).cljs$core$IFn$_invoke$arity$1(f)))
{return cljs.core.assoc_in.call(null,f,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"styles","styles",4417096788),style,prop], null),value);
} else
{return f;
}
}),fs));
}));
});
carto_crayon.app.set_feature_style_text = (function set_feature_style_text(features,style,text){return carto_crayon.app.set_feature_style_config.call(null,features,style,new cljs.core.Keyword(null,"text","text",1017460895),text);
});
carto_crayon.app.event_adds_to_selection_QMARK_ = (function event_adds_to_selection_QMARK_(e){var or__3391__auto__ = e.shiftKey;if(cljs.core.truth_(or__3391__auto__))
{return or__3391__auto__;
} else
{return e.metaKey;
}
});
carto_crayon.app.ensure_feature_visible = (function ensure_feature_visible(node){var parent = document.getElementById("features");var parent_top = parent.scrollTop;var parent_bottom = (parent_top + parent.offsetHeight);var node_top = node.offsetTop;if(((node_top < parent_top)) || ((node_top > parent_bottom)))
{return (parent["scrollTop"] = node_top);
} else
{return null;
}
});
carto_crayon.app.css_horizontal_gradient = (function css_horizontal_gradient(left,right){return [cljs.core.str("-webkit-linear-gradient(left, "),cljs.core.str(left),cljs.core.str(", "),cljs.core.str(right),cljs.core.str(")")].join('');
});
carto_crayon.app.layer_list_item = (function layer_list_item(app,p__15073){var map__15078 = p__15073;var map__15078__$1 = ((cljs.core.seq_QMARK_.call(null,map__15078))?cljs.core.apply.call(null,cljs.core.hash_map,map__15078):map__15078);var n = cljs.core.get.call(null,map__15078__$1,new cljs.core.Keyword(null,"n","n",1013904352));if(typeof carto_crayon.app.t15079 !== 'undefined')
{} else
{
/**
* @constructor
*/
carto_crayon.app.t15079 = (function (n,map__15078,p__15073,app,layer_list_item,meta15080){
this.n = n;
this.map__15078 = map__15078;
this.p__15073 = p__15073;
this.app = app;
this.layer_list_item = layer_list_item;
this.meta15080 = meta15080;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
carto_crayon.app.t15079.cljs$lang$type = true;
carto_crayon.app.t15079.cljs$lang$ctorStr = "carto-crayon.app/t15079";
carto_crayon.app.t15079.cljs$lang$ctorPrWriter = (function (this__3940__auto__,writer__3941__auto__,opt__3942__auto__){return cljs.core._write.call(null,writer__3941__auto__,"carto-crayon.app/t15079");
});
carto_crayon.app.t15079.prototype.om$core$IRender$ = true;
carto_crayon.app.t15079.prototype.om$core$IRender$render$arity$2 = (function (this__9095__auto__,___9096__auto__){var self__ = this;
var this__9095__auto____$1 = this;var layer = cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layers","layers",4199139508),self__.n], null));var selected = cljs.core._EQ_.call(null,self__.n,new cljs.core.Keyword(null,"selected","selected",2205476365).cljs$core$IFn$_invoke$arity$1(self__.app));return React.DOM.li({"onClick": (function (){return carto_crayon.app.select_layer.call(null,self__.app,self__.n);
}), "className": ((selected)?"selected":null)},new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(layer));
});
carto_crayon.app.t15079.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15081){var self__ = this;
var _15081__$1 = this;return self__.meta15080;
});
carto_crayon.app.t15079.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15081,meta15080__$1){var self__ = this;
var _15081__$1 = this;return (new carto_crayon.app.t15079(self__.n,self__.map__15078,self__.p__15073,self__.app,self__.layer_list_item,meta15080__$1));
});
carto_crayon.app.__GT_t15079 = (function __GT_t15079(n__$1,map__15078__$2,p__15073__$1,app__$1,layer_list_item__$1,meta15080){return (new carto_crayon.app.t15079(n__$1,map__15078__$2,p__15073__$1,app__$1,layer_list_item__$1,meta15080));
});
}
return (new carto_crayon.app.t15079(n,map__15078__$1,p__15073,app,layer_list_item,null));
});
carto_crayon.app.layers_list = (function layers_list(app){if(typeof carto_crayon.app.t15086 !== 'undefined')
{} else
{
/**
* @constructor
*/
carto_crayon.app.t15086 = (function (app,layers_list,meta15087){
this.app = app;
this.layers_list = layers_list;
this.meta15087 = meta15087;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
carto_crayon.app.t15086.cljs$lang$type = true;
carto_crayon.app.t15086.cljs$lang$ctorStr = "carto-crayon.app/t15086";
carto_crayon.app.t15086.cljs$lang$ctorPrWriter = (function (this__3940__auto__,writer__3941__auto__,opt__3942__auto__){return cljs.core._write.call(null,writer__3941__auto__,"carto-crayon.app/t15086");
});
carto_crayon.app.t15086.prototype.om$core$IRender$ = true;
carto_crayon.app.t15086.prototype.om$core$IRender$render$arity$2 = (function (this__9095__auto__,___9096__auto__){var self__ = this;
var this__9095__auto____$1 = this;var selected = new cljs.core.Keyword(null,"selected","selected",2205476365).cljs$core$IFn$_invoke$arity$1(self__.app);return React.DOM.div({"id": "layers"},React.DOM.h2(null,"Layers"),React.DOM.ol(null,cljs.core.into_array.call(null,cljs.core.map.call(null,(function (p1__15082_SHARP_){return om.core.build.call(null,carto_crayon.app.layer_list_item,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n","n",1013904352),p1__15082_SHARP_], null)], null));
}),cljs.core.range.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"layers","layers",4199139508).cljs$core$IFn$_invoke$arity$1(self__.app)))))));
});
carto_crayon.app.t15086.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15088){var self__ = this;
var _15088__$1 = this;return self__.meta15087;
});
carto_crayon.app.t15086.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15088,meta15087__$1){var self__ = this;
var _15088__$1 = this;return (new carto_crayon.app.t15086(self__.app,self__.layers_list,meta15087__$1));
});
carto_crayon.app.__GT_t15086 = (function __GT_t15086(app__$1,layers_list__$1,meta15087){return (new carto_crayon.app.t15086(app__$1,layers_list__$1,meta15087));
});
}
return (new carto_crayon.app.t15086(app,layers_list,null));
});
carto_crayon.app.feature_cell = (function feature_cell(feature,property){var value = cljs.core.get_in.call(null,feature,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"properties","properties",4382818469),property], null));var number = typeof value === 'number';var formatted_value = ((number)?value.toFixed(2):value);var className = ((number)?"number":"text");return React.DOM.td({"className": className},formatted_value);
});
carto_crayon.app.feature_row = (function feature_row(feature,p__15090){var map__15095 = p__15090;var map__15095__$1 = ((cljs.core.seq_QMARK_.call(null,map__15095))?cljs.core.apply.call(null,cljs.core.hash_map,map__15095):map__15095);var select = cljs.core.get.call(null,map__15095__$1,new cljs.core.Keyword(null,"select","select",4402849902));var cols = cljs.core.get.call(null,map__15095__$1,new cljs.core.Keyword(null,"cols","cols",1016963685));if(typeof carto_crayon.app.t15096 !== 'undefined')
{} else
{
/**
* @constructor
*/
carto_crayon.app.t15096 = (function (cols,select,map__15095,p__15090,feature,feature_row,meta15097){
this.cols = cols;
this.select = select;
this.map__15095 = map__15095;
this.p__15090 = p__15090;
this.feature = feature;
this.feature_row = feature_row;
this.meta15097 = meta15097;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
carto_crayon.app.t15096.cljs$lang$type = true;
carto_crayon.app.t15096.cljs$lang$ctorStr = "carto-crayon.app/t15096";
carto_crayon.app.t15096.cljs$lang$ctorPrWriter = (function (this__3940__auto__,writer__3941__auto__,opt__3942__auto__){return cljs.core._write.call(null,writer__3941__auto__,"carto-crayon.app/t15096");
});
carto_crayon.app.t15096.prototype.om$core$IDidUpdate$ = true;
carto_crayon.app.t15096.prototype.om$core$IDidUpdate$did_update$arity$5 = (function (_,___$1,prev,___$2,node){var self__ = this;
var ___$3 = this;var prev_props = prev.__om_value;if(cljs.core.truth_((function (){var and__3379__auto__ = new cljs.core.Keyword(null,"selected","selected",2205476365).cljs$core$IFn$_invoke$arity$1(self__.feature);if(cljs.core.truth_(and__3379__auto__))
{return cljs.core.not.call(null,new cljs.core.Keyword(null,"selected","selected",2205476365).cljs$core$IFn$_invoke$arity$1(prev_props));
} else
{return and__3379__auto__;
}
})()))
{return carto_crayon.app.ensure_feature_visible.call(null,node);
} else
{return null;
}
});
carto_crayon.app.t15096.prototype.om$core$IRender$ = true;
carto_crayon.app.t15096.prototype.om$core$IRender$render$arity$2 = (function (_,owner){var self__ = this;
var ___$1 = this;return React.DOM.tr({"className": (cljs.core.truth_(self__.feature.call(null,new cljs.core.Keyword(null,"selected","selected",2205476365)))?"selected":null), "onClick": (function (p1__15089_SHARP_){return self__.select.call(null,self__.feature,carto_crayon.app.event_adds_to_selection_QMARK_.call(null,p1__15089_SHARP_));
})},cljs.core.into_array.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.td(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(self__.feature))], null),cljs.core.map.call(null,cljs.core.partial.call(null,carto_crayon.app.feature_cell,self__.feature),self__.cols))));
});
carto_crayon.app.t15096.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15098){var self__ = this;
var _15098__$1 = this;return self__.meta15097;
});
carto_crayon.app.t15096.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15098,meta15097__$1){var self__ = this;
var _15098__$1 = this;return (new carto_crayon.app.t15096(self__.cols,self__.select,self__.map__15095,self__.p__15090,self__.feature,self__.feature_row,meta15097__$1));
});
carto_crayon.app.__GT_t15096 = (function __GT_t15096(cols__$1,select__$1,map__15095__$2,p__15090__$1,feature__$1,feature_row__$1,meta15097){return (new carto_crayon.app.t15096(cols__$1,select__$1,map__15095__$2,p__15090__$1,feature__$1,feature_row__$1,meta15097));
});
}
return (new carto_crayon.app.t15096(cols,select,map__15095__$1,p__15090,feature,feature_row,null));
});
carto_crayon.app.features_list = (function features_list(layer,opts){if(typeof carto_crayon.app.t15104 !== 'undefined')
{} else
{
/**
* @constructor
*/
carto_crayon.app.t15104 = (function (opts,layer,features_list,meta15105){
this.opts = opts;
this.layer = layer;
this.features_list = features_list;
this.meta15105 = meta15105;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
carto_crayon.app.t15104.cljs$lang$type = true;
carto_crayon.app.t15104.cljs$lang$ctorStr = "carto-crayon.app/t15104";
carto_crayon.app.t15104.cljs$lang$ctorPrWriter = (function (this__3940__auto__,writer__3941__auto__,opt__3942__auto__){return cljs.core._write.call(null,writer__3941__auto__,"carto-crayon.app/t15104");
});
carto_crayon.app.t15104.prototype.om$core$IRender$ = true;
carto_crayon.app.t15104.prototype.om$core$IRender$render$arity$2 = (function (this__9095__auto__,___9096__auto__){var self__ = this;
var this__9095__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"id": "features"},(cljs.core.truth_(self__.layer)?React.DOM.div({"className": "select-all"},om.dom.input.call(null,{"onClick": (function (){return carto_crayon.app.select_all_features.call(null,self__.layer);
}), "value": cljs.core.every_QMARK_.call(null,new cljs.core.Keyword(null,"selected","selected",2205476365),new cljs.core.Keyword(null,"features","features",723244975).cljs$core$IFn$_invoke$arity$1(self__.layer)), "type": "checkbox", "id": "select-all-features"}),React.DOM.label({"htmlFor": "select-all-features"},"Select all features")):null),React.DOM.h2(null,"Features"),(cljs.core.truth_(self__.layer)?(function (){var features = new cljs.core.Keyword(null,"features","features",723244975).cljs$core$IFn$_invoke$arity$1(self__.layer);var cols = carto_crayon.app.columns.call(null,features);return React.DOM.table(null,React.DOM.thead(null,React.DOM.tr(null,cljs.core.into_array.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.th(null,"id")], null),cljs.core.map.call(null,(function (p1__15099_SHARP_){return React.DOM.th(null,cljs.core.name.call(null,p1__15099_SHARP_));
}),cols))))),React.DOM.tbody(null,cljs.core.into_array.call(null,cljs.core.map.call(null,(function (p1__15100_SHARP_){return om.core.build.call(null,carto_crayon.app.feature_row,self__.layer,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",1017337751),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"features","features",723244975),p1__15100_SHARP_], null),new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cols","cols",1016963685),cols,new cljs.core.Keyword(null,"select","select",4402849902),cljs.core.partial.call(null,carto_crayon.app.toggle_feature_selection,self__.layer)], null)], null));
}),cljs.core.range.call(null,cljs.core.count.call(null,features))))));
})():React.DOM.h2(null,"No layer"))),om.core.build.call(null,carto_crayon.app.feature_styles_list,self__.layer,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",1017337751),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"features","features",723244975)], null)], null)));
});
carto_crayon.app.t15104.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15106){var self__ = this;
var _15106__$1 = this;return self__.meta15105;
});
carto_crayon.app.t15104.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15106,meta15105__$1){var self__ = this;
var _15106__$1 = this;return (new carto_crayon.app.t15104(self__.opts,self__.layer,self__.features_list,meta15105__$1));
});
carto_crayon.app.__GT_t15104 = (function __GT_t15104(opts__$1,layer__$1,features_list__$1,meta15105){return (new carto_crayon.app.t15104(opts__$1,layer__$1,features_list__$1,meta15105));
});
}
return (new carto_crayon.app.t15104(opts,layer,features_list,null));
});
carto_crayon.app.default_styles = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fillColor","fillColor",4166989586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",1017460895),"blue"], null),new cljs.core.Keyword(null,"color","color",1108746965),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",1017460895),"blue"], null),new cljs.core.Keyword(null,"weight","weight",4517279210),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",1017460895),1], null),new cljs.core.Keyword(null,"opacity","opacity",4041665405),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",1017460895),0.5], null),new cljs.core.Keyword(null,"fillOpacity","fillOpacity",960226426),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",1017460895),0.2], null)], null);
carto_crayon.app.style_types = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fillColor","fillColor",4166989586),new cljs.core.Keyword(null,"color","color",1108746965),new cljs.core.Keyword(null,"color","color",1108746965),new cljs.core.Keyword(null,"color","color",1108746965),new cljs.core.Keyword(null,"weight","weight",4517279210),new cljs.core.Keyword(null,"length","length",4202507864),new cljs.core.Keyword(null,"opacity","opacity",4041665405),new cljs.core.Keyword(null,"percent","percent",4629944247),new cljs.core.Keyword(null,"fillOpacity","fillOpacity",960226426),new cljs.core.Keyword(null,"percent","percent",4629944247)], null);
carto_crayon.app.formula_QMARK_ = (function formula_QMARK_(config){return cljs.core._EQ_.call(null,"=",cljs.core.get.call(null,new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(config),0));
});
carto_crayon.app.style_scale = (function style_scale(config){return (function (value){var domain_size = (new cljs.core.Keyword(null,"domain-max","domain-max",4063813709).cljs$core$IFn$_invoke$arity$1(config) - new cljs.core.Keyword(null,"domain-min","domain-min",4063813947).cljs$core$IFn$_invoke$arity$1(config));var scaled_value = (function (){var x__3710__auto__ = 1;var y__3711__auto__ = (function (){var x__3703__auto__ = 0;var y__3704__auto__ = ((value - new cljs.core.Keyword(null,"domain-min","domain-min",4063813947).cljs$core$IFn$_invoke$arity$1(config)) / domain_size);return ((x__3703__auto__ > y__3704__auto__) ? x__3703__auto__ : y__3704__auto__);
})();return ((x__3710__auto__ < y__3711__auto__) ? x__3710__auto__ : y__3711__auto__);
})();var color = Chromath.towards(new cljs.core.Keyword(null,"range-min","range-min",4556087604).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"range-max","range-max",4556087366).cljs$core$IFn$_invoke$arity$1(config),scaled_value);if(cljs.core.truth_((function (){var and__3379__auto__ = color;if(cljs.core.truth_(and__3379__auto__))
{return !(typeof color === 'string');
} else
{return and__3379__auto__;
}
})()))
{return color.toRGBAString();
} else
{return null;
}
});
});
carto_crayon.app.eval = (function eval(config,feature){var formula = new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(config).substr(1);return cljs.core.get_in.call(null,feature,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"properties","properties",4382818469),formula], null));
});
carto_crayon.app.style_value = (function style_value(config,feature){if(carto_crayon.app.formula_QMARK_.call(null,config))
{var scale = carto_crayon.app.style_scale.call(null,config);var val = carto_crayon.app.eval.call(null,config,feature);return scale.call(null,val);
} else
{return new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(config);
}
});
carto_crayon.app.feature_color_scale_input = (function feature_color_scale_input(features,style,config,prop){return om.dom.input.call(null,{"onChange": (function (e){return carto_crayon.app.set_feature_style_config.call(null,features,style,prop,e.target.value);
}), "value": prop.call(null,config), "className": [cljs.core.str("style-"),cljs.core.str(cljs.core.name.call(null,prop))].join('')});
});
carto_crayon.app.feature_color_scale_row = (function feature_color_scale_row(features,style,config){var input = (function (p1__15107_SHARP_){return carto_crayon.app.feature_color_scale_input.call(null,features,style,config,p1__15107_SHARP_);
});return React.DOM.tr({"className": [cljs.core.str("color-scale "),cljs.core.str(((!(carto_crayon.app.formula_QMARK_.call(null,config)))?"hidden":null))].join('')},React.DOM.td({"colSpan": 3},input.call(null,new cljs.core.Keyword(null,"domain-min","domain-min",4063813947)),input.call(null,new cljs.core.Keyword(null,"domain-max","domain-max",4063813709)),React.DOM.span({"style": {"background": carto_crayon.app.css_horizontal_gradient.call(null,carto_crayon.app.style_scale.call(null,config).call(null,new cljs.core.Keyword(null,"domain-min","domain-min",4063813947).cljs$core$IFn$_invoke$arity$1(config)),carto_crayon.app.style_scale.call(null,config).call(null,new cljs.core.Keyword(null,"domain-max","domain-max",4063813709).cljs$core$IFn$_invoke$arity$1(config)))}, "className": "color-preview"}),input.call(null,new cljs.core.Keyword(null,"range-min","range-min",4556087604)),input.call(null,new cljs.core.Keyword(null,"range-max","range-max",4556087366))));
});
carto_crayon.app.feature_color_row = (function feature_color_row(features,p__15108){var vec__15110 = p__15108;var prop = cljs.core.nth.call(null,vec__15110,0,null);var config = cljs.core.nth.call(null,vec__15110,1,null);var field_name = [cljs.core.str(prop),cljs.core.str("-field")].join('');var bgColor = carto_crayon.app.style_value.call(null,config,cljs.core.first.call(null,features));var text = new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(config);var summary = React.DOM.tr(null,React.DOM.th(null,React.DOM.label({"htmlFor": field_name},cljs.core.name.call(null,prop))),React.DOM.td(null,om.dom.input.call(null,{"onChange": ((function (field_name,bgColor,text){
return (function (e){return carto_crayon.app.set_feature_style_text.call(null,features,prop,e.target.value);
});})(field_name,bgColor,text))
, "value": text, "id": field_name})),React.DOM.td(null,React.DOM.span({"style": {"backgroundColor": bgColor}, "className": "swatch"}," ")));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [summary,carto_crayon.app.feature_color_scale_row.call(null,features,prop,config)], null);
});
carto_crayon.app.feature_other_row = (function feature_other_row(features,p__15111){var vec__15113 = p__15111;var prop = cljs.core.nth.call(null,vec__15113,0,null);var config = cljs.core.nth.call(null,vec__15113,1,null);var field_name = [cljs.core.str(prop),cljs.core.str("-field")].join('');var text = new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(config);return React.DOM.tr(null,React.DOM.th(null,React.DOM.label({"htmlFor": field_name},cljs.core.name.call(null,prop))),React.DOM.td(null,om.dom.input.call(null,{"onChange": (function (e){return carto_crayon.app.set_feature_style_text.call(null,features,prop,e.target.value);
}), "value": text, "id": field_name})));
});
carto_crayon.app.feature_style_row = (function feature_style_row(features,p__15114){var vec__15116 = p__15114;var prop = cljs.core.nth.call(null,vec__15116,0,null);var value = cljs.core.nth.call(null,vec__15116,1,null);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"color","color",1108746965),carto_crayon.app.style_types.call(null,prop)))
{return carto_crayon.app.feature_color_row.call(null,features,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prop,value], null));
} else
{return carto_crayon.app.feature_other_row.call(null,features,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prop,value], null));
}
});
carto_crayon.app.feature_styles_list = (function feature_styles_list(features){if(typeof carto_crayon.app.t15121 !== 'undefined')
{} else
{
/**
* @constructor
*/
carto_crayon.app.t15121 = (function (features,feature_styles_list,meta15122){
this.features = features;
this.feature_styles_list = feature_styles_list;
this.meta15122 = meta15122;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
carto_crayon.app.t15121.cljs$lang$type = true;
carto_crayon.app.t15121.cljs$lang$ctorStr = "carto-crayon.app/t15121";
carto_crayon.app.t15121.cljs$lang$ctorPrWriter = (function (this__3940__auto__,writer__3941__auto__,opt__3942__auto__){return cljs.core._write.call(null,writer__3941__auto__,"carto-crayon.app/t15121");
});
carto_crayon.app.t15121.prototype.om$core$IRender$ = true;
carto_crayon.app.t15121.prototype.om$core$IRender$render$arity$2 = (function (this__9095__auto__,___9096__auto__){var self__ = this;
var this__9095__auto____$1 = this;var selected_features = cljs.core.filter.call(null,new cljs.core.Keyword(null,"selected","selected",2205476365),self__.features);return React.DOM.div({"id": "styles"},React.DOM.h2(null,"Styles"),((cljs.core.empty_QMARK_.call(null,selected_features))?React.DOM.p(null,"Select features to style"):React.DOM.table(null,cljs.core.into_array.call(null,cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__15117_SHARP_){return carto_crayon.app.feature_style_row.call(null,self__.features,p1__15117_SHARP_);
}),new cljs.core.Keyword(null,"styles","styles",4417096788).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,selected_features))))))));
});
carto_crayon.app.t15121.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15123){var self__ = this;
var _15123__$1 = this;return self__.meta15122;
});
carto_crayon.app.t15121.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15123,meta15122__$1){var self__ = this;
var _15123__$1 = this;return (new carto_crayon.app.t15121(self__.features,self__.feature_styles_list,meta15122__$1));
});
carto_crayon.app.__GT_t15121 = (function __GT_t15121(features__$1,feature_styles_list__$1,meta15122){return (new carto_crayon.app.t15121(features__$1,feature_styles_list__$1,meta15122));
});
}
return (new carto_crayon.app.t15121(features,feature_styles_list,null));
});
carto_crayon.app.resolve_style = (function resolve_style(feature,p__15124){var vec__15126 = p__15124;var style = cljs.core.nth.call(null,vec__15126,0,null);var config = cljs.core.nth.call(null,vec__15126,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [style,carto_crayon.app.style_value.call(null,config,feature)], null);
});
carto_crayon.app.resolve_styles = (function resolve_styles(feature){var styles = new cljs.core.Keyword(null,"styles","styles",4417096788).cljs$core$IFn$_invoke$arity$1(feature);var resolved = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.partial.call(null,carto_crayon.app.resolve_style,feature),styles));return cljs.core.clj__GT_js.call(null,resolved);
});
carto_crayon.app.map_feature = (function map_feature(feature,p__15128){var map__15133 = p__15128;var map__15133__$1 = ((cljs.core.seq_QMARK_.call(null,map__15133))?cljs.core.apply.call(null,cljs.core.hash_map,map__15133):map__15133);var select = cljs.core.get.call(null,map__15133__$1,new cljs.core.Keyword(null,"select","select",4402849902));var group = cljs.core.get.call(null,map__15133__$1,new cljs.core.Keyword(null,"group","group",1112533489));if(typeof carto_crayon.app.t15134 !== 'undefined')
{} else
{
/**
* @constructor
*/
carto_crayon.app.t15134 = (function (group,select,map__15133,p__15128,feature,map_feature,meta15135){
this.group = group;
this.select = select;
this.map__15133 = map__15133;
this.p__15128 = p__15128;
this.feature = feature;
this.map_feature = map_feature;
this.meta15135 = meta15135;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
carto_crayon.app.t15134.cljs$lang$type = true;
carto_crayon.app.t15134.cljs$lang$ctorStr = "carto-crayon.app/t15134";
carto_crayon.app.t15134.cljs$lang$ctorPrWriter = (function (this__3940__auto__,writer__3941__auto__,opt__3942__auto__){return cljs.core._write.call(null,writer__3941__auto__,"carto-crayon.app/t15134");
});
carto_crayon.app.t15134.prototype.om$core$IRender$ = true;
carto_crayon.app.t15134.prototype.om$core$IRender$render$arity$2 = (function (_,owner){var self__ = this;
var ___$1 = this;return React.DOM.span(null,null);
});
carto_crayon.app.t15134.prototype.om$core$IDidUpdate$ = true;
carto_crayon.app.t15134.prototype.om$core$IDidUpdate$did_update$arity$5 = (function (_,owner,___$1,___$2,___$3){var self__ = this;
var ___$4 = this;om.core.get_state.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feature-layer","feature-layer",2700396332)], null)).setStyle(carto_crayon.app.resolve_styles.call(null,self__.feature));
return om.core.get_state.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feature-layer","feature-layer",2700396332)], null)).eachLayer((function (layer){if(cljs.core.truth_(layer._container))
{var classList = layer._path.classList;if(cljs.core.truth_(new cljs.core.Keyword(null,"selected","selected",2205476365).cljs$core$IFn$_invoke$arity$1(self__.feature)))
{return classList.add("selected");
} else
{return classList.remove("selected");
}
} else
{return null;
}
}));
});
carto_crayon.app.t15134.prototype.om$core$IInitState$ = true;
carto_crayon.app.t15134.prototype.om$core$IInitState$init_state$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;var feature_layer = L.geoJson.call(null,new cljs.core.Keyword(null,"geometry","geometry",2859924452).cljs$core$IFn$_invoke$arity$1(self__.feature));feature_layer.on("click",(function (p1__15127_SHARP_){return self__.select.call(null,self__.feature,carto_crayon.app.event_adds_to_selection_QMARK_.call(null,p1__15127_SHARP_.originalEvent));
}));
self__.group.addLayer(feature_layer);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"feature-layer","feature-layer",2700396332),feature_layer], null);
});
carto_crayon.app.t15134.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15136){var self__ = this;
var _15136__$1 = this;return self__.meta15135;
});
carto_crayon.app.t15134.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15136,meta15135__$1){var self__ = this;
var _15136__$1 = this;return (new carto_crayon.app.t15134(self__.group,self__.select,self__.map__15133,self__.p__15128,self__.feature,self__.map_feature,meta15135__$1));
});
carto_crayon.app.__GT_t15134 = (function __GT_t15134(group__$1,select__$1,map__15133__$2,p__15128__$1,feature__$1,map_feature__$1,meta15135){return (new carto_crayon.app.t15134(group__$1,select__$1,map__15133__$2,p__15128__$1,feature__$1,map_feature__$1,meta15135));
});
}
return (new carto_crayon.app.t15134(group,select,map__15133__$1,p__15128,feature,map_feature,null));
});
carto_crayon.app.map_layer = (function map_layer(layer,p__15138){var map__15143 = p__15138;var map__15143__$1 = ((cljs.core.seq_QMARK_.call(null,map__15143))?cljs.core.apply.call(null,cljs.core.hash_map,map__15143):map__15143);var leaflet_map = cljs.core.get.call(null,map__15143__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",4353500414));if(typeof carto_crayon.app.t15144 !== 'undefined')
{} else
{
/**
* @constructor
*/
carto_crayon.app.t15144 = (function (leaflet_map,map__15143,p__15138,layer,map_layer,meta15145){
this.leaflet_map = leaflet_map;
this.map__15143 = map__15143;
this.p__15138 = p__15138;
this.layer = layer;
this.map_layer = map_layer;
this.meta15145 = meta15145;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
carto_crayon.app.t15144.cljs$lang$type = true;
carto_crayon.app.t15144.cljs$lang$ctorStr = "carto-crayon.app/t15144";
carto_crayon.app.t15144.cljs$lang$ctorPrWriter = (function (this__3940__auto__,writer__3941__auto__,opt__3942__auto__){return cljs.core._write.call(null,writer__3941__auto__,"carto-crayon.app/t15144");
});
carto_crayon.app.t15144.prototype.om$core$IRender$ = true;
carto_crayon.app.t15144.prototype.om$core$IRender$render$arity$2 = (function (_,owner){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.leaflet_map))
{setTimeout((function (){return om.core.get_state.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feature-group","feature-group",2696276058)], null)).addTo(self__.leaflet_map);
}),100);
} else
{}
return React.DOM.div(null,(function (){var feature_group = om.core.get_state.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feature-group","feature-group",2696276058)], null));var select = cljs.core.partial.call(null,carto_crayon.app.toggle_feature_selection,self__.layer);return cljs.core.into_array.call(null,cljs.core.map.call(null,(function (p1__15137_SHARP_){return om.core.build.call(null,carto_crayon.app.map_feature,self__.layer,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",1017337751),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"features","features",723244975),p1__15137_SHARP_], null),new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"group","group",1112533489),feature_group,new cljs.core.Keyword(null,"select","select",4402849902),select], null)], null));
}),cljs.core.range.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"features","features",723244975).cljs$core$IFn$_invoke$arity$1(self__.layer)))));
})());
});
carto_crayon.app.t15144.prototype.om$core$IInitState$ = true;
carto_crayon.app.t15144.prototype.om$core$IInitState$init_state$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"feature-group","feature-group",2696276058),L.featureGroup.call(null)], null);
});
carto_crayon.app.t15144.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15146){var self__ = this;
var _15146__$1 = this;return self__.meta15145;
});
carto_crayon.app.t15144.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15146,meta15145__$1){var self__ = this;
var _15146__$1 = this;return (new carto_crayon.app.t15144(self__.leaflet_map,self__.map__15143,self__.p__15138,self__.layer,self__.map_layer,meta15145__$1));
});
carto_crayon.app.__GT_t15144 = (function __GT_t15144(leaflet_map__$1,map__15143__$2,p__15138__$1,layer__$1,map_layer__$1,meta15145){return (new carto_crayon.app.t15144(leaflet_map__$1,map__15143__$2,p__15138__$1,layer__$1,map_layer__$1,meta15145));
});
}
return (new carto_crayon.app.t15144(leaflet_map,map__15143__$1,p__15138,layer,map_layer,null));
});
carto_crayon.app.map_view = (function map_view(layers){if(typeof carto_crayon.app.t15151 !== 'undefined')
{} else
{
/**
* @constructor
*/
carto_crayon.app.t15151 = (function (layers,map_view,meta15152){
this.layers = layers;
this.map_view = map_view;
this.meta15152 = meta15152;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
carto_crayon.app.t15151.cljs$lang$type = true;
carto_crayon.app.t15151.cljs$lang$ctorStr = "carto-crayon.app/t15151";
carto_crayon.app.t15151.cljs$lang$ctorPrWriter = (function (this__3940__auto__,writer__3941__auto__,opt__3942__auto__){return cljs.core._write.call(null,writer__3941__auto__,"carto-crayon.app/t15151");
});
carto_crayon.app.t15151.prototype.om$core$IRender$ = true;
carto_crayon.app.t15151.prototype.om$core$IRender$render$arity$2 = (function (_,owner){var self__ = this;
var ___$1 = this;return React.DOM.div({"id": "map"},(function (){var leaflet_map = om.core.get_state.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"leaflet-map","leaflet-map",4353500414)], null));return cljs.core.into_array.call(null,cljs.core.map.call(null,(function (p1__15147_SHARP_){return om.core.build.call(null,carto_crayon.app.map_layer,self__.layers,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",1017337751),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15147_SHARP_], null),new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"leaflet-map","leaflet-map",4353500414),leaflet_map], null)], null));
}),cljs.core.range.call(null,cljs.core.count.call(null,self__.layers))));
})());
});
carto_crayon.app.t15151.prototype.om$core$IDidMount$ = true;
carto_crayon.app.t15151.prototype.om$core$IDidMount$did_mount$arity$3 = (function (_,owner,___$1){var self__ = this;
var ___$2 = this;return om.core.set_state_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"leaflet-map","leaflet-map",4353500414)], null),L.mapbox.map.call(null,"map","imthepusher.gjbmo715"));
});
carto_crayon.app.t15151.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15153){var self__ = this;
var _15153__$1 = this;return self__.meta15152;
});
carto_crayon.app.t15151.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15153,meta15152__$1){var self__ = this;
var _15153__$1 = this;return (new carto_crayon.app.t15151(self__.layers,self__.map_view,meta15152__$1));
});
carto_crayon.app.__GT_t15151 = (function __GT_t15151(layers__$1,map_view__$1,meta15152){return (new carto_crayon.app.t15151(layers__$1,map_view__$1,meta15152));
});
}
return (new carto_crayon.app.t15151(layers,map_view,null));
});
carto_crayon.app.carto_crayon_ui = (function carto_crayon_ui(app){if(typeof carto_crayon.app.t15157 !== 'undefined')
{} else
{
/**
* @constructor
*/
carto_crayon.app.t15157 = (function (app,carto_crayon_ui,meta15158){
this.app = app;
this.carto_crayon_ui = carto_crayon_ui;
this.meta15158 = meta15158;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
carto_crayon.app.t15157.cljs$lang$type = true;
carto_crayon.app.t15157.cljs$lang$ctorStr = "carto-crayon.app/t15157";
carto_crayon.app.t15157.cljs$lang$ctorPrWriter = (function (this__3940__auto__,writer__3941__auto__,opt__3942__auto__){return cljs.core._write.call(null,writer__3941__auto__,"carto-crayon.app/t15157");
});
carto_crayon.app.t15157.prototype.om$core$IRender$ = true;
carto_crayon.app.t15157.prototype.om$core$IRender$render$arity$2 = (function (this__9095__auto__,___9096__auto__){var self__ = this;
var this__9095__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "auth"}),React.DOM.div({"id": "data"},om.core.build.call(null,carto_crayon.app.layers_list,self__.app),om.core.build.call(null,carto_crayon.app.features_list,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",1017337751),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layers","layers",4199139508),new cljs.core.Keyword(null,"selected","selected",2205476365).cljs$core$IFn$_invoke$arity$1(self__.app)], null)], null))),om.core.build.call(null,carto_crayon.app.map_view,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",1017337751),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layers","layers",4199139508)], null)], null)));
});
carto_crayon.app.t15157.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15159){var self__ = this;
var _15159__$1 = this;return self__.meta15158;
});
carto_crayon.app.t15157.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15159,meta15158__$1){var self__ = this;
var _15159__$1 = this;return (new carto_crayon.app.t15157(self__.app,self__.carto_crayon_ui,meta15158__$1));
});
carto_crayon.app.__GT_t15157 = (function __GT_t15157(app__$1,carto_crayon_ui__$1,meta15158){return (new carto_crayon.app.t15157(app__$1,carto_crayon_ui__$1,meta15158));
});
}
return (new carto_crayon.app.t15157(app,carto_crayon_ui,null));
});
var c__6052__auto___15193 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6053__auto__ = (function (){var switch__5982__auto__ = (function (state_15184){var state_val_15185 = (state_15184[1]);if((state_val_15185 === 2))
{var inst_15163 = (state_15184[2]);var inst_15164 = new cljs.core.Keyword(null,"body","body",1016933652).cljs$core$IFn$_invoke$arity$1(inst_15163);var inst_15165 = JSON.parse(inst_15164);var inst_15166 = (function (){var state_farms_geojson = inst_15165;return ((function (state_farms_geojson,inst_15163,inst_15164,inst_15165,state_val_15185){
return (function (f){return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",1013907597),f.id,new cljs.core.Keyword(null,"geometry","geometry",2859924452),f.geometry,new cljs.core.Keyword(null,"properties","properties",4382818469),cljs.core.js__GT_clj.call(null,f.properties),new cljs.core.Keyword(null,"styles","styles",4417096788),cljs.core.merge.call(null,carto_crayon.app.default_styles,cljs.core.js__GT_clj.call(null,f.styles))], null);
});
;})(state_farms_geojson,inst_15163,inst_15164,inst_15165,state_val_15185))
})();var inst_15167 = inst_15165.features;var inst_15168 = cljs.core.vec.call(null,inst_15167);var inst_15169 = cljs.core.map.call(null,inst_15166,inst_15168);var inst_15170 = cljs.core.vec.call(null,inst_15169);var inst_15171 = [new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"features","features",723244975)];var inst_15172 = ["Farms by state",inst_15170];var inst_15173 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_15171,inst_15172);var inst_15174 = [new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"features","features",723244975)];var inst_15175 = ["Mapbox: gjbmo715",cljs.core.PersistentVector.EMPTY];var inst_15176 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_15174,inst_15175);var inst_15177 = [new cljs.core.Keyword(null,"layers","layers",4199139508)];var inst_15178 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_15177,null));var inst_15179 = (function (){var mapbox_layer = inst_15176;var state_farms_layer = inst_15173;var state_farms_features = inst_15170;var state_farms_geojson = inst_15165;return ((function (mapbox_layer,state_farms_layer,state_farms_features,state_farms_geojson,inst_15163,inst_15164,inst_15165,inst_15166,inst_15167,inst_15168,inst_15169,inst_15170,inst_15171,inst_15172,inst_15173,inst_15174,inst_15175,inst_15176,inst_15177,inst_15178,state_val_15185){
return (function (p1__15160_SHARP_){return cljs.core.vec.call(null,cljs.core.concat.call(null,p1__15160_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state_farms_layer,mapbox_layer], null)));
});
;})(mapbox_layer,state_farms_layer,state_farms_features,state_farms_geojson,inst_15163,inst_15164,inst_15165,inst_15166,inst_15167,inst_15168,inst_15169,inst_15170,inst_15171,inst_15172,inst_15173,inst_15174,inst_15175,inst_15176,inst_15177,inst_15178,state_val_15185))
})();var inst_15180 = cljs.core.update_in.call(null,carto_crayon.app.empty_state,inst_15178,inst_15179);var inst_15181 = document.getElementById("app");var inst_15182 = om.core.root.call(null,inst_15180,carto_crayon.app.carto_crayon_ui,inst_15181);var state_15184__$1 = state_15184;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15184__$1,inst_15182);
} else
{if((state_val_15185 === 1))
{var inst_15161 = cljs_http.client.get.call(null,"data/state_farms.geojson");var state_15184__$1 = state_15184;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15184__$1,2,inst_15161);
} else
{return null;
}
}
});return ((function (switch__5982__auto__){
return (function() {
var state_machine__5983__auto__ = null;
var state_machine__5983__auto____0 = (function (){var statearr_15189 = [null,null,null,null,null,null,null];(statearr_15189[0] = state_machine__5983__auto__);
(statearr_15189[1] = 1);
return statearr_15189;
});
var state_machine__5983__auto____1 = (function (state_15184){while(true){
var ret_value__5984__auto__ = (function (){try{while(true){
var result__5985__auto__ = switch__5982__auto__.call(null,state_15184);if(cljs.core.keyword_identical_QMARK_.call(null,result__5985__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5985__auto__;
}
break;
}
}catch (e15190){if((e15190 instanceof Object))
{var ex__5986__auto__ = e15190;var statearr_15191_15194 = state_15184;(statearr_15191_15194[5] = ex__5986__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15184);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15190;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15195 = state_15184;
state_15184 = G__15195;
continue;
}
} else
{return ret_value__5984__auto__;
}
break;
}
});
state_machine__5983__auto__ = function(state_15184){
switch(arguments.length){
case 0:
return state_machine__5983__auto____0.call(this);
case 1:
return state_machine__5983__auto____1.call(this,state_15184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5983__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5983__auto____0;
state_machine__5983__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5983__auto____1;
return state_machine__5983__auto__;
})()
;})(switch__5982__auto__))
})();var state__6054__auto__ = (function (){var statearr_15192 = f__6053__auto__.call(null);(statearr_15192[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6052__auto___15193);
return statearr_15192;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6054__auto__);
}));

//# sourceMappingURL=app.js.map