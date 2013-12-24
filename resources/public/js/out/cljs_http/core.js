// Compiled by ClojureScript 0.0-2127
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs_http.util');
goog.require('cljs_http.util');
goog.require('goog.net.XhrIo');
/**
* Execute the HTTP request corresponding to the given Ring request
* map and return a core.async channel.
*/
cljs_http.core.request = (function request(p__16796){var map__16798 = p__16796;var map__16798__$1 = ((cljs.core.seq_QMARK_.call(null,map__16798))?cljs.core.apply.call(null,cljs.core.hash_map,map__16798):map__16798);var request__$1 = map__16798__$1;var body = cljs.core.get.call(null,map__16798__$1,new cljs.core.Keyword(null,"body","body",1016933652));var headers = cljs.core.get.call(null,map__16798__$1,new cljs.core.Keyword(null,"headers","headers",1809212152));var request_method = cljs.core.get.call(null,map__16798__$1,new cljs.core.Keyword(null,"request-method","request-method",1993477457));var channel = cljs.core.async.chan.call(null);var method = cljs.core.name.call(null,(function (){var or__3391__auto__ = request_method;if(cljs.core.truth_(or__3391__auto__))
{return or__3391__auto__;
} else
{return new cljs.core.Keyword(null,"get","get",1014006472);
}
})());var timeout = (function (){var or__3391__auto__ = new cljs.core.Keyword(null,"timeout","timeout",3994960083).cljs$core$IFn$_invoke$arity$1(request__$1);if(cljs.core.truth_(or__3391__auto__))
{return or__3391__auto__;
} else
{return 0;
}
})();var headers__$1 = cljs_http.util.build_headers.call(null,headers);goog.net.XhrIo.send(cljs_http.util.build_url.call(null,request__$1),(function (p1__16795_SHARP_){var target = p1__16795_SHARP_.target;cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",4416389988),target.getStatus(),new cljs.core.Keyword(null,"body","body",1016933652),target.getResponseText(),new cljs.core.Keyword(null,"headers","headers",1809212152),cljs_http.util.parse_headers.call(null,target.getAllResponseHeaders())], null));
return cljs.core.async.close_BANG_.call(null,channel);
}),method,body,headers__$1,timeout,true);
return channel;
});

//# sourceMappingURL=core.js.map