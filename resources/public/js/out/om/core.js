// Compiled by ClojureScript 0.0-2127
goog.provide('om.core');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.dom');
om.core.IInitState = (function (){var obj16826 = {};return obj16826;
})();
om.core.init_state = (function init_state(this$,owner){if((function (){var and__3379__auto__ = this$;if(and__3379__auto__)
{return this$.om$core$IInitState$init_state$arity$2;
} else
{return and__3379__auto__;
}
})())
{return this$.om$core$IInitState$init_state$arity$2(this$,owner);
} else
{var x__3999__auto__ = (((this$ == null))?null:this$);return (function (){var or__3391__auto__ = (om.core.init_state[goog.typeOf(x__3999__auto__)]);if(or__3391__auto__)
{return or__3391__auto__;
} else
{var or__3391__auto____$1 = (om.core.init_state["_"]);if(or__3391__auto____$1)
{return or__3391__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IInitState.init-state",this$);
}
}
})().call(null,this$,owner);
}
});
om.core.IShouldUpdate = (function (){var obj16828 = {};return obj16828;
})();
om.core.should_update = (function should_update(this$,owner,next_props,next_state){if((function (){var and__3379__auto__ = this$;if(and__3379__auto__)
{return this$.om$core$IShouldUpdate$should_update$arity$4;
} else
{return and__3379__auto__;
}
})())
{return this$.om$core$IShouldUpdate$should_update$arity$4(this$,owner,next_props,next_state);
} else
{var x__3999__auto__ = (((this$ == null))?null:this$);return (function (){var or__3391__auto__ = (om.core.should_update[goog.typeOf(x__3999__auto__)]);if(or__3391__auto__)
{return or__3391__auto__;
} else
{var or__3391__auto____$1 = (om.core.should_update["_"]);if(or__3391__auto____$1)
{return or__3391__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IShouldUpdate.should-update",this$);
}
}
})().call(null,this$,owner,next_props,next_state);
}
});
om.core.IWillMount = (function (){var obj16830 = {};return obj16830;
})();
om.core.will_mount = (function will_mount(this$,owner){if((function (){var and__3379__auto__ = this$;if(and__3379__auto__)
{return this$.om$core$IWillMount$will_mount$arity$2;
} else
{return and__3379__auto__;
}
})())
{return this$.om$core$IWillMount$will_mount$arity$2(this$,owner);
} else
{var x__3999__auto__ = (((this$ == null))?null:this$);return (function (){var or__3391__auto__ = (om.core.will_mount[goog.typeOf(x__3999__auto__)]);if(or__3391__auto__)
{return or__3391__auto__;
} else
{var or__3391__auto____$1 = (om.core.will_mount["_"]);if(or__3391__auto____$1)
{return or__3391__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWillMount.will-mount",this$);
}
}
})().call(null,this$,owner);
}
});
om.core.IDidMount = (function (){var obj16832 = {};return obj16832;
})();
om.core.did_mount = (function did_mount(this$,owner,node){if((function (){var and__3379__auto__ = this$;if(and__3379__auto__)
{return this$.om$core$IDidMount$did_mount$arity$3;
} else
{return and__3379__auto__;
}
})())
{return this$.om$core$IDidMount$did_mount$arity$3(this$,owner,node);
} else
{var x__3999__auto__ = (((this$ == null))?null:this$);return (function (){var or__3391__auto__ = (om.core.did_mount[goog.typeOf(x__3999__auto__)]);if(or__3391__auto__)
{return or__3391__auto__;
} else
{var or__3391__auto____$1 = (om.core.did_mount["_"]);if(or__3391__auto____$1)
{return or__3391__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDidMount.did-mount",this$);
}
}
})().call(null,this$,owner,node);
}
});
om.core.IWillUnmount = (function (){var obj16834 = {};return obj16834;
})();
om.core.will_unmount = (function will_unmount(this$,owner){if((function (){var and__3379__auto__ = this$;if(and__3379__auto__)
{return this$.om$core$IWillUnmount$will_unmount$arity$2;
} else
{return and__3379__auto__;
}
})())
{return this$.om$core$IWillUnmount$will_unmount$arity$2(this$,owner);
} else
{var x__3999__auto__ = (((this$ == null))?null:this$);return (function (){var or__3391__auto__ = (om.core.will_unmount[goog.typeOf(x__3999__auto__)]);if(or__3391__auto__)
{return or__3391__auto__;
} else
{var or__3391__auto____$1 = (om.core.will_unmount["_"]);if(or__3391__auto____$1)
{return or__3391__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWillUnmount.will-unmount",this$);
}
}
})().call(null,this$,owner);
}
});
om.core.IWillUpdate = (function (){var obj16836 = {};return obj16836;
})();
om.core.will_update = (function will_update(this$,owner,next_props,next_state){if((function (){var and__3379__auto__ = this$;if(and__3379__auto__)
{return this$.om$core$IWillUpdate$will_update$arity$4;
} else
{return and__3379__auto__;
}
})())
{return this$.om$core$IWillUpdate$will_update$arity$4(this$,owner,next_props,next_state);
} else
{var x__3999__auto__ = (((this$ == null))?null:this$);return (function (){var or__3391__auto__ = (om.core.will_update[goog.typeOf(x__3999__auto__)]);if(or__3391__auto__)
{return or__3391__auto__;
} else
{var or__3391__auto____$1 = (om.core.will_update["_"]);if(or__3391__auto____$1)
{return or__3391__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWillUpdate.will-update",this$);
}
}
})().call(null,this$,owner,next_props,next_state);
}
});
om.core.IDidUpdate = (function (){var obj16838 = {};return obj16838;
})();
om.core.did_update = (function did_update(this$,owner,prev_props,prev_state,root_node){if((function (){var and__3379__auto__ = this$;if(and__3379__auto__)
{return this$.om$core$IDidUpdate$did_update$arity$5;
} else
{return and__3379__auto__;
}
})())
{return this$.om$core$IDidUpdate$did_update$arity$5(this$,owner,prev_props,prev_state,root_node);
} else
{var x__3999__auto__ = (((this$ == null))?null:this$);return (function (){var or__3391__auto__ = (om.core.did_update[goog.typeOf(x__3999__auto__)]);if(or__3391__auto__)
{return or__3391__auto__;
} else
{var or__3391__auto____$1 = (om.core.did_update["_"]);if(or__3391__auto____$1)
{return or__3391__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDidUpdate.did-update",this$);
}
}
})().call(null,this$,owner,prev_props,prev_state,root_node);
}
});
om.core.IRender = (function (){var obj16840 = {};return obj16840;
})();
om.core.render = (function render(this$,owner){if((function (){var and__3379__auto__ = this$;if(and__3379__auto__)
{return this$.om$core$IRender$render$arity$2;
} else
{return and__3379__auto__;
}
})())
{return this$.om$core$IRender$render$arity$2(this$,owner);
} else
{var x__3999__auto__ = (((this$ == null))?null:this$);return (function (){var or__3391__auto__ = (om.core.render[goog.typeOf(x__3999__auto__)]);if(or__3391__auto__)
{return or__3391__auto__;
} else
{var or__3391__auto____$1 = (om.core.render["_"]);if(or__3391__auto____$1)
{return or__3391__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRender.render",this$);
}
}
})().call(null,this$,owner);
}
});
om.core.Pure = React.createClass({"render": (function (){var this$ = this;return om.core.render.call(null,this$.props.children,this$);
}), "componentDidUpdate": (function (prev_props,prev_state,root_node){var this$ = this;var c = this$.props.children;if((function (){var G__16848 = c;if(G__16848)
{var bit__4022__auto__ = null;if(cljs.core.truth_((function (){var or__3391__auto__ = bit__4022__auto__;if(cljs.core.truth_(or__3391__auto__))
{return or__3391__auto__;
} else
{return G__16848.om$core$IDidUpdate$;
}
})()))
{return true;
} else
{if((!G__16848.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__16848);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__16848);
}
})())
{return om.core.did_update.call(null,c,this$,prev_props,prev_state,root_node);
} else
{return null;
}
}), "componentWillUpdate": (function (next_props,next_state){var this$ = this;var c_16849 = this$.props.children;if((function (){var G__16846 = c_16849;if(G__16846)
{var bit__4022__auto__ = null;if(cljs.core.truth_((function (){var or__3391__auto__ = bit__4022__auto__;if(cljs.core.truth_(or__3391__auto__))
{return or__3391__auto__;
} else
{return G__16846.om$core$IWillUpdate$;
}
})()))
{return true;
} else
{if((!G__16846.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__16846);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__16846);
}
})())
{om.core.will_update.call(null,c_16849,this$,next_props,next_state);
} else
{}
var state = this$.state;var temp__4092__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(temp__4092__auto__))
{var pending_state = temp__4092__auto__;var G__16847 = state;(G__16847["__om_state"] = pending_state);
(G__16847["__om_pending_state"] = null);
return G__16847;
} else
{return null;
}
}), "componentWillUnmount": (function (){var this$ = this;var c = this$.props.children;if((function (){var G__16845 = c;if(G__16845)
{var bit__4022__auto__ = null;if(cljs.core.truth_((function (){var or__3391__auto__ = bit__4022__auto__;if(cljs.core.truth_(or__3391__auto__))
{return or__3391__auto__;
} else
{return G__16845.om$core$IWillUnmount$;
}
})()))
{return true;
} else
{if((!G__16845.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__16845);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__16845);
}
})())
{return om.core.will_unmount.call(null,c,this$);
} else
{return null;
}
}), "componentDidMount": (function (node){var this$ = this;var c = this$.props.children;if((function (){var G__16844 = c;if(G__16844)
{var bit__4022__auto__ = null;if(cljs.core.truth_((function (){var or__3391__auto__ = bit__4022__auto__;if(cljs.core.truth_(or__3391__auto__))
{return or__3391__auto__;
} else
{return G__16844.om$core$IDidMount$;
}
})()))
{return true;
} else
{if((!G__16844.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__16844);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__16844);
}
})())
{return om.core.did_mount.call(null,c,this$,node);
} else
{return null;
}
}), "componentWillMount": (function (){var this$ = this;var c = this$.props.children;if((function (){var G__16843 = c;if(G__16843)
{var bit__4022__auto__ = null;if(cljs.core.truth_((function (){var or__3391__auto__ = bit__4022__auto__;if(cljs.core.truth_(or__3391__auto__))
{return or__3391__auto__;
} else
{return G__16843.om$core$IWillMount$;
}
})()))
{return true;
} else
{if((!G__16843.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__16843);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__16843);
}
})())
{return om.core.will_mount.call(null,c,this$);
} else
{return null;
}
}), "shouldComponentUpdate": (function (next_props,next_state){var this$ = this;var c = this$.props.children;if((function (){var G__16842 = c;if(G__16842)
{var bit__4022__auto__ = null;if(cljs.core.truth_((function (){var or__3391__auto__ = bit__4022__auto__;if(cljs.core.truth_(or__3391__auto__))
{return or__3391__auto__;
} else
{return G__16842.om$core$IShouldUpdate$;
}
})()))
{return true;
} else
{if((!G__16842.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__16842);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__16842);
}
})())
{return om.core.should_update.call(null,c,this$,next_props,next_state);
} else
{return (!(((this$.props["__om_value"]) === (next_props["__om_value"])))) || (!(((this$.state["__om_state"]) === (this$.state["__om_pending_state"]))));
}
}), "getInitialState": (function (){var this$ = this;var c = this$.props.children;return {"__om_state": cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,(((function (){var G__16841 = c;if(G__16841)
{var bit__4022__auto__ = null;if(cljs.core.truth_((function (){var or__3391__auto__ = bit__4022__auto__;if(cljs.core.truth_(or__3391__auto__))
{return or__3391__auto__;
} else
{return G__16841.om$core$IInitState$;
}
})()))
{return true;
} else
{if((!G__16841.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__16841);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__16841);
}
})())?om.core.init_state.call(null,c,this$):null))};
})});
om.core.refresh_queued = false;
/**
* Takes an immutable value or value wrapped in an atom, an initial
* function f, and a DOM target. Installs an Om/React render loop. f
* must return an instance that at a minimum implements IRender (it
* may implement other React life cycle protocols). f must take a
* single argument which will be the root cursor. A cursor is simply
* data that has been annotated via metadata with state and path
* information - :om.core/state and :om.core/path respectively.
* 
* Example:
* 
* (root {:message :hello}
* (fn [data]
* ...)
* js/document.body)
*/
om.core.root = (function root(value,f,target){var state = (((value instanceof cljs.core.Atom))?value:cljs.core.atom.call(null,value));var rootf = ((function (state){
return (function (){om.core.refresh_queued = false;
var path = cljs.core.PersistentVector.EMPTY;var state_value = cljs.core.deref.call(null,state);return React.renderComponent((new om.core.Pure({"__om_path": path, "__om_app_state": state, "__om_value": state_value, "__om_tvalue": state_value},f.call(null,cljs.core.with_meta.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("om.core","state","om.core/state",3158836371),state,new cljs.core.Keyword("om.core","path","om.core/path",2667619423),path], null))))),target);
});})(state))
;cljs.core.add_watch.call(null,state,new cljs.core.Keyword("om.core","root","om.core/root",2668054562),(function (_,___$1,___$2,___$3){if(cljs.core.truth_(om.core.refresh_queued))
{return null;
} else
{om.core.refresh_queued = true;
if(typeof requestAnimationFrame !== 'undefined')
{return requestAnimationFrame(rootf);
} else
{return setTimeout(rootf,16);
}
}
}));
return rootf.call(null);
});
/**
* Builds a Om component. Takes an IRender instance returning function
* f, a cursor, and an optional third argument which may be a vector
* representing the path or a map of build specifications.
* 
* f - is a function of two arguments the first argument will be the
* cursor and the second argument will be a map of optional values
* passed to build. f must return at a minimum an IRender instance,
* this instance may implement other React life cycle protocols.
* 
* cursor - an immutable value annotated with :om.core/state and
* :om.core/path
* 
* sorm - If a vector, specifies the relative path into the tree that
* the component will be built from. If a map the following
* keys are allowed:
* 
* :path      - the relative path in the tree to build the component with
* :abs-path  - an absolute path from the root
* :key       - a keyword that should be used to look up the key used by
* React itself when rendering sequential things.
* :react-key - an explicit react key
* :fn        - a function to apply to the data at the relative path before
* invoking f.
* :opts      - a map of options to pass to the component.
* 
* Example:
* 
* (build list-of-gadgets cursor
* {:path [:gadgets]
* :opts {:event-chan ...
* :narble ...}})
* 
*/
om.core.build = (function() {
var build = null;
var build__2 = (function (f,cursor){return build.call(null,f,cursor,null);
});
var build__3 = (function (f,cursor,sorm){if((sorm == null))
{var m = cljs.core.meta.call(null,cursor);return (new om.core.Pure({"__om_path": new cljs.core.Keyword("om.core","path","om.core/path",2667619423).cljs$core$IFn$_invoke$arity$1(m), "__om_app_state": new cljs.core.Keyword("om.core","state","om.core/state",3158836371).cljs$core$IFn$_invoke$arity$1(m), "__om_value": cursor, "__om_tvalue": cursor},f.call(null,cursor)));
} else
{if(cljs.core.sequential_QMARK_.call(null,sorm))
{var data = cljs.core.get_in.call(null,cursor,sorm);var m = cljs.core.meta.call(null,cursor);var path = cljs.core.into.call(null,new cljs.core.Keyword("om.core","path","om.core/path",2667619423).cljs$core$IFn$_invoke$arity$1(m),sorm);var cursor_SINGLEQUOTE_ = cljs.core.with_meta.call(null,data,cljs.core.assoc.call(null,m,new cljs.core.Keyword("om.core","path","om.core/path",2667619423),path));return (new om.core.Pure({"__om_path": path, "__om_app_state": new cljs.core.Keyword("om.core","state","om.core/state",3158836371).cljs$core$IFn$_invoke$arity$1(m), "__om_value": data, "__om_tvalue": data},f.call(null,cursor_SINGLEQUOTE_)));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var map__16851 = sorm;var map__16851__$1 = ((cljs.core.seq_QMARK_.call(null,map__16851))?cljs.core.apply.call(null,cljs.core.hash_map,map__16851):map__16851);var opts = cljs.core.get.call(null,map__16851__$1,new cljs.core.Keyword(null,"opts","opts",1017322386));var react_key = cljs.core.get.call(null,map__16851__$1,new cljs.core.Keyword(null,"react-key","react-key",4184082563));var key = cljs.core.get.call(null,map__16851__$1,new cljs.core.Keyword(null,"key","key",1014010321));var path = cljs.core.get.call(null,map__16851__$1,new cljs.core.Keyword(null,"path","path",1017337751));var dataf = cljs.core.get.call(null,sorm,new cljs.core.Keyword(null,"fn","fn",1013907514));var path__$1 = (((path == null))?new cljs.core.Keyword(null,"abs-path","abs-path",2681174034).cljs$core$IFn$_invoke$arity$1(sorm):path);var data = cljs.core.get_in.call(null,cursor,path__$1);var tdata = data;var data__$1 = ((!((dataf == null)))?dataf.call(null,data):data);var rkey = ((!((key == null)))?cljs.core.get.call(null,data__$1,key):((!((react_key == null)))?react_key:null));var m = cljs.core.meta.call(null,cursor);var path__$2 = ((cljs.core.contains_QMARK_.call(null,sorm,new cljs.core.Keyword(null,"abs-path","abs-path",2681174034)))?path__$1:cljs.core.into.call(null,new cljs.core.Keyword("om.core","path","om.core/path",2667619423).cljs$core$IFn$_invoke$arity$1(m),path__$1));var cursor_SINGLEQUOTE_ = cljs.core.with_meta.call(null,data__$1,cljs.core.assoc.call(null,m,new cljs.core.Keyword("om.core","path","om.core/path",2667619423),path__$2));return (new om.core.Pure({"key": rkey, "__om_path": path__$2, "__om_app_state": new cljs.core.Keyword("om.core","state","om.core/state",3158836371).cljs$core$IFn$_invoke$arity$1(m), "__om_value": data__$1, "__om_tvalue": tdata},(((opts == null))?f.call(null,cursor_SINGLEQUOTE_):f.call(null,cursor_SINGLEQUOTE_,opts))));
} else
{return null;
}
}
}
});
build = function(f,cursor,sorm){
switch(arguments.length){
case 2:
return build__2.call(this,f,cursor);
case 3:
return build__3.call(this,f,cursor,sorm);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build.cljs$core$IFn$_invoke$arity$2 = build__2;
build.cljs$core$IFn$_invoke$arity$3 = build__3;
return build;
})()
;
/**
* Given a cursor, a list of keys ks, mutate the tree at the path
* specified by the cursor + the keys by applying f to the specified
* value in the tree. If only given two arguments, assumed no list
* of keys was specified. An Om re-render will be triggered.
* @param {...*} var_args
*/
om.core.update_BANG_ = (function() {
var update_BANG_ = null;
var update_BANG___2 = (function (cursor,f){var m = cljs.core.meta.call(null,cursor);var path = new cljs.core.Keyword("om.core","path","om.core/path",2667619423).cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.empty_QMARK_.call(null,path))
{return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword("om.core","state","om.core/state",3158836371).cljs$core$IFn$_invoke$arity$1(m),f);
} else
{return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword("om.core","state","om.core/state",3158836371).cljs$core$IFn$_invoke$arity$1(m),cljs.core.update_in,path,f);
}
});
var update_BANG___3 = (function (cursor,ks,f){var m = cljs.core.meta.call(null,cursor);return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword("om.core","state","om.core/state",3158836371).cljs$core$IFn$_invoke$arity$1(m),cljs.core.update_in,cljs.core.into.call(null,new cljs.core.Keyword("om.core","path","om.core/path",2667619423).cljs$core$IFn$_invoke$arity$1(m),ks),f);
});
var update_BANG___4 = (function (cursor,ks,f,a){var m = cljs.core.meta.call(null,cursor);return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword("om.core","state","om.core/state",3158836371).cljs$core$IFn$_invoke$arity$1(m),cljs.core.update_in,cljs.core.into.call(null,new cljs.core.Keyword("om.core","path","om.core/path",2667619423).cljs$core$IFn$_invoke$arity$1(m),ks),f,a);
});
var update_BANG___5 = (function (cursor,ks,f,a,b){var m = cljs.core.meta.call(null,cursor);return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword("om.core","state","om.core/state",3158836371).cljs$core$IFn$_invoke$arity$1(m),cljs.core.update_in,cljs.core.into.call(null,new cljs.core.Keyword("om.core","path","om.core/path",2667619423).cljs$core$IFn$_invoke$arity$1(m),ks),f,a,b);
});
var update_BANG___6 = (function (cursor,ks,f,a,b,c){var m = cljs.core.meta.call(null,cursor);return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword("om.core","state","om.core/state",3158836371).cljs$core$IFn$_invoke$arity$1(m),cljs.core.update_in,cljs.core.into.call(null,new cljs.core.Keyword("om.core","path","om.core/path",2667619423).cljs$core$IFn$_invoke$arity$1(m),ks),f,a,b,c);
});
var update_BANG___7 = (function (cursor,ks,f,a,b,c,d){var m = cljs.core.meta.call(null,cursor);return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword("om.core","state","om.core/state",3158836371).cljs$core$IFn$_invoke$arity$1(m),cljs.core.update_in,cljs.core.into.call(null,new cljs.core.Keyword("om.core","path","om.core/path",2667619423).cljs$core$IFn$_invoke$arity$1(m),ks),f,a,b,c,d);
});
var update_BANG___8 = (function() { 
var G__16852__delegate = function (cursor,ks,f,a,b,c,d,args){var m = cljs.core.meta.call(null,cursor);return cljs.core.apply.call(null,cljs.core.swap_BANG_,new cljs.core.Keyword("om.core","state","om.core/state",3158836371).cljs$core$IFn$_invoke$arity$1(m),cljs.core.update_in,cljs.core.into.call(null,new cljs.core.Keyword("om.core","path","om.core/path",2667619423).cljs$core$IFn$_invoke$arity$1(m),ks),f,a,b,c,d,args);
};
var G__16852 = function (cursor,ks,f,a,b,c,d,var_args){
var args = null;if (arguments.length > 7) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return G__16852__delegate.call(this,cursor,ks,f,a,b,c,d,args);};
G__16852.cljs$lang$maxFixedArity = 7;
G__16852.cljs$lang$applyTo = (function (arglist__16853){
var cursor = cljs.core.first(arglist__16853);
arglist__16853 = cljs.core.next(arglist__16853);
var ks = cljs.core.first(arglist__16853);
arglist__16853 = cljs.core.next(arglist__16853);
var f = cljs.core.first(arglist__16853);
arglist__16853 = cljs.core.next(arglist__16853);
var a = cljs.core.first(arglist__16853);
arglist__16853 = cljs.core.next(arglist__16853);
var b = cljs.core.first(arglist__16853);
arglist__16853 = cljs.core.next(arglist__16853);
var c = cljs.core.first(arglist__16853);
arglist__16853 = cljs.core.next(arglist__16853);
var d = cljs.core.first(arglist__16853);
var args = cljs.core.rest(arglist__16853);
return G__16852__delegate(cursor,ks,f,a,b,c,d,args);
});
G__16852.cljs$core$IFn$_invoke$arity$variadic = G__16852__delegate;
return G__16852;
})()
;
update_BANG_ = function(cursor,ks,f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return update_BANG___2.call(this,cursor,ks);
case 3:
return update_BANG___3.call(this,cursor,ks,f);
case 4:
return update_BANG___4.call(this,cursor,ks,f,a);
case 5:
return update_BANG___5.call(this,cursor,ks,f,a,b);
case 6:
return update_BANG___6.call(this,cursor,ks,f,a,b,c);
case 7:
return update_BANG___7.call(this,cursor,ks,f,a,b,c,d);
default:
return update_BANG___8.cljs$core$IFn$_invoke$arity$variadic(cursor,ks,f,a,b,c,d, cljs.core.array_seq(arguments, 7));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_BANG_.cljs$lang$maxFixedArity = 7;
update_BANG_.cljs$lang$applyTo = update_BANG___8.cljs$lang$applyTo;
update_BANG_.cljs$core$IFn$_invoke$arity$2 = update_BANG___2;
update_BANG_.cljs$core$IFn$_invoke$arity$3 = update_BANG___3;
update_BANG_.cljs$core$IFn$_invoke$arity$4 = update_BANG___4;
update_BANG_.cljs$core$IFn$_invoke$arity$5 = update_BANG___5;
update_BANG_.cljs$core$IFn$_invoke$arity$6 = update_BANG___6;
update_BANG_.cljs$core$IFn$_invoke$arity$7 = update_BANG___7;
update_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_BANG___8.cljs$core$IFn$_invoke$arity$variadic;
return update_BANG_;
})()
;
/**
* A helper function to get at React refs. Given a owning pure node
* extract the ref specified by name. Note the life cycle protocol methods
* all pass the owner as an argument, ie. IRender.
*/
om.core.get_node = (function get_node(owner,name){var temp__4092__auto__ = owner.refs;if(cljs.core.truth_(temp__4092__auto__))
{var refs = temp__4092__auto__;return (refs[name]).getDOMNode();
} else
{return null;
}
});
/**
* Takes a pure owning component, a sequential list of keys and value and
* sets the state of the component. Conceptually analagous to React
* setState.
*/
om.core.set_state_BANG_ = (function set_state_BANG_(owner,ks,v){var props = owner.props;var state = owner.state;var app_state = (props["__om_app_state"]);var path = (props["__om_path"]);var value = (props["__om_tvalue"]);var pstate = (function (){var or__3391__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(or__3391__auto__))
{return or__3391__auto__;
} else
{return (state["__om_state"]);
}
})();(state["__om_pending_state"] = cljs.core.assoc_in.call(null,pstate,ks,v));
if(!(cljs.core.empty_QMARK_.call(null,path)))
{return cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc_in,path,value);
} else
{return cljs.core.reset_BANG_.call(null,app_state,value);
}
});
/**
* Takes a pure owning component and sequential list of keys and returns
* a property if it exists. Will never return pending state values.
*/
om.core.get_state = (function() {
var get_state = null;
var get_state__1 = (function (owner){return (owner.state["__om_state"]);
});
var get_state__2 = (function (owner,ks){if(!(cljs.core.empty_QMARK_.call(null,ks)))
{return cljs.core.get_in.call(null,(owner.state["__om_state"]),ks);
} else
{return get_state.call(null,owner);
}
});
get_state = function(owner,ks){
switch(arguments.length){
case 1:
return get_state__1.call(this,owner);
case 2:
return get_state__2.call(this,owner,ks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_state.cljs$core$IFn$_invoke$arity$1 = get_state__1;
get_state.cljs$core$IFn$_invoke$arity$2 = get_state__2;
return get_state;
})()
;

//# sourceMappingURL=core.js.map