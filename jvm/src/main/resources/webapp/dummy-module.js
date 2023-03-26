'use strict';
import * as $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81 from "./internal-c5448624127961ad25196dc750e04b9e3ec61c81.js";
/** @constructor */
function $c_Lquizleague_web_maintain_MaintainApp$() {
  /*<skip>*/
}
$c_Lquizleague_web_maintain_MaintainApp$.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_Lquizleague_web_maintain_MaintainApp$.prototype.constructor = $c_Lquizleague_web_maintain_MaintainApp$;
/** @constructor */
function $h_Lquizleague_web_maintain_MaintainApp$() {
  /*<skip>*/
}
$h_Lquizleague_web_maintain_MaintainApp$.prototype = $c_Lquizleague_web_maintain_MaintainApp$.prototype;
$c_Lquizleague_web_maintain_MaintainApp$.prototype.main__V = (function() {
  var resultPromise = import("./internal-c16b25b15348fbd4d2502d07fc6c3c396c33ca0c.js").then((($$module) => $$module.$s_Lquizleague_web_maintain_MaintainApp$$anon$1__dynamicImport$__O()));
  var this$3 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($m_sjs_js_Thenable$ThenableOps$().toFuture$extension__sjs_js_Thenable__s_concurrent_Future(resultPromise));
  var f = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((result$2) => (void 0)));
  var executor = $m_s_concurrent_ExecutionContext$Implicits$().global__s_concurrent_ExecutionContext();
  $f_s_concurrent_Future__foreach__F1__s_concurrent_ExecutionContext__V(this$3, f, executor)
});
var $d_Lquizleague_web_maintain_MaintainApp$ = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  Lquizleague_web_maintain_MaintainApp$: 0
}, false, "quizleague.web.maintain.MaintainApp$", {
  Lquizleague_web_maintain_MaintainApp$: 1,
  O: 1
});
$c_Lquizleague_web_maintain_MaintainApp$.prototype.$classData = $d_Lquizleague_web_maintain_MaintainApp$;
var $n_Lquizleague_web_maintain_MaintainApp$;
function $m_Lquizleague_web_maintain_MaintainApp$() {
  if ((!$n_Lquizleague_web_maintain_MaintainApp$)) {
    $n_Lquizleague_web_maintain_MaintainApp$ = new $c_Lquizleague_web_maintain_MaintainApp$()
  };
  return $n_Lquizleague_web_maintain_MaintainApp$
}
function $p_s_concurrent_ExecutionContext$Implicits$__global$lzycompute__s_concurrent_ExecutionContext($thiz) {
  if ((!$thiz.s_concurrent_ExecutionContext$Implicits$__f_bitmap$0)) {
    $thiz.s_concurrent_ExecutionContext$Implicits$__f_global = $m_sjs_concurrent_JSExecutionContext$().sjs_concurrent_JSExecutionContext$__f_queue;
    $thiz.s_concurrent_ExecutionContext$Implicits$__f_bitmap$0 = true
  };
  return $thiz.s_concurrent_ExecutionContext$Implicits$__f_global
}
/** @constructor */
function $c_s_concurrent_ExecutionContext$Implicits$() {
  this.s_concurrent_ExecutionContext$Implicits$__f_global = null;
  this.s_concurrent_ExecutionContext$Implicits$__f_bitmap$0 = false
}
$c_s_concurrent_ExecutionContext$Implicits$.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_s_concurrent_ExecutionContext$Implicits$.prototype.constructor = $c_s_concurrent_ExecutionContext$Implicits$;
/** @constructor */
function $h_s_concurrent_ExecutionContext$Implicits$() {
  /*<skip>*/
}
$h_s_concurrent_ExecutionContext$Implicits$.prototype = $c_s_concurrent_ExecutionContext$Implicits$.prototype;
$c_s_concurrent_ExecutionContext$Implicits$.prototype.global__s_concurrent_ExecutionContext = (function() {
  return ((!this.s_concurrent_ExecutionContext$Implicits$__f_bitmap$0) ? $p_s_concurrent_ExecutionContext$Implicits$__global$lzycompute__s_concurrent_ExecutionContext(this) : this.s_concurrent_ExecutionContext$Implicits$__f_global)
});
var $d_s_concurrent_ExecutionContext$Implicits$ = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  s_concurrent_ExecutionContext$Implicits$: 0
}, false, "scala.concurrent.ExecutionContext$Implicits$", {
  s_concurrent_ExecutionContext$Implicits$: 1,
  O: 1
});
$c_s_concurrent_ExecutionContext$Implicits$.prototype.$classData = $d_s_concurrent_ExecutionContext$Implicits$;
var $n_s_concurrent_ExecutionContext$Implicits$;
function $m_s_concurrent_ExecutionContext$Implicits$() {
  if ((!$n_s_concurrent_ExecutionContext$Implicits$)) {
    $n_s_concurrent_ExecutionContext$Implicits$ = new $c_s_concurrent_ExecutionContext$Implicits$()
  };
  return $n_s_concurrent_ExecutionContext$Implicits$
}
function $f_s_concurrent_Promise__complete__s_util_Try__s_concurrent_Promise($thiz, result) {
  if ($thiz.tryComplete__s_util_Try__Z(result)) {
    return $thiz
  } else {
    throw $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$ct_jl_IllegalStateException__T__(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_jl_IllegalStateException(), "Promise already completed.")
  }
}
function $f_s_concurrent_Promise__success__O__s_concurrent_Promise($thiz, value) {
  var result = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_s_util_Success(value);
  return $f_s_concurrent_Promise__complete__s_util_Try__s_concurrent_Promise($thiz, result)
}
function $f_s_concurrent_Promise__failure__jl_Throwable__s_concurrent_Promise($thiz, cause) {
  var result = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_s_util_Failure(cause);
  return $f_s_concurrent_Promise__complete__s_util_Try__s_concurrent_Promise($thiz, result)
}
function $p_s_concurrent_impl_Promise$__resolver__jl_Throwable__s_util_Try($thiz, throwable) {
  if ((throwable instanceof $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sr_NonLocalReturnControl)) {
    var x2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_sr_NonLocalReturnControl(throwable);
    return new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_s_util_Success($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(x2).value__O())
  } else if ($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$is_s_util_control_ControlThrowable(throwable)) {
    var x3 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_s_util_control_ControlThrowable(throwable);
    return new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_s_util_Failure(new $c_ju_concurrent_ExecutionException("Boxed ControlThrowable", $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_jl_Throwable(x3)))
  } else if (false) {
    var x4 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_jl_InterruptedException(throwable);
    return new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_s_util_Failure(new $c_ju_concurrent_ExecutionException("Boxed InterruptedException", x4))
  } else if ((throwable instanceof $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_jl_Error)) {
    var x5 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_jl_Error(throwable);
    return new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_s_util_Failure(new $c_ju_concurrent_ExecutionException("Boxed Error", x5))
  } else {
    return new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_s_util_Failure(throwable)
  }
}
/** @constructor */
function $c_s_concurrent_impl_Promise$() {
  /*<skip>*/
}
$c_s_concurrent_impl_Promise$.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_s_concurrent_impl_Promise$.prototype.constructor = $c_s_concurrent_impl_Promise$;
/** @constructor */
function $h_s_concurrent_impl_Promise$() {
  /*<skip>*/
}
$h_s_concurrent_impl_Promise$.prototype = $c_s_concurrent_impl_Promise$.prototype;
$c_s_concurrent_impl_Promise$.prototype.scala$concurrent$impl$Promise$$resolveTry__s_util_Try__s_util_Try = (function(source) {
  if ((source instanceof $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_s_util_Failure)) {
    var x2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_s_util_Failure(source);
    var t = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(x2).s_util_Failure__f_exception;
    return $p_s_concurrent_impl_Promise$__resolver__jl_Throwable__s_util_Try(this, t)
  } else {
    return source
  }
});
var $d_s_concurrent_impl_Promise$ = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  s_concurrent_impl_Promise$: 0
}, false, "scala.concurrent.impl.Promise$", {
  s_concurrent_impl_Promise$: 1,
  O: 1
});
$c_s_concurrent_impl_Promise$.prototype.$classData = $d_s_concurrent_impl_Promise$;
var $n_s_concurrent_impl_Promise$;
function $m_s_concurrent_impl_Promise$() {
  if ((!$n_s_concurrent_impl_Promise$)) {
    $n_s_concurrent_impl_Promise$ = new $c_s_concurrent_impl_Promise$()
  };
  return $n_s_concurrent_impl_Promise$
}
/** @constructor */
function $c_sjs_concurrent_JSExecutionContext$() {
  this.sjs_concurrent_JSExecutionContext$__f_queue = null;
  $n_sjs_concurrent_JSExecutionContext$ = this;
  this.sjs_concurrent_JSExecutionContext$__f_queue = $m_sjs_concurrent_QueueExecutionContext$().apply__s_concurrent_ExecutionContextExecutor()
}
$c_sjs_concurrent_JSExecutionContext$.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_sjs_concurrent_JSExecutionContext$.prototype.constructor = $c_sjs_concurrent_JSExecutionContext$;
/** @constructor */
function $h_sjs_concurrent_JSExecutionContext$() {
  /*<skip>*/
}
$h_sjs_concurrent_JSExecutionContext$.prototype = $c_sjs_concurrent_JSExecutionContext$.prototype;
var $d_sjs_concurrent_JSExecutionContext$ = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  sjs_concurrent_JSExecutionContext$: 0
}, false, "scala.scalajs.concurrent.JSExecutionContext$", {
  sjs_concurrent_JSExecutionContext$: 1,
  O: 1
});
$c_sjs_concurrent_JSExecutionContext$.prototype.$classData = $d_sjs_concurrent_JSExecutionContext$;
var $n_sjs_concurrent_JSExecutionContext$;
function $m_sjs_concurrent_JSExecutionContext$() {
  if ((!$n_sjs_concurrent_JSExecutionContext$)) {
    $n_sjs_concurrent_JSExecutionContext$ = new $c_sjs_concurrent_JSExecutionContext$()
  };
  return $n_sjs_concurrent_JSExecutionContext$
}
/** @constructor */
function $c_sjs_concurrent_QueueExecutionContext$() {
  /*<skip>*/
}
$c_sjs_concurrent_QueueExecutionContext$.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_sjs_concurrent_QueueExecutionContext$.prototype.constructor = $c_sjs_concurrent_QueueExecutionContext$;
/** @constructor */
function $h_sjs_concurrent_QueueExecutionContext$() {
  /*<skip>*/
}
$h_sjs_concurrent_QueueExecutionContext$.prototype = $c_sjs_concurrent_QueueExecutionContext$.prototype;
$c_sjs_concurrent_QueueExecutionContext$.prototype.apply__s_concurrent_ExecutionContextExecutor = (function() {
  return (($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T((typeof Promise)) === "undefined") ? new $c_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext() : new $c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext())
});
var $d_sjs_concurrent_QueueExecutionContext$ = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  sjs_concurrent_QueueExecutionContext$: 0
}, false, "scala.scalajs.concurrent.QueueExecutionContext$", {
  sjs_concurrent_QueueExecutionContext$: 1,
  O: 1
});
$c_sjs_concurrent_QueueExecutionContext$.prototype.$classData = $d_sjs_concurrent_QueueExecutionContext$;
var $n_sjs_concurrent_QueueExecutionContext$;
function $m_sjs_concurrent_QueueExecutionContext$() {
  if ((!$n_sjs_concurrent_QueueExecutionContext$)) {
    $n_sjs_concurrent_QueueExecutionContext$ = new $c_sjs_concurrent_QueueExecutionContext$()
  };
  return $n_sjs_concurrent_QueueExecutionContext$
}
/** @constructor */
function $c_sjs_js_Thenable$ThenableOps$() {
  /*<skip>*/
}
$c_sjs_js_Thenable$ThenableOps$.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_sjs_js_Thenable$ThenableOps$.prototype.constructor = $c_sjs_js_Thenable$ThenableOps$;
/** @constructor */
function $h_sjs_js_Thenable$ThenableOps$() {
  /*<skip>*/
}
$h_sjs_js_Thenable$ThenableOps$.prototype = $c_sjs_js_Thenable$ThenableOps$.prototype;
$c_sjs_js_Thenable$ThenableOps$.prototype.toFuture$extension__sjs_js_Thenable__s_concurrent_Future = (function(this$) {
  var p2 = new $c_s_concurrent_impl_Promise$DefaultPromise();
  this$.then(((arg1$2) => $m_sjs_js_Thenable$ThenableOps$().scala$scalajs$js$Thenable$ThenableOps$$$anonfun$toFuture$1__O__s_concurrent_Promise__sjs_js_$bar(arg1$2, p2)), $m_sjs_js_defined$().apply__O__sjs_js_$bar(((arg1$2$1) => $m_sjs_js_Thenable$ThenableOps$().scala$scalajs$js$Thenable$ThenableOps$$$anonfun$toFuture$2__O__s_concurrent_Promise__sjs_js_$bar(arg1$2$1, p2))));
  return p2
});
$c_sjs_js_Thenable$ThenableOps$.prototype.scala$scalajs$js$Thenable$ThenableOps$$$anonfun$toFuture$1__O__s_concurrent_Promise__sjs_js_$bar = (function(v, p2$1) {
  var this$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(p2$1);
  $f_s_concurrent_Promise__success__O__s_concurrent_Promise(this$1, v)
});
$c_sjs_js_Thenable$ThenableOps$.prototype.scala$scalajs$js$Thenable$ThenableOps$$$anonfun$toFuture$2__O__s_concurrent_Promise__sjs_js_$bar = (function(e, p2$1) {
  var this$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(p2$1);
  var cause = ((e instanceof $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_jl_Throwable) ? e : new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjs_js_JavaScriptException(e));
  $f_s_concurrent_Promise__failure__jl_Throwable__s_concurrent_Promise(this$1, cause)
});
var $d_sjs_js_Thenable$ThenableOps$ = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  sjs_js_Thenable$ThenableOps$: 0
}, false, "scala.scalajs.js.Thenable$ThenableOps$", {
  sjs_js_Thenable$ThenableOps$: 1,
  O: 1
});
$c_sjs_js_Thenable$ThenableOps$.prototype.$classData = $d_sjs_js_Thenable$ThenableOps$;
var $n_sjs_js_Thenable$ThenableOps$;
function $m_sjs_js_Thenable$ThenableOps$() {
  if ((!$n_sjs_js_Thenable$ThenableOps$)) {
    $n_sjs_js_Thenable$ThenableOps$ = new $c_sjs_js_Thenable$ThenableOps$()
  };
  return $n_sjs_js_Thenable$ThenableOps$
}
/** @constructor */
function $c_sjs_js_defined$() {
  /*<skip>*/
}
$c_sjs_js_defined$.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_sjs_js_defined$.prototype.constructor = $c_sjs_js_defined$;
/** @constructor */
function $h_sjs_js_defined$() {
  /*<skip>*/
}
$h_sjs_js_defined$.prototype = $c_sjs_js_defined$.prototype;
$c_sjs_js_defined$.prototype.apply__O__sjs_js_$bar = (function(a) {
  return a
});
var $d_sjs_js_defined$ = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  sjs_js_defined$: 0
}, false, "scala.scalajs.js.defined$", {
  sjs_js_defined$: 1,
  O: 1
});
$c_sjs_js_defined$.prototype.$classData = $d_sjs_js_defined$;
var $n_sjs_js_defined$;
function $m_sjs_js_defined$() {
  if ((!$n_sjs_js_defined$)) {
    $n_sjs_js_defined$ = new $c_sjs_js_defined$()
  };
  return $n_sjs_js_defined$
}
function $f_s_concurrent_Future__foreach__F1__s_concurrent_ExecutionContext__V($thiz, f, executor) {
  $thiz.onComplete__F1__s_concurrent_ExecutionContext__V(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((x$1$2) => {
    var x$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_s_util_Try(x$1$2);
    $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(x$1).foreach__F1__V(f)
  })), executor)
}
/** @constructor */
function $c_s_concurrent_impl_CallbackRunnable(executor, onComplete) {
  this.s_concurrent_impl_CallbackRunnable__f_executor = null;
  this.s_concurrent_impl_CallbackRunnable__f_onComplete = null;
  this.s_concurrent_impl_CallbackRunnable__f_value = null;
  this.s_concurrent_impl_CallbackRunnable__f_executor = executor;
  this.s_concurrent_impl_CallbackRunnable__f_onComplete = onComplete;
  this.s_concurrent_impl_CallbackRunnable__f_value = null
}
$c_s_concurrent_impl_CallbackRunnable.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_s_concurrent_impl_CallbackRunnable.prototype.constructor = $c_s_concurrent_impl_CallbackRunnable;
/** @constructor */
function $h_s_concurrent_impl_CallbackRunnable() {
  /*<skip>*/
}
$h_s_concurrent_impl_CallbackRunnable.prototype = $c_s_concurrent_impl_CallbackRunnable.prototype;
$c_s_concurrent_impl_CallbackRunnable.prototype.run__V = (function() {
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_Predef$().require__Z__V((this.s_concurrent_impl_CallbackRunnable__f_value !== null));
  try {
    $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.s_concurrent_impl_CallbackRunnable__f_onComplete).apply__O__O(this.s_concurrent_impl_CallbackRunnable__f_value)
  } catch (e) {
    var e$2 = ((e instanceof $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_jl_Throwable) ? e : new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjs_js_JavaScriptException(e));
    matchEnd8: {
      var o11 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_util_control_NonFatal$().unapply__jl_Throwable__s_Option(e$2);
      if ((!$j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(o11).isEmpty__Z())) {
        var e$3 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_jl_Throwable($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(o11).get__O());
        $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.s_concurrent_impl_CallbackRunnable__f_executor).reportFailure__jl_Throwable__V(e$3);
        break matchEnd8
      };
      throw ((e$2 instanceof $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjs_js_JavaScriptException) ? e$2.sjs_js_JavaScriptException__f_exception : $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(e$2))
    }
  }
});
$c_s_concurrent_impl_CallbackRunnable.prototype.executeWithValue__s_util_Try__V = (function(v) {
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_Predef$().require__Z__V((this.s_concurrent_impl_CallbackRunnable__f_value === null));
  this.s_concurrent_impl_CallbackRunnable__f_value = v;
  try {
    $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.s_concurrent_impl_CallbackRunnable__f_executor).execute__jl_Runnable__V(this)
  } catch (e) {
    var e$2 = ((e instanceof $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_jl_Throwable) ? e : new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjs_js_JavaScriptException(e));
    matchEnd8: {
      var o11 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_util_control_NonFatal$().unapply__jl_Throwable__s_Option(e$2);
      if ((!$j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(o11).isEmpty__Z())) {
        var t = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_jl_Throwable($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(o11).get__O());
        $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.s_concurrent_impl_CallbackRunnable__f_executor).reportFailure__jl_Throwable__V(t);
        break matchEnd8
      };
      throw ((e$2 instanceof $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjs_js_JavaScriptException) ? e$2.sjs_js_JavaScriptException__f_exception : $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(e$2))
    }
  }
});
function $as_s_concurrent_impl_CallbackRunnable(obj) {
  return (((obj instanceof $c_s_concurrent_impl_CallbackRunnable) || (obj === null)) ? obj : $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$throwClassCastException(obj, "scala.concurrent.impl.CallbackRunnable"))
}
function $isArrayOf_s_concurrent_impl_CallbackRunnable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_concurrent_impl_CallbackRunnable)))
}
function $asArrayOf_s_concurrent_impl_CallbackRunnable(obj, depth) {
  return (($isArrayOf_s_concurrent_impl_CallbackRunnable(obj, depth) || (obj === null)) ? obj : $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$throwArrayCastException(obj, "Lscala.concurrent.impl.CallbackRunnable;", depth))
}
var $d_s_concurrent_impl_CallbackRunnable = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  s_concurrent_impl_CallbackRunnable: 0
}, false, "scala.concurrent.impl.CallbackRunnable", {
  s_concurrent_impl_CallbackRunnable: 1,
  O: 1,
  jl_Runnable: 1,
  s_concurrent_OnCompleteRunnable: 1
});
$c_s_concurrent_impl_CallbackRunnable.prototype.$classData = $d_s_concurrent_impl_CallbackRunnable;
class $c_ju_concurrent_ExecutionException extends $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_jl_Exception {
  constructor(message, cause) {
    super();
    $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, message, cause, true, true)
  };
}
var $d_ju_concurrent_ExecutionException = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  ju_concurrent_ExecutionException: 0
}, false, "java.util.concurrent.ExecutionException", {
  ju_concurrent_ExecutionException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_concurrent_ExecutionException.prototype.$classData = $d_ju_concurrent_ExecutionException;
function $f_s_concurrent_impl_Promise__toString__T($thiz) {
  var x1 = $p_s_concurrent_impl_Promise$DefaultPromise__value0__s_Option($thiz);
  if ((x1 instanceof $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_s_Some)) {
    var x2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_s_Some(x1);
    var result = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_s_util_Try($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(x2).s_Some__f_value);
    return (("Future(" + result) + ")")
  } else {
    var x = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_None$();
    if ((x === x1)) {
      return "Future(<not completed>)"
    } else {
      throw new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_s_MatchError(x1)
    }
  }
}
/** @constructor */
function $c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext() {
  this.sjs_concurrent_QueueExecutionContext$PromisesExecutionContext__f_resolvedUnitPromise = null;
  this.sjs_concurrent_QueueExecutionContext$PromisesExecutionContext__f_resolvedUnitPromise = Promise.resolve((void 0))
}
$c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext.prototype.constructor = $c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext;
/** @constructor */
function $h_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext() {
  /*<skip>*/
}
$h_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext.prototype = $c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext.prototype;
$c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext.prototype.execute__jl_Runnable__V = (function(runnable) {
  this.sjs_concurrent_QueueExecutionContext$PromisesExecutionContext__f_resolvedUnitPromise.then(((arg1$2) => {
    var arg1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_jl_Void(arg1$2);
    return this.scala$scalajs$concurrent$QueueExecutionContext$PromisesExecutionContext$$$anonfun$execute$2__jl_Void__jl_Runnable__sjs_js_$bar(arg1, runnable)
  }))
});
$c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext.prototype.reportFailure__jl_Throwable__V = (function(t) {
  var this$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(t);
  this$1.printStackTrace__Ljava_io_PrintStream__V($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_jl_System$Streams$().jl_System$Streams$__f_err)
});
$c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext.prototype.scala$scalajs$concurrent$QueueExecutionContext$PromisesExecutionContext$$$anonfun$execute$2__jl_Void__jl_Runnable__sjs_js_$bar = (function(x$1, runnable$2) {
  try {
    $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(runnable$2).run__V()
  } catch (e) {
    var e$2 = ((e instanceof $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_jl_Throwable) ? e : new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjs_js_JavaScriptException(e));
    e$2.printStackTrace__Ljava_io_PrintStream__V($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_jl_System$Streams$().jl_System$Streams$__f_err)
  }
});
var $d_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  sjs_concurrent_QueueExecutionContext$PromisesExecutionContext: 0
}, false, "scala.scalajs.concurrent.QueueExecutionContext$PromisesExecutionContext", {
  sjs_concurrent_QueueExecutionContext$PromisesExecutionContext: 1,
  O: 1,
  s_concurrent_ExecutionContextExecutor: 1,
  s_concurrent_ExecutionContext: 1,
  ju_concurrent_Executor: 1
});
$c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext.prototype.$classData = $d_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext;
/** @constructor */
function $c_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext() {
  /*<skip>*/
}
$c_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext.prototype.constructor = $c_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext;
/** @constructor */
function $h_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext() {
  /*<skip>*/
}
$h_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext.prototype = $c_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext.prototype;
$c_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext.prototype.execute__jl_Runnable__V = (function(runnable) {
  setTimeout($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sjs_js_Any$().fromFunction0__F0__sjs_js_Function0(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction0((() => {
    try {
      $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(runnable).run__V()
    } catch (e) {
      var e$2 = ((e instanceof $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_jl_Throwable) ? e : new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjs_js_JavaScriptException(e));
      e$2.printStackTrace__Ljava_io_PrintStream__V($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_jl_System$Streams$().jl_System$Streams$__f_err)
    }
  }))), 0)
});
$c_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext.prototype.reportFailure__jl_Throwable__V = (function(t) {
  var this$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(t);
  this$1.printStackTrace__Ljava_io_PrintStream__V($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_jl_System$Streams$().jl_System$Streams$__f_err)
});
var $d_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext: 0
}, false, "scala.scalajs.concurrent.QueueExecutionContext$TimeoutsExecutionContext", {
  sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext: 1,
  O: 1,
  s_concurrent_ExecutionContextExecutor: 1,
  s_concurrent_ExecutionContext: 1,
  ju_concurrent_Executor: 1
});
$c_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext.prototype.$classData = $d_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext;
function $p_s_concurrent_impl_Promise$DefaultPromise__compressedRoot__s_concurrent_impl_Promise$DefaultPromise__s_concurrent_impl_Promise$DefaultPromise($thiz, linked) {
  while (true) {
    var target = $p_s_concurrent_impl_Promise$DefaultPromise__root__s_concurrent_impl_Promise$DefaultPromise($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(linked));
    if ((linked === target)) {
      return target
    } else if ($thiz.compareAndSet__O__O__Z(linked, target)) {
      return target
    } else {
      var x1 = $thiz.ju_concurrent_atomic_AtomicReference__f_value;
      if ((x1 instanceof $c_s_concurrent_impl_Promise$DefaultPromise)) {
        var x2 = $as_s_concurrent_impl_Promise$DefaultPromise(x1);
        linked = x2
      } else {
        return $thiz
      }
    }
  }
}
function $p_s_concurrent_impl_Promise$DefaultPromise__root__s_concurrent_impl_Promise$DefaultPromise($thiz) {
  var _$this = $thiz;
  while (true) {
    var x1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(_$this).ju_concurrent_atomic_AtomicReference__f_value;
    if ((x1 instanceof $c_s_concurrent_impl_Promise$DefaultPromise)) {
      var x2 = $as_s_concurrent_impl_Promise$DefaultPromise(x1);
      _$this = x2
    } else {
      return _$this
    }
  }
}
function $p_s_concurrent_impl_Promise$DefaultPromise__value0__s_Option($thiz) {
  var _$this = $thiz;
  while (true) {
    var x1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(_$this).ju_concurrent_atomic_AtomicReference__f_value;
    if ((x1 instanceof $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_s_util_Try)) {
      var x2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_s_util_Try(x1);
      return new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_s_Some(x2)
    } else if ((x1 instanceof $c_s_concurrent_impl_Promise$DefaultPromise)) {
      var x3 = $as_s_concurrent_impl_Promise$DefaultPromise(x1);
      _$this = $p_s_concurrent_impl_Promise$DefaultPromise__compressedRoot__s_concurrent_impl_Promise$DefaultPromise__s_concurrent_impl_Promise$DefaultPromise($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(_$this), x3)
    } else {
      return $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_None$()
    }
  }
}
function $p_s_concurrent_impl_Promise$DefaultPromise__tryCompleteAndGetListeners__s_util_Try__sci_List($thiz, v) {
  var _$this = $thiz;
  while (true) {
    var x1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(_$this).ju_concurrent_atomic_AtomicReference__f_value;
    if ((x1 instanceof $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sci_List)) {
      var x2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_sci_List(x1);
      if ($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(_$this).compareAndSet__O__O__Z(x2, v)) {
        return x2
      }
    } else if ((x1 instanceof $c_s_concurrent_impl_Promise$DefaultPromise)) {
      var x3 = $as_s_concurrent_impl_Promise$DefaultPromise(x1);
      _$this = $p_s_concurrent_impl_Promise$DefaultPromise__compressedRoot__s_concurrent_impl_Promise$DefaultPromise__s_concurrent_impl_Promise$DefaultPromise($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(_$this), x3)
    } else {
      return null
    }
  }
}
function $p_s_concurrent_impl_Promise$DefaultPromise__dispatchOrAddCallback__s_concurrent_impl_CallbackRunnable__V($thiz, runnable) {
  var _$this = $thiz;
  while (true) {
    var x1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(_$this).ju_concurrent_atomic_AtomicReference__f_value;
    if ((x1 instanceof $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_s_util_Try)) {
      var x2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_s_util_Try(x1);
      $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(runnable).executeWithValue__s_util_Try__V(x2)
    } else if ((x1 instanceof $c_s_concurrent_impl_Promise$DefaultPromise)) {
      var x3 = $as_s_concurrent_impl_Promise$DefaultPromise(x1);
      _$this = $p_s_concurrent_impl_Promise$DefaultPromise__compressedRoot__s_concurrent_impl_Promise$DefaultPromise__s_concurrent_impl_Promise$DefaultPromise($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(_$this), x3);
      continue
    } else if ((x1 instanceof $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sci_List)) {
      var x4 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_sci_List(x1);
      var $$x1 = _$this;
      var this$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(x4);
      if ((!$j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($$x1).compareAndSet__O__O__Z(x4, new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sci_$colon$colon(runnable, this$1)))) {
        continue
      }
    } else {
      throw new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_s_MatchError(x1)
    };
    break
  }
}
/** @constructor */
function $c_s_concurrent_impl_Promise$DefaultPromise() {
  this.ju_concurrent_atomic_AtomicReference__f_value = null;
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$ct_ju_concurrent_atomic_AtomicReference__O__(this, $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sci_Nil$())
}
$c_s_concurrent_impl_Promise$DefaultPromise.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_ju_concurrent_atomic_AtomicReference();
$c_s_concurrent_impl_Promise$DefaultPromise.prototype.constructor = $c_s_concurrent_impl_Promise$DefaultPromise;
/** @constructor */
function $h_s_concurrent_impl_Promise$DefaultPromise() {
  /*<skip>*/
}
$h_s_concurrent_impl_Promise$DefaultPromise.prototype = $c_s_concurrent_impl_Promise$DefaultPromise.prototype;
$c_s_concurrent_impl_Promise$DefaultPromise.prototype.toString__T = (function() {
  return $f_s_concurrent_impl_Promise__toString__T(this)
});
$c_s_concurrent_impl_Promise$DefaultPromise.prototype.tryComplete__s_util_Try__Z = (function(value) {
  var resolved = $m_s_concurrent_impl_Promise$().scala$concurrent$impl$Promise$$resolveTry__s_util_Try__s_util_Try(value);
  var x1 = $p_s_concurrent_impl_Promise$DefaultPromise__tryCompleteAndGetListeners__s_util_Try__sci_List(this, resolved);
  if ((x1 !== null)) {
    if ($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(x1).isEmpty__Z()) {
      return true
    } else {
      var this$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(x1);
      var these = this$1;
      while ((!$j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(these).isEmpty__Z())) {
        var arg1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(these).head__O();
        var r = $as_s_concurrent_impl_CallbackRunnable(arg1);
        $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(r).executeWithValue__s_util_Try__V(resolved);
        these = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_sci_List($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(these).tail__O())
      };
      return true
    }
  } else {
    return false
  }
});
$c_s_concurrent_impl_Promise$DefaultPromise.prototype.onComplete__F1__s_concurrent_ExecutionContext__V = (function(func, executor) {
  var this$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(executor);
  $p_s_concurrent_impl_Promise$DefaultPromise__dispatchOrAddCallback__s_concurrent_impl_CallbackRunnable__V(this, new $c_s_concurrent_impl_CallbackRunnable(this$1, func))
});
function $as_s_concurrent_impl_Promise$DefaultPromise(obj) {
  return (((obj instanceof $c_s_concurrent_impl_Promise$DefaultPromise) || (obj === null)) ? obj : $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$throwClassCastException(obj, "scala.concurrent.impl.Promise$DefaultPromise"))
}
function $isArrayOf_s_concurrent_impl_Promise$DefaultPromise(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_concurrent_impl_Promise$DefaultPromise)))
}
function $asArrayOf_s_concurrent_impl_Promise$DefaultPromise(obj, depth) {
  return (($isArrayOf_s_concurrent_impl_Promise$DefaultPromise(obj, depth) || (obj === null)) ? obj : $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$throwArrayCastException(obj, "Lscala.concurrent.impl.Promise$DefaultPromise;", depth))
}
var $d_s_concurrent_impl_Promise$DefaultPromise = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  s_concurrent_impl_Promise$DefaultPromise: 0
}, false, "scala.concurrent.impl.Promise$DefaultPromise", {
  s_concurrent_impl_Promise$DefaultPromise: 1,
  ju_concurrent_atomic_AtomicReference: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  s_concurrent_impl_Promise: 1,
  s_concurrent_Promise: 1,
  s_concurrent_Future: 1,
  s_concurrent_Awaitable: 1
});
$c_s_concurrent_impl_Promise$DefaultPromise.prototype.$classData = $d_s_concurrent_impl_Promise$DefaultPromise;
let $e_maintain = (function() {
  $m_Lquizleague_web_maintain_MaintainApp$().main__V()
});
export { $e_maintain as maintain };
//# sourceMappingURL=dummy-module.js.map
