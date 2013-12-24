// Compiled by ClojureScript 0.0-2127
goog.provide('no.en.core');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.crypt.base64');
goog.require('goog.crypt.base64');
goog.require('cljs.reader');
goog.require('clojure.string');
no.en.core.port_number = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"http","http",1017117690),80,new cljs.core.Keyword(null,"https","https",1113521245),443,new cljs.core.Keyword(null,"mysql","mysql",1118286868),3306,new cljs.core.Keyword(null,"postgresql","postgresql",3203390150),5432,new cljs.core.Keyword(null,"rabbitmq","rabbitmq",918735536),5672], null);
no.en.core.url_regex = /([^:]+):\/\/(([^:]+):([^@]+)@)?(([^:\/]+)(:([0-9]+))?((\/[^?]*)(\?(.*))?)?)/;
/**
* Returns `bytes` as an UTF-8 encoded string.
*/
no.en.core.utf8_string = (function utf8_string(bytes){throw cljs.core.ex_info.call(null,"utf8-string not implemented yet",bytes);
});
/**
* Returns `s` as a Base64 encoded string.
*/
no.en.core.base64_encode = (function base64_encode(bytes){if(cljs.core.truth_(bytes))
{return goog.crypt.base64.encodeString(bytes,false);
} else
{return null;
}
});
/**
* Returns `s` as a Base64 decoded string.
*/
no.en.core.base64_decode = (function base64_decode(s){if(cljs.core.truth_(s))
{return goog.crypt.base64.decodeString(s,false);
} else
{return null;
}
});
/**
* Returns `s` as an URL encoded string.
* @param {...*} var_args
*/
no.en.core.url_encode = (function() { 
var url_encode__delegate = function (s,p__16799){var vec__16801 = p__16799;var encoding = cljs.core.nth.call(null,vec__16801,0,null);if(cljs.core.truth_(s))
{return clojure.string.replace.call(null,encodeURIComponent([cljs.core.str(s)].join('')),"*","%2A");
} else
{return null;
}
};
var url_encode = function (s,var_args){
var p__16799 = null;if (arguments.length > 1) {
  p__16799 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return url_encode__delegate.call(this,s,p__16799);};
url_encode.cljs$lang$maxFixedArity = 1;
url_encode.cljs$lang$applyTo = (function (arglist__16802){
var s = cljs.core.first(arglist__16802);
var p__16799 = cljs.core.rest(arglist__16802);
return url_encode__delegate(s,p__16799);
});
url_encode.cljs$core$IFn$_invoke$arity$variadic = url_encode__delegate;
return url_encode;
})()
;
/**
* Returns `s` as an URL decoded string.
* @param {...*} var_args
*/
no.en.core.url_decode = (function() { 
var url_decode__delegate = function (s,p__16803){var vec__16805 = p__16803;var encoding = cljs.core.nth.call(null,vec__16805,0,null);if(cljs.core.truth_(s))
{return decodeURIComponent(s);
} else
{return null;
}
};
var url_decode = function (s,var_args){
var p__16803 = null;if (arguments.length > 1) {
  p__16803 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return url_decode__delegate.call(this,s,p__16803);};
url_decode.cljs$lang$maxFixedArity = 1;
url_decode.cljs$lang$applyTo = (function (arglist__16806){
var s = cljs.core.first(arglist__16806);
var p__16803 = cljs.core.rest(arglist__16806);
return url_decode__delegate(s,p__16803);
});
url_decode.cljs$core$IFn$_invoke$arity$variadic = url_decode__delegate;
return url_decode;
})()
;
no.en.core.pow = (function pow(n,x){return Math.pow(n,x);
});
no.en.core.byte_scale = cljs.core.PersistentHashMap.fromArrays(["B","E","G","K","M","P","T","Y","Z"],[no.en.core.pow.call(null,1024,0),no.en.core.pow.call(null,1024,6),no.en.core.pow.call(null,1024,3),no.en.core.pow.call(null,1024,1),no.en.core.pow.call(null,1024,2),no.en.core.pow.call(null,1024,5),no.en.core.pow.call(null,1024,4),no.en.core.pow.call(null,1024,8),no.en.core.pow.call(null,1024,7)]);
no.en.core.apply_unit = (function apply_unit(number,unit){if(typeof unit === 'string')
{var G__16809 = clojure.string.upper_case.call(null,unit);if(new cljs.core.Keyword(null,"else","else",1017020587))
{var G__16810 = unit;if(cljs.core._EQ_.call(null,"B",G__16810))
{return (number * 1000000000);
} else
{if(cljs.core._EQ_.call(null,"M",G__16810))
{return (number * 1000000);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(unit)].join('')));
} else
{return null;
}
}
}
} else
{return null;
}
} else
{return number;
}
});
no.en.core.parse_number = (function parse_number(s,parse_fn){var temp__4090__auto__ = cljs.core.re_matches.call(null,/\s*([-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)(M|B)?.*/,[cljs.core.str(s)].join(''));if(cljs.core.truth_(temp__4090__auto__))
{var matches = temp__4090__auto__;var number = parse_fn.call(null,cljs.core.nth.call(null,matches,1));var unit = cljs.core.nth.call(null,matches,3);if(cljs.core.not.call(null,isNaN(number)))
{return no.en.core.apply_unit.call(null,number,unit);
} else
{return null;
}
} else
{return null;
}
});
no.en.core.parse_bytes = (function parse_bytes(s){var temp__4090__auto__ = cljs.core.re_matches.call(null,/\s*([-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)(B|K|M|G|T|P|E|Z|Y)?.*/,[cljs.core.str(s)].join(''));if(cljs.core.truth_(temp__4090__auto__))
{var matches = temp__4090__auto__;var number = cljs.reader.read_string.call(null,cljs.core.nth.call(null,matches,1));var unit = cljs.core.nth.call(null,matches,3);return cljs.core.long$.call(null,(cljs.core.long$.call(null,cljs.reader.read_string.call(null,[cljs.core.str(cljs.core.nth.call(null,matches,1))].join(''))) * cljs.core.get.call(null,no.en.core.byte_scale,clojure.string.upper_case.call(null,(function (){var or__3391__auto__ = unit;if(cljs.core.truth_(or__3391__auto__))
{return or__3391__auto__;
} else
{return "";
}
})()),1)));
} else
{return null;
}
});
/**
* Parse `s` as a integer number.
*/
no.en.core.parse_integer = (function parse_integer(s){return no.en.core.parse_number.call(null,s,(function (p1__16811_SHARP_){return parseInt(p1__16811_SHARP_);
}));
});
/**
* Parse `s` as a long number.
*/
no.en.core.parse_long = (function parse_long(s){return no.en.core.parse_number.call(null,s,(function (p1__16812_SHARP_){return parseInt(p1__16812_SHARP_);
}));
});
/**
* Parse `s` as a double number.
*/
no.en.core.parse_double = (function parse_double(s){return no.en.core.parse_number.call(null,s,(function (p1__16813_SHARP_){return parseFloat(p1__16813_SHARP_);
}));
});
/**
* Parse `s` as a float number.
*/
no.en.core.parse_float = (function parse_float(s){return no.en.core.parse_number.call(null,s,(function (p1__16814_SHARP_){return parseFloat(p1__16814_SHARP_);
}));
});
/**
* Format the map `m` into a query parameter string.
*/
no.en.core.format_query_params = (function format_query_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__16816_SHARP_){return clojure.string.join.call(null,"=",p1__16816_SHARP_);
}),cljs.core.map.call(null,(function (p1__16815_SHARP_){return (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[no.en.core.url_encode.call(null,cljs.core.name.call(null,cljs.core.first.call(null,p1__16815_SHARP_))),no.en.core.url_encode.call(null,cljs.core.second.call(null,p1__16815_SHARP_))],null));
}),cljs.core.seq.call(null,m))));
});
/**
* Format the Ring map as an url.
*/
no.en.core.format_url = (function format_url(m){return [cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"scheme","scheme",4400883991).cljs$core$IFn$_invoke$arity$1(m))),cljs.core.str("://"),cljs.core.str((function (){var map__16818 = m;var map__16818__$1 = ((cljs.core.seq_QMARK_.call(null,map__16818))?cljs.core.apply.call(null,cljs.core.hash_map,map__16818):map__16818);var password = cljs.core.get.call(null,map__16818__$1,new cljs.core.Keyword(null,"password","password",2230889997));var user = cljs.core.get.call(null,map__16818__$1,new cljs.core.Keyword(null,"user","user",1017503549));if(cljs.core.truth_(user))
{return [cljs.core.str((cljs.core.truth_(user)?user:null)),cljs.core.str((cljs.core.truth_(password)?[cljs.core.str(":"),cljs.core.str(password)].join(''):null)),cljs.core.str("@")].join('');
} else
{return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"server-name","server-name",4503925319).cljs$core$IFn$_invoke$arity$1(m)),cljs.core.str((function (){var temp__4090__auto__ = new cljs.core.Keyword(null,"server-port","server-port",4503998525).cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(temp__4090__auto__))
{var port = temp__4090__auto__;if(!(cljs.core._EQ_.call(null,port,no.en.core.port_number.call(null,new cljs.core.Keyword(null,"scheme","scheme",4400883991).cljs$core$IFn$_invoke$arity$1(m)))))
{return [cljs.core.str(":"),cljs.core.str(port)].join('');
} else
{return null;
}
} else
{return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(m)),cljs.core.str((function (){var temp__4090__auto__ = new cljs.core.Keyword(null,"query-params","query-params",1080249757).cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(temp__4090__auto__))
{var query_params = temp__4090__auto__;return [cljs.core.str("?"),cljs.core.str(no.en.core.format_query_params.call(null,query_params))].join('');
} else
{return null;
}
})())].join('');
});
/**
* Parse `s` as a percentage.
*/
no.en.core.parse_percent = (function parse_percent(s){return no.en.core.parse_double.call(null,clojure.string.replace.call(null,s,"%",""));
});
/**
* Quote the special characters in `s` that are used in regular expressions.
*/
no.en.core.pattern_quote = (function pattern_quote(s){return clojure.string.replace.call(null,cljs.core.name.call(null,s),/([\[\]\^\$\|\(\)\\\+\*\?\{\}\=\!.])/,"\\\\$1");
});
/**
* Returns the first string that separates the components in `s`.
*/
no.en.core.separator = (function separator(s){var temp__4090__auto__ = cljs.core.re_matches.call(null,/([a-z0-9_-]+)([^a-z0-9_-]+).*/i,s);if(cljs.core.truth_(temp__4090__auto__))
{var matches = temp__4090__auto__;return cljs.core.nth.call(null,matches,2);
} else
{return null;
}
});
/**
* Parse the query parameter string `s` and return a map.
*/
no.en.core.parse_query_params = (function parse_query_params(s){if(cljs.core.truth_(s))
{return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p1__16821_SHARP_){return (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.keyword.call(null,no.en.core.url_decode.call(null,cljs.core.first.call(null,p1__16821_SHARP_))),no.en.core.url_decode.call(null,cljs.core.second.call(null,p1__16821_SHARP_))],null));
}),cljs.core.filter.call(null,(function (p1__16820_SHARP_){return cljs.core._EQ_.call(null,2,cljs.core.count.call(null,p1__16820_SHARP_));
}),cljs.core.map.call(null,(function (p1__16819_SHARP_){return clojure.string.split.call(null,p1__16819_SHARP_,/=/);
}),clojure.string.split.call(null,[cljs.core.str(s)].join(''),/&/)))));
} else
{return null;
}
});
/**
* Parse the url `s` and return a Ring compatible map.
*/
no.en.core.parse_url = (function parse_url(s){var temp__4090__auto__ = cljs.core.re_matches.call(null,no.en.core.url_regex,[cljs.core.str(s)].join(''));if(cljs.core.truth_(temp__4090__auto__))
{var matches = temp__4090__auto__;var scheme = cljs.core.keyword.call(null,cljs.core.nth.call(null,matches,1));return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"scheme","scheme",4400883991),scheme,new cljs.core.Keyword(null,"user","user",1017503549),cljs.core.nth.call(null,matches,3),new cljs.core.Keyword(null,"password","password",2230889997),cljs.core.nth.call(null,matches,4),new cljs.core.Keyword(null,"server-name","server-name",4503925319),cljs.core.nth.call(null,matches,6),new cljs.core.Keyword(null,"server-port","server-port",4503998525),(function (){var or__3391__auto__ = no.en.core.parse_integer.call(null,cljs.core.nth.call(null,matches,8));if(cljs.core.truth_(or__3391__auto__))
{return or__3391__auto__;
} else
{return no.en.core.port_number.call(null,scheme);
}
})(),new cljs.core.Keyword(null,"uri","uri",1014020318),cljs.core.nth.call(null,matches,10),new cljs.core.Keyword(null,"query-params","query-params",1080249757),no.en.core.parse_query_params.call(null,cljs.core.nth.call(null,matches,12)),new cljs.core.Keyword(null,"query-string","query-string",1183691816),cljs.core.nth.call(null,matches,12)], null);
} else
{return null;
}
});
/**
* Executes thunk. If an exception is thrown, will retry. At most n retries
* are done. If still some exception is thrown it is bubbled upwards in
* the call chain.
*/
no.en.core.with_retries_STAR_ = (function with_retries_STAR_(n,thunk){var n__$1 = n;while(true){
var temp__4090__auto__ = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [thunk.call(null)], null);
}catch (e16823){if((e16823 instanceof Error))
{var e = e16823;if((n__$1 === 0))
{throw e;
} else
{return null;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16823;
} else
{return null;
}
}
}})();if(cljs.core.truth_(temp__4090__auto__))
{var result = temp__4090__auto__;return result.call(null,0);
} else
{{
var G__16824 = (n__$1 - 1);
n__$1 = G__16824;
continue;
}
}
break;
}
});

//# sourceMappingURL=core.js.map