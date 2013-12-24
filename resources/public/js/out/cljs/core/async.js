// Compiled by ClojureScript 0.0-2127
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t16971 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16971 = (function (f,fn_handler,meta16972){
this.f = f;
this.fn_handler = fn_handler;
this.meta16972 = meta16972;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16971.cljs$lang$type = true;
cljs.core.async.t16971.cljs$lang$ctorStr = "cljs.core.async/t16971";
cljs.core.async.t16971.cljs$lang$ctorPrWriter = (function (this__3940__auto__,writer__3941__auto__,opt__3942__auto__){return cljs.core._write.call(null,writer__3941__auto__,"cljs.core.async/t16971");
});
cljs.core.async.t16971.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16971.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t16971.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t16971.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16973){var self__ = this;
var _16973__$1 = this;return self__.meta16972;
});
cljs.core.async.t16971.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16973,meta16972__$1){var self__ = this;
var _16973__$1 = this;return (new cljs.core.async.t16971(self__.f,self__.fn_handler,meta16972__$1));
});
cljs.core.async.__GT_t16971 = (function __GT_t16971(f__$1,fn_handler__$1,meta16972){return (new cljs.core.async.t16971(f__$1,fn_handler__$1,meta16972));
});
}
return (new cljs.core.async.t16971(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__16975 = buff;if(G__16975)
{var bit__4022__auto__ = null;if(cljs.core.truth_((function (){var or__3391__auto__ = bit__4022__auto__;if(cljs.core.truth_(or__3391__auto__))
{return or__3391__auto__;
} else
{return G__16975.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__16975.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16975);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16975);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_16976 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_16976);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_16976);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3379__auto__ = ret;if(cljs.core.truth_(and__3379__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3379__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4219__auto___16977 = n;var x_16978 = 0;while(true){
if((x_16978 < n__4219__auto___16977))
{(a[x_16978] = 0);
{
var G__16979 = (x_16978 + 1);
x_16978 = G__16979;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__16980 = (i + 1);
i = G__16980;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t16984 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16984 = (function (flag,alt_flag,meta16985){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta16985 = meta16985;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16984.cljs$lang$type = true;
cljs.core.async.t16984.cljs$lang$ctorStr = "cljs.core.async/t16984";
cljs.core.async.t16984.cljs$lang$ctorPrWriter = (function (this__3940__auto__,writer__3941__auto__,opt__3942__auto__){return cljs.core._write.call(null,writer__3941__auto__,"cljs.core.async/t16984");
});
cljs.core.async.t16984.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16984.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t16984.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t16984.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16986){var self__ = this;
var _16986__$1 = this;return self__.meta16985;
});
cljs.core.async.t16984.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16986,meta16985__$1){var self__ = this;
var _16986__$1 = this;return (new cljs.core.async.t16984(self__.flag,self__.alt_flag,meta16985__$1));
});
cljs.core.async.__GT_t16984 = (function __GT_t16984(flag__$1,alt_flag__$1,meta16985){return (new cljs.core.async.t16984(flag__$1,alt_flag__$1,meta16985));
});
}
return (new cljs.core.async.t16984(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t16990 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16990 = (function (cb,flag,alt_handler,meta16991){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta16991 = meta16991;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16990.cljs$lang$type = true;
cljs.core.async.t16990.cljs$lang$ctorStr = "cljs.core.async/t16990";
cljs.core.async.t16990.cljs$lang$ctorPrWriter = (function (this__3940__auto__,writer__3941__auto__,opt__3942__auto__){return cljs.core._write.call(null,writer__3941__auto__,"cljs.core.async/t16990");
});
cljs.core.async.t16990.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16990.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t16990.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t16990.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16992){var self__ = this;
var _16992__$1 = this;return self__.meta16991;
});
cljs.core.async.t16990.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16992,meta16991__$1){var self__ = this;
var _16992__$1 = this;return (new cljs.core.async.t16990(self__.cb,self__.flag,self__.alt_handler,meta16991__$1));
});
cljs.core.async.__GT_t16990 = (function __GT_t16990(cb__$1,flag__$1,alt_handler__$1,meta16991){return (new cljs.core.async.t16990(cb__$1,flag__$1,alt_handler__$1,meta16991));
});
}
return (new cljs.core.async.t16990(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16993_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16993_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3391__auto__ = wport;if(cljs.core.truth_(or__3391__auto__))
{return or__3391__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__16994 = (i + 1);
i = G__16994;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3391__auto__ = ret;if(cljs.core.truth_(or__3391__auto__))
{return or__3391__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3379__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3379__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3379__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__16995){var map__16997 = p__16995;var map__16997__$1 = ((cljs.core.seq_QMARK_.call(null,map__16997))?cljs.core.apply.call(null,cljs.core.hash_map,map__16997):map__16997);var opts = map__16997__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__16995 = null;if (arguments.length > 1) {
  p__16995 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__16995);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__16998){
var ports = cljs.core.first(arglist__16998);
var p__16995 = cljs.core.rest(arglist__16998);
return alts_BANG___delegate(ports,p__16995);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t17006 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17006 = (function (ch,f,map_LT_,meta17007){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta17007 = meta17007;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17006.cljs$lang$type = true;
cljs.core.async.t17006.cljs$lang$ctorStr = "cljs.core.async/t17006";
cljs.core.async.t17006.cljs$lang$ctorPrWriter = (function (this__3940__auto__,writer__3941__auto__,opt__3942__auto__){return cljs.core._write.call(null,writer__3941__auto__,"cljs.core.async/t17006");
});
cljs.core.async.t17006.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t17006.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t17006.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t17006.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t17009 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17009 = (function (fn1,_,meta17007,ch,f,map_LT_,meta17010){
this.fn1 = fn1;
this._ = _;
this.meta17007 = meta17007;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta17010 = meta17010;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17009.cljs$lang$type = true;
cljs.core.async.t17009.cljs$lang$ctorStr = "cljs.core.async/t17009";
cljs.core.async.t17009.cljs$lang$ctorPrWriter = (function (this__3940__auto__,writer__3941__auto__,opt__3942__auto__){return cljs.core._write.call(null,writer__3941__auto__,"cljs.core.async/t17009");
});
cljs.core.async.t17009.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t17009.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t17009.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t17009.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__16999_SHARP_){return f1.call(null,(((p1__16999_SHARP_ == null))?null:self__.f.call(null,p1__16999_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t17009.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17011){var self__ = this;
var _17011__$1 = this;return self__.meta17010;
});
cljs.core.async.t17009.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17011,meta17010__$1){var self__ = this;
var _17011__$1 = this;return (new cljs.core.async.t17009(self__.fn1,self__._,self__.meta17007,self__.ch,self__.f,self__.map_LT_,meta17010__$1));
});
cljs.core.async.__GT_t17009 = (function __GT_t17009(fn1__$1,___$2,meta17007__$1,ch__$2,f__$2,map_LT___$2,meta17010){return (new cljs.core.async.t17009(fn1__$1,___$2,meta17007__$1,ch__$2,f__$2,map_LT___$2,meta17010));
});
}
return (new cljs.core.async.t17009(fn1,___$1,self__.meta17007,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3379__auto__ = ret;if(cljs.core.truth_(and__3379__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3379__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t17006.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t17006.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t17006.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17008){var self__ = this;
var _17008__$1 = this;return self__.meta17007;
});
cljs.core.async.t17006.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17008,meta17007__$1){var self__ = this;
var _17008__$1 = this;return (new cljs.core.async.t17006(self__.ch,self__.f,self__.map_LT_,meta17007__$1));
});
cljs.core.async.__GT_t17006 = (function __GT_t17006(ch__$1,f__$1,map_LT___$1,meta17007){return (new cljs.core.async.t17006(ch__$1,f__$1,map_LT___$1,meta17007));
});
}
return (new cljs.core.async.t17006(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t17015 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17015 = (function (ch,f,map_GT_,meta17016){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta17016 = meta17016;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17015.cljs$lang$type = true;
cljs.core.async.t17015.cljs$lang$ctorStr = "cljs.core.async/t17015";
cljs.core.async.t17015.cljs$lang$ctorPrWriter = (function (this__3940__auto__,writer__3941__auto__,opt__3942__auto__){return cljs.core._write.call(null,writer__3941__auto__,"cljs.core.async/t17015");
});
cljs.core.async.t17015.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t17015.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t17015.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t17015.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t17015.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t17015.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t17015.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17017){var self__ = this;
var _17017__$1 = this;return self__.meta17016;
});
cljs.core.async.t17015.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17017,meta17016__$1){var self__ = this;
var _17017__$1 = this;return (new cljs.core.async.t17015(self__.ch,self__.f,self__.map_GT_,meta17016__$1));
});
cljs.core.async.__GT_t17015 = (function __GT_t17015(ch__$1,f__$1,map_GT___$1,meta17016){return (new cljs.core.async.t17015(ch__$1,f__$1,map_GT___$1,meta17016));
});
}
return (new cljs.core.async.t17015(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t17021 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17021 = (function (ch,p,filter_GT_,meta17022){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta17022 = meta17022;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17021.cljs$lang$type = true;
cljs.core.async.t17021.cljs$lang$ctorStr = "cljs.core.async/t17021";
cljs.core.async.t17021.cljs$lang$ctorPrWriter = (function (this__3940__auto__,writer__3941__auto__,opt__3942__auto__){return cljs.core._write.call(null,writer__3941__auto__,"cljs.core.async/t17021");
});
cljs.core.async.t17021.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t17021.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t17021.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t17021.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t17021.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t17021.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t17021.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17023){var self__ = this;
var _17023__$1 = this;return self__.meta17022;
});
cljs.core.async.t17021.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17023,meta17022__$1){var self__ = this;
var _17023__$1 = this;return (new cljs.core.async.t17021(self__.ch,self__.p,self__.filter_GT_,meta17022__$1));
});
cljs.core.async.__GT_t17021 = (function __GT_t17021(ch__$1,p__$1,filter_GT___$1,meta17022){return (new cljs.core.async.t17021(ch__$1,p__$1,filter_GT___$1,meta17022));
});
}
return (new cljs.core.async.t17021(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6052__auto___17106 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6053__auto__ = (function (){var switch__5982__auto__ = (function (state_17085){var state_val_17086 = (state_17085[1]);if((state_val_17086 === 1))
{var state_17085__$1 = state_17085;var statearr_17087_17107 = state_17085__$1;(statearr_17087_17107[2] = null);
(statearr_17087_17107[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17086 === 2))
{var state_17085__$1 = state_17085;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17085__$1,4,ch);
} else
{if((state_val_17086 === 3))
{var inst_17083 = (state_17085[2]);var state_17085__$1 = state_17085;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17085__$1,inst_17083);
} else
{if((state_val_17086 === 4))
{var inst_17067 = (state_17085[7]);var inst_17067__$1 = (state_17085[2]);var inst_17068 = (inst_17067__$1 == null);var state_17085__$1 = (function (){var statearr_17088 = state_17085;(statearr_17088[7] = inst_17067__$1);
return statearr_17088;
})();if(cljs.core.truth_(inst_17068))
{var statearr_17089_17108 = state_17085__$1;(statearr_17089_17108[1] = 5);
} else
{var statearr_17090_17109 = state_17085__$1;(statearr_17090_17109[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17086 === 5))
{var inst_17070 = cljs.core.async.close_BANG_.call(null,out);var state_17085__$1 = state_17085;var statearr_17091_17110 = state_17085__$1;(statearr_17091_17110[2] = inst_17070);
(statearr_17091_17110[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17086 === 6))
{var inst_17067 = (state_17085[7]);var inst_17072 = p.call(null,inst_17067);var state_17085__$1 = state_17085;if(cljs.core.truth_(inst_17072))
{var statearr_17092_17111 = state_17085__$1;(statearr_17092_17111[1] = 8);
} else
{var statearr_17093_17112 = state_17085__$1;(statearr_17093_17112[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17086 === 7))
{var inst_17081 = (state_17085[2]);var state_17085__$1 = state_17085;var statearr_17094_17113 = state_17085__$1;(statearr_17094_17113[2] = inst_17081);
(statearr_17094_17113[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17086 === 8))
{var inst_17067 = (state_17085[7]);var state_17085__$1 = state_17085;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17085__$1,11,out,inst_17067);
} else
{if((state_val_17086 === 9))
{var state_17085__$1 = state_17085;var statearr_17095_17114 = state_17085__$1;(statearr_17095_17114[2] = null);
(statearr_17095_17114[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17086 === 10))
{var inst_17078 = (state_17085[2]);var state_17085__$1 = (function (){var statearr_17096 = state_17085;(statearr_17096[8] = inst_17078);
return statearr_17096;
})();var statearr_17097_17115 = state_17085__$1;(statearr_17097_17115[2] = null);
(statearr_17097_17115[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17086 === 11))
{var inst_17075 = (state_17085[2]);var state_17085__$1 = state_17085;var statearr_17098_17116 = state_17085__$1;(statearr_17098_17116[2] = inst_17075);
(statearr_17098_17116[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5982__auto__){
return (function() {
var state_machine__5983__auto__ = null;
var state_machine__5983__auto____0 = (function (){var statearr_17102 = [null,null,null,null,null,null,null,null,null];(statearr_17102[0] = state_machine__5983__auto__);
(statearr_17102[1] = 1);
return statearr_17102;
});
var state_machine__5983__auto____1 = (function (state_17085){while(true){
var ret_value__5984__auto__ = (function (){try{while(true){
var result__5985__auto__ = switch__5982__auto__.call(null,state_17085);if(cljs.core.keyword_identical_QMARK_.call(null,result__5985__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5985__auto__;
}
break;
}
}catch (e17103){if((e17103 instanceof Object))
{var ex__5986__auto__ = e17103;var statearr_17104_17117 = state_17085;(statearr_17104_17117[5] = ex__5986__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17085);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17103;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17118 = state_17085;
state_17085 = G__17118;
continue;
}
} else
{return ret_value__5984__auto__;
}
break;
}
});
state_machine__5983__auto__ = function(state_17085){
switch(arguments.length){
case 0:
return state_machine__5983__auto____0.call(this);
case 1:
return state_machine__5983__auto____1.call(this,state_17085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5983__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5983__auto____0;
state_machine__5983__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5983__auto____1;
return state_machine__5983__auto__;
})()
;})(switch__5982__auto__))
})();var state__6054__auto__ = (function (){var statearr_17105 = f__6053__auto__.call(null);(statearr_17105[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6052__auto___17106);
return statearr_17105;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6054__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6052__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6053__auto__ = (function (){var switch__5982__auto__ = (function (state_17270){var state_val_17271 = (state_17270[1]);if((state_val_17271 === 1))
{var state_17270__$1 = state_17270;var statearr_17272_17309 = state_17270__$1;(statearr_17272_17309[2] = null);
(statearr_17272_17309[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17271 === 2))
{var state_17270__$1 = state_17270;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17270__$1,4,in$);
} else
{if((state_val_17271 === 3))
{var inst_17268 = (state_17270[2]);var state_17270__$1 = state_17270;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17270__$1,inst_17268);
} else
{if((state_val_17271 === 4))
{var inst_17216 = (state_17270[7]);var inst_17216__$1 = (state_17270[2]);var inst_17217 = (inst_17216__$1 == null);var state_17270__$1 = (function (){var statearr_17273 = state_17270;(statearr_17273[7] = inst_17216__$1);
return statearr_17273;
})();if(cljs.core.truth_(inst_17217))
{var statearr_17274_17310 = state_17270__$1;(statearr_17274_17310[1] = 5);
} else
{var statearr_17275_17311 = state_17270__$1;(statearr_17275_17311[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17271 === 5))
{var inst_17219 = cljs.core.async.close_BANG_.call(null,out);var state_17270__$1 = state_17270;var statearr_17276_17312 = state_17270__$1;(statearr_17276_17312[2] = inst_17219);
(statearr_17276_17312[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17271 === 6))
{var inst_17216 = (state_17270[7]);var inst_17221 = f.call(null,inst_17216);var inst_17226 = cljs.core.seq.call(null,inst_17221);var inst_17227 = inst_17226;var inst_17228 = null;var inst_17229 = 0;var inst_17230 = 0;var state_17270__$1 = (function (){var statearr_17277 = state_17270;(statearr_17277[8] = inst_17230);
(statearr_17277[9] = inst_17229);
(statearr_17277[10] = inst_17228);
(statearr_17277[11] = inst_17227);
return statearr_17277;
})();var statearr_17278_17313 = state_17270__$1;(statearr_17278_17313[2] = null);
(statearr_17278_17313[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17271 === 7))
{var inst_17266 = (state_17270[2]);var state_17270__$1 = state_17270;var statearr_17279_17314 = state_17270__$1;(statearr_17279_17314[2] = inst_17266);
(statearr_17279_17314[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17271 === 8))
{var inst_17230 = (state_17270[8]);var inst_17229 = (state_17270[9]);var inst_17232 = (inst_17230 < inst_17229);var inst_17233 = inst_17232;var state_17270__$1 = state_17270;if(cljs.core.truth_(inst_17233))
{var statearr_17280_17315 = state_17270__$1;(statearr_17280_17315[1] = 10);
} else
{var statearr_17281_17316 = state_17270__$1;(statearr_17281_17316[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17271 === 9))
{var inst_17263 = (state_17270[2]);var state_17270__$1 = (function (){var statearr_17282 = state_17270;(statearr_17282[12] = inst_17263);
return statearr_17282;
})();var statearr_17283_17317 = state_17270__$1;(statearr_17283_17317[2] = null);
(statearr_17283_17317[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17271 === 10))
{var inst_17230 = (state_17270[8]);var inst_17228 = (state_17270[10]);var inst_17235 = cljs.core._nth.call(null,inst_17228,inst_17230);var state_17270__$1 = state_17270;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17270__$1,13,out,inst_17235);
} else
{if((state_val_17271 === 11))
{var inst_17241 = (state_17270[13]);var inst_17227 = (state_17270[11]);var inst_17241__$1 = cljs.core.seq.call(null,inst_17227);var state_17270__$1 = (function (){var statearr_17287 = state_17270;(statearr_17287[13] = inst_17241__$1);
return statearr_17287;
})();if(inst_17241__$1)
{var statearr_17288_17318 = state_17270__$1;(statearr_17288_17318[1] = 14);
} else
{var statearr_17289_17319 = state_17270__$1;(statearr_17289_17319[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17271 === 12))
{var inst_17261 = (state_17270[2]);var state_17270__$1 = state_17270;var statearr_17290_17320 = state_17270__$1;(statearr_17290_17320[2] = inst_17261);
(statearr_17290_17320[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17271 === 13))
{var inst_17230 = (state_17270[8]);var inst_17229 = (state_17270[9]);var inst_17228 = (state_17270[10]);var inst_17227 = (state_17270[11]);var inst_17237 = (state_17270[2]);var inst_17238 = (inst_17230 + 1);var tmp17284 = inst_17229;var tmp17285 = inst_17228;var tmp17286 = inst_17227;var inst_17227__$1 = tmp17286;var inst_17228__$1 = tmp17285;var inst_17229__$1 = tmp17284;var inst_17230__$1 = inst_17238;var state_17270__$1 = (function (){var statearr_17291 = state_17270;(statearr_17291[14] = inst_17237);
(statearr_17291[8] = inst_17230__$1);
(statearr_17291[9] = inst_17229__$1);
(statearr_17291[10] = inst_17228__$1);
(statearr_17291[11] = inst_17227__$1);
return statearr_17291;
})();var statearr_17292_17321 = state_17270__$1;(statearr_17292_17321[2] = null);
(statearr_17292_17321[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17271 === 14))
{var inst_17241 = (state_17270[13]);var inst_17243 = cljs.core.chunked_seq_QMARK_.call(null,inst_17241);var state_17270__$1 = state_17270;if(inst_17243)
{var statearr_17293_17322 = state_17270__$1;(statearr_17293_17322[1] = 17);
} else
{var statearr_17294_17323 = state_17270__$1;(statearr_17294_17323[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17271 === 15))
{var state_17270__$1 = state_17270;var statearr_17295_17324 = state_17270__$1;(statearr_17295_17324[2] = null);
(statearr_17295_17324[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17271 === 16))
{var inst_17259 = (state_17270[2]);var state_17270__$1 = state_17270;var statearr_17296_17325 = state_17270__$1;(statearr_17296_17325[2] = inst_17259);
(statearr_17296_17325[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17271 === 17))
{var inst_17241 = (state_17270[13]);var inst_17245 = cljs.core.chunk_first.call(null,inst_17241);var inst_17246 = cljs.core.chunk_rest.call(null,inst_17241);var inst_17247 = cljs.core.count.call(null,inst_17245);var inst_17227 = inst_17246;var inst_17228 = inst_17245;var inst_17229 = inst_17247;var inst_17230 = 0;var state_17270__$1 = (function (){var statearr_17297 = state_17270;(statearr_17297[8] = inst_17230);
(statearr_17297[9] = inst_17229);
(statearr_17297[10] = inst_17228);
(statearr_17297[11] = inst_17227);
return statearr_17297;
})();var statearr_17298_17326 = state_17270__$1;(statearr_17298_17326[2] = null);
(statearr_17298_17326[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17271 === 18))
{var inst_17241 = (state_17270[13]);var inst_17250 = cljs.core.first.call(null,inst_17241);var state_17270__$1 = state_17270;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17270__$1,20,out,inst_17250);
} else
{if((state_val_17271 === 19))
{var inst_17256 = (state_17270[2]);var state_17270__$1 = state_17270;var statearr_17299_17327 = state_17270__$1;(statearr_17299_17327[2] = inst_17256);
(statearr_17299_17327[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17271 === 20))
{var inst_17241 = (state_17270[13]);var inst_17252 = (state_17270[2]);var inst_17253 = cljs.core.next.call(null,inst_17241);var inst_17227 = inst_17253;var inst_17228 = null;var inst_17229 = 0;var inst_17230 = 0;var state_17270__$1 = (function (){var statearr_17300 = state_17270;(statearr_17300[8] = inst_17230);
(statearr_17300[9] = inst_17229);
(statearr_17300[15] = inst_17252);
(statearr_17300[10] = inst_17228);
(statearr_17300[11] = inst_17227);
return statearr_17300;
})();var statearr_17301_17328 = state_17270__$1;(statearr_17301_17328[2] = null);
(statearr_17301_17328[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5982__auto__){
return (function() {
var state_machine__5983__auto__ = null;
var state_machine__5983__auto____0 = (function (){var statearr_17305 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17305[0] = state_machine__5983__auto__);
(statearr_17305[1] = 1);
return statearr_17305;
});
var state_machine__5983__auto____1 = (function (state_17270){while(true){
var ret_value__5984__auto__ = (function (){try{while(true){
var result__5985__auto__ = switch__5982__auto__.call(null,state_17270);if(cljs.core.keyword_identical_QMARK_.call(null,result__5985__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5985__auto__;
}
break;
}
}catch (e17306){if((e17306 instanceof Object))
{var ex__5986__auto__ = e17306;var statearr_17307_17329 = state_17270;(statearr_17307_17329[5] = ex__5986__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17270);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17306;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17330 = state_17270;
state_17270 = G__17330;
continue;
}
} else
{return ret_value__5984__auto__;
}
break;
}
});
state_machine__5983__auto__ = function(state_17270){
switch(arguments.length){
case 0:
return state_machine__5983__auto____0.call(this);
case 1:
return state_machine__5983__auto____1.call(this,state_17270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5983__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5983__auto____0;
state_machine__5983__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5983__auto____1;
return state_machine__5983__auto__;
})()
;})(switch__5982__auto__))
})();var state__6054__auto__ = (function (){var statearr_17308 = f__6053__auto__.call(null);(statearr_17308[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6052__auto__);
return statearr_17308;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6054__auto__);
}));
return c__6052__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6052__auto___17411 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6053__auto__ = (function (){var switch__5982__auto__ = (function (state_17390){var state_val_17391 = (state_17390[1]);if((state_val_17391 === 1))
{var state_17390__$1 = state_17390;var statearr_17392_17412 = state_17390__$1;(statearr_17392_17412[2] = null);
(statearr_17392_17412[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17391 === 2))
{var state_17390__$1 = state_17390;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17390__$1,4,from);
} else
{if((state_val_17391 === 3))
{var inst_17388 = (state_17390[2]);var state_17390__$1 = state_17390;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17390__$1,inst_17388);
} else
{if((state_val_17391 === 4))
{var inst_17373 = (state_17390[7]);var inst_17373__$1 = (state_17390[2]);var inst_17374 = (inst_17373__$1 == null);var state_17390__$1 = (function (){var statearr_17393 = state_17390;(statearr_17393[7] = inst_17373__$1);
return statearr_17393;
})();if(cljs.core.truth_(inst_17374))
{var statearr_17394_17413 = state_17390__$1;(statearr_17394_17413[1] = 5);
} else
{var statearr_17395_17414 = state_17390__$1;(statearr_17395_17414[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17391 === 5))
{var state_17390__$1 = state_17390;if(cljs.core.truth_(close_QMARK_))
{var statearr_17396_17415 = state_17390__$1;(statearr_17396_17415[1] = 8);
} else
{var statearr_17397_17416 = state_17390__$1;(statearr_17397_17416[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17391 === 6))
{var inst_17373 = (state_17390[7]);var state_17390__$1 = state_17390;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17390__$1,11,to,inst_17373);
} else
{if((state_val_17391 === 7))
{var inst_17386 = (state_17390[2]);var state_17390__$1 = state_17390;var statearr_17398_17417 = state_17390__$1;(statearr_17398_17417[2] = inst_17386);
(statearr_17398_17417[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17391 === 8))
{var inst_17377 = cljs.core.async.close_BANG_.call(null,to);var state_17390__$1 = state_17390;var statearr_17399_17418 = state_17390__$1;(statearr_17399_17418[2] = inst_17377);
(statearr_17399_17418[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17391 === 9))
{var state_17390__$1 = state_17390;var statearr_17400_17419 = state_17390__$1;(statearr_17400_17419[2] = null);
(statearr_17400_17419[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17391 === 10))
{var inst_17380 = (state_17390[2]);var state_17390__$1 = state_17390;var statearr_17401_17420 = state_17390__$1;(statearr_17401_17420[2] = inst_17380);
(statearr_17401_17420[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17391 === 11))
{var inst_17383 = (state_17390[2]);var state_17390__$1 = (function (){var statearr_17402 = state_17390;(statearr_17402[8] = inst_17383);
return statearr_17402;
})();var statearr_17403_17421 = state_17390__$1;(statearr_17403_17421[2] = null);
(statearr_17403_17421[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5982__auto__){
return (function() {
var state_machine__5983__auto__ = null;
var state_machine__5983__auto____0 = (function (){var statearr_17407 = [null,null,null,null,null,null,null,null,null];(statearr_17407[0] = state_machine__5983__auto__);
(statearr_17407[1] = 1);
return statearr_17407;
});
var state_machine__5983__auto____1 = (function (state_17390){while(true){
var ret_value__5984__auto__ = (function (){try{while(true){
var result__5985__auto__ = switch__5982__auto__.call(null,state_17390);if(cljs.core.keyword_identical_QMARK_.call(null,result__5985__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5985__auto__;
}
break;
}
}catch (e17408){if((e17408 instanceof Object))
{var ex__5986__auto__ = e17408;var statearr_17409_17422 = state_17390;(statearr_17409_17422[5] = ex__5986__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17390);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17408;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17423 = state_17390;
state_17390 = G__17423;
continue;
}
} else
{return ret_value__5984__auto__;
}
break;
}
});
state_machine__5983__auto__ = function(state_17390){
switch(arguments.length){
case 0:
return state_machine__5983__auto____0.call(this);
case 1:
return state_machine__5983__auto____1.call(this,state_17390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5983__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5983__auto____0;
state_machine__5983__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5983__auto____1;
return state_machine__5983__auto__;
})()
;})(switch__5982__auto__))
})();var state__6054__auto__ = (function (){var statearr_17410 = f__6053__auto__.call(null);(statearr_17410[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6052__auto___17411);
return statearr_17410;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6054__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6052__auto___17510 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6053__auto__ = (function (){var switch__5982__auto__ = (function (state_17488){var state_val_17489 = (state_17488[1]);if((state_val_17489 === 1))
{var state_17488__$1 = state_17488;var statearr_17490_17511 = state_17488__$1;(statearr_17490_17511[2] = null);
(statearr_17490_17511[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17489 === 2))
{var state_17488__$1 = state_17488;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17488__$1,4,ch);
} else
{if((state_val_17489 === 3))
{var inst_17486 = (state_17488[2]);var state_17488__$1 = state_17488;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17488__$1,inst_17486);
} else
{if((state_val_17489 === 4))
{var inst_17469 = (state_17488[7]);var inst_17469__$1 = (state_17488[2]);var inst_17470 = (inst_17469__$1 == null);var state_17488__$1 = (function (){var statearr_17491 = state_17488;(statearr_17491[7] = inst_17469__$1);
return statearr_17491;
})();if(cljs.core.truth_(inst_17470))
{var statearr_17492_17512 = state_17488__$1;(statearr_17492_17512[1] = 5);
} else
{var statearr_17493_17513 = state_17488__$1;(statearr_17493_17513[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17489 === 5))
{var inst_17472 = cljs.core.async.close_BANG_.call(null,tc);var inst_17473 = cljs.core.async.close_BANG_.call(null,fc);var state_17488__$1 = (function (){var statearr_17494 = state_17488;(statearr_17494[8] = inst_17472);
return statearr_17494;
})();var statearr_17495_17514 = state_17488__$1;(statearr_17495_17514[2] = inst_17473);
(statearr_17495_17514[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17489 === 6))
{var inst_17469 = (state_17488[7]);var inst_17475 = p.call(null,inst_17469);var state_17488__$1 = state_17488;if(cljs.core.truth_(inst_17475))
{var statearr_17496_17515 = state_17488__$1;(statearr_17496_17515[1] = 9);
} else
{var statearr_17497_17516 = state_17488__$1;(statearr_17497_17516[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17489 === 7))
{var inst_17484 = (state_17488[2]);var state_17488__$1 = state_17488;var statearr_17498_17517 = state_17488__$1;(statearr_17498_17517[2] = inst_17484);
(statearr_17498_17517[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17489 === 8))
{var inst_17481 = (state_17488[2]);var state_17488__$1 = (function (){var statearr_17499 = state_17488;(statearr_17499[9] = inst_17481);
return statearr_17499;
})();var statearr_17500_17518 = state_17488__$1;(statearr_17500_17518[2] = null);
(statearr_17500_17518[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17489 === 9))
{var state_17488__$1 = state_17488;var statearr_17501_17519 = state_17488__$1;(statearr_17501_17519[2] = tc);
(statearr_17501_17519[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17489 === 10))
{var state_17488__$1 = state_17488;var statearr_17502_17520 = state_17488__$1;(statearr_17502_17520[2] = fc);
(statearr_17502_17520[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17489 === 11))
{var inst_17469 = (state_17488[7]);var inst_17479 = (state_17488[2]);var state_17488__$1 = state_17488;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17488__$1,8,inst_17479,inst_17469);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5982__auto__){
return (function() {
var state_machine__5983__auto__ = null;
var state_machine__5983__auto____0 = (function (){var statearr_17506 = [null,null,null,null,null,null,null,null,null,null];(statearr_17506[0] = state_machine__5983__auto__);
(statearr_17506[1] = 1);
return statearr_17506;
});
var state_machine__5983__auto____1 = (function (state_17488){while(true){
var ret_value__5984__auto__ = (function (){try{while(true){
var result__5985__auto__ = switch__5982__auto__.call(null,state_17488);if(cljs.core.keyword_identical_QMARK_.call(null,result__5985__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5985__auto__;
}
break;
}
}catch (e17507){if((e17507 instanceof Object))
{var ex__5986__auto__ = e17507;var statearr_17508_17521 = state_17488;(statearr_17508_17521[5] = ex__5986__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17488);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17507;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17522 = state_17488;
state_17488 = G__17522;
continue;
}
} else
{return ret_value__5984__auto__;
}
break;
}
});
state_machine__5983__auto__ = function(state_17488){
switch(arguments.length){
case 0:
return state_machine__5983__auto____0.call(this);
case 1:
return state_machine__5983__auto____1.call(this,state_17488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5983__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5983__auto____0;
state_machine__5983__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5983__auto____1;
return state_machine__5983__auto__;
})()
;})(switch__5982__auto__))
})();var state__6054__auto__ = (function (){var statearr_17509 = f__6053__auto__.call(null);(statearr_17509[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6052__auto___17510);
return statearr_17509;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6054__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6052__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6053__auto__ = (function (){var switch__5982__auto__ = (function (state_17569){var state_val_17570 = (state_17569[1]);if((state_val_17570 === 7))
{var inst_17565 = (state_17569[2]);var state_17569__$1 = state_17569;var statearr_17571_17587 = state_17569__$1;(statearr_17571_17587[2] = inst_17565);
(statearr_17571_17587[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17570 === 6))
{var inst_17555 = (state_17569[7]);var inst_17558 = (state_17569[8]);var inst_17562 = f.call(null,inst_17555,inst_17558);var inst_17555__$1 = inst_17562;var state_17569__$1 = (function (){var statearr_17572 = state_17569;(statearr_17572[7] = inst_17555__$1);
return statearr_17572;
})();var statearr_17573_17588 = state_17569__$1;(statearr_17573_17588[2] = null);
(statearr_17573_17588[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17570 === 5))
{var inst_17555 = (state_17569[7]);var state_17569__$1 = state_17569;var statearr_17574_17589 = state_17569__$1;(statearr_17574_17589[2] = inst_17555);
(statearr_17574_17589[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17570 === 4))
{var inst_17558 = (state_17569[8]);var inst_17558__$1 = (state_17569[2]);var inst_17559 = (inst_17558__$1 == null);var state_17569__$1 = (function (){var statearr_17575 = state_17569;(statearr_17575[8] = inst_17558__$1);
return statearr_17575;
})();if(cljs.core.truth_(inst_17559))
{var statearr_17576_17590 = state_17569__$1;(statearr_17576_17590[1] = 5);
} else
{var statearr_17577_17591 = state_17569__$1;(statearr_17577_17591[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17570 === 3))
{var inst_17567 = (state_17569[2]);var state_17569__$1 = state_17569;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17569__$1,inst_17567);
} else
{if((state_val_17570 === 2))
{var state_17569__$1 = state_17569;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17569__$1,4,ch);
} else
{if((state_val_17570 === 1))
{var inst_17555 = init;var state_17569__$1 = (function (){var statearr_17578 = state_17569;(statearr_17578[7] = inst_17555);
return statearr_17578;
})();var statearr_17579_17592 = state_17569__$1;(statearr_17579_17592[2] = null);
(statearr_17579_17592[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__5982__auto__){
return (function() {
var state_machine__5983__auto__ = null;
var state_machine__5983__auto____0 = (function (){var statearr_17583 = [null,null,null,null,null,null,null,null,null];(statearr_17583[0] = state_machine__5983__auto__);
(statearr_17583[1] = 1);
return statearr_17583;
});
var state_machine__5983__auto____1 = (function (state_17569){while(true){
var ret_value__5984__auto__ = (function (){try{while(true){
var result__5985__auto__ = switch__5982__auto__.call(null,state_17569);if(cljs.core.keyword_identical_QMARK_.call(null,result__5985__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5985__auto__;
}
break;
}
}catch (e17584){if((e17584 instanceof Object))
{var ex__5986__auto__ = e17584;var statearr_17585_17593 = state_17569;(statearr_17585_17593[5] = ex__5986__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17569);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17584;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17594 = state_17569;
state_17569 = G__17594;
continue;
}
} else
{return ret_value__5984__auto__;
}
break;
}
});
state_machine__5983__auto__ = function(state_17569){
switch(arguments.length){
case 0:
return state_machine__5983__auto____0.call(this);
case 1:
return state_machine__5983__auto____1.call(this,state_17569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5983__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5983__auto____0;
state_machine__5983__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5983__auto____1;
return state_machine__5983__auto__;
})()
;})(switch__5982__auto__))
})();var state__6054__auto__ = (function (){var statearr_17586 = f__6053__auto__.call(null);(statearr_17586[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6052__auto__);
return statearr_17586;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6054__auto__);
}));
return c__6052__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6052__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6053__auto__ = (function (){var switch__5982__auto__ = (function (state_17656){var state_val_17657 = (state_17656[1]);if((state_val_17657 === 1))
{var inst_17636 = cljs.core.seq.call(null,coll);var inst_17637 = inst_17636;var state_17656__$1 = (function (){var statearr_17658 = state_17656;(statearr_17658[7] = inst_17637);
return statearr_17658;
})();var statearr_17659_17677 = state_17656__$1;(statearr_17659_17677[2] = null);
(statearr_17659_17677[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17657 === 2))
{var inst_17637 = (state_17656[7]);var state_17656__$1 = state_17656;if(cljs.core.truth_(inst_17637))
{var statearr_17660_17678 = state_17656__$1;(statearr_17660_17678[1] = 4);
} else
{var statearr_17661_17679 = state_17656__$1;(statearr_17661_17679[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17657 === 3))
{var inst_17654 = (state_17656[2]);var state_17656__$1 = state_17656;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17656__$1,inst_17654);
} else
{if((state_val_17657 === 4))
{var inst_17637 = (state_17656[7]);var inst_17640 = cljs.core.first.call(null,inst_17637);var state_17656__$1 = state_17656;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17656__$1,7,ch,inst_17640);
} else
{if((state_val_17657 === 5))
{var state_17656__$1 = state_17656;if(cljs.core.truth_(close_QMARK_))
{var statearr_17662_17680 = state_17656__$1;(statearr_17662_17680[1] = 8);
} else
{var statearr_17663_17681 = state_17656__$1;(statearr_17663_17681[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17657 === 6))
{var inst_17652 = (state_17656[2]);var state_17656__$1 = state_17656;var statearr_17664_17682 = state_17656__$1;(statearr_17664_17682[2] = inst_17652);
(statearr_17664_17682[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17657 === 7))
{var inst_17637 = (state_17656[7]);var inst_17642 = (state_17656[2]);var inst_17643 = cljs.core.next.call(null,inst_17637);var inst_17637__$1 = inst_17643;var state_17656__$1 = (function (){var statearr_17665 = state_17656;(statearr_17665[8] = inst_17642);
(statearr_17665[7] = inst_17637__$1);
return statearr_17665;
})();var statearr_17666_17683 = state_17656__$1;(statearr_17666_17683[2] = null);
(statearr_17666_17683[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17657 === 8))
{var inst_17647 = cljs.core.async.close_BANG_.call(null,ch);var state_17656__$1 = state_17656;var statearr_17667_17684 = state_17656__$1;(statearr_17667_17684[2] = inst_17647);
(statearr_17667_17684[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17657 === 9))
{var state_17656__$1 = state_17656;var statearr_17668_17685 = state_17656__$1;(statearr_17668_17685[2] = null);
(statearr_17668_17685[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17657 === 10))
{var inst_17650 = (state_17656[2]);var state_17656__$1 = state_17656;var statearr_17669_17686 = state_17656__$1;(statearr_17669_17686[2] = inst_17650);
(statearr_17669_17686[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5982__auto__){
return (function() {
var state_machine__5983__auto__ = null;
var state_machine__5983__auto____0 = (function (){var statearr_17673 = [null,null,null,null,null,null,null,null,null];(statearr_17673[0] = state_machine__5983__auto__);
(statearr_17673[1] = 1);
return statearr_17673;
});
var state_machine__5983__auto____1 = (function (state_17656){while(true){
var ret_value__5984__auto__ = (function (){try{while(true){
var result__5985__auto__ = switch__5982__auto__.call(null,state_17656);if(cljs.core.keyword_identical_QMARK_.call(null,result__5985__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5985__auto__;
}
break;
}
}catch (e17674){if((e17674 instanceof Object))
{var ex__5986__auto__ = e17674;var statearr_17675_17687 = state_17656;(statearr_17675_17687[5] = ex__5986__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17656);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17674;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17688 = state_17656;
state_17656 = G__17688;
continue;
}
} else
{return ret_value__5984__auto__;
}
break;
}
});
state_machine__5983__auto__ = function(state_17656){
switch(arguments.length){
case 0:
return state_machine__5983__auto____0.call(this);
case 1:
return state_machine__5983__auto____1.call(this,state_17656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5983__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5983__auto____0;
state_machine__5983__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5983__auto____1;
return state_machine__5983__auto__;
})()
;})(switch__5982__auto__))
})();var state__6054__auto__ = (function (){var statearr_17676 = f__6053__auto__.call(null);(statearr_17676[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6052__auto__);
return statearr_17676;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6054__auto__);
}));
return c__6052__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj17690 = {};return obj17690;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3379__auto__ = _;if(and__3379__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3379__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__3999__auto__ = (((_ == null))?null:_);return (function (){var or__3391__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__3999__auto__)]);if(or__3391__auto__)
{return or__3391__auto__;
} else
{var or__3391__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3391__auto____$1)
{return or__3391__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj17692 = {};return obj17692;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3379__auto__ = m;if(and__3379__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3379__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__3999__auto__ = (((m == null))?null:m);return (function (){var or__3391__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__3999__auto__)]);if(or__3391__auto__)
{return or__3391__auto__;
} else
{var or__3391__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3391__auto____$1)
{return or__3391__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3379__auto__ = m;if(and__3379__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3379__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__3999__auto__ = (((m == null))?null:m);return (function (){var or__3391__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__3999__auto__)]);if(or__3391__auto__)
{return or__3391__auto__;
} else
{var or__3391__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3391__auto____$1)
{return or__3391__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3379__auto__ = m;if(and__3379__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3379__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__3999__auto__ = (((m == null))?null:m);return (function (){var or__3391__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__3999__auto__)]);if(or__3391__auto__)
{return or__3391__auto__;
} else
{var or__3391__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3391__auto____$1)
{return or__3391__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t17916 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17916 = (function (cs,ch,mult,meta17917){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta17917 = meta17917;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17916.cljs$lang$type = true;
cljs.core.async.t17916.cljs$lang$ctorStr = "cljs.core.async/t17916";
cljs.core.async.t17916.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3940__auto__,writer__3941__auto__,opt__3942__auto__){return cljs.core._write.call(null,writer__3941__auto__,"cljs.core.async/t17916");
});})(cs))
;
cljs.core.async.t17916.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t17916.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t17916.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t17916.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t17916.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t17916.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t17916.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_17918){var self__ = this;
var _17918__$1 = this;return self__.meta17917;
});})(cs))
;
cljs.core.async.t17916.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_17918,meta17917__$1){var self__ = this;
var _17918__$1 = this;return (new cljs.core.async.t17916(self__.cs,self__.ch,self__.mult,meta17917__$1));
});})(cs))
;
cljs.core.async.__GT_t17916 = ((function (cs){
return (function __GT_t17916(cs__$1,ch__$1,mult__$1,meta17917){return (new cljs.core.async.t17916(cs__$1,ch__$1,mult__$1,meta17917));
});})(cs))
;
}
return (new cljs.core.async.t17916(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6052__auto___18139 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6053__auto__ = (function (){var switch__5982__auto__ = (function (state_18053){var state_val_18054 = (state_18053[1]);if((state_val_18054 === 32))
{var inst_17921 = (state_18053[7]);var inst_17997 = (state_18053[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18053,31,Object,null,30);var inst_18004 = cljs.core.async.put_BANG_.call(null,inst_17997,inst_17921,done);var state_18053__$1 = state_18053;var statearr_18055_18140 = state_18053__$1;(statearr_18055_18140[2] = inst_18004);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18053__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18054 === 1))
{var state_18053__$1 = state_18053;var statearr_18056_18141 = state_18053__$1;(statearr_18056_18141[2] = null);
(statearr_18056_18141[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18054 === 33))
{var inst_18010 = (state_18053[9]);var inst_18012 = cljs.core.chunked_seq_QMARK_.call(null,inst_18010);var state_18053__$1 = state_18053;if(inst_18012)
{var statearr_18057_18142 = state_18053__$1;(statearr_18057_18142[1] = 36);
} else
{var statearr_18058_18143 = state_18053__$1;(statearr_18058_18143[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18054 === 2))
{var state_18053__$1 = state_18053;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18053__$1,4,ch);
} else
{if((state_val_18054 === 34))
{var state_18053__$1 = state_18053;var statearr_18059_18144 = state_18053__$1;(statearr_18059_18144[2] = null);
(statearr_18059_18144[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18054 === 3))
{var inst_18051 = (state_18053[2]);var state_18053__$1 = state_18053;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18053__$1,inst_18051);
} else
{if((state_val_18054 === 35))
{var inst_18035 = (state_18053[2]);var state_18053__$1 = state_18053;var statearr_18060_18145 = state_18053__$1;(statearr_18060_18145[2] = inst_18035);
(statearr_18060_18145[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18054 === 4))
{var inst_17921 = (state_18053[7]);var inst_17921__$1 = (state_18053[2]);var inst_17922 = (inst_17921__$1 == null);var state_18053__$1 = (function (){var statearr_18061 = state_18053;(statearr_18061[7] = inst_17921__$1);
return statearr_18061;
})();if(cljs.core.truth_(inst_17922))
{var statearr_18062_18146 = state_18053__$1;(statearr_18062_18146[1] = 5);
} else
{var statearr_18063_18147 = state_18053__$1;(statearr_18063_18147[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18054 === 36))
{var inst_18010 = (state_18053[9]);var inst_18014 = cljs.core.chunk_first.call(null,inst_18010);var inst_18015 = cljs.core.chunk_rest.call(null,inst_18010);var inst_18016 = cljs.core.count.call(null,inst_18014);var inst_17989 = inst_18015;var inst_17990 = inst_18014;var inst_17991 = inst_18016;var inst_17992 = 0;var state_18053__$1 = (function (){var statearr_18064 = state_18053;(statearr_18064[10] = inst_17990);
(statearr_18064[11] = inst_17992);
(statearr_18064[12] = inst_17991);
(statearr_18064[13] = inst_17989);
return statearr_18064;
})();var statearr_18065_18148 = state_18053__$1;(statearr_18065_18148[2] = null);
(statearr_18065_18148[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18054 === 5))
{var inst_17928 = cljs.core.deref.call(null,cs);var inst_17929 = cljs.core.seq.call(null,inst_17928);var inst_17930 = inst_17929;var inst_17931 = null;var inst_17932 = 0;var inst_17933 = 0;var state_18053__$1 = (function (){var statearr_18066 = state_18053;(statearr_18066[14] = inst_17930);
(statearr_18066[15] = inst_17933);
(statearr_18066[16] = inst_17932);
(statearr_18066[17] = inst_17931);
return statearr_18066;
})();var statearr_18067_18149 = state_18053__$1;(statearr_18067_18149[2] = null);
(statearr_18067_18149[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18054 === 37))
{var inst_18010 = (state_18053[9]);var inst_18019 = cljs.core.first.call(null,inst_18010);var state_18053__$1 = (function (){var statearr_18068 = state_18053;(statearr_18068[18] = inst_18019);
return statearr_18068;
})();var statearr_18069_18150 = state_18053__$1;(statearr_18069_18150[2] = null);
(statearr_18069_18150[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18054 === 6))
{var inst_17981 = (state_18053[19]);var inst_17980 = cljs.core.deref.call(null,cs);var inst_17981__$1 = cljs.core.keys.call(null,inst_17980);var inst_17982 = cljs.core.count.call(null,inst_17981__$1);var inst_17983 = cljs.core.reset_BANG_.call(null,dctr,inst_17982);var inst_17988 = cljs.core.seq.call(null,inst_17981__$1);var inst_17989 = inst_17988;var inst_17990 = null;var inst_17991 = 0;var inst_17992 = 0;var state_18053__$1 = (function (){var statearr_18070 = state_18053;(statearr_18070[10] = inst_17990);
(statearr_18070[11] = inst_17992);
(statearr_18070[12] = inst_17991);
(statearr_18070[13] = inst_17989);
(statearr_18070[20] = inst_17983);
(statearr_18070[19] = inst_17981__$1);
return statearr_18070;
})();var statearr_18071_18151 = state_18053__$1;(statearr_18071_18151[2] = null);
(statearr_18071_18151[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18054 === 38))
{var inst_18032 = (state_18053[2]);var state_18053__$1 = state_18053;var statearr_18072_18152 = state_18053__$1;(statearr_18072_18152[2] = inst_18032);
(statearr_18072_18152[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18054 === 7))
{var inst_18049 = (state_18053[2]);var state_18053__$1 = state_18053;var statearr_18073_18153 = state_18053__$1;(statearr_18073_18153[2] = inst_18049);
(statearr_18073_18153[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18054 === 39))
{var inst_18010 = (state_18053[9]);var inst_18028 = (state_18053[2]);var inst_18029 = cljs.core.next.call(null,inst_18010);var inst_17989 = inst_18029;var inst_17990 = null;var inst_17991 = 0;var inst_17992 = 0;var state_18053__$1 = (function (){var statearr_18074 = state_18053;(statearr_18074[10] = inst_17990);
(statearr_18074[11] = inst_17992);
(statearr_18074[12] = inst_17991);
(statearr_18074[21] = inst_18028);
(statearr_18074[13] = inst_17989);
return statearr_18074;
})();var statearr_18075_18154 = state_18053__$1;(statearr_18075_18154[2] = null);
(statearr_18075_18154[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18054 === 8))
{var inst_17933 = (state_18053[15]);var inst_17932 = (state_18053[16]);var inst_17935 = (inst_17933 < inst_17932);var inst_17936 = inst_17935;var state_18053__$1 = state_18053;if(cljs.core.truth_(inst_17936))
{var statearr_18076_18155 = state_18053__$1;(statearr_18076_18155[1] = 10);
} else
{var statearr_18077_18156 = state_18053__$1;(statearr_18077_18156[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18054 === 40))
{var inst_18019 = (state_18053[18]);var inst_18020 = (state_18053[2]);var inst_18021 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_18022 = cljs.core.async.untap_STAR_.call(null,m,inst_18019);var state_18053__$1 = (function (){var statearr_18078 = state_18053;(statearr_18078[22] = inst_18020);
(statearr_18078[23] = inst_18021);
return statearr_18078;
})();var statearr_18079_18157 = state_18053__$1;(statearr_18079_18157[2] = inst_18022);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18053__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18054 === 9))
{var inst_17978 = (state_18053[2]);var state_18053__$1 = state_18053;var statearr_18080_18158 = state_18053__$1;(statearr_18080_18158[2] = inst_17978);
(statearr_18080_18158[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18054 === 41))
{var inst_17921 = (state_18053[7]);var inst_18019 = (state_18053[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18053,40,Object,null,39);var inst_18026 = cljs.core.async.put_BANG_.call(null,inst_18019,inst_17921,done);var state_18053__$1 = state_18053;var statearr_18081_18159 = state_18053__$1;(statearr_18081_18159[2] = inst_18026);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18053__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18054 === 10))
{var inst_17933 = (state_18053[15]);var inst_17931 = (state_18053[17]);var inst_17939 = cljs.core._nth.call(null,inst_17931,inst_17933);var inst_17940 = cljs.core.nth.call(null,inst_17939,0,null);var inst_17941 = cljs.core.nth.call(null,inst_17939,1,null);var state_18053__$1 = (function (){var statearr_18082 = state_18053;(statearr_18082[24] = inst_17940);
return statearr_18082;
})();if(cljs.core.truth_(inst_17941))
{var statearr_18083_18160 = state_18053__$1;(statearr_18083_18160[1] = 13);
} else
{var statearr_18084_18161 = state_18053__$1;(statearr_18084_18161[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18054 === 42))
{var state_18053__$1 = state_18053;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18053__$1,45,dchan);
} else
{if((state_val_18054 === 11))
{var inst_17950 = (state_18053[25]);var inst_17930 = (state_18053[14]);var inst_17950__$1 = cljs.core.seq.call(null,inst_17930);var state_18053__$1 = (function (){var statearr_18085 = state_18053;(statearr_18085[25] = inst_17950__$1);
return statearr_18085;
})();if(inst_17950__$1)
{var statearr_18086_18162 = state_18053__$1;(statearr_18086_18162[1] = 16);
} else
{var statearr_18087_18163 = state_18053__$1;(statearr_18087_18163[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18054 === 43))
{var state_18053__$1 = state_18053;var statearr_18088_18164 = state_18053__$1;(statearr_18088_18164[2] = null);
(statearr_18088_18164[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18054 === 12))
{var inst_17976 = (state_18053[2]);var state_18053__$1 = state_18053;var statearr_18089_18165 = state_18053__$1;(statearr_18089_18165[2] = inst_17976);
(statearr_18089_18165[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18054 === 44))
{var inst_18046 = (state_18053[2]);var state_18053__$1 = (function (){var statearr_18090 = state_18053;(statearr_18090[26] = inst_18046);
return statearr_18090;
})();var statearr_18091_18166 = state_18053__$1;(statearr_18091_18166[2] = null);
(statearr_18091_18166[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18054 === 13))
{var inst_17940 = (state_18053[24]);var inst_17943 = cljs.core.async.close_BANG_.call(null,inst_17940);var state_18053__$1 = state_18053;var statearr_18092_18167 = state_18053__$1;(statearr_18092_18167[2] = inst_17943);
(statearr_18092_18167[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18054 === 45))
{var inst_18043 = (state_18053[2]);var state_18053__$1 = state_18053;var statearr_18096_18168 = state_18053__$1;(statearr_18096_18168[2] = inst_18043);
(statearr_18096_18168[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18054 === 14))
{var state_18053__$1 = state_18053;var statearr_18097_18169 = state_18053__$1;(statearr_18097_18169[2] = null);
(statearr_18097_18169[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18054 === 15))
{var inst_17930 = (state_18053[14]);var inst_17933 = (state_18053[15]);var inst_17932 = (state_18053[16]);var inst_17931 = (state_18053[17]);var inst_17946 = (state_18053[2]);var inst_17947 = (inst_17933 + 1);var tmp18093 = inst_17930;var tmp18094 = inst_17932;var tmp18095 = inst_17931;var inst_17930__$1 = tmp18093;var inst_17931__$1 = tmp18095;var inst_17932__$1 = tmp18094;var inst_17933__$1 = inst_17947;var state_18053__$1 = (function (){var statearr_18098 = state_18053;(statearr_18098[27] = inst_17946);
(statearr_18098[14] = inst_17930__$1);
(statearr_18098[15] = inst_17933__$1);
(statearr_18098[16] = inst_17932__$1);
(statearr_18098[17] = inst_17931__$1);
return statearr_18098;
})();var statearr_18099_18170 = state_18053__$1;(statearr_18099_18170[2] = null);
(statearr_18099_18170[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18054 === 16))
{var inst_17950 = (state_18053[25]);var inst_17952 = cljs.core.chunked_seq_QMARK_.call(null,inst_17950);var state_18053__$1 = state_18053;if(inst_17952)
{var statearr_18100_18171 = state_18053__$1;(statearr_18100_18171[1] = 19);
} else
{var statearr_18101_18172 = state_18053__$1;(statearr_18101_18172[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18054 === 17))
{var state_18053__$1 = state_18053;var statearr_18102_18173 = state_18053__$1;(statearr_18102_18173[2] = null);
(statearr_18102_18173[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18054 === 18))
{var inst_17974 = (state_18053[2]);var state_18053__$1 = state_18053;var statearr_18103_18174 = state_18053__$1;(statearr_18103_18174[2] = inst_17974);
(statearr_18103_18174[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18054 === 19))
{var inst_17950 = (state_18053[25]);var inst_17954 = cljs.core.chunk_first.call(null,inst_17950);var inst_17955 = cljs.core.chunk_rest.call(null,inst_17950);var inst_17956 = cljs.core.count.call(null,inst_17954);var inst_17930 = inst_17955;var inst_17931 = inst_17954;var inst_17932 = inst_17956;var inst_17933 = 0;var state_18053__$1 = (function (){var statearr_18104 = state_18053;(statearr_18104[14] = inst_17930);
(statearr_18104[15] = inst_17933);
(statearr_18104[16] = inst_17932);
(statearr_18104[17] = inst_17931);
return statearr_18104;
})();var statearr_18105_18175 = state_18053__$1;(statearr_18105_18175[2] = null);
(statearr_18105_18175[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18054 === 20))
{var inst_17950 = (state_18053[25]);var inst_17960 = cljs.core.first.call(null,inst_17950);var inst_17961 = cljs.core.nth.call(null,inst_17960,0,null);var inst_17962 = cljs.core.nth.call(null,inst_17960,1,null);var state_18053__$1 = (function (){var statearr_18106 = state_18053;(statearr_18106[28] = inst_17961);
return statearr_18106;
})();if(cljs.core.truth_(inst_17962))
{var statearr_18107_18176 = state_18053__$1;(statearr_18107_18176[1] = 22);
} else
{var statearr_18108_18177 = state_18053__$1;(statearr_18108_18177[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18054 === 21))
{var inst_17971 = (state_18053[2]);var state_18053__$1 = state_18053;var statearr_18109_18178 = state_18053__$1;(statearr_18109_18178[2] = inst_17971);
(statearr_18109_18178[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18054 === 22))
{var inst_17961 = (state_18053[28]);var inst_17964 = cljs.core.async.close_BANG_.call(null,inst_17961);var state_18053__$1 = state_18053;var statearr_18110_18179 = state_18053__$1;(statearr_18110_18179[2] = inst_17964);
(statearr_18110_18179[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18054 === 23))
{var state_18053__$1 = state_18053;var statearr_18111_18180 = state_18053__$1;(statearr_18111_18180[2] = null);
(statearr_18111_18180[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18054 === 24))
{var inst_17950 = (state_18053[25]);var inst_17967 = (state_18053[2]);var inst_17968 = cljs.core.next.call(null,inst_17950);var inst_17930 = inst_17968;var inst_17931 = null;var inst_17932 = 0;var inst_17933 = 0;var state_18053__$1 = (function (){var statearr_18112 = state_18053;(statearr_18112[29] = inst_17967);
(statearr_18112[14] = inst_17930);
(statearr_18112[15] = inst_17933);
(statearr_18112[16] = inst_17932);
(statearr_18112[17] = inst_17931);
return statearr_18112;
})();var statearr_18113_18181 = state_18053__$1;(statearr_18113_18181[2] = null);
(statearr_18113_18181[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18054 === 25))
{var inst_17992 = (state_18053[11]);var inst_17991 = (state_18053[12]);var inst_17994 = (inst_17992 < inst_17991);var inst_17995 = inst_17994;var state_18053__$1 = state_18053;if(cljs.core.truth_(inst_17995))
{var statearr_18114_18182 = state_18053__$1;(statearr_18114_18182[1] = 27);
} else
{var statearr_18115_18183 = state_18053__$1;(statearr_18115_18183[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18054 === 26))
{var inst_17981 = (state_18053[19]);var inst_18039 = (state_18053[2]);var inst_18040 = cljs.core.seq.call(null,inst_17981);var state_18053__$1 = (function (){var statearr_18116 = state_18053;(statearr_18116[30] = inst_18039);
return statearr_18116;
})();if(inst_18040)
{var statearr_18117_18184 = state_18053__$1;(statearr_18117_18184[1] = 42);
} else
{var statearr_18118_18185 = state_18053__$1;(statearr_18118_18185[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18054 === 27))
{var inst_17990 = (state_18053[10]);var inst_17992 = (state_18053[11]);var inst_17997 = cljs.core._nth.call(null,inst_17990,inst_17992);var state_18053__$1 = (function (){var statearr_18119 = state_18053;(statearr_18119[8] = inst_17997);
return statearr_18119;
})();var statearr_18120_18186 = state_18053__$1;(statearr_18120_18186[2] = null);
(statearr_18120_18186[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18054 === 28))
{var inst_18010 = (state_18053[9]);var inst_17989 = (state_18053[13]);var inst_18010__$1 = cljs.core.seq.call(null,inst_17989);var state_18053__$1 = (function (){var statearr_18124 = state_18053;(statearr_18124[9] = inst_18010__$1);
return statearr_18124;
})();if(inst_18010__$1)
{var statearr_18125_18187 = state_18053__$1;(statearr_18125_18187[1] = 33);
} else
{var statearr_18126_18188 = state_18053__$1;(statearr_18126_18188[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18054 === 29))
{var inst_18037 = (state_18053[2]);var state_18053__$1 = state_18053;var statearr_18127_18189 = state_18053__$1;(statearr_18127_18189[2] = inst_18037);
(statearr_18127_18189[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18054 === 30))
{var inst_17990 = (state_18053[10]);var inst_17992 = (state_18053[11]);var inst_17991 = (state_18053[12]);var inst_17989 = (state_18053[13]);var inst_18006 = (state_18053[2]);var inst_18007 = (inst_17992 + 1);var tmp18121 = inst_17990;var tmp18122 = inst_17991;var tmp18123 = inst_17989;var inst_17989__$1 = tmp18123;var inst_17990__$1 = tmp18121;var inst_17991__$1 = tmp18122;var inst_17992__$1 = inst_18007;var state_18053__$1 = (function (){var statearr_18128 = state_18053;(statearr_18128[31] = inst_18006);
(statearr_18128[10] = inst_17990__$1);
(statearr_18128[11] = inst_17992__$1);
(statearr_18128[12] = inst_17991__$1);
(statearr_18128[13] = inst_17989__$1);
return statearr_18128;
})();var statearr_18129_18190 = state_18053__$1;(statearr_18129_18190[2] = null);
(statearr_18129_18190[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18054 === 31))
{var inst_17997 = (state_18053[8]);var inst_17998 = (state_18053[2]);var inst_17999 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_18000 = cljs.core.async.untap_STAR_.call(null,m,inst_17997);var state_18053__$1 = (function (){var statearr_18130 = state_18053;(statearr_18130[32] = inst_17999);
(statearr_18130[33] = inst_17998);
return statearr_18130;
})();var statearr_18131_18191 = state_18053__$1;(statearr_18131_18191[2] = inst_18000);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18053__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5982__auto__){
return (function() {
var state_machine__5983__auto__ = null;
var state_machine__5983__auto____0 = (function (){var statearr_18135 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18135[0] = state_machine__5983__auto__);
(statearr_18135[1] = 1);
return statearr_18135;
});
var state_machine__5983__auto____1 = (function (state_18053){while(true){
var ret_value__5984__auto__ = (function (){try{while(true){
var result__5985__auto__ = switch__5982__auto__.call(null,state_18053);if(cljs.core.keyword_identical_QMARK_.call(null,result__5985__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5985__auto__;
}
break;
}
}catch (e18136){if((e18136 instanceof Object))
{var ex__5986__auto__ = e18136;var statearr_18137_18192 = state_18053;(statearr_18137_18192[5] = ex__5986__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18053);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18136;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18193 = state_18053;
state_18053 = G__18193;
continue;
}
} else
{return ret_value__5984__auto__;
}
break;
}
});
state_machine__5983__auto__ = function(state_18053){
switch(arguments.length){
case 0:
return state_machine__5983__auto____0.call(this);
case 1:
return state_machine__5983__auto____1.call(this,state_18053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5983__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5983__auto____0;
state_machine__5983__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5983__auto____1;
return state_machine__5983__auto__;
})()
;})(switch__5982__auto__))
})();var state__6054__auto__ = (function (){var statearr_18138 = f__6053__auto__.call(null);(statearr_18138[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6052__auto___18139);
return statearr_18138;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6054__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj18195 = {};return obj18195;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3379__auto__ = m;if(and__3379__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3379__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__3999__auto__ = (((m == null))?null:m);return (function (){var or__3391__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__3999__auto__)]);if(or__3391__auto__)
{return or__3391__auto__;
} else
{var or__3391__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3391__auto____$1)
{return or__3391__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3379__auto__ = m;if(and__3379__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3379__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__3999__auto__ = (((m == null))?null:m);return (function (){var or__3391__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__3999__auto__)]);if(or__3391__auto__)
{return or__3391__auto__;
} else
{var or__3391__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3391__auto____$1)
{return or__3391__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3379__auto__ = m;if(and__3379__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3379__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__3999__auto__ = (((m == null))?null:m);return (function (){var or__3391__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__3999__auto__)]);if(or__3391__auto__)
{return or__3391__auto__;
} else
{var or__3391__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3391__auto____$1)
{return or__3391__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3379__auto__ = m;if(and__3379__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3379__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__3999__auto__ = (((m == null))?null:m);return (function (){var or__3391__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__3999__auto__)]);if(or__3391__auto__)
{return or__3391__auto__;
} else
{var or__3391__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3391__auto____$1)
{return or__3391__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3379__auto__ = m;if(and__3379__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3379__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__3999__auto__ = (((m == null))?null:m);return (function (){var or__3391__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__3999__auto__)]);if(or__3391__auto__)
{return or__3391__auto__;
} else
{var or__3391__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3391__auto____$1)
{return or__3391__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t18305 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18305 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta18306){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta18306 = meta18306;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18305.cljs$lang$type = true;
cljs.core.async.t18305.cljs$lang$ctorStr = "cljs.core.async/t18305";
cljs.core.async.t18305.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3940__auto__,writer__3941__auto__,opt__3942__auto__){return cljs.core._write.call(null,writer__3941__auto__,"cljs.core.async/t18305");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18305.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t18305.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18305.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18305.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18305.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18305.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18305.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t18305.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18305.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18307){var self__ = this;
var _18307__$1 = this;return self__.meta18306;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18305.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18307,meta18306__$1){var self__ = this;
var _18307__$1 = this;return (new cljs.core.async.t18305(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta18306__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t18305 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t18305(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta18306){return (new cljs.core.async.t18305(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta18306));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t18305(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6052__auto___18414 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6053__auto__ = (function (){var switch__5982__auto__ = (function (state_18372){var state_val_18373 = (state_18372[1]);if((state_val_18373 === 1))
{var inst_18311 = (state_18372[7]);var inst_18311__$1 = calc_state.call(null);var inst_18312 = cljs.core.seq_QMARK_.call(null,inst_18311__$1);var state_18372__$1 = (function (){var statearr_18374 = state_18372;(statearr_18374[7] = inst_18311__$1);
return statearr_18374;
})();if(inst_18312)
{var statearr_18375_18415 = state_18372__$1;(statearr_18375_18415[1] = 2);
} else
{var statearr_18376_18416 = state_18372__$1;(statearr_18376_18416[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18373 === 2))
{var inst_18311 = (state_18372[7]);var inst_18314 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18311);var state_18372__$1 = state_18372;var statearr_18377_18417 = state_18372__$1;(statearr_18377_18417[2] = inst_18314);
(statearr_18377_18417[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18373 === 3))
{var inst_18311 = (state_18372[7]);var state_18372__$1 = state_18372;var statearr_18378_18418 = state_18372__$1;(statearr_18378_18418[2] = inst_18311);
(statearr_18378_18418[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18373 === 4))
{var inst_18311 = (state_18372[7]);var inst_18317 = (state_18372[2]);var inst_18318 = cljs.core.get.call(null,inst_18317,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_18319 = cljs.core.get.call(null,inst_18317,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_18320 = cljs.core.get.call(null,inst_18317,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_18321 = inst_18311;var state_18372__$1 = (function (){var statearr_18379 = state_18372;(statearr_18379[8] = inst_18320);
(statearr_18379[9] = inst_18321);
(statearr_18379[10] = inst_18319);
(statearr_18379[11] = inst_18318);
return statearr_18379;
})();var statearr_18380_18419 = state_18372__$1;(statearr_18380_18419[2] = null);
(statearr_18380_18419[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18373 === 5))
{var inst_18321 = (state_18372[9]);var inst_18324 = cljs.core.seq_QMARK_.call(null,inst_18321);var state_18372__$1 = state_18372;if(inst_18324)
{var statearr_18381_18420 = state_18372__$1;(statearr_18381_18420[1] = 7);
} else
{var statearr_18382_18421 = state_18372__$1;(statearr_18382_18421[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18373 === 6))
{var inst_18370 = (state_18372[2]);var state_18372__$1 = state_18372;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18372__$1,inst_18370);
} else
{if((state_val_18373 === 7))
{var inst_18321 = (state_18372[9]);var inst_18326 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18321);var state_18372__$1 = state_18372;var statearr_18383_18422 = state_18372__$1;(statearr_18383_18422[2] = inst_18326);
(statearr_18383_18422[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18373 === 8))
{var inst_18321 = (state_18372[9]);var state_18372__$1 = state_18372;var statearr_18384_18423 = state_18372__$1;(statearr_18384_18423[2] = inst_18321);
(statearr_18384_18423[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18373 === 9))
{var inst_18329 = (state_18372[12]);var inst_18329__$1 = (state_18372[2]);var inst_18330 = cljs.core.get.call(null,inst_18329__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_18331 = cljs.core.get.call(null,inst_18329__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_18332 = cljs.core.get.call(null,inst_18329__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_18372__$1 = (function (){var statearr_18385 = state_18372;(statearr_18385[13] = inst_18331);
(statearr_18385[12] = inst_18329__$1);
(statearr_18385[14] = inst_18332);
return statearr_18385;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_18372__$1,10,inst_18330);
} else
{if((state_val_18373 === 10))
{var inst_18336 = (state_18372[15]);var inst_18337 = (state_18372[16]);var inst_18335 = (state_18372[2]);var inst_18336__$1 = cljs.core.nth.call(null,inst_18335,0,null);var inst_18337__$1 = cljs.core.nth.call(null,inst_18335,1,null);var inst_18338 = (inst_18336__$1 == null);var inst_18339 = cljs.core._EQ_.call(null,inst_18337__$1,change);var inst_18340 = (inst_18338) || (inst_18339);var state_18372__$1 = (function (){var statearr_18386 = state_18372;(statearr_18386[15] = inst_18336__$1);
(statearr_18386[16] = inst_18337__$1);
return statearr_18386;
})();if(cljs.core.truth_(inst_18340))
{var statearr_18387_18424 = state_18372__$1;(statearr_18387_18424[1] = 11);
} else
{var statearr_18388_18425 = state_18372__$1;(statearr_18388_18425[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18373 === 11))
{var inst_18336 = (state_18372[15]);var inst_18342 = (inst_18336 == null);var state_18372__$1 = state_18372;if(cljs.core.truth_(inst_18342))
{var statearr_18389_18426 = state_18372__$1;(statearr_18389_18426[1] = 14);
} else
{var statearr_18390_18427 = state_18372__$1;(statearr_18390_18427[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18373 === 12))
{var inst_18351 = (state_18372[17]);var inst_18337 = (state_18372[16]);var inst_18332 = (state_18372[14]);var inst_18351__$1 = inst_18332.call(null,inst_18337);var state_18372__$1 = (function (){var statearr_18391 = state_18372;(statearr_18391[17] = inst_18351__$1);
return statearr_18391;
})();if(cljs.core.truth_(inst_18351__$1))
{var statearr_18392_18428 = state_18372__$1;(statearr_18392_18428[1] = 17);
} else
{var statearr_18393_18429 = state_18372__$1;(statearr_18393_18429[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18373 === 13))
{var inst_18368 = (state_18372[2]);var state_18372__$1 = state_18372;var statearr_18394_18430 = state_18372__$1;(statearr_18394_18430[2] = inst_18368);
(statearr_18394_18430[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18373 === 14))
{var inst_18337 = (state_18372[16]);var inst_18344 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_18337);var state_18372__$1 = state_18372;var statearr_18395_18431 = state_18372__$1;(statearr_18395_18431[2] = inst_18344);
(statearr_18395_18431[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18373 === 15))
{var state_18372__$1 = state_18372;var statearr_18396_18432 = state_18372__$1;(statearr_18396_18432[2] = null);
(statearr_18396_18432[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18373 === 16))
{var inst_18347 = (state_18372[2]);var inst_18348 = calc_state.call(null);var inst_18321 = inst_18348;var state_18372__$1 = (function (){var statearr_18397 = state_18372;(statearr_18397[9] = inst_18321);
(statearr_18397[18] = inst_18347);
return statearr_18397;
})();var statearr_18398_18433 = state_18372__$1;(statearr_18398_18433[2] = null);
(statearr_18398_18433[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18373 === 17))
{var inst_18351 = (state_18372[17]);var state_18372__$1 = state_18372;var statearr_18399_18434 = state_18372__$1;(statearr_18399_18434[2] = inst_18351);
(statearr_18399_18434[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18373 === 18))
{var inst_18337 = (state_18372[16]);var inst_18331 = (state_18372[13]);var inst_18332 = (state_18372[14]);var inst_18354 = cljs.core.empty_QMARK_.call(null,inst_18332);var inst_18355 = inst_18331.call(null,inst_18337);var inst_18356 = cljs.core.not.call(null,inst_18355);var inst_18357 = (inst_18354) && (inst_18356);var state_18372__$1 = state_18372;var statearr_18400_18435 = state_18372__$1;(statearr_18400_18435[2] = inst_18357);
(statearr_18400_18435[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18373 === 19))
{var inst_18359 = (state_18372[2]);var state_18372__$1 = state_18372;if(cljs.core.truth_(inst_18359))
{var statearr_18401_18436 = state_18372__$1;(statearr_18401_18436[1] = 20);
} else
{var statearr_18402_18437 = state_18372__$1;(statearr_18402_18437[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18373 === 20))
{var inst_18336 = (state_18372[15]);var state_18372__$1 = state_18372;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18372__$1,23,out,inst_18336);
} else
{if((state_val_18373 === 21))
{var state_18372__$1 = state_18372;var statearr_18403_18438 = state_18372__$1;(statearr_18403_18438[2] = null);
(statearr_18403_18438[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18373 === 22))
{var inst_18329 = (state_18372[12]);var inst_18365 = (state_18372[2]);var inst_18321 = inst_18329;var state_18372__$1 = (function (){var statearr_18404 = state_18372;(statearr_18404[9] = inst_18321);
(statearr_18404[19] = inst_18365);
return statearr_18404;
})();var statearr_18405_18439 = state_18372__$1;(statearr_18405_18439[2] = null);
(statearr_18405_18439[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18373 === 23))
{var inst_18362 = (state_18372[2]);var state_18372__$1 = state_18372;var statearr_18406_18440 = state_18372__$1;(statearr_18406_18440[2] = inst_18362);
(statearr_18406_18440[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5982__auto__){
return (function() {
var state_machine__5983__auto__ = null;
var state_machine__5983__auto____0 = (function (){var statearr_18410 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18410[0] = state_machine__5983__auto__);
(statearr_18410[1] = 1);
return statearr_18410;
});
var state_machine__5983__auto____1 = (function (state_18372){while(true){
var ret_value__5984__auto__ = (function (){try{while(true){
var result__5985__auto__ = switch__5982__auto__.call(null,state_18372);if(cljs.core.keyword_identical_QMARK_.call(null,result__5985__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5985__auto__;
}
break;
}
}catch (e18411){if((e18411 instanceof Object))
{var ex__5986__auto__ = e18411;var statearr_18412_18441 = state_18372;(statearr_18412_18441[5] = ex__5986__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18372);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18411;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18442 = state_18372;
state_18372 = G__18442;
continue;
}
} else
{return ret_value__5984__auto__;
}
break;
}
});
state_machine__5983__auto__ = function(state_18372){
switch(arguments.length){
case 0:
return state_machine__5983__auto____0.call(this);
case 1:
return state_machine__5983__auto____1.call(this,state_18372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5983__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5983__auto____0;
state_machine__5983__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5983__auto____1;
return state_machine__5983__auto__;
})()
;})(switch__5982__auto__))
})();var state__6054__auto__ = (function (){var statearr_18413 = f__6053__auto__.call(null);(statearr_18413[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6052__auto___18414);
return statearr_18413;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6054__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj18444 = {};return obj18444;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3379__auto__ = p;if(and__3379__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3379__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__3999__auto__ = (((p == null))?null:p);return (function (){var or__3391__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__3999__auto__)]);if(or__3391__auto__)
{return or__3391__auto__;
} else
{var or__3391__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3391__auto____$1)
{return or__3391__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3379__auto__ = p;if(and__3379__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3379__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__3999__auto__ = (((p == null))?null:p);return (function (){var or__3391__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__3999__auto__)]);if(or__3391__auto__)
{return or__3391__auto__;
} else
{var or__3391__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3391__auto____$1)
{return or__3391__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3379__auto__ = p;if(and__3379__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3379__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__3999__auto__ = (((p == null))?null:p);return (function (){var or__3391__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3999__auto__)]);if(or__3391__auto__)
{return or__3391__auto__;
} else
{var or__3391__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3391__auto____$1)
{return or__3391__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3379__auto__ = p;if(and__3379__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3379__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__3999__auto__ = (((p == null))?null:p);return (function (){var or__3391__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3999__auto__)]);if(or__3391__auto__)
{return or__3391__auto__;
} else
{var or__3391__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3391__auto____$1)
{return or__3391__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3391__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3391__auto__))
{return or__3391__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3391__auto__,mults){
return (function (p1__18445_SHARP_){if(cljs.core.truth_(p1__18445_SHARP_.call(null,topic)))
{return p1__18445_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__18445_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3391__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t18570 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18570 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta18571){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta18571 = meta18571;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18570.cljs$lang$type = true;
cljs.core.async.t18570.cljs$lang$ctorStr = "cljs.core.async/t18570";
cljs.core.async.t18570.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3940__auto__,writer__3941__auto__,opt__3942__auto__){return cljs.core._write.call(null,writer__3941__auto__,"cljs.core.async/t18570");
});})(mults,ensure_mult))
;
cljs.core.async.t18570.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t18570.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t18570.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t18570.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t18570.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t18570.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t18570.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t18570.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_18572){var self__ = this;
var _18572__$1 = this;return self__.meta18571;
});})(mults,ensure_mult))
;
cljs.core.async.t18570.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_18572,meta18571__$1){var self__ = this;
var _18572__$1 = this;return (new cljs.core.async.t18570(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta18571__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t18570 = ((function (mults,ensure_mult){
return (function __GT_t18570(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta18571){return (new cljs.core.async.t18570(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta18571));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t18570(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6052__auto___18694 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6053__auto__ = (function (){var switch__5982__auto__ = (function (state_18646){var state_val_18647 = (state_18646[1]);if((state_val_18647 === 1))
{var state_18646__$1 = state_18646;var statearr_18648_18695 = state_18646__$1;(statearr_18648_18695[2] = null);
(statearr_18648_18695[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18647 === 2))
{var state_18646__$1 = state_18646;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18646__$1,4,ch);
} else
{if((state_val_18647 === 3))
{var inst_18644 = (state_18646[2]);var state_18646__$1 = state_18646;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18646__$1,inst_18644);
} else
{if((state_val_18647 === 4))
{var inst_18575 = (state_18646[7]);var inst_18575__$1 = (state_18646[2]);var inst_18576 = (inst_18575__$1 == null);var state_18646__$1 = (function (){var statearr_18649 = state_18646;(statearr_18649[7] = inst_18575__$1);
return statearr_18649;
})();if(cljs.core.truth_(inst_18576))
{var statearr_18650_18696 = state_18646__$1;(statearr_18650_18696[1] = 5);
} else
{var statearr_18651_18697 = state_18646__$1;(statearr_18651_18697[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18647 === 5))
{var inst_18582 = cljs.core.deref.call(null,mults);var inst_18583 = cljs.core.vals.call(null,inst_18582);var inst_18584 = cljs.core.seq.call(null,inst_18583);var inst_18585 = inst_18584;var inst_18586 = null;var inst_18587 = 0;var inst_18588 = 0;var state_18646__$1 = (function (){var statearr_18652 = state_18646;(statearr_18652[8] = inst_18587);
(statearr_18652[9] = inst_18588);
(statearr_18652[10] = inst_18586);
(statearr_18652[11] = inst_18585);
return statearr_18652;
})();var statearr_18653_18698 = state_18646__$1;(statearr_18653_18698[2] = null);
(statearr_18653_18698[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18647 === 6))
{var inst_18575 = (state_18646[7]);var inst_18623 = (state_18646[12]);var inst_18625 = (state_18646[13]);var inst_18623__$1 = topic_fn.call(null,inst_18575);var inst_18624 = cljs.core.deref.call(null,mults);var inst_18625__$1 = cljs.core.get.call(null,inst_18624,inst_18623__$1);var state_18646__$1 = (function (){var statearr_18654 = state_18646;(statearr_18654[12] = inst_18623__$1);
(statearr_18654[13] = inst_18625__$1);
return statearr_18654;
})();if(cljs.core.truth_(inst_18625__$1))
{var statearr_18655_18699 = state_18646__$1;(statearr_18655_18699[1] = 19);
} else
{var statearr_18656_18700 = state_18646__$1;(statearr_18656_18700[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18647 === 7))
{var inst_18642 = (state_18646[2]);var state_18646__$1 = state_18646;var statearr_18657_18701 = state_18646__$1;(statearr_18657_18701[2] = inst_18642);
(statearr_18657_18701[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18647 === 8))
{var inst_18587 = (state_18646[8]);var inst_18588 = (state_18646[9]);var inst_18590 = (inst_18588 < inst_18587);var inst_18591 = inst_18590;var state_18646__$1 = state_18646;if(cljs.core.truth_(inst_18591))
{var statearr_18661_18702 = state_18646__$1;(statearr_18661_18702[1] = 10);
} else
{var statearr_18662_18703 = state_18646__$1;(statearr_18662_18703[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18647 === 9))
{var inst_18621 = (state_18646[2]);var state_18646__$1 = state_18646;var statearr_18663_18704 = state_18646__$1;(statearr_18663_18704[2] = inst_18621);
(statearr_18663_18704[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18647 === 10))
{var inst_18587 = (state_18646[8]);var inst_18588 = (state_18646[9]);var inst_18586 = (state_18646[10]);var inst_18585 = (state_18646[11]);var inst_18593 = cljs.core._nth.call(null,inst_18586,inst_18588);var inst_18594 = cljs.core.async.muxch_STAR_.call(null,inst_18593);var inst_18595 = cljs.core.async.close_BANG_.call(null,inst_18594);var inst_18596 = (inst_18588 + 1);var tmp18658 = inst_18587;var tmp18659 = inst_18586;var tmp18660 = inst_18585;var inst_18585__$1 = tmp18660;var inst_18586__$1 = tmp18659;var inst_18587__$1 = tmp18658;var inst_18588__$1 = inst_18596;var state_18646__$1 = (function (){var statearr_18664 = state_18646;(statearr_18664[8] = inst_18587__$1);
(statearr_18664[9] = inst_18588__$1);
(statearr_18664[10] = inst_18586__$1);
(statearr_18664[11] = inst_18585__$1);
(statearr_18664[14] = inst_18595);
return statearr_18664;
})();var statearr_18665_18705 = state_18646__$1;(statearr_18665_18705[2] = null);
(statearr_18665_18705[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18647 === 11))
{var inst_18585 = (state_18646[11]);var inst_18599 = (state_18646[15]);var inst_18599__$1 = cljs.core.seq.call(null,inst_18585);var state_18646__$1 = (function (){var statearr_18666 = state_18646;(statearr_18666[15] = inst_18599__$1);
return statearr_18666;
})();if(inst_18599__$1)
{var statearr_18667_18706 = state_18646__$1;(statearr_18667_18706[1] = 13);
} else
{var statearr_18668_18707 = state_18646__$1;(statearr_18668_18707[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18647 === 12))
{var inst_18619 = (state_18646[2]);var state_18646__$1 = state_18646;var statearr_18669_18708 = state_18646__$1;(statearr_18669_18708[2] = inst_18619);
(statearr_18669_18708[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18647 === 13))
{var inst_18599 = (state_18646[15]);var inst_18601 = cljs.core.chunked_seq_QMARK_.call(null,inst_18599);var state_18646__$1 = state_18646;if(inst_18601)
{var statearr_18670_18709 = state_18646__$1;(statearr_18670_18709[1] = 16);
} else
{var statearr_18671_18710 = state_18646__$1;(statearr_18671_18710[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18647 === 14))
{var state_18646__$1 = state_18646;var statearr_18672_18711 = state_18646__$1;(statearr_18672_18711[2] = null);
(statearr_18672_18711[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18647 === 15))
{var inst_18617 = (state_18646[2]);var state_18646__$1 = state_18646;var statearr_18673_18712 = state_18646__$1;(statearr_18673_18712[2] = inst_18617);
(statearr_18673_18712[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18647 === 16))
{var inst_18599 = (state_18646[15]);var inst_18603 = cljs.core.chunk_first.call(null,inst_18599);var inst_18604 = cljs.core.chunk_rest.call(null,inst_18599);var inst_18605 = cljs.core.count.call(null,inst_18603);var inst_18585 = inst_18604;var inst_18586 = inst_18603;var inst_18587 = inst_18605;var inst_18588 = 0;var state_18646__$1 = (function (){var statearr_18674 = state_18646;(statearr_18674[8] = inst_18587);
(statearr_18674[9] = inst_18588);
(statearr_18674[10] = inst_18586);
(statearr_18674[11] = inst_18585);
return statearr_18674;
})();var statearr_18675_18713 = state_18646__$1;(statearr_18675_18713[2] = null);
(statearr_18675_18713[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18647 === 17))
{var inst_18599 = (state_18646[15]);var inst_18608 = cljs.core.first.call(null,inst_18599);var inst_18609 = cljs.core.async.muxch_STAR_.call(null,inst_18608);var inst_18610 = cljs.core.async.close_BANG_.call(null,inst_18609);var inst_18611 = cljs.core.next.call(null,inst_18599);var inst_18585 = inst_18611;var inst_18586 = null;var inst_18587 = 0;var inst_18588 = 0;var state_18646__$1 = (function (){var statearr_18676 = state_18646;(statearr_18676[16] = inst_18610);
(statearr_18676[8] = inst_18587);
(statearr_18676[9] = inst_18588);
(statearr_18676[10] = inst_18586);
(statearr_18676[11] = inst_18585);
return statearr_18676;
})();var statearr_18677_18714 = state_18646__$1;(statearr_18677_18714[2] = null);
(statearr_18677_18714[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18647 === 18))
{var inst_18614 = (state_18646[2]);var state_18646__$1 = state_18646;var statearr_18678_18715 = state_18646__$1;(statearr_18678_18715[2] = inst_18614);
(statearr_18678_18715[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18647 === 19))
{var state_18646__$1 = state_18646;var statearr_18679_18716 = state_18646__$1;(statearr_18679_18716[2] = null);
(statearr_18679_18716[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18647 === 20))
{var state_18646__$1 = state_18646;var statearr_18680_18717 = state_18646__$1;(statearr_18680_18717[2] = null);
(statearr_18680_18717[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18647 === 21))
{var inst_18639 = (state_18646[2]);var state_18646__$1 = (function (){var statearr_18681 = state_18646;(statearr_18681[17] = inst_18639);
return statearr_18681;
})();var statearr_18682_18718 = state_18646__$1;(statearr_18682_18718[2] = null);
(statearr_18682_18718[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18647 === 22))
{var inst_18636 = (state_18646[2]);var state_18646__$1 = state_18646;var statearr_18683_18719 = state_18646__$1;(statearr_18683_18719[2] = inst_18636);
(statearr_18683_18719[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18647 === 23))
{var inst_18623 = (state_18646[12]);var inst_18627 = (state_18646[2]);var inst_18628 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_18623);var state_18646__$1 = (function (){var statearr_18684 = state_18646;(statearr_18684[18] = inst_18627);
return statearr_18684;
})();var statearr_18685_18720 = state_18646__$1;(statearr_18685_18720[2] = inst_18628);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18646__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18647 === 24))
{var inst_18575 = (state_18646[7]);var inst_18625 = (state_18646[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18646,23,Object,null,22);var inst_18632 = cljs.core.async.muxch_STAR_.call(null,inst_18625);var state_18646__$1 = state_18646;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18646__$1,25,inst_18632,inst_18575);
} else
{if((state_val_18647 === 25))
{var inst_18634 = (state_18646[2]);var state_18646__$1 = state_18646;var statearr_18686_18721 = state_18646__$1;(statearr_18686_18721[2] = inst_18634);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18646__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5982__auto__){
return (function() {
var state_machine__5983__auto__ = null;
var state_machine__5983__auto____0 = (function (){var statearr_18690 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18690[0] = state_machine__5983__auto__);
(statearr_18690[1] = 1);
return statearr_18690;
});
var state_machine__5983__auto____1 = (function (state_18646){while(true){
var ret_value__5984__auto__ = (function (){try{while(true){
var result__5985__auto__ = switch__5982__auto__.call(null,state_18646);if(cljs.core.keyword_identical_QMARK_.call(null,result__5985__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5985__auto__;
}
break;
}
}catch (e18691){if((e18691 instanceof Object))
{var ex__5986__auto__ = e18691;var statearr_18692_18722 = state_18646;(statearr_18692_18722[5] = ex__5986__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18646);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18691;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18723 = state_18646;
state_18646 = G__18723;
continue;
}
} else
{return ret_value__5984__auto__;
}
break;
}
});
state_machine__5983__auto__ = function(state_18646){
switch(arguments.length){
case 0:
return state_machine__5983__auto____0.call(this);
case 1:
return state_machine__5983__auto____1.call(this,state_18646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5983__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5983__auto____0;
state_machine__5983__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5983__auto____1;
return state_machine__5983__auto__;
})()
;})(switch__5982__auto__))
})();var state__6054__auto__ = (function (){var statearr_18693 = f__6053__auto__.call(null);(statearr_18693[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6052__auto___18694);
return statearr_18693;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6054__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6052__auto___18860 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6053__auto__ = (function (){var switch__5982__auto__ = (function (state_18830){var state_val_18831 = (state_18830[1]);if((state_val_18831 === 1))
{var state_18830__$1 = state_18830;var statearr_18832_18861 = state_18830__$1;(statearr_18832_18861[2] = null);
(statearr_18832_18861[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18831 === 2))
{var inst_18793 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_18794 = 0;var state_18830__$1 = (function (){var statearr_18833 = state_18830;(statearr_18833[7] = inst_18793);
(statearr_18833[8] = inst_18794);
return statearr_18833;
})();var statearr_18834_18862 = state_18830__$1;(statearr_18834_18862[2] = null);
(statearr_18834_18862[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18831 === 3))
{var inst_18828 = (state_18830[2]);var state_18830__$1 = state_18830;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18830__$1,inst_18828);
} else
{if((state_val_18831 === 4))
{var inst_18794 = (state_18830[8]);var inst_18796 = (inst_18794 < cnt);var state_18830__$1 = state_18830;if(cljs.core.truth_(inst_18796))
{var statearr_18835_18863 = state_18830__$1;(statearr_18835_18863[1] = 6);
} else
{var statearr_18836_18864 = state_18830__$1;(statearr_18836_18864[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18831 === 5))
{var inst_18814 = (state_18830[2]);var state_18830__$1 = (function (){var statearr_18837 = state_18830;(statearr_18837[9] = inst_18814);
return statearr_18837;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18830__$1,12,dchan);
} else
{if((state_val_18831 === 6))
{var state_18830__$1 = state_18830;var statearr_18838_18865 = state_18830__$1;(statearr_18838_18865[2] = null);
(statearr_18838_18865[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18831 === 7))
{var state_18830__$1 = state_18830;var statearr_18839_18866 = state_18830__$1;(statearr_18839_18866[2] = null);
(statearr_18839_18866[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18831 === 8))
{var inst_18812 = (state_18830[2]);var state_18830__$1 = state_18830;var statearr_18840_18867 = state_18830__$1;(statearr_18840_18867[2] = inst_18812);
(statearr_18840_18867[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18831 === 9))
{var inst_18794 = (state_18830[8]);var inst_18807 = (state_18830[2]);var inst_18808 = (inst_18794 + 1);var inst_18794__$1 = inst_18808;var state_18830__$1 = (function (){var statearr_18841 = state_18830;(statearr_18841[10] = inst_18807);
(statearr_18841[8] = inst_18794__$1);
return statearr_18841;
})();var statearr_18842_18868 = state_18830__$1;(statearr_18842_18868[2] = null);
(statearr_18842_18868[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18831 === 10))
{var inst_18798 = (state_18830[2]);var inst_18799 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_18830__$1 = (function (){var statearr_18843 = state_18830;(statearr_18843[11] = inst_18798);
return statearr_18843;
})();var statearr_18844_18869 = state_18830__$1;(statearr_18844_18869[2] = inst_18799);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18830__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18831 === 11))
{var inst_18794 = (state_18830[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18830,10,Object,null,9);var inst_18803 = chs__$1.call(null,inst_18794);var inst_18804 = done.call(null,inst_18794);var inst_18805 = cljs.core.async.take_BANG_.call(null,inst_18803,inst_18804);var state_18830__$1 = state_18830;var statearr_18845_18870 = state_18830__$1;(statearr_18845_18870[2] = inst_18805);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18830__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18831 === 12))
{var inst_18816 = (state_18830[12]);var inst_18816__$1 = (state_18830[2]);var inst_18817 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_18816__$1);var state_18830__$1 = (function (){var statearr_18846 = state_18830;(statearr_18846[12] = inst_18816__$1);
return statearr_18846;
})();if(cljs.core.truth_(inst_18817))
{var statearr_18847_18871 = state_18830__$1;(statearr_18847_18871[1] = 13);
} else
{var statearr_18848_18872 = state_18830__$1;(statearr_18848_18872[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18831 === 13))
{var inst_18819 = cljs.core.async.close_BANG_.call(null,out);var state_18830__$1 = state_18830;var statearr_18849_18873 = state_18830__$1;(statearr_18849_18873[2] = inst_18819);
(statearr_18849_18873[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18831 === 14))
{var inst_18816 = (state_18830[12]);var inst_18821 = cljs.core.apply.call(null,f,inst_18816);var state_18830__$1 = state_18830;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18830__$1,16,out,inst_18821);
} else
{if((state_val_18831 === 15))
{var inst_18826 = (state_18830[2]);var state_18830__$1 = state_18830;var statearr_18850_18874 = state_18830__$1;(statearr_18850_18874[2] = inst_18826);
(statearr_18850_18874[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18831 === 16))
{var inst_18823 = (state_18830[2]);var state_18830__$1 = (function (){var statearr_18851 = state_18830;(statearr_18851[13] = inst_18823);
return statearr_18851;
})();var statearr_18852_18875 = state_18830__$1;(statearr_18852_18875[2] = null);
(statearr_18852_18875[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5982__auto__){
return (function() {
var state_machine__5983__auto__ = null;
var state_machine__5983__auto____0 = (function (){var statearr_18856 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18856[0] = state_machine__5983__auto__);
(statearr_18856[1] = 1);
return statearr_18856;
});
var state_machine__5983__auto____1 = (function (state_18830){while(true){
var ret_value__5984__auto__ = (function (){try{while(true){
var result__5985__auto__ = switch__5982__auto__.call(null,state_18830);if(cljs.core.keyword_identical_QMARK_.call(null,result__5985__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5985__auto__;
}
break;
}
}catch (e18857){if((e18857 instanceof Object))
{var ex__5986__auto__ = e18857;var statearr_18858_18876 = state_18830;(statearr_18858_18876[5] = ex__5986__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18830);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18857;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18877 = state_18830;
state_18830 = G__18877;
continue;
}
} else
{return ret_value__5984__auto__;
}
break;
}
});
state_machine__5983__auto__ = function(state_18830){
switch(arguments.length){
case 0:
return state_machine__5983__auto____0.call(this);
case 1:
return state_machine__5983__auto____1.call(this,state_18830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5983__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5983__auto____0;
state_machine__5983__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5983__auto____1;
return state_machine__5983__auto__;
})()
;})(switch__5982__auto__))
})();var state__6054__auto__ = (function (){var statearr_18859 = f__6053__auto__.call(null);(statearr_18859[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6052__auto___18860);
return statearr_18859;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6054__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6052__auto___18985 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6053__auto__ = (function (){var switch__5982__auto__ = (function (state_18961){var state_val_18962 = (state_18961[1]);if((state_val_18962 === 1))
{var inst_18932 = cljs.core.vec.call(null,chs);var inst_18933 = inst_18932;var state_18961__$1 = (function (){var statearr_18963 = state_18961;(statearr_18963[7] = inst_18933);
return statearr_18963;
})();var statearr_18964_18986 = state_18961__$1;(statearr_18964_18986[2] = null);
(statearr_18964_18986[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18962 === 2))
{var inst_18933 = (state_18961[7]);var inst_18935 = cljs.core.count.call(null,inst_18933);var inst_18936 = (inst_18935 > 0);var state_18961__$1 = state_18961;if(cljs.core.truth_(inst_18936))
{var statearr_18965_18987 = state_18961__$1;(statearr_18965_18987[1] = 4);
} else
{var statearr_18966_18988 = state_18961__$1;(statearr_18966_18988[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18962 === 3))
{var inst_18959 = (state_18961[2]);var state_18961__$1 = state_18961;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18961__$1,inst_18959);
} else
{if((state_val_18962 === 4))
{var inst_18933 = (state_18961[7]);var state_18961__$1 = state_18961;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_18961__$1,7,inst_18933);
} else
{if((state_val_18962 === 5))
{var inst_18955 = cljs.core.async.close_BANG_.call(null,out);var state_18961__$1 = state_18961;var statearr_18967_18989 = state_18961__$1;(statearr_18967_18989[2] = inst_18955);
(statearr_18967_18989[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18962 === 6))
{var inst_18957 = (state_18961[2]);var state_18961__$1 = state_18961;var statearr_18968_18990 = state_18961__$1;(statearr_18968_18990[2] = inst_18957);
(statearr_18968_18990[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18962 === 7))
{var inst_18941 = (state_18961[8]);var inst_18940 = (state_18961[9]);var inst_18940__$1 = (state_18961[2]);var inst_18941__$1 = cljs.core.nth.call(null,inst_18940__$1,0,null);var inst_18942 = cljs.core.nth.call(null,inst_18940__$1,1,null);var inst_18943 = (inst_18941__$1 == null);var state_18961__$1 = (function (){var statearr_18969 = state_18961;(statearr_18969[8] = inst_18941__$1);
(statearr_18969[10] = inst_18942);
(statearr_18969[9] = inst_18940__$1);
return statearr_18969;
})();if(cljs.core.truth_(inst_18943))
{var statearr_18970_18991 = state_18961__$1;(statearr_18970_18991[1] = 8);
} else
{var statearr_18971_18992 = state_18961__$1;(statearr_18971_18992[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18962 === 8))
{var inst_18933 = (state_18961[7]);var inst_18941 = (state_18961[8]);var inst_18942 = (state_18961[10]);var inst_18940 = (state_18961[9]);var inst_18945 = (function (){var c = inst_18942;var v = inst_18941;var vec__18938 = inst_18940;var cs = inst_18933;return ((function (c,v,vec__18938,cs,inst_18933,inst_18941,inst_18942,inst_18940,state_val_18962){
return (function (p1__18878_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__18878_SHARP_);
});
;})(c,v,vec__18938,cs,inst_18933,inst_18941,inst_18942,inst_18940,state_val_18962))
})();var inst_18946 = cljs.core.filterv.call(null,inst_18945,inst_18933);var inst_18933__$1 = inst_18946;var state_18961__$1 = (function (){var statearr_18972 = state_18961;(statearr_18972[7] = inst_18933__$1);
return statearr_18972;
})();var statearr_18973_18993 = state_18961__$1;(statearr_18973_18993[2] = null);
(statearr_18973_18993[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18962 === 9))
{var inst_18941 = (state_18961[8]);var state_18961__$1 = state_18961;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18961__$1,11,out,inst_18941);
} else
{if((state_val_18962 === 10))
{var inst_18953 = (state_18961[2]);var state_18961__$1 = state_18961;var statearr_18975_18994 = state_18961__$1;(statearr_18975_18994[2] = inst_18953);
(statearr_18975_18994[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18962 === 11))
{var inst_18933 = (state_18961[7]);var inst_18950 = (state_18961[2]);var tmp18974 = inst_18933;var inst_18933__$1 = tmp18974;var state_18961__$1 = (function (){var statearr_18976 = state_18961;(statearr_18976[7] = inst_18933__$1);
(statearr_18976[11] = inst_18950);
return statearr_18976;
})();var statearr_18977_18995 = state_18961__$1;(statearr_18977_18995[2] = null);
(statearr_18977_18995[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5982__auto__){
return (function() {
var state_machine__5983__auto__ = null;
var state_machine__5983__auto____0 = (function (){var statearr_18981 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18981[0] = state_machine__5983__auto__);
(statearr_18981[1] = 1);
return statearr_18981;
});
var state_machine__5983__auto____1 = (function (state_18961){while(true){
var ret_value__5984__auto__ = (function (){try{while(true){
var result__5985__auto__ = switch__5982__auto__.call(null,state_18961);if(cljs.core.keyword_identical_QMARK_.call(null,result__5985__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5985__auto__;
}
break;
}
}catch (e18982){if((e18982 instanceof Object))
{var ex__5986__auto__ = e18982;var statearr_18983_18996 = state_18961;(statearr_18983_18996[5] = ex__5986__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18961);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18982;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18997 = state_18961;
state_18961 = G__18997;
continue;
}
} else
{return ret_value__5984__auto__;
}
break;
}
});
state_machine__5983__auto__ = function(state_18961){
switch(arguments.length){
case 0:
return state_machine__5983__auto____0.call(this);
case 1:
return state_machine__5983__auto____1.call(this,state_18961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5983__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5983__auto____0;
state_machine__5983__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5983__auto____1;
return state_machine__5983__auto__;
})()
;})(switch__5982__auto__))
})();var state__6054__auto__ = (function (){var statearr_18984 = f__6053__auto__.call(null);(statearr_18984[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6052__auto___18985);
return statearr_18984;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6054__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6052__auto___19090 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6053__auto__ = (function (){var switch__5982__auto__ = (function (state_19067){var state_val_19068 = (state_19067[1]);if((state_val_19068 === 1))
{var inst_19044 = 0;var state_19067__$1 = (function (){var statearr_19069 = state_19067;(statearr_19069[7] = inst_19044);
return statearr_19069;
})();var statearr_19070_19091 = state_19067__$1;(statearr_19070_19091[2] = null);
(statearr_19070_19091[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19068 === 2))
{var inst_19044 = (state_19067[7]);var inst_19046 = (inst_19044 < n);var state_19067__$1 = state_19067;if(cljs.core.truth_(inst_19046))
{var statearr_19071_19092 = state_19067__$1;(statearr_19071_19092[1] = 4);
} else
{var statearr_19072_19093 = state_19067__$1;(statearr_19072_19093[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19068 === 3))
{var inst_19064 = (state_19067[2]);var inst_19065 = cljs.core.async.close_BANG_.call(null,out);var state_19067__$1 = (function (){var statearr_19073 = state_19067;(statearr_19073[8] = inst_19064);
return statearr_19073;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19067__$1,inst_19065);
} else
{if((state_val_19068 === 4))
{var state_19067__$1 = state_19067;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19067__$1,7,ch);
} else
{if((state_val_19068 === 5))
{var state_19067__$1 = state_19067;var statearr_19074_19094 = state_19067__$1;(statearr_19074_19094[2] = null);
(statearr_19074_19094[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19068 === 6))
{var inst_19062 = (state_19067[2]);var state_19067__$1 = state_19067;var statearr_19075_19095 = state_19067__$1;(statearr_19075_19095[2] = inst_19062);
(statearr_19075_19095[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19068 === 7))
{var inst_19049 = (state_19067[9]);var inst_19049__$1 = (state_19067[2]);var inst_19050 = (inst_19049__$1 == null);var inst_19051 = cljs.core.not.call(null,inst_19050);var state_19067__$1 = (function (){var statearr_19076 = state_19067;(statearr_19076[9] = inst_19049__$1);
return statearr_19076;
})();if(inst_19051)
{var statearr_19077_19096 = state_19067__$1;(statearr_19077_19096[1] = 8);
} else
{var statearr_19078_19097 = state_19067__$1;(statearr_19078_19097[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19068 === 8))
{var inst_19049 = (state_19067[9]);var state_19067__$1 = state_19067;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19067__$1,11,out,inst_19049);
} else
{if((state_val_19068 === 9))
{var state_19067__$1 = state_19067;var statearr_19079_19098 = state_19067__$1;(statearr_19079_19098[2] = null);
(statearr_19079_19098[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19068 === 10))
{var inst_19059 = (state_19067[2]);var state_19067__$1 = state_19067;var statearr_19080_19099 = state_19067__$1;(statearr_19080_19099[2] = inst_19059);
(statearr_19080_19099[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19068 === 11))
{var inst_19044 = (state_19067[7]);var inst_19054 = (state_19067[2]);var inst_19055 = (inst_19044 + 1);var inst_19044__$1 = inst_19055;var state_19067__$1 = (function (){var statearr_19081 = state_19067;(statearr_19081[7] = inst_19044__$1);
(statearr_19081[10] = inst_19054);
return statearr_19081;
})();var statearr_19082_19100 = state_19067__$1;(statearr_19082_19100[2] = null);
(statearr_19082_19100[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5982__auto__){
return (function() {
var state_machine__5983__auto__ = null;
var state_machine__5983__auto____0 = (function (){var statearr_19086 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_19086[0] = state_machine__5983__auto__);
(statearr_19086[1] = 1);
return statearr_19086;
});
var state_machine__5983__auto____1 = (function (state_19067){while(true){
var ret_value__5984__auto__ = (function (){try{while(true){
var result__5985__auto__ = switch__5982__auto__.call(null,state_19067);if(cljs.core.keyword_identical_QMARK_.call(null,result__5985__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5985__auto__;
}
break;
}
}catch (e19087){if((e19087 instanceof Object))
{var ex__5986__auto__ = e19087;var statearr_19088_19101 = state_19067;(statearr_19088_19101[5] = ex__5986__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19067);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19087;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19102 = state_19067;
state_19067 = G__19102;
continue;
}
} else
{return ret_value__5984__auto__;
}
break;
}
});
state_machine__5983__auto__ = function(state_19067){
switch(arguments.length){
case 0:
return state_machine__5983__auto____0.call(this);
case 1:
return state_machine__5983__auto____1.call(this,state_19067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5983__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5983__auto____0;
state_machine__5983__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5983__auto____1;
return state_machine__5983__auto__;
})()
;})(switch__5982__auto__))
})();var state__6054__auto__ = (function (){var statearr_19089 = f__6053__auto__.call(null);(statearr_19089[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6052__auto___19090);
return statearr_19089;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6054__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6052__auto___19199 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6053__auto__ = (function (){var switch__5982__auto__ = (function (state_19174){var state_val_19175 = (state_19174[1]);if((state_val_19175 === 1))
{var inst_19151 = null;var state_19174__$1 = (function (){var statearr_19176 = state_19174;(statearr_19176[7] = inst_19151);
return statearr_19176;
})();var statearr_19177_19200 = state_19174__$1;(statearr_19177_19200[2] = null);
(statearr_19177_19200[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19175 === 2))
{var state_19174__$1 = state_19174;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19174__$1,4,ch);
} else
{if((state_val_19175 === 3))
{var inst_19171 = (state_19174[2]);var inst_19172 = cljs.core.async.close_BANG_.call(null,out);var state_19174__$1 = (function (){var statearr_19178 = state_19174;(statearr_19178[8] = inst_19171);
return statearr_19178;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19174__$1,inst_19172);
} else
{if((state_val_19175 === 4))
{var inst_19154 = (state_19174[9]);var inst_19154__$1 = (state_19174[2]);var inst_19155 = (inst_19154__$1 == null);var inst_19156 = cljs.core.not.call(null,inst_19155);var state_19174__$1 = (function (){var statearr_19179 = state_19174;(statearr_19179[9] = inst_19154__$1);
return statearr_19179;
})();if(inst_19156)
{var statearr_19180_19201 = state_19174__$1;(statearr_19180_19201[1] = 5);
} else
{var statearr_19181_19202 = state_19174__$1;(statearr_19181_19202[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19175 === 5))
{var inst_19151 = (state_19174[7]);var inst_19154 = (state_19174[9]);var inst_19158 = cljs.core._EQ_.call(null,inst_19154,inst_19151);var state_19174__$1 = state_19174;if(inst_19158)
{var statearr_19182_19203 = state_19174__$1;(statearr_19182_19203[1] = 8);
} else
{var statearr_19183_19204 = state_19174__$1;(statearr_19183_19204[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19175 === 6))
{var state_19174__$1 = state_19174;var statearr_19185_19205 = state_19174__$1;(statearr_19185_19205[2] = null);
(statearr_19185_19205[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19175 === 7))
{var inst_19169 = (state_19174[2]);var state_19174__$1 = state_19174;var statearr_19186_19206 = state_19174__$1;(statearr_19186_19206[2] = inst_19169);
(statearr_19186_19206[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19175 === 8))
{var inst_19151 = (state_19174[7]);var tmp19184 = inst_19151;var inst_19151__$1 = tmp19184;var state_19174__$1 = (function (){var statearr_19187 = state_19174;(statearr_19187[7] = inst_19151__$1);
return statearr_19187;
})();var statearr_19188_19207 = state_19174__$1;(statearr_19188_19207[2] = null);
(statearr_19188_19207[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19175 === 9))
{var inst_19154 = (state_19174[9]);var state_19174__$1 = state_19174;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19174__$1,11,out,inst_19154);
} else
{if((state_val_19175 === 10))
{var inst_19166 = (state_19174[2]);var state_19174__$1 = state_19174;var statearr_19189_19208 = state_19174__$1;(statearr_19189_19208[2] = inst_19166);
(statearr_19189_19208[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19175 === 11))
{var inst_19154 = (state_19174[9]);var inst_19163 = (state_19174[2]);var inst_19151 = inst_19154;var state_19174__$1 = (function (){var statearr_19190 = state_19174;(statearr_19190[10] = inst_19163);
(statearr_19190[7] = inst_19151);
return statearr_19190;
})();var statearr_19191_19209 = state_19174__$1;(statearr_19191_19209[2] = null);
(statearr_19191_19209[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5982__auto__){
return (function() {
var state_machine__5983__auto__ = null;
var state_machine__5983__auto____0 = (function (){var statearr_19195 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_19195[0] = state_machine__5983__auto__);
(statearr_19195[1] = 1);
return statearr_19195;
});
var state_machine__5983__auto____1 = (function (state_19174){while(true){
var ret_value__5984__auto__ = (function (){try{while(true){
var result__5985__auto__ = switch__5982__auto__.call(null,state_19174);if(cljs.core.keyword_identical_QMARK_.call(null,result__5985__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5985__auto__;
}
break;
}
}catch (e19196){if((e19196 instanceof Object))
{var ex__5986__auto__ = e19196;var statearr_19197_19210 = state_19174;(statearr_19197_19210[5] = ex__5986__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19174);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19196;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19211 = state_19174;
state_19174 = G__19211;
continue;
}
} else
{return ret_value__5984__auto__;
}
break;
}
});
state_machine__5983__auto__ = function(state_19174){
switch(arguments.length){
case 0:
return state_machine__5983__auto____0.call(this);
case 1:
return state_machine__5983__auto____1.call(this,state_19174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5983__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5983__auto____0;
state_machine__5983__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5983__auto____1;
return state_machine__5983__auto__;
})()
;})(switch__5982__auto__))
})();var state__6054__auto__ = (function (){var statearr_19198 = f__6053__auto__.call(null);(statearr_19198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6052__auto___19199);
return statearr_19198;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6054__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6052__auto___19346 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6053__auto__ = (function (){var switch__5982__auto__ = (function (state_19316){var state_val_19317 = (state_19316[1]);if((state_val_19317 === 1))
{var inst_19279 = (new Array(n));var inst_19280 = inst_19279;var inst_19281 = 0;var state_19316__$1 = (function (){var statearr_19318 = state_19316;(statearr_19318[7] = inst_19281);
(statearr_19318[8] = inst_19280);
return statearr_19318;
})();var statearr_19319_19347 = state_19316__$1;(statearr_19319_19347[2] = null);
(statearr_19319_19347[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19317 === 2))
{var state_19316__$1 = state_19316;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19316__$1,4,ch);
} else
{if((state_val_19317 === 3))
{var inst_19314 = (state_19316[2]);var state_19316__$1 = state_19316;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19316__$1,inst_19314);
} else
{if((state_val_19317 === 4))
{var inst_19284 = (state_19316[9]);var inst_19284__$1 = (state_19316[2]);var inst_19285 = (inst_19284__$1 == null);var inst_19286 = cljs.core.not.call(null,inst_19285);var state_19316__$1 = (function (){var statearr_19320 = state_19316;(statearr_19320[9] = inst_19284__$1);
return statearr_19320;
})();if(inst_19286)
{var statearr_19321_19348 = state_19316__$1;(statearr_19321_19348[1] = 5);
} else
{var statearr_19322_19349 = state_19316__$1;(statearr_19322_19349[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19317 === 5))
{var inst_19281 = (state_19316[7]);var inst_19284 = (state_19316[9]);var inst_19280 = (state_19316[8]);var inst_19289 = (state_19316[10]);var inst_19288 = (inst_19280[inst_19281] = inst_19284);var inst_19289__$1 = (inst_19281 + 1);var inst_19290 = (inst_19289__$1 < n);var state_19316__$1 = (function (){var statearr_19323 = state_19316;(statearr_19323[11] = inst_19288);
(statearr_19323[10] = inst_19289__$1);
return statearr_19323;
})();if(cljs.core.truth_(inst_19290))
{var statearr_19324_19350 = state_19316__$1;(statearr_19324_19350[1] = 8);
} else
{var statearr_19325_19351 = state_19316__$1;(statearr_19325_19351[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19317 === 6))
{var inst_19281 = (state_19316[7]);var inst_19302 = (inst_19281 > 0);var state_19316__$1 = state_19316;if(cljs.core.truth_(inst_19302))
{var statearr_19327_19352 = state_19316__$1;(statearr_19327_19352[1] = 12);
} else
{var statearr_19328_19353 = state_19316__$1;(statearr_19328_19353[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19317 === 7))
{var inst_19312 = (state_19316[2]);var state_19316__$1 = state_19316;var statearr_19329_19354 = state_19316__$1;(statearr_19329_19354[2] = inst_19312);
(statearr_19329_19354[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19317 === 8))
{var inst_19280 = (state_19316[8]);var inst_19289 = (state_19316[10]);var tmp19326 = inst_19280;var inst_19280__$1 = tmp19326;var inst_19281 = inst_19289;var state_19316__$1 = (function (){var statearr_19330 = state_19316;(statearr_19330[7] = inst_19281);
(statearr_19330[8] = inst_19280__$1);
return statearr_19330;
})();var statearr_19331_19355 = state_19316__$1;(statearr_19331_19355[2] = null);
(statearr_19331_19355[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19317 === 9))
{var inst_19280 = (state_19316[8]);var inst_19294 = cljs.core.vec.call(null,inst_19280);var state_19316__$1 = state_19316;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19316__$1,11,out,inst_19294);
} else
{if((state_val_19317 === 10))
{var inst_19300 = (state_19316[2]);var state_19316__$1 = state_19316;var statearr_19332_19356 = state_19316__$1;(statearr_19332_19356[2] = inst_19300);
(statearr_19332_19356[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19317 === 11))
{var inst_19296 = (state_19316[2]);var inst_19297 = (new Array(n));var inst_19280 = inst_19297;var inst_19281 = 0;var state_19316__$1 = (function (){var statearr_19333 = state_19316;(statearr_19333[7] = inst_19281);
(statearr_19333[8] = inst_19280);
(statearr_19333[12] = inst_19296);
return statearr_19333;
})();var statearr_19334_19357 = state_19316__$1;(statearr_19334_19357[2] = null);
(statearr_19334_19357[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19317 === 12))
{var inst_19280 = (state_19316[8]);var inst_19304 = cljs.core.vec.call(null,inst_19280);var state_19316__$1 = state_19316;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19316__$1,15,out,inst_19304);
} else
{if((state_val_19317 === 13))
{var state_19316__$1 = state_19316;var statearr_19335_19358 = state_19316__$1;(statearr_19335_19358[2] = null);
(statearr_19335_19358[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19317 === 14))
{var inst_19309 = (state_19316[2]);var inst_19310 = cljs.core.async.close_BANG_.call(null,out);var state_19316__$1 = (function (){var statearr_19336 = state_19316;(statearr_19336[13] = inst_19309);
return statearr_19336;
})();var statearr_19337_19359 = state_19316__$1;(statearr_19337_19359[2] = inst_19310);
(statearr_19337_19359[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19317 === 15))
{var inst_19306 = (state_19316[2]);var state_19316__$1 = state_19316;var statearr_19338_19360 = state_19316__$1;(statearr_19338_19360[2] = inst_19306);
(statearr_19338_19360[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5982__auto__){
return (function() {
var state_machine__5983__auto__ = null;
var state_machine__5983__auto____0 = (function (){var statearr_19342 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19342[0] = state_machine__5983__auto__);
(statearr_19342[1] = 1);
return statearr_19342;
});
var state_machine__5983__auto____1 = (function (state_19316){while(true){
var ret_value__5984__auto__ = (function (){try{while(true){
var result__5985__auto__ = switch__5982__auto__.call(null,state_19316);if(cljs.core.keyword_identical_QMARK_.call(null,result__5985__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5985__auto__;
}
break;
}
}catch (e19343){if((e19343 instanceof Object))
{var ex__5986__auto__ = e19343;var statearr_19344_19361 = state_19316;(statearr_19344_19361[5] = ex__5986__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19316);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19343;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19362 = state_19316;
state_19316 = G__19362;
continue;
}
} else
{return ret_value__5984__auto__;
}
break;
}
});
state_machine__5983__auto__ = function(state_19316){
switch(arguments.length){
case 0:
return state_machine__5983__auto____0.call(this);
case 1:
return state_machine__5983__auto____1.call(this,state_19316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5983__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5983__auto____0;
state_machine__5983__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5983__auto____1;
return state_machine__5983__auto__;
})()
;})(switch__5982__auto__))
})();var state__6054__auto__ = (function (){var statearr_19345 = f__6053__auto__.call(null);(statearr_19345[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6052__auto___19346);
return statearr_19345;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6054__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6052__auto___19505 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6053__auto__ = (function (){var switch__5982__auto__ = (function (state_19475){var state_val_19476 = (state_19475[1]);if((state_val_19476 === 1))
{var inst_19434 = [];var inst_19435 = inst_19434;var inst_19436 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_19475__$1 = (function (){var statearr_19477 = state_19475;(statearr_19477[7] = inst_19436);
(statearr_19477[8] = inst_19435);
return statearr_19477;
})();var statearr_19478_19506 = state_19475__$1;(statearr_19478_19506[2] = null);
(statearr_19478_19506[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19476 === 2))
{var state_19475__$1 = state_19475;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19475__$1,4,ch);
} else
{if((state_val_19476 === 3))
{var inst_19473 = (state_19475[2]);var state_19475__$1 = state_19475;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19475__$1,inst_19473);
} else
{if((state_val_19476 === 4))
{var inst_19439 = (state_19475[9]);var inst_19439__$1 = (state_19475[2]);var inst_19440 = (inst_19439__$1 == null);var inst_19441 = cljs.core.not.call(null,inst_19440);var state_19475__$1 = (function (){var statearr_19479 = state_19475;(statearr_19479[9] = inst_19439__$1);
return statearr_19479;
})();if(inst_19441)
{var statearr_19480_19507 = state_19475__$1;(statearr_19480_19507[1] = 5);
} else
{var statearr_19481_19508 = state_19475__$1;(statearr_19481_19508[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19476 === 5))
{var inst_19436 = (state_19475[7]);var inst_19439 = (state_19475[9]);var inst_19443 = (state_19475[10]);var inst_19443__$1 = f.call(null,inst_19439);var inst_19444 = cljs.core._EQ_.call(null,inst_19443__$1,inst_19436);var inst_19445 = cljs.core.keyword_identical_QMARK_.call(null,inst_19436,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_19446 = (inst_19444) || (inst_19445);var state_19475__$1 = (function (){var statearr_19482 = state_19475;(statearr_19482[10] = inst_19443__$1);
return statearr_19482;
})();if(cljs.core.truth_(inst_19446))
{var statearr_19483_19509 = state_19475__$1;(statearr_19483_19509[1] = 8);
} else
{var statearr_19484_19510 = state_19475__$1;(statearr_19484_19510[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19476 === 6))
{var inst_19435 = (state_19475[8]);var inst_19460 = inst_19435.length;var inst_19461 = (inst_19460 > 0);var state_19475__$1 = state_19475;if(cljs.core.truth_(inst_19461))
{var statearr_19486_19511 = state_19475__$1;(statearr_19486_19511[1] = 12);
} else
{var statearr_19487_19512 = state_19475__$1;(statearr_19487_19512[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19476 === 7))
{var inst_19471 = (state_19475[2]);var state_19475__$1 = state_19475;var statearr_19488_19513 = state_19475__$1;(statearr_19488_19513[2] = inst_19471);
(statearr_19488_19513[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19476 === 8))
{var inst_19435 = (state_19475[8]);var inst_19439 = (state_19475[9]);var inst_19443 = (state_19475[10]);var inst_19448 = inst_19435.push(inst_19439);var tmp19485 = inst_19435;var inst_19435__$1 = tmp19485;var inst_19436 = inst_19443;var state_19475__$1 = (function (){var statearr_19489 = state_19475;(statearr_19489[7] = inst_19436);
(statearr_19489[8] = inst_19435__$1);
(statearr_19489[11] = inst_19448);
return statearr_19489;
})();var statearr_19490_19514 = state_19475__$1;(statearr_19490_19514[2] = null);
(statearr_19490_19514[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19476 === 9))
{var inst_19435 = (state_19475[8]);var inst_19451 = cljs.core.vec.call(null,inst_19435);var state_19475__$1 = state_19475;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19475__$1,11,out,inst_19451);
} else
{if((state_val_19476 === 10))
{var inst_19458 = (state_19475[2]);var state_19475__$1 = state_19475;var statearr_19491_19515 = state_19475__$1;(statearr_19491_19515[2] = inst_19458);
(statearr_19491_19515[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19476 === 11))
{var inst_19439 = (state_19475[9]);var inst_19443 = (state_19475[10]);var inst_19453 = (state_19475[2]);var inst_19454 = [];var inst_19455 = inst_19454.push(inst_19439);var inst_19435 = inst_19454;var inst_19436 = inst_19443;var state_19475__$1 = (function (){var statearr_19492 = state_19475;(statearr_19492[12] = inst_19453);
(statearr_19492[13] = inst_19455);
(statearr_19492[7] = inst_19436);
(statearr_19492[8] = inst_19435);
return statearr_19492;
})();var statearr_19493_19516 = state_19475__$1;(statearr_19493_19516[2] = null);
(statearr_19493_19516[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19476 === 12))
{var inst_19435 = (state_19475[8]);var inst_19463 = cljs.core.vec.call(null,inst_19435);var state_19475__$1 = state_19475;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19475__$1,15,out,inst_19463);
} else
{if((state_val_19476 === 13))
{var state_19475__$1 = state_19475;var statearr_19494_19517 = state_19475__$1;(statearr_19494_19517[2] = null);
(statearr_19494_19517[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19476 === 14))
{var inst_19468 = (state_19475[2]);var inst_19469 = cljs.core.async.close_BANG_.call(null,out);var state_19475__$1 = (function (){var statearr_19495 = state_19475;(statearr_19495[14] = inst_19468);
return statearr_19495;
})();var statearr_19496_19518 = state_19475__$1;(statearr_19496_19518[2] = inst_19469);
(statearr_19496_19518[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19476 === 15))
{var inst_19465 = (state_19475[2]);var state_19475__$1 = state_19475;var statearr_19497_19519 = state_19475__$1;(statearr_19497_19519[2] = inst_19465);
(statearr_19497_19519[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5982__auto__){
return (function() {
var state_machine__5983__auto__ = null;
var state_machine__5983__auto____0 = (function (){var statearr_19501 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19501[0] = state_machine__5983__auto__);
(statearr_19501[1] = 1);
return statearr_19501;
});
var state_machine__5983__auto____1 = (function (state_19475){while(true){
var ret_value__5984__auto__ = (function (){try{while(true){
var result__5985__auto__ = switch__5982__auto__.call(null,state_19475);if(cljs.core.keyword_identical_QMARK_.call(null,result__5985__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5985__auto__;
}
break;
}
}catch (e19502){if((e19502 instanceof Object))
{var ex__5986__auto__ = e19502;var statearr_19503_19520 = state_19475;(statearr_19503_19520[5] = ex__5986__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19475);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19502;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19521 = state_19475;
state_19475 = G__19521;
continue;
}
} else
{return ret_value__5984__auto__;
}
break;
}
});
state_machine__5983__auto__ = function(state_19475){
switch(arguments.length){
case 0:
return state_machine__5983__auto____0.call(this);
case 1:
return state_machine__5983__auto____1.call(this,state_19475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5983__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5983__auto____0;
state_machine__5983__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5983__auto____1;
return state_machine__5983__auto__;
})()
;})(switch__5982__auto__))
})();var state__6054__auto__ = (function (){var statearr_19504 = f__6053__auto__.call(null);(statearr_19504[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6052__auto___19505);
return statearr_19504;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6054__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map