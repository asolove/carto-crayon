// Compiled by ClojureScript 0.0-2127
goog.provide('cljs_http.util');
goog.require('cljs.core');
goog.require('no.en.core');
goog.require('clojure.string');
goog.require('no.en.core');
goog.require('goog.userAgent');
goog.require('goog.userAgent');
goog.require('goog.json');
goog.require('goog.json');
goog.require('clojure.string');
goog.require('goog.Uri');
/**
* Returns the value of the HTTP basic authentication header for
* `credentials`.
*/
cljs_http.util.basic_auth = (function basic_auth(credentials){if(cljs.core.truth_(credentials))
{var vec__16785 = ((cljs.core.map_QMARK_.call(null,credentials))?cljs.core.map.call(null,credentials,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"username","username",748190792),new cljs.core.Keyword(null,"password","password",2230889997)], null)):credentials);var username = cljs.core.nth.call(null,vec__16785,0,null);var password = cljs.core.nth.call(null,vec__16785,1,null);return [cljs.core.str("Basic "),cljs.core.str(no.en.core.base64_encode.call(null,[cljs.core.str(username),cljs.core.str(":"),cljs.core.str(password)].join('')))].join('');
} else
{return null;
}
});
/**
* Build the url from the request map.
*/
cljs_http.util.build_url = (function build_url(p__16786){var map__16789 = p__16786;var map__16789__$1 = ((cljs.core.seq_QMARK_.call(null,map__16789))?cljs.core.apply.call(null,cljs.core.hash_map,map__16789):map__16789);var query_string = cljs.core.get.call(null,map__16789__$1,new cljs.core.Keyword(null,"query-string","query-string",1183691816));var uri = cljs.core.get.call(null,map__16789__$1,new cljs.core.Keyword(null,"uri","uri",1014020318));var server_port = cljs.core.get.call(null,map__16789__$1,new cljs.core.Keyword(null,"server-port","server-port",4503998525));var server_name = cljs.core.get.call(null,map__16789__$1,new cljs.core.Keyword(null,"server-name","server-name",4503925319));var scheme = cljs.core.get.call(null,map__16789__$1,new cljs.core.Keyword(null,"scheme","scheme",4400883991));return [cljs.core.str((function (){var G__16790 = (new goog.Uri());G__16790.setScheme(cljs.core.name.call(null,(function (){var or__3391__auto__ = scheme;if(cljs.core.truth_(or__3391__auto__))
{return or__3391__auto__;
} else
{return new cljs.core.Keyword(null,"http","http",1017117690);
}
})()));
G__16790.setDomain(server_name);
G__16790.setPort(server_port);
G__16790.setPath(uri);
G__16790.setQuery(query_string,true);
return G__16790;
})())].join('');
});
/**
* Returns dash separeted string `s` in camel case.
*/
cljs_http.util.camelize = (function camelize(s){return clojure.string.join.call(null,"-",cljs.core.map.call(null,clojure.string.capitalize,clojure.string.split.call(null,[cljs.core.str(s)].join(''),/-/)));
});
/**
* Build the headers from the map.
*/
cljs_http.util.build_headers = (function build_headers(m){return cljs.core.clj__GT_js.call(null,cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs_http.util.camelize,cljs.core.keys.call(null,m)),cljs.core.vals.call(null,m)));
});
/**
* Returns the user agent.
*/
cljs_http.util.user_agent = (function user_agent(){return goog.userAgent.getUserAgentString();
});
/**
* Returns true if the user agent is an Android client.
*/
cljs_http.util.android_QMARK_ = (function android_QMARK_(){return cljs.core.re_matches.call(null,/.*android.*/i,cljs_http.util.user_agent.call(null));
});
/**
* JSON decode an object from `s`.
*/
cljs_http.util.json_decode = (function json_decode(s){var temp__4090__auto__ = goog.json.parse(s);if(cljs.core.truth_(temp__4090__auto__))
{var v = temp__4090__auto__;return cljs.core.js__GT_clj.call(null,v,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
} else
{return null;
}
});
/**
* JSON encode `x` into a String.
*/
cljs_http.util.json_encode = (function json_encode(x){return goog.json.serialize(cljs.core.clj__GT_js.call(null,x));
});
cljs_http.util.parse_headers = (function parse_headers(headers){return cljs.core.reduce.call(null,(function (p1__16792_SHARP_,p2__16791_SHARP_){var vec__16794 = clojure.string.split.call(null,p2__16791_SHARP_,/:\s+/);var k = cljs.core.nth.call(null,vec__16794,0,null);var v = cljs.core.nth.call(null,vec__16794,1,null);if(cljs.core.truth_((function (){var or__3391__auto__ = clojure.string.blank_QMARK_.call(null,k);if(cljs.core.truth_(or__3391__auto__))
{return or__3391__auto__;
} else
{return clojure.string.blank_QMARK_.call(null,v);
}
})()))
{return p1__16792_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__16792_SHARP_,clojure.string.lower_case.call(null,k),v);
}
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,(function (){var or__3391__auto__ = headers;if(cljs.core.truth_(or__3391__auto__))
{return or__3391__auto__;
} else
{return "";
}
})(),/(\n)|(\r)|(\r\n)|(\n\r)/));
});

//# sourceMappingURL=util.js.map