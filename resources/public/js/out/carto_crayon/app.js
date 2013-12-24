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
carto_crayon.app.filter_indexed = (function filter_indexed(f,col){return cljs.core.filter.call(null,(function (p1__15068_SHARP_){return cljs.core._EQ_.call(null,cljs.core.val.call(null,p1__15068_SHARP_),true);
}),cljs.core.map_indexed.call(null,(function (idx,item){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,f.call(null,item)], null);
}),col));
});
carto_crayon.app.first_match_index = (function first_match_index(f,col){var temp__4092__auto__ = carto_crayon.app.filter_indexed.call(null,f,col);if(cljs.core.truth_(temp__4092__auto__))
{var items = temp__4092__auto__;return cljs.core.first.call(null,cljs.core.first.call(null,items));
} else
{return null;
}
});
carto_crayon.app.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selected","selected",2205476365),false,new cljs.core.Keyword(null,"layers","layers",4199139508),cljs.core.PersistentVector.EMPTY], null));
carto_crayon.app.columns = (function columns(features){return cljs.core.disj.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,cljs.core.keys,features))),new cljs.core.Keyword(null,"geometry","geometry",2859924452),new cljs.core.Keyword(null,"styles","styles",4417096788),new cljs.core.Keyword(null,"selected","selected",2205476365));
});
carto_crayon.app.select_layer = (function select_layer(app,layer){return om.core.update_BANG_.call(null,app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected","selected",2205476365)], null),cljs.core.constantly.call(null,layer));
});
carto_crayon.app.select_feature = (function select_feature(layer,feature){return om.core.update_BANG_.call(null,layer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"features","features",723244975)], null),(function (features){return cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__15069_SHARP_){return ((cljs.core._EQ_.call(null,p1__15069_SHARP_,feature))?cljs.core.assoc:cljs.core.dissoc).call(null,p1__15069_SHARP_,new cljs.core.Keyword(null,"selected","selected",2205476365),true);
}),features));
}));
});
carto_crayon.app.layer_list_item = (function layer_list_item(app,p__15070){var map__15075 = p__15070;var map__15075__$1 = ((cljs.core.seq_QMARK_.call(null,map__15075))?cljs.core.apply.call(null,cljs.core.hash_map,map__15075):map__15075);var n = cljs.core.get.call(null,map__15075__$1,new cljs.core.Keyword(null,"n","n",1013904352));if(typeof carto_crayon.app.t15076 !== 'undefined')
{} else
{
/**
* @constructor
*/
carto_crayon.app.t15076 = (function (n,map__15075,p__15070,app,layer_list_item,meta15077){
this.n = n;
this.map__15075 = map__15075;
this.p__15070 = p__15070;
this.app = app;
this.layer_list_item = layer_list_item;
this.meta15077 = meta15077;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
carto_crayon.app.t15076.cljs$lang$type = true;
carto_crayon.app.t15076.cljs$lang$ctorStr = "carto-crayon.app/t15076";
carto_crayon.app.t15076.cljs$lang$ctorPrWriter = (function (this__3940__auto__,writer__3941__auto__,opt__3942__auto__){return cljs.core._write.call(null,writer__3941__auto__,"carto-crayon.app/t15076");
});
carto_crayon.app.t15076.prototype.om$core$IRender$ = true;
carto_crayon.app.t15076.prototype.om$core$IRender$render$arity$2 = (function (this__9095__auto__,___9096__auto__){var self__ = this;
var this__9095__auto____$1 = this;var layer = cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layers","layers",4199139508),self__.n], null));var selected = cljs.core._EQ_.call(null,self__.n,new cljs.core.Keyword(null,"selected","selected",2205476365).cljs$core$IFn$_invoke$arity$1(self__.app));return React.DOM.li({"onClick": (function (){return carto_crayon.app.select_layer.call(null,self__.app,self__.n);
}), "className": ((selected)?"selected":null)},new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(layer));
});
carto_crayon.app.t15076.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15078){var self__ = this;
var _15078__$1 = this;return self__.meta15077;
});
carto_crayon.app.t15076.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15078,meta15077__$1){var self__ = this;
var _15078__$1 = this;return (new carto_crayon.app.t15076(self__.n,self__.map__15075,self__.p__15070,self__.app,self__.layer_list_item,meta15077__$1));
});
carto_crayon.app.__GT_t15076 = (function __GT_t15076(n__$1,map__15075__$2,p__15070__$1,app__$1,layer_list_item__$1,meta15077){return (new carto_crayon.app.t15076(n__$1,map__15075__$2,p__15070__$1,app__$1,layer_list_item__$1,meta15077));
});
}
return (new carto_crayon.app.t15076(n,map__15075__$1,p__15070,app,layer_list_item,null));
});
carto_crayon.app.layer_list = (function layer_list(app){if(typeof carto_crayon.app.t15083 !== 'undefined')
{} else
{
/**
* @constructor
*/
carto_crayon.app.t15083 = (function (app,layer_list,meta15084){
this.app = app;
this.layer_list = layer_list;
this.meta15084 = meta15084;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
carto_crayon.app.t15083.cljs$lang$type = true;
carto_crayon.app.t15083.cljs$lang$ctorStr = "carto-crayon.app/t15083";
carto_crayon.app.t15083.cljs$lang$ctorPrWriter = (function (this__3940__auto__,writer__3941__auto__,opt__3942__auto__){return cljs.core._write.call(null,writer__3941__auto__,"carto-crayon.app/t15083");
});
carto_crayon.app.t15083.prototype.om$core$IRender$ = true;
carto_crayon.app.t15083.prototype.om$core$IRender$render$arity$2 = (function (this__9095__auto__,___9096__auto__){var self__ = this;
var this__9095__auto____$1 = this;var selected = new cljs.core.Keyword(null,"selected","selected",2205476365).cljs$core$IFn$_invoke$arity$1(self__.app);return React.DOM.div({"id": "layers"},React.DOM.h2(null,"Layers"),React.DOM.ol(null,cljs.core.into_array.call(null,cljs.core.map.call(null,(function (p1__15079_SHARP_){return om.core.build.call(null,carto_crayon.app.layer_list_item,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n","n",1013904352),p1__15079_SHARP_], null)], null));
}),cljs.core.range.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"layers","layers",4199139508).cljs$core$IFn$_invoke$arity$1(self__.app)))))));
});
carto_crayon.app.t15083.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15085){var self__ = this;
var _15085__$1 = this;return self__.meta15084;
});
carto_crayon.app.t15083.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15085,meta15084__$1){var self__ = this;
var _15085__$1 = this;return (new carto_crayon.app.t15083(self__.app,self__.layer_list,meta15084__$1));
});
carto_crayon.app.__GT_t15083 = (function __GT_t15083(app__$1,layer_list__$1,meta15084){return (new carto_crayon.app.t15083(app__$1,layer_list__$1,meta15084));
});
}
return (new carto_crayon.app.t15083(app,layer_list,null));
});
carto_crayon.app.feature_row = (function feature_row(feature,p__15087){var map__15092 = p__15087;var map__15092__$1 = ((cljs.core.seq_QMARK_.call(null,map__15092))?cljs.core.apply.call(null,cljs.core.hash_map,map__15092):map__15092);var select = cljs.core.get.call(null,map__15092__$1,new cljs.core.Keyword(null,"select","select",4402849902));var cols = cljs.core.get.call(null,map__15092__$1,new cljs.core.Keyword(null,"cols","cols",1016963685));if(typeof carto_crayon.app.t15093 !== 'undefined')
{} else
{
/**
* @constructor
*/
carto_crayon.app.t15093 = (function (cols,select,map__15092,p__15087,feature,feature_row,meta15094){
this.cols = cols;
this.select = select;
this.map__15092 = map__15092;
this.p__15087 = p__15087;
this.feature = feature;
this.feature_row = feature_row;
this.meta15094 = meta15094;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
carto_crayon.app.t15093.cljs$lang$type = true;
carto_crayon.app.t15093.cljs$lang$ctorStr = "carto-crayon.app/t15093";
carto_crayon.app.t15093.cljs$lang$ctorPrWriter = (function (this__3940__auto__,writer__3941__auto__,opt__3942__auto__){return cljs.core._write.call(null,writer__3941__auto__,"carto-crayon.app/t15093");
});
carto_crayon.app.t15093.prototype.om$core$IRender$ = true;
carto_crayon.app.t15093.prototype.om$core$IRender$render$arity$2 = (function (this__9095__auto__,___9096__auto__){var self__ = this;
var this__9095__auto____$1 = this;return React.DOM.tr({"className": (cljs.core.truth_(self__.feature.call(null,new cljs.core.Keyword(null,"selected","selected",2205476365)))?"selected":null), "onClick": (function (){return self__.select.call(null,self__.feature);
})},cljs.core.into_array.call(null,cljs.core.map.call(null,(function (p1__15086_SHARP_){return React.DOM.td(null,self__.feature.call(null,p1__15086_SHARP_));
}),self__.cols)));
});
carto_crayon.app.t15093.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15095){var self__ = this;
var _15095__$1 = this;return self__.meta15094;
});
carto_crayon.app.t15093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15095,meta15094__$1){var self__ = this;
var _15095__$1 = this;return (new carto_crayon.app.t15093(self__.cols,self__.select,self__.map__15092,self__.p__15087,self__.feature,self__.feature_row,meta15094__$1));
});
carto_crayon.app.__GT_t15093 = (function __GT_t15093(cols__$1,select__$1,map__15092__$2,p__15087__$1,feature__$1,feature_row__$1,meta15094){return (new carto_crayon.app.t15093(cols__$1,select__$1,map__15092__$2,p__15087__$1,feature__$1,feature_row__$1,meta15094));
});
}
return (new carto_crayon.app.t15093(cols,select,map__15092__$1,p__15087,feature,feature_row,null));
});
carto_crayon.app.layer_features = (function layer_features(layer,opts){if(typeof carto_crayon.app.t15101 !== 'undefined')
{} else
{
/**
* @constructor
*/
carto_crayon.app.t15101 = (function (opts,layer,layer_features,meta15102){
this.opts = opts;
this.layer = layer;
this.layer_features = layer_features;
this.meta15102 = meta15102;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
carto_crayon.app.t15101.cljs$lang$type = true;
carto_crayon.app.t15101.cljs$lang$ctorStr = "carto-crayon.app/t15101";
carto_crayon.app.t15101.cljs$lang$ctorPrWriter = (function (this__3940__auto__,writer__3941__auto__,opt__3942__auto__){return cljs.core._write.call(null,writer__3941__auto__,"carto-crayon.app/t15101");
});
carto_crayon.app.t15101.prototype.om$core$IRender$ = true;
carto_crayon.app.t15101.prototype.om$core$IRender$render$arity$2 = (function (this__9095__auto__,___9096__auto__){var self__ = this;
var this__9095__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"id": "features"},React.DOM.h2(null,"Features"),(cljs.core.truth_(self__.layer)?(function (){var features = new cljs.core.Keyword(null,"features","features",723244975).cljs$core$IFn$_invoke$arity$1(self__.layer);var cols = carto_crayon.app.columns.call(null,features);return React.DOM.table(null,React.DOM.thead(null,React.DOM.tr(null,cljs.core.into_array.call(null,cljs.core.map.call(null,(function (p1__15096_SHARP_){return React.DOM.th(null,cljs.core.name.call(null,p1__15096_SHARP_));
}),cols)))),React.DOM.tbody(null,cljs.core.into_array.call(null,cljs.core.map.call(null,(function (p1__15097_SHARP_){return om.core.build.call(null,carto_crayon.app.feature_row,self__.layer,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",1017337751),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"features","features",723244975),p1__15097_SHARP_], null),new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cols","cols",1016963685),cols,new cljs.core.Keyword(null,"select","select",4402849902),cljs.core.partial.call(null,carto_crayon.app.select_feature,self__.layer)], null)], null));
}),cljs.core.range.call(null,cljs.core.count.call(null,features))))));
})():React.DOM.h2(null,"No layer"))),(function (){var temp__4090__auto__ = carto_crayon.app.first_match_index.call(null,new cljs.core.Keyword(null,"selected","selected",2205476365),new cljs.core.Keyword(null,"features","features",723244975).cljs$core$IFn$_invoke$arity$1(self__.layer));if(cljs.core.truth_(temp__4090__auto__))
{var feature_index = temp__4090__auto__;return om.core.build.call(null,carto_crayon.app.feature_styles,self__.layer,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",1017337751),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"features","features",723244975),feature_index], null)], null));
} else
{return om.core.build.call(null,carto_crayon.app.empty_feature_styles,self__.layer,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",1017337751),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"features","features",723244975)], null)], null));
}
})());
});
carto_crayon.app.t15101.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15103){var self__ = this;
var _15103__$1 = this;return self__.meta15102;
});
carto_crayon.app.t15101.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15103,meta15102__$1){var self__ = this;
var _15103__$1 = this;return (new carto_crayon.app.t15101(self__.opts,self__.layer,self__.layer_features,meta15102__$1));
});
carto_crayon.app.__GT_t15101 = (function __GT_t15101(opts__$1,layer__$1,layer_features__$1,meta15102){return (new carto_crayon.app.t15101(opts__$1,layer__$1,layer_features__$1,meta15102));
});
}
return (new carto_crayon.app.t15101(opts,layer,layer_features,null));
});
carto_crayon.app.default_styles = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fillColor","fillColor",4166989586),"blue",new cljs.core.Keyword(null,"color","color",1108746965),"blue",new cljs.core.Keyword(null,"weight","weight",4517279210),5,new cljs.core.Keyword(null,"opacity","opacity",4041665405),0.5,new cljs.core.Keyword(null,"fillOpacity","fillOpacity",960226426),0.2], null);
carto_crayon.app.feature_style = (function feature_style(styles,p__15105){var map__15110 = p__15105;var map__15110__$1 = ((cljs.core.seq_QMARK_.call(null,map__15110))?cljs.core.apply.call(null,cljs.core.hash_map,map__15110):map__15110);var prop = cljs.core.get.call(null,map__15110__$1,new cljs.core.Keyword(null,"prop","prop",1017353941));var value = styles.call(null,prop);if(typeof carto_crayon.app.t15111 !== 'undefined')
{} else
{
/**
* @constructor
*/
carto_crayon.app.t15111 = (function (value,prop,map__15110,p__15105,styles,feature_style,meta15112){
this.value = value;
this.prop = prop;
this.map__15110 = map__15110;
this.p__15105 = p__15105;
this.styles = styles;
this.feature_style = feature_style;
this.meta15112 = meta15112;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
carto_crayon.app.t15111.cljs$lang$type = true;
carto_crayon.app.t15111.cljs$lang$ctorStr = "carto-crayon.app/t15111";
carto_crayon.app.t15111.cljs$lang$ctorPrWriter = (function (this__3940__auto__,writer__3941__auto__,opt__3942__auto__){return cljs.core._write.call(null,writer__3941__auto__,"carto-crayon.app/t15111");
});
carto_crayon.app.t15111.prototype.om$core$IRender$ = true;
carto_crayon.app.t15111.prototype.om$core$IRender$render$arity$2 = (function (this__9095__auto__,___9096__auto__){var self__ = this;
var this__9095__auto____$1 = this;return React.DOM.tr(null,React.DOM.th(null,React.DOM.label({"for": [cljs.core.str(cljs.core.name.call(null,self__.prop)),cljs.core.str("-field")].join('')},cljs.core.name.call(null,self__.prop))),React.DOM.td(null,om.dom.input.call(null,{"onChange": (function (p1__15104_SHARP_){return om.core.update_BANG_.call(null,self__.styles,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.prop], null),cljs.core.constantly.call(null,p1__15104_SHARP_.target.value));
}), "value": self__.value, "id": [cljs.core.str(cljs.core.name.call(null,self__.prop)),cljs.core.str("-field")].join('')})));
});
carto_crayon.app.t15111.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15113){var self__ = this;
var _15113__$1 = this;return self__.meta15112;
});
carto_crayon.app.t15111.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15113,meta15112__$1){var self__ = this;
var _15113__$1 = this;return (new carto_crayon.app.t15111(self__.value,self__.prop,self__.map__15110,self__.p__15105,self__.styles,self__.feature_style,meta15112__$1));
});
carto_crayon.app.__GT_t15111 = (function __GT_t15111(value__$1,prop__$1,map__15110__$2,p__15105__$1,styles__$1,feature_style__$1,meta15112){return (new carto_crayon.app.t15111(value__$1,prop__$1,map__15110__$2,p__15105__$1,styles__$1,feature_style__$1,meta15112));
});
}
return (new carto_crayon.app.t15111(value,prop,map__15110__$1,p__15105,styles,feature_style,null));
});
carto_crayon.app.feature_styles = (function feature_styles(feature){if(typeof carto_crayon.app.t15118 !== 'undefined')
{} else
{
/**
* @constructor
*/
carto_crayon.app.t15118 = (function (feature,feature_styles,meta15119){
this.feature = feature;
this.feature_styles = feature_styles;
this.meta15119 = meta15119;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
carto_crayon.app.t15118.cljs$lang$type = true;
carto_crayon.app.t15118.cljs$lang$ctorStr = "carto-crayon.app/t15118";
carto_crayon.app.t15118.cljs$lang$ctorPrWriter = (function (this__3940__auto__,writer__3941__auto__,opt__3942__auto__){return cljs.core._write.call(null,writer__3941__auto__,"carto-crayon.app/t15118");
});
carto_crayon.app.t15118.prototype.om$core$IRender$ = true;
carto_crayon.app.t15118.prototype.om$core$IRender$render$arity$2 = (function (this__9095__auto__,___9096__auto__){var self__ = this;
var this__9095__auto____$1 = this;return React.DOM.div({"id": "styles"},React.DOM.h2(null,"Styles"),React.DOM.table(null,cljs.core.into_array.call(null,cljs.core.map.call(null,(function (p1__15114_SHARP_){return om.core.build.call(null,carto_crayon.app.feature_style,self__.feature,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",1017337751),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"styles","styles",4417096788)], null),new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prop","prop",1017353941),cljs.core.key.call(null,p1__15114_SHARP_)], null)], null));
}),new cljs.core.Keyword(null,"styles","styles",4417096788).cljs$core$IFn$_invoke$arity$1(self__.feature)))));
});
carto_crayon.app.t15118.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15120){var self__ = this;
var _15120__$1 = this;return self__.meta15119;
});
carto_crayon.app.t15118.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15120,meta15119__$1){var self__ = this;
var _15120__$1 = this;return (new carto_crayon.app.t15118(self__.feature,self__.feature_styles,meta15119__$1));
});
carto_crayon.app.__GT_t15118 = (function __GT_t15118(feature__$1,feature_styles__$1,meta15119){return (new carto_crayon.app.t15118(feature__$1,feature_styles__$1,meta15119));
});
}
return (new carto_crayon.app.t15118(feature,feature_styles,null));
});
carto_crayon.app.empty_feature_styles = (function empty_feature_styles(features){if(typeof carto_crayon.app.t15124 !== 'undefined')
{} else
{
/**
* @constructor
*/
carto_crayon.app.t15124 = (function (features,empty_feature_styles,meta15125){
this.features = features;
this.empty_feature_styles = empty_feature_styles;
this.meta15125 = meta15125;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
carto_crayon.app.t15124.cljs$lang$type = true;
carto_crayon.app.t15124.cljs$lang$ctorStr = "carto-crayon.app/t15124";
carto_crayon.app.t15124.cljs$lang$ctorPrWriter = (function (this__3940__auto__,writer__3941__auto__,opt__3942__auto__){return cljs.core._write.call(null,writer__3941__auto__,"carto-crayon.app/t15124");
});
carto_crayon.app.t15124.prototype.om$core$IRender$ = true;
carto_crayon.app.t15124.prototype.om$core$IRender$render$arity$2 = (function (this__9095__auto__,___9096__auto__){var self__ = this;
var this__9095__auto____$1 = this;return React.DOM.div({"id": "styles"},React.DOM.h2(null,"Styles"),React.DOM.p(null,"Select features to style"));
});
carto_crayon.app.t15124.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15126){var self__ = this;
var _15126__$1 = this;return self__.meta15125;
});
carto_crayon.app.t15124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15126,meta15125__$1){var self__ = this;
var _15126__$1 = this;return (new carto_crayon.app.t15124(self__.features,self__.empty_feature_styles,meta15125__$1));
});
carto_crayon.app.__GT_t15124 = (function __GT_t15124(features__$1,empty_feature_styles__$1,meta15125){return (new carto_crayon.app.t15124(features__$1,empty_feature_styles__$1,meta15125));
});
}
return (new carto_crayon.app.t15124(features,empty_feature_styles,null));
});
carto_crayon.app.leaflet_map = cljs.core.atom.call(null,false);
carto_crayon.app.map_feature = (function map_feature(feature,p__15127){var map__15132 = p__15127;var map__15132__$1 = ((cljs.core.seq_QMARK_.call(null,map__15132))?cljs.core.apply.call(null,cljs.core.hash_map,map__15132):map__15132);var select = cljs.core.get.call(null,map__15132__$1,new cljs.core.Keyword(null,"select","select",4402849902));var group = cljs.core.get.call(null,map__15132__$1,new cljs.core.Keyword(null,"group","group",1112533489));if(typeof carto_crayon.app.t15133 !== 'undefined')
{} else
{
/**
* @constructor
*/
carto_crayon.app.t15133 = (function (group,select,map__15132,p__15127,feature,map_feature,meta15134){
this.group = group;
this.select = select;
this.map__15132 = map__15132;
this.p__15127 = p__15127;
this.feature = feature;
this.map_feature = map_feature;
this.meta15134 = meta15134;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
carto_crayon.app.t15133.cljs$lang$type = true;
carto_crayon.app.t15133.cljs$lang$ctorStr = "carto-crayon.app/t15133";
carto_crayon.app.t15133.cljs$lang$ctorPrWriter = (function (this__3940__auto__,writer__3941__auto__,opt__3942__auto__){return cljs.core._write.call(null,writer__3941__auto__,"carto-crayon.app/t15133");
});
carto_crayon.app.t15133.prototype.om$core$IRender$ = true;
carto_crayon.app.t15133.prototype.om$core$IRender$render$arity$2 = (function (_,owner){var self__ = this;
var ___$1 = this;return React.DOM.span(null,null);
});
carto_crayon.app.t15133.prototype.om$core$IDidUpdate$ = true;
carto_crayon.app.t15133.prototype.om$core$IDidUpdate$did_update$arity$5 = (function (_,owner,___$1,___$2,___$3){var self__ = this;
var ___$4 = this;return om.core.get_state.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feature-layer","feature-layer",2700396332)], null)).setStyle(cljs.core.clj__GT_js.call(null,new cljs.core.Keyword(null,"styles","styles",4417096788).cljs$core$IFn$_invoke$arity$1(self__.feature)));
});
carto_crayon.app.t15133.prototype.om$core$IInitState$ = true;
carto_crayon.app.t15133.prototype.om$core$IInitState$init_state$arity$2 = (function (a,_){var self__ = this;
var a__$1 = this;var feature_layer = L.geoJson.call(null,new cljs.core.Keyword(null,"geometry","geometry",2859924452).cljs$core$IFn$_invoke$arity$1(self__.feature));feature_layer.on("click",(function (){return self__.select.call(null,self__.feature);
}));
self__.group.addLayer(feature_layer);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"feature-layer","feature-layer",2700396332),feature_layer], null);
});
carto_crayon.app.t15133.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15135){var self__ = this;
var _15135__$1 = this;return self__.meta15134;
});
carto_crayon.app.t15133.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15135,meta15134__$1){var self__ = this;
var _15135__$1 = this;return (new carto_crayon.app.t15133(self__.group,self__.select,self__.map__15132,self__.p__15127,self__.feature,self__.map_feature,meta15134__$1));
});
carto_crayon.app.__GT_t15133 = (function __GT_t15133(group__$1,select__$1,map__15132__$2,p__15127__$1,feature__$1,map_feature__$1,meta15134){return (new carto_crayon.app.t15133(group__$1,select__$1,map__15132__$2,p__15127__$1,feature__$1,map_feature__$1,meta15134));
});
}
return (new carto_crayon.app.t15133(group,select,map__15132__$1,p__15127,feature,map_feature,null));
});
carto_crayon.app.map_layer = (function map_layer(layer){if(typeof carto_crayon.app.t15140 !== 'undefined')
{} else
{
/**
* @constructor
*/
carto_crayon.app.t15140 = (function (layer,map_layer,meta15141){
this.layer = layer;
this.map_layer = map_layer;
this.meta15141 = meta15141;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
carto_crayon.app.t15140.cljs$lang$type = true;
carto_crayon.app.t15140.cljs$lang$ctorStr = "carto-crayon.app/t15140";
carto_crayon.app.t15140.cljs$lang$ctorPrWriter = (function (this__3940__auto__,writer__3941__auto__,opt__3942__auto__){return cljs.core._write.call(null,writer__3941__auto__,"carto-crayon.app/t15140");
});
carto_crayon.app.t15140.prototype.om$core$IRender$ = true;
carto_crayon.app.t15140.prototype.om$core$IRender$render$arity$2 = (function (_,owner){var self__ = this;
var ___$1 = this;return React.DOM.div(null,cljs.core.into_array.call(null,cljs.core.map.call(null,(function (p1__15136_SHARP_){return om.core.build.call(null,carto_crayon.app.map_feature,self__.layer,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",1017337751),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"features","features",723244975),p1__15136_SHARP_], null),new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"group","group",1112533489),om.core.get_state.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feature-group","feature-group",2696276058)], null)),new cljs.core.Keyword(null,"select","select",4402849902),cljs.core.partial.call(null,carto_crayon.app.select_feature,self__.layer)], null)], null));
}),cljs.core.range.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"features","features",723244975).cljs$core$IFn$_invoke$arity$1(self__.layer))))));
});
carto_crayon.app.t15140.prototype.om$core$IDidMount$ = true;
carto_crayon.app.t15140.prototype.om$core$IDidMount$did_mount$arity$3 = (function (_,owner,___$1){var self__ = this;
var ___$2 = this;return setTimeout((function (){return om.core.get_state.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feature-group","feature-group",2696276058)], null)).addTo(cljs.core.deref.call(null,carto_crayon.app.leaflet_map));
}),100);
});
carto_crayon.app.t15140.prototype.om$core$IInitState$ = true;
carto_crayon.app.t15140.prototype.om$core$IInitState$init_state$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"feature-group","feature-group",2696276058),L.featureGroup.call(null)], null);
});
carto_crayon.app.t15140.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15142){var self__ = this;
var _15142__$1 = this;return self__.meta15141;
});
carto_crayon.app.t15140.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15142,meta15141__$1){var self__ = this;
var _15142__$1 = this;return (new carto_crayon.app.t15140(self__.layer,self__.map_layer,meta15141__$1));
});
carto_crayon.app.__GT_t15140 = (function __GT_t15140(layer__$1,map_layer__$1,meta15141){return (new carto_crayon.app.t15140(layer__$1,map_layer__$1,meta15141));
});
}
return (new carto_crayon.app.t15140(layer,map_layer,null));
});
carto_crayon.app.map_view = (function map_view(layers){if(typeof carto_crayon.app.t15147 !== 'undefined')
{} else
{
/**
* @constructor
*/
carto_crayon.app.t15147 = (function (layers,map_view,meta15148){
this.layers = layers;
this.map_view = map_view;
this.meta15148 = meta15148;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
carto_crayon.app.t15147.cljs$lang$type = true;
carto_crayon.app.t15147.cljs$lang$ctorStr = "carto-crayon.app/t15147";
carto_crayon.app.t15147.cljs$lang$ctorPrWriter = (function (this__3940__auto__,writer__3941__auto__,opt__3942__auto__){return cljs.core._write.call(null,writer__3941__auto__,"carto-crayon.app/t15147");
});
carto_crayon.app.t15147.prototype.om$core$IRender$ = true;
carto_crayon.app.t15147.prototype.om$core$IRender$render$arity$2 = (function (_,owner){var self__ = this;
var ___$1 = this;return React.DOM.div({"id": "map"},cljs.core.into_array.call(null,cljs.core.map.call(null,(function (p1__15143_SHARP_){return om.core.build.call(null,carto_crayon.app.map_layer,self__.layers,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",1017337751),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15143_SHARP_], null)], null));
}),cljs.core.range.call(null,cljs.core.count.call(null,self__.layers)))));
});
carto_crayon.app.t15147.prototype.om$core$IDidMount$ = true;
carto_crayon.app.t15147.prototype.om$core$IDidMount$did_mount$arity$3 = (function (_,___$1,___$2){var self__ = this;
var ___$3 = this;return cljs.core.swap_BANG_.call(null,carto_crayon.app.leaflet_map,(function (___$4){return L.mapbox.map.call(null,"map","imthepusher.gjbmo715");
}));
});
carto_crayon.app.t15147.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15149){var self__ = this;
var _15149__$1 = this;return self__.meta15148;
});
carto_crayon.app.t15147.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15149,meta15148__$1){var self__ = this;
var _15149__$1 = this;return (new carto_crayon.app.t15147(self__.layers,self__.map_view,meta15148__$1));
});
carto_crayon.app.__GT_t15147 = (function __GT_t15147(layers__$1,map_view__$1,meta15148){return (new carto_crayon.app.t15147(layers__$1,map_view__$1,meta15148));
});
}
return (new carto_crayon.app.t15147(layers,map_view,null));
});
carto_crayon.app.carto_crayon_ui = (function carto_crayon_ui(app){if(typeof carto_crayon.app.t15153 !== 'undefined')
{} else
{
/**
* @constructor
*/
carto_crayon.app.t15153 = (function (app,carto_crayon_ui,meta15154){
this.app = app;
this.carto_crayon_ui = carto_crayon_ui;
this.meta15154 = meta15154;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
carto_crayon.app.t15153.cljs$lang$type = true;
carto_crayon.app.t15153.cljs$lang$ctorStr = "carto-crayon.app/t15153";
carto_crayon.app.t15153.cljs$lang$ctorPrWriter = (function (this__3940__auto__,writer__3941__auto__,opt__3942__auto__){return cljs.core._write.call(null,writer__3941__auto__,"carto-crayon.app/t15153");
});
carto_crayon.app.t15153.prototype.om$core$IRender$ = true;
carto_crayon.app.t15153.prototype.om$core$IRender$render$arity$2 = (function (this__9095__auto__,___9096__auto__){var self__ = this;
var this__9095__auto____$1 = this;return React.DOM.div(null,null,React.DOM.header({"className": "auth"}),React.DOM.div({"id": "data"},om.core.build.call(null,carto_crayon.app.layer_list,self__.app),om.core.build.call(null,carto_crayon.app.layer_features,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",1017337751),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layers","layers",4199139508),new cljs.core.Keyword(null,"selected","selected",2205476365).cljs$core$IFn$_invoke$arity$1(self__.app)], null)], null))),om.core.build.call(null,carto_crayon.app.map_view,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",1017337751),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layers","layers",4199139508)], null)], null)));
});
carto_crayon.app.t15153.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15155){var self__ = this;
var _15155__$1 = this;return self__.meta15154;
});
carto_crayon.app.t15153.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15155,meta15154__$1){var self__ = this;
var _15155__$1 = this;return (new carto_crayon.app.t15153(self__.app,self__.carto_crayon_ui,meta15154__$1));
});
carto_crayon.app.__GT_t15153 = (function __GT_t15153(app__$1,carto_crayon_ui__$1,meta15154){return (new carto_crayon.app.t15153(app__$1,carto_crayon_ui__$1,meta15154));
});
}
return (new carto_crayon.app.t15153(app,carto_crayon_ui,null));
});
var c__6052__auto___15188 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6053__auto__ = (function (){var switch__5982__auto__ = (function (state_15178){var state_val_15179 = (state_15178[1]);if((state_val_15179 === 2))
{var inst_15159 = (state_15178[2]);var inst_15160 = new cljs.core.Keyword(null,"body","body",1016933652).cljs$core$IFn$_invoke$arity$1(inst_15159);var inst_15161 = JSON.parse(inst_15160);var inst_15162 = inst_15161.objects;var inst_15163 = inst_15162.cd113;var inst_15164 = topojson.feature(inst_15161,inst_15163);var inst_15165 = [new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"features","features",723244975)];var inst_15166 = (function (){var districtGeoJSON = inst_15164;var districtTopology = inst_15161;return ((function (districtGeoJSON,districtTopology,inst_15159,inst_15160,inst_15161,inst_15162,inst_15163,inst_15164,inst_15165,state_val_15179){
return (function (f){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),f.id,new cljs.core.Keyword(null,"geometry","geometry",2859924452),f.geometry,new cljs.core.Keyword(null,"styles","styles",4417096788),cljs.core.merge.call(null,carto_crayon.app.default_styles,cljs.core.js__GT_clj.call(null,f.styles))], null);
});
;})(districtGeoJSON,districtTopology,inst_15159,inst_15160,inst_15161,inst_15162,inst_15163,inst_15164,inst_15165,state_val_15179))
})();var inst_15167 = inst_15164.features;var inst_15168 = cljs.core.vec.call(null,inst_15167);var inst_15169 = cljs.core.map.call(null,inst_15166,inst_15168);var inst_15170 = cljs.core.vec.call(null,inst_15169);var inst_15171 = ["Districts",inst_15170];var inst_15172 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_15165,inst_15171);var inst_15173 = (function (){var districtLayer = inst_15172;var districtGeoJSON = inst_15164;var districtTopology = inst_15161;return ((function (districtLayer,districtGeoJSON,districtTopology,inst_15159,inst_15160,inst_15161,inst_15162,inst_15163,inst_15164,inst_15165,inst_15166,inst_15167,inst_15168,inst_15169,inst_15170,inst_15171,inst_15172,state_val_15179){
return (function (state){return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layers","layers",4199139508)], null),((function (districtLayer,districtGeoJSON,districtTopology,inst_15159,inst_15160,inst_15161,inst_15162,inst_15163,inst_15164,inst_15165,inst_15166,inst_15167,inst_15168,inst_15169,inst_15170,inst_15171,inst_15172,state_val_15179){
return (function (p1__15156_SHARP_){return cljs.core.conj.call(null,p1__15156_SHARP_,districtLayer);
});})(districtLayer,districtGeoJSON,districtTopology,inst_15159,inst_15160,inst_15161,inst_15162,inst_15163,inst_15164,inst_15165,inst_15166,inst_15167,inst_15168,inst_15169,inst_15170,inst_15171,inst_15172,state_val_15179))
);
});
;})(districtLayer,districtGeoJSON,districtTopology,inst_15159,inst_15160,inst_15161,inst_15162,inst_15163,inst_15164,inst_15165,inst_15166,inst_15167,inst_15168,inst_15169,inst_15170,inst_15171,inst_15172,state_val_15179))
})();var inst_15174 = cljs.core.swap_BANG_.call(null,carto_crayon.app.app_state,inst_15173);var inst_15175 = document.getElementById("app");var inst_15176 = om.core.root.call(null,carto_crayon.app.app_state,carto_crayon.app.carto_crayon_ui,inst_15175);var state_15178__$1 = (function (){var statearr_15180 = state_15178;(statearr_15180[7] = inst_15174);
return statearr_15180;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15178__$1,inst_15176);
} else
{if((state_val_15179 === 1))
{var inst_15157 = cljs_http.client.get.call(null,"data/cd113.topojson");var state_15178__$1 = state_15178;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15178__$1,2,inst_15157);
} else
{return null;
}
}
});return ((function (switch__5982__auto__){
return (function() {
var state_machine__5983__auto__ = null;
var state_machine__5983__auto____0 = (function (){var statearr_15184 = [null,null,null,null,null,null,null,null];(statearr_15184[0] = state_machine__5983__auto__);
(statearr_15184[1] = 1);
return statearr_15184;
});
var state_machine__5983__auto____1 = (function (state_15178){while(true){
var ret_value__5984__auto__ = (function (){try{while(true){
var result__5985__auto__ = switch__5982__auto__.call(null,state_15178);if(cljs.core.keyword_identical_QMARK_.call(null,result__5985__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5985__auto__;
}
break;
}
}catch (e15185){if((e15185 instanceof Object))
{var ex__5986__auto__ = e15185;var statearr_15186_15189 = state_15178;(statearr_15186_15189[5] = ex__5986__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15178);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15185;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15190 = state_15178;
state_15178 = G__15190;
continue;
}
} else
{return ret_value__5984__auto__;
}
break;
}
});
state_machine__5983__auto__ = function(state_15178){
switch(arguments.length){
case 0:
return state_machine__5983__auto____0.call(this);
case 1:
return state_machine__5983__auto____1.call(this,state_15178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5983__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5983__auto____0;
state_machine__5983__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5983__auto____1;
return state_machine__5983__auto__;
})()
;})(switch__5982__auto__))
})();var state__6054__auto__ = (function (){var statearr_15187 = f__6053__auto__.call(null);(statearr_15187[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6052__auto___15188);
return statearr_15187;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6054__auto__);
}));

//# sourceMappingURL=app.js.map