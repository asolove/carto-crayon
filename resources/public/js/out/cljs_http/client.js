// Compiled by ClojureScript 0.0-2127
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('no.en.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('no.en.core');
goog.require('cljs_http.core');
goog.require('cljs_http.util');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('cljs_http.util');
goog.require('goog.Uri');
goog.require('cljs_http.core');
cljs_http.client.if_pos = (function if_pos(v){if(cljs.core.truth_((function (){var and__3379__auto__ = v;if(cljs.core.truth_(and__3379__auto__))
{return (v > 0);
} else
{return and__3379__auto__;
}
})()))
{return v;
} else
{return null;
}
});
/**
* Parse `s` as query params and return a hash map.
*/
cljs_http.client.parse_query_params = (function parse_query_params(s){if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,s)))
{return cljs.core.reduce.call(null,(function (p1__16635_SHARP_,p2__16634_SHARP_){var vec__16637 = clojure.string.split.call(null,p2__16634_SHARP_,/=/);var k = cljs.core.nth.call(null,vec__16637,0,null);var v = cljs.core.nth.call(null,vec__16637,1,null);return cljs.core.assoc.call(null,p1__16635_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,[cljs.core.str(s)].join(''),/&/));
} else
{return null;
}
});
/**
* Parse `url` into a hash map.
*/
cljs_http.client.parse_url = (function parse_url(url){if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,url)))
{var uri = goog.Uri.parse(url);var query_data = uri.getQueryData();return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",4400883991),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",4503925319),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",4503998525),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",1014020318),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",1183691816),((cljs.core.not.call(null,query_data.isEmpty()))?[cljs.core.str(query_data)].join(''):null),new cljs.core.Keyword(null,"query-params","query-params",1080249757),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,[cljs.core.str(query_data)].join('')):null)], null);
} else
{return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [200,null,201,null,202,null,203,null,204,null,300,null,205,null,301,null,206,null,302,null,207,null,303,null,307,null], null), null);
cljs_http.client.generate_query_string = (function generate_query_string(params){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__16640){var vec__16641 = p__16640;var k = cljs.core.nth.call(null,vec__16641,0,null);var v = cljs.core.nth.call(null,vec__16641,1,null);return [cljs.core.str(no.en.core.url_encode.call(null,cljs.core.name.call(null,k))),cljs.core.str("="),cljs.core.str(no.en.core.url_encode.call(null,[cljs.core.str(v)].join('')))].join('');
}),params));
});
/**
* Decocde the :body of `response` with `decode-fn` if the content type matches.
*/
cljs_http.client.decode_body = (function decode_body(response,decode_fn,content_type){if(cljs.core.truth_(cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("(?i)"),cljs.core.str(content_type)].join('')),[cljs.core.str(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",1809212152).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''))))
{return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",1016933652)], null),decode_fn);
} else
{return response;
}
});
/**
* Encode :edn-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_edn_params = (function wrap_edn_params(client){return (function (request){var temp__4090__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",1007197398).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(temp__4090__auto__))
{var params = temp__4090__auto__;return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",1007197398)),new cljs.core.Keyword(null,"body","body",1016933652),cljs.core.pr_str.call(null,params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",1809212152),"content-type"], null),"application/edn"));
} else
{return client.call(null,request);
}
});
});
/**
* Decode application/edn responses.
*/
cljs_http.client.wrap_edn_response = (function wrap_edn_response(client){return (function (request){var channel = cljs.core.async.chan.call(null);var c__6052__auto___16676 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6053__auto__ = (function (){var switch__5982__auto__ = (function (state_16666){var state_val_16667 = (state_16666[1]);if((state_val_16667 === 2))
{var inst_16661 = (state_16666[2]);var inst_16662 = cljs_http.client.decode_body.call(null,inst_16661,cljs.reader.read_string,"application/edn");var inst_16663 = cljs.core.async.put_BANG_.call(null,channel,inst_16662);var inst_16664 = cljs.core.async.close_BANG_.call(null,channel);var state_16666__$1 = (function (){var statearr_16668 = state_16666;(statearr_16668[7] = inst_16663);
return statearr_16668;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16666__$1,inst_16664);
} else
{if((state_val_16667 === 1))
{var inst_16659 = client.call(null,request);var state_16666__$1 = state_16666;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16666__$1,2,inst_16659);
} else
{return null;
}
}
});return ((function (switch__5982__auto__){
return (function() {
var state_machine__5983__auto__ = null;
var state_machine__5983__auto____0 = (function (){var statearr_16672 = [null,null,null,null,null,null,null,null];(statearr_16672[0] = state_machine__5983__auto__);
(statearr_16672[1] = 1);
return statearr_16672;
});
var state_machine__5983__auto____1 = (function (state_16666){while(true){
var ret_value__5984__auto__ = (function (){try{while(true){
var result__5985__auto__ = switch__5982__auto__.call(null,state_16666);if(cljs.core.keyword_identical_QMARK_.call(null,result__5985__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5985__auto__;
}
break;
}
}catch (e16673){if((e16673 instanceof Object))
{var ex__5986__auto__ = e16673;var statearr_16674_16677 = state_16666;(statearr_16674_16677[5] = ex__5986__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16666);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16673;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16678 = state_16666;
state_16666 = G__16678;
continue;
}
} else
{return ret_value__5984__auto__;
}
break;
}
});
state_machine__5983__auto__ = function(state_16666){
switch(arguments.length){
case 0:
return state_machine__5983__auto____0.call(this);
case 1:
return state_machine__5983__auto____1.call(this,state_16666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5983__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5983__auto____0;
state_machine__5983__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5983__auto____1;
return state_machine__5983__auto__;
})()
;})(switch__5982__auto__))
})();var state__6054__auto__ = (function (){var statearr_16675 = f__6053__auto__.call(null);(statearr_16675[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6052__auto___16676);
return statearr_16675;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6054__auto__);
}));
return channel;
});
});
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_accept = (function() { 
var wrap_accept__delegate = function (client,p__16679){var vec__16681 = p__16679;var accept = cljs.core.nth.call(null,vec__16681,0,null);return (function (request){var temp__4090__auto__ = (function (){var or__3391__auto__ = new cljs.core.Keyword(null,"accept","accept",3885410426).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__3391__auto__))
{return or__3391__auto__;
} else
{return accept;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var accept__$1 = temp__4090__auto__;return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",1809212152),"accept"], null),accept__$1));
} else
{return client.call(null,request);
}
});
};
var wrap_accept = function (client,var_args){
var p__16679 = null;if (arguments.length > 1) {
  p__16679 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_accept__delegate.call(this,client,p__16679);};
wrap_accept.cljs$lang$maxFixedArity = 1;
wrap_accept.cljs$lang$applyTo = (function (arglist__16682){
var client = cljs.core.first(arglist__16682);
var p__16679 = cljs.core.rest(arglist__16682);
return wrap_accept__delegate(client,p__16679);
});
wrap_accept.cljs$core$IFn$_invoke$arity$variadic = wrap_accept__delegate;
return wrap_accept;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_content_type = (function() { 
var wrap_content_type__delegate = function (client,p__16683){var vec__16685 = p__16683;var content_type = cljs.core.nth.call(null,vec__16685,0,null);return (function (request){var temp__4090__auto__ = (function (){var or__3391__auto__ = new cljs.core.Keyword(null,"content-type","content-type",1799574400).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__3391__auto__))
{return or__3391__auto__;
} else
{return content_type;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var content_type__$1 = temp__4090__auto__;return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",1809212152),"content-type"], null),content_type__$1));
} else
{return client.call(null,request);
}
});
};
var wrap_content_type = function (client,var_args){
var p__16683 = null;if (arguments.length > 1) {
  p__16683 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_content_type__delegate.call(this,client,p__16683);};
wrap_content_type.cljs$lang$maxFixedArity = 1;
wrap_content_type.cljs$lang$applyTo = (function (arglist__16686){
var client = cljs.core.first(arglist__16686);
var p__16683 = cljs.core.rest(arglist__16686);
return wrap_content_type__delegate(client,p__16683);
});
wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = wrap_content_type__delegate;
return wrap_content_type;
})()
;
/**
* Encode :json-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_json_params = (function wrap_json_params(client){return (function (request){var temp__4090__auto__ = new cljs.core.Keyword(null,"json-params","json-params",2645529981).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(temp__4090__auto__))
{var params = temp__4090__auto__;return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",2645529981)),new cljs.core.Keyword(null,"body","body",1016933652),cljs_http.util.json_encode.call(null,params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",1809212152),"content-type"], null),"application/json"));
} else
{return client.call(null,request);
}
});
});
/**
* Decode application/json responses.
*/
cljs_http.client.wrap_json_response = (function wrap_json_response(client){return (function (request){var channel = cljs.core.async.chan.call(null);var c__6052__auto___16721 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6053__auto__ = (function (){var switch__5982__auto__ = (function (state_16711){var state_val_16712 = (state_16711[1]);if((state_val_16712 === 2))
{var inst_16706 = (state_16711[2]);var inst_16707 = cljs_http.client.decode_body.call(null,inst_16706,cljs_http.util.json_decode,"application/json");var inst_16708 = cljs.core.async.put_BANG_.call(null,channel,inst_16707);var inst_16709 = cljs.core.async.close_BANG_.call(null,channel);var state_16711__$1 = (function (){var statearr_16713 = state_16711;(statearr_16713[7] = inst_16708);
return statearr_16713;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16711__$1,inst_16709);
} else
{if((state_val_16712 === 1))
{var inst_16704 = client.call(null,request);var state_16711__$1 = state_16711;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16711__$1,2,inst_16704);
} else
{return null;
}
}
});return ((function (switch__5982__auto__){
return (function() {
var state_machine__5983__auto__ = null;
var state_machine__5983__auto____0 = (function (){var statearr_16717 = [null,null,null,null,null,null,null,null];(statearr_16717[0] = state_machine__5983__auto__);
(statearr_16717[1] = 1);
return statearr_16717;
});
var state_machine__5983__auto____1 = (function (state_16711){while(true){
var ret_value__5984__auto__ = (function (){try{while(true){
var result__5985__auto__ = switch__5982__auto__.call(null,state_16711);if(cljs.core.keyword_identical_QMARK_.call(null,result__5985__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5985__auto__;
}
break;
}
}catch (e16718){if((e16718 instanceof Object))
{var ex__5986__auto__ = e16718;var statearr_16719_16722 = state_16711;(statearr_16719_16722[5] = ex__5986__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16711);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16718;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16723 = state_16711;
state_16711 = G__16723;
continue;
}
} else
{return ret_value__5984__auto__;
}
break;
}
});
state_machine__5983__auto__ = function(state_16711){
switch(arguments.length){
case 0:
return state_machine__5983__auto____0.call(this);
case 1:
return state_machine__5983__auto____1.call(this,state_16711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5983__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5983__auto____0;
state_machine__5983__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5983__auto____1;
return state_machine__5983__auto__;
})()
;})(switch__5982__auto__))
})();var state__6054__auto__ = (function (){var statearr_16720 = f__6053__auto__.call(null);(statearr_16720[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6052__auto___16721);
return statearr_16720;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6054__auto__);
}));
return channel;
});
});
cljs_http.client.wrap_query_params = (function wrap_query_params(client){return (function (p__16726){var map__16727 = p__16726;var map__16727__$1 = ((cljs.core.seq_QMARK_.call(null,map__16727))?cljs.core.apply.call(null,cljs.core.hash_map,map__16727):map__16727);var req = map__16727__$1;var query_params = cljs.core.get.call(null,map__16727__$1,new cljs.core.Keyword(null,"query-params","query-params",1080249757));if(cljs.core.truth_(query_params))
{return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",1080249757)),new cljs.core.Keyword(null,"query-string","query-string",1183691816),cljs_http.client.generate_query_string.call(null,query_params)));
} else
{return client.call(null,req);
}
});
});
cljs_http.client.wrap_android_cors_bugfix = (function wrap_android_cors_bugfix(client){return (function (request){return client.call(null,(cljs.core.truth_(cljs_http.util.android_QMARK_.call(null))?cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",1080249757),new cljs.core.Keyword(null,"android","android",4447480289)], null),Math.random.call(null)):request));
});
});
cljs_http.client.wrap_method = (function wrap_method(client){return (function (req){var temp__4090__auto__ = new cljs.core.Keyword(null,"method","method",4231316563).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(temp__4090__auto__))
{var m = temp__4090__auto__;return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",4231316563)),new cljs.core.Keyword(null,"request-method","request-method",1993477457),m));
} else
{return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function wrap_server_name(client,server_name){return (function (p1__16728_SHARP_){return client.call(null,cljs.core.assoc.call(null,p1__16728_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",4503925319),server_name));
});
});
cljs_http.client.wrap_url = (function wrap_url(client){return (function (p__16732){var map__16733 = p__16732;var map__16733__$1 = ((cljs.core.seq_QMARK_.call(null,map__16733))?cljs.core.apply.call(null,cljs.core.hash_map,map__16733):map__16733);var req = map__16733__$1;var query_params = cljs.core.get.call(null,map__16733__$1,new cljs.core.Keyword(null,"query-params","query-params",1080249757));var temp__4090__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(req));if(cljs.core.truth_(temp__4090__auto__))
{var spec = temp__4090__auto__;return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",1014020321)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",1080249757)], null),(function (p1__16729_SHARP_){return cljs.core.merge.call(null,p1__16729_SHARP_,query_params);
})));
} else
{return client.call(null,req);
}
});
});
/**
* Middleware converting the :basic-auth option or `credentials` into
* an Authorization header.
* @param {...*} var_args
*/
cljs_http.client.wrap_basic_auth = (function() { 
var wrap_basic_auth__delegate = function (client,p__16734){var vec__16736 = p__16734;var credentials = cljs.core.nth.call(null,vec__16736,0,null);return (function (req){var credentials__$1 = (function (){var or__3391__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",4138175321).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(or__3391__auto__))
{return or__3391__auto__;
} else
{return credentials;
}
})();if(!(cljs.core.empty_QMARK_.call(null,credentials__$1)))
{return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",4138175321)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",1809212152),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else
{return client.call(null,req);
}
});
};
var wrap_basic_auth = function (client,var_args){
var p__16734 = null;if (arguments.length > 1) {
  p__16734 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_basic_auth__delegate.call(this,client,p__16734);};
wrap_basic_auth.cljs$lang$maxFixedArity = 1;
wrap_basic_auth.cljs$lang$applyTo = (function (arglist__16737){
var client = cljs.core.first(arglist__16737);
var p__16734 = cljs.core.rest(arglist__16737);
return wrap_basic_auth__delegate(client,p__16734);
});
wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = wrap_basic_auth__delegate;
return wrap_basic_auth;
})()
;
/**
* Middleware converting the :oauth-token option into an Authorization header.
*/
cljs_http.client.wrap_oauth = (function wrap_oauth(client){return (function (req){var temp__4090__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",4322509493).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(temp__4090__auto__))
{var oauth_token = temp__4090__auto__;return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",4322509493)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",1809212152),"authorization"], null),[cljs.core.str("Bearer "),cljs.core.str(oauth_token)].join('')));
} else
{return client.call(null,req);
}
});
});
/**
* Returns a battaries-included HTTP request function coresponding to the given
* core client. See client/client.
*/
cljs_http.client.wrap_request = (function wrap_request(request){return cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_android_cors_bugfix.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,request))))))))));
});
/**
* Executes the HTTP request corresponding to the given map and returns the
* response map for corresponding to the resulting HTTP response.
* 
* In addition to the standard Ring request keys, the following keys are also
* recognized:
* * :url
* * :method
* * :query-params
*/
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.delete$ = (function() { 
var delete$__delegate = function (url,p__16738){var vec__16740 = p__16738;var req = cljs.core.nth.call(null,vec__16740,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"delete","delete",3973413149),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var delete$ = function (url,var_args){
var p__16738 = null;if (arguments.length > 1) {
  p__16738 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return delete$__delegate.call(this,url,p__16738);};
delete$.cljs$lang$maxFixedArity = 1;
delete$.cljs$lang$applyTo = (function (arglist__16741){
var url = cljs.core.first(arglist__16741);
var p__16738 = cljs.core.rest(arglist__16741);
return delete$__delegate(url,p__16738);
});
delete$.cljs$core$IFn$_invoke$arity$variadic = delete$__delegate;
return delete$;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.get = (function() { 
var get__delegate = function (url,p__16742){var vec__16744 = p__16742;var req = cljs.core.nth.call(null,vec__16744,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"get","get",1014006472),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var get = function (url,var_args){
var p__16742 = null;if (arguments.length > 1) {
  p__16742 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return get__delegate.call(this,url,p__16742);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__16745){
var url = cljs.core.first(arglist__16745);
var p__16742 = cljs.core.rest(arglist__16745);
return get__delegate(url,p__16742);
});
get.cljs$core$IFn$_invoke$arity$variadic = get__delegate;
return get;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.head = (function() { 
var head__delegate = function (url,p__16746){var vec__16748 = p__16746;var req = cljs.core.nth.call(null,vec__16748,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"head","head",1017102674),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var head = function (url,var_args){
var p__16746 = null;if (arguments.length > 1) {
  p__16746 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return head__delegate.call(this,url,p__16746);};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = (function (arglist__16749){
var url = cljs.core.first(arglist__16749);
var p__16746 = cljs.core.rest(arglist__16749);
return head__delegate(url,p__16746);
});
head.cljs$core$IFn$_invoke$arity$variadic = head__delegate;
return head;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.move = (function() { 
var move__delegate = function (url,p__16750){var vec__16752 = p__16750;var req = cljs.core.nth.call(null,vec__16752,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"move","move",1017261891),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var move = function (url,var_args){
var p__16750 = null;if (arguments.length > 1) {
  p__16750 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return move__delegate.call(this,url,p__16750);};
move.cljs$lang$maxFixedArity = 1;
move.cljs$lang$applyTo = (function (arglist__16753){
var url = cljs.core.first(arglist__16753);
var p__16750 = cljs.core.rest(arglist__16753);
return move__delegate(url,p__16750);
});
move.cljs$core$IFn$_invoke$arity$variadic = move__delegate;
return move;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.options = (function() { 
var options__delegate = function (url,p__16754){var vec__16756 = p__16754;var req = cljs.core.nth.call(null,vec__16756,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"options","options",4059396624),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var options = function (url,var_args){
var p__16754 = null;if (arguments.length > 1) {
  p__16754 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return options__delegate.call(this,url,p__16754);};
options.cljs$lang$maxFixedArity = 1;
options.cljs$lang$applyTo = (function (arglist__16757){
var url = cljs.core.first(arglist__16757);
var p__16754 = cljs.core.rest(arglist__16757);
return options__delegate(url,p__16754);
});
options.cljs$core$IFn$_invoke$arity$variadic = options__delegate;
return options;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.patch = (function() { 
var patch__delegate = function (url,p__16758){var vec__16760 = p__16758;var req = cljs.core.nth.call(null,vec__16760,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"patch","patch",1120342970),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var patch = function (url,var_args){
var p__16758 = null;if (arguments.length > 1) {
  p__16758 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return patch__delegate.call(this,url,p__16758);};
patch.cljs$lang$maxFixedArity = 1;
patch.cljs$lang$applyTo = (function (arglist__16761){
var url = cljs.core.first(arglist__16761);
var p__16758 = cljs.core.rest(arglist__16761);
return patch__delegate(url,p__16758);
});
patch.cljs$core$IFn$_invoke$arity$variadic = patch__delegate;
return patch;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.post = (function() { 
var post__delegate = function (url,p__16762){var vec__16764 = p__16762;var req = cljs.core.nth.call(null,vec__16764,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"post","post",1017351186),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var post = function (url,var_args){
var p__16762 = null;if (arguments.length > 1) {
  p__16762 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return post__delegate.call(this,url,p__16762);};
post.cljs$lang$maxFixedArity = 1;
post.cljs$lang$applyTo = (function (arglist__16765){
var url = cljs.core.first(arglist__16765);
var p__16762 = cljs.core.rest(arglist__16765);
return post__delegate(url,p__16762);
});
post.cljs$core$IFn$_invoke$arity$variadic = post__delegate;
return post;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.put = (function() { 
var put__delegate = function (url,p__16766){var vec__16768 = p__16766;var req = cljs.core.nth.call(null,vec__16768,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"put","put",1014015617),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var put = function (url,var_args){
var p__16766 = null;if (arguments.length > 1) {
  p__16766 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return put__delegate.call(this,url,p__16766);};
put.cljs$lang$maxFixedArity = 1;
put.cljs$lang$applyTo = (function (arglist__16769){
var url = cljs.core.first(arglist__16769);
var p__16766 = cljs.core.rest(arglist__16769);
return put__delegate(url,p__16766);
});
put.cljs$core$IFn$_invoke$arity$variadic = put__delegate;
return put;
})()
;

//# sourceMappingURL=client.js.map