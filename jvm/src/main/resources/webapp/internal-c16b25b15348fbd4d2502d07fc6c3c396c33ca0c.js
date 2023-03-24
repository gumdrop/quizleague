'use strict';
import * as $i_rxjs$002fRx from "rxjs/Rx";
import * as $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36 from "./internal-1f3d120137b98553c4403fc934ecd71776893d36.js";
import * as $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81 from "./internal-c5448624127961ad25196dc750e04b9e3ec61c81.js";
/** @constructor */
function $c_Lquizleague_web_maintain_App$() {
  /*<skip>*/
}
export { $c_Lquizleague_web_maintain_App$ as $c_Lquizleague_web_maintain_App$ };
$c_Lquizleague_web_maintain_App$.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_Lquizleague_web_maintain_App$.prototype.constructor = $c_Lquizleague_web_maintain_App$;
/** @constructor */
function $h_Lquizleague_web_maintain_App$() {
  /*<skip>*/
}
export { $h_Lquizleague_web_maintain_App$ as $h_Lquizleague_web_maintain_App$ };
$h_Lquizleague_web_maintain_App$.prototype = $c_Lquizleague_web_maintain_App$.prototype;
$c_Lquizleague_web_maintain_App$.prototype.apply__Lcom_felstar_scalajs_vue_Vue = (function() {
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_store_Firestore$().setAuthContext__V();
  Vue.use(VueQuillEditor);
  Vue.use(VueShowdown, $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lshowdown_package$().Lshowdown_package$__f_defaultOptions);
  Vue.filter("date", $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sjs_js_Any$().fromFunction2__F2__sjs_js_Function2(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction2(((date$2, format$2) => {
    var date = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(date$2);
    var format = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(format$2);
    return $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_Ljava_time_format_DateTimeFormatter$().ofPattern__T__Ljava_time_format_DateTimeFormatter(format)).format__Ljava_time_temporal_TemporalAccessor__T($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_Ljava_time_format_DateTimeFormatter$().ISO_LOCAL_DATE__Ljava_time_format_DateTimeFormatter()).parse__jl_CharSequence__Ljava_time_temporal_TemporalAccessor(date))
  }))));
  Vue.filter("combine", $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sjs_js_Any$().fromFunction1__F1__sjs_js_Function1(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((obs$2) => {
    $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lrxscalajs_Observable$();
    var array = [];
    $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(obs$2.length);
    var i = 0;
    var len = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(obs$2.length);
    while ((i < len)) {
      var index = i;
      var arg1 = obs$2[index];
      var elem = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$as_Lrxscalajs_Observable(arg1.obs);
      array.push(elem);
      i = ((1 + i) | 0)
    };
    $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lrxscalajs_Observable$();
    var array$1 = [$j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_sc_Seq($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sc_Seq$().empty__sc_GenTraversable())];
    var z = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$ct_Lrxscalajs_Observable__Lrxscalajs_facade_ObservableFacade__(new $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$c_Lrxscalajs_Observable(), $i_rxjs$002fRx.Observable.of(...($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sjs_js_WrappedArray$(), array$1)));
    var start = 0;
    var end = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length);
    var z$1 = z;
    var $$x1;
    while (true) {
      if ((start !== end)) {
        var temp$start = ((1 + start) | 0);
        var arg1$1 = z$1;
        var index$1 = start;
        var arg2 = array[index$1];
        var acc = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$as_Lrxscalajs_Observable(arg1$1);
        var cur = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$as_Lrxscalajs_Observable(arg2);
        var temp$z = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(acc).combineLatestWith__Lrxscalajs_Observable__F2__Lrxscalajs_Observable(cur, new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction2(((x$4$2, x$5$2) => {
          var x$4 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_sc_Seq(x$4$2);
          var this$13 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sc_Seq$();
          return $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_sc_Seq($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(x$4).$colon$plus__O__scg_CanBuildFrom__O(x$5$2, this$13.scg_GenTraversableFactory__f_ReusableCBFInstance))
        })));
        start = temp$start;
        z$1 = temp$z;
        continue
      };
      var $$x1 = z$1;
      break
    };
    return $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$as_Lrxscalajs_Observable($$x1)).map__F1__Lrxscalajs_Observable(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((x$2$2) => {
      var x$2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_sc_Seq(x$2$2);
      return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_sjs_js_JSConverters$JSRichGenTraversableOnce$().toJSArray$extension__sc_GenTraversableOnce__sjs_js_Array(x$2)
    })))
  }))));
  Vue.filter("wrap", $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sjs_js_Any$().fromFunction1__F1__sjs_js_Function1(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((obj$2) => {
    $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lrxscalajs_Observable$();
    var array$2 = [obj$2];
    return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$ct_Lrxscalajs_Observable__Lrxscalajs_facade_ObservableFacade__(new $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$c_Lrxscalajs_Observable(), $i_rxjs$002fRx.Observable.of(...($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sjs_js_WrappedArray$(), array$2)))
  }))));
  var $$x3 = Vue;
  var $$x2 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lcom_felstar_scalajs_vue_Router$();
  var this$22 = $m_Lquizleague_web_maintain_MaintainAppModule$();
  var _2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($$x2).apply__sjs_js_Array__T__T__T__T__sjs_js_Function__Lcom_felstar_scalajs_vue_Router($j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Module__apply__sjs_js_Array(this$22), "history", "/", null, null, null);
  var _2$1 = new Vuetify();
  return new $$x3({
    "el": "#maintain-app",
    "router": _2,
    "vuetify": _2$1
  })
});
var $d_Lquizleague_web_maintain_App$ = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  Lquizleague_web_maintain_App$: 0
}, false, "quizleague.web.maintain.App$", {
  Lquizleague_web_maintain_App$: 1,
  O: 1
});
export { $d_Lquizleague_web_maintain_App$ as $d_Lquizleague_web_maintain_App$ };
$c_Lquizleague_web_maintain_App$.prototype.$classData = $d_Lquizleague_web_maintain_App$;
var $n_Lquizleague_web_maintain_App$;
function $m_Lquizleague_web_maintain_App$() {
  if ((!$n_Lquizleague_web_maintain_App$)) {
    $n_Lquizleague_web_maintain_App$ = new $c_Lquizleague_web_maintain_App$()
  };
  return $n_Lquizleague_web_maintain_App$
}
export { $m_Lquizleague_web_maintain_App$ as $m_Lquizleague_web_maintain_App$ };
/** @constructor */
function $c_Lquizleague_web_maintain_component_TemplateElements$() {
  this.Lquizleague_web_maintain_component_TemplateElements$__f_chbxRetired = null;
  this.Lquizleague_web_maintain_component_TemplateElements$__f_formButtons = null;
  this.Lquizleague_web_maintain_component_TemplateElements$__f_addFAB = null;
  this.Lquizleague_web_maintain_component_TemplateElements$__f_backFAB = null;
  this.Lquizleague_web_maintain_component_TemplateElements$__f_chbxRetired = "<v-checkbox v-model=\"item.retired\" name=\"retired\" label=\"Retired\"></v-checkbox>";
  this.Lquizleague_web_maintain_component_TemplateElements$__f_formButtons = "\n            <v-btn\n              fixed\n              dark\n              fab\n              bottom\n              left\n              small\n              color=\"pink\"\n      :disabled=\"!valid\"\n              v-on:click = \"save\"\n            >\n              <v-icon>mdi-content-save</v-icon>\n            </v-btn>\n            <v-btn\n              fixed\n              dark\n              fab\n              bottom\n              right\n              small\n              color=\"pink\"\n              v-on:click = \"cancel\"\n            >\n              <v-icon>mdi-cancel</v-icon>\n            </v-btn>\n";
  this.Lquizleague_web_maintain_component_TemplateElements$__f_addFAB = "\n\n      <v-btn  fixed\n              dark\n              fab\n              bottom\n              left\n              small\n              color=\"pink\"\n              v-on:click=\"add\">\n          <v-icon>mdi-plus</v-icon>\n      </v-btn>\n";
  this.Lquizleague_web_maintain_component_TemplateElements$__f_backFAB = "      <v-btn  fixed\n              dark\n              fab\n              bottom\n              right\n              small\n              color=\"pink\"\n              v-on:click=\"$router.back()\">\n          <v-icon>mdi-arrow-left</v-icon>\n      </v-btn>\n"
}
export { $c_Lquizleague_web_maintain_component_TemplateElements$ as $c_Lquizleague_web_maintain_component_TemplateElements$ };
$c_Lquizleague_web_maintain_component_TemplateElements$.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_Lquizleague_web_maintain_component_TemplateElements$.prototype.constructor = $c_Lquizleague_web_maintain_component_TemplateElements$;
/** @constructor */
function $h_Lquizleague_web_maintain_component_TemplateElements$() {
  /*<skip>*/
}
export { $h_Lquizleague_web_maintain_component_TemplateElements$ as $h_Lquizleague_web_maintain_component_TemplateElements$ };
$h_Lquizleague_web_maintain_component_TemplateElements$.prototype = $c_Lquizleague_web_maintain_component_TemplateElements$.prototype;
$c_Lquizleague_web_maintain_component_TemplateElements$.prototype.valRequired__T__T = (function(name) {
  return (("\"[(v) => !!v || '" + name) + " is required']\"")
});
var $d_Lquizleague_web_maintain_component_TemplateElements$ = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  Lquizleague_web_maintain_component_TemplateElements$: 0
}, false, "quizleague.web.maintain.component.TemplateElements$", {
  Lquizleague_web_maintain_component_TemplateElements$: 1,
  O: 1
});
export { $d_Lquizleague_web_maintain_component_TemplateElements$ as $d_Lquizleague_web_maintain_component_TemplateElements$ };
$c_Lquizleague_web_maintain_component_TemplateElements$.prototype.$classData = $d_Lquizleague_web_maintain_component_TemplateElements$;
var $n_Lquizleague_web_maintain_component_TemplateElements$;
function $m_Lquizleague_web_maintain_component_TemplateElements$() {
  if ((!$n_Lquizleague_web_maintain_component_TemplateElements$)) {
    $n_Lquizleague_web_maintain_component_TemplateElements$ = new $c_Lquizleague_web_maintain_component_TemplateElements$()
  };
  return $n_Lquizleague_web_maintain_component_TemplateElements$
}
export { $m_Lquizleague_web_maintain_component_TemplateElements$ as $m_Lquizleague_web_maintain_component_TemplateElements$ };
/** @constructor */
function $c_Lquizleague_web_maintain_database_DatabaseService$() {
  /*<skip>*/
}
export { $c_Lquizleague_web_maintain_database_DatabaseService$ as $c_Lquizleague_web_maintain_database_DatabaseService$ };
$c_Lquizleague_web_maintain_database_DatabaseService$.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_Lquizleague_web_maintain_database_DatabaseService$.prototype.constructor = $c_Lquizleague_web_maintain_database_DatabaseService$;
/** @constructor */
function $h_Lquizleague_web_maintain_database_DatabaseService$() {
  /*<skip>*/
}
export { $h_Lquizleague_web_maintain_database_DatabaseService$ as $h_Lquizleague_web_maintain_database_DatabaseService$ };
$h_Lquizleague_web_maintain_database_DatabaseService$.prototype = $c_Lquizleague_web_maintain_database_DatabaseService$.prototype;
$c_Lquizleague_web_maintain_database_DatabaseService$.prototype.nestedupload__Lorg_scalajs_dom_File__Lrxscalajs_subjects_ReplaySubject = (function(file) {
  var reader = new FileReader();
  var ret = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lrxscalajs_subjects_ReplaySubject$().apply__Lrxscalajs_subjects_ReplaySubject();
  reader.onload = ((arg1$2) => $m_Lquizleague_web_maintain_database_DatabaseService$().quizleague$web$maintain$database$DatabaseService$$$anonfun$nestedupload$1__Lorg_scalajs_dom_ProgressEvent__Lorg_scalajs_dom_FileReader__Lrxscalajs_subjects_ReplaySubject__Lrxscalajs_subscription_Subscription(arg1$2, reader, ret));
  reader.readAsText(file);
  return ret
});
$c_Lquizleague_web_maintain_database_DatabaseService$.prototype.quizleague$web$maintain$database$DatabaseService$$$anonfun$nestedupload$1__Lorg_scalajs_dom_ProgressEvent__Lorg_scalajs_dom_FileReader__Lrxscalajs_subjects_ReplaySubject__Lrxscalajs_subscription_Subscription = (function(event, reader$1, ret$1) {
  var this$3 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_util_Logging$();
  var i = reader$1.result;
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_util_Logging__log__O__T__Z__O(this$3, i, "", true);
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_Predef$().s_Predef$__f_Map);
  var array = [new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2("Content-Type", "application/json"), new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2("Accept-Content", "application/json")];
  var this$11 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sci_Map$MapBuilderImpl();
  if (this$11.sci_Map$MapBuilderImpl__f_switchedToHashMapBuilder) {
    var this$12 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this$11.sci_Map$MapBuilderImpl__f_hashMapBuilder);
    var i$1 = 0;
    var len = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length);
    while ((i$1 < len)) {
      var index = i$1;
      var arg1 = array[index];
      this$12.$plus$eq__T2__sci_HashMap$HashMapBuilder($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T2(arg1));
      i$1 = ((1 + i$1) | 0)
    }
  } else {
    var i$2 = 0;
    var len$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length);
    while ((i$2 < len$1)) {
      var index$1 = i$2;
      var arg1$1 = array[index$1];
      this$11.$plus$eq__T2__sci_Map$MapBuilderImpl($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T2(arg1$1));
      i$2 = ((1 + i$2) | 0)
    }
  };
  var x$2 = this$11.result__sci_Map();
  var x$3 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$dp_toString__T($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(reader$1.result));
  var request = new $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$c_Lrxscalajs_dom_Request("/rest/entity/dbupload", x$3, 0, x$2, false, "", "POST");
  var qual$1 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lrxscalajs_Observable$().ajax__Lrxscalajs_dom_Request__Lrxscalajs_Observable(request);
  var x$8$2 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((x$8) => {
    var x = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$as_Lrxscalajs_dom_Response(x$8);
    $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(ret$1).next__O__V(x)
  }));
  var x$9 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((e$2) => {
    $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(ret$1).error__sjs_js_Any__V(e$2)
  }));
  var x$10 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(qual$1).subscribe$default$3__F0();
  return $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(qual$1).subscribe__F1__F1__F0__Lrxscalajs_subscription_Subscription(x$8$2, x$9, x$10)
});
var $d_Lquizleague_web_maintain_database_DatabaseService$ = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  Lquizleague_web_maintain_database_DatabaseService$: 0
}, false, "quizleague.web.maintain.database.DatabaseService$", {
  Lquizleague_web_maintain_database_DatabaseService$: 1,
  O: 1
});
export { $d_Lquizleague_web_maintain_database_DatabaseService$ as $d_Lquizleague_web_maintain_database_DatabaseService$ };
$c_Lquizleague_web_maintain_database_DatabaseService$.prototype.$classData = $d_Lquizleague_web_maintain_database_DatabaseService$;
var $n_Lquizleague_web_maintain_database_DatabaseService$;
function $m_Lquizleague_web_maintain_database_DatabaseService$() {
  if ((!$n_Lquizleague_web_maintain_database_DatabaseService$)) {
    $n_Lquizleague_web_maintain_database_DatabaseService$ = new $c_Lquizleague_web_maintain_database_DatabaseService$()
  };
  return $n_Lquizleague_web_maintain_database_DatabaseService$
}
export { $m_Lquizleague_web_maintain_database_DatabaseService$ as $m_Lquizleague_web_maintain_database_DatabaseService$ };
/** @constructor */
function $c_Lquizleague_web_maintain_util_TeamManager(teams) {
  this.Lquizleague_web_maintain_util_TeamManager__f_teams = null;
  this.Lquizleague_web_maintain_util_TeamManager__f_usedTeams = null;
  this.Lquizleague_web_maintain_util_TeamManager__f_teams = teams;
  this.Lquizleague_web_maintain_util_TeamManager__f_usedTeams = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_sci_Set($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_Predef$().s_Predef$__f_Set).apply__sc_Seq__sc_GenTraversable($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sci_Nil$()))
}
export { $c_Lquizleague_web_maintain_util_TeamManager as $c_Lquizleague_web_maintain_util_TeamManager };
$c_Lquizleague_web_maintain_util_TeamManager.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_Lquizleague_web_maintain_util_TeamManager.prototype.constructor = $c_Lquizleague_web_maintain_util_TeamManager;
/** @constructor */
function $h_Lquizleague_web_maintain_util_TeamManager() {
  /*<skip>*/
}
export { $h_Lquizleague_web_maintain_util_TeamManager as $h_Lquizleague_web_maintain_util_TeamManager };
$h_Lquizleague_web_maintain_util_TeamManager.prototype = $c_Lquizleague_web_maintain_util_TeamManager.prototype;
$c_Lquizleague_web_maintain_util_TeamManager.prototype.unusedTeams__Lquizleague_web_util_rx_RefObservable__sjs_js_Array = (function(other) {
  var array = this.Lquizleague_web_maintain_util_TeamManager__f_teams;
  var array$1 = [];
  var i = 0;
  var len = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length);
  while ((i < len)) {
    var index = i;
    var arg1 = array[index];
    if ((((!$j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.Lquizleague_web_maintain_util_TeamManager__f_usedTeams).contains__O__Z($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(arg1.value.id))) && ((!((!$j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sr_BoxesRunTime$().equals__O__O__Z(other, (void 0))) && (other !== null))) || ($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(arg1.value.id) !== $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(other.id)))) !== false)) {
      array$1.push(arg1)
    };
    i = ((1 + i) | 0)
  };
  return array$1
});
$c_Lquizleague_web_maintain_util_TeamManager.prototype.take__Lquizleague_web_util_rx_RefObservable__Lquizleague_web_util_rx_RefObservable = (function(team) {
  this.Lquizleague_web_maintain_util_TeamManager__f_usedTeams = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_sci_Set($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.Lquizleague_web_maintain_util_TeamManager__f_usedTeams).$plus__O__sc_Set($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(team.id)));
  return team
});
$c_Lquizleague_web_maintain_util_TeamManager.prototype.untake__Lquizleague_web_util_rx_RefObservable__V = (function(team) {
  this.Lquizleague_web_maintain_util_TeamManager__f_usedTeams = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_sci_Set($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.Lquizleague_web_maintain_util_TeamManager__f_usedTeams).$minus__O__sc_Set($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(team.id)))
});
function $as_Lquizleague_web_maintain_util_TeamManager(obj) {
  return (((obj instanceof $c_Lquizleague_web_maintain_util_TeamManager) || (obj === null)) ? obj : $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$throwClassCastException(obj, "quizleague.web.maintain.util.TeamManager"))
}
export { $as_Lquizleague_web_maintain_util_TeamManager as $as_Lquizleague_web_maintain_util_TeamManager };
function $isArrayOf_Lquizleague_web_maintain_util_TeamManager(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lquizleague_web_maintain_util_TeamManager)))
}
export { $isArrayOf_Lquizleague_web_maintain_util_TeamManager as $isArrayOf_Lquizleague_web_maintain_util_TeamManager };
function $asArrayOf_Lquizleague_web_maintain_util_TeamManager(obj, depth) {
  return (($isArrayOf_Lquizleague_web_maintain_util_TeamManager(obj, depth) || (obj === null)) ? obj : $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$throwArrayCastException(obj, "Lquizleague.web.maintain.util.TeamManager;", depth))
}
export { $asArrayOf_Lquizleague_web_maintain_util_TeamManager as $asArrayOf_Lquizleague_web_maintain_util_TeamManager };
var $d_Lquizleague_web_maintain_util_TeamManager = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  Lquizleague_web_maintain_util_TeamManager: 0
}, false, "quizleague.web.maintain.util.TeamManager", {
  Lquizleague_web_maintain_util_TeamManager: 1,
  O: 1
});
export { $d_Lquizleague_web_maintain_util_TeamManager as $d_Lquizleague_web_maintain_util_TeamManager };
$c_Lquizleague_web_maintain_util_TeamManager.prototype.$classData = $d_Lquizleague_web_maintain_util_TeamManager;
/** @constructor */
function $c_Lquizleague_web_service_competition_CompetitionPutService$PutHelpers$(outer) {
  this.Lquizleague_web_service_competition_CompetitionPutService$PutHelpers$__f_$outer = null;
  if ((outer === null)) {
    $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(null)
  } else {
    this.Lquizleague_web_service_competition_CompetitionPutService$PutHelpers$__f_$outer = outer
  }
}
export { $c_Lquizleague_web_service_competition_CompetitionPutService$PutHelpers$ as $c_Lquizleague_web_service_competition_CompetitionPutService$PutHelpers$ };
$c_Lquizleague_web_service_competition_CompetitionPutService$PutHelpers$.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_Lquizleague_web_service_competition_CompetitionPutService$PutHelpers$.prototype.constructor = $c_Lquizleague_web_service_competition_CompetitionPutService$PutHelpers$;
/** @constructor */
function $h_Lquizleague_web_service_competition_CompetitionPutService$PutHelpers$() {
  /*<skip>*/
}
export { $h_Lquizleague_web_service_competition_CompetitionPutService$PutHelpers$ as $h_Lquizleague_web_service_competition_CompetitionPutService$PutHelpers$ };
$h_Lquizleague_web_service_competition_CompetitionPutService$PutHelpers$.prototype = $c_Lquizleague_web_service_competition_CompetitionPutService$PutHelpers$.prototype;
$c_Lquizleague_web_service_competition_CompetitionPutService$PutHelpers$.prototype.makeLeague__Lquizleague_domain_LeagueCompetition = (function() {
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.Lquizleague_web_service_competition_CompetitionPutService$PutHelpers$__f_$outer);
  var $$x3 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_util_UUID$().randomUUID__Lquizleague_web_util_UUID()).toString__T();
  var $$x2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_Ljava_time_LocalTime$().of__I__I__Ljava_time_LocalTime(20, 30);
  var this$2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_Ljava_time_Duration$();
  var $$x1 = this$2.java$time$Duration$$create__J__I__Ljava_time_Duration(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_RTLong(5400, 0), 0);
  var this$3 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.Lquizleague_web_service_competition_CompetitionPutService$PutHelpers$__f_$outer);
  var this$6 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this$3.Lquizleague_web_maintain_competition_CompetitionService$__f_textService);
  var this$4 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.Lquizleague_web_service_competition_CompetitionPutService$PutHelpers$__f_$outer);
  var this$5 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this$4.Lquizleague_web_maintain_competition_CompetitionService$__f_textService);
  var item = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_DirtyListService__instance__Lquizleague_web_model_Model(this$5);
  return new $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$c_Lquizleague_domain_LeagueCompetition($$x3, "League", $$x2, $$x1, $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_PutService__getRef__Lquizleague_web_model_Model__Lquizleague_domain_Ref(this$6, item), "league-comp", $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_None$())
});
$c_Lquizleague_web_service_competition_CompetitionPutService$PutHelpers$.prototype.makeCup__Lquizleague_domain_CupCompetition = (function() {
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.Lquizleague_web_service_competition_CompetitionPutService$PutHelpers$__f_$outer);
  var $$x3 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_util_UUID$().randomUUID__Lquizleague_web_util_UUID()).toString__T();
  var $$x2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_Ljava_time_LocalTime$().of__I__I__Ljava_time_LocalTime(20, 30);
  var this$2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_Ljava_time_Duration$();
  var $$x1 = this$2.java$time$Duration$$create__J__I__Ljava_time_Duration(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_RTLong(5400, 0), 0);
  var this$3 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.Lquizleague_web_service_competition_CompetitionPutService$PutHelpers$__f_$outer);
  var this$6 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this$3.Lquizleague_web_maintain_competition_CompetitionService$__f_textService);
  var this$4 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.Lquizleague_web_service_competition_CompetitionPutService$PutHelpers$__f_$outer);
  var this$5 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this$4.Lquizleague_web_maintain_competition_CompetitionService$__f_textService);
  var item = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_DirtyListService__instance__Lquizleague_web_model_Model(this$5);
  return new $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$c_Lquizleague_domain_CupCompetition($$x3, "Cup", $$x2, $$x1, $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_PutService__getRef__Lquizleague_web_model_Model__Lquizleague_domain_Ref(this$6, item), "cup-comp", $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_None$())
});
$c_Lquizleague_web_service_competition_CompetitionPutService$PutHelpers$.prototype.makeSubsidiary__Lquizleague_domain_SubsidiaryLeagueCompetition = (function() {
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.Lquizleague_web_service_competition_CompetitionPutService$PutHelpers$__f_$outer);
  var $$x1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_util_UUID$().randomUUID__Lquizleague_web_util_UUID()).toString__T();
  var this$2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.Lquizleague_web_service_competition_CompetitionPutService$PutHelpers$__f_$outer);
  var this$5 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this$2.Lquizleague_web_maintain_competition_CompetitionService$__f_textService);
  var this$3 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.Lquizleague_web_service_competition_CompetitionPutService$PutHelpers$__f_$outer);
  var this$4 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this$3.Lquizleague_web_maintain_competition_CompetitionService$__f_textService);
  var item = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_DirtyListService__instance__Lquizleague_web_model_Model(this$4);
  return new $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$c_Lquizleague_domain_SubsidiaryLeagueCompetition($$x1, "Subsidiary", $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_PutService__getRef__Lquizleague_web_model_Model__Lquizleague_domain_Ref(this$5, item), "beer-comp", $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_None$())
});
$c_Lquizleague_web_service_competition_CompetitionPutService$PutHelpers$.prototype.makeSingleton__Lquizleague_domain_SingletonCompetition = (function() {
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.Lquizleague_web_service_competition_CompetitionPutService$PutHelpers$__f_$outer);
  var $$x4 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_util_UUID$().randomUUID__Lquizleague_web_util_UUID()).toString__T();
  var $$x3 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_Option$();
  var $$x2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_None$();
  var this$2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_Ljava_time_LocalDate$();
  var $$x1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($$x3).apply__O__s_Option(new $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$c_Lquizleague_domain_Event($$x2, this$2.now__Ljava_time_Clock__Ljava_time_LocalDate(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_Ljava_time_Clock$SystemClock($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_Ljava_time_ZoneId$().systemDefault__Ljava_time_ZoneId())), $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_Ljava_time_LocalTime$().of__I__I__Ljava_time_LocalTime(20, 30), $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_Ljava_time_Duration$().ofMinutes__J__Ljava_time_Duration(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_RTLong(90, 0))));
  var this$4 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.Lquizleague_web_service_competition_CompetitionPutService$PutHelpers$__f_$outer);
  var this$7 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this$4.Lquizleague_web_maintain_competition_CompetitionService$__f_textService);
  var this$5 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.Lquizleague_web_service_competition_CompetitionPutService$PutHelpers$__f_$outer);
  var this$6 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this$5.Lquizleague_web_maintain_competition_CompetitionService$__f_textService);
  var item = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_DirtyListService__instance__Lquizleague_web_model_Model(this$6);
  return new $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$c_Lquizleague_domain_SingletonCompetition($$x4, "Singleton", $$x1, "", $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_PutService__getRef__Lquizleague_web_model_Model__Lquizleague_domain_Ref(this$7, item), $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_None$())
});
$c_Lquizleague_web_service_competition_CompetitionPutService$PutHelpers$.prototype.doMapIn__Lquizleague_web_model_Competition__Lquizleague_domain_Competition = (function(comp) {
  if ($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uZ((comp instanceof $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$a_Lquizleague_web_model_LeagueCompetition()))) {
    var $$x4 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(comp.id);
    var $$x3 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(comp.name);
    var date = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(comp.startTime);
    var this$2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_Ljava_time_LocalTime$();
    var $$x2 = this$2.parse__jl_CharSequence__Ljava_time_format_DateTimeFormatter__Ljava_time_LocalTime(date, $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_Ljava_time_format_DateTimeFormatter$().ISO_LOCAL_TIME__Ljava_time_format_DateTimeFormatter());
    var $$x1 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_util_DateTimeConverters$().intToDuration__F__Ljava_time_Duration($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uF(comp.duration));
    var this$3 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.Lquizleague_web_service_competition_CompetitionPutService$PutHelpers$__f_$outer);
    var this$4 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this$3.Lquizleague_web_maintain_competition_CompetitionService$__f_textService);
    var ro = comp.text;
    return new $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$c_Lquizleague_domain_LeagueCompetition($$x4, $$x3, $$x2, $$x1, $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__ref__Lquizleague_web_util_rx_RefObservable__Lquizleague_domain_Ref(this$4, ro), $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(comp.textName), $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_Option$().apply__O__s_Option($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(comp.icon)))
  } else if ($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uZ((comp instanceof $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$a_Lquizleague_web_model_CupCompetition()))) {
    var $$x8 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(comp.id);
    var $$x7 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(comp.name);
    var date$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(comp.startTime);
    var this$6 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_Ljava_time_LocalTime$();
    var $$x6 = this$6.parse__jl_CharSequence__Ljava_time_format_DateTimeFormatter__Ljava_time_LocalTime(date$1, $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_Ljava_time_format_DateTimeFormatter$().ISO_LOCAL_TIME__Ljava_time_format_DateTimeFormatter());
    var $$x5 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_util_DateTimeConverters$().intToDuration__F__Ljava_time_Duration($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uF(comp.duration));
    var this$7 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.Lquizleague_web_service_competition_CompetitionPutService$PutHelpers$__f_$outer);
    var this$8 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this$7.Lquizleague_web_maintain_competition_CompetitionService$__f_textService);
    var ro$1 = comp.text;
    return new $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$c_Lquizleague_domain_CupCompetition($$x8, $$x7, $$x6, $$x5, $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__ref__Lquizleague_web_util_rx_RefObservable__Lquizleague_domain_Ref(this$8, ro$1), $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(comp.textName), $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_Option$().apply__O__s_Option($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(comp.icon)))
  } else if ($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uZ((comp instanceof $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$a_Lquizleague_web_model_SubsidiaryLeagueCompetition()))) {
    var $$x10 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(comp.id);
    var $$x9 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(comp.name);
    var this$9 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.Lquizleague_web_service_competition_CompetitionPutService$PutHelpers$__f_$outer);
    var this$10 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this$9.Lquizleague_web_maintain_competition_CompetitionService$__f_textService);
    var ro$2 = comp.text;
    return new $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$c_Lquizleague_domain_SubsidiaryLeagueCompetition($$x10, $$x9, $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__ref__Lquizleague_web_util_rx_RefObservable__Lquizleague_domain_Ref(this$10, ro$2), $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(comp.textName), $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_Option$().apply__O__s_Option($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(comp.icon)))
  } else if ($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uZ((comp instanceof $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$a_Lquizleague_web_model_SingletonCompetition()))) {
    var $$x16 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(comp.id);
    var $$x15 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(comp.name);
    if ((comp.event === null)) {
      var $$x12 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_None$()
    } else {
      var this$11 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.Lquizleague_web_service_competition_CompetitionPutService$PutHelpers$__f_$outer);
      var this$12 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this$11.Lquizleague_web_maintain_competition_CompetitionService$__f_venueService);
      var ro$3 = comp.event.venue;
      var $$x14 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__refOption__Lquizleague_web_util_rx_RefObservable__s_Option(this$12, ro$3);
      var date$2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(comp.event.date);
      var this$14 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_Ljava_time_LocalDate$();
      var $$x13 = this$14.parse__jl_CharSequence__Ljava_time_format_DateTimeFormatter__Ljava_time_LocalDate(date$2, $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_Ljava_time_format_DateTimeFormatter$().ISO_LOCAL_DATE__Ljava_time_format_DateTimeFormatter());
      var date$3 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(comp.event.time);
      var this$16 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_Ljava_time_LocalTime$();
      var $$x12 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_s_Some(new $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$c_Lquizleague_domain_Event($$x14, $$x13, this$16.parse__jl_CharSequence__Ljava_time_format_DateTimeFormatter__Ljava_time_LocalTime(date$3, $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_Ljava_time_format_DateTimeFormatter$().ISO_LOCAL_TIME__Ljava_time_format_DateTimeFormatter()), $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_util_DateTimeConverters$().intToDuration__F__Ljava_time_Duration($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uF(comp.event.duration))))
    };
    var $$x11 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(comp.textName);
    var this$17 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.Lquizleague_web_service_competition_CompetitionPutService$PutHelpers$__f_$outer);
    var this$18 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this$17.Lquizleague_web_maintain_competition_CompetitionService$__f_textService);
    var ro$4 = comp.text;
    return new $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$c_Lquizleague_domain_SingletonCompetition($$x16, $$x15, $$x12, $$x11, $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__ref__Lquizleague_web_util_rx_RefObservable__Lquizleague_domain_Ref(this$18, ro$4), $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_Option$().apply__O__s_Option($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(comp.icon)))
  } else {
    throw new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_s_MatchError(comp)
  }
});
var $d_Lquizleague_web_service_competition_CompetitionPutService$PutHelpers$ = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  Lquizleague_web_service_competition_CompetitionPutService$PutHelpers$: 0
}, false, "quizleague.web.service.competition.CompetitionPutService$PutHelpers$", {
  Lquizleague_web_service_competition_CompetitionPutService$PutHelpers$: 1,
  O: 1
});
export { $d_Lquizleague_web_service_competition_CompetitionPutService$PutHelpers$ as $d_Lquizleague_web_service_competition_CompetitionPutService$PutHelpers$ };
$c_Lquizleague_web_service_competition_CompetitionPutService$PutHelpers$.prototype.$classData = $d_Lquizleague_web_service_competition_CompetitionPutService$PutHelpers$;
function $s_Lquizleague_web_maintain_MaintainApp$$anon$1__dynamicImport$__O() {
  return $m_Lquizleague_web_maintain_App$().apply__Lcom_felstar_scalajs_vue_Vue()
}
export { $s_Lquizleague_web_maintain_MaintainApp$$anon$1__dynamicImport$__O as $s_Lquizleague_web_maintain_MaintainApp$$anon$1__dynamicImport$__O };
/** @constructor */
function $c_Lquizleague_web_maintain_MaintainAppComponent$() {
  this.Lquizleague_web_maintain_MaintainAppComponent$__f_name = null;
  this.Lquizleague_web_maintain_MaintainAppComponent$__f_template = null;
  this.Lquizleague_web_maintain_MaintainAppComponent$__f_quizleague$web$core$Component$$addedSubs = null;
  this.Lquizleague_web_maintain_MaintainAppComponent$__f_quizleague$web$core$Component$$addedSubParams = null;
  this.Lquizleague_web_maintain_MaintainAppComponent$__f_quizleague$web$core$Component$$addedProps = null;
  this.Lquizleague_web_maintain_MaintainAppComponent$__f_quizleague$web$core$Component$$addedMethods = null;
  this.Lquizleague_web_maintain_MaintainAppComponent$__f_quizleague$web$core$Component$$addedComputed = null;
  this.Lquizleague_web_maintain_MaintainAppComponent$__f_quizleague$web$core$Component$$addedDataFn = null;
  this.Lquizleague_web_maintain_MaintainAppComponent$__f_quizleague$web$core$Component$$addedData = null;
  this.Lquizleague_web_maintain_MaintainAppComponent$__f_quizleague$web$core$Component$$addedComponents = null;
  this.Lquizleague_web_maintain_MaintainAppComponent$__f_quizleague$web$core$Component$$addedWatch = null;
  this.Lquizleague_web_maintain_MaintainAppComponent$__f_empty = null;
  this.Lquizleague_web_maintain_MaintainAppComponent$__f_quizleague$web$core$Component$$commonMethods = null;
  $n_Lquizleague_web_maintain_MaintainAppComponent$ = this;
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__$init$__V(this);
  this.Lquizleague_web_maintain_MaintainAppComponent$__f_name = "ql-maintain-app";
  this.Lquizleague_web_maintain_MaintainAppComponent$__f_template = "\n  <v-app\n    toolbar \n    style=\"font-size:16px;\"\n  >\n  <v-navigation-drawer\n      clipped\n      fixed\n      app\n      v-model=\"drawer\">\n    <ql-maintain-menu></ql-maintain-menu>\n  </v-navigation-drawer>\n    <v-app-bar\n      color=\"blue darken-3\"\n      dark\n\t    fixed \n      app \n      clipped-left\n      scroll-off-screen\n      >\n      <v-app-bar-nav-icon @click.stop=\"drawer = !drawer\"  v-show=\"$vuetify.breakpoint.mdAndDown\"></v-app-bar-nav-icon>\n      <v-toolbar-title class=\"white--text\" >\n        \n        <span>Quizleague Data Maintenance</span>\n      </v-toolbar-title>\n\n    </v-app-bar>\n    <v-content>\n\t\t  <v-container fill-height fluid class=\"px-0 py-0\">\n        <v-layout justify-left align-top column>\n         <router-view name=\"title\"  style=\"z-index:2\"></router-view>\n         <p></p>\n         <router-view ></router-view>\n        </v-layout>\n        <notifications></notifications>\n      </v-container>\n    </v-content>\n  </v-app>";
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__data__T__O__V(this, "drawer", null);
  var array = [$m_Lquizleague_web_maintain_MaintainMenuComponent$(), $m_Lquizleague_web_maintain_MaintainNotificationsComponent$()];
  var comps = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$ct_sjs_js_WrappedArray__sjs_js_Array__(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjs_js_WrappedArray(), array);
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__components__sc_Seq__V(this, comps)
}
export { $c_Lquizleague_web_maintain_MaintainAppComponent$ as $c_Lquizleague_web_maintain_MaintainAppComponent$ };
$c_Lquizleague_web_maintain_MaintainAppComponent$.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_Lquizleague_web_maintain_MaintainAppComponent$.prototype.constructor = $c_Lquizleague_web_maintain_MaintainAppComponent$;
/** @constructor */
function $h_Lquizleague_web_maintain_MaintainAppComponent$() {
  /*<skip>*/
}
export { $h_Lquizleague_web_maintain_MaintainAppComponent$ as $h_Lquizleague_web_maintain_MaintainAppComponent$ };
$h_Lquizleague_web_maintain_MaintainAppComponent$.prototype = $c_Lquizleague_web_maintain_MaintainAppComponent$.prototype;
$c_Lquizleague_web_maintain_MaintainAppComponent$.prototype.mounted__sjs_js_Function = (function() {
  return null
});
$c_Lquizleague_web_maintain_MaintainAppComponent$.prototype.beforeDestroy__sjs_js_Function = (function() {
  return null
});
$c_Lquizleague_web_maintain_MaintainAppComponent$.prototype.quizleague$web$core$Component$$addedSubs__sci_Map = (function() {
  return this.Lquizleague_web_maintain_MaintainAppComponent$__f_quizleague$web$core$Component$$addedSubs
});
$c_Lquizleague_web_maintain_MaintainAppComponent$.prototype.quizleague$web$core$Component$$addedSubs_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_MaintainAppComponent$__f_quizleague$web$core$Component$$addedSubs = x$1
});
$c_Lquizleague_web_maintain_MaintainAppComponent$.prototype.quizleague$web$core$Component$$addedSubParams__sci_List = (function() {
  return this.Lquizleague_web_maintain_MaintainAppComponent$__f_quizleague$web$core$Component$$addedSubParams
});
$c_Lquizleague_web_maintain_MaintainAppComponent$.prototype.quizleague$web$core$Component$$addedSubParams_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_MaintainAppComponent$__f_quizleague$web$core$Component$$addedSubParams = x$1
});
$c_Lquizleague_web_maintain_MaintainAppComponent$.prototype.quizleague$web$core$Component$$addedProps__sci_List = (function() {
  return this.Lquizleague_web_maintain_MaintainAppComponent$__f_quizleague$web$core$Component$$addedProps
});
$c_Lquizleague_web_maintain_MaintainAppComponent$.prototype.quizleague$web$core$Component$$addedProps_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_MaintainAppComponent$__f_quizleague$web$core$Component$$addedProps = x$1
});
$c_Lquizleague_web_maintain_MaintainAppComponent$.prototype.quizleague$web$core$Component$$addedMethods__sci_Map = (function() {
  return this.Lquizleague_web_maintain_MaintainAppComponent$__f_quizleague$web$core$Component$$addedMethods
});
$c_Lquizleague_web_maintain_MaintainAppComponent$.prototype.quizleague$web$core$Component$$addedMethods_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_MaintainAppComponent$__f_quizleague$web$core$Component$$addedMethods = x$1
});
$c_Lquizleague_web_maintain_MaintainAppComponent$.prototype.quizleague$web$core$Component$$addedComputed__sci_Map = (function() {
  return this.Lquizleague_web_maintain_MaintainAppComponent$__f_quizleague$web$core$Component$$addedComputed
});
$c_Lquizleague_web_maintain_MaintainAppComponent$.prototype.quizleague$web$core$Component$$addedComputed_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_MaintainAppComponent$__f_quizleague$web$core$Component$$addedComputed = x$1
});
$c_Lquizleague_web_maintain_MaintainAppComponent$.prototype.quizleague$web$core$Component$$addedDataFn__sci_Map = (function() {
  return this.Lquizleague_web_maintain_MaintainAppComponent$__f_quizleague$web$core$Component$$addedDataFn
});
$c_Lquizleague_web_maintain_MaintainAppComponent$.prototype.quizleague$web$core$Component$$addedDataFn_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_MaintainAppComponent$__f_quizleague$web$core$Component$$addedDataFn = x$1
});
$c_Lquizleague_web_maintain_MaintainAppComponent$.prototype.quizleague$web$core$Component$$addedData__sci_Map = (function() {
  return this.Lquizleague_web_maintain_MaintainAppComponent$__f_quizleague$web$core$Component$$addedData
});
$c_Lquizleague_web_maintain_MaintainAppComponent$.prototype.quizleague$web$core$Component$$addedData_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_MaintainAppComponent$__f_quizleague$web$core$Component$$addedData = x$1
});
$c_Lquizleague_web_maintain_MaintainAppComponent$.prototype.quizleague$web$core$Component$$addedComponents__sci_List = (function() {
  return this.Lquizleague_web_maintain_MaintainAppComponent$__f_quizleague$web$core$Component$$addedComponents
});
$c_Lquizleague_web_maintain_MaintainAppComponent$.prototype.quizleague$web$core$Component$$addedComponents_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_MaintainAppComponent$__f_quizleague$web$core$Component$$addedComponents = x$1
});
$c_Lquizleague_web_maintain_MaintainAppComponent$.prototype.quizleague$web$core$Component$$addedWatch__sci_Map = (function() {
  return this.Lquizleague_web_maintain_MaintainAppComponent$__f_quizleague$web$core$Component$$addedWatch
});
$c_Lquizleague_web_maintain_MaintainAppComponent$.prototype.quizleague$web$core$Component$$addedWatch_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_MaintainAppComponent$__f_quizleague$web$core$Component$$addedWatch = x$1
});
$c_Lquizleague_web_maintain_MaintainAppComponent$.prototype.empty__sjs_js_Object = (function() {
  return this.Lquizleague_web_maintain_MaintainAppComponent$__f_empty
});
$c_Lquizleague_web_maintain_MaintainAppComponent$.prototype.quizleague$web$core$Component$$commonMethods__sci_Map = (function() {
  return this.Lquizleague_web_maintain_MaintainAppComponent$__f_quizleague$web$core$Component$$commonMethods
});
$c_Lquizleague_web_maintain_MaintainAppComponent$.prototype.quizleague$web$core$Component$_setter_$empty_$eq__sjs_js_Object__V = (function(x$1) {
  this.Lquizleague_web_maintain_MaintainAppComponent$__f_empty = x$1
});
$c_Lquizleague_web_maintain_MaintainAppComponent$.prototype.quizleague$web$core$Component$_setter_$quizleague$web$core$Component$$commonMethods_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_MaintainAppComponent$__f_quizleague$web$core$Component$$commonMethods = x$1
});
$c_Lquizleague_web_maintain_MaintainAppComponent$.prototype.name__T = (function() {
  return this.Lquizleague_web_maintain_MaintainAppComponent$__f_name
});
$c_Lquizleague_web_maintain_MaintainAppComponent$.prototype.template__T = (function() {
  return this.Lquizleague_web_maintain_MaintainAppComponent$__f_template
});
var $d_Lquizleague_web_maintain_MaintainAppComponent$ = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  Lquizleague_web_maintain_MaintainAppComponent$: 0
}, false, "quizleague.web.maintain.MaintainAppComponent$", {
  Lquizleague_web_maintain_MaintainAppComponent$: 1,
  O: 1,
  Lquizleague_web_core_Component: 1
});
export { $d_Lquizleague_web_maintain_MaintainAppComponent$ as $d_Lquizleague_web_maintain_MaintainAppComponent$ };
$c_Lquizleague_web_maintain_MaintainAppComponent$.prototype.$classData = $d_Lquizleague_web_maintain_MaintainAppComponent$;
var $n_Lquizleague_web_maintain_MaintainAppComponent$;
function $m_Lquizleague_web_maintain_MaintainAppComponent$() {
  if ((!$n_Lquizleague_web_maintain_MaintainAppComponent$)) {
    $n_Lquizleague_web_maintain_MaintainAppComponent$ = new $c_Lquizleague_web_maintain_MaintainAppComponent$()
  };
  return $n_Lquizleague_web_maintain_MaintainAppComponent$
}
export { $m_Lquizleague_web_maintain_MaintainAppComponent$ as $m_Lquizleague_web_maintain_MaintainAppComponent$ };
/** @constructor */
function $c_Lquizleague_web_maintain_MaintainAppModule$() {
  this.Lquizleague_web_maintain_MaintainAppModule$__f_modules = null;
  this.Lquizleague_web_maintain_MaintainAppModule$__f_components = null;
  $n_Lquizleague_web_maintain_MaintainAppModule$ = this;
  var array = [$j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_site_common_CommonModule$(), $m_Lquizleague_web_maintain_MaintainModule$()];
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sjs_js_WrappedArray$();
  this.Lquizleague_web_maintain_MaintainAppModule$__f_modules = array;
  var array$1 = [$m_Lquizleague_web_maintain_MaintainAppComponent$()];
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sjs_js_WrappedArray$();
  this.Lquizleague_web_maintain_MaintainAppModule$__f_components = array$1
}
export { $c_Lquizleague_web_maintain_MaintainAppModule$ as $c_Lquizleague_web_maintain_MaintainAppModule$ };
$c_Lquizleague_web_maintain_MaintainAppModule$.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_Lquizleague_web_maintain_MaintainAppModule$.prototype.constructor = $c_Lquizleague_web_maintain_MaintainAppModule$;
/** @constructor */
function $h_Lquizleague_web_maintain_MaintainAppModule$() {
  /*<skip>*/
}
export { $h_Lquizleague_web_maintain_MaintainAppModule$ as $h_Lquizleague_web_maintain_MaintainAppModule$ };
$h_Lquizleague_web_maintain_MaintainAppModule$.prototype = $c_Lquizleague_web_maintain_MaintainAppModule$.prototype;
$c_Lquizleague_web_maintain_MaintainAppModule$.prototype.routes__sjs_js_Array = (function() {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Module__routes__sjs_js_Array(this)
});
$c_Lquizleague_web_maintain_MaintainAppModule$.prototype.modules__sjs_js_Array = (function() {
  return this.Lquizleague_web_maintain_MaintainAppModule$__f_modules
});
$c_Lquizleague_web_maintain_MaintainAppModule$.prototype.components__sjs_js_Array = (function() {
  return this.Lquizleague_web_maintain_MaintainAppModule$__f_components
});
var $d_Lquizleague_web_maintain_MaintainAppModule$ = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  Lquizleague_web_maintain_MaintainAppModule$: 0
}, false, "quizleague.web.maintain.MaintainAppModule$", {
  Lquizleague_web_maintain_MaintainAppModule$: 1,
  O: 1,
  Lquizleague_web_core_Module: 1
});
export { $d_Lquizleague_web_maintain_MaintainAppModule$ as $d_Lquizleague_web_maintain_MaintainAppModule$ };
$c_Lquizleague_web_maintain_MaintainAppModule$.prototype.$classData = $d_Lquizleague_web_maintain_MaintainAppModule$;
var $n_Lquizleague_web_maintain_MaintainAppModule$;
function $m_Lquizleague_web_maintain_MaintainAppModule$() {
  if ((!$n_Lquizleague_web_maintain_MaintainAppModule$)) {
    $n_Lquizleague_web_maintain_MaintainAppModule$ = new $c_Lquizleague_web_maintain_MaintainAppModule$()
  };
  return $n_Lquizleague_web_maintain_MaintainAppModule$
}
export { $m_Lquizleague_web_maintain_MaintainAppModule$ as $m_Lquizleague_web_maintain_MaintainAppModule$ };
/** @constructor */
function $c_Lquizleague_web_maintain_MaintainMenuComponent$() {
  this.Lquizleague_web_maintain_MaintainMenuComponent$__f_name = null;
  this.Lquizleague_web_maintain_MaintainMenuComponent$__f_template = null;
  this.Lquizleague_web_maintain_MaintainMenuComponent$__f_quizleague$web$core$Component$$addedSubs = null;
  this.Lquizleague_web_maintain_MaintainMenuComponent$__f_quizleague$web$core$Component$$addedSubParams = null;
  this.Lquizleague_web_maintain_MaintainMenuComponent$__f_quizleague$web$core$Component$$addedProps = null;
  this.Lquizleague_web_maintain_MaintainMenuComponent$__f_quizleague$web$core$Component$$addedMethods = null;
  this.Lquizleague_web_maintain_MaintainMenuComponent$__f_quizleague$web$core$Component$$addedComputed = null;
  this.Lquizleague_web_maintain_MaintainMenuComponent$__f_quizleague$web$core$Component$$addedDataFn = null;
  this.Lquizleague_web_maintain_MaintainMenuComponent$__f_quizleague$web$core$Component$$addedData = null;
  this.Lquizleague_web_maintain_MaintainMenuComponent$__f_quizleague$web$core$Component$$addedComponents = null;
  this.Lquizleague_web_maintain_MaintainMenuComponent$__f_quizleague$web$core$Component$$addedWatch = null;
  this.Lquizleague_web_maintain_MaintainMenuComponent$__f_empty = null;
  this.Lquizleague_web_maintain_MaintainMenuComponent$__f_quizleague$web$core$Component$$commonMethods = null;
  $n_Lquizleague_web_maintain_MaintainMenuComponent$ = this;
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__$init$__V(this);
  this.Lquizleague_web_maintain_MaintainMenuComponent$__f_name = "ql-maintain-menu";
  this.Lquizleague_web_maintain_MaintainMenuComponent$__f_template = "\n     <v-list >\n        <v-list-item to=\"/maintain/applicationcontext\"><v-list-item-content><v-list-item-title>Application Context</v-list-item-title></v-list-item-content></v-list-item>\n        <v-list-item to=\"/maintain/globaltext\"><v-list-item-content><v-list-item-title>Global Text</v-list-item-title></v-list-item-content></v-list-item>\n        <v-list-item to=\"/maintain/team\"><v-list-item-content><v-list-item-title>Teams</v-list-item-title></v-list-item-content></v-list-item>\n        <v-list-item to=\"/maintain/season\"><v-list-item-content><v-list-item-title>Seasons</v-list-item-title></v-list-item-content></v-list-item>\n        <v-list-item to=\"/maintain/user\"><v-list-item-content><v-list-item-title>Users</v-list-item-title></v-list-item-content></v-list-item>\n        <v-list-item to=\"/maintain/venue\"><v-list-item-content><v-list-item-title>Venues</v-list-item-title></v-list-item-content></v-list-item>\n        <v-list-item to=\"/maintain/database\"><v-list-item-content><v-list-item-title>Database</v-list-item-title></v-list-item-content></v-list-item>\n        <v-list-item to=\"/maintain/stats\"><v-list-item-content><v-list-item-title>Statistics</v-list-item-title></v-list-item-content></v-list-item>\n        <v-list-item to=\"/maintain/competitionstatistics\"><v-list-item-content><v-list-item-title>Competition Statistics</v-list-item-title></v-list-item-content></v-list-item>\n\n     </v-list>\n"
}
export { $c_Lquizleague_web_maintain_MaintainMenuComponent$ as $c_Lquizleague_web_maintain_MaintainMenuComponent$ };
$c_Lquizleague_web_maintain_MaintainMenuComponent$.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_Lquizleague_web_maintain_MaintainMenuComponent$.prototype.constructor = $c_Lquizleague_web_maintain_MaintainMenuComponent$;
/** @constructor */
function $h_Lquizleague_web_maintain_MaintainMenuComponent$() {
  /*<skip>*/
}
export { $h_Lquizleague_web_maintain_MaintainMenuComponent$ as $h_Lquizleague_web_maintain_MaintainMenuComponent$ };
$h_Lquizleague_web_maintain_MaintainMenuComponent$.prototype = $c_Lquizleague_web_maintain_MaintainMenuComponent$.prototype;
$c_Lquizleague_web_maintain_MaintainMenuComponent$.prototype.mounted__sjs_js_Function = (function() {
  return null
});
$c_Lquizleague_web_maintain_MaintainMenuComponent$.prototype.beforeDestroy__sjs_js_Function = (function() {
  return null
});
$c_Lquizleague_web_maintain_MaintainMenuComponent$.prototype.quizleague$web$core$Component$$addedSubs__sci_Map = (function() {
  return this.Lquizleague_web_maintain_MaintainMenuComponent$__f_quizleague$web$core$Component$$addedSubs
});
$c_Lquizleague_web_maintain_MaintainMenuComponent$.prototype.quizleague$web$core$Component$$addedSubs_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_MaintainMenuComponent$__f_quizleague$web$core$Component$$addedSubs = x$1
});
$c_Lquizleague_web_maintain_MaintainMenuComponent$.prototype.quizleague$web$core$Component$$addedSubParams__sci_List = (function() {
  return this.Lquizleague_web_maintain_MaintainMenuComponent$__f_quizleague$web$core$Component$$addedSubParams
});
$c_Lquizleague_web_maintain_MaintainMenuComponent$.prototype.quizleague$web$core$Component$$addedSubParams_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_MaintainMenuComponent$__f_quizleague$web$core$Component$$addedSubParams = x$1
});
$c_Lquizleague_web_maintain_MaintainMenuComponent$.prototype.quizleague$web$core$Component$$addedProps__sci_List = (function() {
  return this.Lquizleague_web_maintain_MaintainMenuComponent$__f_quizleague$web$core$Component$$addedProps
});
$c_Lquizleague_web_maintain_MaintainMenuComponent$.prototype.quizleague$web$core$Component$$addedProps_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_MaintainMenuComponent$__f_quizleague$web$core$Component$$addedProps = x$1
});
$c_Lquizleague_web_maintain_MaintainMenuComponent$.prototype.quizleague$web$core$Component$$addedMethods__sci_Map = (function() {
  return this.Lquizleague_web_maintain_MaintainMenuComponent$__f_quizleague$web$core$Component$$addedMethods
});
$c_Lquizleague_web_maintain_MaintainMenuComponent$.prototype.quizleague$web$core$Component$$addedMethods_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_MaintainMenuComponent$__f_quizleague$web$core$Component$$addedMethods = x$1
});
$c_Lquizleague_web_maintain_MaintainMenuComponent$.prototype.quizleague$web$core$Component$$addedComputed__sci_Map = (function() {
  return this.Lquizleague_web_maintain_MaintainMenuComponent$__f_quizleague$web$core$Component$$addedComputed
});
$c_Lquizleague_web_maintain_MaintainMenuComponent$.prototype.quizleague$web$core$Component$$addedComputed_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_MaintainMenuComponent$__f_quizleague$web$core$Component$$addedComputed = x$1
});
$c_Lquizleague_web_maintain_MaintainMenuComponent$.prototype.quizleague$web$core$Component$$addedDataFn__sci_Map = (function() {
  return this.Lquizleague_web_maintain_MaintainMenuComponent$__f_quizleague$web$core$Component$$addedDataFn
});
$c_Lquizleague_web_maintain_MaintainMenuComponent$.prototype.quizleague$web$core$Component$$addedDataFn_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_MaintainMenuComponent$__f_quizleague$web$core$Component$$addedDataFn = x$1
});
$c_Lquizleague_web_maintain_MaintainMenuComponent$.prototype.quizleague$web$core$Component$$addedData__sci_Map = (function() {
  return this.Lquizleague_web_maintain_MaintainMenuComponent$__f_quizleague$web$core$Component$$addedData
});
$c_Lquizleague_web_maintain_MaintainMenuComponent$.prototype.quizleague$web$core$Component$$addedData_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_MaintainMenuComponent$__f_quizleague$web$core$Component$$addedData = x$1
});
$c_Lquizleague_web_maintain_MaintainMenuComponent$.prototype.quizleague$web$core$Component$$addedComponents__sci_List = (function() {
  return this.Lquizleague_web_maintain_MaintainMenuComponent$__f_quizleague$web$core$Component$$addedComponents
});
$c_Lquizleague_web_maintain_MaintainMenuComponent$.prototype.quizleague$web$core$Component$$addedComponents_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_MaintainMenuComponent$__f_quizleague$web$core$Component$$addedComponents = x$1
});
$c_Lquizleague_web_maintain_MaintainMenuComponent$.prototype.quizleague$web$core$Component$$addedWatch__sci_Map = (function() {
  return this.Lquizleague_web_maintain_MaintainMenuComponent$__f_quizleague$web$core$Component$$addedWatch
});
$c_Lquizleague_web_maintain_MaintainMenuComponent$.prototype.quizleague$web$core$Component$$addedWatch_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_MaintainMenuComponent$__f_quizleague$web$core$Component$$addedWatch = x$1
});
$c_Lquizleague_web_maintain_MaintainMenuComponent$.prototype.empty__sjs_js_Object = (function() {
  return this.Lquizleague_web_maintain_MaintainMenuComponent$__f_empty
});
$c_Lquizleague_web_maintain_MaintainMenuComponent$.prototype.quizleague$web$core$Component$$commonMethods__sci_Map = (function() {
  return this.Lquizleague_web_maintain_MaintainMenuComponent$__f_quizleague$web$core$Component$$commonMethods
});
$c_Lquizleague_web_maintain_MaintainMenuComponent$.prototype.quizleague$web$core$Component$_setter_$empty_$eq__sjs_js_Object__V = (function(x$1) {
  this.Lquizleague_web_maintain_MaintainMenuComponent$__f_empty = x$1
});
$c_Lquizleague_web_maintain_MaintainMenuComponent$.prototype.quizleague$web$core$Component$_setter_$quizleague$web$core$Component$$commonMethods_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_MaintainMenuComponent$__f_quizleague$web$core$Component$$commonMethods = x$1
});
$c_Lquizleague_web_maintain_MaintainMenuComponent$.prototype.name__T = (function() {
  return this.Lquizleague_web_maintain_MaintainMenuComponent$__f_name
});
$c_Lquizleague_web_maintain_MaintainMenuComponent$.prototype.template__T = (function() {
  return this.Lquizleague_web_maintain_MaintainMenuComponent$__f_template
});
var $d_Lquizleague_web_maintain_MaintainMenuComponent$ = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  Lquizleague_web_maintain_MaintainMenuComponent$: 0
}, false, "quizleague.web.maintain.MaintainMenuComponent$", {
  Lquizleague_web_maintain_MaintainMenuComponent$: 1,
  O: 1,
  Lquizleague_web_core_Component: 1
});
export { $d_Lquizleague_web_maintain_MaintainMenuComponent$ as $d_Lquizleague_web_maintain_MaintainMenuComponent$ };
$c_Lquizleague_web_maintain_MaintainMenuComponent$.prototype.$classData = $d_Lquizleague_web_maintain_MaintainMenuComponent$;
var $n_Lquizleague_web_maintain_MaintainMenuComponent$;
function $m_Lquizleague_web_maintain_MaintainMenuComponent$() {
  if ((!$n_Lquizleague_web_maintain_MaintainMenuComponent$)) {
    $n_Lquizleague_web_maintain_MaintainMenuComponent$ = new $c_Lquizleague_web_maintain_MaintainMenuComponent$()
  };
  return $n_Lquizleague_web_maintain_MaintainMenuComponent$
}
export { $m_Lquizleague_web_maintain_MaintainMenuComponent$ as $m_Lquizleague_web_maintain_MaintainMenuComponent$ };
/** @constructor */
function $c_Lquizleague_web_maintain_MaintainModule$() {
  this.Lquizleague_web_maintain_MaintainModule$__f_modules = null;
  this.Lquizleague_web_maintain_MaintainModule$__f_routes = null;
  $n_Lquizleague_web_maintain_MaintainModule$ = this;
  var array = [$m_Lquizleague_web_maintain_user_UserModule$(), $m_Lquizleague_web_maintain_venue_VenueModule$(), $m_Lquizleague_web_maintain_text_TextModule$(), $m_Lquizleague_web_maintain_team_TeamModule$(), $m_Lquizleague_web_maintain_applicationcontext_ApplicationContextModule$(), $m_Lquizleague_web_maintain_globaltext_GlobalTextModule$(), $m_Lquizleague_web_maintain_season_SeasonModule$(), $m_Lquizleague_web_maintain_database_DatabaseModule$(), $m_Lquizleague_web_maintain_stats_StatsModule$(), $m_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsModule$(), $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_shared_SharedModule$()];
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sjs_js_WrappedArray$();
  this.Lquizleague_web_maintain_MaintainModule$__f_modules = array;
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_Predef$().s_Predef$__f_Map);
  var y = $m_Lquizleague_web_maintain_MaintainMenuComponent$();
  var array$1 = [new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2("sidenav", y)];
  var this$12 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sci_Map$MapBuilderImpl();
  if (this$12.sci_Map$MapBuilderImpl__f_switchedToHashMapBuilder) {
    var this$13 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this$12.sci_Map$MapBuilderImpl__f_hashMapBuilder);
    var i = 0;
    var len = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array$1.length);
    while ((i < len)) {
      var index = i;
      var arg1 = array$1[index];
      this$13.$plus$eq__T2__sci_HashMap$HashMapBuilder($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T2(arg1));
      i = ((1 + i) | 0)
    }
  } else {
    var i$1 = 0;
    var len$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array$1.length);
    while ((i$1 < len$1)) {
      var index$1 = i$1;
      var arg1$1 = array$1[index$1];
      this$12.$plus$eq__T2__sci_Map$MapBuilderImpl($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T2(arg1$1));
      i$1 = ((1 + i$1) | 0)
    }
  };
  var x$2 = this$12.result__sci_Map();
  var x$8 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_core_RouteConfig$().apply$default$8__sjs_js_Array();
  var array$2 = [$j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_core_RouteConfig$().apply__T__sjs_js_Any__T__sci_Map__sjs_js_Any__sjs_js_Any__sjs_js_Any__sjs_js_Array__sjs_js_Function3__sjs_js_Object("/maintain/*", null, null, x$2, null, null, null, x$8, null)];
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sjs_js_WrappedArray$();
  this.Lquizleague_web_maintain_MaintainModule$__f_routes = array$2
}
export { $c_Lquizleague_web_maintain_MaintainModule$ as $c_Lquizleague_web_maintain_MaintainModule$ };
$c_Lquizleague_web_maintain_MaintainModule$.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_Lquizleague_web_maintain_MaintainModule$.prototype.constructor = $c_Lquizleague_web_maintain_MaintainModule$;
/** @constructor */
function $h_Lquizleague_web_maintain_MaintainModule$() {
  /*<skip>*/
}
export { $h_Lquizleague_web_maintain_MaintainModule$ as $h_Lquizleague_web_maintain_MaintainModule$ };
$h_Lquizleague_web_maintain_MaintainModule$.prototype = $c_Lquizleague_web_maintain_MaintainModule$.prototype;
$c_Lquizleague_web_maintain_MaintainModule$.prototype.components__sjs_js_Array = (function() {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Module__components__sjs_js_Array(this)
});
$c_Lquizleague_web_maintain_MaintainModule$.prototype.modules__sjs_js_Array = (function() {
  return this.Lquizleague_web_maintain_MaintainModule$__f_modules
});
$c_Lquizleague_web_maintain_MaintainModule$.prototype.routes__sjs_js_Array = (function() {
  return this.Lquizleague_web_maintain_MaintainModule$__f_routes
});
var $d_Lquizleague_web_maintain_MaintainModule$ = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  Lquizleague_web_maintain_MaintainModule$: 0
}, false, "quizleague.web.maintain.MaintainModule$", {
  Lquizleague_web_maintain_MaintainModule$: 1,
  O: 1,
  Lquizleague_web_core_Module: 1
});
export { $d_Lquizleague_web_maintain_MaintainModule$ as $d_Lquizleague_web_maintain_MaintainModule$ };
$c_Lquizleague_web_maintain_MaintainModule$.prototype.$classData = $d_Lquizleague_web_maintain_MaintainModule$;
var $n_Lquizleague_web_maintain_MaintainModule$;
function $m_Lquizleague_web_maintain_MaintainModule$() {
  if ((!$n_Lquizleague_web_maintain_MaintainModule$)) {
    $n_Lquizleague_web_maintain_MaintainModule$ = new $c_Lquizleague_web_maintain_MaintainModule$()
  };
  return $n_Lquizleague_web_maintain_MaintainModule$
}
export { $m_Lquizleague_web_maintain_MaintainModule$ as $m_Lquizleague_web_maintain_MaintainModule$ };
/** @constructor */
function $c_Lquizleague_web_maintain_MaintainNotificationsComponent$() {
  this.Lquizleague_web_maintain_MaintainNotificationsComponent$__f_name = null;
  this.Lquizleague_web_maintain_MaintainNotificationsComponent$__f_template = null;
  this.Lquizleague_web_maintain_MaintainNotificationsComponent$__f_quizleague$web$core$Component$$addedSubs = null;
  this.Lquizleague_web_maintain_MaintainNotificationsComponent$__f_quizleague$web$core$Component$$addedSubParams = null;
  this.Lquizleague_web_maintain_MaintainNotificationsComponent$__f_quizleague$web$core$Component$$addedProps = null;
  this.Lquizleague_web_maintain_MaintainNotificationsComponent$__f_quizleague$web$core$Component$$addedMethods = null;
  this.Lquizleague_web_maintain_MaintainNotificationsComponent$__f_quizleague$web$core$Component$$addedComputed = null;
  this.Lquizleague_web_maintain_MaintainNotificationsComponent$__f_quizleague$web$core$Component$$addedDataFn = null;
  this.Lquizleague_web_maintain_MaintainNotificationsComponent$__f_quizleague$web$core$Component$$addedData = null;
  this.Lquizleague_web_maintain_MaintainNotificationsComponent$__f_quizleague$web$core$Component$$addedComponents = null;
  this.Lquizleague_web_maintain_MaintainNotificationsComponent$__f_quizleague$web$core$Component$$addedWatch = null;
  this.Lquizleague_web_maintain_MaintainNotificationsComponent$__f_empty = null;
  this.Lquizleague_web_maintain_MaintainNotificationsComponent$__f_quizleague$web$core$Component$$commonMethods = null;
  $n_Lquizleague_web_maintain_MaintainNotificationsComponent$ = this;
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__$init$__V(this);
  this.Lquizleague_web_maintain_MaintainNotificationsComponent$__f_name = "notifications";
  this.Lquizleague_web_maintain_MaintainNotificationsComponent$__f_template = "\n         <v-snackbar\n            timeout=\"60000000\"\n            :bottom=\"true\"\n            :right=\"true\"\n            v-model=\"messages\"\n          >\n          {{notification}}\n          <v-btn text color=\"pink\" @click.native=\"messages = false\">Close</v-btn>\n          </v-snackbar>\n";
  var this$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_Ljava_time_LocalDateTime$();
  var value = this$1.now__Ljava_time_Clock__Ljava_time_LocalDateTime(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_Ljava_time_Clock$SystemClock($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_Ljava_time_ZoneId$().systemDefault__Ljava_time_ZoneId()));
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__data__T__O__V(this, "now", value);
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__data__T__O__V(this, "messages", false);
  var array = ["now"];
  var fn = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((c$2) => $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($m_Lquizleague_web_maintain_NotificationService$().messages__Ljava_time_LocalDateTime__Lrxscalajs_Observable($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_Ljava_time_LocalDateTime(c$2.now))).map__F1__Lrxscalajs_Observable(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((m$2) => {
    var m = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(m$2);
    c$2.messages = true;
    return m
  })))));
  this.Lquizleague_web_maintain_MaintainNotificationsComponent$__f_quizleague$web$core$Component$$addedSubs = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.Lquizleague_web_maintain_MaintainNotificationsComponent$__f_quizleague$web$core$Component$$addedSubs).$plus__T2__sci_Map(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2("notification", fn));
  var $$x1 = this.Lquizleague_web_maintain_MaintainNotificationsComponent$__f_quizleague$web$core$Component$$addedSubParams;
  var this$6 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sc_Seq$();
  var bf = this$6.scg_GenTraversableFactory__f_ReusableCBFInstance;
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(bf);
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sjs_js_WrappedArray$();
  var b = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$ct_sjs_js_WrappedArray__(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjs_js_WrappedArray());
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length);
  var i = 0;
  var len = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length);
  while ((i < len)) {
    var index = i;
    var arg1 = array[index];
    var x$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(arg1);
    var elem = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2(x$1, "notification");
    b.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.push(elem);
    i = ((1 + i) | 0)
  };
  var this$9 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sci_List$();
  this.Lquizleague_web_maintain_MaintainNotificationsComponent$__f_quizleague$web$core$Component$$addedSubParams = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_sci_List($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($$x1).$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O(b, this$9.scg_GenTraversableFactory__f_ReusableCBFInstance));
  var fn$1 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction2(((c$3$2, value$2) => {
    if ((!$j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uZ(c$3$2.messages))) {
      var this$10 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_Ljava_time_LocalDateTime$();
      c$3$2.now = this$10.now__Ljava_time_Clock__Ljava_time_LocalDateTime(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_Ljava_time_Clock$SystemClock($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_Ljava_time_ZoneId$().systemDefault__Ljava_time_ZoneId()))
    }
  }));
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__watch__T__F2__V(this, "messages", fn$1)
}
export { $c_Lquizleague_web_maintain_MaintainNotificationsComponent$ as $c_Lquizleague_web_maintain_MaintainNotificationsComponent$ };
$c_Lquizleague_web_maintain_MaintainNotificationsComponent$.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_Lquizleague_web_maintain_MaintainNotificationsComponent$.prototype.constructor = $c_Lquizleague_web_maintain_MaintainNotificationsComponent$;
/** @constructor */
function $h_Lquizleague_web_maintain_MaintainNotificationsComponent$() {
  /*<skip>*/
}
export { $h_Lquizleague_web_maintain_MaintainNotificationsComponent$ as $h_Lquizleague_web_maintain_MaintainNotificationsComponent$ };
$h_Lquizleague_web_maintain_MaintainNotificationsComponent$.prototype = $c_Lquizleague_web_maintain_MaintainNotificationsComponent$.prototype;
$c_Lquizleague_web_maintain_MaintainNotificationsComponent$.prototype.mounted__sjs_js_Function = (function() {
  return null
});
$c_Lquizleague_web_maintain_MaintainNotificationsComponent$.prototype.beforeDestroy__sjs_js_Function = (function() {
  return null
});
$c_Lquizleague_web_maintain_MaintainNotificationsComponent$.prototype.quizleague$web$core$Component$$addedSubs__sci_Map = (function() {
  return this.Lquizleague_web_maintain_MaintainNotificationsComponent$__f_quizleague$web$core$Component$$addedSubs
});
$c_Lquizleague_web_maintain_MaintainNotificationsComponent$.prototype.quizleague$web$core$Component$$addedSubs_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_MaintainNotificationsComponent$__f_quizleague$web$core$Component$$addedSubs = x$1
});
$c_Lquizleague_web_maintain_MaintainNotificationsComponent$.prototype.quizleague$web$core$Component$$addedSubParams__sci_List = (function() {
  return this.Lquizleague_web_maintain_MaintainNotificationsComponent$__f_quizleague$web$core$Component$$addedSubParams
});
$c_Lquizleague_web_maintain_MaintainNotificationsComponent$.prototype.quizleague$web$core$Component$$addedSubParams_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_MaintainNotificationsComponent$__f_quizleague$web$core$Component$$addedSubParams = x$1
});
$c_Lquizleague_web_maintain_MaintainNotificationsComponent$.prototype.quizleague$web$core$Component$$addedProps__sci_List = (function() {
  return this.Lquizleague_web_maintain_MaintainNotificationsComponent$__f_quizleague$web$core$Component$$addedProps
});
$c_Lquizleague_web_maintain_MaintainNotificationsComponent$.prototype.quizleague$web$core$Component$$addedProps_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_MaintainNotificationsComponent$__f_quizleague$web$core$Component$$addedProps = x$1
});
$c_Lquizleague_web_maintain_MaintainNotificationsComponent$.prototype.quizleague$web$core$Component$$addedMethods__sci_Map = (function() {
  return this.Lquizleague_web_maintain_MaintainNotificationsComponent$__f_quizleague$web$core$Component$$addedMethods
});
$c_Lquizleague_web_maintain_MaintainNotificationsComponent$.prototype.quizleague$web$core$Component$$addedMethods_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_MaintainNotificationsComponent$__f_quizleague$web$core$Component$$addedMethods = x$1
});
$c_Lquizleague_web_maintain_MaintainNotificationsComponent$.prototype.quizleague$web$core$Component$$addedComputed__sci_Map = (function() {
  return this.Lquizleague_web_maintain_MaintainNotificationsComponent$__f_quizleague$web$core$Component$$addedComputed
});
$c_Lquizleague_web_maintain_MaintainNotificationsComponent$.prototype.quizleague$web$core$Component$$addedComputed_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_MaintainNotificationsComponent$__f_quizleague$web$core$Component$$addedComputed = x$1
});
$c_Lquizleague_web_maintain_MaintainNotificationsComponent$.prototype.quizleague$web$core$Component$$addedDataFn__sci_Map = (function() {
  return this.Lquizleague_web_maintain_MaintainNotificationsComponent$__f_quizleague$web$core$Component$$addedDataFn
});
$c_Lquizleague_web_maintain_MaintainNotificationsComponent$.prototype.quizleague$web$core$Component$$addedDataFn_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_MaintainNotificationsComponent$__f_quizleague$web$core$Component$$addedDataFn = x$1
});
$c_Lquizleague_web_maintain_MaintainNotificationsComponent$.prototype.quizleague$web$core$Component$$addedData__sci_Map = (function() {
  return this.Lquizleague_web_maintain_MaintainNotificationsComponent$__f_quizleague$web$core$Component$$addedData
});
$c_Lquizleague_web_maintain_MaintainNotificationsComponent$.prototype.quizleague$web$core$Component$$addedData_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_MaintainNotificationsComponent$__f_quizleague$web$core$Component$$addedData = x$1
});
$c_Lquizleague_web_maintain_MaintainNotificationsComponent$.prototype.quizleague$web$core$Component$$addedComponents__sci_List = (function() {
  return this.Lquizleague_web_maintain_MaintainNotificationsComponent$__f_quizleague$web$core$Component$$addedComponents
});
$c_Lquizleague_web_maintain_MaintainNotificationsComponent$.prototype.quizleague$web$core$Component$$addedComponents_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_MaintainNotificationsComponent$__f_quizleague$web$core$Component$$addedComponents = x$1
});
$c_Lquizleague_web_maintain_MaintainNotificationsComponent$.prototype.quizleague$web$core$Component$$addedWatch__sci_Map = (function() {
  return this.Lquizleague_web_maintain_MaintainNotificationsComponent$__f_quizleague$web$core$Component$$addedWatch
});
$c_Lquizleague_web_maintain_MaintainNotificationsComponent$.prototype.quizleague$web$core$Component$$addedWatch_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_MaintainNotificationsComponent$__f_quizleague$web$core$Component$$addedWatch = x$1
});
$c_Lquizleague_web_maintain_MaintainNotificationsComponent$.prototype.empty__sjs_js_Object = (function() {
  return this.Lquizleague_web_maintain_MaintainNotificationsComponent$__f_empty
});
$c_Lquizleague_web_maintain_MaintainNotificationsComponent$.prototype.quizleague$web$core$Component$$commonMethods__sci_Map = (function() {
  return this.Lquizleague_web_maintain_MaintainNotificationsComponent$__f_quizleague$web$core$Component$$commonMethods
});
$c_Lquizleague_web_maintain_MaintainNotificationsComponent$.prototype.quizleague$web$core$Component$_setter_$empty_$eq__sjs_js_Object__V = (function(x$1) {
  this.Lquizleague_web_maintain_MaintainNotificationsComponent$__f_empty = x$1
});
$c_Lquizleague_web_maintain_MaintainNotificationsComponent$.prototype.quizleague$web$core$Component$_setter_$quizleague$web$core$Component$$commonMethods_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_MaintainNotificationsComponent$__f_quizleague$web$core$Component$$commonMethods = x$1
});
$c_Lquizleague_web_maintain_MaintainNotificationsComponent$.prototype.name__T = (function() {
  return this.Lquizleague_web_maintain_MaintainNotificationsComponent$__f_name
});
$c_Lquizleague_web_maintain_MaintainNotificationsComponent$.prototype.template__T = (function() {
  return this.Lquizleague_web_maintain_MaintainNotificationsComponent$__f_template
});
var $d_Lquizleague_web_maintain_MaintainNotificationsComponent$ = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  Lquizleague_web_maintain_MaintainNotificationsComponent$: 0
}, false, "quizleague.web.maintain.MaintainNotificationsComponent$", {
  Lquizleague_web_maintain_MaintainNotificationsComponent$: 1,
  O: 1,
  Lquizleague_web_core_Component: 1
});
export { $d_Lquizleague_web_maintain_MaintainNotificationsComponent$ as $d_Lquizleague_web_maintain_MaintainNotificationsComponent$ };
$c_Lquizleague_web_maintain_MaintainNotificationsComponent$.prototype.$classData = $d_Lquizleague_web_maintain_MaintainNotificationsComponent$;
var $n_Lquizleague_web_maintain_MaintainNotificationsComponent$;
function $m_Lquizleague_web_maintain_MaintainNotificationsComponent$() {
  if ((!$n_Lquizleague_web_maintain_MaintainNotificationsComponent$)) {
    $n_Lquizleague_web_maintain_MaintainNotificationsComponent$ = new $c_Lquizleague_web_maintain_MaintainNotificationsComponent$()
  };
  return $n_Lquizleague_web_maintain_MaintainNotificationsComponent$
}
export { $m_Lquizleague_web_maintain_MaintainNotificationsComponent$ as $m_Lquizleague_web_maintain_MaintainNotificationsComponent$ };
/** @constructor */
function $c_Lquizleague_web_maintain_applicationcontext_ApplicationContextModule$() {
  this.Lquizleague_web_maintain_applicationcontext_ApplicationContextModule$__f_routes = null;
  $n_Lquizleague_web_maintain_applicationcontext_ApplicationContextModule$ = this;
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_Predef$().s_Predef$__f_Map);
  var y = $m_Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$();
  var array = [new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2("default", y)];
  var this$6 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sci_Map$MapBuilderImpl();
  if (this$6.sci_Map$MapBuilderImpl__f_switchedToHashMapBuilder) {
    var this$7 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this$6.sci_Map$MapBuilderImpl__f_hashMapBuilder);
    var i = 0;
    var len = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length);
    while ((i < len)) {
      var index = i;
      var arg1 = array[index];
      this$7.$plus$eq__T2__sci_HashMap$HashMapBuilder($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T2(arg1));
      i = ((1 + i) | 0)
    }
  } else {
    var i$1 = 0;
    var len$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length);
    while ((i$1 < len$1)) {
      var index$1 = i$1;
      var arg1$1 = array[index$1];
      this$6.$plus$eq__T2__sci_Map$MapBuilderImpl($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T2(arg1$1));
      i$1 = ((1 + i$1) | 0)
    }
  };
  var x$2 = this$6.result__sci_Map();
  var x$8 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_core_RouteConfig$().apply$default$8__sjs_js_Array();
  var array$1 = [$j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_core_RouteConfig$().apply__T__sjs_js_Any__T__sci_Map__sjs_js_Any__sjs_js_Any__sjs_js_Any__sjs_js_Array__sjs_js_Function3__sjs_js_Object("/maintain/applicationcontext", null, null, x$2, null, null, null, x$8, null)];
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sjs_js_WrappedArray$();
  this.Lquizleague_web_maintain_applicationcontext_ApplicationContextModule$__f_routes = array$1
}
export { $c_Lquizleague_web_maintain_applicationcontext_ApplicationContextModule$ as $c_Lquizleague_web_maintain_applicationcontext_ApplicationContextModule$ };
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextModule$.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextModule$.prototype.constructor = $c_Lquizleague_web_maintain_applicationcontext_ApplicationContextModule$;
/** @constructor */
function $h_Lquizleague_web_maintain_applicationcontext_ApplicationContextModule$() {
  /*<skip>*/
}
export { $h_Lquizleague_web_maintain_applicationcontext_ApplicationContextModule$ as $h_Lquizleague_web_maintain_applicationcontext_ApplicationContextModule$ };
$h_Lquizleague_web_maintain_applicationcontext_ApplicationContextModule$.prototype = $c_Lquizleague_web_maintain_applicationcontext_ApplicationContextModule$.prototype;
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextModule$.prototype.modules__sjs_js_Array = (function() {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Module__modules__sjs_js_Array(this)
});
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextModule$.prototype.components__sjs_js_Array = (function() {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Module__components__sjs_js_Array(this)
});
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextModule$.prototype.routes__sjs_js_Array = (function() {
  return this.Lquizleague_web_maintain_applicationcontext_ApplicationContextModule$__f_routes
});
var $d_Lquizleague_web_maintain_applicationcontext_ApplicationContextModule$ = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  Lquizleague_web_maintain_applicationcontext_ApplicationContextModule$: 0
}, false, "quizleague.web.maintain.applicationcontext.ApplicationContextModule$", {
  Lquizleague_web_maintain_applicationcontext_ApplicationContextModule$: 1,
  O: 1,
  Lquizleague_web_core_Module: 1
});
export { $d_Lquizleague_web_maintain_applicationcontext_ApplicationContextModule$ as $d_Lquizleague_web_maintain_applicationcontext_ApplicationContextModule$ };
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextModule$.prototype.$classData = $d_Lquizleague_web_maintain_applicationcontext_ApplicationContextModule$;
var $n_Lquizleague_web_maintain_applicationcontext_ApplicationContextModule$;
function $m_Lquizleague_web_maintain_applicationcontext_ApplicationContextModule$() {
  if ((!$n_Lquizleague_web_maintain_applicationcontext_ApplicationContextModule$)) {
    $n_Lquizleague_web_maintain_applicationcontext_ApplicationContextModule$ = new $c_Lquizleague_web_maintain_applicationcontext_ApplicationContextModule$()
  };
  return $n_Lquizleague_web_maintain_applicationcontext_ApplicationContextModule$
}
export { $m_Lquizleague_web_maintain_applicationcontext_ApplicationContextModule$ as $m_Lquizleague_web_maintain_applicationcontext_ApplicationContextModule$ };
/** @constructor */
function $c_Lquizleague_web_maintain_competition_CompetitionModule$() {
  this.Lquizleague_web_maintain_competition_CompetitionModule$__f_modules = null;
  this.Lquizleague_web_maintain_competition_CompetitionModule$__f_routes = null;
  $n_Lquizleague_web_maintain_competition_CompetitionModule$ = this;
  var array = [$m_Lquizleague_web_maintain_fixtures_FixturesModule$(), $m_Lquizleague_web_maintain_leaguetable_LeagueTableModule$()];
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sjs_js_WrappedArray$();
  this.Lquizleague_web_maintain_competition_CompetitionModule$__f_modules = array;
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_Predef$().s_Predef$__f_Map);
  var y = $m_Lquizleague_web_maintain_competition_LeagueCompetitionComponent$();
  var array$1 = [new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2("default", y)];
  var this$12 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sci_Map$MapBuilderImpl();
  if (this$12.sci_Map$MapBuilderImpl__f_switchedToHashMapBuilder) {
    var this$13 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this$12.sci_Map$MapBuilderImpl__f_hashMapBuilder);
    var i = 0;
    var len = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array$1.length);
    while ((i < len)) {
      var index = i;
      var arg1 = array$1[index];
      this$13.$plus$eq__T2__sci_HashMap$HashMapBuilder($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T2(arg1));
      i = ((1 + i) | 0)
    }
  } else {
    var i$1 = 0;
    var len$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array$1.length);
    while ((i$1 < len$1)) {
      var index$1 = i$1;
      var arg1$1 = array$1[index$1];
      this$12.$plus$eq__T2__sci_Map$MapBuilderImpl($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T2(arg1$1));
      i$1 = ((1 + i$1) | 0)
    }
  };
  var x$2 = this$12.result__sci_Map();
  var x$8 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_core_RouteConfig$().apply$default$8__sjs_js_Array();
  var $$x3 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_core_RouteConfig$().apply__T__sjs_js_Any__T__sci_Map__sjs_js_Any__sjs_js_Any__sjs_js_Any__sjs_js_Array__sjs_js_Function3__sjs_js_Object("/maintain/season/:seasonId/competition/:id/league", null, null, x$2, null, null, null, x$8, null);
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_Predef$().s_Predef$__f_Map);
  var y$1 = $m_Lquizleague_web_maintain_competition_CupCompetitionComponent$();
  var array$2 = [new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2("default", y$1)];
  var this$19 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sci_Map$MapBuilderImpl();
  if (this$19.sci_Map$MapBuilderImpl__f_switchedToHashMapBuilder) {
    var this$20 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this$19.sci_Map$MapBuilderImpl__f_hashMapBuilder);
    var i$2 = 0;
    var len$2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array$2.length);
    while ((i$2 < len$2)) {
      var index$2 = i$2;
      var arg1$2 = array$2[index$2];
      this$20.$plus$eq__T2__sci_HashMap$HashMapBuilder($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T2(arg1$2));
      i$2 = ((1 + i$2) | 0)
    }
  } else {
    var i$3 = 0;
    var len$3 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array$2.length);
    while ((i$3 < len$3)) {
      var index$3 = i$3;
      var arg1$3 = array$2[index$3];
      this$19.$plus$eq__T2__sci_Map$MapBuilderImpl($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T2(arg1$3));
      i$3 = ((1 + i$3) | 0)
    }
  };
  var x$11 = this$19.result__sci_Map();
  var x$17 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_core_RouteConfig$().apply$default$8__sjs_js_Array();
  var $$x2 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_core_RouteConfig$().apply__T__sjs_js_Any__T__sci_Map__sjs_js_Any__sjs_js_Any__sjs_js_Any__sjs_js_Array__sjs_js_Function3__sjs_js_Object("/maintain/season/:seasonId/competition/:id/cup", null, null, x$11, null, null, null, x$17, null);
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_Predef$().s_Predef$__f_Map);
  var y$2 = $m_Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$();
  var array$3 = [new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2("default", y$2)];
  var this$26 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sci_Map$MapBuilderImpl();
  if (this$26.sci_Map$MapBuilderImpl__f_switchedToHashMapBuilder) {
    var this$27 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this$26.sci_Map$MapBuilderImpl__f_hashMapBuilder);
    var i$4 = 0;
    var len$4 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array$3.length);
    while ((i$4 < len$4)) {
      var index$4 = i$4;
      var arg1$4 = array$3[index$4];
      this$27.$plus$eq__T2__sci_HashMap$HashMapBuilder($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T2(arg1$4));
      i$4 = ((1 + i$4) | 0)
    }
  } else {
    var i$5 = 0;
    var len$5 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array$3.length);
    while ((i$5 < len$5)) {
      var index$5 = i$5;
      var arg1$5 = array$3[index$5];
      this$26.$plus$eq__T2__sci_Map$MapBuilderImpl($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T2(arg1$5));
      i$5 = ((1 + i$5) | 0)
    }
  };
  var x$20 = this$26.result__sci_Map();
  var x$26 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_core_RouteConfig$().apply$default$8__sjs_js_Array();
  var $$x1 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_core_RouteConfig$().apply__T__sjs_js_Any__T__sci_Map__sjs_js_Any__sjs_js_Any__sjs_js_Any__sjs_js_Array__sjs_js_Function3__sjs_js_Object("/maintain/season/:seasonId/competition/:id/subsidiary", null, null, x$20, null, null, null, x$26, null);
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_Predef$().s_Predef$__f_Map);
  var y$3 = $m_Lquizleague_web_maintain_competition_SingletonCompetitionComponent$();
  var array$4 = [new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2("default", y$3)];
  var this$33 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sci_Map$MapBuilderImpl();
  if (this$33.sci_Map$MapBuilderImpl__f_switchedToHashMapBuilder) {
    var this$34 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this$33.sci_Map$MapBuilderImpl__f_hashMapBuilder);
    var i$6 = 0;
    var len$6 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array$4.length);
    while ((i$6 < len$6)) {
      var index$6 = i$6;
      var arg1$6 = array$4[index$6];
      this$34.$plus$eq__T2__sci_HashMap$HashMapBuilder($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T2(arg1$6));
      i$6 = ((1 + i$6) | 0)
    }
  } else {
    var i$7 = 0;
    var len$7 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array$4.length);
    while ((i$7 < len$7)) {
      var index$7 = i$7;
      var arg1$7 = array$4[index$7];
      this$33.$plus$eq__T2__sci_Map$MapBuilderImpl($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T2(arg1$7));
      i$7 = ((1 + i$7) | 0)
    }
  };
  var x$29 = this$33.result__sci_Map();
  var x$35 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_core_RouteConfig$().apply$default$8__sjs_js_Array();
  var array$5 = [$$x3, $$x2, $$x1, $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_core_RouteConfig$().apply__T__sjs_js_Any__T__sci_Map__sjs_js_Any__sjs_js_Any__sjs_js_Any__sjs_js_Array__sjs_js_Function3__sjs_js_Object("/maintain/season/:seasonId/competition/:id/singleton", null, null, x$29, null, null, null, x$35, null)];
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sjs_js_WrappedArray$();
  this.Lquizleague_web_maintain_competition_CompetitionModule$__f_routes = array$5
}
export { $c_Lquizleague_web_maintain_competition_CompetitionModule$ as $c_Lquizleague_web_maintain_competition_CompetitionModule$ };
$c_Lquizleague_web_maintain_competition_CompetitionModule$.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_Lquizleague_web_maintain_competition_CompetitionModule$.prototype.constructor = $c_Lquizleague_web_maintain_competition_CompetitionModule$;
/** @constructor */
function $h_Lquizleague_web_maintain_competition_CompetitionModule$() {
  /*<skip>*/
}
export { $h_Lquizleague_web_maintain_competition_CompetitionModule$ as $h_Lquizleague_web_maintain_competition_CompetitionModule$ };
$h_Lquizleague_web_maintain_competition_CompetitionModule$.prototype = $c_Lquizleague_web_maintain_competition_CompetitionModule$.prototype;
$c_Lquizleague_web_maintain_competition_CompetitionModule$.prototype.components__sjs_js_Array = (function() {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Module__components__sjs_js_Array(this)
});
$c_Lquizleague_web_maintain_competition_CompetitionModule$.prototype.modules__sjs_js_Array = (function() {
  return this.Lquizleague_web_maintain_competition_CompetitionModule$__f_modules
});
$c_Lquizleague_web_maintain_competition_CompetitionModule$.prototype.routes__sjs_js_Array = (function() {
  return this.Lquizleague_web_maintain_competition_CompetitionModule$__f_routes
});
var $d_Lquizleague_web_maintain_competition_CompetitionModule$ = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  Lquizleague_web_maintain_competition_CompetitionModule$: 0
}, false, "quizleague.web.maintain.competition.CompetitionModule$", {
  Lquizleague_web_maintain_competition_CompetitionModule$: 1,
  O: 1,
  Lquizleague_web_core_Module: 1
});
export { $d_Lquizleague_web_maintain_competition_CompetitionModule$ as $d_Lquizleague_web_maintain_competition_CompetitionModule$ };
$c_Lquizleague_web_maintain_competition_CompetitionModule$.prototype.$classData = $d_Lquizleague_web_maintain_competition_CompetitionModule$;
var $n_Lquizleague_web_maintain_competition_CompetitionModule$;
function $m_Lquizleague_web_maintain_competition_CompetitionModule$() {
  if ((!$n_Lquizleague_web_maintain_competition_CompetitionModule$)) {
    $n_Lquizleague_web_maintain_competition_CompetitionModule$ = new $c_Lquizleague_web_maintain_competition_CompetitionModule$()
  };
  return $n_Lquizleague_web_maintain_competition_CompetitionModule$
}
export { $m_Lquizleague_web_maintain_competition_CompetitionModule$ as $m_Lquizleague_web_maintain_competition_CompetitionModule$ };
/** @constructor */
function $c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsModule$() {
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsModule$__f_routes = null;
  $n_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsModule$ = this;
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_Predef$().s_Predef$__f_Map);
  var y = $m_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$();
  var array = [new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2("default", y)];
  var this$6 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sci_Map$MapBuilderImpl();
  if (this$6.sci_Map$MapBuilderImpl__f_switchedToHashMapBuilder) {
    var this$7 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this$6.sci_Map$MapBuilderImpl__f_hashMapBuilder);
    var i = 0;
    var len = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length);
    while ((i < len)) {
      var index = i;
      var arg1 = array[index];
      this$7.$plus$eq__T2__sci_HashMap$HashMapBuilder($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T2(arg1));
      i = ((1 + i) | 0)
    }
  } else {
    var i$1 = 0;
    var len$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length);
    while ((i$1 < len$1)) {
      var index$1 = i$1;
      var arg1$1 = array[index$1];
      this$6.$plus$eq__T2__sci_Map$MapBuilderImpl($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T2(arg1$1));
      i$1 = ((1 + i$1) | 0)
    }
  };
  var x$2 = this$6.result__sci_Map();
  var x$8 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_core_RouteConfig$().apply$default$8__sjs_js_Array();
  var $$x1 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_core_RouteConfig$().apply__T__sjs_js_Any__T__sci_Map__sjs_js_Any__sjs_js_Any__sjs_js_Any__sjs_js_Array__sjs_js_Function3__sjs_js_Object("/maintain/competitionstatistics", null, null, x$2, null, null, null, x$8, null);
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_Predef$().s_Predef$__f_Map);
  var y$1 = $m_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$();
  var array$1 = [new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2("default", y$1)];
  var this$13 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sci_Map$MapBuilderImpl();
  if (this$13.sci_Map$MapBuilderImpl__f_switchedToHashMapBuilder) {
    var this$14 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this$13.sci_Map$MapBuilderImpl__f_hashMapBuilder);
    var i$2 = 0;
    var len$2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array$1.length);
    while ((i$2 < len$2)) {
      var index$2 = i$2;
      var arg1$2 = array$1[index$2];
      this$14.$plus$eq__T2__sci_HashMap$HashMapBuilder($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T2(arg1$2));
      i$2 = ((1 + i$2) | 0)
    }
  } else {
    var i$3 = 0;
    var len$3 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array$1.length);
    while ((i$3 < len$3)) {
      var index$3 = i$3;
      var arg1$3 = array$1[index$3];
      this$13.$plus$eq__T2__sci_Map$MapBuilderImpl($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T2(arg1$3));
      i$3 = ((1 + i$3) | 0)
    }
  };
  var x$11 = this$13.result__sci_Map();
  var x$17 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_core_RouteConfig$().apply$default$8__sjs_js_Array();
  var array$2 = [$$x1, $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_core_RouteConfig$().apply__T__sjs_js_Any__T__sci_Map__sjs_js_Any__sjs_js_Any__sjs_js_Any__sjs_js_Array__sjs_js_Function3__sjs_js_Object("/maintain/competitionstatistics/:id", null, null, x$11, null, null, null, x$17, null)];
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sjs_js_WrappedArray$();
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsModule$__f_routes = array$2
}
export { $c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsModule$ as $c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsModule$ };
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsModule$.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsModule$.prototype.constructor = $c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsModule$;
/** @constructor */
function $h_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsModule$() {
  /*<skip>*/
}
export { $h_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsModule$ as $h_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsModule$ };
$h_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsModule$.prototype = $c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsModule$.prototype;
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsModule$.prototype.modules__sjs_js_Array = (function() {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Module__modules__sjs_js_Array(this)
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsModule$.prototype.components__sjs_js_Array = (function() {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Module__components__sjs_js_Array(this)
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsModule$.prototype.routes__sjs_js_Array = (function() {
  return this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsModule$__f_routes
});
var $d_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsModule$ = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsModule$: 0
}, false, "quizleague.web.maintain.competitionstatistics.CompetitionStatisticsModule$", {
  Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsModule$: 1,
  O: 1,
  Lquizleague_web_core_Module: 1
});
export { $d_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsModule$ as $d_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsModule$ };
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsModule$.prototype.$classData = $d_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsModule$;
var $n_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsModule$;
function $m_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsModule$() {
  if ((!$n_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsModule$)) {
    $n_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsModule$ = new $c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsModule$()
  };
  return $n_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsModule$
}
export { $m_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsModule$ as $m_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsModule$ };
/** @constructor */
function $c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$() {
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$__f_name = null;
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$__f_template = null;
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$__f_seasonService = null;
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$__f_teamService = null;
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$__f_competitionService = null;
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$__f_quizleague$web$core$Component$$addedSubs = null;
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$__f_quizleague$web$core$Component$$addedSubParams = null;
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$__f_quizleague$web$core$Component$$addedProps = null;
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$__f_quizleague$web$core$Component$$addedMethods = null;
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$__f_quizleague$web$core$Component$$addedComputed = null;
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$__f_quizleague$web$core$Component$$addedDataFn = null;
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$__f_quizleague$web$core$Component$$addedData = null;
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$__f_quizleague$web$core$Component$$addedComponents = null;
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$__f_quizleague$web$core$Component$$addedWatch = null;
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$__f_empty = null;
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$__f_quizleague$web$core$Component$$commonMethods = null;
  $n_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$ = this;
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__$init$__V(this);
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$__f_name = "comp-stats-result";
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$__f_template = (("\n      <v-layout column>\n        <v-layout row>\n         <v-text-field\n            label=\"Season Text\"\n            v-model=\"item.seasonText\"\n            :rules=" + $m_Lquizleague_web_maintain_component_TemplateElements$().valRequired__T__T("Season Text")) + "\n          ></v-text-field>\n          <v-select\n            label=\"Season\"\n            :items=\"seasons\"\n            v-model=\"item.season\"\n\n            >\n          </v-select>\n        </v-layout>\n        <v-layout row>\n         <v-text-field\n            label=\"Team Text\"\n            v-model=\"item.teamText\"\n            :disabled=\"item.team\"\n          ></v-text-field>\n          <v-select\n            label=\"Team\"\n            :items=\"teams\"\n            v-model=\"item.team\"\n            >\n          </v-select>\n          <v-select v-if=\"competitions\"\n            label=\"Competition\"\n            :items=\"competitions\"\n            v-model=\"item.competition\"\n            >\n          </v-select>\n          <div v-if=\"!competitions && item.competition\">\n          Competition : {{async(item.competition).name}}\n          </div>\n\n        </v-layout>\n      </v-layout>\n    ");
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$__f_seasonService = $m_Lquizleague_web_maintain_season_SeasonService$();
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$__f_teamService = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_maintain_team_TeamService$();
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$__f_competitionService = $m_Lquizleague_web_maintain_competition_CompetitionService$();
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__prop__T__V(this, "item");
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__prop__T__V(this, "competitionName");
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__data__T__O__V(this, "competitions", null);
  var array = [];
  var fn = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((c$2) => $m_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$().seasons__Lrxscalajs_Observable()));
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$__f_quizleague$web$core$Component$$addedSubs = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$__f_quizleague$web$core$Component$$addedSubs).$plus__T2__sci_Map(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2("seasons", fn));
  var $$x1 = this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$__f_quizleague$web$core$Component$$addedSubParams;
  var this$4 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sc_Seq$();
  var bf = this$4.scg_GenTraversableFactory__f_ReusableCBFInstance;
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(bf);
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sjs_js_WrappedArray$();
  var b = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$ct_sjs_js_WrappedArray__(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjs_js_WrappedArray());
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length);
  var i = 0;
  var len = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length);
  while ((i < len)) {
    var index = i;
    var arg1 = array[index];
    var x$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(arg1);
    var elem = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2(x$1, "seasons");
    b.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.push(elem);
    i = ((1 + i) | 0)
  };
  var this$7 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sci_List$();
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$__f_quizleague$web$core$Component$$addedSubParams = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_sci_List($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($$x1).$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O(b, this$7.scg_GenTraversableFactory__f_ReusableCBFInstance));
  var array$1 = [];
  var fn$1 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((c$3$2) => $m_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$().teams__Lrxscalajs_Observable()));
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$__f_quizleague$web$core$Component$$addedSubs = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$__f_quizleague$web$core$Component$$addedSubs).$plus__T2__sci_Map(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2("teams", fn$1));
  var $$x2 = this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$__f_quizleague$web$core$Component$$addedSubParams;
  var this$10 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sc_Seq$();
  var bf$1 = this$10.scg_GenTraversableFactory__f_ReusableCBFInstance;
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(bf$1);
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sjs_js_WrappedArray$();
  var b$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$ct_sjs_js_WrappedArray__(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjs_js_WrappedArray());
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array$1.length);
  var i$1 = 0;
  var len$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array$1.length);
  while ((i$1 < len$1)) {
    var index$1 = i$1;
    var arg1$1 = array$1[index$1];
    var x$1$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(arg1$1);
    var elem$1 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2(x$1$1, "teams");
    b$1.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.push(elem$1);
    i$1 = ((1 + i$1) | 0)
  };
  var this$13 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sci_List$();
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$__f_quizleague$web$core$Component$$addedSubParams = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_sci_List($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($$x2).$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O(b$1, this$13.scg_GenTraversableFactory__f_ReusableCBFInstance));
  var fn$2 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction2(((c$4$2, x$2) => {
    $m_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$().handleSeasonChange__Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent__O(c$4$2)
  }));
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__watch__T__F2__V(this, "item.season", fn$2);
  var fn$3 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction2(((c$5$2, x$3$2) => {
    if ((c$5$2.item.team !== null)) {
      c$5$2.item.teamText = null
    }
  }));
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__watch__T__F2__V(this, "item.team", fn$3)
}
export { $c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$ as $c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$ };
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$.prototype.constructor = $c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$;
/** @constructor */
function $h_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$() {
  /*<skip>*/
}
export { $h_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$ as $h_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$ };
$h_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$.prototype = $c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$.prototype;
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$.prototype.mounted__sjs_js_Function = (function() {
  return null
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$.prototype.beforeDestroy__sjs_js_Function = (function() {
  return null
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$.prototype.quizleague$web$core$Component$$addedSubs__sci_Map = (function() {
  return this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$__f_quizleague$web$core$Component$$addedSubs
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$.prototype.quizleague$web$core$Component$$addedSubs_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$__f_quizleague$web$core$Component$$addedSubs = x$1
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$.prototype.quizleague$web$core$Component$$addedSubParams__sci_List = (function() {
  return this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$__f_quizleague$web$core$Component$$addedSubParams
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$.prototype.quizleague$web$core$Component$$addedSubParams_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$__f_quizleague$web$core$Component$$addedSubParams = x$1
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$.prototype.quizleague$web$core$Component$$addedProps__sci_List = (function() {
  return this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$__f_quizleague$web$core$Component$$addedProps
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$.prototype.quizleague$web$core$Component$$addedProps_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$__f_quizleague$web$core$Component$$addedProps = x$1
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$.prototype.quizleague$web$core$Component$$addedMethods__sci_Map = (function() {
  return this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$__f_quizleague$web$core$Component$$addedMethods
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$.prototype.quizleague$web$core$Component$$addedMethods_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$__f_quizleague$web$core$Component$$addedMethods = x$1
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$.prototype.quizleague$web$core$Component$$addedComputed__sci_Map = (function() {
  return this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$__f_quizleague$web$core$Component$$addedComputed
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$.prototype.quizleague$web$core$Component$$addedComputed_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$__f_quizleague$web$core$Component$$addedComputed = x$1
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$.prototype.quizleague$web$core$Component$$addedDataFn__sci_Map = (function() {
  return this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$__f_quizleague$web$core$Component$$addedDataFn
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$.prototype.quizleague$web$core$Component$$addedDataFn_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$__f_quizleague$web$core$Component$$addedDataFn = x$1
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$.prototype.quizleague$web$core$Component$$addedData__sci_Map = (function() {
  return this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$__f_quizleague$web$core$Component$$addedData
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$.prototype.quizleague$web$core$Component$$addedData_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$__f_quizleague$web$core$Component$$addedData = x$1
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$.prototype.quizleague$web$core$Component$$addedComponents__sci_List = (function() {
  return this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$__f_quizleague$web$core$Component$$addedComponents
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$.prototype.quizleague$web$core$Component$$addedComponents_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$__f_quizleague$web$core$Component$$addedComponents = x$1
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$.prototype.quizleague$web$core$Component$$addedWatch__sci_Map = (function() {
  return this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$__f_quizleague$web$core$Component$$addedWatch
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$.prototype.quizleague$web$core$Component$$addedWatch_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$__f_quizleague$web$core$Component$$addedWatch = x$1
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$.prototype.empty__sjs_js_Object = (function() {
  return this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$__f_empty
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$.prototype.quizleague$web$core$Component$$commonMethods__sci_Map = (function() {
  return this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$__f_quizleague$web$core$Component$$commonMethods
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$.prototype.quizleague$web$core$Component$_setter_$empty_$eq__sjs_js_Object__V = (function(x$1) {
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$__f_empty = x$1
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$.prototype.quizleague$web$core$Component$_setter_$quizleague$web$core$Component$$commonMethods_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$__f_quizleague$web$core$Component$$commonMethods = x$1
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$.prototype.name__T = (function() {
  return this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$__f_name
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$.prototype.template__T = (function() {
  return this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$__f_template
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$.prototype.teams__Lrxscalajs_Observable = (function() {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_util_component_SelectUtils$().model__Lquizleague_web_service_GetService__F1__Lrxscalajs_Observable(this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$__f_teamService, new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((x$2$2) => $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(x$2$2.name))))
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$.prototype.seasons__Lrxscalajs_Observable = (function() {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_util_component_SelectUtils$().model__Lquizleague_web_service_GetService__F1__Lrxscalajs_Observable(this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$__f_seasonService, new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((x$3$2) => $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(x$3$2.toText()))))
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$.prototype.handleSeasonChange__Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent__O = (function(c) {
  if ((c.item.season !== null)) {
    var qual$1 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$as_Lrxscalajs_Observable(c.item.season.obs);
    var x$4 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((s$2) => {
      c.item.seasonText = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(s$2.toText());
      c.item.competition = null;
      var qual$2 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_util_component_SelectUtils$().model__Lrxscalajs_Observable__Lquizleague_web_service_GetService__F1__Lrxscalajs_Observable($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$as_Lrxscalajs_Observable(s$2.competition)).map__F1__Lrxscalajs_Observable(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((x$4$2) => {
        var array = [];
        var i = 0;
        var len = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(x$4$2.length);
        while ((i < len)) {
          var index = i;
          var arg1 = x$4$2[index];
          if ((($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(arg1.name) === $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(c.competitionName)) !== false)) {
            array.push(arg1)
          };
          i = ((1 + i) | 0)
        };
        return array
      }))), $m_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$().Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$__f_competitionService, new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((x$6$2) => $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(x$6$2.name))));
      var x$1 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((cs$2) => {
        c.competitions = cs$2
      }));
      var x$2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(qual$2).subscribe$default$2__F1();
      var x$3 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(qual$2).subscribe$default$3__F0();
      $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(qual$2).subscribe__F1__F1__F0__Lrxscalajs_subscription_Subscription(x$1, x$2, x$3)
    }));
    var x$5 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(qual$1).subscribe$default$2__F1();
    var x$6 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(qual$1).subscribe$default$3__F0();
    return $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(qual$1).subscribe__F1__F1__F0__Lrxscalajs_subscription_Subscription(x$4, x$5, x$6)
  } else {
    return (void 0)
  }
});
var $d_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$ = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$: 0
}, false, "quizleague.web.maintain.competitionstatistics.CompetitionStatisticsResultComponent$", {
  Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$: 1,
  O: 1,
  Lquizleague_web_core_Component: 1
});
export { $d_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$ as $d_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$ };
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$.prototype.$classData = $d_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$;
var $n_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$;
function $m_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$() {
  if ((!$n_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$)) {
    $n_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$ = new $c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$()
  };
  return $n_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$
}
export { $m_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$ as $m_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$ };
function $f_Lquizleague_web_maintain_component_ItemComponentConfig__editText__Lquizleague_web_maintain_component_ItemComponent__T__V($thiz, c, textId) {
  c.$router.push(("/maintain/text/" + textId))
}
export { $f_Lquizleague_web_maintain_component_ItemComponentConfig__editText__Lquizleague_web_maintain_component_ItemComponent__T__V as $f_Lquizleague_web_maintain_component_ItemComponentConfig__editText__Lquizleague_web_maintain_component_ItemComponent__T__V };
function $f_Lquizleague_web_maintain_component_ItemComponentConfig__obsFromParam__Lquizleague_web_maintain_component_ItemComponent__T__Lquizleague_web_service_GetService__Lrxscalajs_Observable($thiz, c, param, service) {
  var this$4 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(service);
  var this$3 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(service);
  var parentKey = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(c.pkey);
  var dict = c.$route.params;
  if ((!$j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uZ($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sjs_js_WrappedDictionary$Cache$().sjs_js_WrappedDictionary$Cache$__f_safeHasOwnProperty.call(dict, param)))) {
    throw $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$ct_ju_NoSuchElementException__T__(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_ju_NoSuchElementException(), ("key not found: " + param))
  };
  var id = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(dict[param]);
  var key = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__key__T__T__Lquizleague_web_model_Key(this$3, parentKey, id);
  return $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__get__Lquizleague_web_model_Key__Lrxscalajs_Observable(this$4, key)).map__F1__Lrxscalajs_Observable(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((i$2) => $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$as_Lquizleague_web_service_PutService(service)).cache__Lquizleague_web_model_Model__Lquizleague_web_model_Model(i$2))))
}
export { $f_Lquizleague_web_maintain_component_ItemComponentConfig__obsFromParam__Lquizleague_web_maintain_component_ItemComponent__T__Lquizleague_web_service_GetService__Lrxscalajs_Observable as $f_Lquizleague_web_maintain_component_ItemComponentConfig__obsFromParam__Lquizleague_web_maintain_component_ItemComponent__T__Lquizleague_web_service_GetService__Lrxscalajs_Observable };
function $f_Lquizleague_web_maintain_component_ItemComponentConfig__save__Lquizleague_web_maintain_component_ItemComponent__V($thiz, c) {
  var item = c.item;
  var this$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($thiz.service__Lquizleague_web_service_GetService());
  var parentKey = $thiz.parentKey__Lquizleague_web_maintain_component_ItemComponent__T(c);
  var id = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(item.id);
  item.key = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__key__T__T__Lquizleague_web_model_Key(this$1, parentKey, id);
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$as_Lquizleague_web_service_PutService($thiz.service__Lquizleague_web_service_GetService())).save__Lquizleague_web_model_Model__Lrxscalajs_Observable(c.item);
  c.$router.back()
}
export { $f_Lquizleague_web_maintain_component_ItemComponentConfig__save__Lquizleague_web_maintain_component_ItemComponent__V as $f_Lquizleague_web_maintain_component_ItemComponentConfig__save__Lquizleague_web_maintain_component_ItemComponent__V };
function $f_Lquizleague_web_maintain_component_ItemComponentConfig__cancel__Lquizleague_web_maintain_component_ItemComponent__V($thiz, c) {
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($thiz.service__Lquizleague_web_service_GetService()).flush__V();
  c.$router.back()
}
export { $f_Lquizleague_web_maintain_component_ItemComponentConfig__cancel__Lquizleague_web_maintain_component_ItemComponent__V as $f_Lquizleague_web_maintain_component_ItemComponentConfig__cancel__Lquizleague_web_maintain_component_ItemComponent__V };
function $f_Lquizleague_web_maintain_component_ItemComponentConfig__$init$__V($thiz) {
  $thiz.quizleague$web$maintain$component$ItemComponentConfig$_setter_$paramName_$eq__T__V("id");
  var array = [];
  var fn = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((c$2) => {
    var param = $thiz.paramName__T();
    var service = $thiz.service__Lquizleague_web_service_GetService();
    return $f_Lquizleague_web_maintain_component_ItemComponentConfig__obsFromParam__Lquizleague_web_maintain_component_ItemComponent__T__Lquizleague_web_service_GetService__Lrxscalajs_Observable($thiz, c$2, param, service)
  }));
  $thiz.quizleague$web$core$Component$$addedSubs_$eq__sci_Map__V($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($thiz.quizleague$web$core$Component$$addedSubs__sci_Map()).$plus__T2__sci_Map(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2("item", fn)));
  var $$x1 = $thiz.quizleague$web$core$Component$$addedSubParams__sci_List();
  var this$4 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sc_Seq$();
  var bf = this$4.scg_GenTraversableFactory__f_ReusableCBFInstance;
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(bf);
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sjs_js_WrappedArray$();
  var b = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$ct_sjs_js_WrappedArray__(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjs_js_WrappedArray());
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length);
  var i = 0;
  var len = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length);
  while ((i < len)) {
    var index = i;
    var arg1 = array[index];
    var x$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(arg1);
    var elem = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2(x$1, "item");
    b.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.push(elem);
    i = ((1 + i) | 0)
  };
  var this$7 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sci_List$();
  $thiz.quizleague$web$core$Component$$addedSubParams_$eq__sci_List__V($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_sci_List($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($$x1).$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O(b, this$7.scg_GenTraversableFactory__f_ReusableCBFInstance)));
  var fn$1 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_sjs_js_ThisFunction$().fromFunction1__F1__sjs_js_ThisFunction0(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((c$3$2) => {
    $thiz.save__Lquizleague_web_maintain_component_ItemComponent__V(c$3$2)
  })));
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__method__T__sjs_js_Function__V($thiz, "save", fn$1);
  var fn$2 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_sjs_js_ThisFunction$().fromFunction1__F1__sjs_js_ThisFunction0(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((c$4$2) => {
    $f_Lquizleague_web_maintain_component_ItemComponentConfig__cancel__Lquizleague_web_maintain_component_ItemComponent__V($thiz, c$4$2)
  })));
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__method__T__sjs_js_Function__V($thiz, "cancel", fn$2);
  var fn$3 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_sjs_js_ThisFunction$().fromFunction2__F2__sjs_js_ThisFunction1(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction2(((c$5$2, textId$2) => {
    var textId = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(textId$2);
    $f_Lquizleague_web_maintain_component_ItemComponentConfig__editText__Lquizleague_web_maintain_component_ItemComponent__T__V($thiz, c$5$2, textId)
  })));
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__method__T__sjs_js_Function__V($thiz, "editText", fn$3);
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__data__T__O__V($thiz, "valid", false);
  var fn$4 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((c$6$2) => $thiz.parentKey__Lquizleague_web_maintain_component_ItemComponent__T(c$6$2)));
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__data__T__F1__V($thiz, "pkey", fn$4)
}
export { $f_Lquizleague_web_maintain_component_ItemComponentConfig__$init$__V as $f_Lquizleague_web_maintain_component_ItemComponentConfig__$init$__V };
function $f_Lquizleague_web_maintain_component_ItemListComponentConfig__sort__sjs_js_Array__sjs_js_Array($thiz, items) {
  var f = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((x$1$2) => $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(x$1$2.id)));
  var ord = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_s_math_Ordering$String$();
  var ord$1 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_s_math_Ordering$$anon$1(ord, f);
  var len = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(items.length);
  var array = [];
  if ((len === 1)) {
    var i = 0;
    var len$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(items.length);
    while ((i < len$1)) {
      var index = i;
      var arg1 = items[index];
      array.push(arg1);
      i = ((1 + i) | 0)
    }
  } else if ((len > 1)) {
    var arr = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$ac_O(len);
    var elem = 0;
    elem = 0;
    var i$1 = 0;
    var len$2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(items.length);
    while ((i$1 < len$2)) {
      var index$1 = i$1;
      var arg1$1 = items[index$1];
      $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(arr).set(elem, arg1$1);
      elem = ((1 + elem) | 0);
      i$1 = ((1 + i$1) | 0)
    };
    $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_ju_Arrays$().sort__AO__ju_Comparator__V(arr, ord$1);
    elem = 0;
    while ((elem < $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(arr).u.length)) {
      var elem$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(arr).get(elem);
      array.push(elem$1);
      elem = ((1 + elem) | 0)
    }
  };
  return array
}
export { $f_Lquizleague_web_maintain_component_ItemListComponentConfig__sort__sjs_js_Array__sjs_js_Array as $f_Lquizleague_web_maintain_component_ItemListComponentConfig__sort__sjs_js_Array__sjs_js_Array };
function $f_Lquizleague_web_maintain_component_ItemListComponentConfig__$init$__V($thiz) {
  var array = [];
  var fn = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((c$2) => {
    var this$5 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($thiz.service__Lquizleague_web_service_GetService());
    $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($thiz.service__Lquizleague_web_service_GetService());
    var parentKey = null;
    return $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__list__Lquizleague_web_model_Key__Lrxscalajs_Observable(this$5, parentKey)).map__F1__Lrxscalajs_Observable(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((items$2) => $thiz.sort__sjs_js_Array__sjs_js_Array(items$2))))
  }));
  $thiz.quizleague$web$core$Component$$addedSubs_$eq__sci_Map__V($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($thiz.quizleague$web$core$Component$$addedSubs__sci_Map()).$plus__T2__sci_Map(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2("items", fn)));
  var $$x1 = $thiz.quizleague$web$core$Component$$addedSubParams__sci_List();
  var this$6 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sc_Seq$();
  var bf = this$6.scg_GenTraversableFactory__f_ReusableCBFInstance;
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(bf);
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sjs_js_WrappedArray$();
  var b = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$ct_sjs_js_WrappedArray__(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjs_js_WrappedArray());
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length);
  var i = 0;
  var len = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length);
  while ((i < len)) {
    var index = i;
    var arg1 = array[index];
    var x$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(arg1);
    var elem = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2(x$1, "items");
    b.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.push(elem);
    i = ((1 + i) | 0)
  };
  var this$9 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sci_List$();
  $thiz.quizleague$web$core$Component$$addedSubParams_$eq__sci_List__V($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_sci_List($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($$x1).$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O(b, this$9.scg_GenTraversableFactory__f_ReusableCBFInstance)));
  var fn$1 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_sjs_js_ThisFunction$().fromFunction1__F1__sjs_js_ThisFunction0(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((c$3$2) => {
    var i$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$as_Lquizleague_web_service_PutService($thiz.service__Lquizleague_web_service_GetService())).instance__Lquizleague_web_model_Model();
    c$3$2.$router.push((($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$as_Lquizleague_web_names_ComponentNames($thiz)).typeName__T() + "/") + $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(i$1.id)))
  })));
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__method__T__sjs_js_Function__V($thiz, "add", fn$1)
}
export { $f_Lquizleague_web_maintain_component_ItemListComponentConfig__$init$__V as $f_Lquizleague_web_maintain_component_ItemListComponentConfig__$init$__V };
/** @constructor */
function $c_Lquizleague_web_maintain_database_DatabaseModule$() {
  this.Lquizleague_web_maintain_database_DatabaseModule$__f_routes = null;
  $n_Lquizleague_web_maintain_database_DatabaseModule$ = this;
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_Predef$().s_Predef$__f_Map);
  var y = $m_Lquizleague_web_maintain_database_DatabaseComponent$();
  var array = [new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2("default", y)];
  var this$6 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sci_Map$MapBuilderImpl();
  if (this$6.sci_Map$MapBuilderImpl__f_switchedToHashMapBuilder) {
    var this$7 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this$6.sci_Map$MapBuilderImpl__f_hashMapBuilder);
    var i = 0;
    var len = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length);
    while ((i < len)) {
      var index = i;
      var arg1 = array[index];
      this$7.$plus$eq__T2__sci_HashMap$HashMapBuilder($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T2(arg1));
      i = ((1 + i) | 0)
    }
  } else {
    var i$1 = 0;
    var len$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length);
    while ((i$1 < len$1)) {
      var index$1 = i$1;
      var arg1$1 = array[index$1];
      this$6.$plus$eq__T2__sci_Map$MapBuilderImpl($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T2(arg1$1));
      i$1 = ((1 + i$1) | 0)
    }
  };
  var x$2 = this$6.result__sci_Map();
  var x$8 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_core_RouteConfig$().apply$default$8__sjs_js_Array();
  var array$1 = [$j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_core_RouteConfig$().apply__T__sjs_js_Any__T__sci_Map__sjs_js_Any__sjs_js_Any__sjs_js_Any__sjs_js_Array__sjs_js_Function3__sjs_js_Object("/maintain/database", null, null, x$2, null, null, null, x$8, null)];
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sjs_js_WrappedArray$();
  this.Lquizleague_web_maintain_database_DatabaseModule$__f_routes = array$1
}
export { $c_Lquizleague_web_maintain_database_DatabaseModule$ as $c_Lquizleague_web_maintain_database_DatabaseModule$ };
$c_Lquizleague_web_maintain_database_DatabaseModule$.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_Lquizleague_web_maintain_database_DatabaseModule$.prototype.constructor = $c_Lquizleague_web_maintain_database_DatabaseModule$;
/** @constructor */
function $h_Lquizleague_web_maintain_database_DatabaseModule$() {
  /*<skip>*/
}
export { $h_Lquizleague_web_maintain_database_DatabaseModule$ as $h_Lquizleague_web_maintain_database_DatabaseModule$ };
$h_Lquizleague_web_maintain_database_DatabaseModule$.prototype = $c_Lquizleague_web_maintain_database_DatabaseModule$.prototype;
$c_Lquizleague_web_maintain_database_DatabaseModule$.prototype.modules__sjs_js_Array = (function() {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Module__modules__sjs_js_Array(this)
});
$c_Lquizleague_web_maintain_database_DatabaseModule$.prototype.components__sjs_js_Array = (function() {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Module__components__sjs_js_Array(this)
});
$c_Lquizleague_web_maintain_database_DatabaseModule$.prototype.routes__sjs_js_Array = (function() {
  return this.Lquizleague_web_maintain_database_DatabaseModule$__f_routes
});
var $d_Lquizleague_web_maintain_database_DatabaseModule$ = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  Lquizleague_web_maintain_database_DatabaseModule$: 0
}, false, "quizleague.web.maintain.database.DatabaseModule$", {
  Lquizleague_web_maintain_database_DatabaseModule$: 1,
  O: 1,
  Lquizleague_web_core_Module: 1
});
export { $d_Lquizleague_web_maintain_database_DatabaseModule$ as $d_Lquizleague_web_maintain_database_DatabaseModule$ };
$c_Lquizleague_web_maintain_database_DatabaseModule$.prototype.$classData = $d_Lquizleague_web_maintain_database_DatabaseModule$;
var $n_Lquizleague_web_maintain_database_DatabaseModule$;
function $m_Lquizleague_web_maintain_database_DatabaseModule$() {
  if ((!$n_Lquizleague_web_maintain_database_DatabaseModule$)) {
    $n_Lquizleague_web_maintain_database_DatabaseModule$ = new $c_Lquizleague_web_maintain_database_DatabaseModule$()
  };
  return $n_Lquizleague_web_maintain_database_DatabaseModule$
}
export { $m_Lquizleague_web_maintain_database_DatabaseModule$ as $m_Lquizleague_web_maintain_database_DatabaseModule$ };
/** @constructor */
function $c_Lquizleague_web_maintain_fixtures_FixtureComponent$() {
  this.Lquizleague_web_maintain_fixtures_FixtureComponent$__f_name = null;
  this.Lquizleague_web_maintain_fixtures_FixtureComponent$__f_template = null;
  this.Lquizleague_web_maintain_fixtures_FixtureComponent$__f_quizleague$web$core$Component$$addedSubs = null;
  this.Lquizleague_web_maintain_fixtures_FixtureComponent$__f_quizleague$web$core$Component$$addedSubParams = null;
  this.Lquizleague_web_maintain_fixtures_FixtureComponent$__f_quizleague$web$core$Component$$addedProps = null;
  this.Lquizleague_web_maintain_fixtures_FixtureComponent$__f_quizleague$web$core$Component$$addedMethods = null;
  this.Lquizleague_web_maintain_fixtures_FixtureComponent$__f_quizleague$web$core$Component$$addedComputed = null;
  this.Lquizleague_web_maintain_fixtures_FixtureComponent$__f_quizleague$web$core$Component$$addedDataFn = null;
  this.Lquizleague_web_maintain_fixtures_FixtureComponent$__f_quizleague$web$core$Component$$addedData = null;
  this.Lquizleague_web_maintain_fixtures_FixtureComponent$__f_quizleague$web$core$Component$$addedComponents = null;
  this.Lquizleague_web_maintain_fixtures_FixtureComponent$__f_quizleague$web$core$Component$$addedWatch = null;
  this.Lquizleague_web_maintain_fixtures_FixtureComponent$__f_empty = null;
  this.Lquizleague_web_maintain_fixtures_FixtureComponent$__f_quizleague$web$core$Component$$commonMethods = null;
  $n_Lquizleague_web_maintain_fixtures_FixtureComponent$ = this;
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__$init$__V(this);
  this.Lquizleague_web_maintain_fixtures_FixtureComponent$__f_name = "fixture";
  this.Lquizleague_web_maintain_fixtures_FixtureComponent$__f_template = "\n    <v-layout column v-if=\"fx\">\n      <v-layout row>\n        <v-btn style=\"top:-14px;\" icon v-if=\"fx.result\" v-on:click=\"showResult = !showResult\"><v-icon>mdi-check</v-icon></v-btn>\n        <v-btn style=\"top:-14px;\" icon v-if=\"!fx.result\" v-on:click=\"addResult()\"><v-icon>mdi-plus</v-icon></v-btn>\n        <span >{{async(fx.home).name}} - {{async(fx.away).name}} @ {{async(fx.venue).name}}</span>\n      </v-layout>\n      <v-layout row v-if=\"showResult && fx.result\">\n        <span style=\"position:relative;top:28px;\"><h4>Result :&nbsp;</h4></span>\n        <v-text-field label=\"Home Score\" v-model.number=\"fx.result.homeScore\" type=\"number\"></v-text-field>\n        <v-text-field label=\"Away Score\" v-model.number=\"fx.result.awayScore\" type=\"number\"></v-text-field>\n        <v-btn icon fab color=\"primary\" v-on:click=\"save(fx)\"><v-icon>mdi-floppy</v-icon>\n      </v-layout>\n      <v-layout row v-if=\"showResult && fx.result.reports\">\n        <span style=\"position:relative;top:14px;\"><h4>Reports :&nbsp;</h4></span><v-btn text v-on:click=\"editText(report.text.id)\" v-for=\"report in async(fx.result.reports).reports\" :key=\"report.text.id\">{{async(report.team).shortName}}...</v-btn>\n      </v-layout>\n      <v-divider></v-divider>\n      <span>&nbsp</span>\n    </v-layout>\n";
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__data__T__O__V(this, "showResult", false);
  var fn = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((c$2) => {
    $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($as_Lquizleague_web_maintain_util_TeamManager(c$2.teamManager)).take__Lquizleague_web_util_rx_RefObservable__Lquizleague_web_util_rx_RefObservable(c$2.fixture.home);
    $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($as_Lquizleague_web_maintain_util_TeamManager(c$2.teamManager)).take__Lquizleague_web_util_rx_RefObservable__Lquizleague_web_util_rx_RefObservable(c$2.fixture.away);
    return c$2.fixture
  }));
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__data__T__F1__V(this, "fx", fn);
  var array = ["fixture", "fixtures", "teamManager"];
  var names = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$ct_sjs_js_WrappedArray__sjs_js_Array__(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjs_js_WrappedArray(), array);
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__props__sc_Seq__V(this, names);
  var fn$1 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_sjs_js_ThisFunction$().fromFunction2__F2__sjs_js_ThisFunction1(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction2(((c$3$2, textId$2) => {
    var textId = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(textId$2);
    $m_Lquizleague_web_maintain_fixtures_FixtureComponent$().editText__Lquizleague_web_maintain_fixtures_FixtureComponent__T__V(c$3$2, textId)
  })));
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__method__T__sjs_js_Function__V(this, "editText", fn$1);
  var fn$2 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_sjs_js_ThisFunction$().fromFunction1__F1__sjs_js_ThisFunction0(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((c$4$2) => {
    $m_Lquizleague_web_maintain_fixtures_FixtureComponent$().addResult__Lquizleague_web_maintain_fixtures_FixtureComponent__V(c$4$2)
  })));
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__method__T__sjs_js_Function__V(this, "addResult", fn$2);
  var fn$3 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sjs_js_Any$().fromFunction1__F1__sjs_js_Function1(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((fixture$2) => {
    $m_Lquizleague_web_maintain_fixtures_FixtureComponent$();
    var this$6 = $m_Lquizleague_web_maintain_fixtures_FixtureService$();
    return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_PutService__save__Lquizleague_web_model_Model__Lrxscalajs_Observable(this$6, fixture$2)
  })));
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__method__T__sjs_js_Function__V(this, "save", fn$3)
}
export { $c_Lquizleague_web_maintain_fixtures_FixtureComponent$ as $c_Lquizleague_web_maintain_fixtures_FixtureComponent$ };
$c_Lquizleague_web_maintain_fixtures_FixtureComponent$.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_Lquizleague_web_maintain_fixtures_FixtureComponent$.prototype.constructor = $c_Lquizleague_web_maintain_fixtures_FixtureComponent$;
/** @constructor */
function $h_Lquizleague_web_maintain_fixtures_FixtureComponent$() {
  /*<skip>*/
}
export { $h_Lquizleague_web_maintain_fixtures_FixtureComponent$ as $h_Lquizleague_web_maintain_fixtures_FixtureComponent$ };
$h_Lquizleague_web_maintain_fixtures_FixtureComponent$.prototype = $c_Lquizleague_web_maintain_fixtures_FixtureComponent$.prototype;
$c_Lquizleague_web_maintain_fixtures_FixtureComponent$.prototype.mounted__sjs_js_Function = (function() {
  return null
});
$c_Lquizleague_web_maintain_fixtures_FixtureComponent$.prototype.beforeDestroy__sjs_js_Function = (function() {
  return null
});
$c_Lquizleague_web_maintain_fixtures_FixtureComponent$.prototype.quizleague$web$core$Component$$addedSubs__sci_Map = (function() {
  return this.Lquizleague_web_maintain_fixtures_FixtureComponent$__f_quizleague$web$core$Component$$addedSubs
});
$c_Lquizleague_web_maintain_fixtures_FixtureComponent$.prototype.quizleague$web$core$Component$$addedSubs_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_fixtures_FixtureComponent$__f_quizleague$web$core$Component$$addedSubs = x$1
});
$c_Lquizleague_web_maintain_fixtures_FixtureComponent$.prototype.quizleague$web$core$Component$$addedSubParams__sci_List = (function() {
  return this.Lquizleague_web_maintain_fixtures_FixtureComponent$__f_quizleague$web$core$Component$$addedSubParams
});
$c_Lquizleague_web_maintain_fixtures_FixtureComponent$.prototype.quizleague$web$core$Component$$addedSubParams_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_fixtures_FixtureComponent$__f_quizleague$web$core$Component$$addedSubParams = x$1
});
$c_Lquizleague_web_maintain_fixtures_FixtureComponent$.prototype.quizleague$web$core$Component$$addedProps__sci_List = (function() {
  return this.Lquizleague_web_maintain_fixtures_FixtureComponent$__f_quizleague$web$core$Component$$addedProps
});
$c_Lquizleague_web_maintain_fixtures_FixtureComponent$.prototype.quizleague$web$core$Component$$addedProps_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_fixtures_FixtureComponent$__f_quizleague$web$core$Component$$addedProps = x$1
});
$c_Lquizleague_web_maintain_fixtures_FixtureComponent$.prototype.quizleague$web$core$Component$$addedMethods__sci_Map = (function() {
  return this.Lquizleague_web_maintain_fixtures_FixtureComponent$__f_quizleague$web$core$Component$$addedMethods
});
$c_Lquizleague_web_maintain_fixtures_FixtureComponent$.prototype.quizleague$web$core$Component$$addedMethods_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_fixtures_FixtureComponent$__f_quizleague$web$core$Component$$addedMethods = x$1
});
$c_Lquizleague_web_maintain_fixtures_FixtureComponent$.prototype.quizleague$web$core$Component$$addedComputed__sci_Map = (function() {
  return this.Lquizleague_web_maintain_fixtures_FixtureComponent$__f_quizleague$web$core$Component$$addedComputed
});
$c_Lquizleague_web_maintain_fixtures_FixtureComponent$.prototype.quizleague$web$core$Component$$addedComputed_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_fixtures_FixtureComponent$__f_quizleague$web$core$Component$$addedComputed = x$1
});
$c_Lquizleague_web_maintain_fixtures_FixtureComponent$.prototype.quizleague$web$core$Component$$addedDataFn__sci_Map = (function() {
  return this.Lquizleague_web_maintain_fixtures_FixtureComponent$__f_quizleague$web$core$Component$$addedDataFn
});
$c_Lquizleague_web_maintain_fixtures_FixtureComponent$.prototype.quizleague$web$core$Component$$addedDataFn_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_fixtures_FixtureComponent$__f_quizleague$web$core$Component$$addedDataFn = x$1
});
$c_Lquizleague_web_maintain_fixtures_FixtureComponent$.prototype.quizleague$web$core$Component$$addedData__sci_Map = (function() {
  return this.Lquizleague_web_maintain_fixtures_FixtureComponent$__f_quizleague$web$core$Component$$addedData
});
$c_Lquizleague_web_maintain_fixtures_FixtureComponent$.prototype.quizleague$web$core$Component$$addedData_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_fixtures_FixtureComponent$__f_quizleague$web$core$Component$$addedData = x$1
});
$c_Lquizleague_web_maintain_fixtures_FixtureComponent$.prototype.quizleague$web$core$Component$$addedComponents__sci_List = (function() {
  return this.Lquizleague_web_maintain_fixtures_FixtureComponent$__f_quizleague$web$core$Component$$addedComponents
});
$c_Lquizleague_web_maintain_fixtures_FixtureComponent$.prototype.quizleague$web$core$Component$$addedComponents_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_fixtures_FixtureComponent$__f_quizleague$web$core$Component$$addedComponents = x$1
});
$c_Lquizleague_web_maintain_fixtures_FixtureComponent$.prototype.quizleague$web$core$Component$$addedWatch__sci_Map = (function() {
  return this.Lquizleague_web_maintain_fixtures_FixtureComponent$__f_quizleague$web$core$Component$$addedWatch
});
$c_Lquizleague_web_maintain_fixtures_FixtureComponent$.prototype.quizleague$web$core$Component$$addedWatch_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_fixtures_FixtureComponent$__f_quizleague$web$core$Component$$addedWatch = x$1
});
$c_Lquizleague_web_maintain_fixtures_FixtureComponent$.prototype.empty__sjs_js_Object = (function() {
  return this.Lquizleague_web_maintain_fixtures_FixtureComponent$__f_empty
});
$c_Lquizleague_web_maintain_fixtures_FixtureComponent$.prototype.quizleague$web$core$Component$$commonMethods__sci_Map = (function() {
  return this.Lquizleague_web_maintain_fixtures_FixtureComponent$__f_quizleague$web$core$Component$$commonMethods
});
$c_Lquizleague_web_maintain_fixtures_FixtureComponent$.prototype.quizleague$web$core$Component$_setter_$empty_$eq__sjs_js_Object__V = (function(x$1) {
  this.Lquizleague_web_maintain_fixtures_FixtureComponent$__f_empty = x$1
});
$c_Lquizleague_web_maintain_fixtures_FixtureComponent$.prototype.quizleague$web$core$Component$_setter_$quizleague$web$core$Component$$commonMethods_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_fixtures_FixtureComponent$__f_quizleague$web$core$Component$$commonMethods = x$1
});
$c_Lquizleague_web_maintain_fixtures_FixtureComponent$.prototype.name__T = (function() {
  return this.Lquizleague_web_maintain_fixtures_FixtureComponent$__f_name
});
$c_Lquizleague_web_maintain_fixtures_FixtureComponent$.prototype.template__T = (function() {
  return this.Lquizleague_web_maintain_fixtures_FixtureComponent$__f_template
});
$c_Lquizleague_web_maintain_fixtures_FixtureComponent$.prototype.editText__Lquizleague_web_maintain_fixtures_FixtureComponent__T__V = (function(c, textId) {
  c.$router.push(("/maintain/text/" + textId))
});
$c_Lquizleague_web_maintain_fixtures_FixtureComponent$.prototype.addResult__Lquizleague_web_maintain_fixtures_FixtureComponent__V = (function(c) {
  c.fx = $m_Lquizleague_web_maintain_fixtures_FixtureService$().addResult__Lquizleague_web_model_Fixture__Lquizleague_web_model_Fixture(c.fx);
  var this$1 = $m_Lquizleague_web_maintain_fixtures_FixtureService$();
  var item = c.fx;
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_PutService__save__Lquizleague_web_model_Model__Lrxscalajs_Observable(this$1, item);
  c.showResult = true
});
var $d_Lquizleague_web_maintain_fixtures_FixtureComponent$ = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  Lquizleague_web_maintain_fixtures_FixtureComponent$: 0
}, false, "quizleague.web.maintain.fixtures.FixtureComponent$", {
  Lquizleague_web_maintain_fixtures_FixtureComponent$: 1,
  O: 1,
  Lquizleague_web_core_Component: 1
});
export { $d_Lquizleague_web_maintain_fixtures_FixtureComponent$ as $d_Lquizleague_web_maintain_fixtures_FixtureComponent$ };
$c_Lquizleague_web_maintain_fixtures_FixtureComponent$.prototype.$classData = $d_Lquizleague_web_maintain_fixtures_FixtureComponent$;
var $n_Lquizleague_web_maintain_fixtures_FixtureComponent$;
function $m_Lquizleague_web_maintain_fixtures_FixtureComponent$() {
  if ((!$n_Lquizleague_web_maintain_fixtures_FixtureComponent$)) {
    $n_Lquizleague_web_maintain_fixtures_FixtureComponent$ = new $c_Lquizleague_web_maintain_fixtures_FixtureComponent$()
  };
  return $n_Lquizleague_web_maintain_fixtures_FixtureComponent$
}
export { $m_Lquizleague_web_maintain_fixtures_FixtureComponent$ as $m_Lquizleague_web_maintain_fixtures_FixtureComponent$ };
/** @constructor */
function $c_Lquizleague_web_maintain_fixtures_FixturesModule$() {
  this.Lquizleague_web_maintain_fixtures_FixturesModule$__f_routes = null;
  $n_Lquizleague_web_maintain_fixtures_FixturesModule$ = this;
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_Predef$().s_Predef$__f_Map);
  var y = $m_Lquizleague_web_maintain_fixtures_FixturesListComponent$();
  var array = [new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2("default", y)];
  var this$6 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sci_Map$MapBuilderImpl();
  if (this$6.sci_Map$MapBuilderImpl__f_switchedToHashMapBuilder) {
    var this$7 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this$6.sci_Map$MapBuilderImpl__f_hashMapBuilder);
    var i = 0;
    var len = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length);
    while ((i < len)) {
      var index = i;
      var arg1 = array[index];
      this$7.$plus$eq__T2__sci_HashMap$HashMapBuilder($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T2(arg1));
      i = ((1 + i) | 0)
    }
  } else {
    var i$1 = 0;
    var len$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length);
    while ((i$1 < len$1)) {
      var index$1 = i$1;
      var arg1$1 = array[index$1];
      this$6.$plus$eq__T2__sci_Map$MapBuilderImpl($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T2(arg1$1));
      i$1 = ((1 + i$1) | 0)
    }
  };
  var x$2 = this$6.result__sci_Map();
  var x$8 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_core_RouteConfig$().apply$default$8__sjs_js_Array();
  var $$x1 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_core_RouteConfig$().apply__T__sjs_js_Any__T__sci_Map__sjs_js_Any__sjs_js_Any__sjs_js_Any__sjs_js_Array__sjs_js_Function3__sjs_js_Object("/maintain/season/:seasonId/competition/:id/fixtures", null, null, x$2, null, null, null, x$8, null);
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_Predef$().s_Predef$__f_Map);
  var y$1 = $m_Lquizleague_web_maintain_fixtures_FixturesComponent$();
  var array$1 = [new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2("default", y$1)];
  var this$13 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sci_Map$MapBuilderImpl();
  if (this$13.sci_Map$MapBuilderImpl__f_switchedToHashMapBuilder) {
    var this$14 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this$13.sci_Map$MapBuilderImpl__f_hashMapBuilder);
    var i$2 = 0;
    var len$2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array$1.length);
    while ((i$2 < len$2)) {
      var index$2 = i$2;
      var arg1$2 = array$1[index$2];
      this$14.$plus$eq__T2__sci_HashMap$HashMapBuilder($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T2(arg1$2));
      i$2 = ((1 + i$2) | 0)
    }
  } else {
    var i$3 = 0;
    var len$3 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array$1.length);
    while ((i$3 < len$3)) {
      var index$3 = i$3;
      var arg1$3 = array$1[index$3];
      this$13.$plus$eq__T2__sci_Map$MapBuilderImpl($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T2(arg1$3));
      i$3 = ((1 + i$3) | 0)
    }
  };
  var x$11 = this$13.result__sci_Map();
  var x$17 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_core_RouteConfig$().apply$default$8__sjs_js_Array();
  var array$2 = [$$x1, $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_core_RouteConfig$().apply__T__sjs_js_Any__T__sci_Map__sjs_js_Any__sjs_js_Any__sjs_js_Any__sjs_js_Array__sjs_js_Function3__sjs_js_Object("/maintain/season/:seasonId/competition/:id/fixtures/:fixturesId", null, null, x$11, null, null, null, x$17, null)];
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sjs_js_WrappedArray$();
  this.Lquizleague_web_maintain_fixtures_FixturesModule$__f_routes = array$2
}
export { $c_Lquizleague_web_maintain_fixtures_FixturesModule$ as $c_Lquizleague_web_maintain_fixtures_FixturesModule$ };
$c_Lquizleague_web_maintain_fixtures_FixturesModule$.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_Lquizleague_web_maintain_fixtures_FixturesModule$.prototype.constructor = $c_Lquizleague_web_maintain_fixtures_FixturesModule$;
/** @constructor */
function $h_Lquizleague_web_maintain_fixtures_FixturesModule$() {
  /*<skip>*/
}
export { $h_Lquizleague_web_maintain_fixtures_FixturesModule$ as $h_Lquizleague_web_maintain_fixtures_FixturesModule$ };
$h_Lquizleague_web_maintain_fixtures_FixturesModule$.prototype = $c_Lquizleague_web_maintain_fixtures_FixturesModule$.prototype;
$c_Lquizleague_web_maintain_fixtures_FixturesModule$.prototype.modules__sjs_js_Array = (function() {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Module__modules__sjs_js_Array(this)
});
$c_Lquizleague_web_maintain_fixtures_FixturesModule$.prototype.components__sjs_js_Array = (function() {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Module__components__sjs_js_Array(this)
});
$c_Lquizleague_web_maintain_fixtures_FixturesModule$.prototype.routes__sjs_js_Array = (function() {
  return this.Lquizleague_web_maintain_fixtures_FixturesModule$__f_routes
});
var $d_Lquizleague_web_maintain_fixtures_FixturesModule$ = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  Lquizleague_web_maintain_fixtures_FixturesModule$: 0
}, false, "quizleague.web.maintain.fixtures.FixturesModule$", {
  Lquizleague_web_maintain_fixtures_FixturesModule$: 1,
  O: 1,
  Lquizleague_web_core_Module: 1
});
export { $d_Lquizleague_web_maintain_fixtures_FixturesModule$ as $d_Lquizleague_web_maintain_fixtures_FixturesModule$ };
$c_Lquizleague_web_maintain_fixtures_FixturesModule$.prototype.$classData = $d_Lquizleague_web_maintain_fixtures_FixturesModule$;
var $n_Lquizleague_web_maintain_fixtures_FixturesModule$;
function $m_Lquizleague_web_maintain_fixtures_FixturesModule$() {
  if ((!$n_Lquizleague_web_maintain_fixtures_FixturesModule$)) {
    $n_Lquizleague_web_maintain_fixtures_FixturesModule$ = new $c_Lquizleague_web_maintain_fixtures_FixturesModule$()
  };
  return $n_Lquizleague_web_maintain_fixtures_FixturesModule$
}
export { $m_Lquizleague_web_maintain_fixtures_FixturesModule$ as $m_Lquizleague_web_maintain_fixtures_FixturesModule$ };
/** @constructor */
function $c_Lquizleague_web_maintain_globaltext_GlobalTextModule$() {
  this.Lquizleague_web_maintain_globaltext_GlobalTextModule$__f_routes = null;
  $n_Lquizleague_web_maintain_globaltext_GlobalTextModule$ = this;
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_Predef$().s_Predef$__f_Map);
  var y = $m_Lquizleague_web_maintain_globaltext_GlobalTextListComponent$();
  var array = [new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2("default", y)];
  var this$6 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sci_Map$MapBuilderImpl();
  if (this$6.sci_Map$MapBuilderImpl__f_switchedToHashMapBuilder) {
    var this$7 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this$6.sci_Map$MapBuilderImpl__f_hashMapBuilder);
    var i = 0;
    var len = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length);
    while ((i < len)) {
      var index = i;
      var arg1 = array[index];
      this$7.$plus$eq__T2__sci_HashMap$HashMapBuilder($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T2(arg1));
      i = ((1 + i) | 0)
    }
  } else {
    var i$1 = 0;
    var len$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length);
    while ((i$1 < len$1)) {
      var index$1 = i$1;
      var arg1$1 = array[index$1];
      this$6.$plus$eq__T2__sci_Map$MapBuilderImpl($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T2(arg1$1));
      i$1 = ((1 + i$1) | 0)
    }
  };
  var x$2 = this$6.result__sci_Map();
  var x$8 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_core_RouteConfig$().apply$default$8__sjs_js_Array();
  var $$x1 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_core_RouteConfig$().apply__T__sjs_js_Any__T__sci_Map__sjs_js_Any__sjs_js_Any__sjs_js_Any__sjs_js_Array__sjs_js_Function3__sjs_js_Object("/maintain/globaltext", null, null, x$2, null, null, null, x$8, null);
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_Predef$().s_Predef$__f_Map);
  var y$1 = $m_Lquizleague_web_maintain_globaltext_GlobalTextComponent$();
  var array$1 = [new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2("default", y$1)];
  var this$13 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sci_Map$MapBuilderImpl();
  if (this$13.sci_Map$MapBuilderImpl__f_switchedToHashMapBuilder) {
    var this$14 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this$13.sci_Map$MapBuilderImpl__f_hashMapBuilder);
    var i$2 = 0;
    var len$2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array$1.length);
    while ((i$2 < len$2)) {
      var index$2 = i$2;
      var arg1$2 = array$1[index$2];
      this$14.$plus$eq__T2__sci_HashMap$HashMapBuilder($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T2(arg1$2));
      i$2 = ((1 + i$2) | 0)
    }
  } else {
    var i$3 = 0;
    var len$3 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array$1.length);
    while ((i$3 < len$3)) {
      var index$3 = i$3;
      var arg1$3 = array$1[index$3];
      this$13.$plus$eq__T2__sci_Map$MapBuilderImpl($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T2(arg1$3));
      i$3 = ((1 + i$3) | 0)
    }
  };
  var x$11 = this$13.result__sci_Map();
  var x$17 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_core_RouteConfig$().apply$default$8__sjs_js_Array();
  var array$2 = [$$x1, $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_core_RouteConfig$().apply__T__sjs_js_Any__T__sci_Map__sjs_js_Any__sjs_js_Any__sjs_js_Any__sjs_js_Array__sjs_js_Function3__sjs_js_Object("/maintain/globaltext/:id", null, null, x$11, null, null, null, x$17, null)];
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sjs_js_WrappedArray$();
  this.Lquizleague_web_maintain_globaltext_GlobalTextModule$__f_routes = array$2
}
export { $c_Lquizleague_web_maintain_globaltext_GlobalTextModule$ as $c_Lquizleague_web_maintain_globaltext_GlobalTextModule$ };
$c_Lquizleague_web_maintain_globaltext_GlobalTextModule$.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_Lquizleague_web_maintain_globaltext_GlobalTextModule$.prototype.constructor = $c_Lquizleague_web_maintain_globaltext_GlobalTextModule$;
/** @constructor */
function $h_Lquizleague_web_maintain_globaltext_GlobalTextModule$() {
  /*<skip>*/
}
export { $h_Lquizleague_web_maintain_globaltext_GlobalTextModule$ as $h_Lquizleague_web_maintain_globaltext_GlobalTextModule$ };
$h_Lquizleague_web_maintain_globaltext_GlobalTextModule$.prototype = $c_Lquizleague_web_maintain_globaltext_GlobalTextModule$.prototype;
$c_Lquizleague_web_maintain_globaltext_GlobalTextModule$.prototype.modules__sjs_js_Array = (function() {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Module__modules__sjs_js_Array(this)
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextModule$.prototype.components__sjs_js_Array = (function() {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Module__components__sjs_js_Array(this)
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextModule$.prototype.routes__sjs_js_Array = (function() {
  return this.Lquizleague_web_maintain_globaltext_GlobalTextModule$__f_routes
});
var $d_Lquizleague_web_maintain_globaltext_GlobalTextModule$ = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  Lquizleague_web_maintain_globaltext_GlobalTextModule$: 0
}, false, "quizleague.web.maintain.globaltext.GlobalTextModule$", {
  Lquizleague_web_maintain_globaltext_GlobalTextModule$: 1,
  O: 1,
  Lquizleague_web_core_Module: 1
});
export { $d_Lquizleague_web_maintain_globaltext_GlobalTextModule$ as $d_Lquizleague_web_maintain_globaltext_GlobalTextModule$ };
$c_Lquizleague_web_maintain_globaltext_GlobalTextModule$.prototype.$classData = $d_Lquizleague_web_maintain_globaltext_GlobalTextModule$;
var $n_Lquizleague_web_maintain_globaltext_GlobalTextModule$;
function $m_Lquizleague_web_maintain_globaltext_GlobalTextModule$() {
  if ((!$n_Lquizleague_web_maintain_globaltext_GlobalTextModule$)) {
    $n_Lquizleague_web_maintain_globaltext_GlobalTextModule$ = new $c_Lquizleague_web_maintain_globaltext_GlobalTextModule$()
  };
  return $n_Lquizleague_web_maintain_globaltext_GlobalTextModule$
}
export { $m_Lquizleague_web_maintain_globaltext_GlobalTextModule$ as $m_Lquizleague_web_maintain_globaltext_GlobalTextModule$ };
/** @constructor */
function $c_Lquizleague_web_maintain_leaguetable_LeagueTableModule$() {
  this.Lquizleague_web_maintain_leaguetable_LeagueTableModule$__f_routes = null;
  $n_Lquizleague_web_maintain_leaguetable_LeagueTableModule$ = this;
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_Predef$().s_Predef$__f_Map);
  var y = $m_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$();
  var array = [new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2("default", y)];
  var this$6 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sci_Map$MapBuilderImpl();
  if (this$6.sci_Map$MapBuilderImpl__f_switchedToHashMapBuilder) {
    var this$7 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this$6.sci_Map$MapBuilderImpl__f_hashMapBuilder);
    var i = 0;
    var len = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length);
    while ((i < len)) {
      var index = i;
      var arg1 = array[index];
      this$7.$plus$eq__T2__sci_HashMap$HashMapBuilder($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T2(arg1));
      i = ((1 + i) | 0)
    }
  } else {
    var i$1 = 0;
    var len$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length);
    while ((i$1 < len$1)) {
      var index$1 = i$1;
      var arg1$1 = array[index$1];
      this$6.$plus$eq__T2__sci_Map$MapBuilderImpl($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T2(arg1$1));
      i$1 = ((1 + i$1) | 0)
    }
  };
  var x$2 = this$6.result__sci_Map();
  var x$8 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_core_RouteConfig$().apply$default$8__sjs_js_Array();
  var array$1 = [$j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_core_RouteConfig$().apply__T__sjs_js_Any__T__sci_Map__sjs_js_Any__sjs_js_Any__sjs_js_Any__sjs_js_Array__sjs_js_Function3__sjs_js_Object("/maintain/season/:seasonId/competition/:competitionId/leaguetable/:id", null, null, x$2, null, null, null, x$8, null)];
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sjs_js_WrappedArray$();
  this.Lquizleague_web_maintain_leaguetable_LeagueTableModule$__f_routes = array$1
}
export { $c_Lquizleague_web_maintain_leaguetable_LeagueTableModule$ as $c_Lquizleague_web_maintain_leaguetable_LeagueTableModule$ };
$c_Lquizleague_web_maintain_leaguetable_LeagueTableModule$.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_Lquizleague_web_maintain_leaguetable_LeagueTableModule$.prototype.constructor = $c_Lquizleague_web_maintain_leaguetable_LeagueTableModule$;
/** @constructor */
function $h_Lquizleague_web_maintain_leaguetable_LeagueTableModule$() {
  /*<skip>*/
}
export { $h_Lquizleague_web_maintain_leaguetable_LeagueTableModule$ as $h_Lquizleague_web_maintain_leaguetable_LeagueTableModule$ };
$h_Lquizleague_web_maintain_leaguetable_LeagueTableModule$.prototype = $c_Lquizleague_web_maintain_leaguetable_LeagueTableModule$.prototype;
$c_Lquizleague_web_maintain_leaguetable_LeagueTableModule$.prototype.modules__sjs_js_Array = (function() {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Module__modules__sjs_js_Array(this)
});
$c_Lquizleague_web_maintain_leaguetable_LeagueTableModule$.prototype.components__sjs_js_Array = (function() {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Module__components__sjs_js_Array(this)
});
$c_Lquizleague_web_maintain_leaguetable_LeagueTableModule$.prototype.routes__sjs_js_Array = (function() {
  return this.Lquizleague_web_maintain_leaguetable_LeagueTableModule$__f_routes
});
var $d_Lquizleague_web_maintain_leaguetable_LeagueTableModule$ = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  Lquizleague_web_maintain_leaguetable_LeagueTableModule$: 0
}, false, "quizleague.web.maintain.leaguetable.LeagueTableModule$", {
  Lquizleague_web_maintain_leaguetable_LeagueTableModule$: 1,
  O: 1,
  Lquizleague_web_core_Module: 1
});
export { $d_Lquizleague_web_maintain_leaguetable_LeagueTableModule$ as $d_Lquizleague_web_maintain_leaguetable_LeagueTableModule$ };
$c_Lquizleague_web_maintain_leaguetable_LeagueTableModule$.prototype.$classData = $d_Lquizleague_web_maintain_leaguetable_LeagueTableModule$;
var $n_Lquizleague_web_maintain_leaguetable_LeagueTableModule$;
function $m_Lquizleague_web_maintain_leaguetable_LeagueTableModule$() {
  if ((!$n_Lquizleague_web_maintain_leaguetable_LeagueTableModule$)) {
    $n_Lquizleague_web_maintain_leaguetable_LeagueTableModule$ = new $c_Lquizleague_web_maintain_leaguetable_LeagueTableModule$()
  };
  return $n_Lquizleague_web_maintain_leaguetable_LeagueTableModule$
}
export { $m_Lquizleague_web_maintain_leaguetable_LeagueTableModule$ as $m_Lquizleague_web_maintain_leaguetable_LeagueTableModule$ };
/** @constructor */
function $c_Lquizleague_web_maintain_season_SeasonModule$() {
  this.Lquizleague_web_maintain_season_SeasonModule$__f_modules = null;
  this.Lquizleague_web_maintain_season_SeasonModule$__f_routes = null;
  $n_Lquizleague_web_maintain_season_SeasonModule$ = this;
  var array = [$m_Lquizleague_web_maintain_competition_CompetitionModule$()];
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sjs_js_WrappedArray$();
  this.Lquizleague_web_maintain_season_SeasonModule$__f_modules = array;
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_Predef$().s_Predef$__f_Map);
  var y = $m_Lquizleague_web_maintain_season_CalendarComponent$();
  var array$1 = [new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2("default", y)];
  var this$12 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sci_Map$MapBuilderImpl();
  if (this$12.sci_Map$MapBuilderImpl__f_switchedToHashMapBuilder) {
    var this$13 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this$12.sci_Map$MapBuilderImpl__f_hashMapBuilder);
    var i = 0;
    var len = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array$1.length);
    while ((i < len)) {
      var index = i;
      var arg1 = array$1[index];
      this$13.$plus$eq__T2__sci_HashMap$HashMapBuilder($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T2(arg1));
      i = ((1 + i) | 0)
    }
  } else {
    var i$1 = 0;
    var len$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array$1.length);
    while ((i$1 < len$1)) {
      var index$1 = i$1;
      var arg1$1 = array$1[index$1];
      this$12.$plus$eq__T2__sci_Map$MapBuilderImpl($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T2(arg1$1));
      i$1 = ((1 + i$1) | 0)
    }
  };
  var x$2 = this$12.result__sci_Map();
  var x$8 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_core_RouteConfig$().apply$default$8__sjs_js_Array();
  var $$x2 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_core_RouteConfig$().apply__T__sjs_js_Any__T__sci_Map__sjs_js_Any__sjs_js_Any__sjs_js_Any__sjs_js_Array__sjs_js_Function3__sjs_js_Object("/maintain/season/:id/calendar", null, null, x$2, null, null, null, x$8, null);
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_Predef$().s_Predef$__f_Map);
  var y$1 = $m_Lquizleague_web_maintain_season_SeasonComponent$();
  var array$2 = [new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2("default", y$1)];
  var this$19 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sci_Map$MapBuilderImpl();
  if (this$19.sci_Map$MapBuilderImpl__f_switchedToHashMapBuilder) {
    var this$20 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this$19.sci_Map$MapBuilderImpl__f_hashMapBuilder);
    var i$2 = 0;
    var len$2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array$2.length);
    while ((i$2 < len$2)) {
      var index$2 = i$2;
      var arg1$2 = array$2[index$2];
      this$20.$plus$eq__T2__sci_HashMap$HashMapBuilder($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T2(arg1$2));
      i$2 = ((1 + i$2) | 0)
    }
  } else {
    var i$3 = 0;
    var len$3 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array$2.length);
    while ((i$3 < len$3)) {
      var index$3 = i$3;
      var arg1$3 = array$2[index$3];
      this$19.$plus$eq__T2__sci_Map$MapBuilderImpl($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T2(arg1$3));
      i$3 = ((1 + i$3) | 0)
    }
  };
  var x$11 = this$19.result__sci_Map();
  var x$17 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_core_RouteConfig$().apply$default$8__sjs_js_Array();
  var $$x1 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_core_RouteConfig$().apply__T__sjs_js_Any__T__sci_Map__sjs_js_Any__sjs_js_Any__sjs_js_Any__sjs_js_Array__sjs_js_Function3__sjs_js_Object("/maintain/season/:id", null, null, x$11, null, null, null, x$17, null);
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_Predef$().s_Predef$__f_Map);
  var y$2 = $m_Lquizleague_web_maintain_season_SeasonListComponent$();
  var array$3 = [new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2("default", y$2)];
  var this$26 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sci_Map$MapBuilderImpl();
  if (this$26.sci_Map$MapBuilderImpl__f_switchedToHashMapBuilder) {
    var this$27 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this$26.sci_Map$MapBuilderImpl__f_hashMapBuilder);
    var i$4 = 0;
    var len$4 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array$3.length);
    while ((i$4 < len$4)) {
      var index$4 = i$4;
      var arg1$4 = array$3[index$4];
      this$27.$plus$eq__T2__sci_HashMap$HashMapBuilder($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T2(arg1$4));
      i$4 = ((1 + i$4) | 0)
    }
  } else {
    var i$5 = 0;
    var len$5 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array$3.length);
    while ((i$5 < len$5)) {
      var index$5 = i$5;
      var arg1$5 = array$3[index$5];
      this$26.$plus$eq__T2__sci_Map$MapBuilderImpl($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T2(arg1$5));
      i$5 = ((1 + i$5) | 0)
    }
  };
  var x$20 = this$26.result__sci_Map();
  var x$26 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_core_RouteConfig$().apply$default$8__sjs_js_Array();
  var array$4 = [$$x2, $$x1, $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_core_RouteConfig$().apply__T__sjs_js_Any__T__sci_Map__sjs_js_Any__sjs_js_Any__sjs_js_Any__sjs_js_Array__sjs_js_Function3__sjs_js_Object("/maintain/season", null, null, x$20, null, null, null, x$26, null)];
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sjs_js_WrappedArray$();
  this.Lquizleague_web_maintain_season_SeasonModule$__f_routes = array$4
}
export { $c_Lquizleague_web_maintain_season_SeasonModule$ as $c_Lquizleague_web_maintain_season_SeasonModule$ };
$c_Lquizleague_web_maintain_season_SeasonModule$.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_Lquizleague_web_maintain_season_SeasonModule$.prototype.constructor = $c_Lquizleague_web_maintain_season_SeasonModule$;
/** @constructor */
function $h_Lquizleague_web_maintain_season_SeasonModule$() {
  /*<skip>*/
}
export { $h_Lquizleague_web_maintain_season_SeasonModule$ as $h_Lquizleague_web_maintain_season_SeasonModule$ };
$h_Lquizleague_web_maintain_season_SeasonModule$.prototype = $c_Lquizleague_web_maintain_season_SeasonModule$.prototype;
$c_Lquizleague_web_maintain_season_SeasonModule$.prototype.components__sjs_js_Array = (function() {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Module__components__sjs_js_Array(this)
});
$c_Lquizleague_web_maintain_season_SeasonModule$.prototype.modules__sjs_js_Array = (function() {
  return this.Lquizleague_web_maintain_season_SeasonModule$__f_modules
});
$c_Lquizleague_web_maintain_season_SeasonModule$.prototype.routes__sjs_js_Array = (function() {
  return this.Lquizleague_web_maintain_season_SeasonModule$__f_routes
});
var $d_Lquizleague_web_maintain_season_SeasonModule$ = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  Lquizleague_web_maintain_season_SeasonModule$: 0
}, false, "quizleague.web.maintain.season.SeasonModule$", {
  Lquizleague_web_maintain_season_SeasonModule$: 1,
  O: 1,
  Lquizleague_web_core_Module: 1
});
export { $d_Lquizleague_web_maintain_season_SeasonModule$ as $d_Lquizleague_web_maintain_season_SeasonModule$ };
$c_Lquizleague_web_maintain_season_SeasonModule$.prototype.$classData = $d_Lquizleague_web_maintain_season_SeasonModule$;
var $n_Lquizleague_web_maintain_season_SeasonModule$;
function $m_Lquizleague_web_maintain_season_SeasonModule$() {
  if ((!$n_Lquizleague_web_maintain_season_SeasonModule$)) {
    $n_Lquizleague_web_maintain_season_SeasonModule$ = new $c_Lquizleague_web_maintain_season_SeasonModule$()
  };
  return $n_Lquizleague_web_maintain_season_SeasonModule$
}
export { $m_Lquizleague_web_maintain_season_SeasonModule$ as $m_Lquizleague_web_maintain_season_SeasonModule$ };
/** @constructor */
function $c_Lquizleague_web_maintain_stats_StatsModule$() {
  this.Lquizleague_web_maintain_stats_StatsModule$__f_routes = null;
  $n_Lquizleague_web_maintain_stats_StatsModule$ = this;
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_Predef$().s_Predef$__f_Map);
  var y = $m_Lquizleague_web_maintain_stats_StatsComponent$();
  var array = [new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2("default", y)];
  var this$6 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sci_Map$MapBuilderImpl();
  if (this$6.sci_Map$MapBuilderImpl__f_switchedToHashMapBuilder) {
    var this$7 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this$6.sci_Map$MapBuilderImpl__f_hashMapBuilder);
    var i = 0;
    var len = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length);
    while ((i < len)) {
      var index = i;
      var arg1 = array[index];
      this$7.$plus$eq__T2__sci_HashMap$HashMapBuilder($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T2(arg1));
      i = ((1 + i) | 0)
    }
  } else {
    var i$1 = 0;
    var len$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length);
    while ((i$1 < len$1)) {
      var index$1 = i$1;
      var arg1$1 = array[index$1];
      this$6.$plus$eq__T2__sci_Map$MapBuilderImpl($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T2(arg1$1));
      i$1 = ((1 + i$1) | 0)
    }
  };
  var x$2 = this$6.result__sci_Map();
  var x$8 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_core_RouteConfig$().apply$default$8__sjs_js_Array();
  var array$1 = [$j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_core_RouteConfig$().apply__T__sjs_js_Any__T__sci_Map__sjs_js_Any__sjs_js_Any__sjs_js_Any__sjs_js_Array__sjs_js_Function3__sjs_js_Object("/maintain/stats", null, null, x$2, null, null, null, x$8, null)];
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sjs_js_WrappedArray$();
  this.Lquizleague_web_maintain_stats_StatsModule$__f_routes = array$1
}
export { $c_Lquizleague_web_maintain_stats_StatsModule$ as $c_Lquizleague_web_maintain_stats_StatsModule$ };
$c_Lquizleague_web_maintain_stats_StatsModule$.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_Lquizleague_web_maintain_stats_StatsModule$.prototype.constructor = $c_Lquizleague_web_maintain_stats_StatsModule$;
/** @constructor */
function $h_Lquizleague_web_maintain_stats_StatsModule$() {
  /*<skip>*/
}
export { $h_Lquizleague_web_maintain_stats_StatsModule$ as $h_Lquizleague_web_maintain_stats_StatsModule$ };
$h_Lquizleague_web_maintain_stats_StatsModule$.prototype = $c_Lquizleague_web_maintain_stats_StatsModule$.prototype;
$c_Lquizleague_web_maintain_stats_StatsModule$.prototype.modules__sjs_js_Array = (function() {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Module__modules__sjs_js_Array(this)
});
$c_Lquizleague_web_maintain_stats_StatsModule$.prototype.components__sjs_js_Array = (function() {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Module__components__sjs_js_Array(this)
});
$c_Lquizleague_web_maintain_stats_StatsModule$.prototype.routes__sjs_js_Array = (function() {
  return this.Lquizleague_web_maintain_stats_StatsModule$__f_routes
});
var $d_Lquizleague_web_maintain_stats_StatsModule$ = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  Lquizleague_web_maintain_stats_StatsModule$: 0
}, false, "quizleague.web.maintain.stats.StatsModule$", {
  Lquizleague_web_maintain_stats_StatsModule$: 1,
  O: 1,
  Lquizleague_web_core_Module: 1
});
export { $d_Lquizleague_web_maintain_stats_StatsModule$ as $d_Lquizleague_web_maintain_stats_StatsModule$ };
$c_Lquizleague_web_maintain_stats_StatsModule$.prototype.$classData = $d_Lquizleague_web_maintain_stats_StatsModule$;
var $n_Lquizleague_web_maintain_stats_StatsModule$;
function $m_Lquizleague_web_maintain_stats_StatsModule$() {
  if ((!$n_Lquizleague_web_maintain_stats_StatsModule$)) {
    $n_Lquizleague_web_maintain_stats_StatsModule$ = new $c_Lquizleague_web_maintain_stats_StatsModule$()
  };
  return $n_Lquizleague_web_maintain_stats_StatsModule$
}
export { $m_Lquizleague_web_maintain_stats_StatsModule$ as $m_Lquizleague_web_maintain_stats_StatsModule$ };
/** @constructor */
function $c_Lquizleague_web_maintain_stats_StatsService$() {
  /*<skip>*/
}
export { $c_Lquizleague_web_maintain_stats_StatsService$ as $c_Lquizleague_web_maintain_stats_StatsService$ };
$c_Lquizleague_web_maintain_stats_StatsService$.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_Lquizleague_web_maintain_stats_StatsService$.prototype.constructor = $c_Lquizleague_web_maintain_stats_StatsService$;
/** @constructor */
function $h_Lquizleague_web_maintain_stats_StatsService$() {
  /*<skip>*/
}
export { $h_Lquizleague_web_maintain_stats_StatsService$ as $h_Lquizleague_web_maintain_stats_StatsService$ };
$h_Lquizleague_web_maintain_stats_StatsService$.prototype = $c_Lquizleague_web_maintain_stats_StatsService$.prototype;
$c_Lquizleague_web_maintain_stats_StatsService$.prototype.rebuild__T__Lrxscalajs_Observable = (function(seasonId) {
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sci_List$();
  var array = ["entity", "regenerate-stats", seasonId];
  var i = (((-1) + $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length)) | 0);
  var result = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sci_Nil$();
  while ((i >= 0)) {
    var this$4 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(result);
    var index = i;
    var x = array[index];
    result = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sci_$colon$colon(x, this$4);
    i = (((-1) + i) | 0)
  };
  var pathParts = result;
  var i$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_None$();
  var decoder = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lio_circe_Decoder$().Lio_circe_Decoder$__f_decodeString;
  var encoder = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lio_circe_Encoder$().Lio_circe_Encoder$__f_encodeString;
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_PostService__command__sci_List__s_Option__Lio_circe_Decoder__Lio_circe_Encoder__Lrxscalajs_Observable(this, pathParts, i$1, decoder, encoder)
});
var $d_Lquizleague_web_maintain_stats_StatsService$ = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  Lquizleague_web_maintain_stats_StatsService$: 0
}, false, "quizleague.web.maintain.stats.StatsService$", {
  Lquizleague_web_maintain_stats_StatsService$: 1,
  O: 1,
  Lquizleague_web_service_PostService: 1
});
export { $d_Lquizleague_web_maintain_stats_StatsService$ as $d_Lquizleague_web_maintain_stats_StatsService$ };
$c_Lquizleague_web_maintain_stats_StatsService$.prototype.$classData = $d_Lquizleague_web_maintain_stats_StatsService$;
var $n_Lquizleague_web_maintain_stats_StatsService$;
function $m_Lquizleague_web_maintain_stats_StatsService$() {
  if ((!$n_Lquizleague_web_maintain_stats_StatsService$)) {
    $n_Lquizleague_web_maintain_stats_StatsService$ = new $c_Lquizleague_web_maintain_stats_StatsService$()
  };
  return $n_Lquizleague_web_maintain_stats_StatsService$
}
export { $m_Lquizleague_web_maintain_stats_StatsService$ as $m_Lquizleague_web_maintain_stats_StatsService$ };
/** @constructor */
function $c_Lquizleague_web_maintain_team_TeamModule$() {
  this.Lquizleague_web_maintain_team_TeamModule$__f_routes = null;
  $n_Lquizleague_web_maintain_team_TeamModule$ = this;
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_Predef$().s_Predef$__f_Map);
  var y = $m_Lquizleague_web_maintain_team_TeamListComponent$();
  var array = [new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2("default", y)];
  var this$6 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sci_Map$MapBuilderImpl();
  if (this$6.sci_Map$MapBuilderImpl__f_switchedToHashMapBuilder) {
    var this$7 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this$6.sci_Map$MapBuilderImpl__f_hashMapBuilder);
    var i = 0;
    var len = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length);
    while ((i < len)) {
      var index = i;
      var arg1 = array[index];
      this$7.$plus$eq__T2__sci_HashMap$HashMapBuilder($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T2(arg1));
      i = ((1 + i) | 0)
    }
  } else {
    var i$1 = 0;
    var len$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length);
    while ((i$1 < len$1)) {
      var index$1 = i$1;
      var arg1$1 = array[index$1];
      this$6.$plus$eq__T2__sci_Map$MapBuilderImpl($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T2(arg1$1));
      i$1 = ((1 + i$1) | 0)
    }
  };
  var x$2 = this$6.result__sci_Map();
  var x$8 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_core_RouteConfig$().apply$default$8__sjs_js_Array();
  var $$x1 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_core_RouteConfig$().apply__T__sjs_js_Any__T__sci_Map__sjs_js_Any__sjs_js_Any__sjs_js_Any__sjs_js_Array__sjs_js_Function3__sjs_js_Object("/maintain/team", null, null, x$2, null, null, null, x$8, null);
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_Predef$().s_Predef$__f_Map);
  var y$1 = $m_Lquizleague_web_maintain_team_TeamComponent$();
  var array$1 = [new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2("default", y$1)];
  var this$13 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sci_Map$MapBuilderImpl();
  if (this$13.sci_Map$MapBuilderImpl__f_switchedToHashMapBuilder) {
    var this$14 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this$13.sci_Map$MapBuilderImpl__f_hashMapBuilder);
    var i$2 = 0;
    var len$2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array$1.length);
    while ((i$2 < len$2)) {
      var index$2 = i$2;
      var arg1$2 = array$1[index$2];
      this$14.$plus$eq__T2__sci_HashMap$HashMapBuilder($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T2(arg1$2));
      i$2 = ((1 + i$2) | 0)
    }
  } else {
    var i$3 = 0;
    var len$3 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array$1.length);
    while ((i$3 < len$3)) {
      var index$3 = i$3;
      var arg1$3 = array$1[index$3];
      this$13.$plus$eq__T2__sci_Map$MapBuilderImpl($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T2(arg1$3));
      i$3 = ((1 + i$3) | 0)
    }
  };
  var x$11 = this$13.result__sci_Map();
  var x$17 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_core_RouteConfig$().apply$default$8__sjs_js_Array();
  var array$2 = [$$x1, $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_core_RouteConfig$().apply__T__sjs_js_Any__T__sci_Map__sjs_js_Any__sjs_js_Any__sjs_js_Any__sjs_js_Array__sjs_js_Function3__sjs_js_Object("/maintain/team/:id", null, null, x$11, null, null, null, x$17, null)];
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sjs_js_WrappedArray$();
  this.Lquizleague_web_maintain_team_TeamModule$__f_routes = array$2
}
export { $c_Lquizleague_web_maintain_team_TeamModule$ as $c_Lquizleague_web_maintain_team_TeamModule$ };
$c_Lquizleague_web_maintain_team_TeamModule$.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_Lquizleague_web_maintain_team_TeamModule$.prototype.constructor = $c_Lquizleague_web_maintain_team_TeamModule$;
/** @constructor */
function $h_Lquizleague_web_maintain_team_TeamModule$() {
  /*<skip>*/
}
export { $h_Lquizleague_web_maintain_team_TeamModule$ as $h_Lquizleague_web_maintain_team_TeamModule$ };
$h_Lquizleague_web_maintain_team_TeamModule$.prototype = $c_Lquizleague_web_maintain_team_TeamModule$.prototype;
$c_Lquizleague_web_maintain_team_TeamModule$.prototype.modules__sjs_js_Array = (function() {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Module__modules__sjs_js_Array(this)
});
$c_Lquizleague_web_maintain_team_TeamModule$.prototype.components__sjs_js_Array = (function() {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Module__components__sjs_js_Array(this)
});
$c_Lquizleague_web_maintain_team_TeamModule$.prototype.routes__sjs_js_Array = (function() {
  return this.Lquizleague_web_maintain_team_TeamModule$__f_routes
});
var $d_Lquizleague_web_maintain_team_TeamModule$ = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  Lquizleague_web_maintain_team_TeamModule$: 0
}, false, "quizleague.web.maintain.team.TeamModule$", {
  Lquizleague_web_maintain_team_TeamModule$: 1,
  O: 1,
  Lquizleague_web_core_Module: 1
});
export { $d_Lquizleague_web_maintain_team_TeamModule$ as $d_Lquizleague_web_maintain_team_TeamModule$ };
$c_Lquizleague_web_maintain_team_TeamModule$.prototype.$classData = $d_Lquizleague_web_maintain_team_TeamModule$;
var $n_Lquizleague_web_maintain_team_TeamModule$;
function $m_Lquizleague_web_maintain_team_TeamModule$() {
  if ((!$n_Lquizleague_web_maintain_team_TeamModule$)) {
    $n_Lquizleague_web_maintain_team_TeamModule$ = new $c_Lquizleague_web_maintain_team_TeamModule$()
  };
  return $n_Lquizleague_web_maintain_team_TeamModule$
}
export { $m_Lquizleague_web_maintain_team_TeamModule$ as $m_Lquizleague_web_maintain_team_TeamModule$ };
/** @constructor */
function $c_Lquizleague_web_maintain_text_TextModule$() {
  this.Lquizleague_web_maintain_text_TextModule$__f_routes = null;
  $n_Lquizleague_web_maintain_text_TextModule$ = this;
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_Predef$().s_Predef$__f_Map);
  var y = $m_Lquizleague_web_maintain_text_TextComponent$();
  var array = [new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2("default", y)];
  var this$6 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sci_Map$MapBuilderImpl();
  if (this$6.sci_Map$MapBuilderImpl__f_switchedToHashMapBuilder) {
    var this$7 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this$6.sci_Map$MapBuilderImpl__f_hashMapBuilder);
    var i = 0;
    var len = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length);
    while ((i < len)) {
      var index = i;
      var arg1 = array[index];
      this$7.$plus$eq__T2__sci_HashMap$HashMapBuilder($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T2(arg1));
      i = ((1 + i) | 0)
    }
  } else {
    var i$1 = 0;
    var len$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length);
    while ((i$1 < len$1)) {
      var index$1 = i$1;
      var arg1$1 = array[index$1];
      this$6.$plus$eq__T2__sci_Map$MapBuilderImpl($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T2(arg1$1));
      i$1 = ((1 + i$1) | 0)
    }
  };
  var x$2 = this$6.result__sci_Map();
  var x$8 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_core_RouteConfig$().apply$default$8__sjs_js_Array();
  var array$1 = [$j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_core_RouteConfig$().apply__T__sjs_js_Any__T__sci_Map__sjs_js_Any__sjs_js_Any__sjs_js_Any__sjs_js_Array__sjs_js_Function3__sjs_js_Object("/maintain/text/:id", null, null, x$2, null, null, null, x$8, null)];
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sjs_js_WrappedArray$();
  this.Lquizleague_web_maintain_text_TextModule$__f_routes = array$1
}
export { $c_Lquizleague_web_maintain_text_TextModule$ as $c_Lquizleague_web_maintain_text_TextModule$ };
$c_Lquizleague_web_maintain_text_TextModule$.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_Lquizleague_web_maintain_text_TextModule$.prototype.constructor = $c_Lquizleague_web_maintain_text_TextModule$;
/** @constructor */
function $h_Lquizleague_web_maintain_text_TextModule$() {
  /*<skip>*/
}
export { $h_Lquizleague_web_maintain_text_TextModule$ as $h_Lquizleague_web_maintain_text_TextModule$ };
$h_Lquizleague_web_maintain_text_TextModule$.prototype = $c_Lquizleague_web_maintain_text_TextModule$.prototype;
$c_Lquizleague_web_maintain_text_TextModule$.prototype.modules__sjs_js_Array = (function() {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Module__modules__sjs_js_Array(this)
});
$c_Lquizleague_web_maintain_text_TextModule$.prototype.components__sjs_js_Array = (function() {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Module__components__sjs_js_Array(this)
});
$c_Lquizleague_web_maintain_text_TextModule$.prototype.routes__sjs_js_Array = (function() {
  return this.Lquizleague_web_maintain_text_TextModule$__f_routes
});
var $d_Lquizleague_web_maintain_text_TextModule$ = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  Lquizleague_web_maintain_text_TextModule$: 0
}, false, "quizleague.web.maintain.text.TextModule$", {
  Lquizleague_web_maintain_text_TextModule$: 1,
  O: 1,
  Lquizleague_web_core_Module: 1
});
export { $d_Lquizleague_web_maintain_text_TextModule$ as $d_Lquizleague_web_maintain_text_TextModule$ };
$c_Lquizleague_web_maintain_text_TextModule$.prototype.$classData = $d_Lquizleague_web_maintain_text_TextModule$;
var $n_Lquizleague_web_maintain_text_TextModule$;
function $m_Lquizleague_web_maintain_text_TextModule$() {
  if ((!$n_Lquizleague_web_maintain_text_TextModule$)) {
    $n_Lquizleague_web_maintain_text_TextModule$ = new $c_Lquizleague_web_maintain_text_TextModule$()
  };
  return $n_Lquizleague_web_maintain_text_TextModule$
}
export { $m_Lquizleague_web_maintain_text_TextModule$ as $m_Lquizleague_web_maintain_text_TextModule$ };
/** @constructor */
function $c_Lquizleague_web_maintain_user_UserModule$() {
  this.Lquizleague_web_maintain_user_UserModule$__f_routes = null;
  $n_Lquizleague_web_maintain_user_UserModule$ = this;
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_Predef$().s_Predef$__f_Map);
  var y = $m_Lquizleague_web_maintain_user_UserListComponent$();
  var array = [new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2("default", y)];
  var this$6 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sci_Map$MapBuilderImpl();
  if (this$6.sci_Map$MapBuilderImpl__f_switchedToHashMapBuilder) {
    var this$7 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this$6.sci_Map$MapBuilderImpl__f_hashMapBuilder);
    var i = 0;
    var len = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length);
    while ((i < len)) {
      var index = i;
      var arg1 = array[index];
      this$7.$plus$eq__T2__sci_HashMap$HashMapBuilder($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T2(arg1));
      i = ((1 + i) | 0)
    }
  } else {
    var i$1 = 0;
    var len$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length);
    while ((i$1 < len$1)) {
      var index$1 = i$1;
      var arg1$1 = array[index$1];
      this$6.$plus$eq__T2__sci_Map$MapBuilderImpl($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T2(arg1$1));
      i$1 = ((1 + i$1) | 0)
    }
  };
  var x$2 = this$6.result__sci_Map();
  var x$8 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_core_RouteConfig$().apply$default$8__sjs_js_Array();
  var $$x1 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_core_RouteConfig$().apply__T__sjs_js_Any__T__sci_Map__sjs_js_Any__sjs_js_Any__sjs_js_Any__sjs_js_Array__sjs_js_Function3__sjs_js_Object("/maintain/user", null, null, x$2, null, null, null, x$8, null);
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_Predef$().s_Predef$__f_Map);
  var y$1 = $m_Lquizleague_web_maintain_user_UserComponent$();
  var array$1 = [new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2("default", y$1)];
  var this$13 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sci_Map$MapBuilderImpl();
  if (this$13.sci_Map$MapBuilderImpl__f_switchedToHashMapBuilder) {
    var this$14 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this$13.sci_Map$MapBuilderImpl__f_hashMapBuilder);
    var i$2 = 0;
    var len$2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array$1.length);
    while ((i$2 < len$2)) {
      var index$2 = i$2;
      var arg1$2 = array$1[index$2];
      this$14.$plus$eq__T2__sci_HashMap$HashMapBuilder($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T2(arg1$2));
      i$2 = ((1 + i$2) | 0)
    }
  } else {
    var i$3 = 0;
    var len$3 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array$1.length);
    while ((i$3 < len$3)) {
      var index$3 = i$3;
      var arg1$3 = array$1[index$3];
      this$13.$plus$eq__T2__sci_Map$MapBuilderImpl($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T2(arg1$3));
      i$3 = ((1 + i$3) | 0)
    }
  };
  var x$11 = this$13.result__sci_Map();
  var x$17 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_core_RouteConfig$().apply$default$8__sjs_js_Array();
  var array$2 = [$$x1, $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_core_RouteConfig$().apply__T__sjs_js_Any__T__sci_Map__sjs_js_Any__sjs_js_Any__sjs_js_Any__sjs_js_Array__sjs_js_Function3__sjs_js_Object("/maintain/user/:id", null, null, x$11, null, null, null, x$17, null)];
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sjs_js_WrappedArray$();
  this.Lquizleague_web_maintain_user_UserModule$__f_routes = array$2
}
export { $c_Lquizleague_web_maintain_user_UserModule$ as $c_Lquizleague_web_maintain_user_UserModule$ };
$c_Lquizleague_web_maintain_user_UserModule$.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_Lquizleague_web_maintain_user_UserModule$.prototype.constructor = $c_Lquizleague_web_maintain_user_UserModule$;
/** @constructor */
function $h_Lquizleague_web_maintain_user_UserModule$() {
  /*<skip>*/
}
export { $h_Lquizleague_web_maintain_user_UserModule$ as $h_Lquizleague_web_maintain_user_UserModule$ };
$h_Lquizleague_web_maintain_user_UserModule$.prototype = $c_Lquizleague_web_maintain_user_UserModule$.prototype;
$c_Lquizleague_web_maintain_user_UserModule$.prototype.modules__sjs_js_Array = (function() {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Module__modules__sjs_js_Array(this)
});
$c_Lquizleague_web_maintain_user_UserModule$.prototype.components__sjs_js_Array = (function() {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Module__components__sjs_js_Array(this)
});
$c_Lquizleague_web_maintain_user_UserModule$.prototype.routes__sjs_js_Array = (function() {
  return this.Lquizleague_web_maintain_user_UserModule$__f_routes
});
var $d_Lquizleague_web_maintain_user_UserModule$ = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  Lquizleague_web_maintain_user_UserModule$: 0
}, false, "quizleague.web.maintain.user.UserModule$", {
  Lquizleague_web_maintain_user_UserModule$: 1,
  O: 1,
  Lquizleague_web_core_Module: 1
});
export { $d_Lquizleague_web_maintain_user_UserModule$ as $d_Lquizleague_web_maintain_user_UserModule$ };
$c_Lquizleague_web_maintain_user_UserModule$.prototype.$classData = $d_Lquizleague_web_maintain_user_UserModule$;
var $n_Lquizleague_web_maintain_user_UserModule$;
function $m_Lquizleague_web_maintain_user_UserModule$() {
  if ((!$n_Lquizleague_web_maintain_user_UserModule$)) {
    $n_Lquizleague_web_maintain_user_UserModule$ = new $c_Lquizleague_web_maintain_user_UserModule$()
  };
  return $n_Lquizleague_web_maintain_user_UserModule$
}
export { $m_Lquizleague_web_maintain_user_UserModule$ as $m_Lquizleague_web_maintain_user_UserModule$ };
/** @constructor */
function $c_Lquizleague_web_maintain_venue_VenueModule$() {
  this.Lquizleague_web_maintain_venue_VenueModule$__f_routes = null;
  $n_Lquizleague_web_maintain_venue_VenueModule$ = this;
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_Predef$().s_Predef$__f_Map);
  var y = $m_Lquizleague_web_maintain_venue_VenueListComponent$();
  var array = [new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2("default", y)];
  var this$6 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sci_Map$MapBuilderImpl();
  if (this$6.sci_Map$MapBuilderImpl__f_switchedToHashMapBuilder) {
    var this$7 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this$6.sci_Map$MapBuilderImpl__f_hashMapBuilder);
    var i = 0;
    var len = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length);
    while ((i < len)) {
      var index = i;
      var arg1 = array[index];
      this$7.$plus$eq__T2__sci_HashMap$HashMapBuilder($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T2(arg1));
      i = ((1 + i) | 0)
    }
  } else {
    var i$1 = 0;
    var len$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length);
    while ((i$1 < len$1)) {
      var index$1 = i$1;
      var arg1$1 = array[index$1];
      this$6.$plus$eq__T2__sci_Map$MapBuilderImpl($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T2(arg1$1));
      i$1 = ((1 + i$1) | 0)
    }
  };
  var x$2 = this$6.result__sci_Map();
  var x$8 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_core_RouteConfig$().apply$default$8__sjs_js_Array();
  var $$x1 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_core_RouteConfig$().apply__T__sjs_js_Any__T__sci_Map__sjs_js_Any__sjs_js_Any__sjs_js_Any__sjs_js_Array__sjs_js_Function3__sjs_js_Object("/maintain/venue", null, null, x$2, null, null, null, x$8, null);
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_Predef$().s_Predef$__f_Map);
  var y$1 = $m_Lquizleague_web_maintain_venue_VenueComponent$();
  var array$1 = [new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2("default", y$1)];
  var this$13 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sci_Map$MapBuilderImpl();
  if (this$13.sci_Map$MapBuilderImpl__f_switchedToHashMapBuilder) {
    var this$14 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this$13.sci_Map$MapBuilderImpl__f_hashMapBuilder);
    var i$2 = 0;
    var len$2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array$1.length);
    while ((i$2 < len$2)) {
      var index$2 = i$2;
      var arg1$2 = array$1[index$2];
      this$14.$plus$eq__T2__sci_HashMap$HashMapBuilder($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T2(arg1$2));
      i$2 = ((1 + i$2) | 0)
    }
  } else {
    var i$3 = 0;
    var len$3 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array$1.length);
    while ((i$3 < len$3)) {
      var index$3 = i$3;
      var arg1$3 = array$1[index$3];
      this$13.$plus$eq__T2__sci_Map$MapBuilderImpl($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T2(arg1$3));
      i$3 = ((1 + i$3) | 0)
    }
  };
  var x$11 = this$13.result__sci_Map();
  var x$17 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_core_RouteConfig$().apply$default$8__sjs_js_Array();
  var array$2 = [$$x1, $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_core_RouteConfig$().apply__T__sjs_js_Any__T__sci_Map__sjs_js_Any__sjs_js_Any__sjs_js_Any__sjs_js_Array__sjs_js_Function3__sjs_js_Object("/maintain/venue/:id", null, null, x$11, null, null, null, x$17, null)];
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sjs_js_WrappedArray$();
  this.Lquizleague_web_maintain_venue_VenueModule$__f_routes = array$2
}
export { $c_Lquizleague_web_maintain_venue_VenueModule$ as $c_Lquizleague_web_maintain_venue_VenueModule$ };
$c_Lquizleague_web_maintain_venue_VenueModule$.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_Lquizleague_web_maintain_venue_VenueModule$.prototype.constructor = $c_Lquizleague_web_maintain_venue_VenueModule$;
/** @constructor */
function $h_Lquizleague_web_maintain_venue_VenueModule$() {
  /*<skip>*/
}
export { $h_Lquizleague_web_maintain_venue_VenueModule$ as $h_Lquizleague_web_maintain_venue_VenueModule$ };
$h_Lquizleague_web_maintain_venue_VenueModule$.prototype = $c_Lquizleague_web_maintain_venue_VenueModule$.prototype;
$c_Lquizleague_web_maintain_venue_VenueModule$.prototype.modules__sjs_js_Array = (function() {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Module__modules__sjs_js_Array(this)
});
$c_Lquizleague_web_maintain_venue_VenueModule$.prototype.components__sjs_js_Array = (function() {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Module__components__sjs_js_Array(this)
});
$c_Lquizleague_web_maintain_venue_VenueModule$.prototype.routes__sjs_js_Array = (function() {
  return this.Lquizleague_web_maintain_venue_VenueModule$__f_routes
});
var $d_Lquizleague_web_maintain_venue_VenueModule$ = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  Lquizleague_web_maintain_venue_VenueModule$: 0
}, false, "quizleague.web.maintain.venue.VenueModule$", {
  Lquizleague_web_maintain_venue_VenueModule$: 1,
  O: 1,
  Lquizleague_web_core_Module: 1
});
export { $d_Lquizleague_web_maintain_venue_VenueModule$ as $d_Lquizleague_web_maintain_venue_VenueModule$ };
$c_Lquizleague_web_maintain_venue_VenueModule$.prototype.$classData = $d_Lquizleague_web_maintain_venue_VenueModule$;
var $n_Lquizleague_web_maintain_venue_VenueModule$;
function $m_Lquizleague_web_maintain_venue_VenueModule$() {
  if ((!$n_Lquizleague_web_maintain_venue_VenueModule$)) {
    $n_Lquizleague_web_maintain_venue_VenueModule$ = new $c_Lquizleague_web_maintain_venue_VenueModule$()
  };
  return $n_Lquizleague_web_maintain_venue_VenueModule$
}
export { $m_Lquizleague_web_maintain_venue_VenueModule$ as $m_Lquizleague_web_maintain_venue_VenueModule$ };
/** @constructor */
function $c_Lquizleague_web_maintain_database_DatabaseComponent$() {
  this.Lquizleague_web_maintain_database_DatabaseComponent$__f_template = null;
  this.Lquizleague_web_maintain_database_DatabaseComponent$__f_name = null;
  this.Lquizleague_web_maintain_database_DatabaseComponent$__f_quizleague$web$core$Component$$addedSubs = null;
  this.Lquizleague_web_maintain_database_DatabaseComponent$__f_quizleague$web$core$Component$$addedSubParams = null;
  this.Lquizleague_web_maintain_database_DatabaseComponent$__f_quizleague$web$core$Component$$addedProps = null;
  this.Lquizleague_web_maintain_database_DatabaseComponent$__f_quizleague$web$core$Component$$addedMethods = null;
  this.Lquizleague_web_maintain_database_DatabaseComponent$__f_quizleague$web$core$Component$$addedComputed = null;
  this.Lquizleague_web_maintain_database_DatabaseComponent$__f_quizleague$web$core$Component$$addedDataFn = null;
  this.Lquizleague_web_maintain_database_DatabaseComponent$__f_quizleague$web$core$Component$$addedData = null;
  this.Lquizleague_web_maintain_database_DatabaseComponent$__f_quizleague$web$core$Component$$addedComponents = null;
  this.Lquizleague_web_maintain_database_DatabaseComponent$__f_quizleague$web$core$Component$$addedWatch = null;
  this.Lquizleague_web_maintain_database_DatabaseComponent$__f_empty = null;
  this.Lquizleague_web_maintain_database_DatabaseComponent$__f_quizleague$web$core$Component$$commonMethods = null;
  $n_Lquizleague_web_maintain_database_DatabaseComponent$ = this;
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__$init$__V(this);
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_RouteComponent__$init$__V(this);
  this.Lquizleague_web_maintain_database_DatabaseComponent$__f_template = "\n    <v-container grid-list-lg>\n      <v-layout column fluid>\n       <div>\n        <v-btn text color=\"primary\" v-on:click=\"nestedupload\" :disabled=\"!uploadNestedFileSelected\"><v-icon left>mdi-file-upload</v-icon>Upload</v-btn>\n        <input type=\"file\" id=\"upload-nested-text-field\" label=\"Database dump file\" v-on:change=\"(e) => uploadNestedFileSelected=e.isTrusted\">\n       </div>\n       <div>\n        <v-dialog v-model=\"uploadComplete\" max-width=\"400px\">\n          <v-card>\n            <v-card-text>{{uploadText}}</v-card-text>\n          </v-card>\n        </v-dialog>\n       <div>\n        <v-btn text href=\"/rest/entity/dbdownload\" color=\"primary\" disabled ><v-icon left>mdi-file-download</v-icon>Download</v-btn>\n        </div>\n      </v-layout>\n    </v-container>\n    ";
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__data__T__O__V(this, "uploadComplete", false);
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__data__T__O__V(this, "uploadText", "Not yet uploaded");
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__data__T__O__V(this, "uploadNestedFileSelected", false);
  var fn = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_sjs_js_ThisFunction$().fromFunction1__F1__sjs_js_ThisFunction0(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((c$2) => {
    $m_Lquizleague_web_maintain_database_DatabaseComponent$().nestedupload__Lquizleague_web_maintain_database_DatabaseComponent__V(c$2)
  })));
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__method__T__sjs_js_Function__V(this, "nestedupload", fn)
}
export { $c_Lquizleague_web_maintain_database_DatabaseComponent$ as $c_Lquizleague_web_maintain_database_DatabaseComponent$ };
$c_Lquizleague_web_maintain_database_DatabaseComponent$.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_Lquizleague_web_maintain_database_DatabaseComponent$.prototype.constructor = $c_Lquizleague_web_maintain_database_DatabaseComponent$;
/** @constructor */
function $h_Lquizleague_web_maintain_database_DatabaseComponent$() {
  /*<skip>*/
}
export { $h_Lquizleague_web_maintain_database_DatabaseComponent$ as $h_Lquizleague_web_maintain_database_DatabaseComponent$ };
$h_Lquizleague_web_maintain_database_DatabaseComponent$.prototype = $c_Lquizleague_web_maintain_database_DatabaseComponent$.prototype;
$c_Lquizleague_web_maintain_database_DatabaseComponent$.prototype.mounted__sjs_js_Function = (function() {
  return null
});
$c_Lquizleague_web_maintain_database_DatabaseComponent$.prototype.beforeDestroy__sjs_js_Function = (function() {
  return null
});
$c_Lquizleague_web_maintain_database_DatabaseComponent$.prototype.name__T = (function() {
  return this.Lquizleague_web_maintain_database_DatabaseComponent$__f_name
});
$c_Lquizleague_web_maintain_database_DatabaseComponent$.prototype.quizleague$web$core$RouteComponent$_setter_$name_$eq__T__V = (function(x$1) {
  this.Lquizleague_web_maintain_database_DatabaseComponent$__f_name = x$1
});
$c_Lquizleague_web_maintain_database_DatabaseComponent$.prototype.quizleague$web$core$Component$$addedSubs__sci_Map = (function() {
  return this.Lquizleague_web_maintain_database_DatabaseComponent$__f_quizleague$web$core$Component$$addedSubs
});
$c_Lquizleague_web_maintain_database_DatabaseComponent$.prototype.quizleague$web$core$Component$$addedSubs_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_database_DatabaseComponent$__f_quizleague$web$core$Component$$addedSubs = x$1
});
$c_Lquizleague_web_maintain_database_DatabaseComponent$.prototype.quizleague$web$core$Component$$addedSubParams__sci_List = (function() {
  return this.Lquizleague_web_maintain_database_DatabaseComponent$__f_quizleague$web$core$Component$$addedSubParams
});
$c_Lquizleague_web_maintain_database_DatabaseComponent$.prototype.quizleague$web$core$Component$$addedSubParams_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_database_DatabaseComponent$__f_quizleague$web$core$Component$$addedSubParams = x$1
});
$c_Lquizleague_web_maintain_database_DatabaseComponent$.prototype.quizleague$web$core$Component$$addedProps__sci_List = (function() {
  return this.Lquizleague_web_maintain_database_DatabaseComponent$__f_quizleague$web$core$Component$$addedProps
});
$c_Lquizleague_web_maintain_database_DatabaseComponent$.prototype.quizleague$web$core$Component$$addedProps_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_database_DatabaseComponent$__f_quizleague$web$core$Component$$addedProps = x$1
});
$c_Lquizleague_web_maintain_database_DatabaseComponent$.prototype.quizleague$web$core$Component$$addedMethods__sci_Map = (function() {
  return this.Lquizleague_web_maintain_database_DatabaseComponent$__f_quizleague$web$core$Component$$addedMethods
});
$c_Lquizleague_web_maintain_database_DatabaseComponent$.prototype.quizleague$web$core$Component$$addedMethods_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_database_DatabaseComponent$__f_quizleague$web$core$Component$$addedMethods = x$1
});
$c_Lquizleague_web_maintain_database_DatabaseComponent$.prototype.quizleague$web$core$Component$$addedComputed__sci_Map = (function() {
  return this.Lquizleague_web_maintain_database_DatabaseComponent$__f_quizleague$web$core$Component$$addedComputed
});
$c_Lquizleague_web_maintain_database_DatabaseComponent$.prototype.quizleague$web$core$Component$$addedComputed_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_database_DatabaseComponent$__f_quizleague$web$core$Component$$addedComputed = x$1
});
$c_Lquizleague_web_maintain_database_DatabaseComponent$.prototype.quizleague$web$core$Component$$addedDataFn__sci_Map = (function() {
  return this.Lquizleague_web_maintain_database_DatabaseComponent$__f_quizleague$web$core$Component$$addedDataFn
});
$c_Lquizleague_web_maintain_database_DatabaseComponent$.prototype.quizleague$web$core$Component$$addedDataFn_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_database_DatabaseComponent$__f_quizleague$web$core$Component$$addedDataFn = x$1
});
$c_Lquizleague_web_maintain_database_DatabaseComponent$.prototype.quizleague$web$core$Component$$addedData__sci_Map = (function() {
  return this.Lquizleague_web_maintain_database_DatabaseComponent$__f_quizleague$web$core$Component$$addedData
});
$c_Lquizleague_web_maintain_database_DatabaseComponent$.prototype.quizleague$web$core$Component$$addedData_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_database_DatabaseComponent$__f_quizleague$web$core$Component$$addedData = x$1
});
$c_Lquizleague_web_maintain_database_DatabaseComponent$.prototype.quizleague$web$core$Component$$addedComponents__sci_List = (function() {
  return this.Lquizleague_web_maintain_database_DatabaseComponent$__f_quizleague$web$core$Component$$addedComponents
});
$c_Lquizleague_web_maintain_database_DatabaseComponent$.prototype.quizleague$web$core$Component$$addedComponents_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_database_DatabaseComponent$__f_quizleague$web$core$Component$$addedComponents = x$1
});
$c_Lquizleague_web_maintain_database_DatabaseComponent$.prototype.quizleague$web$core$Component$$addedWatch__sci_Map = (function() {
  return this.Lquizleague_web_maintain_database_DatabaseComponent$__f_quizleague$web$core$Component$$addedWatch
});
$c_Lquizleague_web_maintain_database_DatabaseComponent$.prototype.quizleague$web$core$Component$$addedWatch_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_database_DatabaseComponent$__f_quizleague$web$core$Component$$addedWatch = x$1
});
$c_Lquizleague_web_maintain_database_DatabaseComponent$.prototype.empty__sjs_js_Object = (function() {
  return this.Lquizleague_web_maintain_database_DatabaseComponent$__f_empty
});
$c_Lquizleague_web_maintain_database_DatabaseComponent$.prototype.quizleague$web$core$Component$$commonMethods__sci_Map = (function() {
  return this.Lquizleague_web_maintain_database_DatabaseComponent$__f_quizleague$web$core$Component$$commonMethods
});
$c_Lquizleague_web_maintain_database_DatabaseComponent$.prototype.quizleague$web$core$Component$_setter_$empty_$eq__sjs_js_Object__V = (function(x$1) {
  this.Lquizleague_web_maintain_database_DatabaseComponent$__f_empty = x$1
});
$c_Lquizleague_web_maintain_database_DatabaseComponent$.prototype.quizleague$web$core$Component$_setter_$quizleague$web$core$Component$$commonMethods_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_database_DatabaseComponent$__f_quizleague$web$core$Component$$commonMethods = x$1
});
$c_Lquizleague_web_maintain_database_DatabaseComponent$.prototype.template__T = (function() {
  return this.Lquizleague_web_maintain_database_DatabaseComponent$__f_template
});
$c_Lquizleague_web_maintain_database_DatabaseComponent$.prototype.nestedupload__Lquizleague_web_maintain_database_DatabaseComponent__V = (function(c) {
  var file = document.getElementById("upload-nested-text-field").files[0];
  var qual$1 = $m_Lquizleague_web_maintain_database_DatabaseService$().nestedupload__Lorg_scalajs_dom_File__Lrxscalajs_subjects_ReplaySubject(file);
  var x$1 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((x$2) => {
    c.uploadText = "Success!";
    c.uploadComplete = true
  }));
  var x$2$2 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((e$2) => {
    c.uploadText = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$dp_toString__T($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(e$2));
    c.uploadComplete = true
  }));
  var x$3 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(qual$1).subscribe$default$3__F0();
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(qual$1).subscribe__F1__F1__F0__Lrxscalajs_subscription_Subscription(x$1, x$2$2, x$3)
});
var $d_Lquizleague_web_maintain_database_DatabaseComponent$ = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  Lquizleague_web_maintain_database_DatabaseComponent$: 0
}, false, "quizleague.web.maintain.database.DatabaseComponent$", {
  Lquizleague_web_maintain_database_DatabaseComponent$: 1,
  O: 1,
  Lquizleague_web_core_RouteComponent: 1,
  Lquizleague_web_core_Component: 1
});
export { $d_Lquizleague_web_maintain_database_DatabaseComponent$ as $d_Lquizleague_web_maintain_database_DatabaseComponent$ };
$c_Lquizleague_web_maintain_database_DatabaseComponent$.prototype.$classData = $d_Lquizleague_web_maintain_database_DatabaseComponent$;
var $n_Lquizleague_web_maintain_database_DatabaseComponent$;
function $m_Lquizleague_web_maintain_database_DatabaseComponent$() {
  if ((!$n_Lquizleague_web_maintain_database_DatabaseComponent$)) {
    $n_Lquizleague_web_maintain_database_DatabaseComponent$ = new $c_Lquizleague_web_maintain_database_DatabaseComponent$()
  };
  return $n_Lquizleague_web_maintain_database_DatabaseComponent$
}
export { $m_Lquizleague_web_maintain_database_DatabaseComponent$ as $m_Lquizleague_web_maintain_database_DatabaseComponent$ };
/** @constructor */
function $c_Lquizleague_web_maintain_stats_StatsComponent$() {
  this.Lquizleague_web_maintain_stats_StatsComponent$__f_template = null;
  this.Lquizleague_web_maintain_stats_StatsComponent$__f_name = null;
  this.Lquizleague_web_maintain_stats_StatsComponent$__f_quizleague$web$core$Component$$addedSubs = null;
  this.Lquizleague_web_maintain_stats_StatsComponent$__f_quizleague$web$core$Component$$addedSubParams = null;
  this.Lquizleague_web_maintain_stats_StatsComponent$__f_quizleague$web$core$Component$$addedProps = null;
  this.Lquizleague_web_maintain_stats_StatsComponent$__f_quizleague$web$core$Component$$addedMethods = null;
  this.Lquizleague_web_maintain_stats_StatsComponent$__f_quizleague$web$core$Component$$addedComputed = null;
  this.Lquizleague_web_maintain_stats_StatsComponent$__f_quizleague$web$core$Component$$addedDataFn = null;
  this.Lquizleague_web_maintain_stats_StatsComponent$__f_quizleague$web$core$Component$$addedData = null;
  this.Lquizleague_web_maintain_stats_StatsComponent$__f_quizleague$web$core$Component$$addedComponents = null;
  this.Lquizleague_web_maintain_stats_StatsComponent$__f_quizleague$web$core$Component$$addedWatch = null;
  this.Lquizleague_web_maintain_stats_StatsComponent$__f_empty = null;
  this.Lquizleague_web_maintain_stats_StatsComponent$__f_quizleague$web$core$Component$$commonMethods = null;
  $n_Lquizleague_web_maintain_stats_StatsComponent$ = this;
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__$init$__V(this);
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_RouteComponent__$init$__V(this);
  this.Lquizleague_web_maintain_stats_StatsComponent$__f_template = "\n    <v-container grid-list-lg>\n      <v-layout column fluid>\n       <div>        \n       <v-select\n          label=\"Select Season\"\n          :items=\"seasons\"\n          v-model=\"season\"\n          required\n          >\n        </v-select>\n       <v-btn text color=\"primary\" :disabled=\"!season\" v-on:click=\"regenerate\" ><v-icon left>mdi-refresh</v-icon>Regenerate</v-btn>\n       </div>\n        <v-dialog v-model=\"complete\" max-width=\"400px\">\n          <v-card>\n            <v-card-text>{{resultText}}</v-card-text>\n          </v-card>\n        </v-dialog>\n      </v-layout>\n    </v-container>\n    ";
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__data__T__O__V(this, "complete", false);
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__data__T__O__V(this, "resultText", "Not yet uploaded");
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__data__T__O__V(this, "season", null);
  var fn = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_sjs_js_ThisFunction$().fromFunction1__F1__sjs_js_ThisFunction0(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((c$2) => {
    $m_Lquizleague_web_maintain_stats_StatsComponent$().regenerate__Lquizleague_web_maintain_stats_StatsComponent__V(c$2)
  })));
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__method__T__sjs_js_Function__V(this, "regenerate", fn);
  var array = [];
  var fn$1 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((c$3$2) => $m_Lquizleague_web_maintain_stats_StatsComponent$().seasons__Lrxscalajs_Observable()));
  this.Lquizleague_web_maintain_stats_StatsComponent$__f_quizleague$web$core$Component$$addedSubs = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.Lquizleague_web_maintain_stats_StatsComponent$__f_quizleague$web$core$Component$$addedSubs).$plus__T2__sci_Map(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2("seasons", fn$1));
  var $$x1 = this.Lquizleague_web_maintain_stats_StatsComponent$__f_quizleague$web$core$Component$$addedSubParams;
  var this$4 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sc_Seq$();
  var bf = this$4.scg_GenTraversableFactory__f_ReusableCBFInstance;
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(bf);
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sjs_js_WrappedArray$();
  var b = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$ct_sjs_js_WrappedArray__(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjs_js_WrappedArray());
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length);
  var i = 0;
  var len = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length);
  while ((i < len)) {
    var index = i;
    var arg1 = array[index];
    var x$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(arg1);
    var elem = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2(x$1, "seasons");
    b.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.push(elem);
    i = ((1 + i) | 0)
  };
  var this$7 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sci_List$();
  this.Lquizleague_web_maintain_stats_StatsComponent$__f_quizleague$web$core$Component$$addedSubParams = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_sci_List($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($$x1).$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O(b, this$7.scg_GenTraversableFactory__f_ReusableCBFInstance))
}
export { $c_Lquizleague_web_maintain_stats_StatsComponent$ as $c_Lquizleague_web_maintain_stats_StatsComponent$ };
$c_Lquizleague_web_maintain_stats_StatsComponent$.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_Lquizleague_web_maintain_stats_StatsComponent$.prototype.constructor = $c_Lquizleague_web_maintain_stats_StatsComponent$;
/** @constructor */
function $h_Lquizleague_web_maintain_stats_StatsComponent$() {
  /*<skip>*/
}
export { $h_Lquizleague_web_maintain_stats_StatsComponent$ as $h_Lquizleague_web_maintain_stats_StatsComponent$ };
$h_Lquizleague_web_maintain_stats_StatsComponent$.prototype = $c_Lquizleague_web_maintain_stats_StatsComponent$.prototype;
$c_Lquizleague_web_maintain_stats_StatsComponent$.prototype.mounted__sjs_js_Function = (function() {
  return null
});
$c_Lquizleague_web_maintain_stats_StatsComponent$.prototype.beforeDestroy__sjs_js_Function = (function() {
  return null
});
$c_Lquizleague_web_maintain_stats_StatsComponent$.prototype.name__T = (function() {
  return this.Lquizleague_web_maintain_stats_StatsComponent$__f_name
});
$c_Lquizleague_web_maintain_stats_StatsComponent$.prototype.quizleague$web$core$RouteComponent$_setter_$name_$eq__T__V = (function(x$1) {
  this.Lquizleague_web_maintain_stats_StatsComponent$__f_name = x$1
});
$c_Lquizleague_web_maintain_stats_StatsComponent$.prototype.quizleague$web$core$Component$$addedSubs__sci_Map = (function() {
  return this.Lquizleague_web_maintain_stats_StatsComponent$__f_quizleague$web$core$Component$$addedSubs
});
$c_Lquizleague_web_maintain_stats_StatsComponent$.prototype.quizleague$web$core$Component$$addedSubs_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_stats_StatsComponent$__f_quizleague$web$core$Component$$addedSubs = x$1
});
$c_Lquizleague_web_maintain_stats_StatsComponent$.prototype.quizleague$web$core$Component$$addedSubParams__sci_List = (function() {
  return this.Lquizleague_web_maintain_stats_StatsComponent$__f_quizleague$web$core$Component$$addedSubParams
});
$c_Lquizleague_web_maintain_stats_StatsComponent$.prototype.quizleague$web$core$Component$$addedSubParams_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_stats_StatsComponent$__f_quizleague$web$core$Component$$addedSubParams = x$1
});
$c_Lquizleague_web_maintain_stats_StatsComponent$.prototype.quizleague$web$core$Component$$addedProps__sci_List = (function() {
  return this.Lquizleague_web_maintain_stats_StatsComponent$__f_quizleague$web$core$Component$$addedProps
});
$c_Lquizleague_web_maintain_stats_StatsComponent$.prototype.quizleague$web$core$Component$$addedProps_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_stats_StatsComponent$__f_quizleague$web$core$Component$$addedProps = x$1
});
$c_Lquizleague_web_maintain_stats_StatsComponent$.prototype.quizleague$web$core$Component$$addedMethods__sci_Map = (function() {
  return this.Lquizleague_web_maintain_stats_StatsComponent$__f_quizleague$web$core$Component$$addedMethods
});
$c_Lquizleague_web_maintain_stats_StatsComponent$.prototype.quizleague$web$core$Component$$addedMethods_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_stats_StatsComponent$__f_quizleague$web$core$Component$$addedMethods = x$1
});
$c_Lquizleague_web_maintain_stats_StatsComponent$.prototype.quizleague$web$core$Component$$addedComputed__sci_Map = (function() {
  return this.Lquizleague_web_maintain_stats_StatsComponent$__f_quizleague$web$core$Component$$addedComputed
});
$c_Lquizleague_web_maintain_stats_StatsComponent$.prototype.quizleague$web$core$Component$$addedComputed_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_stats_StatsComponent$__f_quizleague$web$core$Component$$addedComputed = x$1
});
$c_Lquizleague_web_maintain_stats_StatsComponent$.prototype.quizleague$web$core$Component$$addedDataFn__sci_Map = (function() {
  return this.Lquizleague_web_maintain_stats_StatsComponent$__f_quizleague$web$core$Component$$addedDataFn
});
$c_Lquizleague_web_maintain_stats_StatsComponent$.prototype.quizleague$web$core$Component$$addedDataFn_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_stats_StatsComponent$__f_quizleague$web$core$Component$$addedDataFn = x$1
});
$c_Lquizleague_web_maintain_stats_StatsComponent$.prototype.quizleague$web$core$Component$$addedData__sci_Map = (function() {
  return this.Lquizleague_web_maintain_stats_StatsComponent$__f_quizleague$web$core$Component$$addedData
});
$c_Lquizleague_web_maintain_stats_StatsComponent$.prototype.quizleague$web$core$Component$$addedData_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_stats_StatsComponent$__f_quizleague$web$core$Component$$addedData = x$1
});
$c_Lquizleague_web_maintain_stats_StatsComponent$.prototype.quizleague$web$core$Component$$addedComponents__sci_List = (function() {
  return this.Lquizleague_web_maintain_stats_StatsComponent$__f_quizleague$web$core$Component$$addedComponents
});
$c_Lquizleague_web_maintain_stats_StatsComponent$.prototype.quizleague$web$core$Component$$addedComponents_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_stats_StatsComponent$__f_quizleague$web$core$Component$$addedComponents = x$1
});
$c_Lquizleague_web_maintain_stats_StatsComponent$.prototype.quizleague$web$core$Component$$addedWatch__sci_Map = (function() {
  return this.Lquizleague_web_maintain_stats_StatsComponent$__f_quizleague$web$core$Component$$addedWatch
});
$c_Lquizleague_web_maintain_stats_StatsComponent$.prototype.quizleague$web$core$Component$$addedWatch_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_stats_StatsComponent$__f_quizleague$web$core$Component$$addedWatch = x$1
});
$c_Lquizleague_web_maintain_stats_StatsComponent$.prototype.empty__sjs_js_Object = (function() {
  return this.Lquizleague_web_maintain_stats_StatsComponent$__f_empty
});
$c_Lquizleague_web_maintain_stats_StatsComponent$.prototype.quizleague$web$core$Component$$commonMethods__sci_Map = (function() {
  return this.Lquizleague_web_maintain_stats_StatsComponent$__f_quizleague$web$core$Component$$commonMethods
});
$c_Lquizleague_web_maintain_stats_StatsComponent$.prototype.quizleague$web$core$Component$_setter_$empty_$eq__sjs_js_Object__V = (function(x$1) {
  this.Lquizleague_web_maintain_stats_StatsComponent$__f_empty = x$1
});
$c_Lquizleague_web_maintain_stats_StatsComponent$.prototype.quizleague$web$core$Component$_setter_$quizleague$web$core$Component$$commonMethods_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_stats_StatsComponent$__f_quizleague$web$core$Component$$commonMethods = x$1
});
$c_Lquizleague_web_maintain_stats_StatsComponent$.prototype.template__T = (function() {
  return this.Lquizleague_web_maintain_stats_StatsComponent$__f_template
});
$c_Lquizleague_web_maintain_stats_StatsComponent$.prototype.seasons__Lrxscalajs_Observable = (function() {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_util_component_SelectUtils$().model__Lquizleague_web_service_GetService__F1__Lrxscalajs_Observable($m_Lquizleague_web_maintain_season_SeasonService$(), new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((s$2) => (($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(s$2.startYear) + "/") + $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(s$2.endYear)))))
});
$c_Lquizleague_web_maintain_stats_StatsComponent$.prototype.regenerate__Lquizleague_web_maintain_stats_StatsComponent__V = (function(c) {
  var qual$1 = $m_Lquizleague_web_maintain_stats_StatsService$().rebuild__T__Lrxscalajs_Observable($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(c.season.id));
  var x$1 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((x$2) => {
    $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(x$2)
  }));
  var x$2$2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(qual$1).subscribe$default$2__F1();
  var x$3 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(qual$1).subscribe$default$3__F0();
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(qual$1).subscribe__F1__F1__F0__Lrxscalajs_subscription_Subscription(x$1, x$2$2, x$3)
});
var $d_Lquizleague_web_maintain_stats_StatsComponent$ = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  Lquizleague_web_maintain_stats_StatsComponent$: 0
}, false, "quizleague.web.maintain.stats.StatsComponent$", {
  Lquizleague_web_maintain_stats_StatsComponent$: 1,
  O: 1,
  Lquizleague_web_core_RouteComponent: 1,
  Lquizleague_web_core_Component: 1
});
export { $d_Lquizleague_web_maintain_stats_StatsComponent$ as $d_Lquizleague_web_maintain_stats_StatsComponent$ };
$c_Lquizleague_web_maintain_stats_StatsComponent$.prototype.$classData = $d_Lquizleague_web_maintain_stats_StatsComponent$;
var $n_Lquizleague_web_maintain_stats_StatsComponent$;
function $m_Lquizleague_web_maintain_stats_StatsComponent$() {
  if ((!$n_Lquizleague_web_maintain_stats_StatsComponent$)) {
    $n_Lquizleague_web_maintain_stats_StatsComponent$ = new $c_Lquizleague_web_maintain_stats_StatsComponent$()
  };
  return $n_Lquizleague_web_maintain_stats_StatsComponent$
}
export { $m_Lquizleague_web_maintain_stats_StatsComponent$ as $m_Lquizleague_web_maintain_stats_StatsComponent$ };
function $f_s_Product5__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.T5__f__1;
      break
    }
    case 1: {
      return $thiz.T5__f__2;
      break
    }
    case 2: {
      return $thiz.T5__f__3;
      break
    }
    case 3: {
      return $thiz.T5__f__4;
      break
    }
    case 4: {
      return $thiz.T5__f__5;
      break
    }
    default: {
      throw $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$ct_jl_IndexOutOfBoundsException__T__(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_jl_IndexOutOfBoundsException(), ("" + n))
    }
  }
}
export { $f_s_Product5__productElement__I__O as $f_s_Product5__productElement__I__O };
/** @constructor */
function $c_Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$() {
  this.Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$__f_service = null;
  this.Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$__f_template = null;
  this.Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$__f_name = null;
  this.Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$__f_paramName = null;
  this.Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$__f_quizleague$web$core$Component$$addedSubs = null;
  this.Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$__f_quizleague$web$core$Component$$addedSubParams = null;
  this.Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$__f_quizleague$web$core$Component$$addedProps = null;
  this.Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$__f_quizleague$web$core$Component$$addedMethods = null;
  this.Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$__f_quizleague$web$core$Component$$addedComputed = null;
  this.Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$__f_quizleague$web$core$Component$$addedDataFn = null;
  this.Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$__f_quizleague$web$core$Component$$addedData = null;
  this.Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$__f_quizleague$web$core$Component$$addedComponents = null;
  this.Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$__f_quizleague$web$core$Component$$addedWatch = null;
  this.Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$__f_empty = null;
  this.Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$__f_quizleague$web$core$Component$$commonMethods = null;
  $n_Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$ = this;
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__$init$__V(this);
  $f_Lquizleague_web_maintain_component_ItemComponentConfig__$init$__V(this);
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_RouteComponent__$init$__V(this);
  this.Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$__f_service = $m_Lquizleague_web_maintain_applicationcontext_ApplicationContextService$();
  this.Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$__f_template = (((((((((((("\n  <v-container v-if=\"item\">\n    <v-form v-model=\"valid\" ref=\"fm\">\n      <v-layout column>\n        <v-text-field\n          label=\"League Name\"\n          v-model=\"item.leagueName\"\n          :rules=" + $m_Lquizleague_web_maintain_component_TemplateElements$().valRequired__T__T("Name")) + "\n          required\n        ></v-text-field>\n        <v-select\n          label=\"Global Text\"\n          :items=\"textSets\"\n          v-model=\"item.textSet\"\n          :rules=") + $m_Lquizleague_web_maintain_component_TemplateElements$().valRequired__T__T("Name")) + "\n          required\n          >\n        </v-select>\n        <v-select\n          label=\"Current Season\"\n          :items=\"seasons\"\n          v-model=\"item.currentSeason\"\n          :rules=") + $m_Lquizleague_web_maintain_component_TemplateElements$().valRequired__T__T("Name")) + "\n          required\n          >\n        </v-select>\n        <v-text-field\n          label=\"Sender Email\"\n          v-model=\"item.senderEmail\"\n          :rules=") + $m_Lquizleague_web_maintain_component_TemplateElements$().valRequired__T__T("Name")) + "\n          required\n        ></v-text-field>\n        <v-text-field\n          label=\"Cloud Store Bucket\"\n          v-model=\"item.cloudStoreBucket\"\n          :rules=") + $m_Lquizleague_web_maintain_component_TemplateElements$().valRequired__T__T("Name")) + "\n          required\n        ></v-text-field>\n        <v-layout column>\n          <span>Email Aliases</span>\n          <v-layout row>\n            <v-btn style=\"position:relative;top:12px\" :disabled=\"!alias && !user\" v-on:click=\"addAlias\" icon><v-icon>mdi-plus</v-icon></v-btn>\n            <v-text-field v-model=\"alias\" label=\"Alias\"></v-text-field>\n            <v-select clearable v-model=\"user\" label=\"Select User\" :items=\"users\"></v-select>\n          </v-layout>\n        <div>\n          <v-chip close @input=\"removeAlias(c)\" v-for=\"c in item.emailAliases\" :key=\"c.alias\">{{c.alias}} :: {{async(c.user).name}}</v-chip>\n        </div>\n        </v-layout>\n     </v-layout>\n     ") + $m_Lquizleague_web_maintain_component_TemplateElements$().Lquizleague_web_maintain_component_TemplateElements$__f_formButtons) + "\n    </v-form>\n  </v-container>");
  var array = [];
  var fn = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((c$2) => {
    var this$4 = $m_Lquizleague_web_maintain_applicationcontext_ApplicationContextService$();
    var id = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_domain_ApplicationContext$().Lquizleague_domain_ApplicationContext$__f_singletonId;
    return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__get__T__Lrxscalajs_Observable(this$4, id)
  }));
  this.Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$__f_quizleague$web$core$Component$$addedSubs = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$__f_quizleague$web$core$Component$$addedSubs).$plus__T2__sci_Map(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2("item", fn));
  var $$x1 = this.Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$__f_quizleague$web$core$Component$$addedSubParams;
  var this$5 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sc_Seq$();
  var bf = this$5.scg_GenTraversableFactory__f_ReusableCBFInstance;
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(bf);
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sjs_js_WrappedArray$();
  var b = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$ct_sjs_js_WrappedArray__(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjs_js_WrappedArray());
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length);
  var i = 0;
  var len = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length);
  while ((i < len)) {
    var index = i;
    var arg1 = array[index];
    var x$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(arg1);
    var elem = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2(x$1, "item");
    b.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.push(elem);
    i = ((1 + i) | 0)
  };
  var this$8 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sci_List$();
  this.Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$__f_quizleague$web$core$Component$$addedSubParams = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_sci_List($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($$x1).$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O(b, this$8.scg_GenTraversableFactory__f_ReusableCBFInstance));
  var array$1 = [];
  var fn$1 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((c$3$2) => $m_Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$().users__Lrxscalajs_Observable()));
  this.Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$__f_quizleague$web$core$Component$$addedSubs = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$__f_quizleague$web$core$Component$$addedSubs).$plus__T2__sci_Map(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2("users", fn$1));
  var $$x2 = this.Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$__f_quizleague$web$core$Component$$addedSubParams;
  var this$11 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sc_Seq$();
  var bf$1 = this$11.scg_GenTraversableFactory__f_ReusableCBFInstance;
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(bf$1);
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sjs_js_WrappedArray$();
  var b$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$ct_sjs_js_WrappedArray__(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjs_js_WrappedArray());
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array$1.length);
  var i$1 = 0;
  var len$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array$1.length);
  while ((i$1 < len$1)) {
    var index$1 = i$1;
    var arg1$1 = array$1[index$1];
    var x$1$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(arg1$1);
    var elem$1 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2(x$1$1, "users");
    b$1.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.push(elem$1);
    i$1 = ((1 + i$1) | 0)
  };
  var this$14 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sci_List$();
  this.Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$__f_quizleague$web$core$Component$$addedSubParams = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_sci_List($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($$x2).$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O(b$1, this$14.scg_GenTraversableFactory__f_ReusableCBFInstance));
  var array$2 = [];
  var fn$2 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((c$4$2) => $m_Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$().textSets__Lrxscalajs_Observable()));
  this.Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$__f_quizleague$web$core$Component$$addedSubs = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$__f_quizleague$web$core$Component$$addedSubs).$plus__T2__sci_Map(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2("textSets", fn$2));
  var $$x3 = this.Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$__f_quizleague$web$core$Component$$addedSubParams;
  var this$17 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sc_Seq$();
  var bf$2 = this$17.scg_GenTraversableFactory__f_ReusableCBFInstance;
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(bf$2);
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sjs_js_WrappedArray$();
  var b$2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$ct_sjs_js_WrappedArray__(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjs_js_WrappedArray());
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array$2.length);
  var i$2 = 0;
  var len$2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array$2.length);
  while ((i$2 < len$2)) {
    var index$2 = i$2;
    var arg1$2 = array$2[index$2];
    var x$1$2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(arg1$2);
    var elem$2 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2(x$1$2, "textSets");
    b$2.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.push(elem$2);
    i$2 = ((1 + i$2) | 0)
  };
  var this$20 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sci_List$();
  this.Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$__f_quizleague$web$core$Component$$addedSubParams = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_sci_List($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($$x3).$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O(b$2, this$20.scg_GenTraversableFactory__f_ReusableCBFInstance));
  var array$3 = [];
  var fn$3 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((c$5$2) => $m_Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$().seasons__Lrxscalajs_Observable()));
  this.Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$__f_quizleague$web$core$Component$$addedSubs = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$__f_quizleague$web$core$Component$$addedSubs).$plus__T2__sci_Map(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2("seasons", fn$3));
  var $$x4 = this.Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$__f_quizleague$web$core$Component$$addedSubParams;
  var this$23 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sc_Seq$();
  var bf$3 = this$23.scg_GenTraversableFactory__f_ReusableCBFInstance;
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(bf$3);
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sjs_js_WrappedArray$();
  var b$3 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$ct_sjs_js_WrappedArray__(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjs_js_WrappedArray());
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array$3.length);
  var i$3 = 0;
  var len$3 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array$3.length);
  while ((i$3 < len$3)) {
    var index$3 = i$3;
    var arg1$3 = array$3[index$3];
    var x$1$3 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(arg1$3);
    var elem$3 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2(x$1$3, "seasons");
    b$3.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.push(elem$3);
    i$3 = ((1 + i$3) | 0)
  };
  var this$26 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sci_List$();
  this.Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$__f_quizleague$web$core$Component$$addedSubParams = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_sci_List($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($$x4).$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O(b$3, this$26.scg_GenTraversableFactory__f_ReusableCBFInstance));
  var fn$4 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_sjs_js_ThisFunction$().fromFunction2__F2__sjs_js_ThisFunction1(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction2(((c$6$2, alias$2) => $m_Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$().removeAlias__Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent__Lquizleague_web_model_EmailAlias__sjs_js_WrappedArray(c$6$2, alias$2))));
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__method__T__sjs_js_Function__V(this, "removeAlias", fn$4);
  var fn$5 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_sjs_js_ThisFunction$().fromFunction1__F1__sjs_js_ThisFunction0(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((c$7$2) => {
    $m_Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$().addAlias__Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent__V(c$7$2)
  })));
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__method__T__sjs_js_Function__V(this, "addAlias", fn$5);
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__data__T__O__V(this, "user", null);
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__data__T__O__V(this, "alias", null)
}
export { $c_Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$ as $c_Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$ };
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$.prototype.constructor = $c_Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$;
/** @constructor */
function $h_Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$() {
  /*<skip>*/
}
export { $h_Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$ as $h_Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$ };
$h_Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$.prototype = $c_Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$.prototype;
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$.prototype.save__Lquizleague_web_maintain_component_ItemComponent__V = (function(c) {
  $f_Lquizleague_web_maintain_component_ItemComponentConfig__save__Lquizleague_web_maintain_component_ItemComponent__V(this, c)
});
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$.prototype.mounted__sjs_js_Function = (function() {
  return null
});
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$.prototype.beforeDestroy__sjs_js_Function = (function() {
  return null
});
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$.prototype.name__T = (function() {
  return this.Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$__f_name
});
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$.prototype.quizleague$web$core$RouteComponent$_setter_$name_$eq__T__V = (function(x$1) {
  this.Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$__f_name = x$1
});
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$.prototype.paramName__T = (function() {
  return this.Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$__f_paramName
});
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$.prototype.quizleague$web$maintain$component$ItemComponentConfig$_setter_$paramName_$eq__T__V = (function(x$1) {
  this.Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$__f_paramName = x$1
});
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$.prototype.quizleague$web$core$Component$$addedSubs__sci_Map = (function() {
  return this.Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$__f_quizleague$web$core$Component$$addedSubs
});
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$.prototype.quizleague$web$core$Component$$addedSubs_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$__f_quizleague$web$core$Component$$addedSubs = x$1
});
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$.prototype.quizleague$web$core$Component$$addedSubParams__sci_List = (function() {
  return this.Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$__f_quizleague$web$core$Component$$addedSubParams
});
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$.prototype.quizleague$web$core$Component$$addedSubParams_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$__f_quizleague$web$core$Component$$addedSubParams = x$1
});
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$.prototype.quizleague$web$core$Component$$addedProps__sci_List = (function() {
  return this.Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$__f_quizleague$web$core$Component$$addedProps
});
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$.prototype.quizleague$web$core$Component$$addedProps_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$__f_quizleague$web$core$Component$$addedProps = x$1
});
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$.prototype.quizleague$web$core$Component$$addedMethods__sci_Map = (function() {
  return this.Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$__f_quizleague$web$core$Component$$addedMethods
});
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$.prototype.quizleague$web$core$Component$$addedMethods_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$__f_quizleague$web$core$Component$$addedMethods = x$1
});
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$.prototype.quizleague$web$core$Component$$addedComputed__sci_Map = (function() {
  return this.Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$__f_quizleague$web$core$Component$$addedComputed
});
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$.prototype.quizleague$web$core$Component$$addedComputed_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$__f_quizleague$web$core$Component$$addedComputed = x$1
});
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$.prototype.quizleague$web$core$Component$$addedDataFn__sci_Map = (function() {
  return this.Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$__f_quizleague$web$core$Component$$addedDataFn
});
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$.prototype.quizleague$web$core$Component$$addedDataFn_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$__f_quizleague$web$core$Component$$addedDataFn = x$1
});
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$.prototype.quizleague$web$core$Component$$addedData__sci_Map = (function() {
  return this.Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$__f_quizleague$web$core$Component$$addedData
});
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$.prototype.quizleague$web$core$Component$$addedData_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$__f_quizleague$web$core$Component$$addedData = x$1
});
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$.prototype.quizleague$web$core$Component$$addedComponents__sci_List = (function() {
  return this.Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$__f_quizleague$web$core$Component$$addedComponents
});
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$.prototype.quizleague$web$core$Component$$addedComponents_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$__f_quizleague$web$core$Component$$addedComponents = x$1
});
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$.prototype.quizleague$web$core$Component$$addedWatch__sci_Map = (function() {
  return this.Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$__f_quizleague$web$core$Component$$addedWatch
});
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$.prototype.quizleague$web$core$Component$$addedWatch_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$__f_quizleague$web$core$Component$$addedWatch = x$1
});
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$.prototype.empty__sjs_js_Object = (function() {
  return this.Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$__f_empty
});
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$.prototype.quizleague$web$core$Component$$commonMethods__sci_Map = (function() {
  return this.Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$__f_quizleague$web$core$Component$$commonMethods
});
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$.prototype.quizleague$web$core$Component$_setter_$empty_$eq__sjs_js_Object__V = (function(x$1) {
  this.Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$__f_empty = x$1
});
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$.prototype.quizleague$web$core$Component$_setter_$quizleague$web$core$Component$$commonMethods_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$__f_quizleague$web$core$Component$$commonMethods = x$1
});
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$.prototype.users__Lrxscalajs_Observable = (function() {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_util_component_SelectUtils$().model__Lquizleague_web_service_GetService__F1__Lrxscalajs_Observable($j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_maintain_user_UserService$(), new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((x$1$2) => $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(x$1$2.name))))
});
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$.prototype.textSets__Lrxscalajs_Observable = (function() {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_util_component_SelectUtils$().model__Lquizleague_web_service_GetService__F1__Lrxscalajs_Observable($m_Lquizleague_web_maintain_globaltext_GlobalTextService$(), new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((x$2$2) => $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(x$2$2.name))))
});
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$.prototype.seasons__Lrxscalajs_Observable = (function() {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_util_component_SelectUtils$().model__Lquizleague_web_service_GetService__F1__Lrxscalajs_Observable($m_Lquizleague_web_maintain_season_SeasonService$(), new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((s$2) => (($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(s$2.startYear) + "/") + $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(s$2.endYear)))))
});
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$.prototype.template__T = (function() {
  return this.Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$__f_template
});
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$.prototype.removeAlias__Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent__Lquizleague_web_model_EmailAlias__sjs_js_WrappedArray = (function(c, alias) {
  var array = c.item.emailAliases;
  var this$2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$ct_sjs_js_WrappedArray__sjs_js_Array__(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjs_js_WrappedArray(), array);
  return $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_sjs_js_WrappedArray($j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_scm_BufferLike__$minus$eq__O__scm_Buffer(this$2, alias))
});
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$.prototype.addAlias__Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent__V = (function(c) {
  var array = c.item.emailAliases;
  var elem = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_model_EmailAlias$().apply__T__Lquizleague_web_util_rx_RefObservable__Lquizleague_web_model_EmailAlias($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(c.alias), c.user);
  array.push(elem);
  c.alias = null;
  c.user = null
});
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$.prototype.parentKey__Lquizleague_web_maintain_component_ItemComponent__T = (function(c) {
  return null
});
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$.prototype.service__Lquizleague_web_service_GetService = (function() {
  return this.Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$__f_service
});
var $d_Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$ = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$: 0
}, false, "quizleague.web.maintain.applicationcontext.ApplicationContextComponent$", {
  Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$: 1,
  O: 1,
  Lquizleague_web_maintain_component_ItemComponentConfig: 1,
  Lquizleague_web_core_Component: 1,
  Lquizleague_web_core_RouteComponent: 1
});
export { $d_Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$ as $d_Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$ };
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$.prototype.$classData = $d_Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$;
var $n_Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$;
function $m_Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$() {
  if ((!$n_Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$)) {
    $n_Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$ = new $c_Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$()
  };
  return $n_Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$
}
export { $m_Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$ as $m_Lquizleague_web_maintain_applicationcontext_ApplicationContextComponent$ };
function $f_Lquizleague_web_maintain_competition_CompetitionComponentConfig__parentKey__Lquizleague_web_maintain_competition_CompetitionComponent__T($thiz, c) {
  var dict = c.$route.params;
  if ((!$j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uZ($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sjs_js_WrappedDictionary$Cache$().sjs_js_WrappedDictionary$Cache$__f_safeHasOwnProperty.call(dict, "seasonId")))) {
    throw $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$ct_ju_NoSuchElementException__T__(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_ju_NoSuchElementException(), "key not found: seasonId")
  };
  var $$x2 = new ($j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$a_Lquizleague_web_model_Key())(null, "season", $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(dict.seasonId));
  var $$x1 = $$x2.key;
  return $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T($$x1)
}
export { $f_Lquizleague_web_maintain_competition_CompetitionComponentConfig__parentKey__Lquizleague_web_maintain_competition_CompetitionComponent__T as $f_Lquizleague_web_maintain_competition_CompetitionComponentConfig__parentKey__Lquizleague_web_maintain_competition_CompetitionComponent__T };
function $f_Lquizleague_web_maintain_competition_CompetitionComponentConfig__fixtures__Lquizleague_web_maintain_competition_CompetitionComponent__V($thiz, c) {
  c.$router.push("fixtures")
}
export { $f_Lquizleague_web_maintain_competition_CompetitionComponentConfig__fixtures__Lquizleague_web_maintain_competition_CompetitionComponent__V as $f_Lquizleague_web_maintain_competition_CompetitionComponentConfig__fixtures__Lquizleague_web_maintain_competition_CompetitionComponent__V };
function $f_Lquizleague_web_maintain_competition_CompetitionComponentConfig__toTable__Lquizleague_web_maintain_competition_CompetitionComponent__T__V($thiz, c, tableId) {
  c.$router.push(("leaguetable/" + tableId))
}
export { $f_Lquizleague_web_maintain_competition_CompetitionComponentConfig__toTable__Lquizleague_web_maintain_competition_CompetitionComponent__T__V as $f_Lquizleague_web_maintain_competition_CompetitionComponentConfig__toTable__Lquizleague_web_maintain_competition_CompetitionComponent__T__V };
function $f_Lquizleague_web_maintain_competition_CompetitionComponentConfig__removeTable__Lquizleague_web_maintain_competition_CompetitionComponent__Lquizleague_web_model_LeagueTable__O($thiz, c, table) {
  if ($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uZ(window.confirm("Delete ?"))) {
    var this$1 = $m_Lquizleague_web_maintain_leaguetable_LeagueTableService$();
    return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_PutService__delete__Lquizleague_web_model_Model__Lrxscalajs_Observable(this$1, table)
  } else {
    return (void 0)
  }
}
export { $f_Lquizleague_web_maintain_competition_CompetitionComponentConfig__removeTable__Lquizleague_web_maintain_competition_CompetitionComponent__Lquizleague_web_model_LeagueTable__O as $f_Lquizleague_web_maintain_competition_CompetitionComponentConfig__removeTable__Lquizleague_web_maintain_competition_CompetitionComponent__Lquizleague_web_model_LeagueTable__O };
function $f_Lquizleague_web_maintain_competition_CompetitionComponentConfig__addTable__Lquizleague_web_maintain_competition_CompetitionComponent__Lrxscalajs_Observable($thiz, c) {
  var this$1 = $m_Lquizleague_web_maintain_leaguetable_LeagueTableService$();
  var parentKey = c.item.key;
  var table = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_PutService__instance__Lquizleague_web_model_Key__Lquizleague_web_model_Model(this$1, parentKey);
  var this$2 = $m_Lquizleague_web_maintain_leaguetable_LeagueTableService$();
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_PutService__save__Lquizleague_web_model_Model__Lrxscalajs_Observable(this$2, table)
}
export { $f_Lquizleague_web_maintain_competition_CompetitionComponentConfig__addTable__Lquizleague_web_maintain_competition_CompetitionComponent__Lrxscalajs_Observable as $f_Lquizleague_web_maintain_competition_CompetitionComponentConfig__addTable__Lquizleague_web_maintain_competition_CompetitionComponent__Lrxscalajs_Observable };
function $f_Lquizleague_web_maintain_competition_CompetitionComponentConfig__$init$__V($thiz) {
  $thiz.quizleague$web$maintain$competition$CompetitionComponentConfig$_setter_$service_$eq__Lquizleague_web_maintain_competition_CompetitionService$__V($m_Lquizleague_web_maintain_competition_CompetitionService$());
  var array = [];
  var fn = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((c$2) => {
    var this$6 = $m_Lquizleague_web_maintain_season_SeasonService$();
    var dict = c$2.$route.params;
    if ((!$j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uZ($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sjs_js_WrappedDictionary$Cache$().sjs_js_WrappedDictionary$Cache$__f_safeHasOwnProperty.call(dict, "seasonId")))) {
      throw $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$ct_ju_NoSuchElementException__T__(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_ju_NoSuchElementException(), "key not found: seasonId")
    };
    var id = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(dict.seasonId);
    return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__get__T__Lrxscalajs_Observable(this$6, id)
  }));
  $thiz.quizleague$web$core$Component$$addedSubs_$eq__sci_Map__V($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($thiz.quizleague$web$core$Component$$addedSubs__sci_Map()).$plus__T2__sci_Map(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2("season", fn)));
  var $$x1 = $thiz.quizleague$web$core$Component$$addedSubParams__sci_List();
  var this$7 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sc_Seq$();
  var bf = this$7.scg_GenTraversableFactory__f_ReusableCBFInstance;
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(bf);
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sjs_js_WrappedArray$();
  var b = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$ct_sjs_js_WrappedArray__(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjs_js_WrappedArray());
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length);
  var i = 0;
  var len = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length);
  while ((i < len)) {
    var index = i;
    var arg1 = array[index];
    var x$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(arg1);
    var elem = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2(x$1, "season");
    b.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.push(elem);
    i = ((1 + i) | 0)
  };
  var this$10 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sci_List$();
  $thiz.quizleague$web$core$Component$$addedSubParams_$eq__sci_List__V($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_sci_List($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($$x1).$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O(b, this$10.scg_GenTraversableFactory__f_ReusableCBFInstance)));
  var fn$1 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_sjs_js_ThisFunction$().fromFunction1__F1__sjs_js_ThisFunction0(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((c$3$2) => {
    $f_Lquizleague_web_maintain_competition_CompetitionComponentConfig__fixtures__Lquizleague_web_maintain_competition_CompetitionComponent__V($thiz, c$3$2)
  })));
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__method__T__sjs_js_Function__V($thiz, "fixtures", fn$1);
  var fn$2 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_sjs_js_ThisFunction$().fromFunction2__F2__sjs_js_ThisFunction1(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction2(((c$4$2, tableId$2) => {
    var tableId = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(tableId$2);
    $f_Lquizleague_web_maintain_competition_CompetitionComponentConfig__toTable__Lquizleague_web_maintain_competition_CompetitionComponent__T__V($thiz, c$4$2, tableId)
  })));
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__method__T__sjs_js_Function__V($thiz, "toTable", fn$2);
  var fn$3 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_sjs_js_ThisFunction$().fromFunction2__F2__sjs_js_ThisFunction1(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction2(((c$5$2, table$2) => $f_Lquizleague_web_maintain_competition_CompetitionComponentConfig__removeTable__Lquizleague_web_maintain_competition_CompetitionComponent__Lquizleague_web_model_LeagueTable__O($thiz, c$5$2, table$2))));
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__method__T__sjs_js_Function__V($thiz, "removeTable", fn$3);
  var array$1 = [];
  var fn$4 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((c$6$2) => {
    var param = $thiz.paramName__T();
    var service = $thiz.service__Lquizleague_web_maintain_competition_CompetitionService$();
    return $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($f_Lquizleague_web_maintain_component_ItemComponentConfig__obsFromParam__Lquizleague_web_maintain_component_ItemComponent__T__Lquizleague_web_service_GetService__Lrxscalajs_Observable($thiz, c$6$2, param, service)).flatMap__F1__Lrxscalajs_Observable(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((x$1$2) => $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$as_Lrxscalajs_Observable(x$1$2.leaguetable))))
  }));
  $thiz.quizleague$web$core$Component$$addedSubs_$eq__sci_Map__V($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($thiz.quizleague$web$core$Component$$addedSubs__sci_Map()).$plus__T2__sci_Map(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2("tables", fn$4)));
  var $$x2 = $thiz.quizleague$web$core$Component$$addedSubParams__sci_List();
  var this$13 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sc_Seq$();
  var bf$1 = this$13.scg_GenTraversableFactory__f_ReusableCBFInstance;
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(bf$1);
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sjs_js_WrappedArray$();
  var b$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$ct_sjs_js_WrappedArray__(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjs_js_WrappedArray());
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array$1.length);
  var i$1 = 0;
  var len$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array$1.length);
  while ((i$1 < len$1)) {
    var index$1 = i$1;
    var arg1$1 = array$1[index$1];
    var x$1$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(arg1$1);
    var elem$1 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2(x$1$1, "tables");
    b$1.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.push(elem$1);
    i$1 = ((1 + i$1) | 0)
  };
  var this$16 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sci_List$();
  $thiz.quizleague$web$core$Component$$addedSubParams_$eq__sci_List__V($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_sci_List($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($$x2).$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O(b$1, this$16.scg_GenTraversableFactory__f_ReusableCBFInstance)));
  var fn$5 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_sjs_js_ThisFunction$().fromFunction1__F1__sjs_js_ThisFunction0(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((c$7$2) => $f_Lquizleague_web_maintain_competition_CompetitionComponentConfig__addTable__Lquizleague_web_maintain_competition_CompetitionComponent__Lrxscalajs_Observable($thiz, c$7$2))));
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__method__T__sjs_js_Function__V($thiz, "addTable", fn$5)
}
export { $f_Lquizleague_web_maintain_competition_CompetitionComponentConfig__$init$__V as $f_Lquizleague_web_maintain_competition_CompetitionComponentConfig__$init$__V };
/** @constructor */
function $c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$() {
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$__f_service = null;
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$__f_template = null;
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$__f_name = null;
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$__f_paramName = null;
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$__f_quizleague$web$core$Component$$addedSubs = null;
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$__f_quizleague$web$core$Component$$addedSubParams = null;
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$__f_quizleague$web$core$Component$$addedProps = null;
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$__f_quizleague$web$core$Component$$addedMethods = null;
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$__f_quizleague$web$core$Component$$addedComputed = null;
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$__f_quizleague$web$core$Component$$addedDataFn = null;
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$__f_quizleague$web$core$Component$$addedData = null;
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$__f_quizleague$web$core$Component$$addedComponents = null;
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$__f_quizleague$web$core$Component$$addedWatch = null;
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$__f_empty = null;
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$__f_quizleague$web$core$Component$$commonMethods = null;
  $n_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$ = this;
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__$init$__V(this);
  $f_Lquizleague_web_maintain_component_ItemComponentConfig__$init$__V(this);
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_RouteComponent__$init$__V(this);
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$__f_service = $m_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$();
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$__f_template = (((("\n  <v-container v-if=\"item\">\n    <v-form v-model=\"valid\" ref=\"fm\">\n      <v-layout column>\n        <v-text-field\n          label=\"Competition Name\"\n          v-model=\"item.competitionName\"\n          :rules=" + $m_Lquizleague_web_maintain_component_TemplateElements$().valRequired__T__T("Competition Name")) + "\n          required\n        ></v-text-field>\n        <h4>Results</h4>\n        <div><v-btn v-on:click=\"addResult(item)\" button><v-icon >mdi-plus</v-icon></v-btn></div>\n        <div v-for=\"row in sortResults(item.results)\" :key=\"row.id\">\n          <v-card>\n            <v-card-text>\n            <comp-stats-result :item=\"row\" :competitionName=\"item.competitionName\"></comp-stats-result>\n            </v-card-text>\n          </v-card>\n          <br>\n        </div>\n        <div><v-btn v-on:click=\"addResult(item)\" button><v-icon >mdi-plus</v-icon></v-btn></div>\n     </v-layout>\n     ") + $m_Lquizleague_web_maintain_component_TemplateElements$().Lquizleague_web_maintain_component_TemplateElements$__f_formButtons) + "\n    </v-form>\n  </v-container>");
  var array = [$m_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsResultComponent$()];
  var comps = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$ct_sjs_js_WrappedArray__sjs_js_Array__(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjs_js_WrappedArray(), array);
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__components__sc_Seq__V(this, comps);
  var fn = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sjs_js_Any$().fromFunction1__F1__sjs_js_Function1(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((item$2) => $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(item$2.results.push($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($m_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$().Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$__f_service).resultEntryInstance__Lquizleague_web_model_ResultEntry())))));
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__method__T__sjs_js_Function__V(this, "addResult", fn);
  var fn$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sjs_js_Any$().fromFunction1__F1__sjs_js_Function1(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((results$2) => {
    var f = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((x$1$2) => $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(x$1$2.seasonText)));
    var ord = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_s_math_Ordering$String$();
    var ord$1 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_s_math_Ordering$$anon$1(ord, f);
    var len = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(results$2.length);
    var array$1 = [];
    if ((len === 1)) {
      var i = 0;
      var len$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(results$2.length);
      while ((i < len$1)) {
        var index = i;
        var arg1 = results$2[index];
        array$1.push(arg1);
        i = ((1 + i) | 0)
      }
    } else if ((len > 1)) {
      var arr = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$ac_O(len);
      var elem = 0;
      elem = 0;
      var i$1 = 0;
      var len$2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(results$2.length);
      while ((i$1 < len$2)) {
        var index$1 = i$1;
        var arg1$1 = results$2[index$1];
        $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(arr).set(elem, arg1$1);
        elem = ((1 + elem) | 0);
        i$1 = ((1 + i$1) | 0)
      };
      $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_ju_Arrays$().sort__AO__ju_Comparator__V(arr, ord$1);
      elem = 0;
      while ((elem < $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(arr).u.length)) {
        var elem$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(arr).get(elem);
        array$1.push(elem$1);
        elem = ((1 + elem) | 0)
      }
    };
    return array$1
  })));
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__method__T__sjs_js_Function__V(this, "sortResults", fn$1)
}
export { $c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$ as $c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$ };
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$.prototype.constructor = $c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$;
/** @constructor */
function $h_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$() {
  /*<skip>*/
}
export { $h_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$ as $h_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$ };
$h_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$.prototype = $c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$.prototype;
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$.prototype.save__Lquizleague_web_maintain_component_ItemComponent__V = (function(c) {
  $f_Lquizleague_web_maintain_component_ItemComponentConfig__save__Lquizleague_web_maintain_component_ItemComponent__V(this, c)
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$.prototype.mounted__sjs_js_Function = (function() {
  return null
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$.prototype.beforeDestroy__sjs_js_Function = (function() {
  return null
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$.prototype.name__T = (function() {
  return this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$__f_name
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$.prototype.quizleague$web$core$RouteComponent$_setter_$name_$eq__T__V = (function(x$1) {
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$__f_name = x$1
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$.prototype.paramName__T = (function() {
  return this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$__f_paramName
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$.prototype.quizleague$web$maintain$component$ItemComponentConfig$_setter_$paramName_$eq__T__V = (function(x$1) {
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$__f_paramName = x$1
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$.prototype.quizleague$web$core$Component$$addedSubs__sci_Map = (function() {
  return this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$__f_quizleague$web$core$Component$$addedSubs
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$.prototype.quizleague$web$core$Component$$addedSubs_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$__f_quizleague$web$core$Component$$addedSubs = x$1
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$.prototype.quizleague$web$core$Component$$addedSubParams__sci_List = (function() {
  return this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$__f_quizleague$web$core$Component$$addedSubParams
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$.prototype.quizleague$web$core$Component$$addedSubParams_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$__f_quizleague$web$core$Component$$addedSubParams = x$1
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$.prototype.quizleague$web$core$Component$$addedProps__sci_List = (function() {
  return this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$__f_quizleague$web$core$Component$$addedProps
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$.prototype.quizleague$web$core$Component$$addedProps_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$__f_quizleague$web$core$Component$$addedProps = x$1
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$.prototype.quizleague$web$core$Component$$addedMethods__sci_Map = (function() {
  return this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$__f_quizleague$web$core$Component$$addedMethods
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$.prototype.quizleague$web$core$Component$$addedMethods_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$__f_quizleague$web$core$Component$$addedMethods = x$1
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$.prototype.quizleague$web$core$Component$$addedComputed__sci_Map = (function() {
  return this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$__f_quizleague$web$core$Component$$addedComputed
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$.prototype.quizleague$web$core$Component$$addedComputed_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$__f_quizleague$web$core$Component$$addedComputed = x$1
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$.prototype.quizleague$web$core$Component$$addedDataFn__sci_Map = (function() {
  return this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$__f_quizleague$web$core$Component$$addedDataFn
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$.prototype.quizleague$web$core$Component$$addedDataFn_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$__f_quizleague$web$core$Component$$addedDataFn = x$1
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$.prototype.quizleague$web$core$Component$$addedData__sci_Map = (function() {
  return this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$__f_quizleague$web$core$Component$$addedData
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$.prototype.quizleague$web$core$Component$$addedData_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$__f_quizleague$web$core$Component$$addedData = x$1
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$.prototype.quizleague$web$core$Component$$addedComponents__sci_List = (function() {
  return this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$__f_quizleague$web$core$Component$$addedComponents
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$.prototype.quizleague$web$core$Component$$addedComponents_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$__f_quizleague$web$core$Component$$addedComponents = x$1
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$.prototype.quizleague$web$core$Component$$addedWatch__sci_Map = (function() {
  return this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$__f_quizleague$web$core$Component$$addedWatch
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$.prototype.quizleague$web$core$Component$$addedWatch_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$__f_quizleague$web$core$Component$$addedWatch = x$1
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$.prototype.empty__sjs_js_Object = (function() {
  return this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$__f_empty
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$.prototype.quizleague$web$core$Component$$commonMethods__sci_Map = (function() {
  return this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$__f_quizleague$web$core$Component$$commonMethods
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$.prototype.quizleague$web$core$Component$_setter_$empty_$eq__sjs_js_Object__V = (function(x$1) {
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$__f_empty = x$1
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$.prototype.quizleague$web$core$Component$_setter_$quizleague$web$core$Component$$commonMethods_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$__f_quizleague$web$core$Component$$commonMethods = x$1
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$.prototype.template__T = (function() {
  return this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$__f_template
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$.prototype.parentKey__Lquizleague_web_maintain_component_ItemComponent__T = (function(c) {
  return null
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$.prototype.service__Lquizleague_web_service_GetService = (function() {
  return this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$__f_service
});
var $d_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$ = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$: 0
}, false, "quizleague.web.maintain.competitionstatistics.CompetitionStatisticsComponent$", {
  Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$: 1,
  O: 1,
  Lquizleague_web_maintain_component_ItemComponentConfig: 1,
  Lquizleague_web_core_Component: 1,
  Lquizleague_web_core_RouteComponent: 1
});
export { $d_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$ as $d_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$ };
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$.prototype.$classData = $d_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$;
var $n_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$;
function $m_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$() {
  if ((!$n_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$)) {
    $n_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$ = new $c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$()
  };
  return $n_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$
}
export { $m_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$ as $m_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsComponent$ };
/** @constructor */
function $c_Lquizleague_web_maintain_globaltext_GlobalTextComponent$() {
  this.Lquizleague_web_maintain_globaltext_GlobalTextComponent$__f_service = null;
  this.Lquizleague_web_maintain_globaltext_GlobalTextComponent$__f_template = null;
  this.Lquizleague_web_maintain_globaltext_GlobalTextComponent$__f_name = null;
  this.Lquizleague_web_maintain_globaltext_GlobalTextComponent$__f_paramName = null;
  this.Lquizleague_web_maintain_globaltext_GlobalTextComponent$__f_quizleague$web$core$Component$$addedSubs = null;
  this.Lquizleague_web_maintain_globaltext_GlobalTextComponent$__f_quizleague$web$core$Component$$addedSubParams = null;
  this.Lquizleague_web_maintain_globaltext_GlobalTextComponent$__f_quizleague$web$core$Component$$addedProps = null;
  this.Lquizleague_web_maintain_globaltext_GlobalTextComponent$__f_quizleague$web$core$Component$$addedMethods = null;
  this.Lquizleague_web_maintain_globaltext_GlobalTextComponent$__f_quizleague$web$core$Component$$addedComputed = null;
  this.Lquizleague_web_maintain_globaltext_GlobalTextComponent$__f_quizleague$web$core$Component$$addedDataFn = null;
  this.Lquizleague_web_maintain_globaltext_GlobalTextComponent$__f_quizleague$web$core$Component$$addedData = null;
  this.Lquizleague_web_maintain_globaltext_GlobalTextComponent$__f_quizleague$web$core$Component$$addedComponents = null;
  this.Lquizleague_web_maintain_globaltext_GlobalTextComponent$__f_quizleague$web$core$Component$$addedWatch = null;
  this.Lquizleague_web_maintain_globaltext_GlobalTextComponent$__f_empty = null;
  this.Lquizleague_web_maintain_globaltext_GlobalTextComponent$__f_quizleague$web$core$Component$$commonMethods = null;
  $n_Lquizleague_web_maintain_globaltext_GlobalTextComponent$ = this;
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__$init$__V(this);
  $f_Lquizleague_web_maintain_component_ItemComponentConfig__$init$__V(this);
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_RouteComponent__$init$__V(this);
  this.Lquizleague_web_maintain_globaltext_GlobalTextComponent$__f_service = $m_Lquizleague_web_maintain_globaltext_GlobalTextService$();
  this.Lquizleague_web_maintain_globaltext_GlobalTextComponent$__f_template = (((((("\n  <v-container v-if=\"item\">\n    <v-form v-model=\"valid\" >\n      <v-layout column>\n       <v-text-field\n          label=\"Name\"\n          v-model=\"item.name\"\n          :rules=" + $m_Lquizleague_web_maintain_component_TemplateElements$().valRequired__T__T("Name")) + "\n          required\n        ></v-text-field>\n      <v-divider></v-divider>\n      <v-layout row v-for=\"entry in sort(item.text)\" :key=\"entry.text.id\">\n          <v-text-field\n          label=\"Entry Name\"\n          v-model=\"entry.name\"\n          :rules=") + $m_Lquizleague_web_maintain_component_TemplateElements$().valRequired__T__T("Name")) + "\n          required\n        ></v-text-field>\n        <div><v-btn v-on:click =\"editText(entry.text.id)\" text><v-icon>mdi-card-text-outline</v-icon>Text</v-btn></div>\n      </v-layout>\n     </v-layout>\n      <v-btn  fixed\n              dark\n              fab\n              bottom\n              center\n              small\n              color=\"pink\"\n              v-on:click=\"add\">\n          <v-icon>mdi-plus</v-icon>\n      </v-btn>\n      ") + $m_Lquizleague_web_maintain_component_TemplateElements$().Lquizleague_web_maintain_component_TemplateElements$__f_formButtons) + "\n    </v-form>\n  </v-container>");
  var fn = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_sjs_js_ThisFunction$().fromFunction2__F2__sjs_js_ThisFunction1(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction2(((c$2, entries$2) => $m_Lquizleague_web_maintain_globaltext_GlobalTextComponent$().sort__Lquizleague_web_maintain_component_ItemComponent__sjs_js_Array__sjs_js_Array(c$2, entries$2))));
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__method__T__sjs_js_Function__V(this, "sort", fn);
  var fn$1 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_sjs_js_ThisFunction$().fromFunction1__F1__sjs_js_ThisFunction0(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((c$3$2) => {
    var this$3 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($m_Lquizleague_web_maintain_globaltext_GlobalTextComponent$().Lquizleague_web_maintain_globaltext_GlobalTextComponent$__f_service);
    var i = $f_Lquizleague_web_service_globaltext_GlobalTextPutService__entryInstance__Lquizleague_web_model_TextEntry(this$3);
    return $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(c$3$2.item.text.push(i))
  })));
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__method__T__sjs_js_Function__V(this, "add", fn$1)
}
export { $c_Lquizleague_web_maintain_globaltext_GlobalTextComponent$ as $c_Lquizleague_web_maintain_globaltext_GlobalTextComponent$ };
$c_Lquizleague_web_maintain_globaltext_GlobalTextComponent$.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_Lquizleague_web_maintain_globaltext_GlobalTextComponent$.prototype.constructor = $c_Lquizleague_web_maintain_globaltext_GlobalTextComponent$;
/** @constructor */
function $h_Lquizleague_web_maintain_globaltext_GlobalTextComponent$() {
  /*<skip>*/
}
export { $h_Lquizleague_web_maintain_globaltext_GlobalTextComponent$ as $h_Lquizleague_web_maintain_globaltext_GlobalTextComponent$ };
$h_Lquizleague_web_maintain_globaltext_GlobalTextComponent$.prototype = $c_Lquizleague_web_maintain_globaltext_GlobalTextComponent$.prototype;
$c_Lquizleague_web_maintain_globaltext_GlobalTextComponent$.prototype.save__Lquizleague_web_maintain_component_ItemComponent__V = (function(c) {
  $f_Lquizleague_web_maintain_component_ItemComponentConfig__save__Lquizleague_web_maintain_component_ItemComponent__V(this, c)
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextComponent$.prototype.mounted__sjs_js_Function = (function() {
  return null
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextComponent$.prototype.beforeDestroy__sjs_js_Function = (function() {
  return null
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextComponent$.prototype.name__T = (function() {
  return this.Lquizleague_web_maintain_globaltext_GlobalTextComponent$__f_name
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextComponent$.prototype.quizleague$web$core$RouteComponent$_setter_$name_$eq__T__V = (function(x$1) {
  this.Lquizleague_web_maintain_globaltext_GlobalTextComponent$__f_name = x$1
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextComponent$.prototype.paramName__T = (function() {
  return this.Lquizleague_web_maintain_globaltext_GlobalTextComponent$__f_paramName
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextComponent$.prototype.quizleague$web$maintain$component$ItemComponentConfig$_setter_$paramName_$eq__T__V = (function(x$1) {
  this.Lquizleague_web_maintain_globaltext_GlobalTextComponent$__f_paramName = x$1
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextComponent$.prototype.quizleague$web$core$Component$$addedSubs__sci_Map = (function() {
  return this.Lquizleague_web_maintain_globaltext_GlobalTextComponent$__f_quizleague$web$core$Component$$addedSubs
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextComponent$.prototype.quizleague$web$core$Component$$addedSubs_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_globaltext_GlobalTextComponent$__f_quizleague$web$core$Component$$addedSubs = x$1
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextComponent$.prototype.quizleague$web$core$Component$$addedSubParams__sci_List = (function() {
  return this.Lquizleague_web_maintain_globaltext_GlobalTextComponent$__f_quizleague$web$core$Component$$addedSubParams
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextComponent$.prototype.quizleague$web$core$Component$$addedSubParams_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_globaltext_GlobalTextComponent$__f_quizleague$web$core$Component$$addedSubParams = x$1
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextComponent$.prototype.quizleague$web$core$Component$$addedProps__sci_List = (function() {
  return this.Lquizleague_web_maintain_globaltext_GlobalTextComponent$__f_quizleague$web$core$Component$$addedProps
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextComponent$.prototype.quizleague$web$core$Component$$addedProps_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_globaltext_GlobalTextComponent$__f_quizleague$web$core$Component$$addedProps = x$1
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextComponent$.prototype.quizleague$web$core$Component$$addedMethods__sci_Map = (function() {
  return this.Lquizleague_web_maintain_globaltext_GlobalTextComponent$__f_quizleague$web$core$Component$$addedMethods
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextComponent$.prototype.quizleague$web$core$Component$$addedMethods_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_globaltext_GlobalTextComponent$__f_quizleague$web$core$Component$$addedMethods = x$1
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextComponent$.prototype.quizleague$web$core$Component$$addedComputed__sci_Map = (function() {
  return this.Lquizleague_web_maintain_globaltext_GlobalTextComponent$__f_quizleague$web$core$Component$$addedComputed
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextComponent$.prototype.quizleague$web$core$Component$$addedComputed_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_globaltext_GlobalTextComponent$__f_quizleague$web$core$Component$$addedComputed = x$1
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextComponent$.prototype.quizleague$web$core$Component$$addedDataFn__sci_Map = (function() {
  return this.Lquizleague_web_maintain_globaltext_GlobalTextComponent$__f_quizleague$web$core$Component$$addedDataFn
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextComponent$.prototype.quizleague$web$core$Component$$addedDataFn_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_globaltext_GlobalTextComponent$__f_quizleague$web$core$Component$$addedDataFn = x$1
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextComponent$.prototype.quizleague$web$core$Component$$addedData__sci_Map = (function() {
  return this.Lquizleague_web_maintain_globaltext_GlobalTextComponent$__f_quizleague$web$core$Component$$addedData
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextComponent$.prototype.quizleague$web$core$Component$$addedData_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_globaltext_GlobalTextComponent$__f_quizleague$web$core$Component$$addedData = x$1
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextComponent$.prototype.quizleague$web$core$Component$$addedComponents__sci_List = (function() {
  return this.Lquizleague_web_maintain_globaltext_GlobalTextComponent$__f_quizleague$web$core$Component$$addedComponents
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextComponent$.prototype.quizleague$web$core$Component$$addedComponents_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_globaltext_GlobalTextComponent$__f_quizleague$web$core$Component$$addedComponents = x$1
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextComponent$.prototype.quizleague$web$core$Component$$addedWatch__sci_Map = (function() {
  return this.Lquizleague_web_maintain_globaltext_GlobalTextComponent$__f_quizleague$web$core$Component$$addedWatch
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextComponent$.prototype.quizleague$web$core$Component$$addedWatch_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_globaltext_GlobalTextComponent$__f_quizleague$web$core$Component$$addedWatch = x$1
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextComponent$.prototype.empty__sjs_js_Object = (function() {
  return this.Lquizleague_web_maintain_globaltext_GlobalTextComponent$__f_empty
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextComponent$.prototype.quizleague$web$core$Component$$commonMethods__sci_Map = (function() {
  return this.Lquizleague_web_maintain_globaltext_GlobalTextComponent$__f_quizleague$web$core$Component$$commonMethods
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextComponent$.prototype.quizleague$web$core$Component$_setter_$empty_$eq__sjs_js_Object__V = (function(x$1) {
  this.Lquizleague_web_maintain_globaltext_GlobalTextComponent$__f_empty = x$1
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextComponent$.prototype.quizleague$web$core$Component$_setter_$quizleague$web$core$Component$$commonMethods_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_globaltext_GlobalTextComponent$__f_quizleague$web$core$Component$$commonMethods = x$1
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextComponent$.prototype.template__T = (function() {
  return this.Lquizleague_web_maintain_globaltext_GlobalTextComponent$__f_template
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextComponent$.prototype.sort__Lquizleague_web_maintain_component_ItemComponent__sjs_js_Array__sjs_js_Array = (function(c, entries) {
  var f = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((x$1$2) => $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(x$1$2.name)));
  var ord = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_s_math_Ordering$String$();
  var ord$1 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_s_math_Ordering$$anon$1(ord, f);
  var len = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(entries.length);
  var array = [];
  if ((len === 1)) {
    var i = 0;
    var len$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(entries.length);
    while ((i < len$1)) {
      var index = i;
      var arg1 = entries[index];
      array.push(arg1);
      i = ((1 + i) | 0)
    }
  } else if ((len > 1)) {
    var arr = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$ac_O(len);
    var elem = 0;
    elem = 0;
    var i$1 = 0;
    var len$2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(entries.length);
    while ((i$1 < len$2)) {
      var index$1 = i$1;
      var arg1$1 = entries[index$1];
      $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(arr).set(elem, arg1$1);
      elem = ((1 + elem) | 0);
      i$1 = ((1 + i$1) | 0)
    };
    $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_ju_Arrays$().sort__AO__ju_Comparator__V(arr, ord$1);
    elem = 0;
    while ((elem < $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(arr).u.length)) {
      var elem$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(arr).get(elem);
      array.push(elem$1);
      elem = ((1 + elem) | 0)
    }
  };
  return array
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextComponent$.prototype.parentKey__Lquizleague_web_maintain_component_ItemComponent__T = (function(c) {
  return null
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextComponent$.prototype.service__Lquizleague_web_service_GetService = (function() {
  return this.Lquizleague_web_maintain_globaltext_GlobalTextComponent$__f_service
});
var $d_Lquizleague_web_maintain_globaltext_GlobalTextComponent$ = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  Lquizleague_web_maintain_globaltext_GlobalTextComponent$: 0
}, false, "quizleague.web.maintain.globaltext.GlobalTextComponent$", {
  Lquizleague_web_maintain_globaltext_GlobalTextComponent$: 1,
  O: 1,
  Lquizleague_web_maintain_component_ItemComponentConfig: 1,
  Lquizleague_web_core_Component: 1,
  Lquizleague_web_core_RouteComponent: 1
});
export { $d_Lquizleague_web_maintain_globaltext_GlobalTextComponent$ as $d_Lquizleague_web_maintain_globaltext_GlobalTextComponent$ };
$c_Lquizleague_web_maintain_globaltext_GlobalTextComponent$.prototype.$classData = $d_Lquizleague_web_maintain_globaltext_GlobalTextComponent$;
var $n_Lquizleague_web_maintain_globaltext_GlobalTextComponent$;
function $m_Lquizleague_web_maintain_globaltext_GlobalTextComponent$() {
  if ((!$n_Lquizleague_web_maintain_globaltext_GlobalTextComponent$)) {
    $n_Lquizleague_web_maintain_globaltext_GlobalTextComponent$ = new $c_Lquizleague_web_maintain_globaltext_GlobalTextComponent$()
  };
  return $n_Lquizleague_web_maintain_globaltext_GlobalTextComponent$
}
export { $m_Lquizleague_web_maintain_globaltext_GlobalTextComponent$ as $m_Lquizleague_web_maintain_globaltext_GlobalTextComponent$ };
/** @constructor */
function $c_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$() {
  this.Lquizleague_web_maintain_leaguetable_LeagueTableComponent$__f_service = null;
  this.Lquizleague_web_maintain_leaguetable_LeagueTableComponent$__f_template = null;
  this.Lquizleague_web_maintain_leaguetable_LeagueTableComponent$__f_name = null;
  this.Lquizleague_web_maintain_leaguetable_LeagueTableComponent$__f_paramName = null;
  this.Lquizleague_web_maintain_leaguetable_LeagueTableComponent$__f_quizleague$web$core$Component$$addedSubs = null;
  this.Lquizleague_web_maintain_leaguetable_LeagueTableComponent$__f_quizleague$web$core$Component$$addedSubParams = null;
  this.Lquizleague_web_maintain_leaguetable_LeagueTableComponent$__f_quizleague$web$core$Component$$addedProps = null;
  this.Lquizleague_web_maintain_leaguetable_LeagueTableComponent$__f_quizleague$web$core$Component$$addedMethods = null;
  this.Lquizleague_web_maintain_leaguetable_LeagueTableComponent$__f_quizleague$web$core$Component$$addedComputed = null;
  this.Lquizleague_web_maintain_leaguetable_LeagueTableComponent$__f_quizleague$web$core$Component$$addedDataFn = null;
  this.Lquizleague_web_maintain_leaguetable_LeagueTableComponent$__f_quizleague$web$core$Component$$addedData = null;
  this.Lquizleague_web_maintain_leaguetable_LeagueTableComponent$__f_quizleague$web$core$Component$$addedComponents = null;
  this.Lquizleague_web_maintain_leaguetable_LeagueTableComponent$__f_quizleague$web$core$Component$$addedWatch = null;
  this.Lquizleague_web_maintain_leaguetable_LeagueTableComponent$__f_empty = null;
  this.Lquizleague_web_maintain_leaguetable_LeagueTableComponent$__f_quizleague$web$core$Component$$commonMethods = null;
  $n_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$ = this;
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__$init$__V(this);
  $f_Lquizleague_web_maintain_component_ItemComponentConfig__$init$__V(this);
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_RouteComponent__$init$__V(this);
  this.Lquizleague_web_maintain_leaguetable_LeagueTableComponent$__f_service = $m_Lquizleague_web_maintain_leaguetable_LeagueTableService$();
  this.Lquizleague_web_maintain_leaguetable_LeagueTableComponent$__f_template = (("\n <v-container v-if=\"item && teams\">\n    <h2>League Tables</h2>\n    <v-form v-model=\"valid\">\n    <v-layout column>\n      <v-layout column>\n         <v-text-field label=\"Description\" v-model=\"item.description\" ></v-text-field>\n       </v-layout column>\n       <v-layout column>\n        <h4>Rows</h4>\n        <v-layout row>\n          <v-btn icon v-on:click=\"addRow(team)\" :disabled=\"!team\" style=\"position:relative;top:12px\"><v-icon>mdi-plus</v-icon></v-btn><v-select label=\"Team\" v-model=\"team\" :items=\"unusedTeams()\"></v-select>\n         </v-layout>\n         <v-layout column>\n           <div><v-btn text v-on:click=\"recalculate()\" color=\"primary\">Recalculate</v-btn></div>\n           <div><v-btn text v-on:click=\"item=sort()\" color=\"primary\">Sort</v-btn></div>\n          <table>\n            <thead>\n              <th></th>\n              <th>Team</th>\n              <th>Position</th>\n              <th>Played</th>\n              <th>Won</th>\n              <th>Lost</th>\n              <th>Drawn</th>\n              <th>Scored</th>\n              <th>Against</th>\n              <th>Points</th>\n            </thead>\n            <tbody>\n              <tr v-for=\"(row,i) in item.rows\" :key=\"row.team.id\">\n                <td>\n                  <v-btn icon v-on:click=\"removeRow(row)\"><v-icon >mdi-delete</v-icon></v-btn>\n                </td>\n                <td>{{async(row.team).shortName}}</td>\n                <td>\n                  <v-text-field style=\"width:3em;\" v-model=\"row.position\" length=\"2\"></v-text-field>\n                </td>\n                <td>\n                  <v-text-field style=\"width:3em;\" v-model=\"row.played\" type=\"number\" length=\"2\"></v-text-field>\n                </td>\n                <td>\n                  <v-text-field style=\"width:3em;\" v-model.number=\"row.won\" type=\"number\" length=\"2\"></v-text-field>\n                </td>\n                <td>\n                  <v-text-field style=\"width:3em;\" v-model.number=\"row.lost\" type=\"number\" length=\"2\"></v-text-field>\n                </td>\n                <td>\n                  <v-text-field style=\"width:3em;\" v-model.number=\"row.drawn\" type=\"number\" length=\"2\"></v-text-field>\n                </td>\n                <td>\n                  <v-text-field style=\"width:5em;\" v-model.number=\"row.matchPointsFor\" type=\"number\" length=\"4\"></v-text-field>\n                </td>\n                <td>\n                  <v-text-field style=\"width:5em;\" v-model.number=\"row.matchPointsAgainst\" type=\"number\" length=\"4\"></v-text-field>\n                </td>\n                <td>\n                  <v-text-field style=\"width:3em;\" v-model.number=\"row.leaguePoints\" type=\"number\" length=\"2\"></v-text-field>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n         </v-layout>\n        </v-layout>      \n     </v-layout>\n     " + $m_Lquizleague_web_maintain_component_TemplateElements$().Lquizleague_web_maintain_component_TemplateElements$__f_formButtons) + "\n    </v-form>\n  </v-container>");
  var fn = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_sjs_js_ThisFunction$().fromFunction1__F1__sjs_js_ThisFunction0(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((c$2) => $m_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$().unusedTeams__Lquizleague_web_maintain_leaguetable_LeagueTableComponent__sjs_js_Array(c$2))));
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__method__T__sjs_js_Function__V(this, "unusedTeams", fn);
  var fn$1 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_sjs_js_ThisFunction$().fromFunction2__F2__sjs_js_ThisFunction1(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction2(((c$3$2, team$2) => $m_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$().addRow__Lquizleague_web_maintain_leaguetable_LeagueTableComponent__Lquizleague_web_util_rx_RefObservable__Lquizleague_web_util_rx_RefObservable(c$3$2, team$2))));
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__method__T__sjs_js_Function__V(this, "addRow", fn$1);
  var fn$2 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_sjs_js_ThisFunction$().fromFunction2__F2__sjs_js_ThisFunction1(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction2(((c$4$2, row$2) => {
    $m_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$().removeRow__Lquizleague_web_maintain_leaguetable_LeagueTableComponent__Lquizleague_web_model_LeagueTableRow__V(c$4$2, row$2)
  })));
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__method__T__sjs_js_Function__V(this, "removeRow", fn$2);
  var fn$3 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_sjs_js_ThisFunction$().fromFunction1__F1__sjs_js_ThisFunction0(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((c$5$2) => $m_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$().sort__Lquizleague_web_maintain_leaguetable_LeagueTableComponent__Lquizleague_web_model_LeagueTable(c$5$2))));
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__method__T__sjs_js_Function__V(this, "sort", fn$3);
  var fn$4 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_sjs_js_ThisFunction$().fromFunction1__F1__sjs_js_ThisFunction0(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((c$6$2) => $m_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$().recalculate__Lquizleague_web_maintain_leaguetable_LeagueTableComponent__Lrxscalajs_subscription_Subscription(c$6$2))));
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__method__T__sjs_js_Function__V(this, "recalculate", fn$4);
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__data__T__O__V(this, "teamManager", null);
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__data__T__O__V(this, "team", null);
  var array = [];
  var fn$5 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((c$7$2) => $m_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$().teams__Lrxscalajs_Observable()));
  this.Lquizleague_web_maintain_leaguetable_LeagueTableComponent$__f_quizleague$web$core$Component$$addedSubs = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.Lquizleague_web_maintain_leaguetable_LeagueTableComponent$__f_quizleague$web$core$Component$$addedSubs).$plus__T2__sci_Map(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2("teams", fn$5));
  var $$x1 = this.Lquizleague_web_maintain_leaguetable_LeagueTableComponent$__f_quizleague$web$core$Component$$addedSubParams;
  var this$8 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sc_Seq$();
  var bf = this$8.scg_GenTraversableFactory__f_ReusableCBFInstance;
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(bf);
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sjs_js_WrappedArray$();
  var b = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$ct_sjs_js_WrappedArray__(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjs_js_WrappedArray());
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length);
  var i = 0;
  var len = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length);
  while ((i < len)) {
    var index = i;
    var arg1 = array[index];
    var x$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(arg1);
    var elem = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2(x$1, "teams");
    b.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.push(elem);
    i = ((1 + i) | 0)
  };
  var this$11 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sci_List$();
  this.Lquizleague_web_maintain_leaguetable_LeagueTableComponent$__f_quizleague$web$core$Component$$addedSubParams = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_sci_List($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($$x1).$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O(b, this$11.scg_GenTraversableFactory__f_ReusableCBFInstance));
  var array$1 = [];
  var fn$6 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((c$8$2) => {
    var this$14 = $m_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$();
    var service = $m_Lquizleague_web_maintain_competition_CompetitionService$();
    return $f_Lquizleague_web_maintain_component_ItemComponentConfig__obsFromParam__Lquizleague_web_maintain_component_ItemComponent__T__Lquizleague_web_service_GetService__Lrxscalajs_Observable(this$14, c$8$2, "competitionId", service)
  }));
  this.Lquizleague_web_maintain_leaguetable_LeagueTableComponent$__f_quizleague$web$core$Component$$addedSubs = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.Lquizleague_web_maintain_leaguetable_LeagueTableComponent$__f_quizleague$web$core$Component$$addedSubs).$plus__T2__sci_Map(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2("competition", fn$6));
  var $$x2 = this.Lquizleague_web_maintain_leaguetable_LeagueTableComponent$__f_quizleague$web$core$Component$$addedSubParams;
  var this$15 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sc_Seq$();
  var bf$1 = this$15.scg_GenTraversableFactory__f_ReusableCBFInstance;
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(bf$1);
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sjs_js_WrappedArray$();
  var b$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$ct_sjs_js_WrappedArray__(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjs_js_WrappedArray());
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array$1.length);
  var i$1 = 0;
  var len$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array$1.length);
  while ((i$1 < len$1)) {
    var index$1 = i$1;
    var arg1$1 = array$1[index$1];
    var x$1$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(arg1$1);
    var elem$1 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2(x$1$1, "competition");
    b$1.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.push(elem$1);
    i$1 = ((1 + i$1) | 0)
  };
  var this$18 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sci_List$();
  this.Lquizleague_web_maintain_leaguetable_LeagueTableComponent$__f_quizleague$web$core$Component$$addedSubParams = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_sci_List($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($$x2).$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O(b$1, this$18.scg_GenTraversableFactory__f_ReusableCBFInstance))
}
export { $c_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$ as $c_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$ };
$c_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$.prototype.constructor = $c_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$;
/** @constructor */
function $h_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$() {
  /*<skip>*/
}
export { $h_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$ as $h_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$ };
$h_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$.prototype = $c_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$.prototype;
$c_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$.prototype.save__Lquizleague_web_maintain_component_ItemComponent__V = (function(c) {
  $f_Lquizleague_web_maintain_component_ItemComponentConfig__save__Lquizleague_web_maintain_component_ItemComponent__V(this, c)
});
$c_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$.prototype.mounted__sjs_js_Function = (function() {
  return null
});
$c_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$.prototype.beforeDestroy__sjs_js_Function = (function() {
  return null
});
$c_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$.prototype.name__T = (function() {
  return this.Lquizleague_web_maintain_leaguetable_LeagueTableComponent$__f_name
});
$c_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$.prototype.quizleague$web$core$RouteComponent$_setter_$name_$eq__T__V = (function(x$1) {
  this.Lquizleague_web_maintain_leaguetable_LeagueTableComponent$__f_name = x$1
});
$c_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$.prototype.paramName__T = (function() {
  return this.Lquizleague_web_maintain_leaguetable_LeagueTableComponent$__f_paramName
});
$c_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$.prototype.quizleague$web$maintain$component$ItemComponentConfig$_setter_$paramName_$eq__T__V = (function(x$1) {
  this.Lquizleague_web_maintain_leaguetable_LeagueTableComponent$__f_paramName = x$1
});
$c_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$.prototype.quizleague$web$core$Component$$addedSubs__sci_Map = (function() {
  return this.Lquizleague_web_maintain_leaguetable_LeagueTableComponent$__f_quizleague$web$core$Component$$addedSubs
});
$c_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$.prototype.quizleague$web$core$Component$$addedSubs_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_leaguetable_LeagueTableComponent$__f_quizleague$web$core$Component$$addedSubs = x$1
});
$c_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$.prototype.quizleague$web$core$Component$$addedSubParams__sci_List = (function() {
  return this.Lquizleague_web_maintain_leaguetable_LeagueTableComponent$__f_quizleague$web$core$Component$$addedSubParams
});
$c_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$.prototype.quizleague$web$core$Component$$addedSubParams_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_leaguetable_LeagueTableComponent$__f_quizleague$web$core$Component$$addedSubParams = x$1
});
$c_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$.prototype.quizleague$web$core$Component$$addedProps__sci_List = (function() {
  return this.Lquizleague_web_maintain_leaguetable_LeagueTableComponent$__f_quizleague$web$core$Component$$addedProps
});
$c_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$.prototype.quizleague$web$core$Component$$addedProps_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_leaguetable_LeagueTableComponent$__f_quizleague$web$core$Component$$addedProps = x$1
});
$c_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$.prototype.quizleague$web$core$Component$$addedMethods__sci_Map = (function() {
  return this.Lquizleague_web_maintain_leaguetable_LeagueTableComponent$__f_quizleague$web$core$Component$$addedMethods
});
$c_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$.prototype.quizleague$web$core$Component$$addedMethods_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_leaguetable_LeagueTableComponent$__f_quizleague$web$core$Component$$addedMethods = x$1
});
$c_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$.prototype.quizleague$web$core$Component$$addedComputed__sci_Map = (function() {
  return this.Lquizleague_web_maintain_leaguetable_LeagueTableComponent$__f_quizleague$web$core$Component$$addedComputed
});
$c_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$.prototype.quizleague$web$core$Component$$addedComputed_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_leaguetable_LeagueTableComponent$__f_quizleague$web$core$Component$$addedComputed = x$1
});
$c_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$.prototype.quizleague$web$core$Component$$addedDataFn__sci_Map = (function() {
  return this.Lquizleague_web_maintain_leaguetable_LeagueTableComponent$__f_quizleague$web$core$Component$$addedDataFn
});
$c_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$.prototype.quizleague$web$core$Component$$addedDataFn_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_leaguetable_LeagueTableComponent$__f_quizleague$web$core$Component$$addedDataFn = x$1
});
$c_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$.prototype.quizleague$web$core$Component$$addedData__sci_Map = (function() {
  return this.Lquizleague_web_maintain_leaguetable_LeagueTableComponent$__f_quizleague$web$core$Component$$addedData
});
$c_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$.prototype.quizleague$web$core$Component$$addedData_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_leaguetable_LeagueTableComponent$__f_quizleague$web$core$Component$$addedData = x$1
});
$c_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$.prototype.quizleague$web$core$Component$$addedComponents__sci_List = (function() {
  return this.Lquizleague_web_maintain_leaguetable_LeagueTableComponent$__f_quizleague$web$core$Component$$addedComponents
});
$c_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$.prototype.quizleague$web$core$Component$$addedComponents_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_leaguetable_LeagueTableComponent$__f_quizleague$web$core$Component$$addedComponents = x$1
});
$c_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$.prototype.quizleague$web$core$Component$$addedWatch__sci_Map = (function() {
  return this.Lquizleague_web_maintain_leaguetable_LeagueTableComponent$__f_quizleague$web$core$Component$$addedWatch
});
$c_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$.prototype.quizleague$web$core$Component$$addedWatch_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_leaguetable_LeagueTableComponent$__f_quizleague$web$core$Component$$addedWatch = x$1
});
$c_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$.prototype.empty__sjs_js_Object = (function() {
  return this.Lquizleague_web_maintain_leaguetable_LeagueTableComponent$__f_empty
});
$c_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$.prototype.quizleague$web$core$Component$$commonMethods__sci_Map = (function() {
  return this.Lquizleague_web_maintain_leaguetable_LeagueTableComponent$__f_quizleague$web$core$Component$$commonMethods
});
$c_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$.prototype.quizleague$web$core$Component$_setter_$empty_$eq__sjs_js_Object__V = (function(x$1) {
  this.Lquizleague_web_maintain_leaguetable_LeagueTableComponent$__f_empty = x$1
});
$c_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$.prototype.quizleague$web$core$Component$_setter_$quizleague$web$core$Component$$commonMethods_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_leaguetable_LeagueTableComponent$__f_quizleague$web$core$Component$$commonMethods = x$1
});
$c_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$.prototype.parentKey__Lquizleague_web_maintain_leaguetable_LeagueTableComponent__T = (function(c) {
  var dict = c.$route.params;
  if ((!$j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uZ($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sjs_js_WrappedDictionary$Cache$().sjs_js_WrappedDictionary$Cache$__f_safeHasOwnProperty.call(dict, "seasonId")))) {
    throw $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$ct_ju_NoSuchElementException__T__(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_ju_NoSuchElementException(), "key not found: seasonId")
  };
  var $$x1 = dict.seasonId;
  var dict$1 = c.$route.params;
  if ((!$j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uZ($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sjs_js_WrappedDictionary$Cache$().sjs_js_WrappedDictionary$Cache$__f_safeHasOwnProperty.call(dict$1, "competitionId")))) {
    throw $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$ct_ju_NoSuchElementException__T__(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_ju_NoSuchElementException(), "key not found: competitionId")
  };
  return ((("season/" + $$x1) + "/competition/") + dict$1.competitionId)
});
$c_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$.prototype.template__T = (function() {
  return this.Lquizleague_web_maintain_leaguetable_LeagueTableComponent$__f_template
});
$c_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$.prototype.removeRow__Lquizleague_web_maintain_leaguetable_LeagueTableComponent__Lquizleague_web_model_LeagueTableRow__V = (function(c, row) {
  var array = c.item.rows;
  var len = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length);
  var i = 0;
  while (true) {
    if ((i < len)) {
      var index = i;
      var arg1 = array[index];
      var $$x1 = (!$j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sr_BoxesRunTime$().equals__O__O__Z(row, arg1))
    } else {
      var $$x1 = false
    };
    if ($$x1) {
      i = ((1 + i) | 0)
    } else {
      break
    }
  };
  var n = i;
  var i$1 = ((n >= $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length)) ? (-1) : n);
  if ((i$1 !== (-1))) {
    if (((i$1 < 0) || (i$1 >= $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length)))) {
      throw $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$ct_jl_IndexOutOfBoundsException__(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_jl_IndexOutOfBoundsException())
    };
    array.splice(i$1, 1)[0]
  };
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.teamManager__Lquizleague_web_maintain_leaguetable_LeagueTableComponent__Lquizleague_web_maintain_util_TeamManager(c)).untake__Lquizleague_web_util_rx_RefObservable__V(row.team)
});
$c_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$.prototype.addRow__Lquizleague_web_maintain_leaguetable_LeagueTableComponent__Lquizleague_web_util_rx_RefObservable__Lquizleague_web_util_rx_RefObservable = (function(c, team) {
  var array = c.item.rows;
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.Lquizleague_web_maintain_leaguetable_LeagueTableComponent$__f_service);
  var elem = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_model_LeagueTableRow$().apply__Lquizleague_web_util_rx_RefObservable__T__I__I__I__I__I__I__I__Lquizleague_web_model_LeagueTableRow(team, "", 0, 0, 0, 0, 0, 0, 0);
  array.push(elem);
  return $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.teamManager__Lquizleague_web_maintain_leaguetable_LeagueTableComponent__Lquizleague_web_maintain_util_TeamManager(c)).take__Lquizleague_web_util_rx_RefObservable__Lquizleague_web_util_rx_RefObservable(team)
});
$c_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$.prototype.recalculate__Lquizleague_web_maintain_leaguetable_LeagueTableComponent__Lrxscalajs_subscription_Subscription = (function(c) {
  return $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.Lquizleague_web_maintain_leaguetable_LeagueTableComponent$__f_service).recalculateTable__Lquizleague_web_model_LeagueTable__Lrxscalajs_subscription_Subscription(c.item)
});
$c_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$.prototype.sort__Lquizleague_web_maintain_leaguetable_LeagueTableComponent__Lquizleague_web_model_LeagueTable = (function(c) {
  var this$1 = $m_Lquizleague_web_maintain_leaguetable_LeagueTableService$();
  var table = c.item;
  return $f_Lquizleague_web_service_leaguetable_LeagueTablePutService__sortTable__Lquizleague_web_model_LeagueTable__Lquizleague_web_model_LeagueTable(this$1, table)
});
$c_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$.prototype.unusedTeams__Lquizleague_web_maintain_leaguetable_LeagueTableComponent__sjs_js_Array = (function(c) {
  return $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.teamManager__Lquizleague_web_maintain_leaguetable_LeagueTableComponent__Lquizleague_web_maintain_util_TeamManager(c)).unusedTeams__Lquizleague_web_util_rx_RefObservable__sjs_js_Array(null)
});
$c_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$.prototype.teamManager__Lquizleague_web_maintain_leaguetable_LeagueTableComponent__Lquizleague_web_maintain_util_TeamManager = (function(c) {
  if (($as_Lquizleague_web_maintain_util_TeamManager(c.teamManager) === null)) {
    c.teamManager = new $c_Lquizleague_web_maintain_util_TeamManager(c.teams);
    var array = c.item.rows;
    var i = 0;
    var len = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length);
    while ((i < len)) {
      var index = i;
      var arg1 = array[index];
      $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($as_Lquizleague_web_maintain_util_TeamManager(c.teamManager)).take__Lquizleague_web_util_rx_RefObservable__Lquizleague_web_util_rx_RefObservable(arg1.team);
      i = ((1 + i) | 0)
    };
    return $as_Lquizleague_web_maintain_util_TeamManager(c.teamManager)
  } else {
    return $as_Lquizleague_web_maintain_util_TeamManager(c.teamManager)
  }
});
$c_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$.prototype.teams__Lrxscalajs_Observable = (function() {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_util_component_SelectUtils$().model__Lquizleague_web_service_GetService__F1__Lrxscalajs_Observable($m_Lquizleague_web_maintain_fixtures_FilteredTeamService$(), new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((x$1$2) => $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(x$1$2.name))))
});
$c_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$.prototype.parentKey__Lquizleague_web_maintain_component_ItemComponent__T = (function(c) {
  return this.parentKey__Lquizleague_web_maintain_leaguetable_LeagueTableComponent__T(c)
});
$c_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$.prototype.service__Lquizleague_web_service_GetService = (function() {
  return this.Lquizleague_web_maintain_leaguetable_LeagueTableComponent$__f_service
});
var $d_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$ = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  Lquizleague_web_maintain_leaguetable_LeagueTableComponent$: 0
}, false, "quizleague.web.maintain.leaguetable.LeagueTableComponent$", {
  Lquizleague_web_maintain_leaguetable_LeagueTableComponent$: 1,
  O: 1,
  Lquizleague_web_maintain_component_ItemComponentConfig: 1,
  Lquizleague_web_core_Component: 1,
  Lquizleague_web_core_RouteComponent: 1
});
export { $d_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$ as $d_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$ };
$c_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$.prototype.$classData = $d_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$;
var $n_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$;
function $m_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$() {
  if ((!$n_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$)) {
    $n_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$ = new $c_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$()
  };
  return $n_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$
}
export { $m_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$ as $m_Lquizleague_web_maintain_leaguetable_LeagueTableComponent$ };
/** @constructor */
function $c_Lquizleague_web_maintain_season_CalendarComponent$() {
  this.Lquizleague_web_maintain_season_CalendarComponent$__f_service = null;
  this.Lquizleague_web_maintain_season_CalendarComponent$__f_template = null;
  this.Lquizleague_web_maintain_season_CalendarComponent$__f_name = null;
  this.Lquizleague_web_maintain_season_CalendarComponent$__f_paramName = null;
  this.Lquizleague_web_maintain_season_CalendarComponent$__f_quizleague$web$core$Component$$addedSubs = null;
  this.Lquizleague_web_maintain_season_CalendarComponent$__f_quizleague$web$core$Component$$addedSubParams = null;
  this.Lquizleague_web_maintain_season_CalendarComponent$__f_quizleague$web$core$Component$$addedProps = null;
  this.Lquizleague_web_maintain_season_CalendarComponent$__f_quizleague$web$core$Component$$addedMethods = null;
  this.Lquizleague_web_maintain_season_CalendarComponent$__f_quizleague$web$core$Component$$addedComputed = null;
  this.Lquizleague_web_maintain_season_CalendarComponent$__f_quizleague$web$core$Component$$addedDataFn = null;
  this.Lquizleague_web_maintain_season_CalendarComponent$__f_quizleague$web$core$Component$$addedData = null;
  this.Lquizleague_web_maintain_season_CalendarComponent$__f_quizleague$web$core$Component$$addedComponents = null;
  this.Lquizleague_web_maintain_season_CalendarComponent$__f_quizleague$web$core$Component$$addedWatch = null;
  this.Lquizleague_web_maintain_season_CalendarComponent$__f_empty = null;
  this.Lquizleague_web_maintain_season_CalendarComponent$__f_quizleague$web$core$Component$$commonMethods = null;
  $n_Lquizleague_web_maintain_season_CalendarComponent$ = this;
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__$init$__V(this);
  $f_Lquizleague_web_maintain_component_ItemComponentConfig__$init$__V(this);
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_RouteComponent__$init$__V(this);
  this.Lquizleague_web_maintain_season_CalendarComponent$__f_service = $m_Lquizleague_web_maintain_season_SeasonService$();
  this.Lquizleague_web_maintain_season_CalendarComponent$__f_template = (((((((("\n  <v-container v-if=\"item\">\n    <h2>Calendar {{item.startYear}}/{{item.endYear}}</h2>\n    <v-form v-model=\"valid\" >\n      <v-layout column>\n        <v-btn icon v-on:click=\"addEvent()\"><v-icon>mdi-plus</v-icon></v-btn>\n        <div v-for=\"event in item.calendar\" :key=\"event.id\">\n          <v-layout column>\n            <v-layout row>\n             <v-btn icon v-on:click=\"deleteEvent(event)\"><v-icon>mdi-delete</v-icon></v-btn>\n             <v-text-field  label=\"Description\" type=\"text\" \n              required\n                 v-model=\"event.description\" ></v-text-field>\n            </v-layout>\n            <v-layout row>\n              <v-text-field label=\"Date\" v-model=\"event.date\" type=\"date\" required :rules=" + $m_Lquizleague_web_maintain_component_TemplateElements$().valRequired__T__T("Date")) + "></v-text-field>\n              <v-text-field label=\"Time\" v-model=\"event.time\" type=\"time\" required :rules=") + $m_Lquizleague_web_maintain_component_TemplateElements$().valRequired__T__T("Time")) + "></v-text-field>\n              <v-text-field label=\"Duration\" v-model.number=\"event.duration\" type=\"number\" step=\"0.5\" required :rules=") + $m_Lquizleague_web_maintain_component_TemplateElements$().valRequired__T__T("Duration")) + "></v-text-field>\n            </v-layout>\n            <v-select label=\"Venue\" :items=\"venues\" v-model=\"event.venue\"></v-select>\n          </v-layout>\n        </div>\n      </v-layout>\n     ") + $m_Lquizleague_web_maintain_component_TemplateElements$().Lquizleague_web_maintain_component_TemplateElements$__f_formButtons) + "\n    </v-form>\n  </v-container>\n  ");
  var array = [];
  var fn = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((c$2) => $m_Lquizleague_web_maintain_season_CalendarComponent$().venues__Lrxscalajs_Observable()));
  this.Lquizleague_web_maintain_season_CalendarComponent$__f_quizleague$web$core$Component$$addedSubs = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.Lquizleague_web_maintain_season_CalendarComponent$__f_quizleague$web$core$Component$$addedSubs).$plus__T2__sci_Map(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2("venues", fn));
  var $$x1 = this.Lquizleague_web_maintain_season_CalendarComponent$__f_quizleague$web$core$Component$$addedSubParams;
  var this$4 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sc_Seq$();
  var bf = this$4.scg_GenTraversableFactory__f_ReusableCBFInstance;
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(bf);
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sjs_js_WrappedArray$();
  var b = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$ct_sjs_js_WrappedArray__(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjs_js_WrappedArray());
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length);
  var i = 0;
  var len = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length);
  while ((i < len)) {
    var index = i;
    var arg1 = array[index];
    var x$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(arg1);
    var elem = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2(x$1, "venues");
    b.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.push(elem);
    i = ((1 + i) | 0)
  };
  var this$7 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sci_List$();
  this.Lquizleague_web_maintain_season_CalendarComponent$__f_quizleague$web$core$Component$$addedSubParams = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_sci_List($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($$x1).$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O(b, this$7.scg_GenTraversableFactory__f_ReusableCBFInstance));
  var fn$1 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_sjs_js_ThisFunction$().fromFunction1__F1__sjs_js_ThisFunction0(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((c$3$2) => $m_Lquizleague_web_maintain_season_CalendarComponent$().addEvent__Lquizleague_web_maintain_component_ItemComponent__sjs_js_ArrayOps(c$3$2))));
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__method__T__sjs_js_Function__V(this, "addEvent", fn$1);
  var fn$2 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_sjs_js_ThisFunction$().fromFunction2__F2__sjs_js_ThisFunction1(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction2(((c$4$2, event$2) => $m_Lquizleague_web_maintain_season_CalendarComponent$().deleteEvent__Lquizleague_web_maintain_component_ItemComponent__Lquizleague_web_model_CalendarEvent__sjs_js_WrappedArray(c$4$2, event$2))));
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__method__T__sjs_js_Function__V(this, "deleteEvent", fn$2)
}
export { $c_Lquizleague_web_maintain_season_CalendarComponent$ as $c_Lquizleague_web_maintain_season_CalendarComponent$ };
$c_Lquizleague_web_maintain_season_CalendarComponent$.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_Lquizleague_web_maintain_season_CalendarComponent$.prototype.constructor = $c_Lquizleague_web_maintain_season_CalendarComponent$;
/** @constructor */
function $h_Lquizleague_web_maintain_season_CalendarComponent$() {
  /*<skip>*/
}
export { $h_Lquizleague_web_maintain_season_CalendarComponent$ as $h_Lquizleague_web_maintain_season_CalendarComponent$ };
$h_Lquizleague_web_maintain_season_CalendarComponent$.prototype = $c_Lquizleague_web_maintain_season_CalendarComponent$.prototype;
$c_Lquizleague_web_maintain_season_CalendarComponent$.prototype.mounted__sjs_js_Function = (function() {
  return null
});
$c_Lquizleague_web_maintain_season_CalendarComponent$.prototype.beforeDestroy__sjs_js_Function = (function() {
  return null
});
$c_Lquizleague_web_maintain_season_CalendarComponent$.prototype.name__T = (function() {
  return this.Lquizleague_web_maintain_season_CalendarComponent$__f_name
});
$c_Lquizleague_web_maintain_season_CalendarComponent$.prototype.quizleague$web$core$RouteComponent$_setter_$name_$eq__T__V = (function(x$1) {
  this.Lquizleague_web_maintain_season_CalendarComponent$__f_name = x$1
});
$c_Lquizleague_web_maintain_season_CalendarComponent$.prototype.paramName__T = (function() {
  return this.Lquizleague_web_maintain_season_CalendarComponent$__f_paramName
});
$c_Lquizleague_web_maintain_season_CalendarComponent$.prototype.quizleague$web$maintain$component$ItemComponentConfig$_setter_$paramName_$eq__T__V = (function(x$1) {
  this.Lquizleague_web_maintain_season_CalendarComponent$__f_paramName = x$1
});
$c_Lquizleague_web_maintain_season_CalendarComponent$.prototype.quizleague$web$core$Component$$addedSubs__sci_Map = (function() {
  return this.Lquizleague_web_maintain_season_CalendarComponent$__f_quizleague$web$core$Component$$addedSubs
});
$c_Lquizleague_web_maintain_season_CalendarComponent$.prototype.quizleague$web$core$Component$$addedSubs_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_season_CalendarComponent$__f_quizleague$web$core$Component$$addedSubs = x$1
});
$c_Lquizleague_web_maintain_season_CalendarComponent$.prototype.quizleague$web$core$Component$$addedSubParams__sci_List = (function() {
  return this.Lquizleague_web_maintain_season_CalendarComponent$__f_quizleague$web$core$Component$$addedSubParams
});
$c_Lquizleague_web_maintain_season_CalendarComponent$.prototype.quizleague$web$core$Component$$addedSubParams_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_season_CalendarComponent$__f_quizleague$web$core$Component$$addedSubParams = x$1
});
$c_Lquizleague_web_maintain_season_CalendarComponent$.prototype.quizleague$web$core$Component$$addedProps__sci_List = (function() {
  return this.Lquizleague_web_maintain_season_CalendarComponent$__f_quizleague$web$core$Component$$addedProps
});
$c_Lquizleague_web_maintain_season_CalendarComponent$.prototype.quizleague$web$core$Component$$addedProps_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_season_CalendarComponent$__f_quizleague$web$core$Component$$addedProps = x$1
});
$c_Lquizleague_web_maintain_season_CalendarComponent$.prototype.quizleague$web$core$Component$$addedMethods__sci_Map = (function() {
  return this.Lquizleague_web_maintain_season_CalendarComponent$__f_quizleague$web$core$Component$$addedMethods
});
$c_Lquizleague_web_maintain_season_CalendarComponent$.prototype.quizleague$web$core$Component$$addedMethods_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_season_CalendarComponent$__f_quizleague$web$core$Component$$addedMethods = x$1
});
$c_Lquizleague_web_maintain_season_CalendarComponent$.prototype.quizleague$web$core$Component$$addedComputed__sci_Map = (function() {
  return this.Lquizleague_web_maintain_season_CalendarComponent$__f_quizleague$web$core$Component$$addedComputed
});
$c_Lquizleague_web_maintain_season_CalendarComponent$.prototype.quizleague$web$core$Component$$addedComputed_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_season_CalendarComponent$__f_quizleague$web$core$Component$$addedComputed = x$1
});
$c_Lquizleague_web_maintain_season_CalendarComponent$.prototype.quizleague$web$core$Component$$addedDataFn__sci_Map = (function() {
  return this.Lquizleague_web_maintain_season_CalendarComponent$__f_quizleague$web$core$Component$$addedDataFn
});
$c_Lquizleague_web_maintain_season_CalendarComponent$.prototype.quizleague$web$core$Component$$addedDataFn_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_season_CalendarComponent$__f_quizleague$web$core$Component$$addedDataFn = x$1
});
$c_Lquizleague_web_maintain_season_CalendarComponent$.prototype.quizleague$web$core$Component$$addedData__sci_Map = (function() {
  return this.Lquizleague_web_maintain_season_CalendarComponent$__f_quizleague$web$core$Component$$addedData
});
$c_Lquizleague_web_maintain_season_CalendarComponent$.prototype.quizleague$web$core$Component$$addedData_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_season_CalendarComponent$__f_quizleague$web$core$Component$$addedData = x$1
});
$c_Lquizleague_web_maintain_season_CalendarComponent$.prototype.quizleague$web$core$Component$$addedComponents__sci_List = (function() {
  return this.Lquizleague_web_maintain_season_CalendarComponent$__f_quizleague$web$core$Component$$addedComponents
});
$c_Lquizleague_web_maintain_season_CalendarComponent$.prototype.quizleague$web$core$Component$$addedComponents_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_season_CalendarComponent$__f_quizleague$web$core$Component$$addedComponents = x$1
});
$c_Lquizleague_web_maintain_season_CalendarComponent$.prototype.quizleague$web$core$Component$$addedWatch__sci_Map = (function() {
  return this.Lquizleague_web_maintain_season_CalendarComponent$__f_quizleague$web$core$Component$$addedWatch
});
$c_Lquizleague_web_maintain_season_CalendarComponent$.prototype.quizleague$web$core$Component$$addedWatch_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_season_CalendarComponent$__f_quizleague$web$core$Component$$addedWatch = x$1
});
$c_Lquizleague_web_maintain_season_CalendarComponent$.prototype.empty__sjs_js_Object = (function() {
  return this.Lquizleague_web_maintain_season_CalendarComponent$__f_empty
});
$c_Lquizleague_web_maintain_season_CalendarComponent$.prototype.quizleague$web$core$Component$$commonMethods__sci_Map = (function() {
  return this.Lquizleague_web_maintain_season_CalendarComponent$__f_quizleague$web$core$Component$$commonMethods
});
$c_Lquizleague_web_maintain_season_CalendarComponent$.prototype.quizleague$web$core$Component$_setter_$empty_$eq__sjs_js_Object__V = (function(x$1) {
  this.Lquizleague_web_maintain_season_CalendarComponent$__f_empty = x$1
});
$c_Lquizleague_web_maintain_season_CalendarComponent$.prototype.quizleague$web$core$Component$_setter_$quizleague$web$core$Component$$commonMethods_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_season_CalendarComponent$__f_quizleague$web$core$Component$$commonMethods = x$1
});
$c_Lquizleague_web_maintain_season_CalendarComponent$.prototype.template__T = (function() {
  return this.Lquizleague_web_maintain_season_CalendarComponent$__f_template
});
$c_Lquizleague_web_maintain_season_CalendarComponent$.prototype.venues__Lrxscalajs_Observable = (function() {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_util_component_SelectUtils$().model__Lquizleague_web_service_GetService__F1__Lrxscalajs_Observable($j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_maintain_venue_VenueService$(), new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((x$1$2) => $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(x$1$2.name))))
});
$c_Lquizleague_web_maintain_season_CalendarComponent$.prototype.addEvent__Lquizleague_web_maintain_component_ItemComponent__sjs_js_ArrayOps = (function(c) {
  var array = c.item.calendar;
  var this$2 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$ct_sjs_js_ArrayOps__sjs_js_Array__(new $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$c_sjs_js_ArrayOps(), array);
  var elem = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_model_CalendarEvent$().apply__Lquizleague_web_util_rx_RefObservable__T__T__F__T__Lquizleague_web_model_CalendarEvent(null, null, null, 0.0, null);
  this$2.sjs_js_ArrayOps__f_scala$scalajs$js$ArrayOps$$array.push(elem);
  return this$2
});
$c_Lquizleague_web_maintain_season_CalendarComponent$.prototype.deleteEvent__Lquizleague_web_maintain_component_ItemComponent__Lquizleague_web_model_CalendarEvent__sjs_js_WrappedArray = (function(c, event) {
  var array = c.item.calendar;
  var this$2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$ct_sjs_js_WrappedArray__sjs_js_Array__(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjs_js_WrappedArray(), array);
  return $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_sjs_js_WrappedArray($j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_scm_BufferLike__$minus$eq__O__scm_Buffer(this$2, event))
});
$c_Lquizleague_web_maintain_season_CalendarComponent$.prototype.save__Lquizleague_web_maintain_component_ItemComponent__V = (function(c) {
  var this$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.Lquizleague_web_maintain_season_CalendarComponent$__f_service);
  var item = c.item;
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__add__Lquizleague_web_model_Model__Lquizleague_web_model_Model(this$1, item);
  c.$router.back()
});
$c_Lquizleague_web_maintain_season_CalendarComponent$.prototype.parentKey__Lquizleague_web_maintain_component_ItemComponent__T = (function(c) {
  return null
});
$c_Lquizleague_web_maintain_season_CalendarComponent$.prototype.service__Lquizleague_web_service_GetService = (function() {
  return this.Lquizleague_web_maintain_season_CalendarComponent$__f_service
});
var $d_Lquizleague_web_maintain_season_CalendarComponent$ = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  Lquizleague_web_maintain_season_CalendarComponent$: 0
}, false, "quizleague.web.maintain.season.CalendarComponent$", {
  Lquizleague_web_maintain_season_CalendarComponent$: 1,
  O: 1,
  Lquizleague_web_maintain_component_ItemComponentConfig: 1,
  Lquizleague_web_core_Component: 1,
  Lquizleague_web_core_RouteComponent: 1
});
export { $d_Lquizleague_web_maintain_season_CalendarComponent$ as $d_Lquizleague_web_maintain_season_CalendarComponent$ };
$c_Lquizleague_web_maintain_season_CalendarComponent$.prototype.$classData = $d_Lquizleague_web_maintain_season_CalendarComponent$;
var $n_Lquizleague_web_maintain_season_CalendarComponent$;
function $m_Lquizleague_web_maintain_season_CalendarComponent$() {
  if ((!$n_Lquizleague_web_maintain_season_CalendarComponent$)) {
    $n_Lquizleague_web_maintain_season_CalendarComponent$ = new $c_Lquizleague_web_maintain_season_CalendarComponent$()
  };
  return $n_Lquizleague_web_maintain_season_CalendarComponent$
}
export { $m_Lquizleague_web_maintain_season_CalendarComponent$ as $m_Lquizleague_web_maintain_season_CalendarComponent$ };
/** @constructor */
function $c_Lquizleague_web_maintain_season_SeasonComponent$() {
  this.Lquizleague_web_maintain_season_SeasonComponent$__f_template = null;
  this.Lquizleague_web_maintain_season_SeasonComponent$__f_service = null;
  this.Lquizleague_web_maintain_season_SeasonComponent$__f_competitionService = null;
  this.Lquizleague_web_maintain_season_SeasonComponent$__f_name = null;
  this.Lquizleague_web_maintain_season_SeasonComponent$__f_paramName = null;
  this.Lquizleague_web_maintain_season_SeasonComponent$__f_quizleague$web$core$Component$$addedSubs = null;
  this.Lquizleague_web_maintain_season_SeasonComponent$__f_quizleague$web$core$Component$$addedSubParams = null;
  this.Lquizleague_web_maintain_season_SeasonComponent$__f_quizleague$web$core$Component$$addedProps = null;
  this.Lquizleague_web_maintain_season_SeasonComponent$__f_quizleague$web$core$Component$$addedMethods = null;
  this.Lquizleague_web_maintain_season_SeasonComponent$__f_quizleague$web$core$Component$$addedComputed = null;
  this.Lquizleague_web_maintain_season_SeasonComponent$__f_quizleague$web$core$Component$$addedDataFn = null;
  this.Lquizleague_web_maintain_season_SeasonComponent$__f_quizleague$web$core$Component$$addedData = null;
  this.Lquizleague_web_maintain_season_SeasonComponent$__f_quizleague$web$core$Component$$addedComponents = null;
  this.Lquizleague_web_maintain_season_SeasonComponent$__f_quizleague$web$core$Component$$addedWatch = null;
  this.Lquizleague_web_maintain_season_SeasonComponent$__f_empty = null;
  this.Lquizleague_web_maintain_season_SeasonComponent$__f_quizleague$web$core$Component$$commonMethods = null;
  $n_Lquizleague_web_maintain_season_SeasonComponent$ = this;
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__$init$__V(this);
  $f_Lquizleague_web_maintain_component_ItemComponentConfig__$init$__V(this);
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_RouteComponent__$init$__V(this);
  this.Lquizleague_web_maintain_season_SeasonComponent$__f_template = (((((((("\n  <v-container v-if=\"item\">\n    <v-form v-model=\"valid\" ref=\"fm\">\n      <v-layout column>\n        <v-text-field\n          label=\"Start Year\"\n          v-model=\"item.startYear\"\n          :rules=" + $m_Lquizleague_web_maintain_component_TemplateElements$().valRequired__T__T("Start Year")) + "\n          required\n        ></v-text-field>\n        <v-text-field\n          label=\"End Year\"\n          v-model=\"item.endYear\"\n          :rules=") + $m_Lquizleague_web_maintain_component_TemplateElements$().valRequired__T__T("End Year")) + "\n          required\n        ></v-text-field>\n\n        <div><v-btn v-on:click =\"editText(item.text.id)\" text><v-icon>mdi-card-text-outline</v-icon>Text</v-btn></div>\n        <div><v-btn v-on:click =\"calendar(item.text.id)\" text><v-icon>mdi-calendar</v-icon>Calendar</v-btn></div>\n        <v-layout column>\n          <v-select @click:append=\"addCompetition(item, selectedType)\" clearable append-icon=\"mdi-plus\" v-model=\"selectedType\" label=\"Add Competition\" :items=\"types\"></v-select>\n        <div>\n          <v-chip close v-on:click=\"editCompetition(c)\" @click:close=\"removeCompetition(c)\" v-for=\"c in competitions\" :key=\"c.id\">{{c.name}}</v-chip>\n        </div>\n        </v-layout>\n        ") + $m_Lquizleague_web_maintain_component_TemplateElements$().Lquizleague_web_maintain_component_TemplateElements$__f_chbxRetired) + " \n     </v-layout>\n     ") + $m_Lquizleague_web_maintain_component_TemplateElements$().Lquizleague_web_maintain_component_TemplateElements$__f_formButtons) + "\n    </v-form>\n  </v-container>");
  this.Lquizleague_web_maintain_season_SeasonComponent$__f_service = $m_Lquizleague_web_maintain_season_SeasonService$();
  this.Lquizleague_web_maintain_season_SeasonComponent$__f_competitionService = $m_Lquizleague_web_maintain_competition_CompetitionService$();
  var array = [];
  var fn = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((c$2) => {
    var this$4 = $m_Lquizleague_web_maintain_season_SeasonComponent$();
    var param = this$4.Lquizleague_web_maintain_season_SeasonComponent$__f_paramName;
    var service = this$4.Lquizleague_web_maintain_season_SeasonComponent$__f_service;
    return $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($f_Lquizleague_web_maintain_component_ItemComponentConfig__obsFromParam__Lquizleague_web_maintain_component_ItemComponent__T__Lquizleague_web_service_GetService__Lrxscalajs_Observable(this$4, c$2, param, service)).flatMap__F1__Lrxscalajs_Observable(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((x$1$2) => $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$as_Lrxscalajs_Observable(x$1$2.competition))))
  }));
  this.Lquizleague_web_maintain_season_SeasonComponent$__f_quizleague$web$core$Component$$addedSubs = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.Lquizleague_web_maintain_season_SeasonComponent$__f_quizleague$web$core$Component$$addedSubs).$plus__T2__sci_Map(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2("competitions", fn));
  var $$x1 = this.Lquizleague_web_maintain_season_SeasonComponent$__f_quizleague$web$core$Component$$addedSubParams;
  var this$5 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sc_Seq$();
  var bf = this$5.scg_GenTraversableFactory__f_ReusableCBFInstance;
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(bf);
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sjs_js_WrappedArray$();
  var b = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$ct_sjs_js_WrappedArray__(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjs_js_WrappedArray());
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length);
  var i = 0;
  var len = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length);
  while ((i < len)) {
    var index = i;
    var arg1 = array[index];
    var x$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(arg1);
    var elem = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2(x$1, "competitions");
    b.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.push(elem);
    i = ((1 + i) | 0)
  };
  var this$8 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sci_List$();
  this.Lquizleague_web_maintain_season_SeasonComponent$__f_quizleague$web$core$Component$$addedSubParams = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_sci_List($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($$x1).$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O(b, this$8.scg_GenTraversableFactory__f_ReusableCBFInstance));
  var fn$1 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_sjs_js_ThisFunction$().fromFunction2__F2__sjs_js_ThisFunction1(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction2(((c$3$2, competition$2) => $m_Lquizleague_web_maintain_season_SeasonComponent$().removeCompetition__Lquizleague_web_maintain_season_SeasonComponent__Lquizleague_web_model_Competition__O(c$3$2, competition$2))));
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__method__T__sjs_js_Function__V(this, "removeCompetition", fn$1);
  var fn$2 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_sjs_js_ThisFunction$().fromFunction3__F3__sjs_js_ThisFunction2(new $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$c_sjsr_AnonFunction3(((c$4$2, item$2, typeName$2) => {
    var typeName = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(typeName$2);
    $m_Lquizleague_web_maintain_season_SeasonComponent$().addCompetition__Lquizleague_web_maintain_season_SeasonComponent__Lquizleague_web_model_Season__T__V(c$4$2, item$2, typeName)
  })));
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__method__T__sjs_js_Function__V(this, "addCompetition", fn$2);
  var fn$3 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_sjs_js_ThisFunction$().fromFunction1__F1__sjs_js_ThisFunction0(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((c$5$2) => {
    $m_Lquizleague_web_maintain_season_SeasonComponent$().calendar__Lquizleague_web_maintain_season_SeasonComponent__V(c$5$2)
  })));
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__method__T__sjs_js_Function__V(this, "calendar", fn$3);
  var fn$4 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_sjs_js_ThisFunction$().fromFunction2__F2__sjs_js_ThisFunction1(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction2(((c$6$2, comp$2) => {
    $m_Lquizleague_web_maintain_season_SeasonComponent$().editCompetition__Lquizleague_web_maintain_season_SeasonComponent__Lquizleague_web_model_Competition__V(c$6$2, comp$2)
  })));
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__method__T__sjs_js_Function__V(this, "editCompetition", fn$4);
  var $$x3 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_sjs_js_JSConverters$JSRichGenTraversableOnce$();
  var this$10 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_model_CompetitionType$().values__s_Enumeration$ValueSet());
  var this$9 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sci_SortedSet$();
  var ord = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_s_math_Ordering$String$();
  var bf$1 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_scg_SortedSetFactory$SortedSetCanBuildFrom(this$9, ord);
  var b$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$p_sc_TraversableLike__builder$1__scg_CanBuildFrom__scm_Builder(this$10, bf$1);
  var this$11 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this$10.iterator__sc_Iterator());
  while (this$11.hasNext__Z()) {
    var arg1$1 = this$11.next__O();
    var $$x2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(b$1);
    var x$2 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$as_s_Enumeration$Value(arg1$1);
    $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($$x2).$plus$eq__O__scm_Builder($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(x$2).toString__T())
  };
  var col = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_sc_GenTraversableOnce($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(b$1).result__O());
  var value = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($$x3).toJSArray$extension__sc_GenTraversableOnce__sjs_js_Array(col);
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__data__T__O__V(this, "types", value);
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__data__T__O__V(this, "selectedType", null);
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__data__T__O__V(this, "valid", true)
}
export { $c_Lquizleague_web_maintain_season_SeasonComponent$ as $c_Lquizleague_web_maintain_season_SeasonComponent$ };
$c_Lquizleague_web_maintain_season_SeasonComponent$.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_Lquizleague_web_maintain_season_SeasonComponent$.prototype.constructor = $c_Lquizleague_web_maintain_season_SeasonComponent$;
/** @constructor */
function $h_Lquizleague_web_maintain_season_SeasonComponent$() {
  /*<skip>*/
}
export { $h_Lquizleague_web_maintain_season_SeasonComponent$ as $h_Lquizleague_web_maintain_season_SeasonComponent$ };
$h_Lquizleague_web_maintain_season_SeasonComponent$.prototype = $c_Lquizleague_web_maintain_season_SeasonComponent$.prototype;
$c_Lquizleague_web_maintain_season_SeasonComponent$.prototype.save__Lquizleague_web_maintain_component_ItemComponent__V = (function(c) {
  $f_Lquizleague_web_maintain_component_ItemComponentConfig__save__Lquizleague_web_maintain_component_ItemComponent__V(this, c)
});
$c_Lquizleague_web_maintain_season_SeasonComponent$.prototype.mounted__sjs_js_Function = (function() {
  return null
});
$c_Lquizleague_web_maintain_season_SeasonComponent$.prototype.beforeDestroy__sjs_js_Function = (function() {
  return null
});
$c_Lquizleague_web_maintain_season_SeasonComponent$.prototype.name__T = (function() {
  return this.Lquizleague_web_maintain_season_SeasonComponent$__f_name
});
$c_Lquizleague_web_maintain_season_SeasonComponent$.prototype.quizleague$web$core$RouteComponent$_setter_$name_$eq__T__V = (function(x$1) {
  this.Lquizleague_web_maintain_season_SeasonComponent$__f_name = x$1
});
$c_Lquizleague_web_maintain_season_SeasonComponent$.prototype.paramName__T = (function() {
  return this.Lquizleague_web_maintain_season_SeasonComponent$__f_paramName
});
$c_Lquizleague_web_maintain_season_SeasonComponent$.prototype.quizleague$web$maintain$component$ItemComponentConfig$_setter_$paramName_$eq__T__V = (function(x$1) {
  this.Lquizleague_web_maintain_season_SeasonComponent$__f_paramName = x$1
});
$c_Lquizleague_web_maintain_season_SeasonComponent$.prototype.quizleague$web$core$Component$$addedSubs__sci_Map = (function() {
  return this.Lquizleague_web_maintain_season_SeasonComponent$__f_quizleague$web$core$Component$$addedSubs
});
$c_Lquizleague_web_maintain_season_SeasonComponent$.prototype.quizleague$web$core$Component$$addedSubs_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_season_SeasonComponent$__f_quizleague$web$core$Component$$addedSubs = x$1
});
$c_Lquizleague_web_maintain_season_SeasonComponent$.prototype.quizleague$web$core$Component$$addedSubParams__sci_List = (function() {
  return this.Lquizleague_web_maintain_season_SeasonComponent$__f_quizleague$web$core$Component$$addedSubParams
});
$c_Lquizleague_web_maintain_season_SeasonComponent$.prototype.quizleague$web$core$Component$$addedSubParams_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_season_SeasonComponent$__f_quizleague$web$core$Component$$addedSubParams = x$1
});
$c_Lquizleague_web_maintain_season_SeasonComponent$.prototype.quizleague$web$core$Component$$addedProps__sci_List = (function() {
  return this.Lquizleague_web_maintain_season_SeasonComponent$__f_quizleague$web$core$Component$$addedProps
});
$c_Lquizleague_web_maintain_season_SeasonComponent$.prototype.quizleague$web$core$Component$$addedProps_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_season_SeasonComponent$__f_quizleague$web$core$Component$$addedProps = x$1
});
$c_Lquizleague_web_maintain_season_SeasonComponent$.prototype.quizleague$web$core$Component$$addedMethods__sci_Map = (function() {
  return this.Lquizleague_web_maintain_season_SeasonComponent$__f_quizleague$web$core$Component$$addedMethods
});
$c_Lquizleague_web_maintain_season_SeasonComponent$.prototype.quizleague$web$core$Component$$addedMethods_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_season_SeasonComponent$__f_quizleague$web$core$Component$$addedMethods = x$1
});
$c_Lquizleague_web_maintain_season_SeasonComponent$.prototype.quizleague$web$core$Component$$addedComputed__sci_Map = (function() {
  return this.Lquizleague_web_maintain_season_SeasonComponent$__f_quizleague$web$core$Component$$addedComputed
});
$c_Lquizleague_web_maintain_season_SeasonComponent$.prototype.quizleague$web$core$Component$$addedComputed_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_season_SeasonComponent$__f_quizleague$web$core$Component$$addedComputed = x$1
});
$c_Lquizleague_web_maintain_season_SeasonComponent$.prototype.quizleague$web$core$Component$$addedDataFn__sci_Map = (function() {
  return this.Lquizleague_web_maintain_season_SeasonComponent$__f_quizleague$web$core$Component$$addedDataFn
});
$c_Lquizleague_web_maintain_season_SeasonComponent$.prototype.quizleague$web$core$Component$$addedDataFn_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_season_SeasonComponent$__f_quizleague$web$core$Component$$addedDataFn = x$1
});
$c_Lquizleague_web_maintain_season_SeasonComponent$.prototype.quizleague$web$core$Component$$addedData__sci_Map = (function() {
  return this.Lquizleague_web_maintain_season_SeasonComponent$__f_quizleague$web$core$Component$$addedData
});
$c_Lquizleague_web_maintain_season_SeasonComponent$.prototype.quizleague$web$core$Component$$addedData_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_season_SeasonComponent$__f_quizleague$web$core$Component$$addedData = x$1
});
$c_Lquizleague_web_maintain_season_SeasonComponent$.prototype.quizleague$web$core$Component$$addedComponents__sci_List = (function() {
  return this.Lquizleague_web_maintain_season_SeasonComponent$__f_quizleague$web$core$Component$$addedComponents
});
$c_Lquizleague_web_maintain_season_SeasonComponent$.prototype.quizleague$web$core$Component$$addedComponents_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_season_SeasonComponent$__f_quizleague$web$core$Component$$addedComponents = x$1
});
$c_Lquizleague_web_maintain_season_SeasonComponent$.prototype.quizleague$web$core$Component$$addedWatch__sci_Map = (function() {
  return this.Lquizleague_web_maintain_season_SeasonComponent$__f_quizleague$web$core$Component$$addedWatch
});
$c_Lquizleague_web_maintain_season_SeasonComponent$.prototype.quizleague$web$core$Component$$addedWatch_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_season_SeasonComponent$__f_quizleague$web$core$Component$$addedWatch = x$1
});
$c_Lquizleague_web_maintain_season_SeasonComponent$.prototype.empty__sjs_js_Object = (function() {
  return this.Lquizleague_web_maintain_season_SeasonComponent$__f_empty
});
$c_Lquizleague_web_maintain_season_SeasonComponent$.prototype.quizleague$web$core$Component$$commonMethods__sci_Map = (function() {
  return this.Lquizleague_web_maintain_season_SeasonComponent$__f_quizleague$web$core$Component$$commonMethods
});
$c_Lquizleague_web_maintain_season_SeasonComponent$.prototype.quizleague$web$core$Component$_setter_$empty_$eq__sjs_js_Object__V = (function(x$1) {
  this.Lquizleague_web_maintain_season_SeasonComponent$__f_empty = x$1
});
$c_Lquizleague_web_maintain_season_SeasonComponent$.prototype.quizleague$web$core$Component$_setter_$quizleague$web$core$Component$$commonMethods_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_season_SeasonComponent$__f_quizleague$web$core$Component$$commonMethods = x$1
});
$c_Lquizleague_web_maintain_season_SeasonComponent$.prototype.template__T = (function() {
  return this.Lquizleague_web_maintain_season_SeasonComponent$__f_template
});
$c_Lquizleague_web_maintain_season_SeasonComponent$.prototype.removeCompetition__Lquizleague_web_maintain_season_SeasonComponent__Lquizleague_web_model_Competition__O = (function(c, competition) {
  if ($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uZ(window.confirm("Delete ?"))) {
    var this$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.Lquizleague_web_maintain_season_SeasonComponent$__f_competitionService);
    return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_PutService__delete__Lquizleague_web_model_Model__Lrxscalajs_Observable(this$1, competition)
  } else {
    return (void 0)
  }
});
$c_Lquizleague_web_maintain_season_SeasonComponent$.prototype.addCompetition__Lquizleague_web_maintain_season_SeasonComponent__Lquizleague_web_model_Season__T__V = (function(c, item, typeName) {
  var compType = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_model_CompetitionType$().withName__T__s_Enumeration$Value(typeName);
  var this$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.Lquizleague_web_maintain_season_SeasonComponent$__f_competitionService);
  var parentKey = item.key;
  var comp = $f_Lquizleague_web_service_competition_CompetitionPutService__instance__s_Enumeration$Value__Lquizleague_web_model_Key__Lquizleague_web_model_Competition(this$1, compType, parentKey);
  var this$2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.Lquizleague_web_maintain_season_SeasonComponent$__f_competitionService);
  var qual$1 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_PutService__save__Lquizleague_web_model_Model__Lrxscalajs_Observable(this$2, comp);
  var x$1 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((x$2) => {
    $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_jl_Void(x$2);
    $m_Lquizleague_web_maintain_season_SeasonComponent$().editCompetition__Lquizleague_web_maintain_season_SeasonComponent__Lquizleague_web_model_Competition__V(c, comp)
  }));
  var x$2$2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(qual$1).subscribe$default$2__F1();
  var x$3 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(qual$1).subscribe$default$3__F0();
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(qual$1).subscribe__F1__F1__F0__Lrxscalajs_subscription_Subscription(x$1, x$2$2, x$3);
  c.selectedType = null
});
$c_Lquizleague_web_maintain_season_SeasonComponent$.prototype.editCompetition__Lquizleague_web_maintain_season_SeasonComponent__Lquizleague_web_model_Competition__V = (function(c, comp) {
  c.$router.push((((($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(c.item.id) + "/competition/") + $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(comp.id)) + "/") + $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(comp.typeName)))
});
$c_Lquizleague_web_maintain_season_SeasonComponent$.prototype.calendar__Lquizleague_web_maintain_season_SeasonComponent__V = (function(c) {
  var this$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.Lquizleague_web_maintain_season_SeasonComponent$__f_service);
  var item = c.item;
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__add__Lquizleague_web_model_Model__Lquizleague_web_model_Model(this$1, item);
  c.$router.push(($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(c.item.id) + "/calendar"))
});
$c_Lquizleague_web_maintain_season_SeasonComponent$.prototype.service__Lquizleague_web_service_GetService = (function() {
  return this.Lquizleague_web_maintain_season_SeasonComponent$__f_service
});
$c_Lquizleague_web_maintain_season_SeasonComponent$.prototype.parentKey__Lquizleague_web_maintain_component_ItemComponent__T = (function(c) {
  return null
});
var $d_Lquizleague_web_maintain_season_SeasonComponent$ = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  Lquizleague_web_maintain_season_SeasonComponent$: 0
}, false, "quizleague.web.maintain.season.SeasonComponent$", {
  Lquizleague_web_maintain_season_SeasonComponent$: 1,
  O: 1,
  Lquizleague_web_maintain_component_ItemComponentConfig: 1,
  Lquizleague_web_core_Component: 1,
  Lquizleague_web_core_RouteComponent: 1
});
export { $d_Lquizleague_web_maintain_season_SeasonComponent$ as $d_Lquizleague_web_maintain_season_SeasonComponent$ };
$c_Lquizleague_web_maintain_season_SeasonComponent$.prototype.$classData = $d_Lquizleague_web_maintain_season_SeasonComponent$;
var $n_Lquizleague_web_maintain_season_SeasonComponent$;
function $m_Lquizleague_web_maintain_season_SeasonComponent$() {
  if ((!$n_Lquizleague_web_maintain_season_SeasonComponent$)) {
    $n_Lquizleague_web_maintain_season_SeasonComponent$ = new $c_Lquizleague_web_maintain_season_SeasonComponent$()
  };
  return $n_Lquizleague_web_maintain_season_SeasonComponent$
}
export { $m_Lquizleague_web_maintain_season_SeasonComponent$ as $m_Lquizleague_web_maintain_season_SeasonComponent$ };
/** @constructor */
function $c_Lquizleague_web_maintain_team_TeamComponent$() {
  this.Lquizleague_web_maintain_team_TeamComponent$__f_service = null;
  this.Lquizleague_web_maintain_team_TeamComponent$__f_venueService = null;
  this.Lquizleague_web_maintain_team_TeamComponent$__f_template = null;
  this.Lquizleague_web_maintain_team_TeamComponent$__f_name = null;
  this.Lquizleague_web_maintain_team_TeamComponent$__f_paramName = null;
  this.Lquizleague_web_maintain_team_TeamComponent$__f_quizleague$web$core$Component$$addedSubs = null;
  this.Lquizleague_web_maintain_team_TeamComponent$__f_quizleague$web$core$Component$$addedSubParams = null;
  this.Lquizleague_web_maintain_team_TeamComponent$__f_quizleague$web$core$Component$$addedProps = null;
  this.Lquizleague_web_maintain_team_TeamComponent$__f_quizleague$web$core$Component$$addedMethods = null;
  this.Lquizleague_web_maintain_team_TeamComponent$__f_quizleague$web$core$Component$$addedComputed = null;
  this.Lquizleague_web_maintain_team_TeamComponent$__f_quizleague$web$core$Component$$addedDataFn = null;
  this.Lquizleague_web_maintain_team_TeamComponent$__f_quizleague$web$core$Component$$addedData = null;
  this.Lquizleague_web_maintain_team_TeamComponent$__f_quizleague$web$core$Component$$addedComponents = null;
  this.Lquizleague_web_maintain_team_TeamComponent$__f_quizleague$web$core$Component$$addedWatch = null;
  this.Lquizleague_web_maintain_team_TeamComponent$__f_empty = null;
  this.Lquizleague_web_maintain_team_TeamComponent$__f_quizleague$web$core$Component$$commonMethods = null;
  $n_Lquizleague_web_maintain_team_TeamComponent$ = this;
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__$init$__V(this);
  $f_Lquizleague_web_maintain_component_ItemComponentConfig__$init$__V(this);
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_RouteComponent__$init$__V(this);
  this.Lquizleague_web_maintain_team_TeamComponent$__f_service = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_maintain_team_TeamService$();
  this.Lquizleague_web_maintain_team_TeamComponent$__f_venueService = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_maintain_venue_VenueService$();
  this.Lquizleague_web_maintain_team_TeamComponent$__f_template = (((((((("\n  <v-container v-if=\"item\">\n    <v-form v-model=\"valid\" ref=\"fm\">\n      <v-layout column>\n        <v-text-field\n          label=\"Name\"\n          v-model=\"item.name\"\n          :rules=" + $m_Lquizleague_web_maintain_component_TemplateElements$().valRequired__T__T("Name")) + "\n          required\n        ></v-text-field>\n        <v-text-field\n          label=\"Short Name\"\n          v-model=\"item.shortName\"\n          :rules=") + $m_Lquizleague_web_maintain_component_TemplateElements$().valRequired__T__T("Short Name")) + "\n          required\n        ></v-text-field>\n        <v-select\n          label=\"Venue\"\n          :items=\"venues\"\n          v-model=\"item.venue\"\n          >\n        </v-select>\n        <v-select\n          label=\"Users\"\n          :items=\"users\"\n          v-model=\"item.users\"\n          multiple\n          chips\n          >\n        </v-select>\n        <div><v-btn v-on:click =\"editText(item.text.id)\" text><v-icon>mdi-card-text-outline</v-icon>Text</v-btn></div>\n        ") + $m_Lquizleague_web_maintain_component_TemplateElements$().Lquizleague_web_maintain_component_TemplateElements$__f_chbxRetired) + " \n     </v-layout>\n     ") + $m_Lquizleague_web_maintain_component_TemplateElements$().Lquizleague_web_maintain_component_TemplateElements$__f_formButtons) + "\n    </v-form>\n  </v-container>");
  var array = [];
  var fn = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((c$2) => $m_Lquizleague_web_maintain_team_TeamComponent$().venues__Lrxscalajs_Observable()));
  this.Lquizleague_web_maintain_team_TeamComponent$__f_quizleague$web$core$Component$$addedSubs = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.Lquizleague_web_maintain_team_TeamComponent$__f_quizleague$web$core$Component$$addedSubs).$plus__T2__sci_Map(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2("venues", fn));
  var $$x1 = this.Lquizleague_web_maintain_team_TeamComponent$__f_quizleague$web$core$Component$$addedSubParams;
  var this$4 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sc_Seq$();
  var bf = this$4.scg_GenTraversableFactory__f_ReusableCBFInstance;
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(bf);
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sjs_js_WrappedArray$();
  var b = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$ct_sjs_js_WrappedArray__(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjs_js_WrappedArray());
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length);
  var i = 0;
  var len = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length);
  while ((i < len)) {
    var index = i;
    var arg1 = array[index];
    var x$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(arg1);
    var elem = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2(x$1, "venues");
    b.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.push(elem);
    i = ((1 + i) | 0)
  };
  var this$7 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sci_List$();
  this.Lquizleague_web_maintain_team_TeamComponent$__f_quizleague$web$core$Component$$addedSubParams = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_sci_List($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($$x1).$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O(b, this$7.scg_GenTraversableFactory__f_ReusableCBFInstance));
  var array$1 = [];
  var fn$1 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((c$3$2) => $m_Lquizleague_web_maintain_team_TeamComponent$().users__Lrxscalajs_Observable()));
  this.Lquizleague_web_maintain_team_TeamComponent$__f_quizleague$web$core$Component$$addedSubs = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.Lquizleague_web_maintain_team_TeamComponent$__f_quizleague$web$core$Component$$addedSubs).$plus__T2__sci_Map(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2("users", fn$1));
  var $$x2 = this.Lquizleague_web_maintain_team_TeamComponent$__f_quizleague$web$core$Component$$addedSubParams;
  var this$10 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sc_Seq$();
  var bf$1 = this$10.scg_GenTraversableFactory__f_ReusableCBFInstance;
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(bf$1);
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sjs_js_WrappedArray$();
  var b$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$ct_sjs_js_WrappedArray__(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjs_js_WrappedArray());
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array$1.length);
  var i$1 = 0;
  var len$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array$1.length);
  while ((i$1 < len$1)) {
    var index$1 = i$1;
    var arg1$1 = array$1[index$1];
    var x$1$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(arg1$1);
    var elem$1 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2(x$1$1, "users");
    b$1.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.push(elem$1);
    i$1 = ((1 + i$1) | 0)
  };
  var this$13 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sci_List$();
  this.Lquizleague_web_maintain_team_TeamComponent$__f_quizleague$web$core$Component$$addedSubParams = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_sci_List($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($$x2).$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O(b$1, this$13.scg_GenTraversableFactory__f_ReusableCBFInstance))
}
export { $c_Lquizleague_web_maintain_team_TeamComponent$ as $c_Lquizleague_web_maintain_team_TeamComponent$ };
$c_Lquizleague_web_maintain_team_TeamComponent$.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_Lquizleague_web_maintain_team_TeamComponent$.prototype.constructor = $c_Lquizleague_web_maintain_team_TeamComponent$;
/** @constructor */
function $h_Lquizleague_web_maintain_team_TeamComponent$() {
  /*<skip>*/
}
export { $h_Lquizleague_web_maintain_team_TeamComponent$ as $h_Lquizleague_web_maintain_team_TeamComponent$ };
$h_Lquizleague_web_maintain_team_TeamComponent$.prototype = $c_Lquizleague_web_maintain_team_TeamComponent$.prototype;
$c_Lquizleague_web_maintain_team_TeamComponent$.prototype.save__Lquizleague_web_maintain_component_ItemComponent__V = (function(c) {
  $f_Lquizleague_web_maintain_component_ItemComponentConfig__save__Lquizleague_web_maintain_component_ItemComponent__V(this, c)
});
$c_Lquizleague_web_maintain_team_TeamComponent$.prototype.mounted__sjs_js_Function = (function() {
  return null
});
$c_Lquizleague_web_maintain_team_TeamComponent$.prototype.beforeDestroy__sjs_js_Function = (function() {
  return null
});
$c_Lquizleague_web_maintain_team_TeamComponent$.prototype.name__T = (function() {
  return this.Lquizleague_web_maintain_team_TeamComponent$__f_name
});
$c_Lquizleague_web_maintain_team_TeamComponent$.prototype.quizleague$web$core$RouteComponent$_setter_$name_$eq__T__V = (function(x$1) {
  this.Lquizleague_web_maintain_team_TeamComponent$__f_name = x$1
});
$c_Lquizleague_web_maintain_team_TeamComponent$.prototype.paramName__T = (function() {
  return this.Lquizleague_web_maintain_team_TeamComponent$__f_paramName
});
$c_Lquizleague_web_maintain_team_TeamComponent$.prototype.quizleague$web$maintain$component$ItemComponentConfig$_setter_$paramName_$eq__T__V = (function(x$1) {
  this.Lquizleague_web_maintain_team_TeamComponent$__f_paramName = x$1
});
$c_Lquizleague_web_maintain_team_TeamComponent$.prototype.quizleague$web$core$Component$$addedSubs__sci_Map = (function() {
  return this.Lquizleague_web_maintain_team_TeamComponent$__f_quizleague$web$core$Component$$addedSubs
});
$c_Lquizleague_web_maintain_team_TeamComponent$.prototype.quizleague$web$core$Component$$addedSubs_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_team_TeamComponent$__f_quizleague$web$core$Component$$addedSubs = x$1
});
$c_Lquizleague_web_maintain_team_TeamComponent$.prototype.quizleague$web$core$Component$$addedSubParams__sci_List = (function() {
  return this.Lquizleague_web_maintain_team_TeamComponent$__f_quizleague$web$core$Component$$addedSubParams
});
$c_Lquizleague_web_maintain_team_TeamComponent$.prototype.quizleague$web$core$Component$$addedSubParams_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_team_TeamComponent$__f_quizleague$web$core$Component$$addedSubParams = x$1
});
$c_Lquizleague_web_maintain_team_TeamComponent$.prototype.quizleague$web$core$Component$$addedProps__sci_List = (function() {
  return this.Lquizleague_web_maintain_team_TeamComponent$__f_quizleague$web$core$Component$$addedProps
});
$c_Lquizleague_web_maintain_team_TeamComponent$.prototype.quizleague$web$core$Component$$addedProps_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_team_TeamComponent$__f_quizleague$web$core$Component$$addedProps = x$1
});
$c_Lquizleague_web_maintain_team_TeamComponent$.prototype.quizleague$web$core$Component$$addedMethods__sci_Map = (function() {
  return this.Lquizleague_web_maintain_team_TeamComponent$__f_quizleague$web$core$Component$$addedMethods
});
$c_Lquizleague_web_maintain_team_TeamComponent$.prototype.quizleague$web$core$Component$$addedMethods_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_team_TeamComponent$__f_quizleague$web$core$Component$$addedMethods = x$1
});
$c_Lquizleague_web_maintain_team_TeamComponent$.prototype.quizleague$web$core$Component$$addedComputed__sci_Map = (function() {
  return this.Lquizleague_web_maintain_team_TeamComponent$__f_quizleague$web$core$Component$$addedComputed
});
$c_Lquizleague_web_maintain_team_TeamComponent$.prototype.quizleague$web$core$Component$$addedComputed_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_team_TeamComponent$__f_quizleague$web$core$Component$$addedComputed = x$1
});
$c_Lquizleague_web_maintain_team_TeamComponent$.prototype.quizleague$web$core$Component$$addedDataFn__sci_Map = (function() {
  return this.Lquizleague_web_maintain_team_TeamComponent$__f_quizleague$web$core$Component$$addedDataFn
});
$c_Lquizleague_web_maintain_team_TeamComponent$.prototype.quizleague$web$core$Component$$addedDataFn_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_team_TeamComponent$__f_quizleague$web$core$Component$$addedDataFn = x$1
});
$c_Lquizleague_web_maintain_team_TeamComponent$.prototype.quizleague$web$core$Component$$addedData__sci_Map = (function() {
  return this.Lquizleague_web_maintain_team_TeamComponent$__f_quizleague$web$core$Component$$addedData
});
$c_Lquizleague_web_maintain_team_TeamComponent$.prototype.quizleague$web$core$Component$$addedData_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_team_TeamComponent$__f_quizleague$web$core$Component$$addedData = x$1
});
$c_Lquizleague_web_maintain_team_TeamComponent$.prototype.quizleague$web$core$Component$$addedComponents__sci_List = (function() {
  return this.Lquizleague_web_maintain_team_TeamComponent$__f_quizleague$web$core$Component$$addedComponents
});
$c_Lquizleague_web_maintain_team_TeamComponent$.prototype.quizleague$web$core$Component$$addedComponents_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_team_TeamComponent$__f_quizleague$web$core$Component$$addedComponents = x$1
});
$c_Lquizleague_web_maintain_team_TeamComponent$.prototype.quizleague$web$core$Component$$addedWatch__sci_Map = (function() {
  return this.Lquizleague_web_maintain_team_TeamComponent$__f_quizleague$web$core$Component$$addedWatch
});
$c_Lquizleague_web_maintain_team_TeamComponent$.prototype.quizleague$web$core$Component$$addedWatch_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_team_TeamComponent$__f_quizleague$web$core$Component$$addedWatch = x$1
});
$c_Lquizleague_web_maintain_team_TeamComponent$.prototype.empty__sjs_js_Object = (function() {
  return this.Lquizleague_web_maintain_team_TeamComponent$__f_empty
});
$c_Lquizleague_web_maintain_team_TeamComponent$.prototype.quizleague$web$core$Component$$commonMethods__sci_Map = (function() {
  return this.Lquizleague_web_maintain_team_TeamComponent$__f_quizleague$web$core$Component$$commonMethods
});
$c_Lquizleague_web_maintain_team_TeamComponent$.prototype.quizleague$web$core$Component$_setter_$empty_$eq__sjs_js_Object__V = (function(x$1) {
  this.Lquizleague_web_maintain_team_TeamComponent$__f_empty = x$1
});
$c_Lquizleague_web_maintain_team_TeamComponent$.prototype.quizleague$web$core$Component$_setter_$quizleague$web$core$Component$$commonMethods_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_team_TeamComponent$__f_quizleague$web$core$Component$$commonMethods = x$1
});
$c_Lquizleague_web_maintain_team_TeamComponent$.prototype.venues__Lrxscalajs_Observable = (function() {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_util_component_SelectUtils$().model__Lquizleague_web_service_GetService__F1__Lrxscalajs_Observable(this.Lquizleague_web_maintain_team_TeamComponent$__f_venueService, new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((x$1$2) => $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(x$1$2.name))))
});
$c_Lquizleague_web_maintain_team_TeamComponent$.prototype.users__Lrxscalajs_Observable = (function() {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_util_component_SelectUtils$().model__Lquizleague_web_service_GetService__F1__Lrxscalajs_Observable($j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_maintain_user_UserService$(), new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((x$2$2) => $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(x$2$2.name))))
});
$c_Lquizleague_web_maintain_team_TeamComponent$.prototype.template__T = (function() {
  return this.Lquizleague_web_maintain_team_TeamComponent$__f_template
});
$c_Lquizleague_web_maintain_team_TeamComponent$.prototype.parentKey__Lquizleague_web_maintain_component_ItemComponent__T = (function(c) {
  return null
});
$c_Lquizleague_web_maintain_team_TeamComponent$.prototype.service__Lquizleague_web_service_GetService = (function() {
  return this.Lquizleague_web_maintain_team_TeamComponent$__f_service
});
var $d_Lquizleague_web_maintain_team_TeamComponent$ = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  Lquizleague_web_maintain_team_TeamComponent$: 0
}, false, "quizleague.web.maintain.team.TeamComponent$", {
  Lquizleague_web_maintain_team_TeamComponent$: 1,
  O: 1,
  Lquizleague_web_maintain_component_ItemComponentConfig: 1,
  Lquizleague_web_core_Component: 1,
  Lquizleague_web_core_RouteComponent: 1
});
export { $d_Lquizleague_web_maintain_team_TeamComponent$ as $d_Lquizleague_web_maintain_team_TeamComponent$ };
$c_Lquizleague_web_maintain_team_TeamComponent$.prototype.$classData = $d_Lquizleague_web_maintain_team_TeamComponent$;
var $n_Lquizleague_web_maintain_team_TeamComponent$;
function $m_Lquizleague_web_maintain_team_TeamComponent$() {
  if ((!$n_Lquizleague_web_maintain_team_TeamComponent$)) {
    $n_Lquizleague_web_maintain_team_TeamComponent$ = new $c_Lquizleague_web_maintain_team_TeamComponent$()
  };
  return $n_Lquizleague_web_maintain_team_TeamComponent$
}
export { $m_Lquizleague_web_maintain_team_TeamComponent$ as $m_Lquizleague_web_maintain_team_TeamComponent$ };
/** @constructor */
function $c_Lquizleague_web_maintain_text_TextComponent$() {
  this.Lquizleague_web_maintain_text_TextComponent$__f_service = null;
  this.Lquizleague_web_maintain_text_TextComponent$__f_template = null;
  this.Lquizleague_web_maintain_text_TextComponent$__f_name = null;
  this.Lquizleague_web_maintain_text_TextComponent$__f_paramName = null;
  this.Lquizleague_web_maintain_text_TextComponent$__f_quizleague$web$core$Component$$addedSubs = null;
  this.Lquizleague_web_maintain_text_TextComponent$__f_quizleague$web$core$Component$$addedSubParams = null;
  this.Lquizleague_web_maintain_text_TextComponent$__f_quizleague$web$core$Component$$addedProps = null;
  this.Lquizleague_web_maintain_text_TextComponent$__f_quizleague$web$core$Component$$addedMethods = null;
  this.Lquizleague_web_maintain_text_TextComponent$__f_quizleague$web$core$Component$$addedComputed = null;
  this.Lquizleague_web_maintain_text_TextComponent$__f_quizleague$web$core$Component$$addedDataFn = null;
  this.Lquizleague_web_maintain_text_TextComponent$__f_quizleague$web$core$Component$$addedData = null;
  this.Lquizleague_web_maintain_text_TextComponent$__f_quizleague$web$core$Component$$addedComponents = null;
  this.Lquizleague_web_maintain_text_TextComponent$__f_quizleague$web$core$Component$$addedWatch = null;
  this.Lquizleague_web_maintain_text_TextComponent$__f_empty = null;
  this.Lquizleague_web_maintain_text_TextComponent$__f_quizleague$web$core$Component$$commonMethods = null;
  $n_Lquizleague_web_maintain_text_TextComponent$ = this;
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__$init$__V(this);
  $f_Lquizleague_web_maintain_component_ItemComponentConfig__$init$__V(this);
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_RouteComponent__$init$__V(this);
  this.Lquizleague_web_maintain_text_TextComponent$__f_service = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_maintain_text_TextService$();
  this.Lquizleague_web_maintain_text_TextComponent$__f_template = (((((("\n  <v-container v-if=\"item\">\n    <v-form v-model=\"valid\" ref=\"fm\">\n      <v-layout column>\n        <div>\n        <v-text-field\n          label=\"Mime Type\"\n          v-model=\"item.mimeType\"\n          :rules=" + $m_Lquizleague_web_maintain_component_TemplateElements$().valRequired__T__T("Mime Type")) + "\n          required\n        ></v-text-field>\n        <quill-editor v-if=\"item.mimeType=='text/html'\" v-model=\"item.text\">\n\t\t    </quill-editor>\n        <v-textarea v-if=\"item.mimeType=='text/plain' || item.mimeType=='text/markdown'\"\n          label=\"Text\"\n          v-model=\"item.text\"\n          :rules=") + $m_Lquizleague_web_maintain_component_TemplateElements$().valRequired__T__T("Text")) + "\n          required\n          outline\n          auto-grow\n        ></v-textarea>\n        <v-layout column v-if=\"item.mimeType=='text/markdown'\">\n        <v-subheader>Preview</v-subheader>\n        <div class=\"elevation-5 pa-3\">\n        <ql-markdown  :text=\"item.text\" ></ql-markdown>\n        </div>\n        </v-layout>\n        </div>\n     </v-layout>\n     ") + $m_Lquizleague_web_maintain_component_TemplateElements$().Lquizleague_web_maintain_component_TemplateElements$__f_formButtons) + "\n    </v-form>\n  </v-container>")
}
export { $c_Lquizleague_web_maintain_text_TextComponent$ as $c_Lquizleague_web_maintain_text_TextComponent$ };
$c_Lquizleague_web_maintain_text_TextComponent$.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_Lquizleague_web_maintain_text_TextComponent$.prototype.constructor = $c_Lquizleague_web_maintain_text_TextComponent$;
/** @constructor */
function $h_Lquizleague_web_maintain_text_TextComponent$() {
  /*<skip>*/
}
export { $h_Lquizleague_web_maintain_text_TextComponent$ as $h_Lquizleague_web_maintain_text_TextComponent$ };
$h_Lquizleague_web_maintain_text_TextComponent$.prototype = $c_Lquizleague_web_maintain_text_TextComponent$.prototype;
$c_Lquizleague_web_maintain_text_TextComponent$.prototype.save__Lquizleague_web_maintain_component_ItemComponent__V = (function(c) {
  $f_Lquizleague_web_maintain_component_ItemComponentConfig__save__Lquizleague_web_maintain_component_ItemComponent__V(this, c)
});
$c_Lquizleague_web_maintain_text_TextComponent$.prototype.mounted__sjs_js_Function = (function() {
  return null
});
$c_Lquizleague_web_maintain_text_TextComponent$.prototype.beforeDestroy__sjs_js_Function = (function() {
  return null
});
$c_Lquizleague_web_maintain_text_TextComponent$.prototype.name__T = (function() {
  return this.Lquizleague_web_maintain_text_TextComponent$__f_name
});
$c_Lquizleague_web_maintain_text_TextComponent$.prototype.quizleague$web$core$RouteComponent$_setter_$name_$eq__T__V = (function(x$1) {
  this.Lquizleague_web_maintain_text_TextComponent$__f_name = x$1
});
$c_Lquizleague_web_maintain_text_TextComponent$.prototype.paramName__T = (function() {
  return this.Lquizleague_web_maintain_text_TextComponent$__f_paramName
});
$c_Lquizleague_web_maintain_text_TextComponent$.prototype.quizleague$web$maintain$component$ItemComponentConfig$_setter_$paramName_$eq__T__V = (function(x$1) {
  this.Lquizleague_web_maintain_text_TextComponent$__f_paramName = x$1
});
$c_Lquizleague_web_maintain_text_TextComponent$.prototype.quizleague$web$core$Component$$addedSubs__sci_Map = (function() {
  return this.Lquizleague_web_maintain_text_TextComponent$__f_quizleague$web$core$Component$$addedSubs
});
$c_Lquizleague_web_maintain_text_TextComponent$.prototype.quizleague$web$core$Component$$addedSubs_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_text_TextComponent$__f_quizleague$web$core$Component$$addedSubs = x$1
});
$c_Lquizleague_web_maintain_text_TextComponent$.prototype.quizleague$web$core$Component$$addedSubParams__sci_List = (function() {
  return this.Lquizleague_web_maintain_text_TextComponent$__f_quizleague$web$core$Component$$addedSubParams
});
$c_Lquizleague_web_maintain_text_TextComponent$.prototype.quizleague$web$core$Component$$addedSubParams_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_text_TextComponent$__f_quizleague$web$core$Component$$addedSubParams = x$1
});
$c_Lquizleague_web_maintain_text_TextComponent$.prototype.quizleague$web$core$Component$$addedProps__sci_List = (function() {
  return this.Lquizleague_web_maintain_text_TextComponent$__f_quizleague$web$core$Component$$addedProps
});
$c_Lquizleague_web_maintain_text_TextComponent$.prototype.quizleague$web$core$Component$$addedProps_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_text_TextComponent$__f_quizleague$web$core$Component$$addedProps = x$1
});
$c_Lquizleague_web_maintain_text_TextComponent$.prototype.quizleague$web$core$Component$$addedMethods__sci_Map = (function() {
  return this.Lquizleague_web_maintain_text_TextComponent$__f_quizleague$web$core$Component$$addedMethods
});
$c_Lquizleague_web_maintain_text_TextComponent$.prototype.quizleague$web$core$Component$$addedMethods_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_text_TextComponent$__f_quizleague$web$core$Component$$addedMethods = x$1
});
$c_Lquizleague_web_maintain_text_TextComponent$.prototype.quizleague$web$core$Component$$addedComputed__sci_Map = (function() {
  return this.Lquizleague_web_maintain_text_TextComponent$__f_quizleague$web$core$Component$$addedComputed
});
$c_Lquizleague_web_maintain_text_TextComponent$.prototype.quizleague$web$core$Component$$addedComputed_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_text_TextComponent$__f_quizleague$web$core$Component$$addedComputed = x$1
});
$c_Lquizleague_web_maintain_text_TextComponent$.prototype.quizleague$web$core$Component$$addedDataFn__sci_Map = (function() {
  return this.Lquizleague_web_maintain_text_TextComponent$__f_quizleague$web$core$Component$$addedDataFn
});
$c_Lquizleague_web_maintain_text_TextComponent$.prototype.quizleague$web$core$Component$$addedDataFn_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_text_TextComponent$__f_quizleague$web$core$Component$$addedDataFn = x$1
});
$c_Lquizleague_web_maintain_text_TextComponent$.prototype.quizleague$web$core$Component$$addedData__sci_Map = (function() {
  return this.Lquizleague_web_maintain_text_TextComponent$__f_quizleague$web$core$Component$$addedData
});
$c_Lquizleague_web_maintain_text_TextComponent$.prototype.quizleague$web$core$Component$$addedData_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_text_TextComponent$__f_quizleague$web$core$Component$$addedData = x$1
});
$c_Lquizleague_web_maintain_text_TextComponent$.prototype.quizleague$web$core$Component$$addedComponents__sci_List = (function() {
  return this.Lquizleague_web_maintain_text_TextComponent$__f_quizleague$web$core$Component$$addedComponents
});
$c_Lquizleague_web_maintain_text_TextComponent$.prototype.quizleague$web$core$Component$$addedComponents_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_text_TextComponent$__f_quizleague$web$core$Component$$addedComponents = x$1
});
$c_Lquizleague_web_maintain_text_TextComponent$.prototype.quizleague$web$core$Component$$addedWatch__sci_Map = (function() {
  return this.Lquizleague_web_maintain_text_TextComponent$__f_quizleague$web$core$Component$$addedWatch
});
$c_Lquizleague_web_maintain_text_TextComponent$.prototype.quizleague$web$core$Component$$addedWatch_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_text_TextComponent$__f_quizleague$web$core$Component$$addedWatch = x$1
});
$c_Lquizleague_web_maintain_text_TextComponent$.prototype.empty__sjs_js_Object = (function() {
  return this.Lquizleague_web_maintain_text_TextComponent$__f_empty
});
$c_Lquizleague_web_maintain_text_TextComponent$.prototype.quizleague$web$core$Component$$commonMethods__sci_Map = (function() {
  return this.Lquizleague_web_maintain_text_TextComponent$__f_quizleague$web$core$Component$$commonMethods
});
$c_Lquizleague_web_maintain_text_TextComponent$.prototype.quizleague$web$core$Component$_setter_$empty_$eq__sjs_js_Object__V = (function(x$1) {
  this.Lquizleague_web_maintain_text_TextComponent$__f_empty = x$1
});
$c_Lquizleague_web_maintain_text_TextComponent$.prototype.quizleague$web$core$Component$_setter_$quizleague$web$core$Component$$commonMethods_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_text_TextComponent$__f_quizleague$web$core$Component$$commonMethods = x$1
});
$c_Lquizleague_web_maintain_text_TextComponent$.prototype.template__T = (function() {
  return this.Lquizleague_web_maintain_text_TextComponent$__f_template
});
$c_Lquizleague_web_maintain_text_TextComponent$.prototype.parentKey__Lquizleague_web_maintain_component_ItemComponent__T = (function(c) {
  return null
});
$c_Lquizleague_web_maintain_text_TextComponent$.prototype.service__Lquizleague_web_service_GetService = (function() {
  return this.Lquizleague_web_maintain_text_TextComponent$__f_service
});
var $d_Lquizleague_web_maintain_text_TextComponent$ = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  Lquizleague_web_maintain_text_TextComponent$: 0
}, false, "quizleague.web.maintain.text.TextComponent$", {
  Lquizleague_web_maintain_text_TextComponent$: 1,
  O: 1,
  Lquizleague_web_maintain_component_ItemComponentConfig: 1,
  Lquizleague_web_core_Component: 1,
  Lquizleague_web_core_RouteComponent: 1
});
export { $d_Lquizleague_web_maintain_text_TextComponent$ as $d_Lquizleague_web_maintain_text_TextComponent$ };
$c_Lquizleague_web_maintain_text_TextComponent$.prototype.$classData = $d_Lquizleague_web_maintain_text_TextComponent$;
var $n_Lquizleague_web_maintain_text_TextComponent$;
function $m_Lquizleague_web_maintain_text_TextComponent$() {
  if ((!$n_Lquizleague_web_maintain_text_TextComponent$)) {
    $n_Lquizleague_web_maintain_text_TextComponent$ = new $c_Lquizleague_web_maintain_text_TextComponent$()
  };
  return $n_Lquizleague_web_maintain_text_TextComponent$
}
export { $m_Lquizleague_web_maintain_text_TextComponent$ as $m_Lquizleague_web_maintain_text_TextComponent$ };
/** @constructor */
function $c_Lquizleague_web_maintain_user_UserComponent$() {
  this.Lquizleague_web_maintain_user_UserComponent$__f_service = null;
  this.Lquizleague_web_maintain_user_UserComponent$__f_template = null;
  this.Lquizleague_web_maintain_user_UserComponent$__f_name = null;
  this.Lquizleague_web_maintain_user_UserComponent$__f_paramName = null;
  this.Lquizleague_web_maintain_user_UserComponent$__f_quizleague$web$core$Component$$addedSubs = null;
  this.Lquizleague_web_maintain_user_UserComponent$__f_quizleague$web$core$Component$$addedSubParams = null;
  this.Lquizleague_web_maintain_user_UserComponent$__f_quizleague$web$core$Component$$addedProps = null;
  this.Lquizleague_web_maintain_user_UserComponent$__f_quizleague$web$core$Component$$addedMethods = null;
  this.Lquizleague_web_maintain_user_UserComponent$__f_quizleague$web$core$Component$$addedComputed = null;
  this.Lquizleague_web_maintain_user_UserComponent$__f_quizleague$web$core$Component$$addedDataFn = null;
  this.Lquizleague_web_maintain_user_UserComponent$__f_quizleague$web$core$Component$$addedData = null;
  this.Lquizleague_web_maintain_user_UserComponent$__f_quizleague$web$core$Component$$addedComponents = null;
  this.Lquizleague_web_maintain_user_UserComponent$__f_quizleague$web$core$Component$$addedWatch = null;
  this.Lquizleague_web_maintain_user_UserComponent$__f_empty = null;
  this.Lquizleague_web_maintain_user_UserComponent$__f_quizleague$web$core$Component$$commonMethods = null;
  $n_Lquizleague_web_maintain_user_UserComponent$ = this;
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__$init$__V(this);
  $f_Lquizleague_web_maintain_component_ItemComponentConfig__$init$__V(this);
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_RouteComponent__$init$__V(this);
  this.Lquizleague_web_maintain_user_UserComponent$__f_service = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_maintain_user_UserService$();
  this.Lquizleague_web_maintain_user_UserComponent$__f_template = (((((((("\n  <v-container v-if=\"item\">\n    <v-form v-model=\"valid\" ref=\"fm\">\n      <v-layout column>\n        <v-text-field\n          label=\"Name\"\n          v-model=\"item.name\"\n          :rules=" + $m_Lquizleague_web_maintain_component_TemplateElements$().valRequired__T__T("Name")) + "\n          required\n        ></v-text-field>\n        <v-text-field\n          label=\"Email\"\n          v-model=\"item.email\"\n          type=\"email\"\n          :rules=") + $m_Lquizleague_web_maintain_component_TemplateElements$().valRequired__T__T("Email")) + "\n          required\n        ></v-text-field>\n        ") + $m_Lquizleague_web_maintain_component_TemplateElements$().Lquizleague_web_maintain_component_TemplateElements$__f_chbxRetired) + " \n     </v-layout>\n     ") + $m_Lquizleague_web_maintain_component_TemplateElements$().Lquizleague_web_maintain_component_TemplateElements$__f_formButtons) + "\n    </v-form>\n  </v-container>")
}
export { $c_Lquizleague_web_maintain_user_UserComponent$ as $c_Lquizleague_web_maintain_user_UserComponent$ };
$c_Lquizleague_web_maintain_user_UserComponent$.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_Lquizleague_web_maintain_user_UserComponent$.prototype.constructor = $c_Lquizleague_web_maintain_user_UserComponent$;
/** @constructor */
function $h_Lquizleague_web_maintain_user_UserComponent$() {
  /*<skip>*/
}
export { $h_Lquizleague_web_maintain_user_UserComponent$ as $h_Lquizleague_web_maintain_user_UserComponent$ };
$h_Lquizleague_web_maintain_user_UserComponent$.prototype = $c_Lquizleague_web_maintain_user_UserComponent$.prototype;
$c_Lquizleague_web_maintain_user_UserComponent$.prototype.save__Lquizleague_web_maintain_component_ItemComponent__V = (function(c) {
  $f_Lquizleague_web_maintain_component_ItemComponentConfig__save__Lquizleague_web_maintain_component_ItemComponent__V(this, c)
});
$c_Lquizleague_web_maintain_user_UserComponent$.prototype.mounted__sjs_js_Function = (function() {
  return null
});
$c_Lquizleague_web_maintain_user_UserComponent$.prototype.beforeDestroy__sjs_js_Function = (function() {
  return null
});
$c_Lquizleague_web_maintain_user_UserComponent$.prototype.name__T = (function() {
  return this.Lquizleague_web_maintain_user_UserComponent$__f_name
});
$c_Lquizleague_web_maintain_user_UserComponent$.prototype.quizleague$web$core$RouteComponent$_setter_$name_$eq__T__V = (function(x$1) {
  this.Lquizleague_web_maintain_user_UserComponent$__f_name = x$1
});
$c_Lquizleague_web_maintain_user_UserComponent$.prototype.paramName__T = (function() {
  return this.Lquizleague_web_maintain_user_UserComponent$__f_paramName
});
$c_Lquizleague_web_maintain_user_UserComponent$.prototype.quizleague$web$maintain$component$ItemComponentConfig$_setter_$paramName_$eq__T__V = (function(x$1) {
  this.Lquizleague_web_maintain_user_UserComponent$__f_paramName = x$1
});
$c_Lquizleague_web_maintain_user_UserComponent$.prototype.quizleague$web$core$Component$$addedSubs__sci_Map = (function() {
  return this.Lquizleague_web_maintain_user_UserComponent$__f_quizleague$web$core$Component$$addedSubs
});
$c_Lquizleague_web_maintain_user_UserComponent$.prototype.quizleague$web$core$Component$$addedSubs_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_user_UserComponent$__f_quizleague$web$core$Component$$addedSubs = x$1
});
$c_Lquizleague_web_maintain_user_UserComponent$.prototype.quizleague$web$core$Component$$addedSubParams__sci_List = (function() {
  return this.Lquizleague_web_maintain_user_UserComponent$__f_quizleague$web$core$Component$$addedSubParams
});
$c_Lquizleague_web_maintain_user_UserComponent$.prototype.quizleague$web$core$Component$$addedSubParams_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_user_UserComponent$__f_quizleague$web$core$Component$$addedSubParams = x$1
});
$c_Lquizleague_web_maintain_user_UserComponent$.prototype.quizleague$web$core$Component$$addedProps__sci_List = (function() {
  return this.Lquizleague_web_maintain_user_UserComponent$__f_quizleague$web$core$Component$$addedProps
});
$c_Lquizleague_web_maintain_user_UserComponent$.prototype.quizleague$web$core$Component$$addedProps_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_user_UserComponent$__f_quizleague$web$core$Component$$addedProps = x$1
});
$c_Lquizleague_web_maintain_user_UserComponent$.prototype.quizleague$web$core$Component$$addedMethods__sci_Map = (function() {
  return this.Lquizleague_web_maintain_user_UserComponent$__f_quizleague$web$core$Component$$addedMethods
});
$c_Lquizleague_web_maintain_user_UserComponent$.prototype.quizleague$web$core$Component$$addedMethods_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_user_UserComponent$__f_quizleague$web$core$Component$$addedMethods = x$1
});
$c_Lquizleague_web_maintain_user_UserComponent$.prototype.quizleague$web$core$Component$$addedComputed__sci_Map = (function() {
  return this.Lquizleague_web_maintain_user_UserComponent$__f_quizleague$web$core$Component$$addedComputed
});
$c_Lquizleague_web_maintain_user_UserComponent$.prototype.quizleague$web$core$Component$$addedComputed_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_user_UserComponent$__f_quizleague$web$core$Component$$addedComputed = x$1
});
$c_Lquizleague_web_maintain_user_UserComponent$.prototype.quizleague$web$core$Component$$addedDataFn__sci_Map = (function() {
  return this.Lquizleague_web_maintain_user_UserComponent$__f_quizleague$web$core$Component$$addedDataFn
});
$c_Lquizleague_web_maintain_user_UserComponent$.prototype.quizleague$web$core$Component$$addedDataFn_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_user_UserComponent$__f_quizleague$web$core$Component$$addedDataFn = x$1
});
$c_Lquizleague_web_maintain_user_UserComponent$.prototype.quizleague$web$core$Component$$addedData__sci_Map = (function() {
  return this.Lquizleague_web_maintain_user_UserComponent$__f_quizleague$web$core$Component$$addedData
});
$c_Lquizleague_web_maintain_user_UserComponent$.prototype.quizleague$web$core$Component$$addedData_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_user_UserComponent$__f_quizleague$web$core$Component$$addedData = x$1
});
$c_Lquizleague_web_maintain_user_UserComponent$.prototype.quizleague$web$core$Component$$addedComponents__sci_List = (function() {
  return this.Lquizleague_web_maintain_user_UserComponent$__f_quizleague$web$core$Component$$addedComponents
});
$c_Lquizleague_web_maintain_user_UserComponent$.prototype.quizleague$web$core$Component$$addedComponents_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_user_UserComponent$__f_quizleague$web$core$Component$$addedComponents = x$1
});
$c_Lquizleague_web_maintain_user_UserComponent$.prototype.quizleague$web$core$Component$$addedWatch__sci_Map = (function() {
  return this.Lquizleague_web_maintain_user_UserComponent$__f_quizleague$web$core$Component$$addedWatch
});
$c_Lquizleague_web_maintain_user_UserComponent$.prototype.quizleague$web$core$Component$$addedWatch_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_user_UserComponent$__f_quizleague$web$core$Component$$addedWatch = x$1
});
$c_Lquizleague_web_maintain_user_UserComponent$.prototype.empty__sjs_js_Object = (function() {
  return this.Lquizleague_web_maintain_user_UserComponent$__f_empty
});
$c_Lquizleague_web_maintain_user_UserComponent$.prototype.quizleague$web$core$Component$$commonMethods__sci_Map = (function() {
  return this.Lquizleague_web_maintain_user_UserComponent$__f_quizleague$web$core$Component$$commonMethods
});
$c_Lquizleague_web_maintain_user_UserComponent$.prototype.quizleague$web$core$Component$_setter_$empty_$eq__sjs_js_Object__V = (function(x$1) {
  this.Lquizleague_web_maintain_user_UserComponent$__f_empty = x$1
});
$c_Lquizleague_web_maintain_user_UserComponent$.prototype.quizleague$web$core$Component$_setter_$quizleague$web$core$Component$$commonMethods_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_user_UserComponent$__f_quizleague$web$core$Component$$commonMethods = x$1
});
$c_Lquizleague_web_maintain_user_UserComponent$.prototype.template__T = (function() {
  return this.Lquizleague_web_maintain_user_UserComponent$__f_template
});
$c_Lquizleague_web_maintain_user_UserComponent$.prototype.parentKey__Lquizleague_web_maintain_component_ItemComponent__T = (function(c) {
  return null
});
$c_Lquizleague_web_maintain_user_UserComponent$.prototype.service__Lquizleague_web_service_GetService = (function() {
  return this.Lquizleague_web_maintain_user_UserComponent$__f_service
});
var $d_Lquizleague_web_maintain_user_UserComponent$ = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  Lquizleague_web_maintain_user_UserComponent$: 0
}, false, "quizleague.web.maintain.user.UserComponent$", {
  Lquizleague_web_maintain_user_UserComponent$: 1,
  O: 1,
  Lquizleague_web_maintain_component_ItemComponentConfig: 1,
  Lquizleague_web_core_Component: 1,
  Lquizleague_web_core_RouteComponent: 1
});
export { $d_Lquizleague_web_maintain_user_UserComponent$ as $d_Lquizleague_web_maintain_user_UserComponent$ };
$c_Lquizleague_web_maintain_user_UserComponent$.prototype.$classData = $d_Lquizleague_web_maintain_user_UserComponent$;
var $n_Lquizleague_web_maintain_user_UserComponent$;
function $m_Lquizleague_web_maintain_user_UserComponent$() {
  if ((!$n_Lquizleague_web_maintain_user_UserComponent$)) {
    $n_Lquizleague_web_maintain_user_UserComponent$ = new $c_Lquizleague_web_maintain_user_UserComponent$()
  };
  return $n_Lquizleague_web_maintain_user_UserComponent$
}
export { $m_Lquizleague_web_maintain_user_UserComponent$ as $m_Lquizleague_web_maintain_user_UserComponent$ };
/** @constructor */
function $c_Lquizleague_web_maintain_venue_VenueComponent$() {
  this.Lquizleague_web_maintain_venue_VenueComponent$__f_service = null;
  this.Lquizleague_web_maintain_venue_VenueComponent$__f_template = null;
  this.Lquizleague_web_maintain_venue_VenueComponent$__f_name = null;
  this.Lquizleague_web_maintain_venue_VenueComponent$__f_paramName = null;
  this.Lquizleague_web_maintain_venue_VenueComponent$__f_quizleague$web$core$Component$$addedSubs = null;
  this.Lquizleague_web_maintain_venue_VenueComponent$__f_quizleague$web$core$Component$$addedSubParams = null;
  this.Lquizleague_web_maintain_venue_VenueComponent$__f_quizleague$web$core$Component$$addedProps = null;
  this.Lquizleague_web_maintain_venue_VenueComponent$__f_quizleague$web$core$Component$$addedMethods = null;
  this.Lquizleague_web_maintain_venue_VenueComponent$__f_quizleague$web$core$Component$$addedComputed = null;
  this.Lquizleague_web_maintain_venue_VenueComponent$__f_quizleague$web$core$Component$$addedDataFn = null;
  this.Lquizleague_web_maintain_venue_VenueComponent$__f_quizleague$web$core$Component$$addedData = null;
  this.Lquizleague_web_maintain_venue_VenueComponent$__f_quizleague$web$core$Component$$addedComponents = null;
  this.Lquizleague_web_maintain_venue_VenueComponent$__f_quizleague$web$core$Component$$addedWatch = null;
  this.Lquizleague_web_maintain_venue_VenueComponent$__f_empty = null;
  this.Lquizleague_web_maintain_venue_VenueComponent$__f_quizleague$web$core$Component$$commonMethods = null;
  $n_Lquizleague_web_maintain_venue_VenueComponent$ = this;
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__$init$__V(this);
  $f_Lquizleague_web_maintain_component_ItemComponentConfig__$init$__V(this);
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_RouteComponent__$init$__V(this);
  this.Lquizleague_web_maintain_venue_VenueComponent$__f_service = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_maintain_venue_VenueService$();
  this.Lquizleague_web_maintain_venue_VenueComponent$__f_template = (((((((("\n  <v-container v-if=\"item\">\n    <v-form v-model=\"valid\" ref=\"fm\">\n      <v-layout column>\n        <v-text-field\n          label=\"Name\"\n          v-model=\"item.name\"\n          :rules=" + $m_Lquizleague_web_maintain_component_TemplateElements$().valRequired__T__T("Name")) + "\n          required\n        ></v-text-field>\n        <v-textarea\n          label=\"Address\"\n          v-model=\"item.address\"\n          :rules=") + $m_Lquizleague_web_maintain_component_TemplateElements$().valRequired__T__T("Address")) + "\n          required\n          outline\n        ></v-textarea>\n        <v-text-field\n          label=\"Phone\"\n          v-model=\"item.phone\"\n          type=\"phone\"\n        ></v-text-field>\n        <v-text-field\n          label=\"Email\"\n          v-model=\"item.email\"\n          type=\"email\"\n        ></v-text-field>\n        <v-text-field\n          label=\"Website\"\n          v-model=\"item.website\"\n          type=\"url\"\n        ></v-text-field>\n        <v-text-field\n          label=\"Image URL\"\n          v-model=\"item.imageURL\"\n          type=\"url\"\n        ></v-text-field>\n        ") + $m_Lquizleague_web_maintain_component_TemplateElements$().Lquizleague_web_maintain_component_TemplateElements$__f_chbxRetired) + " \n        <div><img :src=\"item.imageURL\"></div>\n     </v-layout>\n     ") + $m_Lquizleague_web_maintain_component_TemplateElements$().Lquizleague_web_maintain_component_TemplateElements$__f_formButtons) + "\n    </v-form>\n  </v-container>")
}
export { $c_Lquizleague_web_maintain_venue_VenueComponent$ as $c_Lquizleague_web_maintain_venue_VenueComponent$ };
$c_Lquizleague_web_maintain_venue_VenueComponent$.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_Lquizleague_web_maintain_venue_VenueComponent$.prototype.constructor = $c_Lquizleague_web_maintain_venue_VenueComponent$;
/** @constructor */
function $h_Lquizleague_web_maintain_venue_VenueComponent$() {
  /*<skip>*/
}
export { $h_Lquizleague_web_maintain_venue_VenueComponent$ as $h_Lquizleague_web_maintain_venue_VenueComponent$ };
$h_Lquizleague_web_maintain_venue_VenueComponent$.prototype = $c_Lquizleague_web_maintain_venue_VenueComponent$.prototype;
$c_Lquizleague_web_maintain_venue_VenueComponent$.prototype.save__Lquizleague_web_maintain_component_ItemComponent__V = (function(c) {
  $f_Lquizleague_web_maintain_component_ItemComponentConfig__save__Lquizleague_web_maintain_component_ItemComponent__V(this, c)
});
$c_Lquizleague_web_maintain_venue_VenueComponent$.prototype.mounted__sjs_js_Function = (function() {
  return null
});
$c_Lquizleague_web_maintain_venue_VenueComponent$.prototype.beforeDestroy__sjs_js_Function = (function() {
  return null
});
$c_Lquizleague_web_maintain_venue_VenueComponent$.prototype.name__T = (function() {
  return this.Lquizleague_web_maintain_venue_VenueComponent$__f_name
});
$c_Lquizleague_web_maintain_venue_VenueComponent$.prototype.quizleague$web$core$RouteComponent$_setter_$name_$eq__T__V = (function(x$1) {
  this.Lquizleague_web_maintain_venue_VenueComponent$__f_name = x$1
});
$c_Lquizleague_web_maintain_venue_VenueComponent$.prototype.paramName__T = (function() {
  return this.Lquizleague_web_maintain_venue_VenueComponent$__f_paramName
});
$c_Lquizleague_web_maintain_venue_VenueComponent$.prototype.quizleague$web$maintain$component$ItemComponentConfig$_setter_$paramName_$eq__T__V = (function(x$1) {
  this.Lquizleague_web_maintain_venue_VenueComponent$__f_paramName = x$1
});
$c_Lquizleague_web_maintain_venue_VenueComponent$.prototype.quizleague$web$core$Component$$addedSubs__sci_Map = (function() {
  return this.Lquizleague_web_maintain_venue_VenueComponent$__f_quizleague$web$core$Component$$addedSubs
});
$c_Lquizleague_web_maintain_venue_VenueComponent$.prototype.quizleague$web$core$Component$$addedSubs_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_venue_VenueComponent$__f_quizleague$web$core$Component$$addedSubs = x$1
});
$c_Lquizleague_web_maintain_venue_VenueComponent$.prototype.quizleague$web$core$Component$$addedSubParams__sci_List = (function() {
  return this.Lquizleague_web_maintain_venue_VenueComponent$__f_quizleague$web$core$Component$$addedSubParams
});
$c_Lquizleague_web_maintain_venue_VenueComponent$.prototype.quizleague$web$core$Component$$addedSubParams_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_venue_VenueComponent$__f_quizleague$web$core$Component$$addedSubParams = x$1
});
$c_Lquizleague_web_maintain_venue_VenueComponent$.prototype.quizleague$web$core$Component$$addedProps__sci_List = (function() {
  return this.Lquizleague_web_maintain_venue_VenueComponent$__f_quizleague$web$core$Component$$addedProps
});
$c_Lquizleague_web_maintain_venue_VenueComponent$.prototype.quizleague$web$core$Component$$addedProps_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_venue_VenueComponent$__f_quizleague$web$core$Component$$addedProps = x$1
});
$c_Lquizleague_web_maintain_venue_VenueComponent$.prototype.quizleague$web$core$Component$$addedMethods__sci_Map = (function() {
  return this.Lquizleague_web_maintain_venue_VenueComponent$__f_quizleague$web$core$Component$$addedMethods
});
$c_Lquizleague_web_maintain_venue_VenueComponent$.prototype.quizleague$web$core$Component$$addedMethods_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_venue_VenueComponent$__f_quizleague$web$core$Component$$addedMethods = x$1
});
$c_Lquizleague_web_maintain_venue_VenueComponent$.prototype.quizleague$web$core$Component$$addedComputed__sci_Map = (function() {
  return this.Lquizleague_web_maintain_venue_VenueComponent$__f_quizleague$web$core$Component$$addedComputed
});
$c_Lquizleague_web_maintain_venue_VenueComponent$.prototype.quizleague$web$core$Component$$addedComputed_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_venue_VenueComponent$__f_quizleague$web$core$Component$$addedComputed = x$1
});
$c_Lquizleague_web_maintain_venue_VenueComponent$.prototype.quizleague$web$core$Component$$addedDataFn__sci_Map = (function() {
  return this.Lquizleague_web_maintain_venue_VenueComponent$__f_quizleague$web$core$Component$$addedDataFn
});
$c_Lquizleague_web_maintain_venue_VenueComponent$.prototype.quizleague$web$core$Component$$addedDataFn_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_venue_VenueComponent$__f_quizleague$web$core$Component$$addedDataFn = x$1
});
$c_Lquizleague_web_maintain_venue_VenueComponent$.prototype.quizleague$web$core$Component$$addedData__sci_Map = (function() {
  return this.Lquizleague_web_maintain_venue_VenueComponent$__f_quizleague$web$core$Component$$addedData
});
$c_Lquizleague_web_maintain_venue_VenueComponent$.prototype.quizleague$web$core$Component$$addedData_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_venue_VenueComponent$__f_quizleague$web$core$Component$$addedData = x$1
});
$c_Lquizleague_web_maintain_venue_VenueComponent$.prototype.quizleague$web$core$Component$$addedComponents__sci_List = (function() {
  return this.Lquizleague_web_maintain_venue_VenueComponent$__f_quizleague$web$core$Component$$addedComponents
});
$c_Lquizleague_web_maintain_venue_VenueComponent$.prototype.quizleague$web$core$Component$$addedComponents_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_venue_VenueComponent$__f_quizleague$web$core$Component$$addedComponents = x$1
});
$c_Lquizleague_web_maintain_venue_VenueComponent$.prototype.quizleague$web$core$Component$$addedWatch__sci_Map = (function() {
  return this.Lquizleague_web_maintain_venue_VenueComponent$__f_quizleague$web$core$Component$$addedWatch
});
$c_Lquizleague_web_maintain_venue_VenueComponent$.prototype.quizleague$web$core$Component$$addedWatch_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_venue_VenueComponent$__f_quizleague$web$core$Component$$addedWatch = x$1
});
$c_Lquizleague_web_maintain_venue_VenueComponent$.prototype.empty__sjs_js_Object = (function() {
  return this.Lquizleague_web_maintain_venue_VenueComponent$__f_empty
});
$c_Lquizleague_web_maintain_venue_VenueComponent$.prototype.quizleague$web$core$Component$$commonMethods__sci_Map = (function() {
  return this.Lquizleague_web_maintain_venue_VenueComponent$__f_quizleague$web$core$Component$$commonMethods
});
$c_Lquizleague_web_maintain_venue_VenueComponent$.prototype.quizleague$web$core$Component$_setter_$empty_$eq__sjs_js_Object__V = (function(x$1) {
  this.Lquizleague_web_maintain_venue_VenueComponent$__f_empty = x$1
});
$c_Lquizleague_web_maintain_venue_VenueComponent$.prototype.quizleague$web$core$Component$_setter_$quizleague$web$core$Component$$commonMethods_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_venue_VenueComponent$__f_quizleague$web$core$Component$$commonMethods = x$1
});
$c_Lquizleague_web_maintain_venue_VenueComponent$.prototype.template__T = (function() {
  return this.Lquizleague_web_maintain_venue_VenueComponent$__f_template
});
$c_Lquizleague_web_maintain_venue_VenueComponent$.prototype.parentKey__Lquizleague_web_maintain_component_ItemComponent__T = (function(c) {
  return null
});
$c_Lquizleague_web_maintain_venue_VenueComponent$.prototype.service__Lquizleague_web_service_GetService = (function() {
  return this.Lquizleague_web_maintain_venue_VenueComponent$__f_service
});
var $d_Lquizleague_web_maintain_venue_VenueComponent$ = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  Lquizleague_web_maintain_venue_VenueComponent$: 0
}, false, "quizleague.web.maintain.venue.VenueComponent$", {
  Lquizleague_web_maintain_venue_VenueComponent$: 1,
  O: 1,
  Lquizleague_web_maintain_component_ItemComponentConfig: 1,
  Lquizleague_web_core_Component: 1,
  Lquizleague_web_core_RouteComponent: 1
});
export { $d_Lquizleague_web_maintain_venue_VenueComponent$ as $d_Lquizleague_web_maintain_venue_VenueComponent$ };
$c_Lquizleague_web_maintain_venue_VenueComponent$.prototype.$classData = $d_Lquizleague_web_maintain_venue_VenueComponent$;
var $n_Lquizleague_web_maintain_venue_VenueComponent$;
function $m_Lquizleague_web_maintain_venue_VenueComponent$() {
  if ((!$n_Lquizleague_web_maintain_venue_VenueComponent$)) {
    $n_Lquizleague_web_maintain_venue_VenueComponent$ = new $c_Lquizleague_web_maintain_venue_VenueComponent$()
  };
  return $n_Lquizleague_web_maintain_venue_VenueComponent$
}
export { $m_Lquizleague_web_maintain_venue_VenueComponent$ as $m_Lquizleague_web_maintain_venue_VenueComponent$ };
function $p_Lquizleague_web_maintain_NotificationService$__uriRoot$lzycompute__T($thiz) {
  if ((!$thiz.Lquizleague_web_maintain_NotificationService$__f_bitmap$0)) {
    $thiz.Lquizleague_web_maintain_NotificationService$__f_uriRoot = $thiz.Lquizleague_web_maintain_NotificationService$__f_typeName;
    $thiz.Lquizleague_web_maintain_NotificationService$__f_bitmap$0 = true
  };
  return $thiz.Lquizleague_web_maintain_NotificationService$__f_uriRoot
}
export { $p_Lquizleague_web_maintain_NotificationService$__uriRoot$lzycompute__T as $p_Lquizleague_web_maintain_NotificationService$__uriRoot$lzycompute__T };
/** @constructor */
function $c_Lquizleague_web_maintain_NotificationService$() {
  this.Lquizleague_web_maintain_NotificationService$__f_typeName = null;
  this.Lquizleague_web_maintain_NotificationService$__f_uriRoot = null;
  this.Lquizleague_web_maintain_NotificationService$__f_db = null;
  this.Lquizleague_web_maintain_NotificationService$__f_items = null;
  this.Lquizleague_web_maintain_NotificationService$__f_quizleague$web$service$GetService$$observables = null;
  this.Lquizleague_web_maintain_NotificationService$__f_quizleague$web$service$GetService$$refObsCache = null;
  this.Lquizleague_web_maintain_NotificationService$__f_quizleague$web$service$GetService$$listObservables = null;
  this.Lquizleague_web_maintain_NotificationService$__f_bitmap$0 = false;
  $n_Lquizleague_web_maintain_NotificationService$ = this;
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__$init$__V(this);
  this.Lquizleague_web_maintain_NotificationService$__f_typeName = "notification"
}
export { $c_Lquizleague_web_maintain_NotificationService$ as $c_Lquizleague_web_maintain_NotificationService$ };
$c_Lquizleague_web_maintain_NotificationService$.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_Lquizleague_web_maintain_NotificationService$.prototype.constructor = $c_Lquizleague_web_maintain_NotificationService$;
/** @constructor */
function $h_Lquizleague_web_maintain_NotificationService$() {
  /*<skip>*/
}
export { $h_Lquizleague_web_maintain_NotificationService$ as $h_Lquizleague_web_maintain_NotificationService$ };
$h_Lquizleague_web_maintain_NotificationService$.prototype = $c_Lquizleague_web_maintain_NotificationService$.prototype;
$c_Lquizleague_web_maintain_NotificationService$.prototype.dec__sjs_js_Any__s_util_Either = (function(json) {
  var dec = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_util_json_codecs_DomainCodecs$().Lquizleague_util_json_codecs_DomainCodecs$__f_notifDecoder;
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__decodeJson__sjs_js_Any__Lio_circe_Decoder__s_util_Either(this, json, dec)
});
$c_Lquizleague_web_maintain_NotificationService$.prototype.flush__V = (function() {
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.Lquizleague_web_maintain_NotificationService$__f_items).clear__V()
});
$c_Lquizleague_web_maintain_NotificationService$.prototype.filterList__Lquizleague_domain_Entity__Z = (function(u) {
  return true
});
$c_Lquizleague_web_maintain_NotificationService$.prototype.typeName__T = (function() {
  return this.Lquizleague_web_maintain_NotificationService$__f_typeName
});
$c_Lquizleague_web_maintain_NotificationService$.prototype.uriRoot__T = (function() {
  return ((!this.Lquizleague_web_maintain_NotificationService$__f_bitmap$0) ? $p_Lquizleague_web_maintain_NotificationService$__uriRoot$lzycompute__T(this) : this.Lquizleague_web_maintain_NotificationService$__f_uriRoot)
});
$c_Lquizleague_web_maintain_NotificationService$.prototype.db__Lfirebase_firestore_Firestore = (function() {
  return this.Lquizleague_web_maintain_NotificationService$__f_db
});
$c_Lquizleague_web_maintain_NotificationService$.prototype.items__scm_Map = (function() {
  return this.Lquizleague_web_maintain_NotificationService$__f_items
});
$c_Lquizleague_web_maintain_NotificationService$.prototype.quizleague$web$service$GetService$$observables__scm_Map = (function() {
  return this.Lquizleague_web_maintain_NotificationService$__f_quizleague$web$service$GetService$$observables
});
$c_Lquizleague_web_maintain_NotificationService$.prototype.quizleague$web$service$GetService$$refObsCache__scm_Map = (function() {
  return this.Lquizleague_web_maintain_NotificationService$__f_quizleague$web$service$GetService$$refObsCache
});
$c_Lquizleague_web_maintain_NotificationService$.prototype.quizleague$web$service$GetService$$listObservables__scm_Map = (function() {
  return this.Lquizleague_web_maintain_NotificationService$__f_quizleague$web$service$GetService$$listObservables
});
$c_Lquizleague_web_maintain_NotificationService$.prototype.quizleague$web$service$GetService$$listObservables_$eq__scm_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_NotificationService$__f_quizleague$web$service$GetService$$listObservables = x$1
});
$c_Lquizleague_web_maintain_NotificationService$.prototype.quizleague$web$service$GetService$_setter_$db_$eq__Lfirebase_firestore_Firestore__V = (function(x$1) {
  this.Lquizleague_web_maintain_NotificationService$__f_db = x$1
});
$c_Lquizleague_web_maintain_NotificationService$.prototype.quizleague$web$service$GetService$_setter_$items_$eq__scm_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_NotificationService$__f_items = x$1
});
$c_Lquizleague_web_maintain_NotificationService$.prototype.quizleague$web$service$GetService$_setter_$quizleague$web$service$GetService$$observables_$eq__scm_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_NotificationService$__f_quizleague$web$service$GetService$$observables = x$1
});
$c_Lquizleague_web_maintain_NotificationService$.prototype.quizleague$web$service$GetService$_setter_$quizleague$web$service$GetService$$refObsCache_$eq__scm_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_NotificationService$__f_quizleague$web$service$GetService$$refObsCache = x$1
});
$c_Lquizleague_web_maintain_NotificationService$.prototype.messages__Ljava_time_LocalDateTime__Lrxscalajs_Observable = (function(threshold) {
  return $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_notification_NotificationGetService__messages__T__Ljava_time_LocalDateTime__Lrxscalajs_Observable(this, "maintain", threshold)).map__F1__Lrxscalajs_Observable(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((x$1$2) => {
    var array = [];
    $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(x$1$2.length);
    var i = 0;
    var len = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(x$1$2.length);
    while ((i < len)) {
      var index = i;
      var arg1 = x$1$2[index];
      var x1$1 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$as_Lquizleague_web_model_Payload(arg1.payload);
      if ((!(x1$1 instanceof $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$c_Lquizleague_web_model_MaintainMessagePayload))) {
        throw $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$ct_jl_Exception__T__(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_jl_Exception(), "invalid payload")
      };
      var x2 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$as_Lquizleague_web_model_MaintainMessagePayload(x1$1);
      array.push(x2);
      i = ((1 + i) | 0)
    };
    var start = 0;
    var end = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length);
    var z = "";
    var $$x1;
    while (true) {
      if ((start !== end)) {
        var temp$start = ((1 + start) | 0);
        var arg1$1 = z;
        var index$1 = start;
        var arg2 = array[index$1];
        var s = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(arg1$1);
        var p = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$as_Lquizleague_web_model_MaintainMessagePayload(arg2);
        var temp$z = (("" + s) + $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(p).Lquizleague_web_model_MaintainMessagePayload__f_message);
        start = temp$start;
        z = temp$z;
        continue
      };
      var $$x1 = z;
      break
    };
    return $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T($$x1)
  })))
});
$c_Lquizleague_web_maintain_NotificationService$.prototype.mapOutSparse__Lquizleague_domain_Entity__Lquizleague_web_model_Model = (function(domain) {
  var dom = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$as_Lquizleague_domain_notification_Notification(domain);
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_notification_NotificationGetService__mapOutSparse__Lquizleague_domain_notification_Notification__Lquizleague_web_model_Notification(this, dom)
});
var $d_Lquizleague_web_maintain_NotificationService$ = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  Lquizleague_web_maintain_NotificationService$: 0
}, false, "quizleague.web.maintain.NotificationService$", {
  Lquizleague_web_maintain_NotificationService$: 1,
  O: 1,
  Lquizleague_web_service_notification_NotificationGetService: 1,
  Lquizleague_web_service_GetService: 1,
  Lquizleague_web_names_NotificationNames: 1,
  Lquizleague_web_names_ComponentNames: 1
});
export { $d_Lquizleague_web_maintain_NotificationService$ as $d_Lquizleague_web_maintain_NotificationService$ };
$c_Lquizleague_web_maintain_NotificationService$.prototype.$classData = $d_Lquizleague_web_maintain_NotificationService$;
var $n_Lquizleague_web_maintain_NotificationService$;
function $m_Lquizleague_web_maintain_NotificationService$() {
  if ((!$n_Lquizleague_web_maintain_NotificationService$)) {
    $n_Lquizleague_web_maintain_NotificationService$ = new $c_Lquizleague_web_maintain_NotificationService$()
  };
  return $n_Lquizleague_web_maintain_NotificationService$
}
export { $m_Lquizleague_web_maintain_NotificationService$ as $m_Lquizleague_web_maintain_NotificationService$ };
/** @constructor */
function $c_Lquizleague_web_maintain_competition_CupCompetitionComponent$() {
  this.Lquizleague_web_maintain_competition_CupCompetitionComponent$__f_template = null;
  this.Lquizleague_web_maintain_competition_CupCompetitionComponent$__f_service = null;
  this.Lquizleague_web_maintain_competition_CupCompetitionComponent$__f_name = null;
  this.Lquizleague_web_maintain_competition_CupCompetitionComponent$__f_paramName = null;
  this.Lquizleague_web_maintain_competition_CupCompetitionComponent$__f_quizleague$web$core$Component$$addedSubs = null;
  this.Lquizleague_web_maintain_competition_CupCompetitionComponent$__f_quizleague$web$core$Component$$addedSubParams = null;
  this.Lquizleague_web_maintain_competition_CupCompetitionComponent$__f_quizleague$web$core$Component$$addedProps = null;
  this.Lquizleague_web_maintain_competition_CupCompetitionComponent$__f_quizleague$web$core$Component$$addedMethods = null;
  this.Lquizleague_web_maintain_competition_CupCompetitionComponent$__f_quizleague$web$core$Component$$addedComputed = null;
  this.Lquizleague_web_maintain_competition_CupCompetitionComponent$__f_quizleague$web$core$Component$$addedDataFn = null;
  this.Lquizleague_web_maintain_competition_CupCompetitionComponent$__f_quizleague$web$core$Component$$addedData = null;
  this.Lquizleague_web_maintain_competition_CupCompetitionComponent$__f_quizleague$web$core$Component$$addedComponents = null;
  this.Lquizleague_web_maintain_competition_CupCompetitionComponent$__f_quizleague$web$core$Component$$addedWatch = null;
  this.Lquizleague_web_maintain_competition_CupCompetitionComponent$__f_empty = null;
  this.Lquizleague_web_maintain_competition_CupCompetitionComponent$__f_quizleague$web$core$Component$$commonMethods = null;
  $n_Lquizleague_web_maintain_competition_CupCompetitionComponent$ = this;
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__$init$__V(this);
  $f_Lquizleague_web_maintain_component_ItemComponentConfig__$init$__V(this);
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_RouteComponent__$init$__V(this);
  $f_Lquizleague_web_maintain_competition_CompetitionComponentConfig__$init$__V(this);
  this.Lquizleague_web_maintain_competition_CupCompetitionComponent$__f_template = (((((((((("\n  <v-container>\n    <h2>Cup Competition Detail {{season.startYear}}/{{season.endYear}}</h2>\n\n    <v-form v-model=\"valid\"  v-if=\"item && season\">\n      <v-layout column>\n   \n          <v-text-field  label=\"Name\" type=\"text\" v-model=\"item.name\"\n             required :rules=" + $m_Lquizleague_web_maintain_component_TemplateElements$().valRequired__T__T("Name")) + "></v-text-field>\n          <v-text-field  label=\"Start Time\" type=\"time\" v-model=\"item.startTime\"\n             required :rules=") + $m_Lquizleague_web_maintain_component_TemplateElements$().valRequired__T__T("Start Time")) + "></v-text-field>\n          <v-text-field  label=\"Duration\" type=\"number\" v-model.number=\"item.duration\"\n             required step=\"0.5\" :rules=") + $m_Lquizleague_web_maintain_component_TemplateElements$().valRequired__T__T("Duration")) + "></v-text-field>\n          <v-text-field label=\"Text Name\" required v-model=\"item.textName\" :rules=") + $m_Lquizleague_web_maintain_component_TemplateElements$().valRequired__T__T("Text Name")) + "></v-text-field>\n          <v-text-field label=\"Icon Name\" v-model=\"item.icon\" :append-icon=\"item.icon\" ></v-text-field>\n      <div><v-btn text v-on:click=\"editText(item.text.id)\"  type=\"button\" ><v-icon>mdi-card-text-outline</v-icon>Text...</v-btn></div>\n      <div><v-btn text v-on:click=\"fixtures(item)\" ><v-icon>mdi-check</v-icon>Fixtures...</v-btn></div>\n      </v-layout>\n      ") + $m_Lquizleague_web_maintain_component_TemplateElements$().Lquizleague_web_maintain_component_TemplateElements$__f_formButtons) + "\n    </v-form>\n  </v-container>")
}
export { $c_Lquizleague_web_maintain_competition_CupCompetitionComponent$ as $c_Lquizleague_web_maintain_competition_CupCompetitionComponent$ };
$c_Lquizleague_web_maintain_competition_CupCompetitionComponent$.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_Lquizleague_web_maintain_competition_CupCompetitionComponent$.prototype.constructor = $c_Lquizleague_web_maintain_competition_CupCompetitionComponent$;
/** @constructor */
function $h_Lquizleague_web_maintain_competition_CupCompetitionComponent$() {
  /*<skip>*/
}
export { $h_Lquizleague_web_maintain_competition_CupCompetitionComponent$ as $h_Lquizleague_web_maintain_competition_CupCompetitionComponent$ };
$h_Lquizleague_web_maintain_competition_CupCompetitionComponent$.prototype = $c_Lquizleague_web_maintain_competition_CupCompetitionComponent$.prototype;
$c_Lquizleague_web_maintain_competition_CupCompetitionComponent$.prototype.save__Lquizleague_web_maintain_component_ItemComponent__V = (function(c) {
  $f_Lquizleague_web_maintain_component_ItemComponentConfig__save__Lquizleague_web_maintain_component_ItemComponent__V(this, c)
});
$c_Lquizleague_web_maintain_competition_CupCompetitionComponent$.prototype.mounted__sjs_js_Function = (function() {
  return null
});
$c_Lquizleague_web_maintain_competition_CupCompetitionComponent$.prototype.beforeDestroy__sjs_js_Function = (function() {
  return null
});
$c_Lquizleague_web_maintain_competition_CupCompetitionComponent$.prototype.service__Lquizleague_web_maintain_competition_CompetitionService$ = (function() {
  return this.Lquizleague_web_maintain_competition_CupCompetitionComponent$__f_service
});
$c_Lquizleague_web_maintain_competition_CupCompetitionComponent$.prototype.quizleague$web$maintain$competition$CompetitionComponentConfig$_setter_$service_$eq__Lquizleague_web_maintain_competition_CompetitionService$__V = (function(x$1) {
  this.Lquizleague_web_maintain_competition_CupCompetitionComponent$__f_service = x$1
});
$c_Lquizleague_web_maintain_competition_CupCompetitionComponent$.prototype.name__T = (function() {
  return this.Lquizleague_web_maintain_competition_CupCompetitionComponent$__f_name
});
$c_Lquizleague_web_maintain_competition_CupCompetitionComponent$.prototype.quizleague$web$core$RouteComponent$_setter_$name_$eq__T__V = (function(x$1) {
  this.Lquizleague_web_maintain_competition_CupCompetitionComponent$__f_name = x$1
});
$c_Lquizleague_web_maintain_competition_CupCompetitionComponent$.prototype.paramName__T = (function() {
  return this.Lquizleague_web_maintain_competition_CupCompetitionComponent$__f_paramName
});
$c_Lquizleague_web_maintain_competition_CupCompetitionComponent$.prototype.quizleague$web$maintain$component$ItemComponentConfig$_setter_$paramName_$eq__T__V = (function(x$1) {
  this.Lquizleague_web_maintain_competition_CupCompetitionComponent$__f_paramName = x$1
});
$c_Lquizleague_web_maintain_competition_CupCompetitionComponent$.prototype.quizleague$web$core$Component$$addedSubs__sci_Map = (function() {
  return this.Lquizleague_web_maintain_competition_CupCompetitionComponent$__f_quizleague$web$core$Component$$addedSubs
});
$c_Lquizleague_web_maintain_competition_CupCompetitionComponent$.prototype.quizleague$web$core$Component$$addedSubs_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_competition_CupCompetitionComponent$__f_quizleague$web$core$Component$$addedSubs = x$1
});
$c_Lquizleague_web_maintain_competition_CupCompetitionComponent$.prototype.quizleague$web$core$Component$$addedSubParams__sci_List = (function() {
  return this.Lquizleague_web_maintain_competition_CupCompetitionComponent$__f_quizleague$web$core$Component$$addedSubParams
});
$c_Lquizleague_web_maintain_competition_CupCompetitionComponent$.prototype.quizleague$web$core$Component$$addedSubParams_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_competition_CupCompetitionComponent$__f_quizleague$web$core$Component$$addedSubParams = x$1
});
$c_Lquizleague_web_maintain_competition_CupCompetitionComponent$.prototype.quizleague$web$core$Component$$addedProps__sci_List = (function() {
  return this.Lquizleague_web_maintain_competition_CupCompetitionComponent$__f_quizleague$web$core$Component$$addedProps
});
$c_Lquizleague_web_maintain_competition_CupCompetitionComponent$.prototype.quizleague$web$core$Component$$addedProps_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_competition_CupCompetitionComponent$__f_quizleague$web$core$Component$$addedProps = x$1
});
$c_Lquizleague_web_maintain_competition_CupCompetitionComponent$.prototype.quizleague$web$core$Component$$addedMethods__sci_Map = (function() {
  return this.Lquizleague_web_maintain_competition_CupCompetitionComponent$__f_quizleague$web$core$Component$$addedMethods
});
$c_Lquizleague_web_maintain_competition_CupCompetitionComponent$.prototype.quizleague$web$core$Component$$addedMethods_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_competition_CupCompetitionComponent$__f_quizleague$web$core$Component$$addedMethods = x$1
});
$c_Lquizleague_web_maintain_competition_CupCompetitionComponent$.prototype.quizleague$web$core$Component$$addedComputed__sci_Map = (function() {
  return this.Lquizleague_web_maintain_competition_CupCompetitionComponent$__f_quizleague$web$core$Component$$addedComputed
});
$c_Lquizleague_web_maintain_competition_CupCompetitionComponent$.prototype.quizleague$web$core$Component$$addedComputed_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_competition_CupCompetitionComponent$__f_quizleague$web$core$Component$$addedComputed = x$1
});
$c_Lquizleague_web_maintain_competition_CupCompetitionComponent$.prototype.quizleague$web$core$Component$$addedDataFn__sci_Map = (function() {
  return this.Lquizleague_web_maintain_competition_CupCompetitionComponent$__f_quizleague$web$core$Component$$addedDataFn
});
$c_Lquizleague_web_maintain_competition_CupCompetitionComponent$.prototype.quizleague$web$core$Component$$addedDataFn_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_competition_CupCompetitionComponent$__f_quizleague$web$core$Component$$addedDataFn = x$1
});
$c_Lquizleague_web_maintain_competition_CupCompetitionComponent$.prototype.quizleague$web$core$Component$$addedData__sci_Map = (function() {
  return this.Lquizleague_web_maintain_competition_CupCompetitionComponent$__f_quizleague$web$core$Component$$addedData
});
$c_Lquizleague_web_maintain_competition_CupCompetitionComponent$.prototype.quizleague$web$core$Component$$addedData_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_competition_CupCompetitionComponent$__f_quizleague$web$core$Component$$addedData = x$1
});
$c_Lquizleague_web_maintain_competition_CupCompetitionComponent$.prototype.quizleague$web$core$Component$$addedComponents__sci_List = (function() {
  return this.Lquizleague_web_maintain_competition_CupCompetitionComponent$__f_quizleague$web$core$Component$$addedComponents
});
$c_Lquizleague_web_maintain_competition_CupCompetitionComponent$.prototype.quizleague$web$core$Component$$addedComponents_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_competition_CupCompetitionComponent$__f_quizleague$web$core$Component$$addedComponents = x$1
});
$c_Lquizleague_web_maintain_competition_CupCompetitionComponent$.prototype.quizleague$web$core$Component$$addedWatch__sci_Map = (function() {
  return this.Lquizleague_web_maintain_competition_CupCompetitionComponent$__f_quizleague$web$core$Component$$addedWatch
});
$c_Lquizleague_web_maintain_competition_CupCompetitionComponent$.prototype.quizleague$web$core$Component$$addedWatch_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_competition_CupCompetitionComponent$__f_quizleague$web$core$Component$$addedWatch = x$1
});
$c_Lquizleague_web_maintain_competition_CupCompetitionComponent$.prototype.empty__sjs_js_Object = (function() {
  return this.Lquizleague_web_maintain_competition_CupCompetitionComponent$__f_empty
});
$c_Lquizleague_web_maintain_competition_CupCompetitionComponent$.prototype.quizleague$web$core$Component$$commonMethods__sci_Map = (function() {
  return this.Lquizleague_web_maintain_competition_CupCompetitionComponent$__f_quizleague$web$core$Component$$commonMethods
});
$c_Lquizleague_web_maintain_competition_CupCompetitionComponent$.prototype.quizleague$web$core$Component$_setter_$empty_$eq__sjs_js_Object__V = (function(x$1) {
  this.Lquizleague_web_maintain_competition_CupCompetitionComponent$__f_empty = x$1
});
$c_Lquizleague_web_maintain_competition_CupCompetitionComponent$.prototype.quizleague$web$core$Component$_setter_$quizleague$web$core$Component$$commonMethods_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_competition_CupCompetitionComponent$__f_quizleague$web$core$Component$$commonMethods = x$1
});
$c_Lquizleague_web_maintain_competition_CupCompetitionComponent$.prototype.template__T = (function() {
  return this.Lquizleague_web_maintain_competition_CupCompetitionComponent$__f_template
});
$c_Lquizleague_web_maintain_competition_CupCompetitionComponent$.prototype.parentKey__Lquizleague_web_maintain_component_ItemComponent__T = (function(c) {
  return $f_Lquizleague_web_maintain_competition_CompetitionComponentConfig__parentKey__Lquizleague_web_maintain_competition_CompetitionComponent__T(this, c)
});
$c_Lquizleague_web_maintain_competition_CupCompetitionComponent$.prototype.service__Lquizleague_web_service_GetService = (function() {
  return this.Lquizleague_web_maintain_competition_CupCompetitionComponent$__f_service
});
var $d_Lquizleague_web_maintain_competition_CupCompetitionComponent$ = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  Lquizleague_web_maintain_competition_CupCompetitionComponent$: 0
}, false, "quizleague.web.maintain.competition.CupCompetitionComponent$", {
  Lquizleague_web_maintain_competition_CupCompetitionComponent$: 1,
  O: 1,
  Lquizleague_web_maintain_competition_CompetitionComponentConfig: 1,
  Lquizleague_web_maintain_component_ItemComponentConfig: 1,
  Lquizleague_web_core_Component: 1,
  Lquizleague_web_core_RouteComponent: 1
});
export { $d_Lquizleague_web_maintain_competition_CupCompetitionComponent$ as $d_Lquizleague_web_maintain_competition_CupCompetitionComponent$ };
$c_Lquizleague_web_maintain_competition_CupCompetitionComponent$.prototype.$classData = $d_Lquizleague_web_maintain_competition_CupCompetitionComponent$;
var $n_Lquizleague_web_maintain_competition_CupCompetitionComponent$;
function $m_Lquizleague_web_maintain_competition_CupCompetitionComponent$() {
  if ((!$n_Lquizleague_web_maintain_competition_CupCompetitionComponent$)) {
    $n_Lquizleague_web_maintain_competition_CupCompetitionComponent$ = new $c_Lquizleague_web_maintain_competition_CupCompetitionComponent$()
  };
  return $n_Lquizleague_web_maintain_competition_CupCompetitionComponent$
}
export { $m_Lquizleague_web_maintain_competition_CupCompetitionComponent$ as $m_Lquizleague_web_maintain_competition_CupCompetitionComponent$ };
/** @constructor */
function $c_Lquizleague_web_maintain_competition_LeagueCompetitionComponent$() {
  this.Lquizleague_web_maintain_competition_LeagueCompetitionComponent$__f_template = null;
  this.Lquizleague_web_maintain_competition_LeagueCompetitionComponent$__f_service = null;
  this.Lquizleague_web_maintain_competition_LeagueCompetitionComponent$__f_name = null;
  this.Lquizleague_web_maintain_competition_LeagueCompetitionComponent$__f_paramName = null;
  this.Lquizleague_web_maintain_competition_LeagueCompetitionComponent$__f_quizleague$web$core$Component$$addedSubs = null;
  this.Lquizleague_web_maintain_competition_LeagueCompetitionComponent$__f_quizleague$web$core$Component$$addedSubParams = null;
  this.Lquizleague_web_maintain_competition_LeagueCompetitionComponent$__f_quizleague$web$core$Component$$addedProps = null;
  this.Lquizleague_web_maintain_competition_LeagueCompetitionComponent$__f_quizleague$web$core$Component$$addedMethods = null;
  this.Lquizleague_web_maintain_competition_LeagueCompetitionComponent$__f_quizleague$web$core$Component$$addedComputed = null;
  this.Lquizleague_web_maintain_competition_LeagueCompetitionComponent$__f_quizleague$web$core$Component$$addedDataFn = null;
  this.Lquizleague_web_maintain_competition_LeagueCompetitionComponent$__f_quizleague$web$core$Component$$addedData = null;
  this.Lquizleague_web_maintain_competition_LeagueCompetitionComponent$__f_quizleague$web$core$Component$$addedComponents = null;
  this.Lquizleague_web_maintain_competition_LeagueCompetitionComponent$__f_quizleague$web$core$Component$$addedWatch = null;
  this.Lquizleague_web_maintain_competition_LeagueCompetitionComponent$__f_empty = null;
  this.Lquizleague_web_maintain_competition_LeagueCompetitionComponent$__f_quizleague$web$core$Component$$commonMethods = null;
  $n_Lquizleague_web_maintain_competition_LeagueCompetitionComponent$ = this;
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__$init$__V(this);
  $f_Lquizleague_web_maintain_component_ItemComponentConfig__$init$__V(this);
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_RouteComponent__$init$__V(this);
  $f_Lquizleague_web_maintain_competition_CompetitionComponentConfig__$init$__V(this);
  this.Lquizleague_web_maintain_competition_LeagueCompetitionComponent$__f_template = (((((((((("\n  <v-container v-if=\"item && season && subsidiaries\">\n    <h2>League Competition Detail {{season.startYear}}/{{season.endYear}}</h2>\n    <div style=\"position:absolute;top:2em;right:2em;\" v-if=\"showProgress\"><v-progress-circular indeterminate=\"true\"></v-progress-circular></div>\n    <v-form v-model=\"valid\"  >\n      <v-layout column>\n   \n          <v-text-field  label=\"Name\" type=\"text\" v-model=\"item.name\"\n             required :rules=" + $m_Lquizleague_web_maintain_component_TemplateElements$().valRequired__T__T("Name")) + "></v-text-field>\n          <v-text-field  label=\"Start Time\" type=\"time\" v-model=\"item.startTime\"\n             required :rules=") + $m_Lquizleague_web_maintain_component_TemplateElements$().valRequired__T__T("Start Time")) + "></v-text-field>\n          <v-text-field  label=\"Duration\" type=\"number\" v-model.number=\"item.duration\"\n             required step=\"0.5\" :rules=") + $m_Lquizleague_web_maintain_component_TemplateElements$().valRequired__T__T("Duration")) + "></v-text-field>\n          <v-text-field label=\"Text Name\" required v-model=\"item.textName\" :rules=") + $m_Lquizleague_web_maintain_component_TemplateElements$().valRequired__T__T("Text Name")) + "></v-text-field>\n          <v-text-field label=\"Icon Name\" v-model=\"item.icon\" :append-icon=\"item.icon\" ></v-text-field>\n          <div v-for=\"subsidiary in subsidiaries\" :key=\"subsidiary.id\"><v-btn text v-if=\"subsidiary\" type=\"button\" v-on:click=\"copyFixturesToSubsidiary(item, subsidiary)\"><v-icon>mdi-file-copy</v-icon>Copy fixtures to {{subsidiary.name}}</v-btn></div>\n\n      <div><v-btn text v-on:click=\"editText(item.text.id)\"  type=\"button\" ><v-icon>mdi-card-text-outline</v-icon>Text...</v-btn></div>\n      <div><v-btn text v-on:click=\"fixtures(item)\" ><v-icon>mdi-check</v-icon>Fixtures...</v-btn></div>\n      <div v-if=\"tables\">\n       <span>Tables</span>&nbsp;<v-btn v-on:click=\"addTable()\" icon><v-icon>mdi-plus</v-icon></v-btn>  <v-chip close v-on:click=\"toTable(table.id)\" @click:close=\"removeTable(table)\" v-for=\"(table,index) in tables\" :key=\"table.id\">{{table.description || 'Table ' + (1 + index)}}</v-chip>\n      </div>\n      </v-layout>\n      ") + $m_Lquizleague_web_maintain_component_TemplateElements$().Lquizleague_web_maintain_component_TemplateElements$__f_formButtons) + "\n    </v-form>\n  </v-container>");
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__data__T__O__V(this, "showProgress", false);
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__data__T__O__V(this, "subsidiary", null);
  var array = [];
  var fn = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((c$2) => {
    var $$x1 = $m_Lquizleague_web_maintain_competition_LeagueCompetitionComponent$();
    var dict = c$2.$route.params;
    if ((!$j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uZ($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sjs_js_WrappedDictionary$Cache$().sjs_js_WrappedDictionary$Cache$__f_safeHasOwnProperty.call(dict, "seasonId")))) {
      throw $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$ct_ju_NoSuchElementException__T__(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_ju_NoSuchElementException(), "key not found: seasonId")
    };
    return $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($$x1).subsidiaries__T__Lrxscalajs_Observable($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(dict.seasonId))
  }));
  this.Lquizleague_web_maintain_competition_LeagueCompetitionComponent$__f_quizleague$web$core$Component$$addedSubs = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.Lquizleague_web_maintain_competition_LeagueCompetitionComponent$__f_quizleague$web$core$Component$$addedSubs).$plus__T2__sci_Map(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2("subsidiaries", fn));
  var $$x2 = this.Lquizleague_web_maintain_competition_LeagueCompetitionComponent$__f_quizleague$web$core$Component$$addedSubParams;
  var this$6 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sc_Seq$();
  var bf = this$6.scg_GenTraversableFactory__f_ReusableCBFInstance;
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(bf);
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sjs_js_WrappedArray$();
  var b = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$ct_sjs_js_WrappedArray__(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjs_js_WrappedArray());
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length);
  var i = 0;
  var len = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length);
  while ((i < len)) {
    var index = i;
    var arg1 = array[index];
    var x$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(arg1);
    var elem = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2(x$1, "subsidiaries");
    b.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.push(elem);
    i = ((1 + i) | 0)
  };
  var this$9 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sci_List$();
  this.Lquizleague_web_maintain_competition_LeagueCompetitionComponent$__f_quizleague$web$core$Component$$addedSubParams = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_sci_List($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($$x2).$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O(b, this$9.scg_GenTraversableFactory__f_ReusableCBFInstance));
  var fn$1 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_sjs_js_ThisFunction$().fromFunction3__F3__sjs_js_ThisFunction2(new $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$c_sjsr_AnonFunction3(((c$3$2, item$2, subsidiary$2) => $m_Lquizleague_web_maintain_competition_LeagueCompetitionComponent$().copyFixturesToSubsidiary__Lquizleague_web_maintain_competition_LeagueCompetitionComponent__Lquizleague_web_model_LeagueCompetition__Lquizleague_web_model_LeagueCompetition__Lrxscalajs_subscription_Subscription(c$3$2, item$2, subsidiary$2))));
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__method__T__sjs_js_Function__V(this, "copyFixturesToSubsidiary", fn$1)
}
export { $c_Lquizleague_web_maintain_competition_LeagueCompetitionComponent$ as $c_Lquizleague_web_maintain_competition_LeagueCompetitionComponent$ };
$c_Lquizleague_web_maintain_competition_LeagueCompetitionComponent$.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_Lquizleague_web_maintain_competition_LeagueCompetitionComponent$.prototype.constructor = $c_Lquizleague_web_maintain_competition_LeagueCompetitionComponent$;
/** @constructor */
function $h_Lquizleague_web_maintain_competition_LeagueCompetitionComponent$() {
  /*<skip>*/
}
export { $h_Lquizleague_web_maintain_competition_LeagueCompetitionComponent$ as $h_Lquizleague_web_maintain_competition_LeagueCompetitionComponent$ };
$h_Lquizleague_web_maintain_competition_LeagueCompetitionComponent$.prototype = $c_Lquizleague_web_maintain_competition_LeagueCompetitionComponent$.prototype;
$c_Lquizleague_web_maintain_competition_LeagueCompetitionComponent$.prototype.save__Lquizleague_web_maintain_component_ItemComponent__V = (function(c) {
  $f_Lquizleague_web_maintain_component_ItemComponentConfig__save__Lquizleague_web_maintain_component_ItemComponent__V(this, c)
});
$c_Lquizleague_web_maintain_competition_LeagueCompetitionComponent$.prototype.mounted__sjs_js_Function = (function() {
  return null
});
$c_Lquizleague_web_maintain_competition_LeagueCompetitionComponent$.prototype.beforeDestroy__sjs_js_Function = (function() {
  return null
});
$c_Lquizleague_web_maintain_competition_LeagueCompetitionComponent$.prototype.service__Lquizleague_web_maintain_competition_CompetitionService$ = (function() {
  return this.Lquizleague_web_maintain_competition_LeagueCompetitionComponent$__f_service
});
$c_Lquizleague_web_maintain_competition_LeagueCompetitionComponent$.prototype.quizleague$web$maintain$competition$CompetitionComponentConfig$_setter_$service_$eq__Lquizleague_web_maintain_competition_CompetitionService$__V = (function(x$1) {
  this.Lquizleague_web_maintain_competition_LeagueCompetitionComponent$__f_service = x$1
});
$c_Lquizleague_web_maintain_competition_LeagueCompetitionComponent$.prototype.name__T = (function() {
  return this.Lquizleague_web_maintain_competition_LeagueCompetitionComponent$__f_name
});
$c_Lquizleague_web_maintain_competition_LeagueCompetitionComponent$.prototype.quizleague$web$core$RouteComponent$_setter_$name_$eq__T__V = (function(x$1) {
  this.Lquizleague_web_maintain_competition_LeagueCompetitionComponent$__f_name = x$1
});
$c_Lquizleague_web_maintain_competition_LeagueCompetitionComponent$.prototype.paramName__T = (function() {
  return this.Lquizleague_web_maintain_competition_LeagueCompetitionComponent$__f_paramName
});
$c_Lquizleague_web_maintain_competition_LeagueCompetitionComponent$.prototype.quizleague$web$maintain$component$ItemComponentConfig$_setter_$paramName_$eq__T__V = (function(x$1) {
  this.Lquizleague_web_maintain_competition_LeagueCompetitionComponent$__f_paramName = x$1
});
$c_Lquizleague_web_maintain_competition_LeagueCompetitionComponent$.prototype.quizleague$web$core$Component$$addedSubs__sci_Map = (function() {
  return this.Lquizleague_web_maintain_competition_LeagueCompetitionComponent$__f_quizleague$web$core$Component$$addedSubs
});
$c_Lquizleague_web_maintain_competition_LeagueCompetitionComponent$.prototype.quizleague$web$core$Component$$addedSubs_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_competition_LeagueCompetitionComponent$__f_quizleague$web$core$Component$$addedSubs = x$1
});
$c_Lquizleague_web_maintain_competition_LeagueCompetitionComponent$.prototype.quizleague$web$core$Component$$addedSubParams__sci_List = (function() {
  return this.Lquizleague_web_maintain_competition_LeagueCompetitionComponent$__f_quizleague$web$core$Component$$addedSubParams
});
$c_Lquizleague_web_maintain_competition_LeagueCompetitionComponent$.prototype.quizleague$web$core$Component$$addedSubParams_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_competition_LeagueCompetitionComponent$__f_quizleague$web$core$Component$$addedSubParams = x$1
});
$c_Lquizleague_web_maintain_competition_LeagueCompetitionComponent$.prototype.quizleague$web$core$Component$$addedProps__sci_List = (function() {
  return this.Lquizleague_web_maintain_competition_LeagueCompetitionComponent$__f_quizleague$web$core$Component$$addedProps
});
$c_Lquizleague_web_maintain_competition_LeagueCompetitionComponent$.prototype.quizleague$web$core$Component$$addedProps_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_competition_LeagueCompetitionComponent$__f_quizleague$web$core$Component$$addedProps = x$1
});
$c_Lquizleague_web_maintain_competition_LeagueCompetitionComponent$.prototype.quizleague$web$core$Component$$addedMethods__sci_Map = (function() {
  return this.Lquizleague_web_maintain_competition_LeagueCompetitionComponent$__f_quizleague$web$core$Component$$addedMethods
});
$c_Lquizleague_web_maintain_competition_LeagueCompetitionComponent$.prototype.quizleague$web$core$Component$$addedMethods_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_competition_LeagueCompetitionComponent$__f_quizleague$web$core$Component$$addedMethods = x$1
});
$c_Lquizleague_web_maintain_competition_LeagueCompetitionComponent$.prototype.quizleague$web$core$Component$$addedComputed__sci_Map = (function() {
  return this.Lquizleague_web_maintain_competition_LeagueCompetitionComponent$__f_quizleague$web$core$Component$$addedComputed
});
$c_Lquizleague_web_maintain_competition_LeagueCompetitionComponent$.prototype.quizleague$web$core$Component$$addedComputed_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_competition_LeagueCompetitionComponent$__f_quizleague$web$core$Component$$addedComputed = x$1
});
$c_Lquizleague_web_maintain_competition_LeagueCompetitionComponent$.prototype.quizleague$web$core$Component$$addedDataFn__sci_Map = (function() {
  return this.Lquizleague_web_maintain_competition_LeagueCompetitionComponent$__f_quizleague$web$core$Component$$addedDataFn
});
$c_Lquizleague_web_maintain_competition_LeagueCompetitionComponent$.prototype.quizleague$web$core$Component$$addedDataFn_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_competition_LeagueCompetitionComponent$__f_quizleague$web$core$Component$$addedDataFn = x$1
});
$c_Lquizleague_web_maintain_competition_LeagueCompetitionComponent$.prototype.quizleague$web$core$Component$$addedData__sci_Map = (function() {
  return this.Lquizleague_web_maintain_competition_LeagueCompetitionComponent$__f_quizleague$web$core$Component$$addedData
});
$c_Lquizleague_web_maintain_competition_LeagueCompetitionComponent$.prototype.quizleague$web$core$Component$$addedData_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_competition_LeagueCompetitionComponent$__f_quizleague$web$core$Component$$addedData = x$1
});
$c_Lquizleague_web_maintain_competition_LeagueCompetitionComponent$.prototype.quizleague$web$core$Component$$addedComponents__sci_List = (function() {
  return this.Lquizleague_web_maintain_competition_LeagueCompetitionComponent$__f_quizleague$web$core$Component$$addedComponents
});
$c_Lquizleague_web_maintain_competition_LeagueCompetitionComponent$.prototype.quizleague$web$core$Component$$addedComponents_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_competition_LeagueCompetitionComponent$__f_quizleague$web$core$Component$$addedComponents = x$1
});
$c_Lquizleague_web_maintain_competition_LeagueCompetitionComponent$.prototype.quizleague$web$core$Component$$addedWatch__sci_Map = (function() {
  return this.Lquizleague_web_maintain_competition_LeagueCompetitionComponent$__f_quizleague$web$core$Component$$addedWatch
});
$c_Lquizleague_web_maintain_competition_LeagueCompetitionComponent$.prototype.quizleague$web$core$Component$$addedWatch_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_competition_LeagueCompetitionComponent$__f_quizleague$web$core$Component$$addedWatch = x$1
});
$c_Lquizleague_web_maintain_competition_LeagueCompetitionComponent$.prototype.empty__sjs_js_Object = (function() {
  return this.Lquizleague_web_maintain_competition_LeagueCompetitionComponent$__f_empty
});
$c_Lquizleague_web_maintain_competition_LeagueCompetitionComponent$.prototype.quizleague$web$core$Component$$commonMethods__sci_Map = (function() {
  return this.Lquizleague_web_maintain_competition_LeagueCompetitionComponent$__f_quizleague$web$core$Component$$commonMethods
});
$c_Lquizleague_web_maintain_competition_LeagueCompetitionComponent$.prototype.quizleague$web$core$Component$_setter_$empty_$eq__sjs_js_Object__V = (function(x$1) {
  this.Lquizleague_web_maintain_competition_LeagueCompetitionComponent$__f_empty = x$1
});
$c_Lquizleague_web_maintain_competition_LeagueCompetitionComponent$.prototype.quizleague$web$core$Component$_setter_$quizleague$web$core$Component$$commonMethods_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_competition_LeagueCompetitionComponent$__f_quizleague$web$core$Component$$commonMethods = x$1
});
$c_Lquizleague_web_maintain_competition_LeagueCompetitionComponent$.prototype.template__T = (function() {
  return this.Lquizleague_web_maintain_competition_LeagueCompetitionComponent$__f_template
});
$c_Lquizleague_web_maintain_competition_LeagueCompetitionComponent$.prototype.filterSubs__Lquizleague_web_model_Competition__Z = (function(c) {
  return $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uZ((c instanceof $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$a_Lquizleague_web_model_SubsidiaryLeagueCompetition()))
});
$c_Lquizleague_web_maintain_competition_LeagueCompetitionComponent$.prototype.subsidiaries__T__Lrxscalajs_Observable = (function(seasonId) {
  var this$1 = $m_Lquizleague_web_maintain_season_SeasonService$();
  return $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__get__T__Lrxscalajs_Observable(this$1, seasonId)).flatMap__F1__Lrxscalajs_Observable(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((x$1$2) => $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$as_Lrxscalajs_Observable(x$1$2.competition)).map__F1__Lrxscalajs_Observable(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((x$2$2) => {
    var array = [];
    var i = 0;
    var len = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(x$2$2.length);
    while ((i < len)) {
      var index = i;
      var arg1 = x$2$2[index];
      if (($m_Lquizleague_web_maintain_competition_LeagueCompetitionComponent$().filterSubs__Lquizleague_web_model_Competition__Z(arg1) !== false)) {
        array.push(arg1)
      };
      i = ((1 + i) | 0)
    };
    return array
  }))))))
});
$c_Lquizleague_web_maintain_competition_LeagueCompetitionComponent$.prototype.copyFixturesToSubsidiary__Lquizleague_web_maintain_competition_LeagueCompetitionComponent__Lquizleague_web_model_LeagueCompetition__Lquizleague_web_model_LeagueCompetition__Lrxscalajs_subscription_Subscription = (function(c, item, subsidiary) {
  c.showProgress = true;
  var qual$1 = $m_Lquizleague_web_maintain_fixtures_FixturesService$().copyFixtures__Lrxscalajs_Observable__Lquizleague_web_model_Competition__Lrxscalajs_Observable($j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$as_Lrxscalajs_Observable(item.fixtures), subsidiary);
  var x$1 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((x$2) => {
    $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_sc_Seq(x$2);
    c.showProgress = false
  }));
  var x$2$2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(qual$1).subscribe$default$2__F1();
  var x$3 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(qual$1).subscribe$default$3__F0();
  return $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(qual$1).subscribe__F1__F1__F0__Lrxscalajs_subscription_Subscription(x$1, x$2$2, x$3)
});
$c_Lquizleague_web_maintain_competition_LeagueCompetitionComponent$.prototype.parentKey__Lquizleague_web_maintain_component_ItemComponent__T = (function(c) {
  return $f_Lquizleague_web_maintain_competition_CompetitionComponentConfig__parentKey__Lquizleague_web_maintain_competition_CompetitionComponent__T(this, c)
});
$c_Lquizleague_web_maintain_competition_LeagueCompetitionComponent$.prototype.service__Lquizleague_web_service_GetService = (function() {
  return this.Lquizleague_web_maintain_competition_LeagueCompetitionComponent$__f_service
});
var $d_Lquizleague_web_maintain_competition_LeagueCompetitionComponent$ = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  Lquizleague_web_maintain_competition_LeagueCompetitionComponent$: 0
}, false, "quizleague.web.maintain.competition.LeagueCompetitionComponent$", {
  Lquizleague_web_maintain_competition_LeagueCompetitionComponent$: 1,
  O: 1,
  Lquizleague_web_maintain_competition_CompetitionComponentConfig: 1,
  Lquizleague_web_maintain_component_ItemComponentConfig: 1,
  Lquizleague_web_core_Component: 1,
  Lquizleague_web_core_RouteComponent: 1
});
export { $d_Lquizleague_web_maintain_competition_LeagueCompetitionComponent$ as $d_Lquizleague_web_maintain_competition_LeagueCompetitionComponent$ };
$c_Lquizleague_web_maintain_competition_LeagueCompetitionComponent$.prototype.$classData = $d_Lquizleague_web_maintain_competition_LeagueCompetitionComponent$;
var $n_Lquizleague_web_maintain_competition_LeagueCompetitionComponent$;
function $m_Lquizleague_web_maintain_competition_LeagueCompetitionComponent$() {
  if ((!$n_Lquizleague_web_maintain_competition_LeagueCompetitionComponent$)) {
    $n_Lquizleague_web_maintain_competition_LeagueCompetitionComponent$ = new $c_Lquizleague_web_maintain_competition_LeagueCompetitionComponent$()
  };
  return $n_Lquizleague_web_maintain_competition_LeagueCompetitionComponent$
}
export { $m_Lquizleague_web_maintain_competition_LeagueCompetitionComponent$ as $m_Lquizleague_web_maintain_competition_LeagueCompetitionComponent$ };
/** @constructor */
function $c_Lquizleague_web_maintain_competition_SingletonCompetitionComponent$() {
  this.Lquizleague_web_maintain_competition_SingletonCompetitionComponent$__f_template = null;
  this.Lquizleague_web_maintain_competition_SingletonCompetitionComponent$__f_service = null;
  this.Lquizleague_web_maintain_competition_SingletonCompetitionComponent$__f_name = null;
  this.Lquizleague_web_maintain_competition_SingletonCompetitionComponent$__f_paramName = null;
  this.Lquizleague_web_maintain_competition_SingletonCompetitionComponent$__f_quizleague$web$core$Component$$addedSubs = null;
  this.Lquizleague_web_maintain_competition_SingletonCompetitionComponent$__f_quizleague$web$core$Component$$addedSubParams = null;
  this.Lquizleague_web_maintain_competition_SingletonCompetitionComponent$__f_quizleague$web$core$Component$$addedProps = null;
  this.Lquizleague_web_maintain_competition_SingletonCompetitionComponent$__f_quizleague$web$core$Component$$addedMethods = null;
  this.Lquizleague_web_maintain_competition_SingletonCompetitionComponent$__f_quizleague$web$core$Component$$addedComputed = null;
  this.Lquizleague_web_maintain_competition_SingletonCompetitionComponent$__f_quizleague$web$core$Component$$addedDataFn = null;
  this.Lquizleague_web_maintain_competition_SingletonCompetitionComponent$__f_quizleague$web$core$Component$$addedData = null;
  this.Lquizleague_web_maintain_competition_SingletonCompetitionComponent$__f_quizleague$web$core$Component$$addedComponents = null;
  this.Lquizleague_web_maintain_competition_SingletonCompetitionComponent$__f_quizleague$web$core$Component$$addedWatch = null;
  this.Lquizleague_web_maintain_competition_SingletonCompetitionComponent$__f_empty = null;
  this.Lquizleague_web_maintain_competition_SingletonCompetitionComponent$__f_quizleague$web$core$Component$$commonMethods = null;
  $n_Lquizleague_web_maintain_competition_SingletonCompetitionComponent$ = this;
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__$init$__V(this);
  $f_Lquizleague_web_maintain_component_ItemComponentConfig__$init$__V(this);
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_RouteComponent__$init$__V(this);
  $f_Lquizleague_web_maintain_competition_CompetitionComponentConfig__$init$__V(this);
  this.Lquizleague_web_maintain_competition_SingletonCompetitionComponent$__f_template = (((((((((((("\n  <v-container v-if=\"item && season\">\n    <h2>Singleton Competition Detail {{item.startYear}}/{{item.endYear}}</h2>\n    <v-form v-model=\"valid\">\n      <v-layout column>\n        <v-text-field label=\"Name\" required v-model=\"item.name\" :rules=" + $m_Lquizleague_web_maintain_component_TemplateElements$().valRequired__T__T("Name")) + "></v-text-field>\n        <v-text-field label=\"Text Name\" required v-model=\"item.textName\" :rules=") + $m_Lquizleague_web_maintain_component_TemplateElements$().valRequired__T__T("Text Name")) + "></v-text-field>\n        <v-text-field label=\"Icon Name\" v-model=\"item.icon\" :append-icon=\"item.icon\" ></v-text-field>\n         <v-layout column v-if=\"item.event\">\n          <v-layout row>\n            <v-text-field label=\"Date\" required v-model=\"item.event.date\" type=\"date\" :rules=") + $m_Lquizleague_web_maintain_component_TemplateElements$().valRequired__T__T("Date")) + "></v-text-field>\n            <v-text-field label=\"Time\" required v-model=\"item.event.time\" type=\"time\" :rules=") + $m_Lquizleague_web_maintain_component_TemplateElements$().valRequired__T__T("Time")) + "></v-text-field>\n            <v-text-field label=\"Duration\" required v-model.number=\"item.event.duration\" :rules=") + $m_Lquizleague_web_maintain_component_TemplateElements$().valRequired__T__T("Duration")) + " type=\"number\" step=\"0.5\"></v-text-field>\n          </v-layout>\n          <v-select label=\"Venue\" v-model=\"item.event.venue\" :items=\"venues\"></v-select>\n         </v-layout>\n\n      <div><v-btn v-on:click=\"editText(item.text.id)\" text  ><v-icon>mdi-card-text-outline</v-icon>Text...</v-btn></div>\n      </v-layout>\n      ") + $m_Lquizleague_web_maintain_component_TemplateElements$().Lquizleague_web_maintain_component_TemplateElements$__f_formButtons) + "\n    </form>\n  </div>\n\n  ");
  var array = [];
  var fn = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((c$2) => $m_Lquizleague_web_maintain_competition_SingletonCompetitionComponent$().venues__Lrxscalajs_Observable()));
  this.Lquizleague_web_maintain_competition_SingletonCompetitionComponent$__f_quizleague$web$core$Component$$addedSubs = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.Lquizleague_web_maintain_competition_SingletonCompetitionComponent$__f_quizleague$web$core$Component$$addedSubs).$plus__T2__sci_Map(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2("venues", fn));
  var $$x1 = this.Lquizleague_web_maintain_competition_SingletonCompetitionComponent$__f_quizleague$web$core$Component$$addedSubParams;
  var this$4 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sc_Seq$();
  var bf = this$4.scg_GenTraversableFactory__f_ReusableCBFInstance;
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(bf);
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sjs_js_WrappedArray$();
  var b = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$ct_sjs_js_WrappedArray__(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjs_js_WrappedArray());
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length);
  var i = 0;
  var len = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length);
  while ((i < len)) {
    var index = i;
    var arg1 = array[index];
    var x$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(arg1);
    var elem = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2(x$1, "venues");
    b.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.push(elem);
    i = ((1 + i) | 0)
  };
  var this$7 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sci_List$();
  this.Lquizleague_web_maintain_competition_SingletonCompetitionComponent$__f_quizleague$web$core$Component$$addedSubParams = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_sci_List($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($$x1).$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O(b, this$7.scg_GenTraversableFactory__f_ReusableCBFInstance))
}
export { $c_Lquizleague_web_maintain_competition_SingletonCompetitionComponent$ as $c_Lquizleague_web_maintain_competition_SingletonCompetitionComponent$ };
$c_Lquizleague_web_maintain_competition_SingletonCompetitionComponent$.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_Lquizleague_web_maintain_competition_SingletonCompetitionComponent$.prototype.constructor = $c_Lquizleague_web_maintain_competition_SingletonCompetitionComponent$;
/** @constructor */
function $h_Lquizleague_web_maintain_competition_SingletonCompetitionComponent$() {
  /*<skip>*/
}
export { $h_Lquizleague_web_maintain_competition_SingletonCompetitionComponent$ as $h_Lquizleague_web_maintain_competition_SingletonCompetitionComponent$ };
$h_Lquizleague_web_maintain_competition_SingletonCompetitionComponent$.prototype = $c_Lquizleague_web_maintain_competition_SingletonCompetitionComponent$.prototype;
$c_Lquizleague_web_maintain_competition_SingletonCompetitionComponent$.prototype.save__Lquizleague_web_maintain_component_ItemComponent__V = (function(c) {
  $f_Lquizleague_web_maintain_component_ItemComponentConfig__save__Lquizleague_web_maintain_component_ItemComponent__V(this, c)
});
$c_Lquizleague_web_maintain_competition_SingletonCompetitionComponent$.prototype.mounted__sjs_js_Function = (function() {
  return null
});
$c_Lquizleague_web_maintain_competition_SingletonCompetitionComponent$.prototype.beforeDestroy__sjs_js_Function = (function() {
  return null
});
$c_Lquizleague_web_maintain_competition_SingletonCompetitionComponent$.prototype.service__Lquizleague_web_maintain_competition_CompetitionService$ = (function() {
  return this.Lquizleague_web_maintain_competition_SingletonCompetitionComponent$__f_service
});
$c_Lquizleague_web_maintain_competition_SingletonCompetitionComponent$.prototype.quizleague$web$maintain$competition$CompetitionComponentConfig$_setter_$service_$eq__Lquizleague_web_maintain_competition_CompetitionService$__V = (function(x$1) {
  this.Lquizleague_web_maintain_competition_SingletonCompetitionComponent$__f_service = x$1
});
$c_Lquizleague_web_maintain_competition_SingletonCompetitionComponent$.prototype.name__T = (function() {
  return this.Lquizleague_web_maintain_competition_SingletonCompetitionComponent$__f_name
});
$c_Lquizleague_web_maintain_competition_SingletonCompetitionComponent$.prototype.quizleague$web$core$RouteComponent$_setter_$name_$eq__T__V = (function(x$1) {
  this.Lquizleague_web_maintain_competition_SingletonCompetitionComponent$__f_name = x$1
});
$c_Lquizleague_web_maintain_competition_SingletonCompetitionComponent$.prototype.paramName__T = (function() {
  return this.Lquizleague_web_maintain_competition_SingletonCompetitionComponent$__f_paramName
});
$c_Lquizleague_web_maintain_competition_SingletonCompetitionComponent$.prototype.quizleague$web$maintain$component$ItemComponentConfig$_setter_$paramName_$eq__T__V = (function(x$1) {
  this.Lquizleague_web_maintain_competition_SingletonCompetitionComponent$__f_paramName = x$1
});
$c_Lquizleague_web_maintain_competition_SingletonCompetitionComponent$.prototype.quizleague$web$core$Component$$addedSubs__sci_Map = (function() {
  return this.Lquizleague_web_maintain_competition_SingletonCompetitionComponent$__f_quizleague$web$core$Component$$addedSubs
});
$c_Lquizleague_web_maintain_competition_SingletonCompetitionComponent$.prototype.quizleague$web$core$Component$$addedSubs_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_competition_SingletonCompetitionComponent$__f_quizleague$web$core$Component$$addedSubs = x$1
});
$c_Lquizleague_web_maintain_competition_SingletonCompetitionComponent$.prototype.quizleague$web$core$Component$$addedSubParams__sci_List = (function() {
  return this.Lquizleague_web_maintain_competition_SingletonCompetitionComponent$__f_quizleague$web$core$Component$$addedSubParams
});
$c_Lquizleague_web_maintain_competition_SingletonCompetitionComponent$.prototype.quizleague$web$core$Component$$addedSubParams_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_competition_SingletonCompetitionComponent$__f_quizleague$web$core$Component$$addedSubParams = x$1
});
$c_Lquizleague_web_maintain_competition_SingletonCompetitionComponent$.prototype.quizleague$web$core$Component$$addedProps__sci_List = (function() {
  return this.Lquizleague_web_maintain_competition_SingletonCompetitionComponent$__f_quizleague$web$core$Component$$addedProps
});
$c_Lquizleague_web_maintain_competition_SingletonCompetitionComponent$.prototype.quizleague$web$core$Component$$addedProps_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_competition_SingletonCompetitionComponent$__f_quizleague$web$core$Component$$addedProps = x$1
});
$c_Lquizleague_web_maintain_competition_SingletonCompetitionComponent$.prototype.quizleague$web$core$Component$$addedMethods__sci_Map = (function() {
  return this.Lquizleague_web_maintain_competition_SingletonCompetitionComponent$__f_quizleague$web$core$Component$$addedMethods
});
$c_Lquizleague_web_maintain_competition_SingletonCompetitionComponent$.prototype.quizleague$web$core$Component$$addedMethods_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_competition_SingletonCompetitionComponent$__f_quizleague$web$core$Component$$addedMethods = x$1
});
$c_Lquizleague_web_maintain_competition_SingletonCompetitionComponent$.prototype.quizleague$web$core$Component$$addedComputed__sci_Map = (function() {
  return this.Lquizleague_web_maintain_competition_SingletonCompetitionComponent$__f_quizleague$web$core$Component$$addedComputed
});
$c_Lquizleague_web_maintain_competition_SingletonCompetitionComponent$.prototype.quizleague$web$core$Component$$addedComputed_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_competition_SingletonCompetitionComponent$__f_quizleague$web$core$Component$$addedComputed = x$1
});
$c_Lquizleague_web_maintain_competition_SingletonCompetitionComponent$.prototype.quizleague$web$core$Component$$addedDataFn__sci_Map = (function() {
  return this.Lquizleague_web_maintain_competition_SingletonCompetitionComponent$__f_quizleague$web$core$Component$$addedDataFn
});
$c_Lquizleague_web_maintain_competition_SingletonCompetitionComponent$.prototype.quizleague$web$core$Component$$addedDataFn_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_competition_SingletonCompetitionComponent$__f_quizleague$web$core$Component$$addedDataFn = x$1
});
$c_Lquizleague_web_maintain_competition_SingletonCompetitionComponent$.prototype.quizleague$web$core$Component$$addedData__sci_Map = (function() {
  return this.Lquizleague_web_maintain_competition_SingletonCompetitionComponent$__f_quizleague$web$core$Component$$addedData
});
$c_Lquizleague_web_maintain_competition_SingletonCompetitionComponent$.prototype.quizleague$web$core$Component$$addedData_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_competition_SingletonCompetitionComponent$__f_quizleague$web$core$Component$$addedData = x$1
});
$c_Lquizleague_web_maintain_competition_SingletonCompetitionComponent$.prototype.quizleague$web$core$Component$$addedComponents__sci_List = (function() {
  return this.Lquizleague_web_maintain_competition_SingletonCompetitionComponent$__f_quizleague$web$core$Component$$addedComponents
});
$c_Lquizleague_web_maintain_competition_SingletonCompetitionComponent$.prototype.quizleague$web$core$Component$$addedComponents_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_competition_SingletonCompetitionComponent$__f_quizleague$web$core$Component$$addedComponents = x$1
});
$c_Lquizleague_web_maintain_competition_SingletonCompetitionComponent$.prototype.quizleague$web$core$Component$$addedWatch__sci_Map = (function() {
  return this.Lquizleague_web_maintain_competition_SingletonCompetitionComponent$__f_quizleague$web$core$Component$$addedWatch
});
$c_Lquizleague_web_maintain_competition_SingletonCompetitionComponent$.prototype.quizleague$web$core$Component$$addedWatch_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_competition_SingletonCompetitionComponent$__f_quizleague$web$core$Component$$addedWatch = x$1
});
$c_Lquizleague_web_maintain_competition_SingletonCompetitionComponent$.prototype.empty__sjs_js_Object = (function() {
  return this.Lquizleague_web_maintain_competition_SingletonCompetitionComponent$__f_empty
});
$c_Lquizleague_web_maintain_competition_SingletonCompetitionComponent$.prototype.quizleague$web$core$Component$$commonMethods__sci_Map = (function() {
  return this.Lquizleague_web_maintain_competition_SingletonCompetitionComponent$__f_quizleague$web$core$Component$$commonMethods
});
$c_Lquizleague_web_maintain_competition_SingletonCompetitionComponent$.prototype.quizleague$web$core$Component$_setter_$empty_$eq__sjs_js_Object__V = (function(x$1) {
  this.Lquizleague_web_maintain_competition_SingletonCompetitionComponent$__f_empty = x$1
});
$c_Lquizleague_web_maintain_competition_SingletonCompetitionComponent$.prototype.quizleague$web$core$Component$_setter_$quizleague$web$core$Component$$commonMethods_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_competition_SingletonCompetitionComponent$__f_quizleague$web$core$Component$$commonMethods = x$1
});
$c_Lquizleague_web_maintain_competition_SingletonCompetitionComponent$.prototype.template__T = (function() {
  return this.Lquizleague_web_maintain_competition_SingletonCompetitionComponent$__f_template
});
$c_Lquizleague_web_maintain_competition_SingletonCompetitionComponent$.prototype.venues__Lrxscalajs_Observable = (function() {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_util_component_SelectUtils$().model__Lquizleague_web_service_GetService__F1__Lrxscalajs_Observable($j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_maintain_venue_VenueService$(), new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((x$1$2) => $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(x$1$2.name))))
});
$c_Lquizleague_web_maintain_competition_SingletonCompetitionComponent$.prototype.parentKey__Lquizleague_web_maintain_component_ItemComponent__T = (function(c) {
  return $f_Lquizleague_web_maintain_competition_CompetitionComponentConfig__parentKey__Lquizleague_web_maintain_competition_CompetitionComponent__T(this, c)
});
$c_Lquizleague_web_maintain_competition_SingletonCompetitionComponent$.prototype.service__Lquizleague_web_service_GetService = (function() {
  return this.Lquizleague_web_maintain_competition_SingletonCompetitionComponent$__f_service
});
var $d_Lquizleague_web_maintain_competition_SingletonCompetitionComponent$ = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  Lquizleague_web_maintain_competition_SingletonCompetitionComponent$: 0
}, false, "quizleague.web.maintain.competition.SingletonCompetitionComponent$", {
  Lquizleague_web_maintain_competition_SingletonCompetitionComponent$: 1,
  O: 1,
  Lquizleague_web_maintain_competition_CompetitionComponentConfig: 1,
  Lquizleague_web_maintain_component_ItemComponentConfig: 1,
  Lquizleague_web_core_Component: 1,
  Lquizleague_web_core_RouteComponent: 1
});
export { $d_Lquizleague_web_maintain_competition_SingletonCompetitionComponent$ as $d_Lquizleague_web_maintain_competition_SingletonCompetitionComponent$ };
$c_Lquizleague_web_maintain_competition_SingletonCompetitionComponent$.prototype.$classData = $d_Lquizleague_web_maintain_competition_SingletonCompetitionComponent$;
var $n_Lquizleague_web_maintain_competition_SingletonCompetitionComponent$;
function $m_Lquizleague_web_maintain_competition_SingletonCompetitionComponent$() {
  if ((!$n_Lquizleague_web_maintain_competition_SingletonCompetitionComponent$)) {
    $n_Lquizleague_web_maintain_competition_SingletonCompetitionComponent$ = new $c_Lquizleague_web_maintain_competition_SingletonCompetitionComponent$()
  };
  return $n_Lquizleague_web_maintain_competition_SingletonCompetitionComponent$
}
export { $m_Lquizleague_web_maintain_competition_SingletonCompetitionComponent$ as $m_Lquizleague_web_maintain_competition_SingletonCompetitionComponent$ };
/** @constructor */
function $c_Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$() {
  this.Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$__f_template = null;
  this.Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$__f_service = null;
  this.Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$__f_name = null;
  this.Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$__f_paramName = null;
  this.Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$__f_quizleague$web$core$Component$$addedSubs = null;
  this.Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$__f_quizleague$web$core$Component$$addedSubParams = null;
  this.Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$__f_quizleague$web$core$Component$$addedProps = null;
  this.Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$__f_quizleague$web$core$Component$$addedMethods = null;
  this.Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$__f_quizleague$web$core$Component$$addedComputed = null;
  this.Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$__f_quizleague$web$core$Component$$addedDataFn = null;
  this.Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$__f_quizleague$web$core$Component$$addedData = null;
  this.Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$__f_quizleague$web$core$Component$$addedComponents = null;
  this.Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$__f_quizleague$web$core$Component$$addedWatch = null;
  this.Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$__f_empty = null;
  this.Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$__f_quizleague$web$core$Component$$commonMethods = null;
  $n_Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$ = this;
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__$init$__V(this);
  $f_Lquizleague_web_maintain_component_ItemComponentConfig__$init$__V(this);
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_RouteComponent__$init$__V(this);
  $f_Lquizleague_web_maintain_competition_CompetitionComponentConfig__$init$__V(this);
  this.Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$__f_template = (((((("\n  <v-container>\n    <h2>Subsidiary Competition Detail {{season.startYear}}/{{season.endYear}}</h2>\n\n    <v-form v-model=\"valid\"  v-if=\"item && season\">\n      <v-layout column>\n   \n        <v-text-field  label=\"Name\" type=\"text\" v-model=\"item.name\"\n             required :rules=" + $m_Lquizleague_web_maintain_component_TemplateElements$().valRequired__T__T("Name")) + "></v-text-field>\n        <v-text-field label=\"Text Name\" required v-model=\"item.textName\" :rules=") + $m_Lquizleague_web_maintain_component_TemplateElements$().valRequired__T__T("Text Name")) + "></v-text-field>\n        <v-text-field label=\"Icon Name\" v-model=\"item.icon\" :append-icon=\"item.icon\" ></v-text-field>\n\n      <div><v-btn text v-on:click=\"fixtures(item)\" ><v-icon>mdi-check</v-icon>Fixtures...</v-btn></div>\n      <div>\n       <span>Tables</span>&nbsp;<v-btn v-on:click=\"addTable()\" icon><v-icon>mdi-plus</v-icon></v-btn>  <v-chip close v-on:click=\"toTable(table.id)\" @click:close=\"removeTable(table)\" v-for=\"(table,index) in tables\" :key=\"table.id\">{{table.description || 'Table ' + (1 + index)}}</v-chip>\n       </div>\n      </v-layout>\n      ") + $m_Lquizleague_web_maintain_component_TemplateElements$().Lquizleague_web_maintain_component_TemplateElements$__f_formButtons) + "\n    </v-form>\n  </v-container>")
}
export { $c_Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$ as $c_Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$ };
$c_Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$.prototype.constructor = $c_Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$;
/** @constructor */
function $h_Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$() {
  /*<skip>*/
}
export { $h_Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$ as $h_Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$ };
$h_Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$.prototype = $c_Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$.prototype;
$c_Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$.prototype.save__Lquizleague_web_maintain_component_ItemComponent__V = (function(c) {
  $f_Lquizleague_web_maintain_component_ItemComponentConfig__save__Lquizleague_web_maintain_component_ItemComponent__V(this, c)
});
$c_Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$.prototype.mounted__sjs_js_Function = (function() {
  return null
});
$c_Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$.prototype.beforeDestroy__sjs_js_Function = (function() {
  return null
});
$c_Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$.prototype.service__Lquizleague_web_maintain_competition_CompetitionService$ = (function() {
  return this.Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$__f_service
});
$c_Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$.prototype.quizleague$web$maintain$competition$CompetitionComponentConfig$_setter_$service_$eq__Lquizleague_web_maintain_competition_CompetitionService$__V = (function(x$1) {
  this.Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$__f_service = x$1
});
$c_Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$.prototype.name__T = (function() {
  return this.Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$__f_name
});
$c_Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$.prototype.quizleague$web$core$RouteComponent$_setter_$name_$eq__T__V = (function(x$1) {
  this.Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$__f_name = x$1
});
$c_Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$.prototype.paramName__T = (function() {
  return this.Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$__f_paramName
});
$c_Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$.prototype.quizleague$web$maintain$component$ItemComponentConfig$_setter_$paramName_$eq__T__V = (function(x$1) {
  this.Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$__f_paramName = x$1
});
$c_Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$.prototype.quizleague$web$core$Component$$addedSubs__sci_Map = (function() {
  return this.Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$__f_quizleague$web$core$Component$$addedSubs
});
$c_Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$.prototype.quizleague$web$core$Component$$addedSubs_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$__f_quizleague$web$core$Component$$addedSubs = x$1
});
$c_Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$.prototype.quizleague$web$core$Component$$addedSubParams__sci_List = (function() {
  return this.Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$__f_quizleague$web$core$Component$$addedSubParams
});
$c_Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$.prototype.quizleague$web$core$Component$$addedSubParams_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$__f_quizleague$web$core$Component$$addedSubParams = x$1
});
$c_Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$.prototype.quizleague$web$core$Component$$addedProps__sci_List = (function() {
  return this.Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$__f_quizleague$web$core$Component$$addedProps
});
$c_Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$.prototype.quizleague$web$core$Component$$addedProps_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$__f_quizleague$web$core$Component$$addedProps = x$1
});
$c_Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$.prototype.quizleague$web$core$Component$$addedMethods__sci_Map = (function() {
  return this.Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$__f_quizleague$web$core$Component$$addedMethods
});
$c_Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$.prototype.quizleague$web$core$Component$$addedMethods_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$__f_quizleague$web$core$Component$$addedMethods = x$1
});
$c_Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$.prototype.quizleague$web$core$Component$$addedComputed__sci_Map = (function() {
  return this.Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$__f_quizleague$web$core$Component$$addedComputed
});
$c_Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$.prototype.quizleague$web$core$Component$$addedComputed_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$__f_quizleague$web$core$Component$$addedComputed = x$1
});
$c_Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$.prototype.quizleague$web$core$Component$$addedDataFn__sci_Map = (function() {
  return this.Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$__f_quizleague$web$core$Component$$addedDataFn
});
$c_Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$.prototype.quizleague$web$core$Component$$addedDataFn_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$__f_quizleague$web$core$Component$$addedDataFn = x$1
});
$c_Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$.prototype.quizleague$web$core$Component$$addedData__sci_Map = (function() {
  return this.Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$__f_quizleague$web$core$Component$$addedData
});
$c_Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$.prototype.quizleague$web$core$Component$$addedData_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$__f_quizleague$web$core$Component$$addedData = x$1
});
$c_Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$.prototype.quizleague$web$core$Component$$addedComponents__sci_List = (function() {
  return this.Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$__f_quizleague$web$core$Component$$addedComponents
});
$c_Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$.prototype.quizleague$web$core$Component$$addedComponents_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$__f_quizleague$web$core$Component$$addedComponents = x$1
});
$c_Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$.prototype.quizleague$web$core$Component$$addedWatch__sci_Map = (function() {
  return this.Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$__f_quizleague$web$core$Component$$addedWatch
});
$c_Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$.prototype.quizleague$web$core$Component$$addedWatch_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$__f_quizleague$web$core$Component$$addedWatch = x$1
});
$c_Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$.prototype.empty__sjs_js_Object = (function() {
  return this.Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$__f_empty
});
$c_Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$.prototype.quizleague$web$core$Component$$commonMethods__sci_Map = (function() {
  return this.Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$__f_quizleague$web$core$Component$$commonMethods
});
$c_Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$.prototype.quizleague$web$core$Component$_setter_$empty_$eq__sjs_js_Object__V = (function(x$1) {
  this.Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$__f_empty = x$1
});
$c_Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$.prototype.quizleague$web$core$Component$_setter_$quizleague$web$core$Component$$commonMethods_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$__f_quizleague$web$core$Component$$commonMethods = x$1
});
$c_Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$.prototype.template__T = (function() {
  return this.Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$__f_template
});
$c_Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$.prototype.parentKey__Lquizleague_web_maintain_component_ItemComponent__T = (function(c) {
  return $f_Lquizleague_web_maintain_competition_CompetitionComponentConfig__parentKey__Lquizleague_web_maintain_competition_CompetitionComponent__T(this, c)
});
$c_Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$.prototype.service__Lquizleague_web_service_GetService = (function() {
  return this.Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$__f_service
});
var $d_Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$ = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$: 0
}, false, "quizleague.web.maintain.competition.SubsidiaryCompetitionComponent$", {
  Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$: 1,
  O: 1,
  Lquizleague_web_maintain_competition_CompetitionComponentConfig: 1,
  Lquizleague_web_maintain_component_ItemComponentConfig: 1,
  Lquizleague_web_core_Component: 1,
  Lquizleague_web_core_RouteComponent: 1
});
export { $d_Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$ as $d_Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$ };
$c_Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$.prototype.$classData = $d_Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$;
var $n_Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$;
function $m_Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$() {
  if ((!$n_Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$)) {
    $n_Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$ = new $c_Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$()
  };
  return $n_Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$
}
export { $m_Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$ as $m_Lquizleague_web_maintain_competition_SubsidiaryCompetitionComponent$ };
/** @constructor */
function $c_Lquizleague_web_maintain_fixtures_FixturesComponent$() {
  this.Lquizleague_web_maintain_fixtures_FixturesComponent$__f_fixtureService = null;
  this.Lquizleague_web_maintain_fixtures_FixturesComponent$__f_template = null;
  this.Lquizleague_web_maintain_fixtures_FixturesComponent$__f_service = null;
  this.Lquizleague_web_maintain_fixtures_FixturesComponent$__f_name = null;
  this.Lquizleague_web_maintain_fixtures_FixturesComponent$__f_paramName = null;
  this.Lquizleague_web_maintain_fixtures_FixturesComponent$__f_quizleague$web$core$Component$$addedSubs = null;
  this.Lquizleague_web_maintain_fixtures_FixturesComponent$__f_quizleague$web$core$Component$$addedSubParams = null;
  this.Lquizleague_web_maintain_fixtures_FixturesComponent$__f_quizleague$web$core$Component$$addedProps = null;
  this.Lquizleague_web_maintain_fixtures_FixturesComponent$__f_quizleague$web$core$Component$$addedMethods = null;
  this.Lquizleague_web_maintain_fixtures_FixturesComponent$__f_quizleague$web$core$Component$$addedComputed = null;
  this.Lquizleague_web_maintain_fixtures_FixturesComponent$__f_quizleague$web$core$Component$$addedDataFn = null;
  this.Lquizleague_web_maintain_fixtures_FixturesComponent$__f_quizleague$web$core$Component$$addedData = null;
  this.Lquizleague_web_maintain_fixtures_FixturesComponent$__f_quizleague$web$core$Component$$addedComponents = null;
  this.Lquizleague_web_maintain_fixtures_FixturesComponent$__f_quizleague$web$core$Component$$addedWatch = null;
  this.Lquizleague_web_maintain_fixtures_FixturesComponent$__f_empty = null;
  this.Lquizleague_web_maintain_fixtures_FixturesComponent$__f_quizleague$web$core$Component$$commonMethods = null;
  $n_Lquizleague_web_maintain_fixtures_FixturesComponent$ = this;
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__$init$__V(this);
  $f_Lquizleague_web_maintain_component_ItemComponentConfig__$init$__V(this);
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_RouteComponent__$init$__V(this);
  $f_Lquizleague_web_maintain_competition_CompetitionComponentConfig__$init$__V(this);
  this.Lquizleague_web_maintain_fixtures_FixturesComponent$__f_fixtureService = $m_Lquizleague_web_maintain_fixtures_FixtureService$();
  var array = [$m_Lquizleague_web_maintain_fixtures_FixtureComponent$()];
  var comps = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$ct_sjs_js_WrappedArray__sjs_js_Array__(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjs_js_WrappedArray(), array);
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__components__sc_Seq__V(this, comps);
  this.Lquizleague_web_maintain_fixtures_FixturesComponent$__f_template = (((((((("\n  <v-container v-if=\"item && season && fxs && teams && fixtures && venues\">\n    <h2>Fixtures : {{item.name}}</h2>\n    <v-form v-model=\"valid\">\n    <v-layout column>\n      <v-layout column>\n        <v-text-field label=\"Date\" v-model=\"fxs.date\" type=\"date\" required :rules=" + $m_Lquizleague_web_maintain_component_TemplateElements$().valRequired__T__T("Date")) + "></v-text-field>\n        <v-text-field label=\"Time\" v-model=\"fxs.start\" type=\"time\" required :rules=") + $m_Lquizleague_web_maintain_component_TemplateElements$().valRequired__T__T("Time")) + "></v-text-field>\n        <v-text-field label=\"Description\" v-model=\"fxs.description\" type=\"text\" required :rules=") + $m_Lquizleague_web_maintain_component_TemplateElements$().valRequired__T__T("Description")) + "></v-text-field>\n        <v-text-field label=\"Questions URL\" v-model=\"fxs.questionsUrl\" type=\"text\" ></v-text-field>\n       </v-layout>\n       <v-layout column>\n        <h4>Fixture List</h4>\n        <v-layout row v-if=\"venues && teams\">\n          <v-select label=\"Home\" v-model=\"homeTeam\" :items=\"unusedTeams(awayTeam)\" @input=\"setVenue(homeTeam)\"></v-select>        \n          <v-select label=\"Away\" v-model=\"awayTeam\" :items=\"unusedTeams(homeTeam)\"></v-select>\n          <v-select label=\"Venue\" v-model=\"venue\" :items=\"venues\"></v-select>\n          <v-btn style=\"top:5px;\" icon v-on:click=\"addFixture()\" :disabled=\"!(homeTeam && awayTeam && venue)\"><v-icon >mdi-plus</v-icon></v-btn>\n         </v-layout>\n         <v-layout column>\n          <v-layout row  v-for=\"fixture in fixtures\" :key=\"fixture.id\">\n           <v-btn style=\"top:-14px;\" icon v-on:click=\"removeFixture(fixture)\" ><v-icon>mdi-cancel</v-icon></v-btn>\n           <fixture :fixture=\"fixture\" :fixtures=\"fxs\" :teamManager=\"teamManager\"></fixture>\n          </v-layout>\n         </v-layout>\n        </v-layout>      \n     </v-layout>\n     ") + $m_Lquizleague_web_maintain_component_TemplateElements$().Lquizleague_web_maintain_component_TemplateElements$__f_formButtons) + "\n    </v-form>\n  </v-container>\n  ");
  var fn = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_sjs_js_ThisFunction$().fromFunction1__F1__sjs_js_ThisFunction0(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((c$2) => {
    $m_Lquizleague_web_maintain_fixtures_FixturesComponent$().addFixture__Lquizleague_web_maintain_fixtures_FixturesComponent__V(c$2)
  })));
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__method__T__sjs_js_Function__V(this, "addFixture", fn);
  var fn$1 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_sjs_js_ThisFunction$().fromFunction2__F2__sjs_js_ThisFunction1(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction2(((c$3$2, team$2) => $m_Lquizleague_web_maintain_fixtures_FixturesComponent$().setVenue__Lquizleague_web_maintain_fixtures_FixturesComponent__Lquizleague_web_util_rx_RefObservable__Lrxscalajs_subscription_Subscription(c$3$2, team$2))));
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__method__T__sjs_js_Function__V(this, "setVenue", fn$1);
  var fn$2 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_sjs_js_ThisFunction$().fromFunction2__F2__sjs_js_ThisFunction1(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction2(((c$4$2, other$2) => $m_Lquizleague_web_maintain_fixtures_FixturesComponent$().unusedTeams__Lquizleague_web_maintain_fixtures_FixturesComponent__Lquizleague_web_util_rx_RefObservable__sjs_js_Array(c$4$2, other$2))));
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__method__T__sjs_js_Function__V(this, "unusedTeams", fn$2);
  var fn$3 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_sjs_js_ThisFunction$().fromFunction1__F1__sjs_js_ThisFunction0(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((c$5$2) => {
    $m_Lquizleague_web_maintain_fixtures_FixturesComponent$().save__Lquizleague_web_maintain_fixtures_FixturesComponent__V(c$5$2)
  })));
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__method__T__sjs_js_Function__V(this, "save", fn$3);
  var fn$4 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_sjs_js_ThisFunction$().fromFunction2__F2__sjs_js_ThisFunction1(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction2(((c$6$2, fx$2) => $m_Lquizleague_web_maintain_fixtures_FixturesComponent$().removeFixture__Lquizleague_web_maintain_fixtures_FixturesComponent__Lquizleague_web_model_Fixture__O(c$6$2, fx$2))));
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__method__T__sjs_js_Function__V(this, "removeFixture", fn$4);
  var array$1 = [];
  var fn$5 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((c$7$2) => {
    var this$8 = $m_Lquizleague_web_maintain_fixtures_FixturesComponent$();
    var service = $m_Lquizleague_web_maintain_fixtures_FixturesService$();
    return $f_Lquizleague_web_maintain_component_ItemComponentConfig__obsFromParam__Lquizleague_web_maintain_component_ItemComponent__T__Lquizleague_web_service_GetService__Lrxscalajs_Observable(this$8, c$7$2, "fixturesId", service)
  }));
  this.Lquizleague_web_maintain_fixtures_FixturesComponent$__f_quizleague$web$core$Component$$addedSubs = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.Lquizleague_web_maintain_fixtures_FixturesComponent$__f_quizleague$web$core$Component$$addedSubs).$plus__T2__sci_Map(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2("fxs", fn$5));
  var $$x1 = this.Lquizleague_web_maintain_fixtures_FixturesComponent$__f_quizleague$web$core$Component$$addedSubParams;
  var this$9 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sc_Seq$();
  var bf = this$9.scg_GenTraversableFactory__f_ReusableCBFInstance;
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(bf);
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sjs_js_WrappedArray$();
  var b = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$ct_sjs_js_WrappedArray__(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjs_js_WrappedArray());
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array$1.length);
  var i = 0;
  var len = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array$1.length);
  while ((i < len)) {
    var index = i;
    var arg1 = array$1[index];
    var x$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(arg1);
    var elem = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2(x$1, "fxs");
    b.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.push(elem);
    i = ((1 + i) | 0)
  };
  var this$12 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sci_List$();
  this.Lquizleague_web_maintain_fixtures_FixturesComponent$__f_quizleague$web$core$Component$$addedSubParams = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_sci_List($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($$x1).$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O(b, this$12.scg_GenTraversableFactory__f_ReusableCBFInstance));
  var array$2 = [];
  var fn$6 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((c$8$2) => {
    var this$15 = $m_Lquizleague_web_maintain_fixtures_FixturesComponent$();
    var service$1 = $m_Lquizleague_web_maintain_fixtures_FixturesService$();
    return $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($f_Lquizleague_web_maintain_component_ItemComponentConfig__obsFromParam__Lquizleague_web_maintain_component_ItemComponent__T__Lquizleague_web_service_GetService__Lrxscalajs_Observable(this$15, c$8$2, "fixturesId", service$1)).flatMap__F1__Lrxscalajs_Observable(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((x$3$2) => $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$as_Lrxscalajs_Observable(x$3$2.fixture))))
  }));
  this.Lquizleague_web_maintain_fixtures_FixturesComponent$__f_quizleague$web$core$Component$$addedSubs = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.Lquizleague_web_maintain_fixtures_FixturesComponent$__f_quizleague$web$core$Component$$addedSubs).$plus__T2__sci_Map(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2("fixtures", fn$6));
  var $$x2 = this.Lquizleague_web_maintain_fixtures_FixturesComponent$__f_quizleague$web$core$Component$$addedSubParams;
  var this$16 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sc_Seq$();
  var bf$1 = this$16.scg_GenTraversableFactory__f_ReusableCBFInstance;
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(bf$1);
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sjs_js_WrappedArray$();
  var b$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$ct_sjs_js_WrappedArray__(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjs_js_WrappedArray());
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array$2.length);
  var i$1 = 0;
  var len$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array$2.length);
  while ((i$1 < len$1)) {
    var index$1 = i$1;
    var arg1$1 = array$2[index$1];
    var x$1$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(arg1$1);
    var elem$1 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2(x$1$1, "fixtures");
    b$1.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.push(elem$1);
    i$1 = ((1 + i$1) | 0)
  };
  var this$19 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sci_List$();
  this.Lquizleague_web_maintain_fixtures_FixturesComponent$__f_quizleague$web$core$Component$$addedSubParams = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_sci_List($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($$x2).$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O(b$1, this$19.scg_GenTraversableFactory__f_ReusableCBFInstance));
  var array$3 = [];
  var fn$7 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((c$9$2) => $m_Lquizleague_web_maintain_fixtures_FixturesComponent$().venues__Lrxscalajs_Observable()));
  this.Lquizleague_web_maintain_fixtures_FixturesComponent$__f_quizleague$web$core$Component$$addedSubs = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.Lquizleague_web_maintain_fixtures_FixturesComponent$__f_quizleague$web$core$Component$$addedSubs).$plus__T2__sci_Map(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2("venues", fn$7));
  var $$x3 = this.Lquizleague_web_maintain_fixtures_FixturesComponent$__f_quizleague$web$core$Component$$addedSubParams;
  var this$22 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sc_Seq$();
  var bf$2 = this$22.scg_GenTraversableFactory__f_ReusableCBFInstance;
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(bf$2);
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sjs_js_WrappedArray$();
  var b$2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$ct_sjs_js_WrappedArray__(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjs_js_WrappedArray());
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array$3.length);
  var i$2 = 0;
  var len$2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array$3.length);
  while ((i$2 < len$2)) {
    var index$2 = i$2;
    var arg1$2 = array$3[index$2];
    var x$1$2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(arg1$2);
    var elem$2 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2(x$1$2, "venues");
    b$2.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.push(elem$2);
    i$2 = ((1 + i$2) | 0)
  };
  var this$25 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sci_List$();
  this.Lquizleague_web_maintain_fixtures_FixturesComponent$__f_quizleague$web$core$Component$$addedSubParams = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_sci_List($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($$x3).$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O(b$2, this$25.scg_GenTraversableFactory__f_ReusableCBFInstance));
  var array$4 = [];
  var fn$8 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((c$10$2) => $m_Lquizleague_web_maintain_fixtures_FixturesComponent$().teams__Lrxscalajs_Observable()));
  this.Lquizleague_web_maintain_fixtures_FixturesComponent$__f_quizleague$web$core$Component$$addedSubs = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.Lquizleague_web_maintain_fixtures_FixturesComponent$__f_quizleague$web$core$Component$$addedSubs).$plus__T2__sci_Map(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2("teams", fn$8));
  var $$x4 = this.Lquizleague_web_maintain_fixtures_FixturesComponent$__f_quizleague$web$core$Component$$addedSubParams;
  var this$28 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sc_Seq$();
  var bf$3 = this$28.scg_GenTraversableFactory__f_ReusableCBFInstance;
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(bf$3);
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sjs_js_WrappedArray$();
  var b$3 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$ct_sjs_js_WrappedArray__(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjs_js_WrappedArray());
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array$4.length);
  var i$3 = 0;
  var len$3 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array$4.length);
  while ((i$3 < len$3)) {
    var index$3 = i$3;
    var arg1$3 = array$4[index$3];
    var x$1$3 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(arg1$3);
    var elem$3 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2(x$1$3, "teams");
    b$3.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.push(elem$3);
    i$3 = ((1 + i$3) | 0)
  };
  var this$31 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sci_List$();
  this.Lquizleague_web_maintain_fixtures_FixturesComponent$__f_quizleague$web$core$Component$$addedSubParams = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_sci_List($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($$x4).$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O(b$3, this$31.scg_GenTraversableFactory__f_ReusableCBFInstance));
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__data__T__O__V(this, "teamManager", null);
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__data__T__O__V(this, "venue", null);
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__data__T__O__V(this, "homeTeam", null);
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__data__T__O__V(this, "awayTeam", null)
}
export { $c_Lquizleague_web_maintain_fixtures_FixturesComponent$ as $c_Lquizleague_web_maintain_fixtures_FixturesComponent$ };
$c_Lquizleague_web_maintain_fixtures_FixturesComponent$.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_Lquizleague_web_maintain_fixtures_FixturesComponent$.prototype.constructor = $c_Lquizleague_web_maintain_fixtures_FixturesComponent$;
/** @constructor */
function $h_Lquizleague_web_maintain_fixtures_FixturesComponent$() {
  /*<skip>*/
}
export { $h_Lquizleague_web_maintain_fixtures_FixturesComponent$ as $h_Lquizleague_web_maintain_fixtures_FixturesComponent$ };
$h_Lquizleague_web_maintain_fixtures_FixturesComponent$.prototype = $c_Lquizleague_web_maintain_fixtures_FixturesComponent$.prototype;
$c_Lquizleague_web_maintain_fixtures_FixturesComponent$.prototype.mounted__sjs_js_Function = (function() {
  return null
});
$c_Lquizleague_web_maintain_fixtures_FixturesComponent$.prototype.beforeDestroy__sjs_js_Function = (function() {
  return null
});
$c_Lquizleague_web_maintain_fixtures_FixturesComponent$.prototype.service__Lquizleague_web_maintain_competition_CompetitionService$ = (function() {
  return this.Lquizleague_web_maintain_fixtures_FixturesComponent$__f_service
});
$c_Lquizleague_web_maintain_fixtures_FixturesComponent$.prototype.quizleague$web$maintain$competition$CompetitionComponentConfig$_setter_$service_$eq__Lquizleague_web_maintain_competition_CompetitionService$__V = (function(x$1) {
  this.Lquizleague_web_maintain_fixtures_FixturesComponent$__f_service = x$1
});
$c_Lquizleague_web_maintain_fixtures_FixturesComponent$.prototype.name__T = (function() {
  return this.Lquizleague_web_maintain_fixtures_FixturesComponent$__f_name
});
$c_Lquizleague_web_maintain_fixtures_FixturesComponent$.prototype.quizleague$web$core$RouteComponent$_setter_$name_$eq__T__V = (function(x$1) {
  this.Lquizleague_web_maintain_fixtures_FixturesComponent$__f_name = x$1
});
$c_Lquizleague_web_maintain_fixtures_FixturesComponent$.prototype.paramName__T = (function() {
  return this.Lquizleague_web_maintain_fixtures_FixturesComponent$__f_paramName
});
$c_Lquizleague_web_maintain_fixtures_FixturesComponent$.prototype.quizleague$web$maintain$component$ItemComponentConfig$_setter_$paramName_$eq__T__V = (function(x$1) {
  this.Lquizleague_web_maintain_fixtures_FixturesComponent$__f_paramName = x$1
});
$c_Lquizleague_web_maintain_fixtures_FixturesComponent$.prototype.quizleague$web$core$Component$$addedSubs__sci_Map = (function() {
  return this.Lquizleague_web_maintain_fixtures_FixturesComponent$__f_quizleague$web$core$Component$$addedSubs
});
$c_Lquizleague_web_maintain_fixtures_FixturesComponent$.prototype.quizleague$web$core$Component$$addedSubs_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_fixtures_FixturesComponent$__f_quizleague$web$core$Component$$addedSubs = x$1
});
$c_Lquizleague_web_maintain_fixtures_FixturesComponent$.prototype.quizleague$web$core$Component$$addedSubParams__sci_List = (function() {
  return this.Lquizleague_web_maintain_fixtures_FixturesComponent$__f_quizleague$web$core$Component$$addedSubParams
});
$c_Lquizleague_web_maintain_fixtures_FixturesComponent$.prototype.quizleague$web$core$Component$$addedSubParams_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_fixtures_FixturesComponent$__f_quizleague$web$core$Component$$addedSubParams = x$1
});
$c_Lquizleague_web_maintain_fixtures_FixturesComponent$.prototype.quizleague$web$core$Component$$addedProps__sci_List = (function() {
  return this.Lquizleague_web_maintain_fixtures_FixturesComponent$__f_quizleague$web$core$Component$$addedProps
});
$c_Lquizleague_web_maintain_fixtures_FixturesComponent$.prototype.quizleague$web$core$Component$$addedProps_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_fixtures_FixturesComponent$__f_quizleague$web$core$Component$$addedProps = x$1
});
$c_Lquizleague_web_maintain_fixtures_FixturesComponent$.prototype.quizleague$web$core$Component$$addedMethods__sci_Map = (function() {
  return this.Lquizleague_web_maintain_fixtures_FixturesComponent$__f_quizleague$web$core$Component$$addedMethods
});
$c_Lquizleague_web_maintain_fixtures_FixturesComponent$.prototype.quizleague$web$core$Component$$addedMethods_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_fixtures_FixturesComponent$__f_quizleague$web$core$Component$$addedMethods = x$1
});
$c_Lquizleague_web_maintain_fixtures_FixturesComponent$.prototype.quizleague$web$core$Component$$addedComputed__sci_Map = (function() {
  return this.Lquizleague_web_maintain_fixtures_FixturesComponent$__f_quizleague$web$core$Component$$addedComputed
});
$c_Lquizleague_web_maintain_fixtures_FixturesComponent$.prototype.quizleague$web$core$Component$$addedComputed_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_fixtures_FixturesComponent$__f_quizleague$web$core$Component$$addedComputed = x$1
});
$c_Lquizleague_web_maintain_fixtures_FixturesComponent$.prototype.quizleague$web$core$Component$$addedDataFn__sci_Map = (function() {
  return this.Lquizleague_web_maintain_fixtures_FixturesComponent$__f_quizleague$web$core$Component$$addedDataFn
});
$c_Lquizleague_web_maintain_fixtures_FixturesComponent$.prototype.quizleague$web$core$Component$$addedDataFn_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_fixtures_FixturesComponent$__f_quizleague$web$core$Component$$addedDataFn = x$1
});
$c_Lquizleague_web_maintain_fixtures_FixturesComponent$.prototype.quizleague$web$core$Component$$addedData__sci_Map = (function() {
  return this.Lquizleague_web_maintain_fixtures_FixturesComponent$__f_quizleague$web$core$Component$$addedData
});
$c_Lquizleague_web_maintain_fixtures_FixturesComponent$.prototype.quizleague$web$core$Component$$addedData_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_fixtures_FixturesComponent$__f_quizleague$web$core$Component$$addedData = x$1
});
$c_Lquizleague_web_maintain_fixtures_FixturesComponent$.prototype.quizleague$web$core$Component$$addedComponents__sci_List = (function() {
  return this.Lquizleague_web_maintain_fixtures_FixturesComponent$__f_quizleague$web$core$Component$$addedComponents
});
$c_Lquizleague_web_maintain_fixtures_FixturesComponent$.prototype.quizleague$web$core$Component$$addedComponents_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_fixtures_FixturesComponent$__f_quizleague$web$core$Component$$addedComponents = x$1
});
$c_Lquizleague_web_maintain_fixtures_FixturesComponent$.prototype.quizleague$web$core$Component$$addedWatch__sci_Map = (function() {
  return this.Lquizleague_web_maintain_fixtures_FixturesComponent$__f_quizleague$web$core$Component$$addedWatch
});
$c_Lquizleague_web_maintain_fixtures_FixturesComponent$.prototype.quizleague$web$core$Component$$addedWatch_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_fixtures_FixturesComponent$__f_quizleague$web$core$Component$$addedWatch = x$1
});
$c_Lquizleague_web_maintain_fixtures_FixturesComponent$.prototype.empty__sjs_js_Object = (function() {
  return this.Lquizleague_web_maintain_fixtures_FixturesComponent$__f_empty
});
$c_Lquizleague_web_maintain_fixtures_FixturesComponent$.prototype.quizleague$web$core$Component$$commonMethods__sci_Map = (function() {
  return this.Lquizleague_web_maintain_fixtures_FixturesComponent$__f_quizleague$web$core$Component$$commonMethods
});
$c_Lquizleague_web_maintain_fixtures_FixturesComponent$.prototype.quizleague$web$core$Component$_setter_$empty_$eq__sjs_js_Object__V = (function(x$1) {
  this.Lquizleague_web_maintain_fixtures_FixturesComponent$__f_empty = x$1
});
$c_Lquizleague_web_maintain_fixtures_FixturesComponent$.prototype.quizleague$web$core$Component$_setter_$quizleague$web$core$Component$$commonMethods_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_fixtures_FixturesComponent$__f_quizleague$web$core$Component$$commonMethods = x$1
});
$c_Lquizleague_web_maintain_fixtures_FixturesComponent$.prototype.parentKey__Lquizleague_web_maintain_fixtures_FixturesComponent__T = (function(c) {
  var dict = c.$route.params;
  if ((!$j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uZ($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sjs_js_WrappedDictionary$Cache$().sjs_js_WrappedDictionary$Cache$__f_safeHasOwnProperty.call(dict, "seasonId")))) {
    throw $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$ct_ju_NoSuchElementException__T__(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_ju_NoSuchElementException(), "key not found: seasonId")
  };
  var $$x1 = dict.seasonId;
  var dict$1 = c.$route.params;
  if ((!$j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uZ($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sjs_js_WrappedDictionary$Cache$().sjs_js_WrappedDictionary$Cache$__f_safeHasOwnProperty.call(dict$1, "id")))) {
    throw $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$ct_ju_NoSuchElementException__T__(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_ju_NoSuchElementException(), "key not found: id")
  };
  return ((("season/" + $$x1) + "/competition/") + dict$1.id)
});
$c_Lquizleague_web_maintain_fixtures_FixturesComponent$.prototype.template__T = (function() {
  return this.Lquizleague_web_maintain_fixtures_FixturesComponent$__f_template
});
$c_Lquizleague_web_maintain_fixtures_FixturesComponent$.prototype.unusedTeams__Lquizleague_web_maintain_fixtures_FixturesComponent__Lquizleague_web_util_rx_RefObservable__sjs_js_Array = (function(c, other) {
  return $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.teamManager__Lquizleague_web_maintain_fixtures_FixturesComponent__Lquizleague_web_maintain_util_TeamManager(c)).unusedTeams__Lquizleague_web_util_rx_RefObservable__sjs_js_Array(other)
});
$c_Lquizleague_web_maintain_fixtures_FixturesComponent$.prototype.setVenue__Lquizleague_web_maintain_fixtures_FixturesComponent__Lquizleague_web_util_rx_RefObservable__Lrxscalajs_subscription_Subscription = (function(c, team) {
  var this$1 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_maintain_team_TeamService$();
  var id = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(team.id);
  var qual$1 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__get__T__Lrxscalajs_Observable(this$1, id);
  var x$1 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((t$2) => {
    c.venue = t$2.venue
  }));
  var x$2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(qual$1).subscribe$default$2__F1();
  var x$3 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(qual$1).subscribe$default$3__F0();
  return $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(qual$1).subscribe__F1__F1__F0__Lrxscalajs_subscription_Subscription(x$1, x$2, x$3)
});
$c_Lquizleague_web_maintain_fixtures_FixturesComponent$.prototype.addFixture__Lquizleague_web_maintain_fixtures_FixturesComponent__V = (function(c) {
  var this$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.Lquizleague_web_maintain_fixtures_FixturesComponent$__f_fixtureService);
  var fx = c.fxs;
  var home = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.teamManager__Lquizleague_web_maintain_fixtures_FixturesComponent__Lquizleague_web_maintain_util_TeamManager(c)).take__Lquizleague_web_util_rx_RefObservable__Lquizleague_web_util_rx_RefObservable(c.homeTeam);
  var away = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.teamManager__Lquizleague_web_maintain_fixtures_FixturesComponent__Lquizleague_web_maintain_util_TeamManager(c)).take__Lquizleague_web_util_rx_RefObservable__Lquizleague_web_util_rx_RefObservable(c.awayTeam);
  var venue = c.venue;
  var subsidiary = ($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(c.item.typeName) === $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_model_CompetitionType$().Lquizleague_web_model_CompetitionType$__f_subsidiary).toString__T());
  var f = $f_Lquizleague_web_service_fixtures_FixturePutService__instance__Lquizleague_web_model_Fixtures__Lquizleague_web_util_rx_RefObservable__Lquizleague_web_util_rx_RefObservable__Lquizleague_web_util_rx_RefObservable__Z__Lquizleague_web_model_Fixture(this$1, fx, home, away, venue, subsidiary);
  var this$2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.Lquizleague_web_maintain_fixtures_FixturesComponent$__f_fixtureService);
  var qual$1 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_PutService__save__Lquizleague_web_model_Model__Lrxscalajs_Observable(this$2, f);
  var x$1 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((x$2) => {
    $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_jl_Void(x$2);
    c.$forceUpdate()
  }));
  var x$2$2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(qual$1).subscribe$default$2__F1();
  var x$3 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(qual$1).subscribe$default$3__F0();
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(qual$1).subscribe__F1__F1__F0__Lrxscalajs_subscription_Subscription(x$1, x$2$2, x$3);
  c.homeTeam = null;
  c.awayTeam = null;
  c.venue = null
});
$c_Lquizleague_web_maintain_fixtures_FixturesComponent$.prototype.removeFixture__Lquizleague_web_maintain_fixtures_FixturesComponent__Lquizleague_web_model_Fixture__O = (function(c, fx) {
  if ($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uZ(window.confirm("Delete ?"))) {
    $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($as_Lquizleague_web_maintain_util_TeamManager(c.teamManager)).untake__Lquizleague_web_util_rx_RefObservable__V(fx.home);
    $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($as_Lquizleague_web_maintain_util_TeamManager(c.teamManager)).untake__Lquizleague_web_util_rx_RefObservable__V(fx.away);
    var this$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.Lquizleague_web_maintain_fixtures_FixturesComponent$__f_fixtureService);
    var qual$1 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_PutService__delete__Lquizleague_web_model_Model__Lrxscalajs_Observable(this$1, fx);
    var x$1 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((x$2) => {
      $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_jl_Void(x$2);
      c.$forceUpdate()
    }));
    var x$2$2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(qual$1).subscribe$default$2__F1();
    var x$3 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(qual$1).subscribe$default$3__F0();
    return $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(qual$1).subscribe__F1__F1__F0__Lrxscalajs_subscription_Subscription(x$1, x$2$2, x$3)
  } else {
    return (void 0)
  }
});
$c_Lquizleague_web_maintain_fixtures_FixturesComponent$.prototype.teamManager__Lquizleague_web_maintain_fixtures_FixturesComponent__Lquizleague_web_maintain_util_TeamManager = (function(c) {
  if (($as_Lquizleague_web_maintain_util_TeamManager(c.teamManager) === null)) {
    c.teamManager = new $c_Lquizleague_web_maintain_util_TeamManager(c.teams);
    return $as_Lquizleague_web_maintain_util_TeamManager(c.teamManager)
  } else {
    return $as_Lquizleague_web_maintain_util_TeamManager(c.teamManager)
  }
});
$c_Lquizleague_web_maintain_fixtures_FixturesComponent$.prototype.venues__Lrxscalajs_Observable = (function() {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_util_component_SelectUtils$().model__Lquizleague_web_service_GetService__F1__Lrxscalajs_Observable($m_Lquizleague_web_maintain_fixtures_FilteredVenueService$(), new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((x$1$2) => $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(x$1$2.name))))
});
$c_Lquizleague_web_maintain_fixtures_FixturesComponent$.prototype.teams__Lrxscalajs_Observable = (function() {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_util_component_SelectUtils$().model__Lquizleague_web_service_GetService__F1__Lrxscalajs_Observable($m_Lquizleague_web_maintain_fixtures_FilteredTeamService$(), new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((x$2$2) => $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(x$2$2.name))))
});
$c_Lquizleague_web_maintain_fixtures_FixturesComponent$.prototype.save__Lquizleague_web_maintain_fixtures_FixturesComponent__V = (function(c) {
  var item = c.fxs;
  var this$1 = $m_Lquizleague_web_maintain_fixtures_FixturesService$();
  var parentKey = this.parentKey__Lquizleague_web_maintain_fixtures_FixturesComponent__T(c);
  var id = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(item.id);
  item.key = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__key__T__T__Lquizleague_web_model_Key(this$1, parentKey, id);
  var this$2 = $m_Lquizleague_web_maintain_fixtures_FixturesService$();
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_PutService__save__Lquizleague_web_model_Model__Lrxscalajs_Observable(this$2, item);
  c.$router.back()
});
$c_Lquizleague_web_maintain_fixtures_FixturesComponent$.prototype.service__Lquizleague_web_service_GetService = (function() {
  return this.Lquizleague_web_maintain_fixtures_FixturesComponent$__f_service
});
$c_Lquizleague_web_maintain_fixtures_FixturesComponent$.prototype.save__Lquizleague_web_maintain_component_ItemComponent__V = (function(c) {
  this.save__Lquizleague_web_maintain_fixtures_FixturesComponent__V(c)
});
$c_Lquizleague_web_maintain_fixtures_FixturesComponent$.prototype.parentKey__Lquizleague_web_maintain_component_ItemComponent__T = (function(c) {
  return this.parentKey__Lquizleague_web_maintain_fixtures_FixturesComponent__T(c)
});
var $d_Lquizleague_web_maintain_fixtures_FixturesComponent$ = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  Lquizleague_web_maintain_fixtures_FixturesComponent$: 0
}, false, "quizleague.web.maintain.fixtures.FixturesComponent$", {
  Lquizleague_web_maintain_fixtures_FixturesComponent$: 1,
  O: 1,
  Lquizleague_web_maintain_competition_CompetitionComponentConfig: 1,
  Lquizleague_web_maintain_component_ItemComponentConfig: 1,
  Lquizleague_web_core_Component: 1,
  Lquizleague_web_core_RouteComponent: 1
});
export { $d_Lquizleague_web_maintain_fixtures_FixturesComponent$ as $d_Lquizleague_web_maintain_fixtures_FixturesComponent$ };
$c_Lquizleague_web_maintain_fixtures_FixturesComponent$.prototype.$classData = $d_Lquizleague_web_maintain_fixtures_FixturesComponent$;
var $n_Lquizleague_web_maintain_fixtures_FixturesComponent$;
function $m_Lquizleague_web_maintain_fixtures_FixturesComponent$() {
  if ((!$n_Lquizleague_web_maintain_fixtures_FixturesComponent$)) {
    $n_Lquizleague_web_maintain_fixtures_FixturesComponent$ = new $c_Lquizleague_web_maintain_fixtures_FixturesComponent$()
  };
  return $n_Lquizleague_web_maintain_fixtures_FixturesComponent$
}
export { $m_Lquizleague_web_maintain_fixtures_FixturesComponent$ as $m_Lquizleague_web_maintain_fixtures_FixturesComponent$ };
/** @constructor */
function $c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$() {
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$__f_template = null;
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$__f_service = null;
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$__f_typeName = null;
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$__f_name = null;
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$__f_quizleague$web$core$Component$$addedSubs = null;
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$__f_quizleague$web$core$Component$$addedSubParams = null;
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$__f_quizleague$web$core$Component$$addedProps = null;
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$__f_quizleague$web$core$Component$$addedMethods = null;
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$__f_quizleague$web$core$Component$$addedComputed = null;
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$__f_quizleague$web$core$Component$$addedDataFn = null;
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$__f_quizleague$web$core$Component$$addedData = null;
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$__f_quizleague$web$core$Component$$addedComponents = null;
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$__f_quizleague$web$core$Component$$addedWatch = null;
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$__f_empty = null;
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$__f_quizleague$web$core$Component$$commonMethods = null;
  $n_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$ = this;
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__$init$__V(this);
  $f_Lquizleague_web_maintain_component_ItemListComponentConfig__$init$__V(this);
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_RouteComponent__$init$__V(this);
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$__f_typeName = "competitionstatistics";
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$__f_template = (("\n  <v-container>\n    <v-layout column>\n      <div v-for=\"item in items\" :key=\"item.id\">\n        <v-btn :to=\"'competitionstatistics/' + item.id\" text left>{{item.competitionName}}</v-btn>\n      </div>\n      " + $m_Lquizleague_web_maintain_component_TemplateElements$().Lquizleague_web_maintain_component_TemplateElements$__f_addFAB) + "\n    </v-layout>\n  </v-container>\n");
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$__f_service = $m_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$()
}
export { $c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$ as $c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$ };
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$.prototype.constructor = $c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$;
/** @constructor */
function $h_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$() {
  /*<skip>*/
}
export { $h_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$ as $h_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$ };
$h_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$.prototype = $c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$.prototype;
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$.prototype.mounted__sjs_js_Function = (function() {
  return null
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$.prototype.beforeDestroy__sjs_js_Function = (function() {
  return null
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$.prototype.typeName__T = (function() {
  return this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$__f_typeName
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$.prototype.name__T = (function() {
  return this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$__f_name
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$.prototype.quizleague$web$core$RouteComponent$_setter_$name_$eq__T__V = (function(x$1) {
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$__f_name = x$1
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$.prototype.quizleague$web$core$Component$$addedSubs__sci_Map = (function() {
  return this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$__f_quizleague$web$core$Component$$addedSubs
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$.prototype.quizleague$web$core$Component$$addedSubs_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$__f_quizleague$web$core$Component$$addedSubs = x$1
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$.prototype.quizleague$web$core$Component$$addedSubParams__sci_List = (function() {
  return this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$__f_quizleague$web$core$Component$$addedSubParams
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$.prototype.quizleague$web$core$Component$$addedSubParams_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$__f_quizleague$web$core$Component$$addedSubParams = x$1
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$.prototype.quizleague$web$core$Component$$addedProps__sci_List = (function() {
  return this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$__f_quizleague$web$core$Component$$addedProps
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$.prototype.quizleague$web$core$Component$$addedProps_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$__f_quizleague$web$core$Component$$addedProps = x$1
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$.prototype.quizleague$web$core$Component$$addedMethods__sci_Map = (function() {
  return this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$__f_quizleague$web$core$Component$$addedMethods
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$.prototype.quizleague$web$core$Component$$addedMethods_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$__f_quizleague$web$core$Component$$addedMethods = x$1
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$.prototype.quizleague$web$core$Component$$addedComputed__sci_Map = (function() {
  return this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$__f_quizleague$web$core$Component$$addedComputed
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$.prototype.quizleague$web$core$Component$$addedComputed_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$__f_quizleague$web$core$Component$$addedComputed = x$1
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$.prototype.quizleague$web$core$Component$$addedDataFn__sci_Map = (function() {
  return this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$__f_quizleague$web$core$Component$$addedDataFn
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$.prototype.quizleague$web$core$Component$$addedDataFn_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$__f_quizleague$web$core$Component$$addedDataFn = x$1
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$.prototype.quizleague$web$core$Component$$addedData__sci_Map = (function() {
  return this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$__f_quizleague$web$core$Component$$addedData
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$.prototype.quizleague$web$core$Component$$addedData_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$__f_quizleague$web$core$Component$$addedData = x$1
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$.prototype.quizleague$web$core$Component$$addedComponents__sci_List = (function() {
  return this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$__f_quizleague$web$core$Component$$addedComponents
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$.prototype.quizleague$web$core$Component$$addedComponents_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$__f_quizleague$web$core$Component$$addedComponents = x$1
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$.prototype.quizleague$web$core$Component$$addedWatch__sci_Map = (function() {
  return this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$__f_quizleague$web$core$Component$$addedWatch
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$.prototype.quizleague$web$core$Component$$addedWatch_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$__f_quizleague$web$core$Component$$addedWatch = x$1
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$.prototype.empty__sjs_js_Object = (function() {
  return this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$__f_empty
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$.prototype.quizleague$web$core$Component$$commonMethods__sci_Map = (function() {
  return this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$__f_quizleague$web$core$Component$$commonMethods
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$.prototype.quizleague$web$core$Component$_setter_$empty_$eq__sjs_js_Object__V = (function(x$1) {
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$__f_empty = x$1
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$.prototype.quizleague$web$core$Component$_setter_$quizleague$web$core$Component$$commonMethods_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$__f_quizleague$web$core$Component$$commonMethods = x$1
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$.prototype.sort__sjs_js_Array__sjs_js_Array = (function(items) {
  var f = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((x$1$2) => $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(x$1$2.competitionName)));
  var ord = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_s_math_Ordering$String$();
  var ord$1 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_s_math_Ordering$$anon$1(ord, f);
  var len = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(items.length);
  var array = [];
  if ((len === 1)) {
    var i = 0;
    var len$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(items.length);
    while ((i < len$1)) {
      var index = i;
      var arg1 = items[index];
      array.push(arg1);
      i = ((1 + i) | 0)
    }
  } else if ((len > 1)) {
    var arr = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$ac_O(len);
    var elem = 0;
    elem = 0;
    var i$1 = 0;
    var len$2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(items.length);
    while ((i$1 < len$2)) {
      var index$1 = i$1;
      var arg1$1 = items[index$1];
      $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(arr).set(elem, arg1$1);
      elem = ((1 + elem) | 0);
      i$1 = ((1 + i$1) | 0)
    };
    $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_ju_Arrays$().sort__AO__ju_Comparator__V(arr, ord$1);
    elem = 0;
    while ((elem < $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(arr).u.length)) {
      var elem$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(arr).get(elem);
      array.push(elem$1);
      elem = ((1 + elem) | 0)
    }
  };
  return array
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$.prototype.template__T = (function() {
  return this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$__f_template
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$.prototype.service__Lquizleague_web_service_GetService = (function() {
  return this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$__f_service
});
var $d_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$ = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$: 0
}, false, "quizleague.web.maintain.competitionstatistics.CompetitionStatisticsListComponent$", {
  Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$: 1,
  O: 1,
  Lquizleague_web_maintain_component_ItemListComponentConfig: 1,
  Lquizleague_web_core_Component: 1,
  Lquizleague_web_core_RouteComponent: 1,
  Lquizleague_web_names_CompetitionStatisticsNames: 1,
  Lquizleague_web_names_ComponentNames: 1
});
export { $d_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$ as $d_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$ };
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$.prototype.$classData = $d_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$;
var $n_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$;
function $m_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$() {
  if ((!$n_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$)) {
    $n_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$ = new $c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$()
  };
  return $n_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$
}
export { $m_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$ as $m_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsListComponent$ };
function $p_Lquizleague_web_maintain_fixtures_FilteredTeamService$__uriRoot$lzycompute__T($thiz) {
  if ((!$thiz.Lquizleague_web_maintain_fixtures_FilteredTeamService$__f_bitmap$0)) {
    $thiz.Lquizleague_web_maintain_fixtures_FilteredTeamService$__f_uriRoot = $thiz.Lquizleague_web_maintain_fixtures_FilteredTeamService$__f_typeName;
    $thiz.Lquizleague_web_maintain_fixtures_FilteredTeamService$__f_bitmap$0 = true
  };
  return $thiz.Lquizleague_web_maintain_fixtures_FilteredTeamService$__f_uriRoot
}
export { $p_Lquizleague_web_maintain_fixtures_FilteredTeamService$__uriRoot$lzycompute__T as $p_Lquizleague_web_maintain_fixtures_FilteredTeamService$__uriRoot$lzycompute__T };
/** @constructor */
function $c_Lquizleague_web_maintain_fixtures_FilteredTeamService$() {
  this.Lquizleague_web_maintain_fixtures_FilteredTeamService$__f_userService = null;
  this.Lquizleague_web_maintain_fixtures_FilteredTeamService$__f_venueService = null;
  this.Lquizleague_web_maintain_fixtures_FilteredTeamService$__f_textService = null;
  this.Lquizleague_web_maintain_fixtures_FilteredTeamService$__f_typeName = null;
  this.Lquizleague_web_maintain_fixtures_FilteredTeamService$__f_uriRoot = null;
  this.Lquizleague_web_maintain_fixtures_FilteredTeamService$__f_db = null;
  this.Lquizleague_web_maintain_fixtures_FilteredTeamService$__f_items = null;
  this.Lquizleague_web_maintain_fixtures_FilteredTeamService$__f_quizleague$web$service$GetService$$observables = null;
  this.Lquizleague_web_maintain_fixtures_FilteredTeamService$__f_quizleague$web$service$GetService$$refObsCache = null;
  this.Lquizleague_web_maintain_fixtures_FilteredTeamService$__f_quizleague$web$service$GetService$$listObservables = null;
  this.Lquizleague_web_maintain_fixtures_FilteredTeamService$__f_bitmap$0 = false;
  $n_Lquizleague_web_maintain_fixtures_FilteredTeamService$ = this;
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__$init$__V(this);
  this.Lquizleague_web_maintain_fixtures_FilteredTeamService$__f_typeName = "team";
  this.Lquizleague_web_maintain_fixtures_FilteredTeamService$__f_userService = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_maintain_user_UserService$();
  this.Lquizleague_web_maintain_fixtures_FilteredTeamService$__f_venueService = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_maintain_venue_VenueService$();
  this.Lquizleague_web_maintain_fixtures_FilteredTeamService$__f_textService = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_maintain_text_TextService$()
}
export { $c_Lquizleague_web_maintain_fixtures_FilteredTeamService$ as $c_Lquizleague_web_maintain_fixtures_FilteredTeamService$ };
$c_Lquizleague_web_maintain_fixtures_FilteredTeamService$.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_Lquizleague_web_maintain_fixtures_FilteredTeamService$.prototype.constructor = $c_Lquizleague_web_maintain_fixtures_FilteredTeamService$;
/** @constructor */
function $h_Lquizleague_web_maintain_fixtures_FilteredTeamService$() {
  /*<skip>*/
}
export { $h_Lquizleague_web_maintain_fixtures_FilteredTeamService$ as $h_Lquizleague_web_maintain_fixtures_FilteredTeamService$ };
$h_Lquizleague_web_maintain_fixtures_FilteredTeamService$.prototype = $c_Lquizleague_web_maintain_fixtures_FilteredTeamService$.prototype;
$c_Lquizleague_web_maintain_fixtures_FilteredTeamService$.prototype.filterList__Lquizleague_domain_Entity__Z = (function(u) {
  return (!$j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(u).retired__Z())
});
$c_Lquizleague_web_maintain_fixtures_FilteredTeamService$.prototype.flush__V = (function() {
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_team_TeamGetService__flush__V(this)
});
$c_Lquizleague_web_maintain_fixtures_FilteredTeamService$.prototype.dec__sjs_js_Any__s_util_Either = (function(json) {
  var dec = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_util_json_codecs_DomainCodecs$().Lquizleague_util_json_codecs_DomainCodecs$__f_teamDecoder;
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__decodeJson__sjs_js_Any__Lio_circe_Decoder__s_util_Either(this, json, dec)
});
$c_Lquizleague_web_maintain_fixtures_FilteredTeamService$.prototype.typeName__T = (function() {
  return this.Lquizleague_web_maintain_fixtures_FilteredTeamService$__f_typeName
});
$c_Lquizleague_web_maintain_fixtures_FilteredTeamService$.prototype.uriRoot__T = (function() {
  return ((!this.Lquizleague_web_maintain_fixtures_FilteredTeamService$__f_bitmap$0) ? $p_Lquizleague_web_maintain_fixtures_FilteredTeamService$__uriRoot$lzycompute__T(this) : this.Lquizleague_web_maintain_fixtures_FilteredTeamService$__f_uriRoot)
});
$c_Lquizleague_web_maintain_fixtures_FilteredTeamService$.prototype.db__Lfirebase_firestore_Firestore = (function() {
  return this.Lquizleague_web_maintain_fixtures_FilteredTeamService$__f_db
});
$c_Lquizleague_web_maintain_fixtures_FilteredTeamService$.prototype.items__scm_Map = (function() {
  return this.Lquizleague_web_maintain_fixtures_FilteredTeamService$__f_items
});
$c_Lquizleague_web_maintain_fixtures_FilteredTeamService$.prototype.quizleague$web$service$GetService$$observables__scm_Map = (function() {
  return this.Lquizleague_web_maintain_fixtures_FilteredTeamService$__f_quizleague$web$service$GetService$$observables
});
$c_Lquizleague_web_maintain_fixtures_FilteredTeamService$.prototype.quizleague$web$service$GetService$$refObsCache__scm_Map = (function() {
  return this.Lquizleague_web_maintain_fixtures_FilteredTeamService$__f_quizleague$web$service$GetService$$refObsCache
});
$c_Lquizleague_web_maintain_fixtures_FilteredTeamService$.prototype.quizleague$web$service$GetService$$listObservables__scm_Map = (function() {
  return this.Lquizleague_web_maintain_fixtures_FilteredTeamService$__f_quizleague$web$service$GetService$$listObservables
});
$c_Lquizleague_web_maintain_fixtures_FilteredTeamService$.prototype.quizleague$web$service$GetService$$listObservables_$eq__scm_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_fixtures_FilteredTeamService$__f_quizleague$web$service$GetService$$listObservables = x$1
});
$c_Lquizleague_web_maintain_fixtures_FilteredTeamService$.prototype.quizleague$web$service$GetService$_setter_$db_$eq__Lfirebase_firestore_Firestore__V = (function(x$1) {
  this.Lquizleague_web_maintain_fixtures_FilteredTeamService$__f_db = x$1
});
$c_Lquizleague_web_maintain_fixtures_FilteredTeamService$.prototype.quizleague$web$service$GetService$_setter_$items_$eq__scm_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_fixtures_FilteredTeamService$__f_items = x$1
});
$c_Lquizleague_web_maintain_fixtures_FilteredTeamService$.prototype.quizleague$web$service$GetService$_setter_$quizleague$web$service$GetService$$observables_$eq__scm_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_fixtures_FilteredTeamService$__f_quizleague$web$service$GetService$$observables = x$1
});
$c_Lquizleague_web_maintain_fixtures_FilteredTeamService$.prototype.quizleague$web$service$GetService$_setter_$quizleague$web$service$GetService$$refObsCache_$eq__scm_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_fixtures_FilteredTeamService$__f_quizleague$web$service$GetService$$refObsCache = x$1
});
$c_Lquizleague_web_maintain_fixtures_FilteredTeamService$.prototype.mapOutSparse__Lquizleague_domain_Entity__Lquizleague_web_model_Model = (function(domain) {
  var team = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$as_Lquizleague_domain_Team(domain);
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_team_TeamGetService__mapOutSparse__Lquizleague_domain_Team__Lquizleague_web_model_Team(this, team)
});
$c_Lquizleague_web_maintain_fixtures_FilteredTeamService$.prototype.textService__Lquizleague_web_service_text_TextGetService = (function() {
  return this.Lquizleague_web_maintain_fixtures_FilteredTeamService$__f_textService
});
$c_Lquizleague_web_maintain_fixtures_FilteredTeamService$.prototype.venueService__Lquizleague_web_service_venue_VenueGetService = (function() {
  return this.Lquizleague_web_maintain_fixtures_FilteredTeamService$__f_venueService
});
$c_Lquizleague_web_maintain_fixtures_FilteredTeamService$.prototype.userService__Lquizleague_web_service_user_UserGetService = (function() {
  return this.Lquizleague_web_maintain_fixtures_FilteredTeamService$__f_userService
});
var $d_Lquizleague_web_maintain_fixtures_FilteredTeamService$ = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  Lquizleague_web_maintain_fixtures_FilteredTeamService$: 0
}, false, "quizleague.web.maintain.fixtures.FilteredTeamService$", {
  Lquizleague_web_maintain_fixtures_FilteredTeamService$: 1,
  O: 1,
  Lquizleague_web_service_team_TeamGetService: 1,
  Lquizleague_web_service_GetService: 1,
  Lquizleague_web_names_TeamNames: 1,
  Lquizleague_web_names_ComponentNames: 1,
  Lquizleague_web_service_RetiredFilter: 1
});
export { $d_Lquizleague_web_maintain_fixtures_FilteredTeamService$ as $d_Lquizleague_web_maintain_fixtures_FilteredTeamService$ };
$c_Lquizleague_web_maintain_fixtures_FilteredTeamService$.prototype.$classData = $d_Lquizleague_web_maintain_fixtures_FilteredTeamService$;
var $n_Lquizleague_web_maintain_fixtures_FilteredTeamService$;
function $m_Lquizleague_web_maintain_fixtures_FilteredTeamService$() {
  if ((!$n_Lquizleague_web_maintain_fixtures_FilteredTeamService$)) {
    $n_Lquizleague_web_maintain_fixtures_FilteredTeamService$ = new $c_Lquizleague_web_maintain_fixtures_FilteredTeamService$()
  };
  return $n_Lquizleague_web_maintain_fixtures_FilteredTeamService$
}
export { $m_Lquizleague_web_maintain_fixtures_FilteredTeamService$ as $m_Lquizleague_web_maintain_fixtures_FilteredTeamService$ };
function $p_Lquizleague_web_maintain_fixtures_FilteredVenueService$__uriRoot$lzycompute__T($thiz) {
  if ((!$thiz.Lquizleague_web_maintain_fixtures_FilteredVenueService$__f_bitmap$0)) {
    $thiz.Lquizleague_web_maintain_fixtures_FilteredVenueService$__f_uriRoot = $thiz.Lquizleague_web_maintain_fixtures_FilteredVenueService$__f_typeName;
    $thiz.Lquizleague_web_maintain_fixtures_FilteredVenueService$__f_bitmap$0 = true
  };
  return $thiz.Lquizleague_web_maintain_fixtures_FilteredVenueService$__f_uriRoot
}
export { $p_Lquizleague_web_maintain_fixtures_FilteredVenueService$__uriRoot$lzycompute__T as $p_Lquizleague_web_maintain_fixtures_FilteredVenueService$__uriRoot$lzycompute__T };
/** @constructor */
function $c_Lquizleague_web_maintain_fixtures_FilteredVenueService$() {
  this.Lquizleague_web_maintain_fixtures_FilteredVenueService$__f_typeName = null;
  this.Lquizleague_web_maintain_fixtures_FilteredVenueService$__f_uriRoot = null;
  this.Lquizleague_web_maintain_fixtures_FilteredVenueService$__f_db = null;
  this.Lquizleague_web_maintain_fixtures_FilteredVenueService$__f_items = null;
  this.Lquizleague_web_maintain_fixtures_FilteredVenueService$__f_quizleague$web$service$GetService$$observables = null;
  this.Lquizleague_web_maintain_fixtures_FilteredVenueService$__f_quizleague$web$service$GetService$$refObsCache = null;
  this.Lquizleague_web_maintain_fixtures_FilteredVenueService$__f_quizleague$web$service$GetService$$listObservables = null;
  this.Lquizleague_web_maintain_fixtures_FilteredVenueService$__f_bitmap$0 = false;
  $n_Lquizleague_web_maintain_fixtures_FilteredVenueService$ = this;
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__$init$__V(this);
  this.Lquizleague_web_maintain_fixtures_FilteredVenueService$__f_typeName = "venue"
}
export { $c_Lquizleague_web_maintain_fixtures_FilteredVenueService$ as $c_Lquizleague_web_maintain_fixtures_FilteredVenueService$ };
$c_Lquizleague_web_maintain_fixtures_FilteredVenueService$.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_Lquizleague_web_maintain_fixtures_FilteredVenueService$.prototype.constructor = $c_Lquizleague_web_maintain_fixtures_FilteredVenueService$;
/** @constructor */
function $h_Lquizleague_web_maintain_fixtures_FilteredVenueService$() {
  /*<skip>*/
}
export { $h_Lquizleague_web_maintain_fixtures_FilteredVenueService$ as $h_Lquizleague_web_maintain_fixtures_FilteredVenueService$ };
$h_Lquizleague_web_maintain_fixtures_FilteredVenueService$.prototype = $c_Lquizleague_web_maintain_fixtures_FilteredVenueService$.prototype;
$c_Lquizleague_web_maintain_fixtures_FilteredVenueService$.prototype.filterList__Lquizleague_domain_Entity__Z = (function(u) {
  return (!$j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(u).retired__Z())
});
$c_Lquizleague_web_maintain_fixtures_FilteredVenueService$.prototype.dec__sjs_js_Any__s_util_Either = (function(json) {
  var dec = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_util_json_codecs_DomainCodecs$().Lquizleague_util_json_codecs_DomainCodecs$__f_venueDecoder;
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__decodeJson__sjs_js_Any__Lio_circe_Decoder__s_util_Either(this, json, dec)
});
$c_Lquizleague_web_maintain_fixtures_FilteredVenueService$.prototype.flush__V = (function() {
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.Lquizleague_web_maintain_fixtures_FilteredVenueService$__f_items).clear__V()
});
$c_Lquizleague_web_maintain_fixtures_FilteredVenueService$.prototype.typeName__T = (function() {
  return this.Lquizleague_web_maintain_fixtures_FilteredVenueService$__f_typeName
});
$c_Lquizleague_web_maintain_fixtures_FilteredVenueService$.prototype.uriRoot__T = (function() {
  return ((!this.Lquizleague_web_maintain_fixtures_FilteredVenueService$__f_bitmap$0) ? $p_Lquizleague_web_maintain_fixtures_FilteredVenueService$__uriRoot$lzycompute__T(this) : this.Lquizleague_web_maintain_fixtures_FilteredVenueService$__f_uriRoot)
});
$c_Lquizleague_web_maintain_fixtures_FilteredVenueService$.prototype.db__Lfirebase_firestore_Firestore = (function() {
  return this.Lquizleague_web_maintain_fixtures_FilteredVenueService$__f_db
});
$c_Lquizleague_web_maintain_fixtures_FilteredVenueService$.prototype.items__scm_Map = (function() {
  return this.Lquizleague_web_maintain_fixtures_FilteredVenueService$__f_items
});
$c_Lquizleague_web_maintain_fixtures_FilteredVenueService$.prototype.quizleague$web$service$GetService$$observables__scm_Map = (function() {
  return this.Lquizleague_web_maintain_fixtures_FilteredVenueService$__f_quizleague$web$service$GetService$$observables
});
$c_Lquizleague_web_maintain_fixtures_FilteredVenueService$.prototype.quizleague$web$service$GetService$$refObsCache__scm_Map = (function() {
  return this.Lquizleague_web_maintain_fixtures_FilteredVenueService$__f_quizleague$web$service$GetService$$refObsCache
});
$c_Lquizleague_web_maintain_fixtures_FilteredVenueService$.prototype.quizleague$web$service$GetService$$listObservables__scm_Map = (function() {
  return this.Lquizleague_web_maintain_fixtures_FilteredVenueService$__f_quizleague$web$service$GetService$$listObservables
});
$c_Lquizleague_web_maintain_fixtures_FilteredVenueService$.prototype.quizleague$web$service$GetService$$listObservables_$eq__scm_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_fixtures_FilteredVenueService$__f_quizleague$web$service$GetService$$listObservables = x$1
});
$c_Lquizleague_web_maintain_fixtures_FilteredVenueService$.prototype.quizleague$web$service$GetService$_setter_$db_$eq__Lfirebase_firestore_Firestore__V = (function(x$1) {
  this.Lquizleague_web_maintain_fixtures_FilteredVenueService$__f_db = x$1
});
$c_Lquizleague_web_maintain_fixtures_FilteredVenueService$.prototype.quizleague$web$service$GetService$_setter_$items_$eq__scm_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_fixtures_FilteredVenueService$__f_items = x$1
});
$c_Lquizleague_web_maintain_fixtures_FilteredVenueService$.prototype.quizleague$web$service$GetService$_setter_$quizleague$web$service$GetService$$observables_$eq__scm_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_fixtures_FilteredVenueService$__f_quizleague$web$service$GetService$$observables = x$1
});
$c_Lquizleague_web_maintain_fixtures_FilteredVenueService$.prototype.quizleague$web$service$GetService$_setter_$quizleague$web$service$GetService$$refObsCache_$eq__scm_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_fixtures_FilteredVenueService$__f_quizleague$web$service$GetService$$refObsCache = x$1
});
$c_Lquizleague_web_maintain_fixtures_FilteredVenueService$.prototype.mapOutSparse__Lquizleague_domain_Entity__Lquizleague_web_model_Model = (function(domain) {
  var venue = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$as_Lquizleague_domain_Venue(domain);
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_venue_VenueGetService__mapOutSparse__Lquizleague_domain_Venue__Lquizleague_web_model_Venue(this, venue)
});
var $d_Lquizleague_web_maintain_fixtures_FilteredVenueService$ = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  Lquizleague_web_maintain_fixtures_FilteredVenueService$: 0
}, false, "quizleague.web.maintain.fixtures.FilteredVenueService$", {
  Lquizleague_web_maintain_fixtures_FilteredVenueService$: 1,
  O: 1,
  Lquizleague_web_service_venue_VenueGetService: 1,
  Lquizleague_web_service_GetService: 1,
  Lquizleague_web_names_VenueNames: 1,
  Lquizleague_web_names_ComponentNames: 1,
  Lquizleague_web_service_RetiredFilter: 1
});
export { $d_Lquizleague_web_maintain_fixtures_FilteredVenueService$ as $d_Lquizleague_web_maintain_fixtures_FilteredVenueService$ };
$c_Lquizleague_web_maintain_fixtures_FilteredVenueService$.prototype.$classData = $d_Lquizleague_web_maintain_fixtures_FilteredVenueService$;
var $n_Lquizleague_web_maintain_fixtures_FilteredVenueService$;
function $m_Lquizleague_web_maintain_fixtures_FilteredVenueService$() {
  if ((!$n_Lquizleague_web_maintain_fixtures_FilteredVenueService$)) {
    $n_Lquizleague_web_maintain_fixtures_FilteredVenueService$ = new $c_Lquizleague_web_maintain_fixtures_FilteredVenueService$()
  };
  return $n_Lquizleague_web_maintain_fixtures_FilteredVenueService$
}
export { $m_Lquizleague_web_maintain_fixtures_FilteredVenueService$ as $m_Lquizleague_web_maintain_fixtures_FilteredVenueService$ };
/** @constructor */
function $c_Lquizleague_web_maintain_globaltext_GlobalTextListComponent$() {
  this.Lquizleague_web_maintain_globaltext_GlobalTextListComponent$__f_template = null;
  this.Lquizleague_web_maintain_globaltext_GlobalTextListComponent$__f_service = null;
  this.Lquizleague_web_maintain_globaltext_GlobalTextListComponent$__f_typeName = null;
  this.Lquizleague_web_maintain_globaltext_GlobalTextListComponent$__f_name = null;
  this.Lquizleague_web_maintain_globaltext_GlobalTextListComponent$__f_quizleague$web$core$Component$$addedSubs = null;
  this.Lquizleague_web_maintain_globaltext_GlobalTextListComponent$__f_quizleague$web$core$Component$$addedSubParams = null;
  this.Lquizleague_web_maintain_globaltext_GlobalTextListComponent$__f_quizleague$web$core$Component$$addedProps = null;
  this.Lquizleague_web_maintain_globaltext_GlobalTextListComponent$__f_quizleague$web$core$Component$$addedMethods = null;
  this.Lquizleague_web_maintain_globaltext_GlobalTextListComponent$__f_quizleague$web$core$Component$$addedComputed = null;
  this.Lquizleague_web_maintain_globaltext_GlobalTextListComponent$__f_quizleague$web$core$Component$$addedDataFn = null;
  this.Lquizleague_web_maintain_globaltext_GlobalTextListComponent$__f_quizleague$web$core$Component$$addedData = null;
  this.Lquizleague_web_maintain_globaltext_GlobalTextListComponent$__f_quizleague$web$core$Component$$addedComponents = null;
  this.Lquizleague_web_maintain_globaltext_GlobalTextListComponent$__f_quizleague$web$core$Component$$addedWatch = null;
  this.Lquizleague_web_maintain_globaltext_GlobalTextListComponent$__f_empty = null;
  this.Lquizleague_web_maintain_globaltext_GlobalTextListComponent$__f_quizleague$web$core$Component$$commonMethods = null;
  $n_Lquizleague_web_maintain_globaltext_GlobalTextListComponent$ = this;
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__$init$__V(this);
  $f_Lquizleague_web_maintain_component_ItemListComponentConfig__$init$__V(this);
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_RouteComponent__$init$__V(this);
  this.Lquizleague_web_maintain_globaltext_GlobalTextListComponent$__f_typeName = "globaltext";
  this.Lquizleague_web_maintain_globaltext_GlobalTextListComponent$__f_template = (("\n  <v-container>\n    <v-layout column>\n      <div v-for=\"item in items\">\n        <v-btn :to=\"'globaltext/' + item.id\" text left>{{item.name}}</v-btn>\n      </div>\n      " + $m_Lquizleague_web_maintain_component_TemplateElements$().Lquizleague_web_maintain_component_TemplateElements$__f_addFAB) + "\n    </v-layout>\n  </v-container>\n");
  this.Lquizleague_web_maintain_globaltext_GlobalTextListComponent$__f_service = $m_Lquizleague_web_maintain_globaltext_GlobalTextService$()
}
export { $c_Lquizleague_web_maintain_globaltext_GlobalTextListComponent$ as $c_Lquizleague_web_maintain_globaltext_GlobalTextListComponent$ };
$c_Lquizleague_web_maintain_globaltext_GlobalTextListComponent$.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_Lquizleague_web_maintain_globaltext_GlobalTextListComponent$.prototype.constructor = $c_Lquizleague_web_maintain_globaltext_GlobalTextListComponent$;
/** @constructor */
function $h_Lquizleague_web_maintain_globaltext_GlobalTextListComponent$() {
  /*<skip>*/
}
export { $h_Lquizleague_web_maintain_globaltext_GlobalTextListComponent$ as $h_Lquizleague_web_maintain_globaltext_GlobalTextListComponent$ };
$h_Lquizleague_web_maintain_globaltext_GlobalTextListComponent$.prototype = $c_Lquizleague_web_maintain_globaltext_GlobalTextListComponent$.prototype;
$c_Lquizleague_web_maintain_globaltext_GlobalTextListComponent$.prototype.sort__sjs_js_Array__sjs_js_Array = (function(items) {
  return $f_Lquizleague_web_maintain_component_ItemListComponentConfig__sort__sjs_js_Array__sjs_js_Array(this, items)
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextListComponent$.prototype.mounted__sjs_js_Function = (function() {
  return null
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextListComponent$.prototype.beforeDestroy__sjs_js_Function = (function() {
  return null
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextListComponent$.prototype.typeName__T = (function() {
  return this.Lquizleague_web_maintain_globaltext_GlobalTextListComponent$__f_typeName
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextListComponent$.prototype.name__T = (function() {
  return this.Lquizleague_web_maintain_globaltext_GlobalTextListComponent$__f_name
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextListComponent$.prototype.quizleague$web$core$RouteComponent$_setter_$name_$eq__T__V = (function(x$1) {
  this.Lquizleague_web_maintain_globaltext_GlobalTextListComponent$__f_name = x$1
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextListComponent$.prototype.quizleague$web$core$Component$$addedSubs__sci_Map = (function() {
  return this.Lquizleague_web_maintain_globaltext_GlobalTextListComponent$__f_quizleague$web$core$Component$$addedSubs
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextListComponent$.prototype.quizleague$web$core$Component$$addedSubs_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_globaltext_GlobalTextListComponent$__f_quizleague$web$core$Component$$addedSubs = x$1
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextListComponent$.prototype.quizleague$web$core$Component$$addedSubParams__sci_List = (function() {
  return this.Lquizleague_web_maintain_globaltext_GlobalTextListComponent$__f_quizleague$web$core$Component$$addedSubParams
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextListComponent$.prototype.quizleague$web$core$Component$$addedSubParams_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_globaltext_GlobalTextListComponent$__f_quizleague$web$core$Component$$addedSubParams = x$1
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextListComponent$.prototype.quizleague$web$core$Component$$addedProps__sci_List = (function() {
  return this.Lquizleague_web_maintain_globaltext_GlobalTextListComponent$__f_quizleague$web$core$Component$$addedProps
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextListComponent$.prototype.quizleague$web$core$Component$$addedProps_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_globaltext_GlobalTextListComponent$__f_quizleague$web$core$Component$$addedProps = x$1
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextListComponent$.prototype.quizleague$web$core$Component$$addedMethods__sci_Map = (function() {
  return this.Lquizleague_web_maintain_globaltext_GlobalTextListComponent$__f_quizleague$web$core$Component$$addedMethods
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextListComponent$.prototype.quizleague$web$core$Component$$addedMethods_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_globaltext_GlobalTextListComponent$__f_quizleague$web$core$Component$$addedMethods = x$1
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextListComponent$.prototype.quizleague$web$core$Component$$addedComputed__sci_Map = (function() {
  return this.Lquizleague_web_maintain_globaltext_GlobalTextListComponent$__f_quizleague$web$core$Component$$addedComputed
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextListComponent$.prototype.quizleague$web$core$Component$$addedComputed_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_globaltext_GlobalTextListComponent$__f_quizleague$web$core$Component$$addedComputed = x$1
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextListComponent$.prototype.quizleague$web$core$Component$$addedDataFn__sci_Map = (function() {
  return this.Lquizleague_web_maintain_globaltext_GlobalTextListComponent$__f_quizleague$web$core$Component$$addedDataFn
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextListComponent$.prototype.quizleague$web$core$Component$$addedDataFn_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_globaltext_GlobalTextListComponent$__f_quizleague$web$core$Component$$addedDataFn = x$1
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextListComponent$.prototype.quizleague$web$core$Component$$addedData__sci_Map = (function() {
  return this.Lquizleague_web_maintain_globaltext_GlobalTextListComponent$__f_quizleague$web$core$Component$$addedData
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextListComponent$.prototype.quizleague$web$core$Component$$addedData_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_globaltext_GlobalTextListComponent$__f_quizleague$web$core$Component$$addedData = x$1
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextListComponent$.prototype.quizleague$web$core$Component$$addedComponents__sci_List = (function() {
  return this.Lquizleague_web_maintain_globaltext_GlobalTextListComponent$__f_quizleague$web$core$Component$$addedComponents
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextListComponent$.prototype.quizleague$web$core$Component$$addedComponents_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_globaltext_GlobalTextListComponent$__f_quizleague$web$core$Component$$addedComponents = x$1
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextListComponent$.prototype.quizleague$web$core$Component$$addedWatch__sci_Map = (function() {
  return this.Lquizleague_web_maintain_globaltext_GlobalTextListComponent$__f_quizleague$web$core$Component$$addedWatch
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextListComponent$.prototype.quizleague$web$core$Component$$addedWatch_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_globaltext_GlobalTextListComponent$__f_quizleague$web$core$Component$$addedWatch = x$1
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextListComponent$.prototype.empty__sjs_js_Object = (function() {
  return this.Lquizleague_web_maintain_globaltext_GlobalTextListComponent$__f_empty
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextListComponent$.prototype.quizleague$web$core$Component$$commonMethods__sci_Map = (function() {
  return this.Lquizleague_web_maintain_globaltext_GlobalTextListComponent$__f_quizleague$web$core$Component$$commonMethods
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextListComponent$.prototype.quizleague$web$core$Component$_setter_$empty_$eq__sjs_js_Object__V = (function(x$1) {
  this.Lquizleague_web_maintain_globaltext_GlobalTextListComponent$__f_empty = x$1
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextListComponent$.prototype.quizleague$web$core$Component$_setter_$quizleague$web$core$Component$$commonMethods_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_globaltext_GlobalTextListComponent$__f_quizleague$web$core$Component$$commonMethods = x$1
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextListComponent$.prototype.template__T = (function() {
  return this.Lquizleague_web_maintain_globaltext_GlobalTextListComponent$__f_template
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextListComponent$.prototype.service__Lquizleague_web_service_GetService = (function() {
  return this.Lquizleague_web_maintain_globaltext_GlobalTextListComponent$__f_service
});
var $d_Lquizleague_web_maintain_globaltext_GlobalTextListComponent$ = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  Lquizleague_web_maintain_globaltext_GlobalTextListComponent$: 0
}, false, "quizleague.web.maintain.globaltext.GlobalTextListComponent$", {
  Lquizleague_web_maintain_globaltext_GlobalTextListComponent$: 1,
  O: 1,
  Lquizleague_web_maintain_component_ItemListComponentConfig: 1,
  Lquizleague_web_core_Component: 1,
  Lquizleague_web_core_RouteComponent: 1,
  Lquizleague_web_names_GlobalTextNames: 1,
  Lquizleague_web_names_ComponentNames: 1
});
export { $d_Lquizleague_web_maintain_globaltext_GlobalTextListComponent$ as $d_Lquizleague_web_maintain_globaltext_GlobalTextListComponent$ };
$c_Lquizleague_web_maintain_globaltext_GlobalTextListComponent$.prototype.$classData = $d_Lquizleague_web_maintain_globaltext_GlobalTextListComponent$;
var $n_Lquizleague_web_maintain_globaltext_GlobalTextListComponent$;
function $m_Lquizleague_web_maintain_globaltext_GlobalTextListComponent$() {
  if ((!$n_Lquizleague_web_maintain_globaltext_GlobalTextListComponent$)) {
    $n_Lquizleague_web_maintain_globaltext_GlobalTextListComponent$ = new $c_Lquizleague_web_maintain_globaltext_GlobalTextListComponent$()
  };
  return $n_Lquizleague_web_maintain_globaltext_GlobalTextListComponent$
}
export { $m_Lquizleague_web_maintain_globaltext_GlobalTextListComponent$ as $m_Lquizleague_web_maintain_globaltext_GlobalTextListComponent$ };
/** @constructor */
function $c_Lquizleague_web_maintain_season_SeasonListComponent$() {
  this.Lquizleague_web_maintain_season_SeasonListComponent$__f_template = null;
  this.Lquizleague_web_maintain_season_SeasonListComponent$__f_service = null;
  this.Lquizleague_web_maintain_season_SeasonListComponent$__f_typeName = null;
  this.Lquizleague_web_maintain_season_SeasonListComponent$__f_name = null;
  this.Lquizleague_web_maintain_season_SeasonListComponent$__f_quizleague$web$core$Component$$addedSubs = null;
  this.Lquizleague_web_maintain_season_SeasonListComponent$__f_quizleague$web$core$Component$$addedSubParams = null;
  this.Lquizleague_web_maintain_season_SeasonListComponent$__f_quizleague$web$core$Component$$addedProps = null;
  this.Lquizleague_web_maintain_season_SeasonListComponent$__f_quizleague$web$core$Component$$addedMethods = null;
  this.Lquizleague_web_maintain_season_SeasonListComponent$__f_quizleague$web$core$Component$$addedComputed = null;
  this.Lquizleague_web_maintain_season_SeasonListComponent$__f_quizleague$web$core$Component$$addedDataFn = null;
  this.Lquizleague_web_maintain_season_SeasonListComponent$__f_quizleague$web$core$Component$$addedData = null;
  this.Lquizleague_web_maintain_season_SeasonListComponent$__f_quizleague$web$core$Component$$addedComponents = null;
  this.Lquizleague_web_maintain_season_SeasonListComponent$__f_quizleague$web$core$Component$$addedWatch = null;
  this.Lquizleague_web_maintain_season_SeasonListComponent$__f_empty = null;
  this.Lquizleague_web_maintain_season_SeasonListComponent$__f_quizleague$web$core$Component$$commonMethods = null;
  $n_Lquizleague_web_maintain_season_SeasonListComponent$ = this;
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__$init$__V(this);
  $f_Lquizleague_web_maintain_component_ItemListComponentConfig__$init$__V(this);
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_RouteComponent__$init$__V(this);
  this.Lquizleague_web_maintain_season_SeasonListComponent$__f_typeName = "season";
  this.Lquizleague_web_maintain_season_SeasonListComponent$__f_template = (("\n  <v-container v-if=\"items\">\n    <v-layout column>\n      <div v-for=\"item in items\">\n        <v-btn :to=\"'season/' + item.id\" text left>{{item.startYear}}/{{item.endYear}}</v-btn>\n      </div>\n      " + $m_Lquizleague_web_maintain_component_TemplateElements$().Lquizleague_web_maintain_component_TemplateElements$__f_addFAB) + "\n    </v-layout>\n  </v-container>\n");
  this.Lquizleague_web_maintain_season_SeasonListComponent$__f_service = $m_Lquizleague_web_maintain_season_SeasonService$()
}
export { $c_Lquizleague_web_maintain_season_SeasonListComponent$ as $c_Lquizleague_web_maintain_season_SeasonListComponent$ };
$c_Lquizleague_web_maintain_season_SeasonListComponent$.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_Lquizleague_web_maintain_season_SeasonListComponent$.prototype.constructor = $c_Lquizleague_web_maintain_season_SeasonListComponent$;
/** @constructor */
function $h_Lquizleague_web_maintain_season_SeasonListComponent$() {
  /*<skip>*/
}
export { $h_Lquizleague_web_maintain_season_SeasonListComponent$ as $h_Lquizleague_web_maintain_season_SeasonListComponent$ };
$h_Lquizleague_web_maintain_season_SeasonListComponent$.prototype = $c_Lquizleague_web_maintain_season_SeasonListComponent$.prototype;
$c_Lquizleague_web_maintain_season_SeasonListComponent$.prototype.mounted__sjs_js_Function = (function() {
  return null
});
$c_Lquizleague_web_maintain_season_SeasonListComponent$.prototype.beforeDestroy__sjs_js_Function = (function() {
  return null
});
$c_Lquizleague_web_maintain_season_SeasonListComponent$.prototype.typeName__T = (function() {
  return this.Lquizleague_web_maintain_season_SeasonListComponent$__f_typeName
});
$c_Lquizleague_web_maintain_season_SeasonListComponent$.prototype.name__T = (function() {
  return this.Lquizleague_web_maintain_season_SeasonListComponent$__f_name
});
$c_Lquizleague_web_maintain_season_SeasonListComponent$.prototype.quizleague$web$core$RouteComponent$_setter_$name_$eq__T__V = (function(x$1) {
  this.Lquizleague_web_maintain_season_SeasonListComponent$__f_name = x$1
});
$c_Lquizleague_web_maintain_season_SeasonListComponent$.prototype.quizleague$web$core$Component$$addedSubs__sci_Map = (function() {
  return this.Lquizleague_web_maintain_season_SeasonListComponent$__f_quizleague$web$core$Component$$addedSubs
});
$c_Lquizleague_web_maintain_season_SeasonListComponent$.prototype.quizleague$web$core$Component$$addedSubs_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_season_SeasonListComponent$__f_quizleague$web$core$Component$$addedSubs = x$1
});
$c_Lquizleague_web_maintain_season_SeasonListComponent$.prototype.quizleague$web$core$Component$$addedSubParams__sci_List = (function() {
  return this.Lquizleague_web_maintain_season_SeasonListComponent$__f_quizleague$web$core$Component$$addedSubParams
});
$c_Lquizleague_web_maintain_season_SeasonListComponent$.prototype.quizleague$web$core$Component$$addedSubParams_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_season_SeasonListComponent$__f_quizleague$web$core$Component$$addedSubParams = x$1
});
$c_Lquizleague_web_maintain_season_SeasonListComponent$.prototype.quizleague$web$core$Component$$addedProps__sci_List = (function() {
  return this.Lquizleague_web_maintain_season_SeasonListComponent$__f_quizleague$web$core$Component$$addedProps
});
$c_Lquizleague_web_maintain_season_SeasonListComponent$.prototype.quizleague$web$core$Component$$addedProps_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_season_SeasonListComponent$__f_quizleague$web$core$Component$$addedProps = x$1
});
$c_Lquizleague_web_maintain_season_SeasonListComponent$.prototype.quizleague$web$core$Component$$addedMethods__sci_Map = (function() {
  return this.Lquizleague_web_maintain_season_SeasonListComponent$__f_quizleague$web$core$Component$$addedMethods
});
$c_Lquizleague_web_maintain_season_SeasonListComponent$.prototype.quizleague$web$core$Component$$addedMethods_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_season_SeasonListComponent$__f_quizleague$web$core$Component$$addedMethods = x$1
});
$c_Lquizleague_web_maintain_season_SeasonListComponent$.prototype.quizleague$web$core$Component$$addedComputed__sci_Map = (function() {
  return this.Lquizleague_web_maintain_season_SeasonListComponent$__f_quizleague$web$core$Component$$addedComputed
});
$c_Lquizleague_web_maintain_season_SeasonListComponent$.prototype.quizleague$web$core$Component$$addedComputed_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_season_SeasonListComponent$__f_quizleague$web$core$Component$$addedComputed = x$1
});
$c_Lquizleague_web_maintain_season_SeasonListComponent$.prototype.quizleague$web$core$Component$$addedDataFn__sci_Map = (function() {
  return this.Lquizleague_web_maintain_season_SeasonListComponent$__f_quizleague$web$core$Component$$addedDataFn
});
$c_Lquizleague_web_maintain_season_SeasonListComponent$.prototype.quizleague$web$core$Component$$addedDataFn_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_season_SeasonListComponent$__f_quizleague$web$core$Component$$addedDataFn = x$1
});
$c_Lquizleague_web_maintain_season_SeasonListComponent$.prototype.quizleague$web$core$Component$$addedData__sci_Map = (function() {
  return this.Lquizleague_web_maintain_season_SeasonListComponent$__f_quizleague$web$core$Component$$addedData
});
$c_Lquizleague_web_maintain_season_SeasonListComponent$.prototype.quizleague$web$core$Component$$addedData_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_season_SeasonListComponent$__f_quizleague$web$core$Component$$addedData = x$1
});
$c_Lquizleague_web_maintain_season_SeasonListComponent$.prototype.quizleague$web$core$Component$$addedComponents__sci_List = (function() {
  return this.Lquizleague_web_maintain_season_SeasonListComponent$__f_quizleague$web$core$Component$$addedComponents
});
$c_Lquizleague_web_maintain_season_SeasonListComponent$.prototype.quizleague$web$core$Component$$addedComponents_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_season_SeasonListComponent$__f_quizleague$web$core$Component$$addedComponents = x$1
});
$c_Lquizleague_web_maintain_season_SeasonListComponent$.prototype.quizleague$web$core$Component$$addedWatch__sci_Map = (function() {
  return this.Lquizleague_web_maintain_season_SeasonListComponent$__f_quizleague$web$core$Component$$addedWatch
});
$c_Lquizleague_web_maintain_season_SeasonListComponent$.prototype.quizleague$web$core$Component$$addedWatch_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_season_SeasonListComponent$__f_quizleague$web$core$Component$$addedWatch = x$1
});
$c_Lquizleague_web_maintain_season_SeasonListComponent$.prototype.empty__sjs_js_Object = (function() {
  return this.Lquizleague_web_maintain_season_SeasonListComponent$__f_empty
});
$c_Lquizleague_web_maintain_season_SeasonListComponent$.prototype.quizleague$web$core$Component$$commonMethods__sci_Map = (function() {
  return this.Lquizleague_web_maintain_season_SeasonListComponent$__f_quizleague$web$core$Component$$commonMethods
});
$c_Lquizleague_web_maintain_season_SeasonListComponent$.prototype.quizleague$web$core$Component$_setter_$empty_$eq__sjs_js_Object__V = (function(x$1) {
  this.Lquizleague_web_maintain_season_SeasonListComponent$__f_empty = x$1
});
$c_Lquizleague_web_maintain_season_SeasonListComponent$.prototype.quizleague$web$core$Component$_setter_$quizleague$web$core$Component$$commonMethods_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_season_SeasonListComponent$__f_quizleague$web$core$Component$$commonMethods = x$1
});
$c_Lquizleague_web_maintain_season_SeasonListComponent$.prototype.sort__sjs_js_Array__sjs_js_Array = (function(items) {
  var f = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((x$1$2) => $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(x$1$2.startYear)));
  var ord = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_math_Ordering$Int$();
  var ord$1 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_s_math_Ordering$$anon$1(ord, f);
  var len = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(items.length);
  var array = [];
  if ((len === 1)) {
    var i = 0;
    var len$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(items.length);
    while ((i < len$1)) {
      var index = i;
      var arg1 = items[index];
      array.push(arg1);
      i = ((1 + i) | 0)
    }
  } else if ((len > 1)) {
    var arr = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$ac_O(len);
    var elem = 0;
    elem = 0;
    var i$1 = 0;
    var len$2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(items.length);
    while ((i$1 < len$2)) {
      var index$1 = i$1;
      var arg1$1 = items[index$1];
      $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(arr).set(elem, arg1$1);
      elem = ((1 + elem) | 0);
      i$1 = ((1 + i$1) | 0)
    };
    $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_ju_Arrays$().sort__AO__ju_Comparator__V(arr, ord$1);
    elem = 0;
    while ((elem < $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(arr).u.length)) {
      var elem$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(arr).get(elem);
      array.push(elem$1);
      elem = ((1 + elem) | 0)
    }
  };
  return array
});
$c_Lquizleague_web_maintain_season_SeasonListComponent$.prototype.template__T = (function() {
  return this.Lquizleague_web_maintain_season_SeasonListComponent$__f_template
});
$c_Lquizleague_web_maintain_season_SeasonListComponent$.prototype.service__Lquizleague_web_service_GetService = (function() {
  return this.Lquizleague_web_maintain_season_SeasonListComponent$__f_service
});
var $d_Lquizleague_web_maintain_season_SeasonListComponent$ = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  Lquizleague_web_maintain_season_SeasonListComponent$: 0
}, false, "quizleague.web.maintain.season.SeasonListComponent$", {
  Lquizleague_web_maintain_season_SeasonListComponent$: 1,
  O: 1,
  Lquizleague_web_maintain_component_ItemListComponentConfig: 1,
  Lquizleague_web_core_Component: 1,
  Lquizleague_web_core_RouteComponent: 1,
  Lquizleague_web_names_SeasonNames: 1,
  Lquizleague_web_names_ComponentNames: 1
});
export { $d_Lquizleague_web_maintain_season_SeasonListComponent$ as $d_Lquizleague_web_maintain_season_SeasonListComponent$ };
$c_Lquizleague_web_maintain_season_SeasonListComponent$.prototype.$classData = $d_Lquizleague_web_maintain_season_SeasonListComponent$;
var $n_Lquizleague_web_maintain_season_SeasonListComponent$;
function $m_Lquizleague_web_maintain_season_SeasonListComponent$() {
  if ((!$n_Lquizleague_web_maintain_season_SeasonListComponent$)) {
    $n_Lquizleague_web_maintain_season_SeasonListComponent$ = new $c_Lquizleague_web_maintain_season_SeasonListComponent$()
  };
  return $n_Lquizleague_web_maintain_season_SeasonListComponent$
}
export { $m_Lquizleague_web_maintain_season_SeasonListComponent$ as $m_Lquizleague_web_maintain_season_SeasonListComponent$ };
/** @constructor */
function $c_Lquizleague_web_maintain_team_TeamListComponent$() {
  this.Lquizleague_web_maintain_team_TeamListComponent$__f_template = null;
  this.Lquizleague_web_maintain_team_TeamListComponent$__f_service = null;
  this.Lquizleague_web_maintain_team_TeamListComponent$__f_typeName = null;
  this.Lquizleague_web_maintain_team_TeamListComponent$__f_name = null;
  this.Lquizleague_web_maintain_team_TeamListComponent$__f_quizleague$web$core$Component$$addedSubs = null;
  this.Lquizleague_web_maintain_team_TeamListComponent$__f_quizleague$web$core$Component$$addedSubParams = null;
  this.Lquizleague_web_maintain_team_TeamListComponent$__f_quizleague$web$core$Component$$addedProps = null;
  this.Lquizleague_web_maintain_team_TeamListComponent$__f_quizleague$web$core$Component$$addedMethods = null;
  this.Lquizleague_web_maintain_team_TeamListComponent$__f_quizleague$web$core$Component$$addedComputed = null;
  this.Lquizleague_web_maintain_team_TeamListComponent$__f_quizleague$web$core$Component$$addedDataFn = null;
  this.Lquizleague_web_maintain_team_TeamListComponent$__f_quizleague$web$core$Component$$addedData = null;
  this.Lquizleague_web_maintain_team_TeamListComponent$__f_quizleague$web$core$Component$$addedComponents = null;
  this.Lquizleague_web_maintain_team_TeamListComponent$__f_quizleague$web$core$Component$$addedWatch = null;
  this.Lquizleague_web_maintain_team_TeamListComponent$__f_empty = null;
  this.Lquizleague_web_maintain_team_TeamListComponent$__f_quizleague$web$core$Component$$commonMethods = null;
  $n_Lquizleague_web_maintain_team_TeamListComponent$ = this;
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__$init$__V(this);
  $f_Lquizleague_web_maintain_component_ItemListComponentConfig__$init$__V(this);
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_RouteComponent__$init$__V(this);
  this.Lquizleague_web_maintain_team_TeamListComponent$__f_typeName = "team";
  this.Lquizleague_web_maintain_team_TeamListComponent$__f_template = (("\n  <v-container>\n    <v-layout column>\n      <div v-for=\"item in items\" :key=\"item.id\">\n        <v-btn :to=\"'team/' + item.id\" text left>{{item.name}}</v-btn>\n      </div>\n      " + $m_Lquizleague_web_maintain_component_TemplateElements$().Lquizleague_web_maintain_component_TemplateElements$__f_addFAB) + "\n    </v-layout>\n  </v-container>\n");
  this.Lquizleague_web_maintain_team_TeamListComponent$__f_service = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_maintain_team_TeamService$()
}
export { $c_Lquizleague_web_maintain_team_TeamListComponent$ as $c_Lquizleague_web_maintain_team_TeamListComponent$ };
$c_Lquizleague_web_maintain_team_TeamListComponent$.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_Lquizleague_web_maintain_team_TeamListComponent$.prototype.constructor = $c_Lquizleague_web_maintain_team_TeamListComponent$;
/** @constructor */
function $h_Lquizleague_web_maintain_team_TeamListComponent$() {
  /*<skip>*/
}
export { $h_Lquizleague_web_maintain_team_TeamListComponent$ as $h_Lquizleague_web_maintain_team_TeamListComponent$ };
$h_Lquizleague_web_maintain_team_TeamListComponent$.prototype = $c_Lquizleague_web_maintain_team_TeamListComponent$.prototype;
$c_Lquizleague_web_maintain_team_TeamListComponent$.prototype.mounted__sjs_js_Function = (function() {
  return null
});
$c_Lquizleague_web_maintain_team_TeamListComponent$.prototype.beforeDestroy__sjs_js_Function = (function() {
  return null
});
$c_Lquizleague_web_maintain_team_TeamListComponent$.prototype.typeName__T = (function() {
  return this.Lquizleague_web_maintain_team_TeamListComponent$__f_typeName
});
$c_Lquizleague_web_maintain_team_TeamListComponent$.prototype.name__T = (function() {
  return this.Lquizleague_web_maintain_team_TeamListComponent$__f_name
});
$c_Lquizleague_web_maintain_team_TeamListComponent$.prototype.quizleague$web$core$RouteComponent$_setter_$name_$eq__T__V = (function(x$1) {
  this.Lquizleague_web_maintain_team_TeamListComponent$__f_name = x$1
});
$c_Lquizleague_web_maintain_team_TeamListComponent$.prototype.quizleague$web$core$Component$$addedSubs__sci_Map = (function() {
  return this.Lquizleague_web_maintain_team_TeamListComponent$__f_quizleague$web$core$Component$$addedSubs
});
$c_Lquizleague_web_maintain_team_TeamListComponent$.prototype.quizleague$web$core$Component$$addedSubs_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_team_TeamListComponent$__f_quizleague$web$core$Component$$addedSubs = x$1
});
$c_Lquizleague_web_maintain_team_TeamListComponent$.prototype.quizleague$web$core$Component$$addedSubParams__sci_List = (function() {
  return this.Lquizleague_web_maintain_team_TeamListComponent$__f_quizleague$web$core$Component$$addedSubParams
});
$c_Lquizleague_web_maintain_team_TeamListComponent$.prototype.quizleague$web$core$Component$$addedSubParams_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_team_TeamListComponent$__f_quizleague$web$core$Component$$addedSubParams = x$1
});
$c_Lquizleague_web_maintain_team_TeamListComponent$.prototype.quizleague$web$core$Component$$addedProps__sci_List = (function() {
  return this.Lquizleague_web_maintain_team_TeamListComponent$__f_quizleague$web$core$Component$$addedProps
});
$c_Lquizleague_web_maintain_team_TeamListComponent$.prototype.quizleague$web$core$Component$$addedProps_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_team_TeamListComponent$__f_quizleague$web$core$Component$$addedProps = x$1
});
$c_Lquizleague_web_maintain_team_TeamListComponent$.prototype.quizleague$web$core$Component$$addedMethods__sci_Map = (function() {
  return this.Lquizleague_web_maintain_team_TeamListComponent$__f_quizleague$web$core$Component$$addedMethods
});
$c_Lquizleague_web_maintain_team_TeamListComponent$.prototype.quizleague$web$core$Component$$addedMethods_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_team_TeamListComponent$__f_quizleague$web$core$Component$$addedMethods = x$1
});
$c_Lquizleague_web_maintain_team_TeamListComponent$.prototype.quizleague$web$core$Component$$addedComputed__sci_Map = (function() {
  return this.Lquizleague_web_maintain_team_TeamListComponent$__f_quizleague$web$core$Component$$addedComputed
});
$c_Lquizleague_web_maintain_team_TeamListComponent$.prototype.quizleague$web$core$Component$$addedComputed_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_team_TeamListComponent$__f_quizleague$web$core$Component$$addedComputed = x$1
});
$c_Lquizleague_web_maintain_team_TeamListComponent$.prototype.quizleague$web$core$Component$$addedDataFn__sci_Map = (function() {
  return this.Lquizleague_web_maintain_team_TeamListComponent$__f_quizleague$web$core$Component$$addedDataFn
});
$c_Lquizleague_web_maintain_team_TeamListComponent$.prototype.quizleague$web$core$Component$$addedDataFn_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_team_TeamListComponent$__f_quizleague$web$core$Component$$addedDataFn = x$1
});
$c_Lquizleague_web_maintain_team_TeamListComponent$.prototype.quizleague$web$core$Component$$addedData__sci_Map = (function() {
  return this.Lquizleague_web_maintain_team_TeamListComponent$__f_quizleague$web$core$Component$$addedData
});
$c_Lquizleague_web_maintain_team_TeamListComponent$.prototype.quizleague$web$core$Component$$addedData_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_team_TeamListComponent$__f_quizleague$web$core$Component$$addedData = x$1
});
$c_Lquizleague_web_maintain_team_TeamListComponent$.prototype.quizleague$web$core$Component$$addedComponents__sci_List = (function() {
  return this.Lquizleague_web_maintain_team_TeamListComponent$__f_quizleague$web$core$Component$$addedComponents
});
$c_Lquizleague_web_maintain_team_TeamListComponent$.prototype.quizleague$web$core$Component$$addedComponents_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_team_TeamListComponent$__f_quizleague$web$core$Component$$addedComponents = x$1
});
$c_Lquizleague_web_maintain_team_TeamListComponent$.prototype.quizleague$web$core$Component$$addedWatch__sci_Map = (function() {
  return this.Lquizleague_web_maintain_team_TeamListComponent$__f_quizleague$web$core$Component$$addedWatch
});
$c_Lquizleague_web_maintain_team_TeamListComponent$.prototype.quizleague$web$core$Component$$addedWatch_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_team_TeamListComponent$__f_quizleague$web$core$Component$$addedWatch = x$1
});
$c_Lquizleague_web_maintain_team_TeamListComponent$.prototype.empty__sjs_js_Object = (function() {
  return this.Lquizleague_web_maintain_team_TeamListComponent$__f_empty
});
$c_Lquizleague_web_maintain_team_TeamListComponent$.prototype.quizleague$web$core$Component$$commonMethods__sci_Map = (function() {
  return this.Lquizleague_web_maintain_team_TeamListComponent$__f_quizleague$web$core$Component$$commonMethods
});
$c_Lquizleague_web_maintain_team_TeamListComponent$.prototype.quizleague$web$core$Component$_setter_$empty_$eq__sjs_js_Object__V = (function(x$1) {
  this.Lquizleague_web_maintain_team_TeamListComponent$__f_empty = x$1
});
$c_Lquizleague_web_maintain_team_TeamListComponent$.prototype.quizleague$web$core$Component$_setter_$quizleague$web$core$Component$$commonMethods_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_team_TeamListComponent$__f_quizleague$web$core$Component$$commonMethods = x$1
});
$c_Lquizleague_web_maintain_team_TeamListComponent$.prototype.sort__sjs_js_Array__sjs_js_Array = (function(items) {
  var f = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((x$1$2) => $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(x$1$2.shortName)));
  var ord = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_s_math_Ordering$String$();
  var ord$1 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_s_math_Ordering$$anon$1(ord, f);
  var len = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(items.length);
  var array = [];
  if ((len === 1)) {
    var i = 0;
    var len$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(items.length);
    while ((i < len$1)) {
      var index = i;
      var arg1 = items[index];
      array.push(arg1);
      i = ((1 + i) | 0)
    }
  } else if ((len > 1)) {
    var arr = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$ac_O(len);
    var elem = 0;
    elem = 0;
    var i$1 = 0;
    var len$2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(items.length);
    while ((i$1 < len$2)) {
      var index$1 = i$1;
      var arg1$1 = items[index$1];
      $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(arr).set(elem, arg1$1);
      elem = ((1 + elem) | 0);
      i$1 = ((1 + i$1) | 0)
    };
    $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_ju_Arrays$().sort__AO__ju_Comparator__V(arr, ord$1);
    elem = 0;
    while ((elem < $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(arr).u.length)) {
      var elem$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(arr).get(elem);
      array.push(elem$1);
      elem = ((1 + elem) | 0)
    }
  };
  return array
});
$c_Lquizleague_web_maintain_team_TeamListComponent$.prototype.template__T = (function() {
  return this.Lquizleague_web_maintain_team_TeamListComponent$__f_template
});
$c_Lquizleague_web_maintain_team_TeamListComponent$.prototype.service__Lquizleague_web_service_GetService = (function() {
  return this.Lquizleague_web_maintain_team_TeamListComponent$__f_service
});
var $d_Lquizleague_web_maintain_team_TeamListComponent$ = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  Lquizleague_web_maintain_team_TeamListComponent$: 0
}, false, "quizleague.web.maintain.team.TeamListComponent$", {
  Lquizleague_web_maintain_team_TeamListComponent$: 1,
  O: 1,
  Lquizleague_web_maintain_component_ItemListComponentConfig: 1,
  Lquizleague_web_core_Component: 1,
  Lquizleague_web_core_RouteComponent: 1,
  Lquizleague_web_names_TeamNames: 1,
  Lquizleague_web_names_ComponentNames: 1
});
export { $d_Lquizleague_web_maintain_team_TeamListComponent$ as $d_Lquizleague_web_maintain_team_TeamListComponent$ };
$c_Lquizleague_web_maintain_team_TeamListComponent$.prototype.$classData = $d_Lquizleague_web_maintain_team_TeamListComponent$;
var $n_Lquizleague_web_maintain_team_TeamListComponent$;
function $m_Lquizleague_web_maintain_team_TeamListComponent$() {
  if ((!$n_Lquizleague_web_maintain_team_TeamListComponent$)) {
    $n_Lquizleague_web_maintain_team_TeamListComponent$ = new $c_Lquizleague_web_maintain_team_TeamListComponent$()
  };
  return $n_Lquizleague_web_maintain_team_TeamListComponent$
}
export { $m_Lquizleague_web_maintain_team_TeamListComponent$ as $m_Lquizleague_web_maintain_team_TeamListComponent$ };
/** @constructor */
function $c_Lquizleague_web_maintain_user_UserListComponent$() {
  this.Lquizleague_web_maintain_user_UserListComponent$__f_template = null;
  this.Lquizleague_web_maintain_user_UserListComponent$__f_service = null;
  this.Lquizleague_web_maintain_user_UserListComponent$__f_typeName = null;
  this.Lquizleague_web_maintain_user_UserListComponent$__f_name = null;
  this.Lquizleague_web_maintain_user_UserListComponent$__f_quizleague$web$core$Component$$addedSubs = null;
  this.Lquizleague_web_maintain_user_UserListComponent$__f_quizleague$web$core$Component$$addedSubParams = null;
  this.Lquizleague_web_maintain_user_UserListComponent$__f_quizleague$web$core$Component$$addedProps = null;
  this.Lquizleague_web_maintain_user_UserListComponent$__f_quizleague$web$core$Component$$addedMethods = null;
  this.Lquizleague_web_maintain_user_UserListComponent$__f_quizleague$web$core$Component$$addedComputed = null;
  this.Lquizleague_web_maintain_user_UserListComponent$__f_quizleague$web$core$Component$$addedDataFn = null;
  this.Lquizleague_web_maintain_user_UserListComponent$__f_quizleague$web$core$Component$$addedData = null;
  this.Lquizleague_web_maintain_user_UserListComponent$__f_quizleague$web$core$Component$$addedComponents = null;
  this.Lquizleague_web_maintain_user_UserListComponent$__f_quizleague$web$core$Component$$addedWatch = null;
  this.Lquizleague_web_maintain_user_UserListComponent$__f_empty = null;
  this.Lquizleague_web_maintain_user_UserListComponent$__f_quizleague$web$core$Component$$commonMethods = null;
  $n_Lquizleague_web_maintain_user_UserListComponent$ = this;
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__$init$__V(this);
  $f_Lquizleague_web_maintain_component_ItemListComponentConfig__$init$__V(this);
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_RouteComponent__$init$__V(this);
  this.Lquizleague_web_maintain_user_UserListComponent$__f_typeName = "user";
  this.Lquizleague_web_maintain_user_UserListComponent$__f_template = (("\n  <v-container>\n    <v-layout column>\n      <div v-for=\"item in items\">\n        <v-btn :to=\"'user/' + item.id\" text left>{{item.name}}</v-btn>\n      </div>\n      " + $m_Lquizleague_web_maintain_component_TemplateElements$().Lquizleague_web_maintain_component_TemplateElements$__f_addFAB) + "\n    </v-layout>\n  </v-container>\n");
  this.Lquizleague_web_maintain_user_UserListComponent$__f_service = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_maintain_user_UserService$()
}
export { $c_Lquizleague_web_maintain_user_UserListComponent$ as $c_Lquizleague_web_maintain_user_UserListComponent$ };
$c_Lquizleague_web_maintain_user_UserListComponent$.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_Lquizleague_web_maintain_user_UserListComponent$.prototype.constructor = $c_Lquizleague_web_maintain_user_UserListComponent$;
/** @constructor */
function $h_Lquizleague_web_maintain_user_UserListComponent$() {
  /*<skip>*/
}
export { $h_Lquizleague_web_maintain_user_UserListComponent$ as $h_Lquizleague_web_maintain_user_UserListComponent$ };
$h_Lquizleague_web_maintain_user_UserListComponent$.prototype = $c_Lquizleague_web_maintain_user_UserListComponent$.prototype;
$c_Lquizleague_web_maintain_user_UserListComponent$.prototype.mounted__sjs_js_Function = (function() {
  return null
});
$c_Lquizleague_web_maintain_user_UserListComponent$.prototype.beforeDestroy__sjs_js_Function = (function() {
  return null
});
$c_Lquizleague_web_maintain_user_UserListComponent$.prototype.typeName__T = (function() {
  return this.Lquizleague_web_maintain_user_UserListComponent$__f_typeName
});
$c_Lquizleague_web_maintain_user_UserListComponent$.prototype.name__T = (function() {
  return this.Lquizleague_web_maintain_user_UserListComponent$__f_name
});
$c_Lquizleague_web_maintain_user_UserListComponent$.prototype.quizleague$web$core$RouteComponent$_setter_$name_$eq__T__V = (function(x$1) {
  this.Lquizleague_web_maintain_user_UserListComponent$__f_name = x$1
});
$c_Lquizleague_web_maintain_user_UserListComponent$.prototype.quizleague$web$core$Component$$addedSubs__sci_Map = (function() {
  return this.Lquizleague_web_maintain_user_UserListComponent$__f_quizleague$web$core$Component$$addedSubs
});
$c_Lquizleague_web_maintain_user_UserListComponent$.prototype.quizleague$web$core$Component$$addedSubs_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_user_UserListComponent$__f_quizleague$web$core$Component$$addedSubs = x$1
});
$c_Lquizleague_web_maintain_user_UserListComponent$.prototype.quizleague$web$core$Component$$addedSubParams__sci_List = (function() {
  return this.Lquizleague_web_maintain_user_UserListComponent$__f_quizleague$web$core$Component$$addedSubParams
});
$c_Lquizleague_web_maintain_user_UserListComponent$.prototype.quizleague$web$core$Component$$addedSubParams_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_user_UserListComponent$__f_quizleague$web$core$Component$$addedSubParams = x$1
});
$c_Lquizleague_web_maintain_user_UserListComponent$.prototype.quizleague$web$core$Component$$addedProps__sci_List = (function() {
  return this.Lquizleague_web_maintain_user_UserListComponent$__f_quizleague$web$core$Component$$addedProps
});
$c_Lquizleague_web_maintain_user_UserListComponent$.prototype.quizleague$web$core$Component$$addedProps_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_user_UserListComponent$__f_quizleague$web$core$Component$$addedProps = x$1
});
$c_Lquizleague_web_maintain_user_UserListComponent$.prototype.quizleague$web$core$Component$$addedMethods__sci_Map = (function() {
  return this.Lquizleague_web_maintain_user_UserListComponent$__f_quizleague$web$core$Component$$addedMethods
});
$c_Lquizleague_web_maintain_user_UserListComponent$.prototype.quizleague$web$core$Component$$addedMethods_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_user_UserListComponent$__f_quizleague$web$core$Component$$addedMethods = x$1
});
$c_Lquizleague_web_maintain_user_UserListComponent$.prototype.quizleague$web$core$Component$$addedComputed__sci_Map = (function() {
  return this.Lquizleague_web_maintain_user_UserListComponent$__f_quizleague$web$core$Component$$addedComputed
});
$c_Lquizleague_web_maintain_user_UserListComponent$.prototype.quizleague$web$core$Component$$addedComputed_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_user_UserListComponent$__f_quizleague$web$core$Component$$addedComputed = x$1
});
$c_Lquizleague_web_maintain_user_UserListComponent$.prototype.quizleague$web$core$Component$$addedDataFn__sci_Map = (function() {
  return this.Lquizleague_web_maintain_user_UserListComponent$__f_quizleague$web$core$Component$$addedDataFn
});
$c_Lquizleague_web_maintain_user_UserListComponent$.prototype.quizleague$web$core$Component$$addedDataFn_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_user_UserListComponent$__f_quizleague$web$core$Component$$addedDataFn = x$1
});
$c_Lquizleague_web_maintain_user_UserListComponent$.prototype.quizleague$web$core$Component$$addedData__sci_Map = (function() {
  return this.Lquizleague_web_maintain_user_UserListComponent$__f_quizleague$web$core$Component$$addedData
});
$c_Lquizleague_web_maintain_user_UserListComponent$.prototype.quizleague$web$core$Component$$addedData_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_user_UserListComponent$__f_quizleague$web$core$Component$$addedData = x$1
});
$c_Lquizleague_web_maintain_user_UserListComponent$.prototype.quizleague$web$core$Component$$addedComponents__sci_List = (function() {
  return this.Lquizleague_web_maintain_user_UserListComponent$__f_quizleague$web$core$Component$$addedComponents
});
$c_Lquizleague_web_maintain_user_UserListComponent$.prototype.quizleague$web$core$Component$$addedComponents_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_user_UserListComponent$__f_quizleague$web$core$Component$$addedComponents = x$1
});
$c_Lquizleague_web_maintain_user_UserListComponent$.prototype.quizleague$web$core$Component$$addedWatch__sci_Map = (function() {
  return this.Lquizleague_web_maintain_user_UserListComponent$__f_quizleague$web$core$Component$$addedWatch
});
$c_Lquizleague_web_maintain_user_UserListComponent$.prototype.quizleague$web$core$Component$$addedWatch_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_user_UserListComponent$__f_quizleague$web$core$Component$$addedWatch = x$1
});
$c_Lquizleague_web_maintain_user_UserListComponent$.prototype.empty__sjs_js_Object = (function() {
  return this.Lquizleague_web_maintain_user_UserListComponent$__f_empty
});
$c_Lquizleague_web_maintain_user_UserListComponent$.prototype.quizleague$web$core$Component$$commonMethods__sci_Map = (function() {
  return this.Lquizleague_web_maintain_user_UserListComponent$__f_quizleague$web$core$Component$$commonMethods
});
$c_Lquizleague_web_maintain_user_UserListComponent$.prototype.quizleague$web$core$Component$_setter_$empty_$eq__sjs_js_Object__V = (function(x$1) {
  this.Lquizleague_web_maintain_user_UserListComponent$__f_empty = x$1
});
$c_Lquizleague_web_maintain_user_UserListComponent$.prototype.quizleague$web$core$Component$_setter_$quizleague$web$core$Component$$commonMethods_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_user_UserListComponent$__f_quizleague$web$core$Component$$commonMethods = x$1
});
$c_Lquizleague_web_maintain_user_UserListComponent$.prototype.sort__sjs_js_Array__sjs_js_Array = (function(items) {
  var f = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((x$1$2) => $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(x$1$2.name)));
  var ord = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_s_math_Ordering$String$();
  var ord$1 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_s_math_Ordering$$anon$1(ord, f);
  var len = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(items.length);
  var array = [];
  if ((len === 1)) {
    var i = 0;
    var len$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(items.length);
    while ((i < len$1)) {
      var index = i;
      var arg1 = items[index];
      array.push(arg1);
      i = ((1 + i) | 0)
    }
  } else if ((len > 1)) {
    var arr = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$ac_O(len);
    var elem = 0;
    elem = 0;
    var i$1 = 0;
    var len$2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(items.length);
    while ((i$1 < len$2)) {
      var index$1 = i$1;
      var arg1$1 = items[index$1];
      $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(arr).set(elem, arg1$1);
      elem = ((1 + elem) | 0);
      i$1 = ((1 + i$1) | 0)
    };
    $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_ju_Arrays$().sort__AO__ju_Comparator__V(arr, ord$1);
    elem = 0;
    while ((elem < $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(arr).u.length)) {
      var elem$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(arr).get(elem);
      array.push(elem$1);
      elem = ((1 + elem) | 0)
    }
  };
  return array
});
$c_Lquizleague_web_maintain_user_UserListComponent$.prototype.template__T = (function() {
  return this.Lquizleague_web_maintain_user_UserListComponent$__f_template
});
$c_Lquizleague_web_maintain_user_UserListComponent$.prototype.service__Lquizleague_web_service_GetService = (function() {
  return this.Lquizleague_web_maintain_user_UserListComponent$__f_service
});
var $d_Lquizleague_web_maintain_user_UserListComponent$ = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  Lquizleague_web_maintain_user_UserListComponent$: 0
}, false, "quizleague.web.maintain.user.UserListComponent$", {
  Lquizleague_web_maintain_user_UserListComponent$: 1,
  O: 1,
  Lquizleague_web_maintain_component_ItemListComponentConfig: 1,
  Lquizleague_web_core_Component: 1,
  Lquizleague_web_core_RouteComponent: 1,
  Lquizleague_web_names_UserNames: 1,
  Lquizleague_web_names_ComponentNames: 1
});
export { $d_Lquizleague_web_maintain_user_UserListComponent$ as $d_Lquizleague_web_maintain_user_UserListComponent$ };
$c_Lquizleague_web_maintain_user_UserListComponent$.prototype.$classData = $d_Lquizleague_web_maintain_user_UserListComponent$;
var $n_Lquizleague_web_maintain_user_UserListComponent$;
function $m_Lquizleague_web_maintain_user_UserListComponent$() {
  if ((!$n_Lquizleague_web_maintain_user_UserListComponent$)) {
    $n_Lquizleague_web_maintain_user_UserListComponent$ = new $c_Lquizleague_web_maintain_user_UserListComponent$()
  };
  return $n_Lquizleague_web_maintain_user_UserListComponent$
}
export { $m_Lquizleague_web_maintain_user_UserListComponent$ as $m_Lquizleague_web_maintain_user_UserListComponent$ };
/** @constructor */
function $c_Lquizleague_web_maintain_venue_VenueListComponent$() {
  this.Lquizleague_web_maintain_venue_VenueListComponent$__f_template = null;
  this.Lquizleague_web_maintain_venue_VenueListComponent$__f_service = null;
  this.Lquizleague_web_maintain_venue_VenueListComponent$__f_typeName = null;
  this.Lquizleague_web_maintain_venue_VenueListComponent$__f_name = null;
  this.Lquizleague_web_maintain_venue_VenueListComponent$__f_quizleague$web$core$Component$$addedSubs = null;
  this.Lquizleague_web_maintain_venue_VenueListComponent$__f_quizleague$web$core$Component$$addedSubParams = null;
  this.Lquizleague_web_maintain_venue_VenueListComponent$__f_quizleague$web$core$Component$$addedProps = null;
  this.Lquizleague_web_maintain_venue_VenueListComponent$__f_quizleague$web$core$Component$$addedMethods = null;
  this.Lquizleague_web_maintain_venue_VenueListComponent$__f_quizleague$web$core$Component$$addedComputed = null;
  this.Lquizleague_web_maintain_venue_VenueListComponent$__f_quizleague$web$core$Component$$addedDataFn = null;
  this.Lquizleague_web_maintain_venue_VenueListComponent$__f_quizleague$web$core$Component$$addedData = null;
  this.Lquizleague_web_maintain_venue_VenueListComponent$__f_quizleague$web$core$Component$$addedComponents = null;
  this.Lquizleague_web_maintain_venue_VenueListComponent$__f_quizleague$web$core$Component$$addedWatch = null;
  this.Lquizleague_web_maintain_venue_VenueListComponent$__f_empty = null;
  this.Lquizleague_web_maintain_venue_VenueListComponent$__f_quizleague$web$core$Component$$commonMethods = null;
  $n_Lquizleague_web_maintain_venue_VenueListComponent$ = this;
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__$init$__V(this);
  $f_Lquizleague_web_maintain_component_ItemListComponentConfig__$init$__V(this);
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_RouteComponent__$init$__V(this);
  this.Lquizleague_web_maintain_venue_VenueListComponent$__f_typeName = "venue";
  this.Lquizleague_web_maintain_venue_VenueListComponent$__f_template = (("\n  <v-container>\n    <v-layout column>\n      <div v-for=\"item in items\">\n        <v-btn :to=\"'venue/' + item.id\" text left>{{item.name}}</v-btn>\n      </div>\n      " + $m_Lquizleague_web_maintain_component_TemplateElements$().Lquizleague_web_maintain_component_TemplateElements$__f_addFAB) + "\n    </v-layout>\n  </v-container>\n");
  this.Lquizleague_web_maintain_venue_VenueListComponent$__f_service = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_maintain_venue_VenueService$()
}
export { $c_Lquizleague_web_maintain_venue_VenueListComponent$ as $c_Lquizleague_web_maintain_venue_VenueListComponent$ };
$c_Lquizleague_web_maintain_venue_VenueListComponent$.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_Lquizleague_web_maintain_venue_VenueListComponent$.prototype.constructor = $c_Lquizleague_web_maintain_venue_VenueListComponent$;
/** @constructor */
function $h_Lquizleague_web_maintain_venue_VenueListComponent$() {
  /*<skip>*/
}
export { $h_Lquizleague_web_maintain_venue_VenueListComponent$ as $h_Lquizleague_web_maintain_venue_VenueListComponent$ };
$h_Lquizleague_web_maintain_venue_VenueListComponent$.prototype = $c_Lquizleague_web_maintain_venue_VenueListComponent$.prototype;
$c_Lquizleague_web_maintain_venue_VenueListComponent$.prototype.mounted__sjs_js_Function = (function() {
  return null
});
$c_Lquizleague_web_maintain_venue_VenueListComponent$.prototype.beforeDestroy__sjs_js_Function = (function() {
  return null
});
$c_Lquizleague_web_maintain_venue_VenueListComponent$.prototype.typeName__T = (function() {
  return this.Lquizleague_web_maintain_venue_VenueListComponent$__f_typeName
});
$c_Lquizleague_web_maintain_venue_VenueListComponent$.prototype.name__T = (function() {
  return this.Lquizleague_web_maintain_venue_VenueListComponent$__f_name
});
$c_Lquizleague_web_maintain_venue_VenueListComponent$.prototype.quizleague$web$core$RouteComponent$_setter_$name_$eq__T__V = (function(x$1) {
  this.Lquizleague_web_maintain_venue_VenueListComponent$__f_name = x$1
});
$c_Lquizleague_web_maintain_venue_VenueListComponent$.prototype.quizleague$web$core$Component$$addedSubs__sci_Map = (function() {
  return this.Lquizleague_web_maintain_venue_VenueListComponent$__f_quizleague$web$core$Component$$addedSubs
});
$c_Lquizleague_web_maintain_venue_VenueListComponent$.prototype.quizleague$web$core$Component$$addedSubs_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_venue_VenueListComponent$__f_quizleague$web$core$Component$$addedSubs = x$1
});
$c_Lquizleague_web_maintain_venue_VenueListComponent$.prototype.quizleague$web$core$Component$$addedSubParams__sci_List = (function() {
  return this.Lquizleague_web_maintain_venue_VenueListComponent$__f_quizleague$web$core$Component$$addedSubParams
});
$c_Lquizleague_web_maintain_venue_VenueListComponent$.prototype.quizleague$web$core$Component$$addedSubParams_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_venue_VenueListComponent$__f_quizleague$web$core$Component$$addedSubParams = x$1
});
$c_Lquizleague_web_maintain_venue_VenueListComponent$.prototype.quizleague$web$core$Component$$addedProps__sci_List = (function() {
  return this.Lquizleague_web_maintain_venue_VenueListComponent$__f_quizleague$web$core$Component$$addedProps
});
$c_Lquizleague_web_maintain_venue_VenueListComponent$.prototype.quizleague$web$core$Component$$addedProps_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_venue_VenueListComponent$__f_quizleague$web$core$Component$$addedProps = x$1
});
$c_Lquizleague_web_maintain_venue_VenueListComponent$.prototype.quizleague$web$core$Component$$addedMethods__sci_Map = (function() {
  return this.Lquizleague_web_maintain_venue_VenueListComponent$__f_quizleague$web$core$Component$$addedMethods
});
$c_Lquizleague_web_maintain_venue_VenueListComponent$.prototype.quizleague$web$core$Component$$addedMethods_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_venue_VenueListComponent$__f_quizleague$web$core$Component$$addedMethods = x$1
});
$c_Lquizleague_web_maintain_venue_VenueListComponent$.prototype.quizleague$web$core$Component$$addedComputed__sci_Map = (function() {
  return this.Lquizleague_web_maintain_venue_VenueListComponent$__f_quizleague$web$core$Component$$addedComputed
});
$c_Lquizleague_web_maintain_venue_VenueListComponent$.prototype.quizleague$web$core$Component$$addedComputed_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_venue_VenueListComponent$__f_quizleague$web$core$Component$$addedComputed = x$1
});
$c_Lquizleague_web_maintain_venue_VenueListComponent$.prototype.quizleague$web$core$Component$$addedDataFn__sci_Map = (function() {
  return this.Lquizleague_web_maintain_venue_VenueListComponent$__f_quizleague$web$core$Component$$addedDataFn
});
$c_Lquizleague_web_maintain_venue_VenueListComponent$.prototype.quizleague$web$core$Component$$addedDataFn_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_venue_VenueListComponent$__f_quizleague$web$core$Component$$addedDataFn = x$1
});
$c_Lquizleague_web_maintain_venue_VenueListComponent$.prototype.quizleague$web$core$Component$$addedData__sci_Map = (function() {
  return this.Lquizleague_web_maintain_venue_VenueListComponent$__f_quizleague$web$core$Component$$addedData
});
$c_Lquizleague_web_maintain_venue_VenueListComponent$.prototype.quizleague$web$core$Component$$addedData_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_venue_VenueListComponent$__f_quizleague$web$core$Component$$addedData = x$1
});
$c_Lquizleague_web_maintain_venue_VenueListComponent$.prototype.quizleague$web$core$Component$$addedComponents__sci_List = (function() {
  return this.Lquizleague_web_maintain_venue_VenueListComponent$__f_quizleague$web$core$Component$$addedComponents
});
$c_Lquizleague_web_maintain_venue_VenueListComponent$.prototype.quizleague$web$core$Component$$addedComponents_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_venue_VenueListComponent$__f_quizleague$web$core$Component$$addedComponents = x$1
});
$c_Lquizleague_web_maintain_venue_VenueListComponent$.prototype.quizleague$web$core$Component$$addedWatch__sci_Map = (function() {
  return this.Lquizleague_web_maintain_venue_VenueListComponent$__f_quizleague$web$core$Component$$addedWatch
});
$c_Lquizleague_web_maintain_venue_VenueListComponent$.prototype.quizleague$web$core$Component$$addedWatch_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_venue_VenueListComponent$__f_quizleague$web$core$Component$$addedWatch = x$1
});
$c_Lquizleague_web_maintain_venue_VenueListComponent$.prototype.empty__sjs_js_Object = (function() {
  return this.Lquizleague_web_maintain_venue_VenueListComponent$__f_empty
});
$c_Lquizleague_web_maintain_venue_VenueListComponent$.prototype.quizleague$web$core$Component$$commonMethods__sci_Map = (function() {
  return this.Lquizleague_web_maintain_venue_VenueListComponent$__f_quizleague$web$core$Component$$commonMethods
});
$c_Lquizleague_web_maintain_venue_VenueListComponent$.prototype.quizleague$web$core$Component$_setter_$empty_$eq__sjs_js_Object__V = (function(x$1) {
  this.Lquizleague_web_maintain_venue_VenueListComponent$__f_empty = x$1
});
$c_Lquizleague_web_maintain_venue_VenueListComponent$.prototype.quizleague$web$core$Component$_setter_$quizleague$web$core$Component$$commonMethods_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_venue_VenueListComponent$__f_quizleague$web$core$Component$$commonMethods = x$1
});
$c_Lquizleague_web_maintain_venue_VenueListComponent$.prototype.sort__sjs_js_Array__sjs_js_Array = (function(items) {
  var f = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((x$1$2) => $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(x$1$2.name)));
  var ord = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_s_math_Ordering$String$();
  var ord$1 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_s_math_Ordering$$anon$1(ord, f);
  var len = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(items.length);
  var array = [];
  if ((len === 1)) {
    var i = 0;
    var len$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(items.length);
    while ((i < len$1)) {
      var index = i;
      var arg1 = items[index];
      array.push(arg1);
      i = ((1 + i) | 0)
    }
  } else if ((len > 1)) {
    var arr = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$ac_O(len);
    var elem = 0;
    elem = 0;
    var i$1 = 0;
    var len$2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(items.length);
    while ((i$1 < len$2)) {
      var index$1 = i$1;
      var arg1$1 = items[index$1];
      $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(arr).set(elem, arg1$1);
      elem = ((1 + elem) | 0);
      i$1 = ((1 + i$1) | 0)
    };
    $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_ju_Arrays$().sort__AO__ju_Comparator__V(arr, ord$1);
    elem = 0;
    while ((elem < $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(arr).u.length)) {
      var elem$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(arr).get(elem);
      array.push(elem$1);
      elem = ((1 + elem) | 0)
    }
  };
  return array
});
$c_Lquizleague_web_maintain_venue_VenueListComponent$.prototype.template__T = (function() {
  return this.Lquizleague_web_maintain_venue_VenueListComponent$__f_template
});
$c_Lquizleague_web_maintain_venue_VenueListComponent$.prototype.service__Lquizleague_web_service_GetService = (function() {
  return this.Lquizleague_web_maintain_venue_VenueListComponent$__f_service
});
var $d_Lquizleague_web_maintain_venue_VenueListComponent$ = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  Lquizleague_web_maintain_venue_VenueListComponent$: 0
}, false, "quizleague.web.maintain.venue.VenueListComponent$", {
  Lquizleague_web_maintain_venue_VenueListComponent$: 1,
  O: 1,
  Lquizleague_web_maintain_component_ItemListComponentConfig: 1,
  Lquizleague_web_core_Component: 1,
  Lquizleague_web_core_RouteComponent: 1,
  Lquizleague_web_names_VenueNames: 1,
  Lquizleague_web_names_ComponentNames: 1
});
export { $d_Lquizleague_web_maintain_venue_VenueListComponent$ as $d_Lquizleague_web_maintain_venue_VenueListComponent$ };
$c_Lquizleague_web_maintain_venue_VenueListComponent$.prototype.$classData = $d_Lquizleague_web_maintain_venue_VenueListComponent$;
var $n_Lquizleague_web_maintain_venue_VenueListComponent$;
function $m_Lquizleague_web_maintain_venue_VenueListComponent$() {
  if ((!$n_Lquizleague_web_maintain_venue_VenueListComponent$)) {
    $n_Lquizleague_web_maintain_venue_VenueListComponent$ = new $c_Lquizleague_web_maintain_venue_VenueListComponent$()
  };
  return $n_Lquizleague_web_maintain_venue_VenueListComponent$
}
export { $m_Lquizleague_web_maintain_venue_VenueListComponent$ as $m_Lquizleague_web_maintain_venue_VenueListComponent$ };
function $f_Lquizleague_web_service_fixtures_FixturePutService__mapIn__Lquizleague_web_model_Fixture__Lquizleague_domain_Fixture($thiz, model) {
  var $$x3 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(model.id);
  var this$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($thiz.Lquizleague_web_maintain_fixtures_FixtureService$__f_venueService);
  var ro = model.venue;
  var $$x2 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__refOption__Lquizleague_web_util_rx_RefObservable__s_Option(this$1, ro);
  var this$2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($thiz.Lquizleague_web_maintain_fixtures_FixtureService$__f_teamService);
  var ro$1 = model.home;
  var $$x1 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__ref__Lquizleague_web_util_rx_RefObservable__Lquizleague_domain_Ref(this$2, ro$1);
  var this$3 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($thiz.Lquizleague_web_maintain_fixtures_FixtureService$__f_teamService);
  var ro$2 = model.away;
  return new $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$c_Lquizleague_domain_Fixture($$x3, $$x2, $$x1, $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__ref__Lquizleague_web_util_rx_RefObservable__Lquizleague_domain_Ref(this$3, ro$2), $p_Lquizleague_web_service_fixtures_FixturePutService__mapInResult__Lquizleague_web_model_Result__s_Option($thiz, model.result), false)
}
export { $f_Lquizleague_web_service_fixtures_FixturePutService__mapIn__Lquizleague_web_model_Fixture__Lquizleague_domain_Fixture as $f_Lquizleague_web_service_fixtures_FixturePutService__mapIn__Lquizleague_web_model_Fixture__Lquizleague_domain_Fixture };
function $f_Lquizleague_web_service_fixtures_FixturePutService__instance__Lquizleague_web_model_Fixtures__Lquizleague_web_util_rx_RefObservable__Lquizleague_web_util_rx_RefObservable__Lquizleague_web_util_rx_RefObservable__Z__Lquizleague_web_model_Fixture($thiz, fx, home, away, venue, subsidiary) {
  var $$x3 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_util_UUID$().randomUUID__Lquizleague_web_util_UUID()).toString__T();
  var this$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($thiz.Lquizleague_web_maintain_fixtures_FixtureService$__f_venueService);
  var $$x2 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__refOption__Lquizleague_web_util_rx_RefObservable__s_Option(this$1, venue);
  var this$2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($thiz.Lquizleague_web_maintain_fixtures_FixtureService$__f_teamService);
  var $$x1 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__ref__Lquizleague_web_util_rx_RefObservable__Lquizleague_domain_Ref(this$2, home);
  var this$3 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($thiz.Lquizleague_web_maintain_fixtures_FixtureService$__f_teamService);
  var item = new $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$c_Lquizleague_domain_Fixture($$x3, $$x2, $$x1, $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__ref__Lquizleague_web_util_rx_RefObservable__Lquizleague_domain_Ref(this$3, away), $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_None$(), false);
  var parentKey = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(fx.key.key);
  var dom = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$as_Lquizleague_domain_Fixture($j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_PutService__withKey__Lquizleague_domain_Entity__T__Lquizleague_domain_Entity($thiz, item, parentKey));
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__mapOutWithKey__Lquizleague_domain_Entity__Lquizleague_web_model_Model($thiz, dom)
}
export { $f_Lquizleague_web_service_fixtures_FixturePutService__instance__Lquizleague_web_model_Fixtures__Lquizleague_web_util_rx_RefObservable__Lquizleague_web_util_rx_RefObservable__Lquizleague_web_util_rx_RefObservable__Z__Lquizleague_web_model_Fixture as $f_Lquizleague_web_service_fixtures_FixturePutService__instance__Lquizleague_web_model_Fixtures__Lquizleague_web_util_rx_RefObservable__Lquizleague_web_util_rx_RefObservable__Lquizleague_web_util_rx_RefObservable__Z__Lquizleague_web_model_Fixture };
function $p_Lquizleague_web_service_fixtures_FixturePutService__mapInResult__Lquizleague_web_model_Result__s_Option($thiz, result) {
  var this$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_Option$().apply__O__s_Option(result));
  if (this$1.isEmpty__Z()) {
    return $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_None$()
  } else {
    var arg1 = this$1.get__O();
    var $$x3 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(arg1.homeScore);
    var $$x2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(arg1.awayScore);
    var $$x1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_Option$();
    var this$2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($thiz.Lquizleague_web_maintain_fixtures_FixtureService$__f_userService);
    var ro = arg1.submitter;
    return new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_s_Some(new $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$c_Lquizleague_domain_Result($$x3, $$x2, $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($$x1).apply__O__s_Option($j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__ref__Lquizleague_web_util_rx_RefObservable__Lquizleague_domain_Ref(this$2, ro)), $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_Option$().apply__O__s_Option($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(arg1.note))))
  }
}
export { $p_Lquizleague_web_service_fixtures_FixturePutService__mapInResult__Lquizleague_web_model_Result__s_Option as $p_Lquizleague_web_service_fixtures_FixturePutService__mapInResult__Lquizleague_web_model_Result__s_Option };
function $f_Lquizleague_web_service_fixtures_FixturePutService__enc__Lquizleague_domain_Fixture__Lio_circe_Json($thiz, item) {
  var encoder = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_util_json_codecs_DomainCodecs$().Lquizleague_util_json_codecs_DomainCodecs$__f_fixtureEncoder;
  return $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(encoder).apply__O__Lio_circe_Json(item)
}
export { $f_Lquizleague_web_service_fixtures_FixturePutService__enc__Lquizleague_domain_Fixture__Lio_circe_Json as $f_Lquizleague_web_service_fixtures_FixturePutService__enc__Lquizleague_domain_Fixture__Lio_circe_Json };
function $f_Lquizleague_web_service_fixtures_FixturesPutService__mapIn__Lquizleague_web_model_Fixtures__Lquizleague_domain_Fixtures($thiz, model) {
  var $$x3 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(model.id);
  var $$x2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(model.description);
  var date = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(model.date);
  var this$2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_Ljava_time_LocalDate$();
  var $$x1 = this$2.parse__jl_CharSequence__Ljava_time_format_DateTimeFormatter__Ljava_time_LocalDate(date, $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_Ljava_time_format_DateTimeFormatter$().ISO_LOCAL_DATE__Ljava_time_format_DateTimeFormatter());
  var date$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(model.start);
  var this$4 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_Ljava_time_LocalTime$();
  return new $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$c_Lquizleague_domain_Fixtures($$x3, $$x2, $$x1, this$4.parse__jl_CharSequence__Ljava_time_format_DateTimeFormatter__Ljava_time_LocalTime(date$1, $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_Ljava_time_format_DateTimeFormatter$().ISO_LOCAL_TIME__Ljava_time_format_DateTimeFormatter()), $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_Option$().apply__O__s_Option($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(model.questionsUrl)), false)
}
export { $f_Lquizleague_web_service_fixtures_FixturesPutService__mapIn__Lquizleague_web_model_Fixtures__Lquizleague_domain_Fixtures as $f_Lquizleague_web_service_fixtures_FixturesPutService__mapIn__Lquizleague_web_model_Fixtures__Lquizleague_domain_Fixtures };
function $f_Lquizleague_web_service_fixtures_FixturesPutService__make__Lquizleague_domain_Fixtures($thiz) {
  var $$x1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_util_UUID$().randomUUID__Lquizleague_web_util_UUID()).toString__T();
  var this$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_Ljava_time_LocalDate$();
  return new $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$c_Lquizleague_domain_Fixtures($$x1, "", this$1.now__Ljava_time_Clock__Ljava_time_LocalDate(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_Ljava_time_Clock$SystemClock($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_Ljava_time_ZoneId$().systemDefault__Ljava_time_ZoneId())), $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_Ljava_time_LocalTime$().of__I__I__Ljava_time_LocalTime(20, 30), $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_None$(), false)
}
export { $f_Lquizleague_web_service_fixtures_FixturesPutService__make__Lquizleague_domain_Fixtures as $f_Lquizleague_web_service_fixtures_FixturesPutService__make__Lquizleague_domain_Fixtures };
function $f_Lquizleague_web_service_fixtures_FixturesPutService__instance__Lquizleague_web_model_Competition__sjs_js_Array__Lquizleague_web_model_Fixtures($thiz, competition, fixtures) {
  var id = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_util_UUID$().randomUUID__Lquizleague_web_util_UUID()).toString__T();
  if ($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uZ((competition instanceof $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$a_Lquizleague_web_model_LeagueCompetition()))) {
    var $$x3 = $p_Lquizleague_web_service_fixtures_FixturesPutService__weekText$1__sjs_js_Array__T($thiz, fixtures);
    var $$x2 = $p_Lquizleague_web_service_fixtures_FixturesPutService__findNextDate$1__Lquizleague_web_model_LeagueCompetition__sjs_js_Array__Ljava_time_LocalDate($thiz, competition, fixtures);
    var date = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(competition.startTime);
    var this$2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_Ljava_time_LocalTime$();
    var $$x1 = new $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$c_Lquizleague_domain_Fixtures(id, $$x3, $$x2, this$2.parse__jl_CharSequence__Ljava_time_format_DateTimeFormatter__Ljava_time_LocalTime(date, $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_Ljava_time_format_DateTimeFormatter$().ISO_LOCAL_TIME__Ljava_time_format_DateTimeFormatter()), $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_None$(), false)
  } else if ($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uZ((competition instanceof $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$a_Lquizleague_web_model_CupCompetition()))) {
    var this$4 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_Ljava_time_LocalDate$();
    var $$x4 = this$4.now__Ljava_time_Clock__Ljava_time_LocalDate(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_Ljava_time_Clock$SystemClock($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_Ljava_time_ZoneId$().systemDefault__Ljava_time_ZoneId()));
    var date$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(competition.startTime);
    var this$7 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_Ljava_time_LocalTime$();
    var $$x1 = new $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$c_Lquizleague_domain_Fixtures(id, "", $$x4, this$7.parse__jl_CharSequence__Ljava_time_format_DateTimeFormatter__Ljava_time_LocalTime(date$1, $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_Ljava_time_format_DateTimeFormatter$().ISO_LOCAL_TIME__Ljava_time_format_DateTimeFormatter()), $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_None$(), false)
  } else {
    var $$x1 = null
  };
  var this$9 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($$x1);
  var parentKey = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(competition.key.key);
  var key = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__key__T__T__Lquizleague_web_model_Key($thiz, parentKey, id);
  var key$1 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__key__Lquizleague_web_model_Key__s_Option($thiz, key);
  var entity = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_domain_Entity__withKey__s_Option__Lquizleague_domain_Entity(this$9, key$1);
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_PutService__add__Lquizleague_domain_Entity__Lquizleague_web_model_Model($thiz, entity)
}
export { $f_Lquizleague_web_service_fixtures_FixturesPutService__instance__Lquizleague_web_model_Competition__sjs_js_Array__Lquizleague_web_model_Fixtures as $f_Lquizleague_web_service_fixtures_FixturesPutService__instance__Lquizleague_web_model_Competition__sjs_js_Array__Lquizleague_web_model_Fixtures };
function $f_Lquizleague_web_service_fixtures_FixturesPutService__enc__Lquizleague_domain_Fixtures__Lio_circe_Json($thiz, item) {
  var encoder = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_util_json_codecs_DomainCodecs$().Lquizleague_util_json_codecs_DomainCodecs$__f_fixturesEncoder;
  return $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(encoder).apply__O__Lio_circe_Json(item)
}
export { $f_Lquizleague_web_service_fixtures_FixturesPutService__enc__Lquizleague_domain_Fixtures__Lio_circe_Json as $f_Lquizleague_web_service_fixtures_FixturesPutService__enc__Lquizleague_domain_Fixtures__Lio_circe_Json };
function $p_Lquizleague_web_service_fixtures_FixturesPutService__findNextDate$1__Lquizleague_web_model_LeagueCompetition__sjs_js_Array__Ljava_time_LocalDate($thiz, c, fixtures$1) {
  var f = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((x$1$2) => $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(x$1$2.date)));
  var ord = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_util_collection_package$().Desc__s_math_Ordering__s_math_Ordering($j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_s_math_Ordering$String$());
  var this$3 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(ord);
  var ord$1 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_s_math_Ordering$$anon$1(this$3, f);
  var len = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(fixtures$1.length);
  var array = [];
  if ((len === 1)) {
    var i = 0;
    var len$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(fixtures$1.length);
    while ((i < len$1)) {
      var index = i;
      var arg1 = fixtures$1[index];
      array.push(arg1);
      i = ((1 + i) | 0)
    }
  } else if ((len > 1)) {
    var arr = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$ac_O(len);
    var elem = 0;
    elem = 0;
    var i$1 = 0;
    var len$2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(fixtures$1.length);
    while ((i$1 < len$2)) {
      var index$1 = i$1;
      var arg1$1 = fixtures$1[index$1];
      $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(arr).set(elem, arg1$1);
      elem = ((1 + elem) | 0);
      i$1 = ((1 + i$1) | 0)
    };
    $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_ju_Arrays$().sort__AO__ju_Comparator__V(arr, ord$1);
    elem = 0;
    while ((elem < $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(arr).u.length)) {
      var elem$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(arr).get(elem);
      array.push(elem$1);
      elem = ((1 + elem) | 0)
    }
  };
  var this$6 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$ct_sjs_js_ArrayOps__sjs_js_Array__(new $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$c_sjs_js_ArrayOps(), array);
  var this$7 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$f_sc_TraversableLike__headOption__s_Option(this$6));
  if (this$7.isEmpty__Z()) {
    var $$x1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_None$()
  } else {
    var arg1$2 = this$7.get__O();
    var date = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(arg1$2.date);
    var this$9 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_Ljava_time_LocalDate$();
    var date$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this$9.parse__jl_CharSequence__Ljava_time_format_DateTimeFormatter__Ljava_time_LocalDate(date, $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_Ljava_time_format_DateTimeFormatter$().ISO_LOCAL_DATE__Ljava_time_format_DateTimeFormatter())).plusWeeks__J__Ljava_time_LocalDate(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_RTLong(1, 0));
    var text = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(date$1).toString__T();
    var this$11 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_Ljava_time_LocalDate$();
    var $$x1 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_s_Some(this$11.parse__jl_CharSequence__Ljava_time_format_DateTimeFormatter__Ljava_time_LocalDate(text, $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_Ljava_time_format_DateTimeFormatter$().ISO_LOCAL_DATE__Ljava_time_format_DateTimeFormatter()))
  };
  var this$12 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($$x1);
  return $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_Ljava_time_LocalDate((this$12.isEmpty__Z() ? $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_util_DateTimeConverters$().dateToLocalDate__sjs_js_Date__Ljava_time_LocalDate(new Date($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uD(Date.now()))) : this$12.get__O()))
}
export { $p_Lquizleague_web_service_fixtures_FixturesPutService__findNextDate$1__Lquizleague_web_model_LeagueCompetition__sjs_js_Array__Ljava_time_LocalDate as $p_Lquizleague_web_service_fixtures_FixturesPutService__findNextDate$1__Lquizleague_web_model_LeagueCompetition__sjs_js_Array__Ljava_time_LocalDate };
function $p_Lquizleague_web_service_fixtures_FixturesPutService__weekText$1__sjs_js_Array__T($thiz, fixtures$1) {
  return ("Week " + ((1 + $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(fixtures$1.length)) | 0))
}
export { $p_Lquizleague_web_service_fixtures_FixturesPutService__weekText$1__sjs_js_Array__T as $p_Lquizleague_web_service_fixtures_FixturesPutService__weekText$1__sjs_js_Array__T };
function $f_Lquizleague_web_service_globaltext_GlobalTextPutService__mapIn__Lquizleague_web_model_GlobalText__Lquizleague_domain_GlobalText($thiz, globalText) {
  var $$x3 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(globalText.id);
  var $$x2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(globalText.name);
  var array = globalText.text;
  var array$1 = [];
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length);
  var i = 0;
  var len = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length);
  while ((i < len)) {
    var index = i;
    var arg1 = array[index];
    var elem = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(arg1.name);
    array$1.push(elem);
    i = ((1 + i) | 0)
  };
  var array$2 = globalText.text;
  var array$3 = [];
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array$2.length);
  var i$1 = 0;
  var len$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array$2.length);
  while ((i$1 < len$1)) {
    var index$1 = i$1;
    var arg1$1 = array$2[index$1];
    var elem$1 = new $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$c_Lquizleague_domain_Ref($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(arg1$1.text.typeName), $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(arg1$1.text.id), $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_None$());
    array$3.push(elem$1);
    i$1 = ((1 + i$1) | 0)
  };
  var array$4 = [];
  var i$2 = 0;
  var x = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array$1.length);
  var that = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array$3.length);
  var len$2 = ((x < that) ? x : that);
  while ((i$2 < len$2)) {
    var index$2 = i$2;
    var $$x1 = array$1[index$2];
    var index$3 = i$2;
    var elem$2 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2($$x1, array$3[index$3]);
    array$4.push(elem$2);
    i$2 = ((1 + i$2) | 0)
  };
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sci_Map$();
  var b = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sci_Map$MapBuilderImpl();
  if (b.sci_Map$MapBuilderImpl__f_switchedToHashMapBuilder) {
    var this$15 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(b.sci_Map$MapBuilderImpl__f_hashMapBuilder);
    var i$3 = 0;
    var len$3 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array$4.length);
    while ((i$3 < len$3)) {
      var index$4 = i$3;
      var arg1$2 = array$4[index$4];
      this$15.$plus$eq__T2__sci_HashMap$HashMapBuilder($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T2(arg1$2));
      i$3 = ((1 + i$3) | 0)
    }
  } else {
    var i$4 = 0;
    var len$4 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array$4.length);
    while ((i$4 < len$4)) {
      var index$5 = i$4;
      var arg1$3 = array$4[index$5];
      b.$plus$eq__T2__sci_Map$MapBuilderImpl($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T2(arg1$3));
      i$4 = ((1 + i$4) | 0)
    }
  };
  return new $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$c_Lquizleague_domain_GlobalText($$x3, $$x2, b.result__sci_Map(), $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uZ(globalText.retired))
}
export { $f_Lquizleague_web_service_globaltext_GlobalTextPutService__mapIn__Lquizleague_web_model_GlobalText__Lquizleague_domain_GlobalText as $f_Lquizleague_web_service_globaltext_GlobalTextPutService__mapIn__Lquizleague_web_model_GlobalText__Lquizleague_domain_GlobalText };
function $f_Lquizleague_web_service_globaltext_GlobalTextPutService__make__Lquizleague_domain_GlobalText($thiz) {
  var item = new $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$c_Lquizleague_domain_GlobalText($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_util_UUID$().randomUUID__Lquizleague_web_util_UUID()).toString__T(), "", $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_sci_Map($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_Predef$().s_Predef$__f_Map).apply__sc_Seq__sc_GenMap($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sci_Nil$())), false);
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$as_Lquizleague_domain_GlobalText($j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_PutService__withKey__Lquizleague_domain_Entity__T__Lquizleague_domain_Entity($thiz, item, null))
}
export { $f_Lquizleague_web_service_globaltext_GlobalTextPutService__make__Lquizleague_domain_GlobalText as $f_Lquizleague_web_service_globaltext_GlobalTextPutService__make__Lquizleague_domain_GlobalText };
function $f_Lquizleague_web_service_globaltext_GlobalTextPutService__save__Lquizleague_web_model_GlobalText__Lrxscalajs_Observable($thiz, globalText) {
  var this$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($thiz.Lquizleague_web_maintain_globaltext_GlobalTextService$__f_textService);
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_DirtyListService__saveAllDirty__V(this$1);
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_PutService__save__Lquizleague_web_model_Model__Lrxscalajs_Observable($thiz, globalText)
}
export { $f_Lquizleague_web_service_globaltext_GlobalTextPutService__save__Lquizleague_web_model_GlobalText__Lrxscalajs_Observable as $f_Lquizleague_web_service_globaltext_GlobalTextPutService__save__Lquizleague_web_model_GlobalText__Lrxscalajs_Observable };
function $f_Lquizleague_web_service_globaltext_GlobalTextPutService__entryInstance__Lquizleague_web_model_TextEntry($thiz) {
  var this$2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($thiz.Lquizleague_web_maintain_globaltext_GlobalTextService$__f_textService);
  var this$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($thiz.Lquizleague_web_maintain_globaltext_GlobalTextService$__f_textService);
  var item = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_DirtyListService__instance__Lquizleague_web_model_Model(this$1);
  var text = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_PutService__getRef__Lquizleague_web_model_Model__Lquizleague_domain_Ref(this$2, item);
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_model_TextEntry$().apply__T__Lquizleague_web_model_Ref__Lquizleague_web_model_TextEntry("", $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_model_Ref$().apply__T__T__Lquizleague_web_model_Ref($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(text).Lquizleague_domain_Ref__f_typeName, $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(text).Lquizleague_domain_Ref__f_id))
}
export { $f_Lquizleague_web_service_globaltext_GlobalTextPutService__entryInstance__Lquizleague_web_model_TextEntry as $f_Lquizleague_web_service_globaltext_GlobalTextPutService__entryInstance__Lquizleague_web_model_TextEntry };
function $f_Lquizleague_web_service_globaltext_GlobalTextPutService__enc__Lquizleague_domain_GlobalText__Lio_circe_Json($thiz, item) {
  var encoder = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_util_json_codecs_DomainCodecs$().Lquizleague_util_json_codecs_DomainCodecs$__f_globalTextEncoder;
  return $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(encoder).apply__O__Lio_circe_Json(item)
}
export { $f_Lquizleague_web_service_globaltext_GlobalTextPutService__enc__Lquizleague_domain_GlobalText__Lio_circe_Json as $f_Lquizleague_web_service_globaltext_GlobalTextPutService__enc__Lquizleague_domain_GlobalText__Lio_circe_Json };
function $f_Lquizleague_web_service_leaguetable_LeagueTablePutService__mapIn__Lquizleague_web_model_LeagueTable__Lquizleague_domain_LeagueTable($thiz, model) {
  var $$x2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(model.id);
  var $$x1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(model.description);
  var array = model.rows;
  var array$1 = [];
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length);
  var i = 0;
  var len = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length);
  while ((i < len)) {
    var index = i;
    var arg1 = array[index];
    var this$3 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($thiz.Lquizleague_web_maintain_leaguetable_LeagueTableService$__f_teamService);
    var ro = arg1.team;
    var elem = new $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$c_Lquizleague_domain_LeagueTableRow($j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__ref__Lquizleague_web_util_rx_RefObservable__Lquizleague_domain_Ref(this$3, ro), $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(arg1.position), $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(arg1.played), $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(arg1.won), $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(arg1.lost), $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(arg1.drawn), $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(arg1.leaguePoints), $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(arg1.matchPointsFor), $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(arg1.matchPointsAgainst));
    array$1.push(elem);
    i = ((1 + i) | 0)
  };
  var i$1 = (((-1) + $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array$1.length)) | 0);
  var result = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sci_Nil$();
  while ((i$1 >= 0)) {
    var this$5 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(result);
    var index$1 = i$1;
    var x = array$1[index$1];
    result = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sci_$colon$colon(x, this$5);
    i$1 = (((-1) + i$1) | 0)
  };
  return new $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$c_Lquizleague_domain_LeagueTable($$x2, $$x1, result, false)
}
export { $f_Lquizleague_web_service_leaguetable_LeagueTablePutService__mapIn__Lquizleague_web_model_LeagueTable__Lquizleague_domain_LeagueTable as $f_Lquizleague_web_service_leaguetable_LeagueTablePutService__mapIn__Lquizleague_web_model_LeagueTable__Lquizleague_domain_LeagueTable };
function $f_Lquizleague_web_service_leaguetable_LeagueTablePutService__enc__Lquizleague_domain_LeagueTable__Lio_circe_Json($thiz, item) {
  var encoder = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_util_json_codecs_DomainCodecs$().Lquizleague_util_json_codecs_DomainCodecs$__f_leagueTableEncoder;
  return $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(encoder).apply__O__Lio_circe_Json(item)
}
export { $f_Lquizleague_web_service_leaguetable_LeagueTablePutService__enc__Lquizleague_domain_LeagueTable__Lio_circe_Json as $f_Lquizleague_web_service_leaguetable_LeagueTablePutService__enc__Lquizleague_domain_LeagueTable__Lio_circe_Json };
function $f_Lquizleague_web_service_leaguetable_LeagueTablePutService__sortTable__Lquizleague_web_model_LeagueTable__Lquizleague_web_model_LeagueTable($thiz, table) {
  var dom = $f_Lquizleague_web_service_leaguetable_LeagueTablePutService__mapIn__Lquizleague_web_model_LeagueTable__Lquizleague_domain_LeagueTable($thiz, table);
  var this$3 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(dom).Lquizleague_domain_LeagueTable__f_rows);
  var f = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((l$2) => {
    var l = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$as_Lquizleague_domain_LeagueTableRow(l$2);
    return new $c_T5($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(l).Lquizleague_domain_LeagueTableRow__f_leaguePoints, $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(l).Lquizleague_domain_LeagueTableRow__f_matchPointsFor, ((-$j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(l).Lquizleague_domain_LeagueTableRow__f_matchPointsAgainst) | 0), $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(l).Lquizleague_domain_LeagueTableRow__f_won, $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(l).Lquizleague_domain_LeagueTableRow__f_drawn)
  }));
  var $$x1 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_util_collection_package$();
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_math_Ordering$();
  var ord1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_math_Ordering$Int$();
  var ord2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_math_Ordering$Int$();
  var ord3 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_math_Ordering$Int$();
  var ord4 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_math_Ordering$Int$();
  var ord5 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_math_Ordering$Int$();
  var ord = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($$x1).Desc__s_math_Ordering__s_math_Ordering(new $c_s_math_Ordering$Tuple5Ordering(ord1, ord2, ord3, ord4, ord5));
  var rows = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_sci_List($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$f_sc_SeqLike__sortBy__F1__s_math_Ordering__O(this$3, f, ord));
  var this$4 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(dom);
  var x$2 = this$4.Lquizleague_domain_LeagueTable__f_id;
  var this$5 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(dom);
  var x$3 = this$5.Lquizleague_domain_LeagueTable__f_description;
  var this$6 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(dom);
  var x$4 = this$6.Lquizleague_domain_LeagueTable__f_retired;
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(dom);
  var dom$1 = new $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$c_Lquizleague_domain_LeagueTable(x$2, x$3, rows, x$4);
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_leaguetable_LeagueTableGetService__mapOutSparse__Lquizleague_domain_LeagueTable__Lquizleague_web_model_LeagueTable($thiz, dom$1)
}
export { $f_Lquizleague_web_service_leaguetable_LeagueTablePutService__sortTable__Lquizleague_web_model_LeagueTable__Lquizleague_web_model_LeagueTable as $f_Lquizleague_web_service_leaguetable_LeagueTablePutService__sortTable__Lquizleague_web_model_LeagueTable__Lquizleague_web_model_LeagueTable };
function $f_Lquizleague_web_service_season_SeasonPutService__mapIn__Lquizleague_web_model_Season__Lquizleague_domain_Season($thiz, season) {
  var $$x6 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(season.id);
  var int = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(season.startYear);
  var $$x5 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_Ljava_time_Year$().of__I__Ljava_time_Year(int);
  var int$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(season.endYear);
  var $$x4 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_Ljava_time_Year$().of__I__Ljava_time_Year(int$1);
  var this$3 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($thiz.Lquizleague_web_maintain_season_SeasonService$__f_textService);
  var ro = season.text;
  var $$x3 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__ref__Lquizleague_web_util_rx_RefObservable__Lquizleague_domain_Ref(this$3, ro);
  var array = season.calendar;
  var array$1 = [];
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length);
  var i = 0;
  var len = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length);
  while ((i < len)) {
    var index = i;
    var arg1 = array[index];
    var this$6 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($thiz.Lquizleague_web_maintain_season_SeasonService$__f_venueService);
    var ro$1 = arg1.venue;
    var $$x2 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__refOption__Lquizleague_web_util_rx_RefObservable__s_Option(this$6, ro$1);
    var date = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(arg1.date);
    var this$8 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_Ljava_time_LocalDate$();
    var $$x1 = this$8.parse__jl_CharSequence__Ljava_time_format_DateTimeFormatter__Ljava_time_LocalDate(date, $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_Ljava_time_format_DateTimeFormatter$().ISO_LOCAL_DATE__Ljava_time_format_DateTimeFormatter());
    var date$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(arg1.time);
    var this$10 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_Ljava_time_LocalTime$();
    var elem = new $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$c_Lquizleague_domain_CalendarEvent($$x2, $$x1, this$10.parse__jl_CharSequence__Ljava_time_format_DateTimeFormatter__Ljava_time_LocalTime(date$1, $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_Ljava_time_format_DateTimeFormatter$().ISO_LOCAL_TIME__Ljava_time_format_DateTimeFormatter()), $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_util_DateTimeConverters$().intToDuration__F__Ljava_time_Duration($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uF(arg1.duration)), $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(arg1.description));
    array$1.push(elem);
    i = ((1 + i) | 0)
  };
  var i$1 = (((-1) + $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array$1.length)) | 0);
  var result = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sci_Nil$();
  while ((i$1 >= 0)) {
    var this$12 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(result);
    var index$1 = i$1;
    var x = array$1[index$1];
    result = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sci_$colon$colon(x, this$12);
    i$1 = (((-1) + i$1) | 0)
  };
  return new $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$c_Lquizleague_domain_Season($$x6, $$x5, $$x4, $$x3, result, false)
}
export { $f_Lquizleague_web_service_season_SeasonPutService__mapIn__Lquizleague_web_model_Season__Lquizleague_domain_Season as $f_Lquizleague_web_service_season_SeasonPutService__mapIn__Lquizleague_web_model_Season__Lquizleague_domain_Season };
function $f_Lquizleague_web_service_season_SeasonPutService__make__Lquizleague_domain_Season($thiz) {
  var $$x3 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_util_UUID$().randomUUID__Lquizleague_web_util_UUID()).toString__T();
  var this$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uD(new Date().getFullYear());
  var text = ("" + this$1);
  var this$3 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_Ljava_time_Year$();
  var $$x2 = this$3.parse__jl_CharSequence__Ljava_time_format_DateTimeFormatter__Ljava_time_Year(text, $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$p_Ljava_time_Year$__PARSER__Ljava_time_format_DateTimeFormatter(this$3));
  var this$4 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uD(new Date().getFullYear());
  var text$1 = ("" + this$4);
  var this$6 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_Ljava_time_Year$();
  var $$x1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this$6.parse__jl_CharSequence__Ljava_time_format_DateTimeFormatter__Ljava_time_Year(text$1, $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$p_Ljava_time_Year$__PARSER__Ljava_time_format_DateTimeFormatter(this$6))).plusYears__J__Ljava_time_Year(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_RTLong(1, 0));
  var this$8 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($thiz.Lquizleague_web_maintain_season_SeasonService$__f_textService);
  var this$7 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($thiz.Lquizleague_web_maintain_season_SeasonService$__f_textService);
  var item = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_DirtyListService__instance__Lquizleague_web_model_Model(this$7);
  var u = new $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$c_Lquizleague_domain_Season($$x3, $$x2, $$x1, $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_PutService__getRef__Lquizleague_web_model_Model__Lquizleague_domain_Ref(this$8, item), $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sci_Nil$(), false);
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$as_Lquizleague_domain_Season($j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_PutService__withKey__Lquizleague_domain_Entity__T__Lquizleague_domain_Entity($thiz, u, null))
}
export { $f_Lquizleague_web_service_season_SeasonPutService__make__Lquizleague_domain_Season as $f_Lquizleague_web_service_season_SeasonPutService__make__Lquizleague_domain_Season };
function $f_Lquizleague_web_service_season_SeasonPutService__flush__V($thiz) {
  var this$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($thiz.Lquizleague_web_maintain_season_SeasonService$__f_textService);
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_DirtyListService__flush__V(this$1);
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_season_SeasonGetService__flush__V($thiz)
}
export { $f_Lquizleague_web_service_season_SeasonPutService__flush__V as $f_Lquizleague_web_service_season_SeasonPutService__flush__V };
function $f_Lquizleague_web_service_season_SeasonPutService__enc__Lquizleague_domain_Season__Lio_circe_Json($thiz, item) {
  var encoder = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_util_json_codecs_DomainCodecs$().Lquizleague_util_json_codecs_DomainCodecs$__f_seasonEncoder;
  return $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(encoder).apply__O__Lio_circe_Json(item)
}
export { $f_Lquizleague_web_service_season_SeasonPutService__enc__Lquizleague_domain_Season__Lio_circe_Json as $f_Lquizleague_web_service_season_SeasonPutService__enc__Lquizleague_domain_Season__Lio_circe_Json };
function $f_Lquizleague_web_service_season_SeasonPutService__save__Lquizleague_web_model_Season__Lrxscalajs_Observable($thiz, season) {
  var this$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($thiz.Lquizleague_web_maintain_season_SeasonService$__f_textService);
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_DirtyListService__saveAllDirty__V(this$1);
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_PutService__save__Lquizleague_web_model_Model__Lrxscalajs_Observable($thiz, season)
}
export { $f_Lquizleague_web_service_season_SeasonPutService__save__Lquizleague_web_model_Season__Lrxscalajs_Observable as $f_Lquizleague_web_service_season_SeasonPutService__save__Lquizleague_web_model_Season__Lrxscalajs_Observable };
function $p_Lquizleague_web_service_statistics_CompetitionStatisticsPutService__toDom__Lquizleague_web_model_ResultEntry__Lquizleague_domain_stats_ResultEntry($thiz, s) {
  var $$x4 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_Option$().apply__O__s_Option($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(s.seasonText));
  var this$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($thiz.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$__f_seasonService);
  var ro = s.season;
  var $$x3 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__refOption__Lquizleague_web_util_rx_RefObservable__s_Option(this$1, ro);
  var this$2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($thiz.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$__f_competitionService);
  var ro$1 = s.competition;
  var $$x2 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__refOption__Lquizleague_web_util_rx_RefObservable__s_Option(this$2, ro$1);
  var $$x1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_Option$().apply__O__s_Option($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(s.teamText));
  var this$3 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($thiz.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$__f_teamService);
  var ro$2 = s.team;
  return new $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$c_Lquizleague_domain_stats_ResultEntry($$x4, $$x3, $$x2, $$x1, $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__refOption__Lquizleague_web_util_rx_RefObservable__s_Option(this$3, ro$2), $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(s.position))
}
export { $p_Lquizleague_web_service_statistics_CompetitionStatisticsPutService__toDom__Lquizleague_web_model_ResultEntry__Lquizleague_domain_stats_ResultEntry as $p_Lquizleague_web_service_statistics_CompetitionStatisticsPutService__toDom__Lquizleague_web_model_ResultEntry__Lquizleague_domain_stats_ResultEntry };
function $f_Lquizleague_web_service_statistics_CompetitionStatisticsPutService__mapIn__Lquizleague_web_model_CompetitionStatistics__Lquizleague_domain_stats_CompetitionStatistics($thiz, s) {
  var $$x2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(s.id);
  var $$x1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(s.competitionName);
  var array = s.results;
  var array$1 = [];
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length);
  var i = 0;
  var len = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length);
  while ((i < len)) {
    var index = i;
    var arg1 = array[index];
    var elem = $p_Lquizleague_web_service_statistics_CompetitionStatisticsPutService__toDom__Lquizleague_web_model_ResultEntry__Lquizleague_domain_stats_ResultEntry($thiz, arg1);
    array$1.push(elem);
    i = ((1 + i) | 0)
  };
  var i$1 = (((-1) + $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array$1.length)) | 0);
  var result = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sci_Nil$();
  while ((i$1 >= 0)) {
    var this$4 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(result);
    var index$1 = i$1;
    var x = array$1[index$1];
    result = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sci_$colon$colon(x, this$4);
    i$1 = (((-1) + i$1) | 0)
  };
  return new $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$c_Lquizleague_domain_stats_CompetitionStatistics($$x2, $$x1, result, false)
}
export { $f_Lquizleague_web_service_statistics_CompetitionStatisticsPutService__mapIn__Lquizleague_web_model_CompetitionStatistics__Lquizleague_domain_stats_CompetitionStatistics as $f_Lquizleague_web_service_statistics_CompetitionStatisticsPutService__mapIn__Lquizleague_web_model_CompetitionStatistics__Lquizleague_domain_stats_CompetitionStatistics };
function $f_Lquizleague_web_service_statistics_CompetitionStatisticsPutService__make__Lquizleague_domain_stats_CompetitionStatistics($thiz) {
  var item = new $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$c_Lquizleague_domain_stats_CompetitionStatistics($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_util_UUID$().randomUUID__Lquizleague_web_util_UUID()).toString__T(), "", $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sci_Nil$(), false);
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$as_Lquizleague_domain_stats_CompetitionStatistics($j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_PutService__withKey__Lquizleague_domain_Entity__T__Lquizleague_domain_Entity($thiz, item, null))
}
export { $f_Lquizleague_web_service_statistics_CompetitionStatisticsPutService__make__Lquizleague_domain_stats_CompetitionStatistics as $f_Lquizleague_web_service_statistics_CompetitionStatisticsPutService__make__Lquizleague_domain_stats_CompetitionStatistics };
function $f_Lquizleague_web_service_statistics_CompetitionStatisticsPutService__enc__Lquizleague_domain_stats_CompetitionStatistics__Lio_circe_Json($thiz, item) {
  var encoder = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_util_json_codecs_DomainCodecs$().Lquizleague_util_json_codecs_DomainCodecs$__f_competitonStatisticsEncoder;
  return $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(encoder).apply__O__Lio_circe_Json(item)
}
export { $f_Lquizleague_web_service_statistics_CompetitionStatisticsPutService__enc__Lquizleague_domain_stats_CompetitionStatistics__Lio_circe_Json as $f_Lquizleague_web_service_statistics_CompetitionStatisticsPutService__enc__Lquizleague_domain_stats_CompetitionStatistics__Lio_circe_Json };
/** @constructor */
function $c_T5(_1, _2, _3, _4, _5) {
  this.T5__f__1 = null;
  this.T5__f__2 = null;
  this.T5__f__3 = null;
  this.T5__f__4 = null;
  this.T5__f__5 = null;
  this.T5__f__1 = _1;
  this.T5__f__2 = _2;
  this.T5__f__3 = _3;
  this.T5__f__4 = _4;
  this.T5__f__5 = _5
}
export { $c_T5 as $c_T5 };
$c_T5.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_T5.prototype.constructor = $c_T5;
/** @constructor */
function $h_T5() {
  /*<skip>*/
}
export { $h_T5 as $h_T5 };
$h_T5.prototype = $c_T5.prototype;
$c_T5.prototype.productArity__I = (function() {
  return 5
});
$c_T5.prototype.productElement__I__O = (function(n) {
  return $f_s_Product5__productElement__I__O(this, n)
});
$c_T5.prototype.toString__T = (function() {
  return (((((((((("(" + this.T5__f__1) + ",") + this.T5__f__2) + ",") + this.T5__f__3) + ",") + this.T5__f__4) + ",") + this.T5__f__5) + ")")
});
$c_T5.prototype.productPrefix__T = (function() {
  return "Tuple5"
});
$c_T5.prototype.productIterator__sc_Iterator = (function() {
  return new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sr_ScalaRunTime$$anon$1(this)
});
$c_T5.prototype.hashCode__I = (function() {
  var this$2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__I(this, (-889275714))
});
$c_T5.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_T5)) {
    var Tuple5$1 = $as_T5(x$1);
    return (((($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sr_BoxesRunTime$().equals__O__O__Z(this.T5__f__1, $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(Tuple5$1).T5__f__1) && $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sr_BoxesRunTime$().equals__O__O__Z(this.T5__f__2, $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(Tuple5$1).T5__f__2)) && $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sr_BoxesRunTime$().equals__O__O__Z(this.T5__f__3, $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(Tuple5$1).T5__f__3)) && $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sr_BoxesRunTime$().equals__O__O__Z(this.T5__f__4, $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(Tuple5$1).T5__f__4)) && $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sr_BoxesRunTime$().equals__O__O__Z(this.T5__f__5, $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(Tuple5$1).T5__f__5))
  } else {
    return false
  }
});
function $as_T5(obj) {
  return (((obj instanceof $c_T5) || (obj === null)) ? obj : $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$throwClassCastException(obj, "scala.Tuple5"))
}
export { $as_T5 as $as_T5 };
function $isArrayOf_T5(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.T5)))
}
export { $isArrayOf_T5 as $isArrayOf_T5 };
function $asArrayOf_T5(obj, depth) {
  return (($isArrayOf_T5(obj, depth) || (obj === null)) ? obj : $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$throwArrayCastException(obj, "Lscala.Tuple5;", depth))
}
export { $asArrayOf_T5 as $asArrayOf_T5 };
var $d_T5 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  T5: 0
}, false, "scala.Tuple5", {
  T5: 1,
  O: 1,
  s_Product5: 1,
  s_Product: 1,
  s_Equals: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
export { $d_T5 as $d_T5 };
$c_T5.prototype.$classData = $d_T5;
function $p_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$__uriRoot$lzycompute__T($thiz) {
  if ((!$thiz.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$__f_bitmap$0)) {
    $thiz.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$__f_uriRoot = $thiz.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$__f_typeName;
    $thiz.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$__f_bitmap$0 = true
  };
  return $thiz.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$__f_uriRoot
}
export { $p_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$__uriRoot$lzycompute__T as $p_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$__uriRoot$lzycompute__T };
/** @constructor */
function $c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$() {
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$__f_teamService = null;
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$__f_seasonService = null;
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$__f_competitionService = null;
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$__f_typeName = null;
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$__f_uriRoot = null;
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$__f_db = null;
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$__f_items = null;
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$__f_quizleague$web$service$GetService$$observables = null;
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$__f_quizleague$web$service$GetService$$refObsCache = null;
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$__f_quizleague$web$service$GetService$$listObservables = null;
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$__f_bitmap$0 = false;
  $n_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$ = this;
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__$init$__V(this);
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$__f_typeName = "competitionstatistics";
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$__f_teamService = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_maintain_team_TeamService$();
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$__f_seasonService = $m_Lquizleague_web_maintain_season_SeasonService$();
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$__f_competitionService = $m_Lquizleague_web_maintain_competition_CompetitionService$()
}
export { $c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$ as $c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$ };
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$.prototype.constructor = $c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$;
/** @constructor */
function $h_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$() {
  /*<skip>*/
}
export { $h_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$ as $h_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$ };
$h_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$.prototype = $c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$.prototype;
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$.prototype.cache__Lquizleague_web_model_Model__Lquizleague_web_model_Model = (function(item) {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__add__Lquizleague_web_model_Model__Lquizleague_web_model_Model(this, item)
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$.prototype.save__Lquizleague_web_model_Model__Lrxscalajs_Observable = (function(item) {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_PutService__save__Lquizleague_web_model_Model__Lrxscalajs_Observable(this, item)
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$.prototype.instance__Lquizleague_web_model_Model = (function() {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_PutService__instance__Lquizleague_web_model_Model(this)
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$.prototype.deCache__Lquizleague_domain_Entity__scm_Map = (function(item) {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_PutService__deCache__Lquizleague_domain_Entity__scm_Map(this, item)
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$.prototype.dec__sjs_js_Any__s_util_Either = (function(json) {
  var dec = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_util_json_codecs_DomainCodecs$().Lquizleague_util_json_codecs_DomainCodecs$__f_competitonStatisticsDecoder;
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__decodeJson__sjs_js_Any__Lio_circe_Decoder__s_util_Either(this, json, dec)
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$.prototype.flush__V = (function() {
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$__f_items).clear__V()
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$.prototype.filterList__Lquizleague_domain_Entity__Z = (function(u) {
  return true
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$.prototype.typeName__T = (function() {
  return this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$__f_typeName
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$.prototype.uriRoot__T = (function() {
  return ((!this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$__f_bitmap$0) ? $p_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$__uriRoot$lzycompute__T(this) : this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$__f_uriRoot)
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$.prototype.db__Lfirebase_firestore_Firestore = (function() {
  return this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$__f_db
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$.prototype.items__scm_Map = (function() {
  return this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$__f_items
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$.prototype.quizleague$web$service$GetService$$observables__scm_Map = (function() {
  return this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$__f_quizleague$web$service$GetService$$observables
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$.prototype.quizleague$web$service$GetService$$refObsCache__scm_Map = (function() {
  return this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$__f_quizleague$web$service$GetService$$refObsCache
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$.prototype.quizleague$web$service$GetService$$listObservables__scm_Map = (function() {
  return this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$__f_quizleague$web$service$GetService$$listObservables
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$.prototype.quizleague$web$service$GetService$$listObservables_$eq__scm_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$__f_quizleague$web$service$GetService$$listObservables = x$1
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$.prototype.quizleague$web$service$GetService$_setter_$db_$eq__Lfirebase_firestore_Firestore__V = (function(x$1) {
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$__f_db = x$1
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$.prototype.quizleague$web$service$GetService$_setter_$items_$eq__scm_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$__f_items = x$1
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$.prototype.quizleague$web$service$GetService$_setter_$quizleague$web$service$GetService$$observables_$eq__scm_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$__f_quizleague$web$service$GetService$$observables = x$1
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$.prototype.quizleague$web$service$GetService$_setter_$quizleague$web$service$GetService$$refObsCache_$eq__scm_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$__f_quizleague$web$service$GetService$$refObsCache = x$1
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$.prototype.resultEntryInstance__Lquizleague_web_model_ResultEntry = (function() {
  return new ($j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$a_Lquizleague_web_model_ResultEntry())(null, null, null, null, null)
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$.prototype.mapOutSparse__Lquizleague_domain_Entity__Lquizleague_web_model_Model = (function(domain) {
  var s = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$as_Lquizleague_domain_stats_CompetitionStatistics(domain);
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_statistics_CompetitionStatisticsGetService__mapOutSparse__Lquizleague_domain_stats_CompetitionStatistics__Lquizleague_web_model_CompetitionStatistics(this, s)
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$.prototype.enc__Lquizleague_domain_Entity__Lio_circe_Json = (function(item) {
  var item$1 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$as_Lquizleague_domain_stats_CompetitionStatistics(item);
  return $f_Lquizleague_web_service_statistics_CompetitionStatisticsPutService__enc__Lquizleague_domain_stats_CompetitionStatistics__Lio_circe_Json(this, item$1)
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$.prototype.make__Lquizleague_domain_Entity = (function() {
  return $f_Lquizleague_web_service_statistics_CompetitionStatisticsPutService__make__Lquizleague_domain_stats_CompetitionStatistics(this)
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$.prototype.mapIn__Lquizleague_web_model_Model__Lquizleague_domain_Entity = (function(model) {
  return $f_Lquizleague_web_service_statistics_CompetitionStatisticsPutService__mapIn__Lquizleague_web_model_CompetitionStatistics__Lquizleague_domain_stats_CompetitionStatistics(this, model)
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$.prototype.competitionService__Lquizleague_web_service_competition_CompetitionGetService = (function() {
  return this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$__f_competitionService
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$.prototype.seasonService__Lquizleague_web_service_season_SeasonGetService = (function() {
  return this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$__f_seasonService
});
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$.prototype.teamService__Lquizleague_web_service_team_TeamGetService = (function() {
  return this.Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$__f_teamService
});
var $d_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$ = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$: 0
}, false, "quizleague.web.maintain.competitionstatistics.CompetitionStatisticsService$", {
  Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$: 1,
  O: 1,
  Lquizleague_web_service_statistics_CompetitionStatisticsGetService: 1,
  Lquizleague_web_service_GetService: 1,
  Lquizleague_web_names_CompetitionStatisticsNames: 1,
  Lquizleague_web_names_ComponentNames: 1,
  Lquizleague_web_service_statistics_CompetitionStatisticsPutService: 1,
  Lquizleague_web_service_PutService: 1
});
export { $d_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$ as $d_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$ };
$c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$.prototype.$classData = $d_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$;
var $n_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$;
function $m_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$() {
  if ((!$n_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$)) {
    $n_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$ = new $c_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$()
  };
  return $n_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$
}
export { $m_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$ as $m_Lquizleague_web_maintain_competitionstatistics_CompetitionStatisticsService$ };
function $p_Lquizleague_web_maintain_fixtures_FixtureService$__uriRoot$lzycompute__T($thiz) {
  if ((!$thiz.Lquizleague_web_maintain_fixtures_FixtureService$__f_bitmap$0)) {
    $thiz.Lquizleague_web_maintain_fixtures_FixtureService$__f_uriRoot = $thiz.Lquizleague_web_maintain_fixtures_FixtureService$__f_typeName;
    $thiz.Lquizleague_web_maintain_fixtures_FixtureService$__f_bitmap$0 = true
  };
  return $thiz.Lquizleague_web_maintain_fixtures_FixtureService$__f_uriRoot
}
export { $p_Lquizleague_web_maintain_fixtures_FixtureService$__uriRoot$lzycompute__T as $p_Lquizleague_web_maintain_fixtures_FixtureService$__uriRoot$lzycompute__T };
/** @constructor */
function $c_Lquizleague_web_maintain_fixtures_FixtureService$() {
  this.Lquizleague_web_maintain_fixtures_FixtureService$__f_teamService = null;
  this.Lquizleague_web_maintain_fixtures_FixtureService$__f_venueService = null;
  this.Lquizleague_web_maintain_fixtures_FixtureService$__f_userService = null;
  this.Lquizleague_web_maintain_fixtures_FixtureService$__f_fixturesService = null;
  this.Lquizleague_web_maintain_fixtures_FixtureService$__f_reportService = null;
  this.Lquizleague_web_maintain_fixtures_FixtureService$__f_typeName = null;
  this.Lquizleague_web_maintain_fixtures_FixtureService$__f_uriRoot = null;
  this.Lquizleague_web_maintain_fixtures_FixtureService$__f_db = null;
  this.Lquizleague_web_maintain_fixtures_FixtureService$__f_items = null;
  this.Lquizleague_web_maintain_fixtures_FixtureService$__f_quizleague$web$service$GetService$$observables = null;
  this.Lquizleague_web_maintain_fixtures_FixtureService$__f_quizleague$web$service$GetService$$refObsCache = null;
  this.Lquizleague_web_maintain_fixtures_FixtureService$__f_quizleague$web$service$GetService$$listObservables = null;
  this.Lquizleague_web_maintain_fixtures_FixtureService$__f_bitmap$0 = false;
  $n_Lquizleague_web_maintain_fixtures_FixtureService$ = this;
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__$init$__V(this);
  this.Lquizleague_web_maintain_fixtures_FixtureService$__f_typeName = "fixture";
  this.Lquizleague_web_maintain_fixtures_FixtureService$__f_teamService = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_maintain_team_TeamService$();
  this.Lquizleague_web_maintain_fixtures_FixtureService$__f_venueService = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_maintain_venue_VenueService$();
  this.Lquizleague_web_maintain_fixtures_FixtureService$__f_userService = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_maintain_user_UserService$();
  this.Lquizleague_web_maintain_fixtures_FixtureService$__f_fixturesService = $m_Lquizleague_web_maintain_fixtures_FixturesService$();
  this.Lquizleague_web_maintain_fixtures_FixtureService$__f_reportService = $m_Lquizleague_web_maintain_fixtures_ReportService$()
}
export { $c_Lquizleague_web_maintain_fixtures_FixtureService$ as $c_Lquizleague_web_maintain_fixtures_FixtureService$ };
$c_Lquizleague_web_maintain_fixtures_FixtureService$.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_Lquizleague_web_maintain_fixtures_FixtureService$.prototype.constructor = $c_Lquizleague_web_maintain_fixtures_FixtureService$;
/** @constructor */
function $h_Lquizleague_web_maintain_fixtures_FixtureService$() {
  /*<skip>*/
}
export { $h_Lquizleague_web_maintain_fixtures_FixtureService$ as $h_Lquizleague_web_maintain_fixtures_FixtureService$ };
$h_Lquizleague_web_maintain_fixtures_FixtureService$.prototype = $c_Lquizleague_web_maintain_fixtures_FixtureService$.prototype;
$c_Lquizleague_web_maintain_fixtures_FixtureService$.prototype.cache__Lquizleague_web_model_Model__Lquizleague_web_model_Model = (function(item) {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__add__Lquizleague_web_model_Model__Lquizleague_web_model_Model(this, item)
});
$c_Lquizleague_web_maintain_fixtures_FixtureService$.prototype.save__Lquizleague_web_model_Model__Lrxscalajs_Observable = (function(item) {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_PutService__save__Lquizleague_web_model_Model__Lrxscalajs_Observable(this, item)
});
$c_Lquizleague_web_maintain_fixtures_FixtureService$.prototype.instance__Lquizleague_web_model_Model = (function() {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_PutService__instance__Lquizleague_web_model_Model(this)
});
$c_Lquizleague_web_maintain_fixtures_FixtureService$.prototype.deCache__Lquizleague_domain_Entity__scm_Map = (function(item) {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_PutService__deCache__Lquizleague_domain_Entity__scm_Map(this, item)
});
$c_Lquizleague_web_maintain_fixtures_FixtureService$.prototype.dec__sjs_js_Any__s_util_Either = (function(json) {
  var dec = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_util_json_codecs_DomainCodecs$().Lquizleague_util_json_codecs_DomainCodecs$__f_fixtureDecoder;
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__decodeJson__sjs_js_Any__Lio_circe_Decoder__s_util_Either(this, json, dec)
});
$c_Lquizleague_web_maintain_fixtures_FixtureService$.prototype.flush__V = (function() {
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.Lquizleague_web_maintain_fixtures_FixtureService$__f_items).clear__V()
});
$c_Lquizleague_web_maintain_fixtures_FixtureService$.prototype.filterList__Lquizleague_domain_Entity__Z = (function(u) {
  return true
});
$c_Lquizleague_web_maintain_fixtures_FixtureService$.prototype.typeName__T = (function() {
  return this.Lquizleague_web_maintain_fixtures_FixtureService$__f_typeName
});
$c_Lquizleague_web_maintain_fixtures_FixtureService$.prototype.uriRoot__T = (function() {
  return ((!this.Lquizleague_web_maintain_fixtures_FixtureService$__f_bitmap$0) ? $p_Lquizleague_web_maintain_fixtures_FixtureService$__uriRoot$lzycompute__T(this) : this.Lquizleague_web_maintain_fixtures_FixtureService$__f_uriRoot)
});
$c_Lquizleague_web_maintain_fixtures_FixtureService$.prototype.db__Lfirebase_firestore_Firestore = (function() {
  return this.Lquizleague_web_maintain_fixtures_FixtureService$__f_db
});
$c_Lquizleague_web_maintain_fixtures_FixtureService$.prototype.items__scm_Map = (function() {
  return this.Lquizleague_web_maintain_fixtures_FixtureService$__f_items
});
$c_Lquizleague_web_maintain_fixtures_FixtureService$.prototype.quizleague$web$service$GetService$$observables__scm_Map = (function() {
  return this.Lquizleague_web_maintain_fixtures_FixtureService$__f_quizleague$web$service$GetService$$observables
});
$c_Lquizleague_web_maintain_fixtures_FixtureService$.prototype.quizleague$web$service$GetService$$refObsCache__scm_Map = (function() {
  return this.Lquizleague_web_maintain_fixtures_FixtureService$__f_quizleague$web$service$GetService$$refObsCache
});
$c_Lquizleague_web_maintain_fixtures_FixtureService$.prototype.quizleague$web$service$GetService$$listObservables__scm_Map = (function() {
  return this.Lquizleague_web_maintain_fixtures_FixtureService$__f_quizleague$web$service$GetService$$listObservables
});
$c_Lquizleague_web_maintain_fixtures_FixtureService$.prototype.quizleague$web$service$GetService$$listObservables_$eq__scm_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_fixtures_FixtureService$__f_quizleague$web$service$GetService$$listObservables = x$1
});
$c_Lquizleague_web_maintain_fixtures_FixtureService$.prototype.quizleague$web$service$GetService$_setter_$db_$eq__Lfirebase_firestore_Firestore__V = (function(x$1) {
  this.Lquizleague_web_maintain_fixtures_FixtureService$__f_db = x$1
});
$c_Lquizleague_web_maintain_fixtures_FixtureService$.prototype.quizleague$web$service$GetService$_setter_$items_$eq__scm_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_fixtures_FixtureService$__f_items = x$1
});
$c_Lquizleague_web_maintain_fixtures_FixtureService$.prototype.quizleague$web$service$GetService$_setter_$quizleague$web$service$GetService$$observables_$eq__scm_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_fixtures_FixtureService$__f_quizleague$web$service$GetService$$observables = x$1
});
$c_Lquizleague_web_maintain_fixtures_FixtureService$.prototype.quizleague$web$service$GetService$_setter_$quizleague$web$service$GetService$$refObsCache_$eq__scm_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_fixtures_FixtureService$__f_quizleague$web$service$GetService$$refObsCache = x$1
});
$c_Lquizleague_web_maintain_fixtures_FixtureService$.prototype.addResult__Lquizleague_web_model_Fixture__Lquizleague_web_model_Fixture = (function(fixture) {
  var this$2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($f_Lquizleague_web_service_fixtures_FixturePutService__mapIn__Lquizleague_web_model_Fixture__Lquizleague_domain_Fixture(this, fixture));
  var this$1 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_domain_Key$();
  var key = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(fixture.key.key);
  var key$1 = this$1.parse__T__Lquizleague_domain_Key(key);
  var fx = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$as_Lquizleague_domain_Fixture($j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_domain_Entity__withKey__Lquizleague_domain_Key__Lquizleague_domain_Entity(this$2, key$1));
  var x$1 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_s_Some(new $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$c_Lquizleague_domain_Result(0, 0, $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_None$(), $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_None$()));
  var this$3 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(fx);
  var x$2 = this$3.Lquizleague_domain_Fixture__f_id;
  var this$4 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(fx);
  var x$3 = this$4.Lquizleague_domain_Fixture__f_venue;
  var this$5 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(fx);
  var x$4 = this$5.Lquizleague_domain_Fixture__f_home;
  var this$6 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(fx);
  var x$5 = this$6.Lquizleague_domain_Fixture__f_away;
  var this$7 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(fx);
  var x$6 = this$7.Lquizleague_domain_Fixture__f_retired;
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(fx);
  var this$10 = new $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$c_Lquizleague_domain_Fixture(x$2, x$3, x$4, x$5, x$1, x$6);
  var this$9 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_domain_Key$();
  var key$2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(fixture.key.key);
  var key$3 = this$9.parse__T__Lquizleague_domain_Key(key$2);
  var domain = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_domain_Entity__withKey__Lquizleague_domain_Key__Lquizleague_domain_Entity(this$10, key$3);
  var item = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__mapOutWithKey__Lquizleague_domain_Entity__Lquizleague_web_model_Model(this, domain);
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__add__Lquizleague_web_model_Model__Lquizleague_web_model_Model(this, item)
});
$c_Lquizleague_web_maintain_fixtures_FixtureService$.prototype.mapOutSparse__Lquizleague_domain_Entity__Lquizleague_web_model_Model = (function(domain) {
  var dom = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$as_Lquizleague_domain_Fixture(domain);
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_fixtures_FixtureGetService__mapOutSparse__Lquizleague_domain_Fixture__Lquizleague_web_model_Fixture(this, dom)
});
$c_Lquizleague_web_maintain_fixtures_FixtureService$.prototype.enc__Lquizleague_domain_Entity__Lio_circe_Json = (function(item) {
  var item$1 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$as_Lquizleague_domain_Fixture(item);
  return $f_Lquizleague_web_service_fixtures_FixturePutService__enc__Lquizleague_domain_Fixture__Lio_circe_Json(this, item$1)
});
$c_Lquizleague_web_maintain_fixtures_FixtureService$.prototype.make__Lquizleague_domain_Entity = (function() {
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_Predef$().$qmark$qmark$qmark__E()
});
$c_Lquizleague_web_maintain_fixtures_FixtureService$.prototype.mapIn__Lquizleague_web_model_Model__Lquizleague_domain_Entity = (function(model) {
  return $f_Lquizleague_web_service_fixtures_FixturePutService__mapIn__Lquizleague_web_model_Fixture__Lquizleague_domain_Fixture(this, model)
});
$c_Lquizleague_web_maintain_fixtures_FixtureService$.prototype.reportService__Lquizleague_web_service_results_ReportGetService = (function() {
  return this.Lquizleague_web_maintain_fixtures_FixtureService$__f_reportService
});
$c_Lquizleague_web_maintain_fixtures_FixtureService$.prototype.fixturesService__Lquizleague_web_service_GetService = (function() {
  return this.Lquizleague_web_maintain_fixtures_FixtureService$__f_fixturesService
});
$c_Lquizleague_web_maintain_fixtures_FixtureService$.prototype.userService__Lquizleague_web_service_user_UserGetService = (function() {
  return this.Lquizleague_web_maintain_fixtures_FixtureService$__f_userService
});
$c_Lquizleague_web_maintain_fixtures_FixtureService$.prototype.venueService__Lquizleague_web_service_venue_VenueGetService = (function() {
  return this.Lquizleague_web_maintain_fixtures_FixtureService$__f_venueService
});
$c_Lquizleague_web_maintain_fixtures_FixtureService$.prototype.teamService__Lquizleague_web_service_team_TeamGetService = (function() {
  return this.Lquizleague_web_maintain_fixtures_FixtureService$__f_teamService
});
var $d_Lquizleague_web_maintain_fixtures_FixtureService$ = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  Lquizleague_web_maintain_fixtures_FixtureService$: 0
}, false, "quizleague.web.maintain.fixtures.FixtureService$", {
  Lquizleague_web_maintain_fixtures_FixtureService$: 1,
  O: 1,
  Lquizleague_web_service_fixtures_FixtureGetService: 1,
  Lquizleague_web_service_GetService: 1,
  Lquizleague_web_names_FixtureNames: 1,
  Lquizleague_web_names_ComponentNames: 1,
  Lquizleague_web_service_fixtures_FixturePutService: 1,
  Lquizleague_web_service_PutService: 1
});
export { $d_Lquizleague_web_maintain_fixtures_FixtureService$ as $d_Lquizleague_web_maintain_fixtures_FixtureService$ };
$c_Lquizleague_web_maintain_fixtures_FixtureService$.prototype.$classData = $d_Lquizleague_web_maintain_fixtures_FixtureService$;
var $n_Lquizleague_web_maintain_fixtures_FixtureService$;
function $m_Lquizleague_web_maintain_fixtures_FixtureService$() {
  if ((!$n_Lquizleague_web_maintain_fixtures_FixtureService$)) {
    $n_Lquizleague_web_maintain_fixtures_FixtureService$ = new $c_Lquizleague_web_maintain_fixtures_FixtureService$()
  };
  return $n_Lquizleague_web_maintain_fixtures_FixtureService$
}
export { $m_Lquizleague_web_maintain_fixtures_FixtureService$ as $m_Lquizleague_web_maintain_fixtures_FixtureService$ };
/** @constructor */
function $c_Lquizleague_web_maintain_fixtures_FixturesListComponent$() {
  this.Lquizleague_web_maintain_fixtures_FixturesListComponent$__f_template = null;
  this.Lquizleague_web_maintain_fixtures_FixturesListComponent$__f_typeName = null;
  this.Lquizleague_web_maintain_fixtures_FixturesListComponent$__f_service = null;
  this.Lquizleague_web_maintain_fixtures_FixturesListComponent$__f_name = null;
  this.Lquizleague_web_maintain_fixtures_FixturesListComponent$__f_paramName = null;
  this.Lquizleague_web_maintain_fixtures_FixturesListComponent$__f_quizleague$web$core$Component$$addedSubs = null;
  this.Lquizleague_web_maintain_fixtures_FixturesListComponent$__f_quizleague$web$core$Component$$addedSubParams = null;
  this.Lquizleague_web_maintain_fixtures_FixturesListComponent$__f_quizleague$web$core$Component$$addedProps = null;
  this.Lquizleague_web_maintain_fixtures_FixturesListComponent$__f_quizleague$web$core$Component$$addedMethods = null;
  this.Lquizleague_web_maintain_fixtures_FixturesListComponent$__f_quizleague$web$core$Component$$addedComputed = null;
  this.Lquizleague_web_maintain_fixtures_FixturesListComponent$__f_quizleague$web$core$Component$$addedDataFn = null;
  this.Lquizleague_web_maintain_fixtures_FixturesListComponent$__f_quizleague$web$core$Component$$addedData = null;
  this.Lquizleague_web_maintain_fixtures_FixturesListComponent$__f_quizleague$web$core$Component$$addedComponents = null;
  this.Lquizleague_web_maintain_fixtures_FixturesListComponent$__f_quizleague$web$core$Component$$addedWatch = null;
  this.Lquizleague_web_maintain_fixtures_FixturesListComponent$__f_empty = null;
  this.Lquizleague_web_maintain_fixtures_FixturesListComponent$__f_quizleague$web$core$Component$$commonMethods = null;
  $n_Lquizleague_web_maintain_fixtures_FixturesListComponent$ = this;
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__$init$__V(this);
  $f_Lquizleague_web_maintain_component_ItemComponentConfig__$init$__V(this);
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_RouteComponent__$init$__V(this);
  $f_Lquizleague_web_maintain_competition_CompetitionComponentConfig__$init$__V(this);
  this.Lquizleague_web_maintain_fixtures_FixturesListComponent$__f_typeName = "fixtures";
  this.Lquizleague_web_maintain_fixtures_FixturesListComponent$__f_template = (((("\n  <v-container>\n    <v-layout column v-if=\"item \">\n      <h2>Fixtures List for {{item.name}} </h2>\n      <v-list>\n      <v-list-item v-for=\"fixture in fs\" :key=\"fixture.id\">\n        <v-list-item-action>\n        <v-btn :to=\"'fixtures/' + fixture.id\" text left>{{fixture.date | date(\"d MMMM yyyy\")}}</v-btn>\n        </v-list-item-action>\n      </v-list-item>\n      </v-list>\n    </v-layout>\n    " + $m_Lquizleague_web_maintain_component_TemplateElements$().Lquizleague_web_maintain_component_TemplateElements$__f_addFAB) + "\n    ") + $m_Lquizleague_web_maintain_component_TemplateElements$().Lquizleague_web_maintain_component_TemplateElements$__f_backFAB) + "\n  </v-container>\n  ");
  var array = [];
  var fn = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((c$2) => {
    var this$4 = $m_Lquizleague_web_maintain_fixtures_FixturesListComponent$();
    var param = this$4.Lquizleague_web_maintain_fixtures_FixturesListComponent$__f_paramName;
    var service = this$4.Lquizleague_web_maintain_fixtures_FixturesListComponent$__f_service;
    return $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($f_Lquizleague_web_maintain_component_ItemComponentConfig__obsFromParam__Lquizleague_web_maintain_component_ItemComponent__T__Lquizleague_web_service_GetService__Lrxscalajs_Observable(this$4, c$2, param, service)).flatMap__F1__Lrxscalajs_Observable(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((x$1$2) => $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$as_Lrxscalajs_Observable(x$1$2.fixtures))))).map__F1__Lrxscalajs_Observable(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((x$2$2) => {
      var f = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((x$3$2) => $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(x$3$2.date)));
      var ord = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_s_math_Ordering$String$();
      var ord$1 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_s_math_Ordering$$anon$1(ord, f);
      var len = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(x$2$2.length);
      var array$1 = [];
      if ((len === 1)) {
        var i = 0;
        var len$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(x$2$2.length);
        while ((i < len$1)) {
          var index = i;
          var arg1 = x$2$2[index];
          array$1.push(arg1);
          i = ((1 + i) | 0)
        }
      } else if ((len > 1)) {
        var arr = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$ac_O(len);
        var elem = 0;
        elem = 0;
        var i$1 = 0;
        var len$2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(x$2$2.length);
        while ((i$1 < len$2)) {
          var index$1 = i$1;
          var arg1$1 = x$2$2[index$1];
          $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(arr).set(elem, arg1$1);
          elem = ((1 + elem) | 0);
          i$1 = ((1 + i$1) | 0)
        };
        $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_ju_Arrays$().sort__AO__ju_Comparator__V(arr, ord$1);
        elem = 0;
        while ((elem < $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(arr).u.length)) {
          var elem$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(arr).get(elem);
          array$1.push(elem$1);
          elem = ((1 + elem) | 0)
        }
      };
      return array$1
    })))
  }));
  this.Lquizleague_web_maintain_fixtures_FixturesListComponent$__f_quizleague$web$core$Component$$addedSubs = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.Lquizleague_web_maintain_fixtures_FixturesListComponent$__f_quizleague$web$core$Component$$addedSubs).$plus__T2__sci_Map(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2("fs", fn));
  var $$x1 = this.Lquizleague_web_maintain_fixtures_FixturesListComponent$__f_quizleague$web$core$Component$$addedSubParams;
  var this$7 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sc_Seq$();
  var bf = this$7.scg_GenTraversableFactory__f_ReusableCBFInstance;
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(bf);
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sjs_js_WrappedArray$();
  var b = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$ct_sjs_js_WrappedArray__(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjs_js_WrappedArray());
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length);
  var i$2 = 0;
  var len$3 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length);
  while ((i$2 < len$3)) {
    var index$2 = i$2;
    var arg1$2 = array[index$2];
    var x$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(arg1$2);
    var elem$2 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_T2(x$1, "fs");
    b.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.push(elem$2);
    i$2 = ((1 + i$2) | 0)
  };
  var this$10 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sci_List$();
  this.Lquizleague_web_maintain_fixtures_FixturesListComponent$__f_quizleague$web$core$Component$$addedSubParams = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_sci_List($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($$x1).$plus$plus__sc_GenTraversableOnce__scg_CanBuildFrom__O(b, this$10.scg_GenTraversableFactory__f_ReusableCBFInstance));
  var fn$1 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_sjs_js_ThisFunction$().fromFunction1__F1__sjs_js_ThisFunction0(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((c$3$2) => {
    $m_Lquizleague_web_maintain_fixtures_FixturesListComponent$().add__Lquizleague_web_maintain_fixtures_FixturesListComponent__V(c$3$2)
  })));
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_core_Component__method__T__sjs_js_Function__V(this, "add", fn$1)
}
export { $c_Lquizleague_web_maintain_fixtures_FixturesListComponent$ as $c_Lquizleague_web_maintain_fixtures_FixturesListComponent$ };
$c_Lquizleague_web_maintain_fixtures_FixturesListComponent$.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_Lquizleague_web_maintain_fixtures_FixturesListComponent$.prototype.constructor = $c_Lquizleague_web_maintain_fixtures_FixturesListComponent$;
/** @constructor */
function $h_Lquizleague_web_maintain_fixtures_FixturesListComponent$() {
  /*<skip>*/
}
export { $h_Lquizleague_web_maintain_fixtures_FixturesListComponent$ as $h_Lquizleague_web_maintain_fixtures_FixturesListComponent$ };
$h_Lquizleague_web_maintain_fixtures_FixturesListComponent$.prototype = $c_Lquizleague_web_maintain_fixtures_FixturesListComponent$.prototype;
$c_Lquizleague_web_maintain_fixtures_FixturesListComponent$.prototype.save__Lquizleague_web_maintain_component_ItemComponent__V = (function(c) {
  $f_Lquizleague_web_maintain_component_ItemComponentConfig__save__Lquizleague_web_maintain_component_ItemComponent__V(this, c)
});
$c_Lquizleague_web_maintain_fixtures_FixturesListComponent$.prototype.mounted__sjs_js_Function = (function() {
  return null
});
$c_Lquizleague_web_maintain_fixtures_FixturesListComponent$.prototype.beforeDestroy__sjs_js_Function = (function() {
  return null
});
$c_Lquizleague_web_maintain_fixtures_FixturesListComponent$.prototype.typeName__T = (function() {
  return this.Lquizleague_web_maintain_fixtures_FixturesListComponent$__f_typeName
});
$c_Lquizleague_web_maintain_fixtures_FixturesListComponent$.prototype.service__Lquizleague_web_maintain_competition_CompetitionService$ = (function() {
  return this.Lquizleague_web_maintain_fixtures_FixturesListComponent$__f_service
});
$c_Lquizleague_web_maintain_fixtures_FixturesListComponent$.prototype.quizleague$web$maintain$competition$CompetitionComponentConfig$_setter_$service_$eq__Lquizleague_web_maintain_competition_CompetitionService$__V = (function(x$1) {
  this.Lquizleague_web_maintain_fixtures_FixturesListComponent$__f_service = x$1
});
$c_Lquizleague_web_maintain_fixtures_FixturesListComponent$.prototype.name__T = (function() {
  return this.Lquizleague_web_maintain_fixtures_FixturesListComponent$__f_name
});
$c_Lquizleague_web_maintain_fixtures_FixturesListComponent$.prototype.quizleague$web$core$RouteComponent$_setter_$name_$eq__T__V = (function(x$1) {
  this.Lquizleague_web_maintain_fixtures_FixturesListComponent$__f_name = x$1
});
$c_Lquizleague_web_maintain_fixtures_FixturesListComponent$.prototype.paramName__T = (function() {
  return this.Lquizleague_web_maintain_fixtures_FixturesListComponent$__f_paramName
});
$c_Lquizleague_web_maintain_fixtures_FixturesListComponent$.prototype.quizleague$web$maintain$component$ItemComponentConfig$_setter_$paramName_$eq__T__V = (function(x$1) {
  this.Lquizleague_web_maintain_fixtures_FixturesListComponent$__f_paramName = x$1
});
$c_Lquizleague_web_maintain_fixtures_FixturesListComponent$.prototype.quizleague$web$core$Component$$addedSubs__sci_Map = (function() {
  return this.Lquizleague_web_maintain_fixtures_FixturesListComponent$__f_quizleague$web$core$Component$$addedSubs
});
$c_Lquizleague_web_maintain_fixtures_FixturesListComponent$.prototype.quizleague$web$core$Component$$addedSubs_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_fixtures_FixturesListComponent$__f_quizleague$web$core$Component$$addedSubs = x$1
});
$c_Lquizleague_web_maintain_fixtures_FixturesListComponent$.prototype.quizleague$web$core$Component$$addedSubParams__sci_List = (function() {
  return this.Lquizleague_web_maintain_fixtures_FixturesListComponent$__f_quizleague$web$core$Component$$addedSubParams
});
$c_Lquizleague_web_maintain_fixtures_FixturesListComponent$.prototype.quizleague$web$core$Component$$addedSubParams_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_fixtures_FixturesListComponent$__f_quizleague$web$core$Component$$addedSubParams = x$1
});
$c_Lquizleague_web_maintain_fixtures_FixturesListComponent$.prototype.quizleague$web$core$Component$$addedProps__sci_List = (function() {
  return this.Lquizleague_web_maintain_fixtures_FixturesListComponent$__f_quizleague$web$core$Component$$addedProps
});
$c_Lquizleague_web_maintain_fixtures_FixturesListComponent$.prototype.quizleague$web$core$Component$$addedProps_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_fixtures_FixturesListComponent$__f_quizleague$web$core$Component$$addedProps = x$1
});
$c_Lquizleague_web_maintain_fixtures_FixturesListComponent$.prototype.quizleague$web$core$Component$$addedMethods__sci_Map = (function() {
  return this.Lquizleague_web_maintain_fixtures_FixturesListComponent$__f_quizleague$web$core$Component$$addedMethods
});
$c_Lquizleague_web_maintain_fixtures_FixturesListComponent$.prototype.quizleague$web$core$Component$$addedMethods_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_fixtures_FixturesListComponent$__f_quizleague$web$core$Component$$addedMethods = x$1
});
$c_Lquizleague_web_maintain_fixtures_FixturesListComponent$.prototype.quizleague$web$core$Component$$addedComputed__sci_Map = (function() {
  return this.Lquizleague_web_maintain_fixtures_FixturesListComponent$__f_quizleague$web$core$Component$$addedComputed
});
$c_Lquizleague_web_maintain_fixtures_FixturesListComponent$.prototype.quizleague$web$core$Component$$addedComputed_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_fixtures_FixturesListComponent$__f_quizleague$web$core$Component$$addedComputed = x$1
});
$c_Lquizleague_web_maintain_fixtures_FixturesListComponent$.prototype.quizleague$web$core$Component$$addedDataFn__sci_Map = (function() {
  return this.Lquizleague_web_maintain_fixtures_FixturesListComponent$__f_quizleague$web$core$Component$$addedDataFn
});
$c_Lquizleague_web_maintain_fixtures_FixturesListComponent$.prototype.quizleague$web$core$Component$$addedDataFn_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_fixtures_FixturesListComponent$__f_quizleague$web$core$Component$$addedDataFn = x$1
});
$c_Lquizleague_web_maintain_fixtures_FixturesListComponent$.prototype.quizleague$web$core$Component$$addedData__sci_Map = (function() {
  return this.Lquizleague_web_maintain_fixtures_FixturesListComponent$__f_quizleague$web$core$Component$$addedData
});
$c_Lquizleague_web_maintain_fixtures_FixturesListComponent$.prototype.quizleague$web$core$Component$$addedData_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_fixtures_FixturesListComponent$__f_quizleague$web$core$Component$$addedData = x$1
});
$c_Lquizleague_web_maintain_fixtures_FixturesListComponent$.prototype.quizleague$web$core$Component$$addedComponents__sci_List = (function() {
  return this.Lquizleague_web_maintain_fixtures_FixturesListComponent$__f_quizleague$web$core$Component$$addedComponents
});
$c_Lquizleague_web_maintain_fixtures_FixturesListComponent$.prototype.quizleague$web$core$Component$$addedComponents_$eq__sci_List__V = (function(x$1) {
  this.Lquizleague_web_maintain_fixtures_FixturesListComponent$__f_quizleague$web$core$Component$$addedComponents = x$1
});
$c_Lquizleague_web_maintain_fixtures_FixturesListComponent$.prototype.quizleague$web$core$Component$$addedWatch__sci_Map = (function() {
  return this.Lquizleague_web_maintain_fixtures_FixturesListComponent$__f_quizleague$web$core$Component$$addedWatch
});
$c_Lquizleague_web_maintain_fixtures_FixturesListComponent$.prototype.quizleague$web$core$Component$$addedWatch_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_fixtures_FixturesListComponent$__f_quizleague$web$core$Component$$addedWatch = x$1
});
$c_Lquizleague_web_maintain_fixtures_FixturesListComponent$.prototype.empty__sjs_js_Object = (function() {
  return this.Lquizleague_web_maintain_fixtures_FixturesListComponent$__f_empty
});
$c_Lquizleague_web_maintain_fixtures_FixturesListComponent$.prototype.quizleague$web$core$Component$$commonMethods__sci_Map = (function() {
  return this.Lquizleague_web_maintain_fixtures_FixturesListComponent$__f_quizleague$web$core$Component$$commonMethods
});
$c_Lquizleague_web_maintain_fixtures_FixturesListComponent$.prototype.quizleague$web$core$Component$_setter_$empty_$eq__sjs_js_Object__V = (function(x$1) {
  this.Lquizleague_web_maintain_fixtures_FixturesListComponent$__f_empty = x$1
});
$c_Lquizleague_web_maintain_fixtures_FixturesListComponent$.prototype.quizleague$web$core$Component$_setter_$quizleague$web$core$Component$$commonMethods_$eq__sci_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_fixtures_FixturesListComponent$__f_quizleague$web$core$Component$$commonMethods = x$1
});
$c_Lquizleague_web_maintain_fixtures_FixturesListComponent$.prototype.template__T = (function() {
  return this.Lquizleague_web_maintain_fixtures_FixturesListComponent$__f_template
});
$c_Lquizleague_web_maintain_fixtures_FixturesListComponent$.prototype.add__Lquizleague_web_maintain_fixtures_FixturesListComponent__V = (function(c) {
  var this$1 = $m_Lquizleague_web_maintain_fixtures_FixturesService$();
  var competition = c.item;
  var fixtures = c.fs;
  var fixs = $f_Lquizleague_web_service_fixtures_FixturesPutService__instance__Lquizleague_web_model_Competition__sjs_js_Array__Lquizleague_web_model_Fixtures(this$1, competition, fixtures);
  var this$2 = $m_Lquizleague_web_maintain_fixtures_FixturesService$();
  var qual$1 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_PutService__save__Lquizleague_web_model_Model__Lrxscalajs_Observable(this$2, fixs);
  var x$1 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((x$2) => {
    $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_jl_Void(x$2);
    c.$router.push(("fixtures/" + $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(fixs.id)))
  }));
  var x$2$2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(qual$1).subscribe$default$2__F1();
  var x$3 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(qual$1).subscribe$default$3__F0();
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(qual$1).subscribe__F1__F1__F0__Lrxscalajs_subscription_Subscription(x$1, x$2$2, x$3)
});
$c_Lquizleague_web_maintain_fixtures_FixturesListComponent$.prototype.parentKey__Lquizleague_web_maintain_component_ItemComponent__T = (function(c) {
  return $f_Lquizleague_web_maintain_competition_CompetitionComponentConfig__parentKey__Lquizleague_web_maintain_competition_CompetitionComponent__T(this, c)
});
$c_Lquizleague_web_maintain_fixtures_FixturesListComponent$.prototype.service__Lquizleague_web_service_GetService = (function() {
  return this.Lquizleague_web_maintain_fixtures_FixturesListComponent$__f_service
});
var $d_Lquizleague_web_maintain_fixtures_FixturesListComponent$ = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  Lquizleague_web_maintain_fixtures_FixturesListComponent$: 0
}, false, "quizleague.web.maintain.fixtures.FixturesListComponent$", {
  Lquizleague_web_maintain_fixtures_FixturesListComponent$: 1,
  O: 1,
  Lquizleague_web_maintain_competition_CompetitionComponentConfig: 1,
  Lquizleague_web_maintain_component_ItemComponentConfig: 1,
  Lquizleague_web_core_Component: 1,
  Lquizleague_web_core_RouteComponent: 1,
  Lquizleague_web_names_FixturesNames: 1,
  Lquizleague_web_names_ComponentNames: 1
});
export { $d_Lquizleague_web_maintain_fixtures_FixturesListComponent$ as $d_Lquizleague_web_maintain_fixtures_FixturesListComponent$ };
$c_Lquizleague_web_maintain_fixtures_FixturesListComponent$.prototype.$classData = $d_Lquizleague_web_maintain_fixtures_FixturesListComponent$;
var $n_Lquizleague_web_maintain_fixtures_FixturesListComponent$;
function $m_Lquizleague_web_maintain_fixtures_FixturesListComponent$() {
  if ((!$n_Lquizleague_web_maintain_fixtures_FixturesListComponent$)) {
    $n_Lquizleague_web_maintain_fixtures_FixturesListComponent$ = new $c_Lquizleague_web_maintain_fixtures_FixturesListComponent$()
  };
  return $n_Lquizleague_web_maintain_fixtures_FixturesListComponent$
}
export { $m_Lquizleague_web_maintain_fixtures_FixturesListComponent$ as $m_Lquizleague_web_maintain_fixtures_FixturesListComponent$ };
function $p_Lquizleague_web_maintain_fixtures_FixturesService$__uriRoot$lzycompute__T($thiz) {
  if ((!$thiz.Lquizleague_web_maintain_fixtures_FixturesService$__f_bitmap$0)) {
    $thiz.Lquizleague_web_maintain_fixtures_FixturesService$__f_uriRoot = $thiz.Lquizleague_web_maintain_fixtures_FixturesService$__f_typeName;
    $thiz.Lquizleague_web_maintain_fixtures_FixturesService$__f_bitmap$0 = true
  };
  return $thiz.Lquizleague_web_maintain_fixtures_FixturesService$__f_uriRoot
}
export { $p_Lquizleague_web_maintain_fixtures_FixturesService$__uriRoot$lzycompute__T as $p_Lquizleague_web_maintain_fixtures_FixturesService$__uriRoot$lzycompute__T };
function $p_Lquizleague_web_maintain_fixtures_FixturesService$__copyFixture$1__Lquizleague_web_model_Fixture__Lquizleague_web_model_Fixtures__Lrxscalajs_Observable($thiz, fixture, fixtures) {
  var this$2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($thiz.Lquizleague_web_maintain_fixtures_FixturesService$__f_fixtureService);
  var this$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($thiz.Lquizleague_web_maintain_fixtures_FixturesService$__f_fixtureService);
  var parentKey = fixtures.key;
  var item = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_PutService__copy__Lquizleague_web_model_Model__Lquizleague_web_model_Key__Lquizleague_web_model_Model(this$1, fixture, parentKey);
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_PutService__save__Lquizleague_web_model_Model__Lrxscalajs_Observable(this$2, item)
}
export { $p_Lquizleague_web_maintain_fixtures_FixturesService$__copyFixture$1__Lquizleague_web_model_Fixture__Lquizleague_web_model_Fixtures__Lrxscalajs_Observable as $p_Lquizleague_web_maintain_fixtures_FixturesService$__copyFixture$1__Lquizleague_web_model_Fixture__Lquizleague_web_model_Fixtures__Lrxscalajs_Observable };
/** @constructor */
function $c_Lquizleague_web_maintain_fixtures_FixturesService$() {
  this.Lquizleague_web_maintain_fixtures_FixturesService$__f_fixtureService = null;
  this.Lquizleague_web_maintain_fixtures_FixturesService$__f_competitionService = null;
  this.Lquizleague_web_maintain_fixtures_FixturesService$__f_typeName = null;
  this.Lquizleague_web_maintain_fixtures_FixturesService$__f_uriRoot = null;
  this.Lquizleague_web_maintain_fixtures_FixturesService$__f_db = null;
  this.Lquizleague_web_maintain_fixtures_FixturesService$__f_items = null;
  this.Lquizleague_web_maintain_fixtures_FixturesService$__f_quizleague$web$service$GetService$$observables = null;
  this.Lquizleague_web_maintain_fixtures_FixturesService$__f_quizleague$web$service$GetService$$refObsCache = null;
  this.Lquizleague_web_maintain_fixtures_FixturesService$__f_quizleague$web$service$GetService$$listObservables = null;
  this.Lquizleague_web_maintain_fixtures_FixturesService$__f_bitmap$0 = false;
  $n_Lquizleague_web_maintain_fixtures_FixturesService$ = this;
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__$init$__V(this);
  this.Lquizleague_web_maintain_fixtures_FixturesService$__f_typeName = "fixtures";
  this.Lquizleague_web_maintain_fixtures_FixturesService$__f_fixtureService = $m_Lquizleague_web_maintain_fixtures_FixtureService$();
  this.Lquizleague_web_maintain_fixtures_FixturesService$__f_competitionService = $m_Lquizleague_web_maintain_competition_CompetitionService$()
}
export { $c_Lquizleague_web_maintain_fixtures_FixturesService$ as $c_Lquizleague_web_maintain_fixtures_FixturesService$ };
$c_Lquizleague_web_maintain_fixtures_FixturesService$.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_Lquizleague_web_maintain_fixtures_FixturesService$.prototype.constructor = $c_Lquizleague_web_maintain_fixtures_FixturesService$;
/** @constructor */
function $h_Lquizleague_web_maintain_fixtures_FixturesService$() {
  /*<skip>*/
}
export { $h_Lquizleague_web_maintain_fixtures_FixturesService$ as $h_Lquizleague_web_maintain_fixtures_FixturesService$ };
$h_Lquizleague_web_maintain_fixtures_FixturesService$.prototype = $c_Lquizleague_web_maintain_fixtures_FixturesService$.prototype;
$c_Lquizleague_web_maintain_fixtures_FixturesService$.prototype.cache__Lquizleague_web_model_Model__Lquizleague_web_model_Model = (function(item) {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__add__Lquizleague_web_model_Model__Lquizleague_web_model_Model(this, item)
});
$c_Lquizleague_web_maintain_fixtures_FixturesService$.prototype.save__Lquizleague_web_model_Model__Lrxscalajs_Observable = (function(item) {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_PutService__save__Lquizleague_web_model_Model__Lrxscalajs_Observable(this, item)
});
$c_Lquizleague_web_maintain_fixtures_FixturesService$.prototype.instance__Lquizleague_web_model_Model = (function() {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_PutService__instance__Lquizleague_web_model_Model(this)
});
$c_Lquizleague_web_maintain_fixtures_FixturesService$.prototype.deCache__Lquizleague_domain_Entity__scm_Map = (function(item) {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_PutService__deCache__Lquizleague_domain_Entity__scm_Map(this, item)
});
$c_Lquizleague_web_maintain_fixtures_FixturesService$.prototype.dec__sjs_js_Any__s_util_Either = (function(json) {
  var dec = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_util_json_codecs_DomainCodecs$().Lquizleague_util_json_codecs_DomainCodecs$__f_fixturesDecoder;
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__decodeJson__sjs_js_Any__Lio_circe_Decoder__s_util_Either(this, json, dec)
});
$c_Lquizleague_web_maintain_fixtures_FixturesService$.prototype.flush__V = (function() {
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.Lquizleague_web_maintain_fixtures_FixturesService$__f_items).clear__V()
});
$c_Lquizleague_web_maintain_fixtures_FixturesService$.prototype.filterList__Lquizleague_domain_Entity__Z = (function(u) {
  return true
});
$c_Lquizleague_web_maintain_fixtures_FixturesService$.prototype.typeName__T = (function() {
  return this.Lquizleague_web_maintain_fixtures_FixturesService$__f_typeName
});
$c_Lquizleague_web_maintain_fixtures_FixturesService$.prototype.uriRoot__T = (function() {
  return ((!this.Lquizleague_web_maintain_fixtures_FixturesService$__f_bitmap$0) ? $p_Lquizleague_web_maintain_fixtures_FixturesService$__uriRoot$lzycompute__T(this) : this.Lquizleague_web_maintain_fixtures_FixturesService$__f_uriRoot)
});
$c_Lquizleague_web_maintain_fixtures_FixturesService$.prototype.db__Lfirebase_firestore_Firestore = (function() {
  return this.Lquizleague_web_maintain_fixtures_FixturesService$__f_db
});
$c_Lquizleague_web_maintain_fixtures_FixturesService$.prototype.items__scm_Map = (function() {
  return this.Lquizleague_web_maintain_fixtures_FixturesService$__f_items
});
$c_Lquizleague_web_maintain_fixtures_FixturesService$.prototype.quizleague$web$service$GetService$$observables__scm_Map = (function() {
  return this.Lquizleague_web_maintain_fixtures_FixturesService$__f_quizleague$web$service$GetService$$observables
});
$c_Lquizleague_web_maintain_fixtures_FixturesService$.prototype.quizleague$web$service$GetService$$refObsCache__scm_Map = (function() {
  return this.Lquizleague_web_maintain_fixtures_FixturesService$__f_quizleague$web$service$GetService$$refObsCache
});
$c_Lquizleague_web_maintain_fixtures_FixturesService$.prototype.quizleague$web$service$GetService$$listObservables__scm_Map = (function() {
  return this.Lquizleague_web_maintain_fixtures_FixturesService$__f_quizleague$web$service$GetService$$listObservables
});
$c_Lquizleague_web_maintain_fixtures_FixturesService$.prototype.quizleague$web$service$GetService$$listObservables_$eq__scm_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_fixtures_FixturesService$__f_quizleague$web$service$GetService$$listObservables = x$1
});
$c_Lquizleague_web_maintain_fixtures_FixturesService$.prototype.quizleague$web$service$GetService$_setter_$db_$eq__Lfirebase_firestore_Firestore__V = (function(x$1) {
  this.Lquizleague_web_maintain_fixtures_FixturesService$__f_db = x$1
});
$c_Lquizleague_web_maintain_fixtures_FixturesService$.prototype.quizleague$web$service$GetService$_setter_$items_$eq__scm_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_fixtures_FixturesService$__f_items = x$1
});
$c_Lquizleague_web_maintain_fixtures_FixturesService$.prototype.quizleague$web$service$GetService$_setter_$quizleague$web$service$GetService$$observables_$eq__scm_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_fixtures_FixturesService$__f_quizleague$web$service$GetService$$observables = x$1
});
$c_Lquizleague_web_maintain_fixtures_FixturesService$.prototype.quizleague$web$service$GetService$_setter_$quizleague$web$service$GetService$$refObsCache_$eq__scm_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_fixtures_FixturesService$__f_quizleague$web$service$GetService$$refObsCache = x$1
});
$c_Lquizleague_web_maintain_fixtures_FixturesService$.prototype.copyFixtures__Lrxscalajs_Observable__Lquizleague_web_model_Competition__Lrxscalajs_Observable = (function(fixtures, competition) {
  var this$17 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(fixtures).map__F1__Lrxscalajs_Observable(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((x$2$2) => {
    var array = [];
    $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(x$2$2.length);
    var i = 0;
    var len = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(x$2$2.length);
    while ((i < len)) {
      var index = i;
      var arg1 = x$2$2[index];
      var this$4 = $m_Lquizleague_web_maintain_fixtures_FixturesService$();
      var parentKey = competition.key;
      var fixtures1 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_PutService__copy__Lquizleague_web_model_Model__Lquizleague_web_model_Key__Lquizleague_web_model_Model(this$4, arg1, parentKey);
      var this$5 = $m_Lquizleague_web_maintain_fixtures_FixturesService$();
      var saved1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_PutService__save__Lquizleague_web_model_Model__Lrxscalajs_Observable(this$5, fixtures1)).map__F1__Lrxscalajs_Observable(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((x$3$2) => {
        var x$3 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_jl_Void(x$3$2);
        var $$x1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sc_Seq$();
        var array$1 = [x$3];
        return $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_sc_Seq($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($$x1).apply__sc_Seq__sc_GenTraversable($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$ct_sjs_js_WrappedArray__sjs_js_Array__(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjs_js_WrappedArray(), array$1)))
      })));
      var this$12 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$as_Lrxscalajs_Observable(arg1.fixture)).map__F1__Lrxscalajs_Observable(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((fixtures1) => ((x$4$2) => {
        var this$10 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$ct_sjs_js_ArrayOps__sjs_js_Array__(new $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$c_sjs_js_ArrayOps(), x$4$2);
        var f = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((f$2) => $p_Lquizleague_web_maintain_fixtures_FixturesService$__copyFixture$1__Lquizleague_web_model_Fixture__Lquizleague_web_model_Fixtures__Lrxscalajs_Observable(this, f$2, fixtures1)));
        var b = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$ct_sjs_js_ArrayOps__(new $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$c_sjs_js_ArrayOps());
        $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$f_scm_Builder__sizeHint__sc_TraversableLike__V(b, this$10);
        var f$1 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((x$2) => {
          var elem = f.apply__O__O(x$2);
          b.sjs_js_ArrayOps__f_scala$scalajs$js$ArrayOps$$array.push(elem);
          return b
        }));
        $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$f_sc_IndexedSeqOptimized__foreach__F1__V(this$10, f$1);
        return b.sjs_js_ArrayOps__f_scala$scalajs$js$ArrayOps$$array
      }))(fixtures1)))).map__F1__Lrxscalajs_Observable(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((x$5$2) => $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$ct_sjs_js_WrappedArray__sjs_js_Array__(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjs_js_WrappedArray(), x$5$2))))).map__F1__Lrxscalajs_Observable(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((sources$2) => {
        var sources = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_sc_Seq(sources$2);
        return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lrxscalajs_Observable$().combineLatest__sc_Seq__Lrxscalajs_Observable(sources)
      }))));
      var saved2 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$ct_Lrxscalajs_Observable__Lrxscalajs_facade_ObservableFacade__(new $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$c_Lrxscalajs_Observable(), this$12.Lrxscalajs_Observable__f_inner.map(((arg1$2) => {
        var arg1$1 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$as_Lrxscalajs_Observable(arg1$2);
        var this$13 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(arg1$1);
        return this$13.Lrxscalajs_Observable__f_inner
      })).mergeAll(2.147483647E9));
      var $$x3 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lrxscalajs_Observable$();
      var $$x2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sc_Seq$();
      var array$2 = [saved1, saved2];
      var elem$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($$x3).combineLatest__sc_Seq__Lrxscalajs_Observable($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_sc_Seq($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($$x2).apply__sc_Seq__sc_GenTraversable($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$ct_sjs_js_WrappedArray__sjs_js_Array__(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjs_js_WrappedArray(), array$2))));
      array.push(elem$1);
      i = ((1 + i) | 0)
    };
    return $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$ct_sjs_js_WrappedArray__sjs_js_Array__(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjs_js_WrappedArray(), array)
  })))).map__F1__Lrxscalajs_Observable(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((sources$2$1) => {
    var sources$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_sc_Seq(sources$2$1);
    return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lrxscalajs_Observable$().combineLatest__sc_Seq__Lrxscalajs_Observable(sources$1)
  }))));
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$ct_Lrxscalajs_Observable__Lrxscalajs_facade_ObservableFacade__(new $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$c_Lrxscalajs_Observable(), this$17.Lrxscalajs_Observable__f_inner.map(((arg1$2$1) => {
    var arg1$3 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$as_Lrxscalajs_Observable(arg1$2$1);
    var this$18 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(arg1$3);
    return this$18.Lrxscalajs_Observable__f_inner
  })).mergeAll(2.147483647E9)).map__F1__Lrxscalajs_Observable(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((x$6$2) => {
    var x$6 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_sc_Seq(x$6$2);
    return $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_sc_Seq($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(x$6).flatten__F1__sc_GenTraversable($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_Predef$().s_Predef$__f_singleton_$less$colon$less)).flatten__F1__sc_GenTraversable($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_Predef$().s_Predef$__f_singleton_$less$colon$less))
  })))
});
$c_Lquizleague_web_maintain_fixtures_FixturesService$.prototype.mapOutSparse__Lquizleague_domain_Entity__Lquizleague_web_model_Model = (function(domain) {
  var dom = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$as_Lquizleague_domain_Fixtures(domain);
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_fixtures_FixturesGetService__mapOutSparse__Lquizleague_domain_Fixtures__Lquizleague_web_model_Fixtures(this, dom)
});
$c_Lquizleague_web_maintain_fixtures_FixturesService$.prototype.enc__Lquizleague_domain_Entity__Lio_circe_Json = (function(item) {
  var item$1 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$as_Lquizleague_domain_Fixtures(item);
  return $f_Lquizleague_web_service_fixtures_FixturesPutService__enc__Lquizleague_domain_Fixtures__Lio_circe_Json(this, item$1)
});
$c_Lquizleague_web_maintain_fixtures_FixturesService$.prototype.make__Lquizleague_domain_Entity = (function() {
  return $f_Lquizleague_web_service_fixtures_FixturesPutService__make__Lquizleague_domain_Fixtures(this)
});
$c_Lquizleague_web_maintain_fixtures_FixturesService$.prototype.mapIn__Lquizleague_web_model_Model__Lquizleague_domain_Entity = (function(model) {
  return $f_Lquizleague_web_service_fixtures_FixturesPutService__mapIn__Lquizleague_web_model_Fixtures__Lquizleague_domain_Fixtures(this, model)
});
$c_Lquizleague_web_maintain_fixtures_FixturesService$.prototype.competitionService__Lquizleague_web_service_competition_CompetitionGetService = (function() {
  return this.Lquizleague_web_maintain_fixtures_FixturesService$__f_competitionService
});
$c_Lquizleague_web_maintain_fixtures_FixturesService$.prototype.fixtureService__Lquizleague_web_service_fixtures_FixtureGetService = (function() {
  return this.Lquizleague_web_maintain_fixtures_FixturesService$__f_fixtureService
});
var $d_Lquizleague_web_maintain_fixtures_FixturesService$ = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  Lquizleague_web_maintain_fixtures_FixturesService$: 0
}, false, "quizleague.web.maintain.fixtures.FixturesService$", {
  Lquizleague_web_maintain_fixtures_FixturesService$: 1,
  O: 1,
  Lquizleague_web_service_fixtures_FixturesGetService: 1,
  Lquizleague_web_service_GetService: 1,
  Lquizleague_web_names_FixturesNames: 1,
  Lquizleague_web_names_ComponentNames: 1,
  Lquizleague_web_service_fixtures_FixturesPutService: 1,
  Lquizleague_web_service_PutService: 1
});
export { $d_Lquizleague_web_maintain_fixtures_FixturesService$ as $d_Lquizleague_web_maintain_fixtures_FixturesService$ };
$c_Lquizleague_web_maintain_fixtures_FixturesService$.prototype.$classData = $d_Lquizleague_web_maintain_fixtures_FixturesService$;
var $n_Lquizleague_web_maintain_fixtures_FixturesService$;
function $m_Lquizleague_web_maintain_fixtures_FixturesService$() {
  if ((!$n_Lquizleague_web_maintain_fixtures_FixturesService$)) {
    $n_Lquizleague_web_maintain_fixtures_FixturesService$ = new $c_Lquizleague_web_maintain_fixtures_FixturesService$()
  };
  return $n_Lquizleague_web_maintain_fixtures_FixturesService$
}
export { $m_Lquizleague_web_maintain_fixtures_FixturesService$ as $m_Lquizleague_web_maintain_fixtures_FixturesService$ };
function $p_Lquizleague_web_maintain_globaltext_GlobalTextService$__uriRoot$lzycompute__T($thiz) {
  if ((!$thiz.Lquizleague_web_maintain_globaltext_GlobalTextService$__f_bitmap$0)) {
    $thiz.Lquizleague_web_maintain_globaltext_GlobalTextService$__f_uriRoot = $thiz.Lquizleague_web_maintain_globaltext_GlobalTextService$__f_typeName;
    $thiz.Lquizleague_web_maintain_globaltext_GlobalTextService$__f_bitmap$0 = true
  };
  return $thiz.Lquizleague_web_maintain_globaltext_GlobalTextService$__f_uriRoot
}
export { $p_Lquizleague_web_maintain_globaltext_GlobalTextService$__uriRoot$lzycompute__T as $p_Lquizleague_web_maintain_globaltext_GlobalTextService$__uriRoot$lzycompute__T };
/** @constructor */
function $c_Lquizleague_web_maintain_globaltext_GlobalTextService$() {
  this.Lquizleague_web_maintain_globaltext_GlobalTextService$__f_textService = null;
  this.Lquizleague_web_maintain_globaltext_GlobalTextService$__f_typeName = null;
  this.Lquizleague_web_maintain_globaltext_GlobalTextService$__f_uriRoot = null;
  this.Lquizleague_web_maintain_globaltext_GlobalTextService$__f_db = null;
  this.Lquizleague_web_maintain_globaltext_GlobalTextService$__f_items = null;
  this.Lquizleague_web_maintain_globaltext_GlobalTextService$__f_quizleague$web$service$GetService$$observables = null;
  this.Lquizleague_web_maintain_globaltext_GlobalTextService$__f_quizleague$web$service$GetService$$refObsCache = null;
  this.Lquizleague_web_maintain_globaltext_GlobalTextService$__f_quizleague$web$service$GetService$$listObservables = null;
  this.Lquizleague_web_maintain_globaltext_GlobalTextService$__f_bitmap$0 = false;
  $n_Lquizleague_web_maintain_globaltext_GlobalTextService$ = this;
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__$init$__V(this);
  this.Lquizleague_web_maintain_globaltext_GlobalTextService$__f_typeName = "globaltext";
  this.Lquizleague_web_maintain_globaltext_GlobalTextService$__f_textService = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_maintain_text_TextService$()
}
export { $c_Lquizleague_web_maintain_globaltext_GlobalTextService$ as $c_Lquizleague_web_maintain_globaltext_GlobalTextService$ };
$c_Lquizleague_web_maintain_globaltext_GlobalTextService$.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_Lquizleague_web_maintain_globaltext_GlobalTextService$.prototype.constructor = $c_Lquizleague_web_maintain_globaltext_GlobalTextService$;
/** @constructor */
function $h_Lquizleague_web_maintain_globaltext_GlobalTextService$() {
  /*<skip>*/
}
export { $h_Lquizleague_web_maintain_globaltext_GlobalTextService$ as $h_Lquizleague_web_maintain_globaltext_GlobalTextService$ };
$h_Lquizleague_web_maintain_globaltext_GlobalTextService$.prototype = $c_Lquizleague_web_maintain_globaltext_GlobalTextService$.prototype;
$c_Lquizleague_web_maintain_globaltext_GlobalTextService$.prototype.cache__Lquizleague_web_model_Model__Lquizleague_web_model_Model = (function(item) {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__add__Lquizleague_web_model_Model__Lquizleague_web_model_Model(this, item)
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextService$.prototype.instance__Lquizleague_web_model_Model = (function() {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_PutService__instance__Lquizleague_web_model_Model(this)
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextService$.prototype.deCache__Lquizleague_domain_Entity__scm_Map = (function(item) {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_PutService__deCache__Lquizleague_domain_Entity__scm_Map(this, item)
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextService$.prototype.flush__V = (function() {
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_globaltext_GlobalTextGetService__flush__V(this)
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextService$.prototype.dec__sjs_js_Any__s_util_Either = (function(json) {
  var dec = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_util_json_codecs_DomainCodecs$().Lquizleague_util_json_codecs_DomainCodecs$__f_globalTextDecoder;
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__decodeJson__sjs_js_Any__Lio_circe_Decoder__s_util_Either(this, json, dec)
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextService$.prototype.filterList__Lquizleague_domain_Entity__Z = (function(u) {
  return true
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextService$.prototype.typeName__T = (function() {
  return this.Lquizleague_web_maintain_globaltext_GlobalTextService$__f_typeName
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextService$.prototype.uriRoot__T = (function() {
  return ((!this.Lquizleague_web_maintain_globaltext_GlobalTextService$__f_bitmap$0) ? $p_Lquizleague_web_maintain_globaltext_GlobalTextService$__uriRoot$lzycompute__T(this) : this.Lquizleague_web_maintain_globaltext_GlobalTextService$__f_uriRoot)
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextService$.prototype.db__Lfirebase_firestore_Firestore = (function() {
  return this.Lquizleague_web_maintain_globaltext_GlobalTextService$__f_db
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextService$.prototype.items__scm_Map = (function() {
  return this.Lquizleague_web_maintain_globaltext_GlobalTextService$__f_items
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextService$.prototype.quizleague$web$service$GetService$$observables__scm_Map = (function() {
  return this.Lquizleague_web_maintain_globaltext_GlobalTextService$__f_quizleague$web$service$GetService$$observables
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextService$.prototype.quizleague$web$service$GetService$$refObsCache__scm_Map = (function() {
  return this.Lquizleague_web_maintain_globaltext_GlobalTextService$__f_quizleague$web$service$GetService$$refObsCache
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextService$.prototype.quizleague$web$service$GetService$$listObservables__scm_Map = (function() {
  return this.Lquizleague_web_maintain_globaltext_GlobalTextService$__f_quizleague$web$service$GetService$$listObservables
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextService$.prototype.quizleague$web$service$GetService$$listObservables_$eq__scm_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_globaltext_GlobalTextService$__f_quizleague$web$service$GetService$$listObservables = x$1
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextService$.prototype.quizleague$web$service$GetService$_setter_$db_$eq__Lfirebase_firestore_Firestore__V = (function(x$1) {
  this.Lquizleague_web_maintain_globaltext_GlobalTextService$__f_db = x$1
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextService$.prototype.quizleague$web$service$GetService$_setter_$items_$eq__scm_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_globaltext_GlobalTextService$__f_items = x$1
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextService$.prototype.quizleague$web$service$GetService$_setter_$quizleague$web$service$GetService$$observables_$eq__scm_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_globaltext_GlobalTextService$__f_quizleague$web$service$GetService$$observables = x$1
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextService$.prototype.quizleague$web$service$GetService$_setter_$quizleague$web$service$GetService$$refObsCache_$eq__scm_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_globaltext_GlobalTextService$__f_quizleague$web$service$GetService$$refObsCache = x$1
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextService$.prototype.mapOutSparse__Lquizleague_domain_Entity__Lquizleague_web_model_Model = (function(domain) {
  var globalText = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$as_Lquizleague_domain_GlobalText(domain);
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_globaltext_GlobalTextGetService__mapOutSparse__Lquizleague_domain_GlobalText__Lquizleague_web_model_GlobalText(this, globalText)
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextService$.prototype.enc__Lquizleague_domain_Entity__Lio_circe_Json = (function(item) {
  var item$1 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$as_Lquizleague_domain_GlobalText(item);
  return $f_Lquizleague_web_service_globaltext_GlobalTextPutService__enc__Lquizleague_domain_GlobalText__Lio_circe_Json(this, item$1)
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextService$.prototype.save__Lquizleague_web_model_Model__Lrxscalajs_Observable = (function(item) {
  return $f_Lquizleague_web_service_globaltext_GlobalTextPutService__save__Lquizleague_web_model_GlobalText__Lrxscalajs_Observable(this, item)
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextService$.prototype.make__Lquizleague_domain_Entity = (function() {
  return $f_Lquizleague_web_service_globaltext_GlobalTextPutService__make__Lquizleague_domain_GlobalText(this)
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextService$.prototype.mapIn__Lquizleague_web_model_Model__Lquizleague_domain_Entity = (function(model) {
  return $f_Lquizleague_web_service_globaltext_GlobalTextPutService__mapIn__Lquizleague_web_model_GlobalText__Lquizleague_domain_GlobalText(this, model)
});
$c_Lquizleague_web_maintain_globaltext_GlobalTextService$.prototype.textService__Lquizleague_web_service_text_TextGetService = (function() {
  return this.Lquizleague_web_maintain_globaltext_GlobalTextService$__f_textService
});
var $d_Lquizleague_web_maintain_globaltext_GlobalTextService$ = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  Lquizleague_web_maintain_globaltext_GlobalTextService$: 0
}, false, "quizleague.web.maintain.globaltext.GlobalTextService$", {
  Lquizleague_web_maintain_globaltext_GlobalTextService$: 1,
  O: 1,
  Lquizleague_web_service_globaltext_GlobalTextGetService: 1,
  Lquizleague_web_service_GetService: 1,
  Lquizleague_web_names_GlobalTextNames: 1,
  Lquizleague_web_names_ComponentNames: 1,
  Lquizleague_web_service_globaltext_GlobalTextPutService: 1,
  Lquizleague_web_service_PutService: 1
});
export { $d_Lquizleague_web_maintain_globaltext_GlobalTextService$ as $d_Lquizleague_web_maintain_globaltext_GlobalTextService$ };
$c_Lquizleague_web_maintain_globaltext_GlobalTextService$.prototype.$classData = $d_Lquizleague_web_maintain_globaltext_GlobalTextService$;
var $n_Lquizleague_web_maintain_globaltext_GlobalTextService$;
function $m_Lquizleague_web_maintain_globaltext_GlobalTextService$() {
  if ((!$n_Lquizleague_web_maintain_globaltext_GlobalTextService$)) {
    $n_Lquizleague_web_maintain_globaltext_GlobalTextService$ = new $c_Lquizleague_web_maintain_globaltext_GlobalTextService$()
  };
  return $n_Lquizleague_web_maintain_globaltext_GlobalTextService$
}
export { $m_Lquizleague_web_maintain_globaltext_GlobalTextService$ as $m_Lquizleague_web_maintain_globaltext_GlobalTextService$ };
function $p_Lquizleague_web_maintain_season_SeasonService$__uriRoot$lzycompute__T($thiz) {
  if ((!$thiz.Lquizleague_web_maintain_season_SeasonService$__f_bitmap$0)) {
    $thiz.Lquizleague_web_maintain_season_SeasonService$__f_uriRoot = $thiz.Lquizleague_web_maintain_season_SeasonService$__f_typeName;
    $thiz.Lquizleague_web_maintain_season_SeasonService$__f_bitmap$0 = true
  };
  return $thiz.Lquizleague_web_maintain_season_SeasonService$__f_uriRoot
}
export { $p_Lquizleague_web_maintain_season_SeasonService$__uriRoot$lzycompute__T as $p_Lquizleague_web_maintain_season_SeasonService$__uriRoot$lzycompute__T };
/** @constructor */
function $c_Lquizleague_web_maintain_season_SeasonService$() {
  this.Lquizleague_web_maintain_season_SeasonService$__f_competitionService = null;
  this.Lquizleague_web_maintain_season_SeasonService$__f_textService = null;
  this.Lquizleague_web_maintain_season_SeasonService$__f_venueService = null;
  this.Lquizleague_web_maintain_season_SeasonService$__f_typeName = null;
  this.Lquizleague_web_maintain_season_SeasonService$__f_uriRoot = null;
  this.Lquizleague_web_maintain_season_SeasonService$__f_db = null;
  this.Lquizleague_web_maintain_season_SeasonService$__f_items = null;
  this.Lquizleague_web_maintain_season_SeasonService$__f_quizleague$web$service$GetService$$observables = null;
  this.Lquizleague_web_maintain_season_SeasonService$__f_quizleague$web$service$GetService$$refObsCache = null;
  this.Lquizleague_web_maintain_season_SeasonService$__f_quizleague$web$service$GetService$$listObservables = null;
  this.Lquizleague_web_maintain_season_SeasonService$__f_bitmap$0 = false;
  $n_Lquizleague_web_maintain_season_SeasonService$ = this;
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__$init$__V(this);
  this.Lquizleague_web_maintain_season_SeasonService$__f_typeName = "season";
  this.Lquizleague_web_maintain_season_SeasonService$__f_competitionService = $m_Lquizleague_web_maintain_competition_CompetitionService$();
  this.Lquizleague_web_maintain_season_SeasonService$__f_textService = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_maintain_text_TextService$();
  this.Lquizleague_web_maintain_season_SeasonService$__f_venueService = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_maintain_venue_VenueService$()
}
export { $c_Lquizleague_web_maintain_season_SeasonService$ as $c_Lquizleague_web_maintain_season_SeasonService$ };
$c_Lquizleague_web_maintain_season_SeasonService$.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_Lquizleague_web_maintain_season_SeasonService$.prototype.constructor = $c_Lquizleague_web_maintain_season_SeasonService$;
/** @constructor */
function $h_Lquizleague_web_maintain_season_SeasonService$() {
  /*<skip>*/
}
export { $h_Lquizleague_web_maintain_season_SeasonService$ as $h_Lquizleague_web_maintain_season_SeasonService$ };
$h_Lquizleague_web_maintain_season_SeasonService$.prototype = $c_Lquizleague_web_maintain_season_SeasonService$.prototype;
$c_Lquizleague_web_maintain_season_SeasonService$.prototype.flush__V = (function() {
  $f_Lquizleague_web_service_season_SeasonPutService__flush__V(this)
});
$c_Lquizleague_web_maintain_season_SeasonService$.prototype.cache__Lquizleague_web_model_Model__Lquizleague_web_model_Model = (function(item) {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__add__Lquizleague_web_model_Model__Lquizleague_web_model_Model(this, item)
});
$c_Lquizleague_web_maintain_season_SeasonService$.prototype.instance__Lquizleague_web_model_Model = (function() {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_PutService__instance__Lquizleague_web_model_Model(this)
});
$c_Lquizleague_web_maintain_season_SeasonService$.prototype.deCache__Lquizleague_domain_Entity__scm_Map = (function(item) {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_PutService__deCache__Lquizleague_domain_Entity__scm_Map(this, item)
});
$c_Lquizleague_web_maintain_season_SeasonService$.prototype.dec__sjs_js_Any__s_util_Either = (function(json) {
  var dec = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_util_json_codecs_DomainCodecs$().Lquizleague_util_json_codecs_DomainCodecs$__f_seasonDecoder;
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__decodeJson__sjs_js_Any__Lio_circe_Decoder__s_util_Either(this, json, dec)
});
$c_Lquizleague_web_maintain_season_SeasonService$.prototype.filterList__Lquizleague_domain_Entity__Z = (function(u) {
  return true
});
$c_Lquizleague_web_maintain_season_SeasonService$.prototype.typeName__T = (function() {
  return this.Lquizleague_web_maintain_season_SeasonService$__f_typeName
});
$c_Lquizleague_web_maintain_season_SeasonService$.prototype.uriRoot__T = (function() {
  return ((!this.Lquizleague_web_maintain_season_SeasonService$__f_bitmap$0) ? $p_Lquizleague_web_maintain_season_SeasonService$__uriRoot$lzycompute__T(this) : this.Lquizleague_web_maintain_season_SeasonService$__f_uriRoot)
});
$c_Lquizleague_web_maintain_season_SeasonService$.prototype.db__Lfirebase_firestore_Firestore = (function() {
  return this.Lquizleague_web_maintain_season_SeasonService$__f_db
});
$c_Lquizleague_web_maintain_season_SeasonService$.prototype.items__scm_Map = (function() {
  return this.Lquizleague_web_maintain_season_SeasonService$__f_items
});
$c_Lquizleague_web_maintain_season_SeasonService$.prototype.quizleague$web$service$GetService$$observables__scm_Map = (function() {
  return this.Lquizleague_web_maintain_season_SeasonService$__f_quizleague$web$service$GetService$$observables
});
$c_Lquizleague_web_maintain_season_SeasonService$.prototype.quizleague$web$service$GetService$$refObsCache__scm_Map = (function() {
  return this.Lquizleague_web_maintain_season_SeasonService$__f_quizleague$web$service$GetService$$refObsCache
});
$c_Lquizleague_web_maintain_season_SeasonService$.prototype.quizleague$web$service$GetService$$listObservables__scm_Map = (function() {
  return this.Lquizleague_web_maintain_season_SeasonService$__f_quizleague$web$service$GetService$$listObservables
});
$c_Lquizleague_web_maintain_season_SeasonService$.prototype.quizleague$web$service$GetService$$listObservables_$eq__scm_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_season_SeasonService$__f_quizleague$web$service$GetService$$listObservables = x$1
});
$c_Lquizleague_web_maintain_season_SeasonService$.prototype.quizleague$web$service$GetService$_setter_$db_$eq__Lfirebase_firestore_Firestore__V = (function(x$1) {
  this.Lquizleague_web_maintain_season_SeasonService$__f_db = x$1
});
$c_Lquizleague_web_maintain_season_SeasonService$.prototype.quizleague$web$service$GetService$_setter_$items_$eq__scm_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_season_SeasonService$__f_items = x$1
});
$c_Lquizleague_web_maintain_season_SeasonService$.prototype.quizleague$web$service$GetService$_setter_$quizleague$web$service$GetService$$observables_$eq__scm_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_season_SeasonService$__f_quizleague$web$service$GetService$$observables = x$1
});
$c_Lquizleague_web_maintain_season_SeasonService$.prototype.quizleague$web$service$GetService$_setter_$quizleague$web$service$GetService$$refObsCache_$eq__scm_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_season_SeasonService$__f_quizleague$web$service$GetService$$refObsCache = x$1
});
$c_Lquizleague_web_maintain_season_SeasonService$.prototype.mapOutSparse__Lquizleague_domain_Entity__Lquizleague_web_model_Model = (function(domain) {
  var season = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$as_Lquizleague_domain_Season(domain);
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_season_SeasonGetService__mapOutSparse__Lquizleague_domain_Season__Lquizleague_web_model_Season(this, season)
});
$c_Lquizleague_web_maintain_season_SeasonService$.prototype.save__Lquizleague_web_model_Model__Lrxscalajs_Observable = (function(item) {
  return $f_Lquizleague_web_service_season_SeasonPutService__save__Lquizleague_web_model_Season__Lrxscalajs_Observable(this, item)
});
$c_Lquizleague_web_maintain_season_SeasonService$.prototype.enc__Lquizleague_domain_Entity__Lio_circe_Json = (function(item) {
  var item$1 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$as_Lquizleague_domain_Season(item);
  return $f_Lquizleague_web_service_season_SeasonPutService__enc__Lquizleague_domain_Season__Lio_circe_Json(this, item$1)
});
$c_Lquizleague_web_maintain_season_SeasonService$.prototype.make__Lquizleague_domain_Entity = (function() {
  return $f_Lquizleague_web_service_season_SeasonPutService__make__Lquizleague_domain_Season(this)
});
$c_Lquizleague_web_maintain_season_SeasonService$.prototype.mapIn__Lquizleague_web_model_Model__Lquizleague_domain_Entity = (function(model) {
  return $f_Lquizleague_web_service_season_SeasonPutService__mapIn__Lquizleague_web_model_Season__Lquizleague_domain_Season(this, model)
});
$c_Lquizleague_web_maintain_season_SeasonService$.prototype.venueService__Lquizleague_web_service_venue_VenueGetService = (function() {
  return this.Lquizleague_web_maintain_season_SeasonService$__f_venueService
});
$c_Lquizleague_web_maintain_season_SeasonService$.prototype.textService__Lquizleague_web_service_text_TextGetService = (function() {
  return this.Lquizleague_web_maintain_season_SeasonService$__f_textService
});
$c_Lquizleague_web_maintain_season_SeasonService$.prototype.competitionService__Lquizleague_web_service_competition_CompetitionGetService = (function() {
  return this.Lquizleague_web_maintain_season_SeasonService$__f_competitionService
});
var $d_Lquizleague_web_maintain_season_SeasonService$ = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  Lquizleague_web_maintain_season_SeasonService$: 0
}, false, "quizleague.web.maintain.season.SeasonService$", {
  Lquizleague_web_maintain_season_SeasonService$: 1,
  O: 1,
  Lquizleague_web_service_season_SeasonGetService: 1,
  Lquizleague_web_service_GetService: 1,
  Lquizleague_web_names_SeasonNames: 1,
  Lquizleague_web_names_ComponentNames: 1,
  Lquizleague_web_service_season_SeasonPutService: 1,
  Lquizleague_web_service_PutService: 1
});
export { $d_Lquizleague_web_maintain_season_SeasonService$ as $d_Lquizleague_web_maintain_season_SeasonService$ };
$c_Lquizleague_web_maintain_season_SeasonService$.prototype.$classData = $d_Lquizleague_web_maintain_season_SeasonService$;
var $n_Lquizleague_web_maintain_season_SeasonService$;
function $m_Lquizleague_web_maintain_season_SeasonService$() {
  if ((!$n_Lquizleague_web_maintain_season_SeasonService$)) {
    $n_Lquizleague_web_maintain_season_SeasonService$ = new $c_Lquizleague_web_maintain_season_SeasonService$()
  };
  return $n_Lquizleague_web_maintain_season_SeasonService$
}
export { $m_Lquizleague_web_maintain_season_SeasonService$ as $m_Lquizleague_web_maintain_season_SeasonService$ };
function $f_Lquizleague_web_service_applicationcontext_ApplicationContextPutService__mapIn__Lquizleague_web_model_ApplicationContext__Lquizleague_domain_ApplicationContext($thiz, context) {
  var this$8 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_domain_ApplicationContext$();
  var leagueName = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(context.leagueName);
  var this$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($thiz.Lquizleague_web_maintain_applicationcontext_ApplicationContextService$__f_globalTextService);
  var ro = context.textSet;
  var textSet = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__ref__Lquizleague_web_util_rx_RefObservable__Lquizleague_domain_Ref(this$1, ro);
  var this$2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($thiz.Lquizleague_web_maintain_applicationcontext_ApplicationContextService$__f_seasonService);
  var ro$1 = context.currentSeason;
  var currentSeason = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__ref__Lquizleague_web_util_rx_RefObservable__Lquizleague_domain_Ref(this$2, ro$1);
  var senderEmail = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(context.senderEmail);
  var array = context.emailAliases;
  var array$1 = [];
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length);
  var i = 0;
  var len = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length);
  while ((i < len)) {
    var index = i;
    var arg1 = array[index];
    var $$x1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(arg1.alias);
    var this$5 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($thiz.Lquizleague_web_maintain_applicationcontext_ApplicationContextService$__f_userService);
    var ro$2 = arg1.user;
    var elem = new $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$c_Lquizleague_domain_EmailAlias($$x1, $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__ref__Lquizleague_web_util_rx_RefObservable__Lquizleague_domain_Ref(this$5, ro$2));
    array$1.push(elem);
    i = ((1 + i) | 0)
  };
  var i$1 = (((-1) + $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array$1.length)) | 0);
  var result = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sci_Nil$();
  while ((i$1 >= 0)) {
    var this$7 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(result);
    var index$1 = i$1;
    var x = array$1[index$1];
    result = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sci_$colon$colon(x, this$7);
    i$1 = (((-1) + i$1) | 0)
  };
  var emailAliases = result;
  var cloudStoreBucket = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(context.cloudStoreBucket);
  return new $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$c_Lquizleague_domain_ApplicationContext(this$8.Lquizleague_domain_ApplicationContext$__f_singletonId, leagueName, textSet, currentSeason, senderEmail, emailAliases, cloudStoreBucket, false)
}
export { $f_Lquizleague_web_service_applicationcontext_ApplicationContextPutService__mapIn__Lquizleague_web_model_ApplicationContext__Lquizleague_domain_ApplicationContext as $f_Lquizleague_web_service_applicationcontext_ApplicationContextPutService__mapIn__Lquizleague_web_model_ApplicationContext__Lquizleague_domain_ApplicationContext };
function $f_Lquizleague_web_service_applicationcontext_ApplicationContextPutService__enc__Lquizleague_domain_ApplicationContext__Lio_circe_Json($thiz, item) {
  var encoder = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_util_json_codecs_DomainCodecs$().Lquizleague_util_json_codecs_DomainCodecs$__f_applicationContextEncoder;
  return $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(encoder).apply__O__Lio_circe_Json(item)
}
export { $f_Lquizleague_web_service_applicationcontext_ApplicationContextPutService__enc__Lquizleague_domain_ApplicationContext__Lio_circe_Json as $f_Lquizleague_web_service_applicationcontext_ApplicationContextPutService__enc__Lquizleague_domain_ApplicationContext__Lio_circe_Json };
function $f_Lquizleague_web_service_competition_CompetitionPutService__enc__Lquizleague_domain_Competition__Lio_circe_Json($thiz, item) {
  var encoder = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_util_json_codecs_DomainCodecs$().Lquizleague_util_json_codecs_DomainCodecs$__f_competitionEncoder;
  return $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(encoder).apply__O__Lio_circe_Json(item)
}
export { $f_Lquizleague_web_service_competition_CompetitionPutService__enc__Lquizleague_domain_Competition__Lio_circe_Json as $f_Lquizleague_web_service_competition_CompetitionPutService__enc__Lquizleague_domain_Competition__Lio_circe_Json };
function $f_Lquizleague_web_service_competition_CompetitionPutService__instance__s_Enumeration$Value__Lquizleague_web_model_Key__Lquizleague_web_model_Competition($thiz, compType, parentKey) {
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_util_Logging__log__O__T__Z__O($thiz, parentKey, "incoming key", true);
  var i = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(compType).toString__T();
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_util_Logging__log__O__T__Z__O($thiz, i, "comp type", true);
  var x = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_model_CompetitionType$().Lquizleague_web_model_CompetitionType$__f_league;
  if (((x === null) ? (compType === null) : $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(x).equals__O__Z(compType))) {
    var comp = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($thiz.PutHelpers__Lquizleague_web_service_competition_CompetitionPutService$PutHelpers$()).makeLeague__Lquizleague_domain_LeagueCompetition()
  } else {
    var x$3 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_model_CompetitionType$().Lquizleague_web_model_CompetitionType$__f_cup;
    if (((x$3 === null) ? (compType === null) : $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(x$3).equals__O__Z(compType))) {
      var comp = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($thiz.PutHelpers__Lquizleague_web_service_competition_CompetitionPutService$PutHelpers$()).makeCup__Lquizleague_domain_CupCompetition()
    } else {
      var x$5 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_model_CompetitionType$().Lquizleague_web_model_CompetitionType$__f_subsidiary;
      if (((x$5 === null) ? (compType === null) : $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(x$5).equals__O__Z(compType))) {
        var comp = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($thiz.PutHelpers__Lquizleague_web_service_competition_CompetitionPutService$PutHelpers$()).makeSubsidiary__Lquizleague_domain_SubsidiaryLeagueCompetition()
      } else {
        var x$7 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_model_CompetitionType$().Lquizleague_web_model_CompetitionType$__f_singleton;
        if ((!((x$7 === null) ? (compType === null) : $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(x$7).equals__O__Z(compType)))) {
          throw new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_s_MatchError(compType)
        };
        var comp = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($thiz.PutHelpers__Lquizleague_web_service_competition_CompetitionPutService$PutHelpers$()).makeSingleton__Lquizleague_domain_SingletonCompetition()
      }
    }
  };
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_util_Logging__log__O__T__Z__O($thiz, comp, "comp", true);
  var this$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(comp);
  var key = new $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$c_Lquizleague_domain_Key($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_Option$().apply__O__s_Option($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(parentKey.key)), $thiz.uriRoot__T(), $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(comp).id__T());
  var entity = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_domain_Entity__withKey__Lquizleague_domain_Key__Lquizleague_domain_Entity(this$1, key);
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_PutService__add__Lquizleague_domain_Entity__Lquizleague_web_model_Model($thiz, entity)
}
export { $f_Lquizleague_web_service_competition_CompetitionPutService__instance__s_Enumeration$Value__Lquizleague_web_model_Key__Lquizleague_web_model_Competition as $f_Lquizleague_web_service_competition_CompetitionPutService__instance__s_Enumeration$Value__Lquizleague_web_model_Key__Lquizleague_web_model_Competition };
function $f_Lquizleague_web_service_results_ReportPutService__mapIn__Lquizleague_web_model_Report__Lquizleague_domain_Report($thiz, model) {
  var this$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($thiz.Lquizleague_web_maintain_fixtures_ReportService$__f_teamService);
  var ro = model.team;
  var $$x1 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__ref__Lquizleague_web_util_rx_RefObservable__Lquizleague_domain_Ref(this$1, ro);
  var this$2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($thiz.Lquizleague_web_maintain_fixtures_ReportService$__f_textService);
  var ro$1 = model.text;
  return new $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$c_Lquizleague_domain_Report($$x1, $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__ref__Lquizleague_web_util_rx_RefObservable__Lquizleague_domain_Ref(this$2, ro$1))
}
export { $f_Lquizleague_web_service_results_ReportPutService__mapIn__Lquizleague_web_model_Report__Lquizleague_domain_Report as $f_Lquizleague_web_service_results_ReportPutService__mapIn__Lquizleague_web_model_Report__Lquizleague_domain_Report };
function $f_Lquizleague_web_service_results_ReportPutService__enc__Lquizleague_domain_Report__Lio_circe_Json($thiz, item) {
  var encoder = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_util_json_codecs_DomainCodecs$().Lquizleague_util_json_codecs_DomainCodecs$__f_reportEncoder;
  return $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(encoder).apply__O__Lio_circe_Json(item)
}
export { $f_Lquizleague_web_service_results_ReportPutService__enc__Lquizleague_domain_Report__Lio_circe_Json as $f_Lquizleague_web_service_results_ReportPutService__enc__Lquizleague_domain_Report__Lio_circe_Json };
/** @constructor */
function $c_s_math_Ordering$Tuple5Ordering(ord1, ord2, ord3, ord4, ord5) {
  this.s_math_Ordering$Tuple5Ordering__f_ord1 = null;
  this.s_math_Ordering$Tuple5Ordering__f_ord2 = null;
  this.s_math_Ordering$Tuple5Ordering__f_ord3 = null;
  this.s_math_Ordering$Tuple5Ordering__f_ord4 = null;
  this.s_math_Ordering$Tuple5Ordering__f_ord5 = null;
  this.s_math_Ordering$Tuple5Ordering__f_ord1 = ord1;
  this.s_math_Ordering$Tuple5Ordering__f_ord2 = ord2;
  this.s_math_Ordering$Tuple5Ordering__f_ord3 = ord3;
  this.s_math_Ordering$Tuple5Ordering__f_ord4 = ord4;
  this.s_math_Ordering$Tuple5Ordering__f_ord5 = ord5
}
export { $c_s_math_Ordering$Tuple5Ordering as $c_s_math_Ordering$Tuple5Ordering };
$c_s_math_Ordering$Tuple5Ordering.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_s_math_Ordering$Tuple5Ordering.prototype.constructor = $c_s_math_Ordering$Tuple5Ordering;
/** @constructor */
function $h_s_math_Ordering$Tuple5Ordering() {
  /*<skip>*/
}
export { $h_s_math_Ordering$Tuple5Ordering as $h_s_math_Ordering$Tuple5Ordering };
$h_s_math_Ordering$Tuple5Ordering.prototype = $c_s_math_Ordering$Tuple5Ordering.prototype;
$c_s_math_Ordering$Tuple5Ordering.prototype.lteq__O__O__Z = (function(x, y) {
  return $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$f_s_math_Ordering__lteq__O__O__Z(this, x, y)
});
$c_s_math_Ordering$Tuple5Ordering.prototype.equiv__O__O__Z = (function(x, y) {
  return $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$f_s_math_Ordering__equiv__O__O__Z(this, x, y)
});
$c_s_math_Ordering$Tuple5Ordering.prototype.reverse__s_math_Ordering = (function() {
  return new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_s_math_Ordering$Reverse(this)
});
$c_s_math_Ordering$Tuple5Ordering.prototype.compare__T5__T5__I = (function(x, y) {
  var compare1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.s_math_Ordering$Tuple5Ordering__f_ord1).compare__O__O__I($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(x).T5__f__1, $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(y).T5__f__1);
  if ((compare1 !== 0)) {
    return compare1
  };
  var compare2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.s_math_Ordering$Tuple5Ordering__f_ord2).compare__O__O__I($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(x).T5__f__2, $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(y).T5__f__2);
  if ((compare2 !== 0)) {
    return compare2
  };
  var compare3 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.s_math_Ordering$Tuple5Ordering__f_ord3).compare__O__O__I($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(x).T5__f__3, $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(y).T5__f__3);
  if ((compare3 !== 0)) {
    return compare3
  };
  var compare4 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.s_math_Ordering$Tuple5Ordering__f_ord4).compare__O__O__I($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(x).T5__f__4, $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(y).T5__f__4);
  if ((compare4 !== 0)) {
    return compare4
  };
  var compare5 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.s_math_Ordering$Tuple5Ordering__f_ord5).compare__O__O__I($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(x).T5__f__5, $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(y).T5__f__5);
  if ((compare5 !== 0)) {
    return compare5
  };
  return 0
});
$c_s_math_Ordering$Tuple5Ordering.prototype.equals__O__Z = (function(obj) {
  if ((obj !== null)) {
    if ((this === obj)) {
      return true
    }
  };
  if ((obj instanceof $c_s_math_Ordering$Tuple5Ordering)) {
    var x3 = $as_s_math_Ordering$Tuple5Ordering(obj);
    var x = this.s_math_Ordering$Tuple5Ordering__f_ord1;
    var x$2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(x3).s_math_Ordering$Tuple5Ordering__f_ord1;
    if (((x === null) ? (x$2 === null) : $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(x).equals__O__Z(x$2))) {
      var x$3 = this.s_math_Ordering$Tuple5Ordering__f_ord2;
      var x$4 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(x3).s_math_Ordering$Tuple5Ordering__f_ord2;
      var $$x3 = ((x$3 === null) ? (x$4 === null) : $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(x$3).equals__O__Z(x$4))
    } else {
      var $$x3 = false
    };
    if ($$x3) {
      var x$5 = this.s_math_Ordering$Tuple5Ordering__f_ord3;
      var x$6 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(x3).s_math_Ordering$Tuple5Ordering__f_ord3;
      var $$x2 = ((x$5 === null) ? (x$6 === null) : $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(x$5).equals__O__Z(x$6))
    } else {
      var $$x2 = false
    };
    if ($$x2) {
      var x$7 = this.s_math_Ordering$Tuple5Ordering__f_ord4;
      var x$8 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(x3).s_math_Ordering$Tuple5Ordering__f_ord4;
      var $$x1 = ((x$7 === null) ? (x$8 === null) : $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(x$7).equals__O__Z(x$8))
    } else {
      var $$x1 = false
    };
    if ($$x1) {
      var x$9 = this.s_math_Ordering$Tuple5Ordering__f_ord5;
      var x$10 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(x3).s_math_Ordering$Tuple5Ordering__f_ord5;
      return ((x$9 === null) ? (x$10 === null) : $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(x$9).equals__O__Z(x$10))
    } else {
      return false
    }
  };
  return false
});
$c_s_math_Ordering$Tuple5Ordering.prototype.hashCode__I = (function() {
  var _1 = this.s_math_Ordering$Tuple5Ordering__f_ord1;
  var _2 = this.s_math_Ordering$Tuple5Ordering__f_ord2;
  var _3 = this.s_math_Ordering$Tuple5Ordering__f_ord3;
  var _4 = this.s_math_Ordering$Tuple5Ordering__f_ord4;
  var _5 = this.s_math_Ordering$Tuple5Ordering__f_ord5;
  var this$2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_util_hashing_MurmurHash3$();
  var h = (-889275714);
  var i = 0;
  while ((i < 5)) {
    var $$x1 = h;
    var n = i;
    switch (n) {
      case 0: {
        var x = _1;
        break
      }
      case 1: {
        var x = _2;
        break
      }
      case 2: {
        var x = _3;
        break
      }
      case 3: {
        var x = _4;
        break
      }
      case 4: {
        var x = _5;
        break
      }
      default: {
        var x;
        throw $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$ct_jl_IndexOutOfBoundsException__T__(new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_jl_IndexOutOfBoundsException(), ("" + n))
      }
    };
    h = this$2.mix__I__I__I($$x1, $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sr_Statics$().anyHash__O__I(x));
    i = ((1 + i) | 0)
  };
  return this$2.finalizeHash__I__I__I(h, 5)
});
$c_s_math_Ordering$Tuple5Ordering.prototype.compare__O__O__I = (function(x, y) {
  return this.compare__T5__T5__I($as_T5(x), $as_T5(y))
});
function $as_s_math_Ordering$Tuple5Ordering(obj) {
  return (((obj instanceof $c_s_math_Ordering$Tuple5Ordering) || (obj === null)) ? obj : $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$throwClassCastException(obj, "scala.math.Ordering$Tuple5Ordering"))
}
export { $as_s_math_Ordering$Tuple5Ordering as $as_s_math_Ordering$Tuple5Ordering };
function $isArrayOf_s_math_Ordering$Tuple5Ordering(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_math_Ordering$Tuple5Ordering)))
}
export { $isArrayOf_s_math_Ordering$Tuple5Ordering as $isArrayOf_s_math_Ordering$Tuple5Ordering };
function $asArrayOf_s_math_Ordering$Tuple5Ordering(obj, depth) {
  return (($isArrayOf_s_math_Ordering$Tuple5Ordering(obj, depth) || (obj === null)) ? obj : $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$throwArrayCastException(obj, "Lscala.math.Ordering$Tuple5Ordering;", depth))
}
export { $asArrayOf_s_math_Ordering$Tuple5Ordering as $asArrayOf_s_math_Ordering$Tuple5Ordering };
var $d_s_math_Ordering$Tuple5Ordering = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  s_math_Ordering$Tuple5Ordering: 0
}, false, "scala.math.Ordering$Tuple5Ordering", {
  s_math_Ordering$Tuple5Ordering: 1,
  O: 1,
  s_math_Ordering: 1,
  ju_Comparator: 1,
  s_math_PartialOrdering: 1,
  s_math_Equiv: 1,
  s_Serializable: 1,
  Ljava_io_Serializable: 1
});
export { $d_s_math_Ordering$Tuple5Ordering as $d_s_math_Ordering$Tuple5Ordering };
$c_s_math_Ordering$Tuple5Ordering.prototype.$classData = $d_s_math_Ordering$Tuple5Ordering;
function $p_Lquizleague_web_maintain_applicationcontext_ApplicationContextService$__uriRoot$lzycompute__T($thiz) {
  if ((!$thiz.Lquizleague_web_maintain_applicationcontext_ApplicationContextService$__f_bitmap$0)) {
    $thiz.Lquizleague_web_maintain_applicationcontext_ApplicationContextService$__f_uriRoot = $thiz.Lquizleague_web_maintain_applicationcontext_ApplicationContextService$__f_typeName;
    $thiz.Lquizleague_web_maintain_applicationcontext_ApplicationContextService$__f_bitmap$0 = true
  };
  return $thiz.Lquizleague_web_maintain_applicationcontext_ApplicationContextService$__f_uriRoot
}
export { $p_Lquizleague_web_maintain_applicationcontext_ApplicationContextService$__uriRoot$lzycompute__T as $p_Lquizleague_web_maintain_applicationcontext_ApplicationContextService$__uriRoot$lzycompute__T };
/** @constructor */
function $c_Lquizleague_web_maintain_applicationcontext_ApplicationContextService$() {
  this.Lquizleague_web_maintain_applicationcontext_ApplicationContextService$__f_userService = null;
  this.Lquizleague_web_maintain_applicationcontext_ApplicationContextService$__f_globalTextService = null;
  this.Lquizleague_web_maintain_applicationcontext_ApplicationContextService$__f_seasonService = null;
  this.Lquizleague_web_maintain_applicationcontext_ApplicationContextService$__f_typeName = null;
  this.Lquizleague_web_maintain_applicationcontext_ApplicationContextService$__f_uriRoot = null;
  this.Lquizleague_web_maintain_applicationcontext_ApplicationContextService$__f_db = null;
  this.Lquizleague_web_maintain_applicationcontext_ApplicationContextService$__f_items = null;
  this.Lquizleague_web_maintain_applicationcontext_ApplicationContextService$__f_quizleague$web$service$GetService$$observables = null;
  this.Lquizleague_web_maintain_applicationcontext_ApplicationContextService$__f_quizleague$web$service$GetService$$refObsCache = null;
  this.Lquizleague_web_maintain_applicationcontext_ApplicationContextService$__f_quizleague$web$service$GetService$$listObservables = null;
  this.Lquizleague_web_maintain_applicationcontext_ApplicationContextService$__f_bitmap$0 = false;
  $n_Lquizleague_web_maintain_applicationcontext_ApplicationContextService$ = this;
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__$init$__V(this);
  this.Lquizleague_web_maintain_applicationcontext_ApplicationContextService$__f_typeName = "applicationcontext";
  this.Lquizleague_web_maintain_applicationcontext_ApplicationContextService$__f_userService = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_maintain_user_UserService$();
  this.Lquizleague_web_maintain_applicationcontext_ApplicationContextService$__f_globalTextService = $m_Lquizleague_web_maintain_globaltext_GlobalTextService$();
  this.Lquizleague_web_maintain_applicationcontext_ApplicationContextService$__f_seasonService = $m_Lquizleague_web_maintain_season_SeasonService$()
}
export { $c_Lquizleague_web_maintain_applicationcontext_ApplicationContextService$ as $c_Lquizleague_web_maintain_applicationcontext_ApplicationContextService$ };
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextService$.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextService$.prototype.constructor = $c_Lquizleague_web_maintain_applicationcontext_ApplicationContextService$;
/** @constructor */
function $h_Lquizleague_web_maintain_applicationcontext_ApplicationContextService$() {
  /*<skip>*/
}
export { $h_Lquizleague_web_maintain_applicationcontext_ApplicationContextService$ as $h_Lquizleague_web_maintain_applicationcontext_ApplicationContextService$ };
$h_Lquizleague_web_maintain_applicationcontext_ApplicationContextService$.prototype = $c_Lquizleague_web_maintain_applicationcontext_ApplicationContextService$.prototype;
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextService$.prototype.cache__Lquizleague_web_model_Model__Lquizleague_web_model_Model = (function(item) {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__add__Lquizleague_web_model_Model__Lquizleague_web_model_Model(this, item)
});
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextService$.prototype.save__Lquizleague_web_model_Model__Lrxscalajs_Observable = (function(item) {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_PutService__save__Lquizleague_web_model_Model__Lrxscalajs_Observable(this, item)
});
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextService$.prototype.instance__Lquizleague_web_model_Model = (function() {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_PutService__instance__Lquizleague_web_model_Model(this)
});
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextService$.prototype.deCache__Lquizleague_domain_Entity__scm_Map = (function(item) {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_PutService__deCache__Lquizleague_domain_Entity__scm_Map(this, item)
});
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextService$.prototype.dec__sjs_js_Any__s_util_Either = (function(json) {
  var dec = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_util_json_codecs_DomainCodecs$().Lquizleague_util_json_codecs_DomainCodecs$__f_applicationContextDecoder;
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__decodeJson__sjs_js_Any__Lio_circe_Decoder__s_util_Either(this, json, dec)
});
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextService$.prototype.flush__V = (function() {
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.Lquizleague_web_maintain_applicationcontext_ApplicationContextService$__f_items).clear__V()
});
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextService$.prototype.filterList__Lquizleague_domain_Entity__Z = (function(u) {
  return true
});
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextService$.prototype.typeName__T = (function() {
  return this.Lquizleague_web_maintain_applicationcontext_ApplicationContextService$__f_typeName
});
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextService$.prototype.uriRoot__T = (function() {
  return ((!this.Lquizleague_web_maintain_applicationcontext_ApplicationContextService$__f_bitmap$0) ? $p_Lquizleague_web_maintain_applicationcontext_ApplicationContextService$__uriRoot$lzycompute__T(this) : this.Lquizleague_web_maintain_applicationcontext_ApplicationContextService$__f_uriRoot)
});
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextService$.prototype.db__Lfirebase_firestore_Firestore = (function() {
  return this.Lquizleague_web_maintain_applicationcontext_ApplicationContextService$__f_db
});
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextService$.prototype.items__scm_Map = (function() {
  return this.Lquizleague_web_maintain_applicationcontext_ApplicationContextService$__f_items
});
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextService$.prototype.quizleague$web$service$GetService$$observables__scm_Map = (function() {
  return this.Lquizleague_web_maintain_applicationcontext_ApplicationContextService$__f_quizleague$web$service$GetService$$observables
});
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextService$.prototype.quizleague$web$service$GetService$$refObsCache__scm_Map = (function() {
  return this.Lquizleague_web_maintain_applicationcontext_ApplicationContextService$__f_quizleague$web$service$GetService$$refObsCache
});
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextService$.prototype.quizleague$web$service$GetService$$listObservables__scm_Map = (function() {
  return this.Lquizleague_web_maintain_applicationcontext_ApplicationContextService$__f_quizleague$web$service$GetService$$listObservables
});
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextService$.prototype.quizleague$web$service$GetService$$listObservables_$eq__scm_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_applicationcontext_ApplicationContextService$__f_quizleague$web$service$GetService$$listObservables = x$1
});
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextService$.prototype.quizleague$web$service$GetService$_setter_$db_$eq__Lfirebase_firestore_Firestore__V = (function(x$1) {
  this.Lquizleague_web_maintain_applicationcontext_ApplicationContextService$__f_db = x$1
});
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextService$.prototype.quizleague$web$service$GetService$_setter_$items_$eq__scm_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_applicationcontext_ApplicationContextService$__f_items = x$1
});
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextService$.prototype.quizleague$web$service$GetService$_setter_$quizleague$web$service$GetService$$observables_$eq__scm_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_applicationcontext_ApplicationContextService$__f_quizleague$web$service$GetService$$observables = x$1
});
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextService$.prototype.quizleague$web$service$GetService$_setter_$quizleague$web$service$GetService$$refObsCache_$eq__scm_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_applicationcontext_ApplicationContextService$__f_quizleague$web$service$GetService$$refObsCache = x$1
});
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextService$.prototype.mapOutSparse__Lquizleague_domain_Entity__Lquizleague_web_model_Model = (function(domain) {
  var context = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$as_Lquizleague_domain_ApplicationContext(domain);
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_applicationcontext_ApplicationContextGetService__mapOutSparse__Lquizleague_domain_ApplicationContext__Lquizleague_web_model_ApplicationContext(this, context)
});
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextService$.prototype.enc__Lquizleague_domain_Entity__Lio_circe_Json = (function(item) {
  var item$1 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$as_Lquizleague_domain_ApplicationContext(item);
  return $f_Lquizleague_web_service_applicationcontext_ApplicationContextPutService__enc__Lquizleague_domain_ApplicationContext__Lio_circe_Json(this, item$1)
});
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextService$.prototype.make__Lquizleague_domain_Entity = (function() {
  return new $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$c_Lquizleague_domain_ApplicationContext($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_util_UUID$().randomUUID__Lquizleague_web_util_UUID()).toString__T(), "", null, null, "", $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sci_Nil$(), "", false)
});
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextService$.prototype.mapIn__Lquizleague_web_model_Model__Lquizleague_domain_Entity = (function(model) {
  return $f_Lquizleague_web_service_applicationcontext_ApplicationContextPutService__mapIn__Lquizleague_web_model_ApplicationContext__Lquizleague_domain_ApplicationContext(this, model)
});
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextService$.prototype.seasonService__Lquizleague_web_service_season_SeasonGetService = (function() {
  return this.Lquizleague_web_maintain_applicationcontext_ApplicationContextService$__f_seasonService
});
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextService$.prototype.globalTextService__Lquizleague_web_service_globaltext_GlobalTextGetService = (function() {
  return this.Lquizleague_web_maintain_applicationcontext_ApplicationContextService$__f_globalTextService
});
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextService$.prototype.userService__Lquizleague_web_service_user_UserGetService = (function() {
  return this.Lquizleague_web_maintain_applicationcontext_ApplicationContextService$__f_userService
});
var $d_Lquizleague_web_maintain_applicationcontext_ApplicationContextService$ = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  Lquizleague_web_maintain_applicationcontext_ApplicationContextService$: 0
}, false, "quizleague.web.maintain.applicationcontext.ApplicationContextService$", {
  Lquizleague_web_maintain_applicationcontext_ApplicationContextService$: 1,
  O: 1,
  Lquizleague_web_service_applicationcontext_ApplicationContextGetService: 1,
  Lquizleague_web_service_GetService: 1,
  Lquizleague_web_names_ApplicationContextNames: 1,
  Lquizleague_web_names_ComponentNames: 1,
  Lquizleague_web_util_Logging: 1,
  Lquizleague_web_service_applicationcontext_ApplicationContextPutService: 1,
  Lquizleague_web_service_PutService: 1
});
export { $d_Lquizleague_web_maintain_applicationcontext_ApplicationContextService$ as $d_Lquizleague_web_maintain_applicationcontext_ApplicationContextService$ };
$c_Lquizleague_web_maintain_applicationcontext_ApplicationContextService$.prototype.$classData = $d_Lquizleague_web_maintain_applicationcontext_ApplicationContextService$;
var $n_Lquizleague_web_maintain_applicationcontext_ApplicationContextService$;
function $m_Lquizleague_web_maintain_applicationcontext_ApplicationContextService$() {
  if ((!$n_Lquizleague_web_maintain_applicationcontext_ApplicationContextService$)) {
    $n_Lquizleague_web_maintain_applicationcontext_ApplicationContextService$ = new $c_Lquizleague_web_maintain_applicationcontext_ApplicationContextService$()
  };
  return $n_Lquizleague_web_maintain_applicationcontext_ApplicationContextService$
}
export { $m_Lquizleague_web_maintain_applicationcontext_ApplicationContextService$ as $m_Lquizleague_web_maintain_applicationcontext_ApplicationContextService$ };
function $p_Lquizleague_web_maintain_competition_CompetitionService$__uriRoot$lzycompute__T($thiz) {
  if ((!$thiz.Lquizleague_web_maintain_competition_CompetitionService$__f_bitmap$0)) {
    $thiz.Lquizleague_web_maintain_competition_CompetitionService$__f_uriRoot = $thiz.Lquizleague_web_maintain_competition_CompetitionService$__f_typeName;
    $thiz.Lquizleague_web_maintain_competition_CompetitionService$__f_bitmap$0 = true
  };
  return $thiz.Lquizleague_web_maintain_competition_CompetitionService$__f_uriRoot
}
export { $p_Lquizleague_web_maintain_competition_CompetitionService$__uriRoot$lzycompute__T as $p_Lquizleague_web_maintain_competition_CompetitionService$__uriRoot$lzycompute__T };
function $p_Lquizleague_web_maintain_competition_CompetitionService$__PutHelpers$lzycompute$1__V($thiz) {
  if (($m_Lquizleague_web_maintain_competition_CompetitionService$().Lquizleague_web_maintain_competition_CompetitionService$__f_PutHelpers$module === null)) {
    $m_Lquizleague_web_maintain_competition_CompetitionService$().Lquizleague_web_maintain_competition_CompetitionService$__f_PutHelpers$module = new $c_Lquizleague_web_service_competition_CompetitionPutService$PutHelpers$($thiz)
  }
}
export { $p_Lquizleague_web_maintain_competition_CompetitionService$__PutHelpers$lzycompute$1__V as $p_Lquizleague_web_maintain_competition_CompetitionService$__PutHelpers$lzycompute$1__V };
function $p_Lquizleague_web_maintain_competition_CompetitionService$__Helpers$lzycompute$1__V($thiz) {
  if (($m_Lquizleague_web_maintain_competition_CompetitionService$().Lquizleague_web_maintain_competition_CompetitionService$__f_Helpers$module === null)) {
    $m_Lquizleague_web_maintain_competition_CompetitionService$().Lquizleague_web_maintain_competition_CompetitionService$__f_Helpers$module = new $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$c_Lquizleague_web_service_competition_CompetitionGetService$Helpers$($thiz)
  }
}
export { $p_Lquizleague_web_maintain_competition_CompetitionService$__Helpers$lzycompute$1__V as $p_Lquizleague_web_maintain_competition_CompetitionService$__Helpers$lzycompute$1__V };
/** @constructor */
function $c_Lquizleague_web_maintain_competition_CompetitionService$() {
  this.Lquizleague_web_maintain_competition_CompetitionService$__f_fixturesService = null;
  this.Lquizleague_web_maintain_competition_CompetitionService$__f_venueService = null;
  this.Lquizleague_web_maintain_competition_CompetitionService$__f_textService = null;
  this.Lquizleague_web_maintain_competition_CompetitionService$__f_leagueTableService = null;
  this.Lquizleague_web_maintain_competition_CompetitionService$__f_PutHelpers$module = null;
  this.Lquizleague_web_maintain_competition_CompetitionService$__f_Helpers$module = null;
  this.Lquizleague_web_maintain_competition_CompetitionService$__f_typeName = null;
  this.Lquizleague_web_maintain_competition_CompetitionService$__f_uriRoot = null;
  this.Lquizleague_web_maintain_competition_CompetitionService$__f_db = null;
  this.Lquizleague_web_maintain_competition_CompetitionService$__f_items = null;
  this.Lquizleague_web_maintain_competition_CompetitionService$__f_quizleague$web$service$GetService$$observables = null;
  this.Lquizleague_web_maintain_competition_CompetitionService$__f_quizleague$web$service$GetService$$refObsCache = null;
  this.Lquizleague_web_maintain_competition_CompetitionService$__f_quizleague$web$service$GetService$$listObservables = null;
  this.Lquizleague_web_maintain_competition_CompetitionService$__f_bitmap$0 = false;
  $n_Lquizleague_web_maintain_competition_CompetitionService$ = this;
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__$init$__V(this);
  this.Lquizleague_web_maintain_competition_CompetitionService$__f_typeName = "competition";
  this.Lquizleague_web_maintain_competition_CompetitionService$__f_fixturesService = $m_Lquizleague_web_maintain_fixtures_FixturesService$();
  this.Lquizleague_web_maintain_competition_CompetitionService$__f_venueService = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_maintain_venue_VenueService$();
  this.Lquizleague_web_maintain_competition_CompetitionService$__f_textService = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_maintain_text_TextService$();
  this.Lquizleague_web_maintain_competition_CompetitionService$__f_leagueTableService = $m_Lquizleague_web_maintain_leaguetable_LeagueTableService$()
}
export { $c_Lquizleague_web_maintain_competition_CompetitionService$ as $c_Lquizleague_web_maintain_competition_CompetitionService$ };
$c_Lquizleague_web_maintain_competition_CompetitionService$.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_Lquizleague_web_maintain_competition_CompetitionService$.prototype.constructor = $c_Lquizleague_web_maintain_competition_CompetitionService$;
/** @constructor */
function $h_Lquizleague_web_maintain_competition_CompetitionService$() {
  /*<skip>*/
}
export { $h_Lquizleague_web_maintain_competition_CompetitionService$ as $h_Lquizleague_web_maintain_competition_CompetitionService$ };
$h_Lquizleague_web_maintain_competition_CompetitionService$.prototype = $c_Lquizleague_web_maintain_competition_CompetitionService$.prototype;
$c_Lquizleague_web_maintain_competition_CompetitionService$.prototype.cache__Lquizleague_web_model_Model__Lquizleague_web_model_Model = (function(item) {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__add__Lquizleague_web_model_Model__Lquizleague_web_model_Model(this, item)
});
$c_Lquizleague_web_maintain_competition_CompetitionService$.prototype.save__Lquizleague_web_model_Model__Lrxscalajs_Observable = (function(item) {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_PutService__save__Lquizleague_web_model_Model__Lrxscalajs_Observable(this, item)
});
$c_Lquizleague_web_maintain_competition_CompetitionService$.prototype.instance__Lquizleague_web_model_Model = (function() {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_PutService__instance__Lquizleague_web_model_Model(this)
});
$c_Lquizleague_web_maintain_competition_CompetitionService$.prototype.deCache__Lquizleague_domain_Entity__scm_Map = (function(item) {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_PutService__deCache__Lquizleague_domain_Entity__scm_Map(this, item)
});
$c_Lquizleague_web_maintain_competition_CompetitionService$.prototype.dec__sjs_js_Any__s_util_Either = (function(json) {
  var dec = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_util_json_codecs_DomainCodecs$().Lquizleague_util_json_codecs_DomainCodecs$__f_competitionDecoder;
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__decodeJson__sjs_js_Any__Lio_circe_Decoder__s_util_Either(this, json, dec)
});
$c_Lquizleague_web_maintain_competition_CompetitionService$.prototype.flush__V = (function() {
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.Lquizleague_web_maintain_competition_CompetitionService$__f_items).clear__V()
});
$c_Lquizleague_web_maintain_competition_CompetitionService$.prototype.filterList__Lquizleague_domain_Entity__Z = (function(u) {
  return true
});
$c_Lquizleague_web_maintain_competition_CompetitionService$.prototype.PutHelpers__Lquizleague_web_service_competition_CompetitionPutService$PutHelpers$ = (function() {
  if (($m_Lquizleague_web_maintain_competition_CompetitionService$().Lquizleague_web_maintain_competition_CompetitionService$__f_PutHelpers$module === null)) {
    $p_Lquizleague_web_maintain_competition_CompetitionService$__PutHelpers$lzycompute$1__V(this)
  };
  return $m_Lquizleague_web_maintain_competition_CompetitionService$().Lquizleague_web_maintain_competition_CompetitionService$__f_PutHelpers$module
});
$c_Lquizleague_web_maintain_competition_CompetitionService$.prototype.Helpers__Lquizleague_web_service_competition_CompetitionGetService$Helpers$ = (function() {
  if (($m_Lquizleague_web_maintain_competition_CompetitionService$().Lquizleague_web_maintain_competition_CompetitionService$__f_Helpers$module === null)) {
    $p_Lquizleague_web_maintain_competition_CompetitionService$__Helpers$lzycompute$1__V(this)
  };
  return $m_Lquizleague_web_maintain_competition_CompetitionService$().Lquizleague_web_maintain_competition_CompetitionService$__f_Helpers$module
});
$c_Lquizleague_web_maintain_competition_CompetitionService$.prototype.typeName__T = (function() {
  return this.Lquizleague_web_maintain_competition_CompetitionService$__f_typeName
});
$c_Lquizleague_web_maintain_competition_CompetitionService$.prototype.uriRoot__T = (function() {
  return ((!this.Lquizleague_web_maintain_competition_CompetitionService$__f_bitmap$0) ? $p_Lquizleague_web_maintain_competition_CompetitionService$__uriRoot$lzycompute__T(this) : this.Lquizleague_web_maintain_competition_CompetitionService$__f_uriRoot)
});
$c_Lquizleague_web_maintain_competition_CompetitionService$.prototype.db__Lfirebase_firestore_Firestore = (function() {
  return this.Lquizleague_web_maintain_competition_CompetitionService$__f_db
});
$c_Lquizleague_web_maintain_competition_CompetitionService$.prototype.items__scm_Map = (function() {
  return this.Lquizleague_web_maintain_competition_CompetitionService$__f_items
});
$c_Lquizleague_web_maintain_competition_CompetitionService$.prototype.quizleague$web$service$GetService$$observables__scm_Map = (function() {
  return this.Lquizleague_web_maintain_competition_CompetitionService$__f_quizleague$web$service$GetService$$observables
});
$c_Lquizleague_web_maintain_competition_CompetitionService$.prototype.quizleague$web$service$GetService$$refObsCache__scm_Map = (function() {
  return this.Lquizleague_web_maintain_competition_CompetitionService$__f_quizleague$web$service$GetService$$refObsCache
});
$c_Lquizleague_web_maintain_competition_CompetitionService$.prototype.quizleague$web$service$GetService$$listObservables__scm_Map = (function() {
  return this.Lquizleague_web_maintain_competition_CompetitionService$__f_quizleague$web$service$GetService$$listObservables
});
$c_Lquizleague_web_maintain_competition_CompetitionService$.prototype.quizleague$web$service$GetService$$listObservables_$eq__scm_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_competition_CompetitionService$__f_quizleague$web$service$GetService$$listObservables = x$1
});
$c_Lquizleague_web_maintain_competition_CompetitionService$.prototype.quizleague$web$service$GetService$_setter_$db_$eq__Lfirebase_firestore_Firestore__V = (function(x$1) {
  this.Lquizleague_web_maintain_competition_CompetitionService$__f_db = x$1
});
$c_Lquizleague_web_maintain_competition_CompetitionService$.prototype.quizleague$web$service$GetService$_setter_$items_$eq__scm_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_competition_CompetitionService$__f_items = x$1
});
$c_Lquizleague_web_maintain_competition_CompetitionService$.prototype.quizleague$web$service$GetService$_setter_$quizleague$web$service$GetService$$observables_$eq__scm_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_competition_CompetitionService$__f_quizleague$web$service$GetService$$observables = x$1
});
$c_Lquizleague_web_maintain_competition_CompetitionService$.prototype.quizleague$web$service$GetService$_setter_$quizleague$web$service$GetService$$refObsCache_$eq__scm_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_competition_CompetitionService$__f_quizleague$web$service$GetService$$refObsCache = x$1
});
$c_Lquizleague_web_maintain_competition_CompetitionService$.prototype.mapOutSparse__Lquizleague_domain_Entity__Lquizleague_web_model_Model = (function(domain) {
  var comp = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$as_Lquizleague_domain_Competition(domain);
  return $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.Helpers__Lquizleague_web_service_competition_CompetitionGetService$Helpers$()).doMapOutSparse__Lquizleague_domain_Competition__Lquizleague_web_model_Competition(comp)
});
$c_Lquizleague_web_maintain_competition_CompetitionService$.prototype.enc__Lquizleague_domain_Entity__Lio_circe_Json = (function(item) {
  var item$1 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$as_Lquizleague_domain_Competition(item);
  return $f_Lquizleague_web_service_competition_CompetitionPutService__enc__Lquizleague_domain_Competition__Lio_circe_Json(this, item$1)
});
$c_Lquizleague_web_maintain_competition_CompetitionService$.prototype.make__Lquizleague_domain_Entity = (function() {
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_Predef$().$qmark$qmark$qmark__E()
});
$c_Lquizleague_web_maintain_competition_CompetitionService$.prototype.mapIn__Lquizleague_web_model_Model__Lquizleague_domain_Entity = (function(model) {
  return $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.PutHelpers__Lquizleague_web_service_competition_CompetitionPutService$PutHelpers$()).doMapIn__Lquizleague_web_model_Competition__Lquizleague_domain_Competition(model)
});
$c_Lquizleague_web_maintain_competition_CompetitionService$.prototype.leagueTableService__Lquizleague_web_service_leaguetable_LeagueTableGetService = (function() {
  return this.Lquizleague_web_maintain_competition_CompetitionService$__f_leagueTableService
});
$c_Lquizleague_web_maintain_competition_CompetitionService$.prototype.textService__Lquizleague_web_service_text_TextGetService = (function() {
  return this.Lquizleague_web_maintain_competition_CompetitionService$__f_textService
});
$c_Lquizleague_web_maintain_competition_CompetitionService$.prototype.venueService__Lquizleague_web_service_venue_VenueGetService = (function() {
  return this.Lquizleague_web_maintain_competition_CompetitionService$__f_venueService
});
$c_Lquizleague_web_maintain_competition_CompetitionService$.prototype.fixturesService__Lquizleague_web_service_fixtures_FixturesGetService = (function() {
  return this.Lquizleague_web_maintain_competition_CompetitionService$__f_fixturesService
});
var $d_Lquizleague_web_maintain_competition_CompetitionService$ = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  Lquizleague_web_maintain_competition_CompetitionService$: 0
}, false, "quizleague.web.maintain.competition.CompetitionService$", {
  Lquizleague_web_maintain_competition_CompetitionService$: 1,
  O: 1,
  Lquizleague_web_service_competition_CompetitionGetService: 1,
  Lquizleague_web_service_GetService: 1,
  Lquizleague_web_names_CompetitionNames: 1,
  Lquizleague_web_names_ComponentNames: 1,
  Lquizleague_web_util_Logging: 1,
  Lquizleague_web_service_competition_CompetitionPutService: 1,
  Lquizleague_web_service_PutService: 1
});
export { $d_Lquizleague_web_maintain_competition_CompetitionService$ as $d_Lquizleague_web_maintain_competition_CompetitionService$ };
$c_Lquizleague_web_maintain_competition_CompetitionService$.prototype.$classData = $d_Lquizleague_web_maintain_competition_CompetitionService$;
var $n_Lquizleague_web_maintain_competition_CompetitionService$;
function $m_Lquizleague_web_maintain_competition_CompetitionService$() {
  if ((!$n_Lquizleague_web_maintain_competition_CompetitionService$)) {
    $n_Lquizleague_web_maintain_competition_CompetitionService$ = new $c_Lquizleague_web_maintain_competition_CompetitionService$()
  };
  return $n_Lquizleague_web_maintain_competition_CompetitionService$
}
export { $m_Lquizleague_web_maintain_competition_CompetitionService$ as $m_Lquizleague_web_maintain_competition_CompetitionService$ };
function $p_Lquizleague_web_maintain_fixtures_ReportService$__uriRoot$lzycompute__T($thiz) {
  if ((!$thiz.Lquizleague_web_maintain_fixtures_ReportService$__f_bitmap$0)) {
    $thiz.Lquizleague_web_maintain_fixtures_ReportService$__f_uriRoot = $thiz.Lquizleague_web_maintain_fixtures_ReportService$__f_typeName;
    $thiz.Lquizleague_web_maintain_fixtures_ReportService$__f_bitmap$0 = true
  };
  return $thiz.Lquizleague_web_maintain_fixtures_ReportService$__f_uriRoot
}
export { $p_Lquizleague_web_maintain_fixtures_ReportService$__uriRoot$lzycompute__T as $p_Lquizleague_web_maintain_fixtures_ReportService$__uriRoot$lzycompute__T };
/** @constructor */
function $c_Lquizleague_web_maintain_fixtures_ReportService$() {
  this.Lquizleague_web_maintain_fixtures_ReportService$__f_teamService = null;
  this.Lquizleague_web_maintain_fixtures_ReportService$__f_textService = null;
  this.Lquizleague_web_maintain_fixtures_ReportService$__f_dirtyKeys = null;
  this.Lquizleague_web_maintain_fixtures_ReportService$__f_deleteKeys = null;
  this.Lquizleague_web_maintain_fixtures_ReportService$__f_typeName = null;
  this.Lquizleague_web_maintain_fixtures_ReportService$__f_uriRoot = null;
  this.Lquizleague_web_maintain_fixtures_ReportService$__f_db = null;
  this.Lquizleague_web_maintain_fixtures_ReportService$__f_items = null;
  this.Lquizleague_web_maintain_fixtures_ReportService$__f_quizleague$web$service$GetService$$observables = null;
  this.Lquizleague_web_maintain_fixtures_ReportService$__f_quizleague$web$service$GetService$$refObsCache = null;
  this.Lquizleague_web_maintain_fixtures_ReportService$__f_quizleague$web$service$GetService$$listObservables = null;
  this.Lquizleague_web_maintain_fixtures_ReportService$__f_bitmap$0 = false;
  $n_Lquizleague_web_maintain_fixtures_ReportService$ = this;
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__$init$__V(this);
  this.Lquizleague_web_maintain_fixtures_ReportService$__f_typeName = "report";
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_DirtyListService__$init$__V(this);
  this.Lquizleague_web_maintain_fixtures_ReportService$__f_teamService = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_maintain_team_TeamService$();
  this.Lquizleague_web_maintain_fixtures_ReportService$__f_textService = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_maintain_text_TextService$()
}
export { $c_Lquizleague_web_maintain_fixtures_ReportService$ as $c_Lquizleague_web_maintain_fixtures_ReportService$ };
$c_Lquizleague_web_maintain_fixtures_ReportService$.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_Lquizleague_web_maintain_fixtures_ReportService$.prototype.constructor = $c_Lquizleague_web_maintain_fixtures_ReportService$;
/** @constructor */
function $h_Lquizleague_web_maintain_fixtures_ReportService$() {
  /*<skip>*/
}
export { $h_Lquizleague_web_maintain_fixtures_ReportService$ as $h_Lquizleague_web_maintain_fixtures_ReportService$ };
$h_Lquizleague_web_maintain_fixtures_ReportService$.prototype = $c_Lquizleague_web_maintain_fixtures_ReportService$.prototype;
$c_Lquizleague_web_maintain_fixtures_ReportService$.prototype.cache__Lquizleague_web_model_Model__Lquizleague_web_model_Model = (function(item) {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_DirtyListService__cache__Lquizleague_web_model_Model__Lquizleague_web_model_Model(this, item)
});
$c_Lquizleague_web_maintain_fixtures_ReportService$.prototype.deCache__Lquizleague_domain_Entity__scm_Map = (function(item) {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_DirtyListService__deCache__Lquizleague_domain_Entity__scm_Map(this, item)
});
$c_Lquizleague_web_maintain_fixtures_ReportService$.prototype.flush__V = (function() {
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_DirtyListService__flush__V(this)
});
$c_Lquizleague_web_maintain_fixtures_ReportService$.prototype.instance__Lquizleague_web_model_Model = (function() {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_DirtyListService__instance__Lquizleague_web_model_Model(this)
});
$c_Lquizleague_web_maintain_fixtures_ReportService$.prototype.filterList__Lquizleague_domain_Entity__Z = (function(u) {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_DirtyListService__filterList__Lquizleague_domain_Entity__Z(this, u)
});
$c_Lquizleague_web_maintain_fixtures_ReportService$.prototype.save__Lquizleague_web_model_Model__Lrxscalajs_Observable = (function(item) {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_PutService__save__Lquizleague_web_model_Model__Lrxscalajs_Observable(this, item)
});
$c_Lquizleague_web_maintain_fixtures_ReportService$.prototype.dec__sjs_js_Any__s_util_Either = (function(json) {
  var dec = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_util_json_codecs_DomainCodecs$().Lquizleague_util_json_codecs_DomainCodecs$__f_reportDecoder;
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__decodeJson__sjs_js_Any__Lio_circe_Decoder__s_util_Either(this, json, dec)
});
$c_Lquizleague_web_maintain_fixtures_ReportService$.prototype.dirtyKeys__sci_Set = (function() {
  return this.Lquizleague_web_maintain_fixtures_ReportService$__f_dirtyKeys
});
$c_Lquizleague_web_maintain_fixtures_ReportService$.prototype.dirtyKeys_$eq__sci_Set__V = (function(x$1) {
  this.Lquizleague_web_maintain_fixtures_ReportService$__f_dirtyKeys = x$1
});
$c_Lquizleague_web_maintain_fixtures_ReportService$.prototype.deleteKeys__sci_Set = (function() {
  return this.Lquizleague_web_maintain_fixtures_ReportService$__f_deleteKeys
});
$c_Lquizleague_web_maintain_fixtures_ReportService$.prototype.deleteKeys_$eq__sci_Set__V = (function(x$1) {
  this.Lquizleague_web_maintain_fixtures_ReportService$__f_deleteKeys = x$1
});
$c_Lquizleague_web_maintain_fixtures_ReportService$.prototype.typeName__T = (function() {
  return this.Lquizleague_web_maintain_fixtures_ReportService$__f_typeName
});
$c_Lquizleague_web_maintain_fixtures_ReportService$.prototype.uriRoot__T = (function() {
  return ((!this.Lquizleague_web_maintain_fixtures_ReportService$__f_bitmap$0) ? $p_Lquizleague_web_maintain_fixtures_ReportService$__uriRoot$lzycompute__T(this) : this.Lquizleague_web_maintain_fixtures_ReportService$__f_uriRoot)
});
$c_Lquizleague_web_maintain_fixtures_ReportService$.prototype.db__Lfirebase_firestore_Firestore = (function() {
  return this.Lquizleague_web_maintain_fixtures_ReportService$__f_db
});
$c_Lquizleague_web_maintain_fixtures_ReportService$.prototype.items__scm_Map = (function() {
  return this.Lquizleague_web_maintain_fixtures_ReportService$__f_items
});
$c_Lquizleague_web_maintain_fixtures_ReportService$.prototype.quizleague$web$service$GetService$$observables__scm_Map = (function() {
  return this.Lquizleague_web_maintain_fixtures_ReportService$__f_quizleague$web$service$GetService$$observables
});
$c_Lquizleague_web_maintain_fixtures_ReportService$.prototype.quizleague$web$service$GetService$$refObsCache__scm_Map = (function() {
  return this.Lquizleague_web_maintain_fixtures_ReportService$__f_quizleague$web$service$GetService$$refObsCache
});
$c_Lquizleague_web_maintain_fixtures_ReportService$.prototype.quizleague$web$service$GetService$$listObservables__scm_Map = (function() {
  return this.Lquizleague_web_maintain_fixtures_ReportService$__f_quizleague$web$service$GetService$$listObservables
});
$c_Lquizleague_web_maintain_fixtures_ReportService$.prototype.quizleague$web$service$GetService$$listObservables_$eq__scm_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_fixtures_ReportService$__f_quizleague$web$service$GetService$$listObservables = x$1
});
$c_Lquizleague_web_maintain_fixtures_ReportService$.prototype.quizleague$web$service$GetService$_setter_$db_$eq__Lfirebase_firestore_Firestore__V = (function(x$1) {
  this.Lquizleague_web_maintain_fixtures_ReportService$__f_db = x$1
});
$c_Lquizleague_web_maintain_fixtures_ReportService$.prototype.quizleague$web$service$GetService$_setter_$items_$eq__scm_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_fixtures_ReportService$__f_items = x$1
});
$c_Lquizleague_web_maintain_fixtures_ReportService$.prototype.quizleague$web$service$GetService$_setter_$quizleague$web$service$GetService$$observables_$eq__scm_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_fixtures_ReportService$__f_quizleague$web$service$GetService$$observables = x$1
});
$c_Lquizleague_web_maintain_fixtures_ReportService$.prototype.quizleague$web$service$GetService$_setter_$quizleague$web$service$GetService$$refObsCache_$eq__scm_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_fixtures_ReportService$__f_quizleague$web$service$GetService$$refObsCache = x$1
});
$c_Lquizleague_web_maintain_fixtures_ReportService$.prototype.mapOutSparse__Lquizleague_domain_Entity__Lquizleague_web_model_Model = (function(domain) {
  var dom = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$as_Lquizleague_domain_Report(domain);
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_results_ReportGetService__mapOutSparse__Lquizleague_domain_Report__Lquizleague_web_model_Report(this, dom)
});
$c_Lquizleague_web_maintain_fixtures_ReportService$.prototype.enc__Lquizleague_domain_Entity__Lio_circe_Json = (function(item) {
  var item$1 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$as_Lquizleague_domain_Report(item);
  return $f_Lquizleague_web_service_results_ReportPutService__enc__Lquizleague_domain_Report__Lio_circe_Json(this, item$1)
});
$c_Lquizleague_web_maintain_fixtures_ReportService$.prototype.make__Lquizleague_domain_Entity = (function() {
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_Predef$().$qmark$qmark$qmark__E()
});
$c_Lquizleague_web_maintain_fixtures_ReportService$.prototype.mapIn__Lquizleague_web_model_Model__Lquizleague_domain_Entity = (function(model) {
  return $f_Lquizleague_web_service_results_ReportPutService__mapIn__Lquizleague_web_model_Report__Lquizleague_domain_Report(this, model)
});
$c_Lquizleague_web_maintain_fixtures_ReportService$.prototype.textService__Lquizleague_web_service_text_TextGetService = (function() {
  return this.Lquizleague_web_maintain_fixtures_ReportService$__f_textService
});
$c_Lquizleague_web_maintain_fixtures_ReportService$.prototype.teamService__Lquizleague_web_service_team_TeamGetService = (function() {
  return this.Lquizleague_web_maintain_fixtures_ReportService$__f_teamService
});
var $d_Lquizleague_web_maintain_fixtures_ReportService$ = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  Lquizleague_web_maintain_fixtures_ReportService$: 0
}, false, "quizleague.web.maintain.fixtures.ReportService$", {
  Lquizleague_web_maintain_fixtures_ReportService$: 1,
  O: 1,
  Lquizleague_web_service_results_ReportGetService: 1,
  Lquizleague_web_service_GetService: 1,
  Lquizleague_web_names_ReportNames: 1,
  Lquizleague_web_names_ComponentNames: 1,
  Lquizleague_web_service_results_ReportPutService: 1,
  Lquizleague_web_service_PutService: 1,
  Lquizleague_web_service_DirtyListService: 1
});
export { $d_Lquizleague_web_maintain_fixtures_ReportService$ as $d_Lquizleague_web_maintain_fixtures_ReportService$ };
$c_Lquizleague_web_maintain_fixtures_ReportService$.prototype.$classData = $d_Lquizleague_web_maintain_fixtures_ReportService$;
var $n_Lquizleague_web_maintain_fixtures_ReportService$;
function $m_Lquizleague_web_maintain_fixtures_ReportService$() {
  if ((!$n_Lquizleague_web_maintain_fixtures_ReportService$)) {
    $n_Lquizleague_web_maintain_fixtures_ReportService$ = new $c_Lquizleague_web_maintain_fixtures_ReportService$()
  };
  return $n_Lquizleague_web_maintain_fixtures_ReportService$
}
export { $m_Lquizleague_web_maintain_fixtures_ReportService$ as $m_Lquizleague_web_maintain_fixtures_ReportService$ };
function $p_Lquizleague_web_maintain_leaguetable_LeagueTableService$__uriRoot$lzycompute__T($thiz) {
  if ((!$thiz.Lquizleague_web_maintain_leaguetable_LeagueTableService$__f_bitmap$0)) {
    $thiz.Lquizleague_web_maintain_leaguetable_LeagueTableService$__f_uriRoot = $thiz.Lquizleague_web_maintain_leaguetable_LeagueTableService$__f_typeName;
    $thiz.Lquizleague_web_maintain_leaguetable_LeagueTableService$__f_bitmap$0 = true
  };
  return $thiz.Lquizleague_web_maintain_leaguetable_LeagueTableService$__f_uriRoot
}
export { $p_Lquizleague_web_maintain_leaguetable_LeagueTableService$__uriRoot$lzycompute__T as $p_Lquizleague_web_maintain_leaguetable_LeagueTableService$__uriRoot$lzycompute__T };
/** @constructor */
function $c_Lquizleague_web_maintain_leaguetable_LeagueTableService$() {
  this.Lquizleague_web_maintain_leaguetable_LeagueTableService$__f_teamService = null;
  this.Lquizleague_web_maintain_leaguetable_LeagueTableService$__f_typeName = null;
  this.Lquizleague_web_maintain_leaguetable_LeagueTableService$__f_uriRoot = null;
  this.Lquizleague_web_maintain_leaguetable_LeagueTableService$__f_db = null;
  this.Lquizleague_web_maintain_leaguetable_LeagueTableService$__f_items = null;
  this.Lquizleague_web_maintain_leaguetable_LeagueTableService$__f_quizleague$web$service$GetService$$observables = null;
  this.Lquizleague_web_maintain_leaguetable_LeagueTableService$__f_quizleague$web$service$GetService$$refObsCache = null;
  this.Lquizleague_web_maintain_leaguetable_LeagueTableService$__f_quizleague$web$service$GetService$$listObservables = null;
  this.Lquizleague_web_maintain_leaguetable_LeagueTableService$__f_bitmap$0 = false;
  $n_Lquizleague_web_maintain_leaguetable_LeagueTableService$ = this;
  $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__$init$__V(this);
  this.Lquizleague_web_maintain_leaguetable_LeagueTableService$__f_typeName = "leaguetable";
  this.Lquizleague_web_maintain_leaguetable_LeagueTableService$__f_teamService = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_maintain_team_TeamService$()
}
export { $c_Lquizleague_web_maintain_leaguetable_LeagueTableService$ as $c_Lquizleague_web_maintain_leaguetable_LeagueTableService$ };
$c_Lquizleague_web_maintain_leaguetable_LeagueTableService$.prototype = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$h_O();
$c_Lquizleague_web_maintain_leaguetable_LeagueTableService$.prototype.constructor = $c_Lquizleague_web_maintain_leaguetable_LeagueTableService$;
/** @constructor */
function $h_Lquizleague_web_maintain_leaguetable_LeagueTableService$() {
  /*<skip>*/
}
export { $h_Lquizleague_web_maintain_leaguetable_LeagueTableService$ as $h_Lquizleague_web_maintain_leaguetable_LeagueTableService$ };
$h_Lquizleague_web_maintain_leaguetable_LeagueTableService$.prototype = $c_Lquizleague_web_maintain_leaguetable_LeagueTableService$.prototype;
$c_Lquizleague_web_maintain_leaguetable_LeagueTableService$.prototype.cache__Lquizleague_web_model_Model__Lquizleague_web_model_Model = (function(item) {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__add__Lquizleague_web_model_Model__Lquizleague_web_model_Model(this, item)
});
$c_Lquizleague_web_maintain_leaguetable_LeagueTableService$.prototype.save__Lquizleague_web_model_Model__Lrxscalajs_Observable = (function(item) {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_PutService__save__Lquizleague_web_model_Model__Lrxscalajs_Observable(this, item)
});
$c_Lquizleague_web_maintain_leaguetable_LeagueTableService$.prototype.instance__Lquizleague_web_model_Model = (function() {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_PutService__instance__Lquizleague_web_model_Model(this)
});
$c_Lquizleague_web_maintain_leaguetable_LeagueTableService$.prototype.deCache__Lquizleague_domain_Entity__scm_Map = (function(item) {
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_PutService__deCache__Lquizleague_domain_Entity__scm_Map(this, item)
});
$c_Lquizleague_web_maintain_leaguetable_LeagueTableService$.prototype.dec__sjs_js_Any__s_util_Either = (function(json) {
  var dec = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_util_json_codecs_DomainCodecs$().Lquizleague_util_json_codecs_DomainCodecs$__f_leagueTableDecoder;
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_GetService__decodeJson__sjs_js_Any__Lio_circe_Decoder__s_util_Either(this, json, dec)
});
$c_Lquizleague_web_maintain_leaguetable_LeagueTableService$.prototype.flush__V = (function() {
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(this.Lquizleague_web_maintain_leaguetable_LeagueTableService$__f_items).clear__V()
});
$c_Lquizleague_web_maintain_leaguetable_LeagueTableService$.prototype.filterList__Lquizleague_domain_Entity__Z = (function(u) {
  return true
});
$c_Lquizleague_web_maintain_leaguetable_LeagueTableService$.prototype.typeName__T = (function() {
  return this.Lquizleague_web_maintain_leaguetable_LeagueTableService$__f_typeName
});
$c_Lquizleague_web_maintain_leaguetable_LeagueTableService$.prototype.uriRoot__T = (function() {
  return ((!this.Lquizleague_web_maintain_leaguetable_LeagueTableService$__f_bitmap$0) ? $p_Lquizleague_web_maintain_leaguetable_LeagueTableService$__uriRoot$lzycompute__T(this) : this.Lquizleague_web_maintain_leaguetable_LeagueTableService$__f_uriRoot)
});
$c_Lquizleague_web_maintain_leaguetable_LeagueTableService$.prototype.db__Lfirebase_firestore_Firestore = (function() {
  return this.Lquizleague_web_maintain_leaguetable_LeagueTableService$__f_db
});
$c_Lquizleague_web_maintain_leaguetable_LeagueTableService$.prototype.items__scm_Map = (function() {
  return this.Lquizleague_web_maintain_leaguetable_LeagueTableService$__f_items
});
$c_Lquizleague_web_maintain_leaguetable_LeagueTableService$.prototype.quizleague$web$service$GetService$$observables__scm_Map = (function() {
  return this.Lquizleague_web_maintain_leaguetable_LeagueTableService$__f_quizleague$web$service$GetService$$observables
});
$c_Lquizleague_web_maintain_leaguetable_LeagueTableService$.prototype.quizleague$web$service$GetService$$refObsCache__scm_Map = (function() {
  return this.Lquizleague_web_maintain_leaguetable_LeagueTableService$__f_quizleague$web$service$GetService$$refObsCache
});
$c_Lquizleague_web_maintain_leaguetable_LeagueTableService$.prototype.quizleague$web$service$GetService$$listObservables__scm_Map = (function() {
  return this.Lquizleague_web_maintain_leaguetable_LeagueTableService$__f_quizleague$web$service$GetService$$listObservables
});
$c_Lquizleague_web_maintain_leaguetable_LeagueTableService$.prototype.quizleague$web$service$GetService$$listObservables_$eq__scm_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_leaguetable_LeagueTableService$__f_quizleague$web$service$GetService$$listObservables = x$1
});
$c_Lquizleague_web_maintain_leaguetable_LeagueTableService$.prototype.quizleague$web$service$GetService$_setter_$db_$eq__Lfirebase_firestore_Firestore__V = (function(x$1) {
  this.Lquizleague_web_maintain_leaguetable_LeagueTableService$__f_db = x$1
});
$c_Lquizleague_web_maintain_leaguetable_LeagueTableService$.prototype.quizleague$web$service$GetService$_setter_$items_$eq__scm_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_leaguetable_LeagueTableService$__f_items = x$1
});
$c_Lquizleague_web_maintain_leaguetable_LeagueTableService$.prototype.quizleague$web$service$GetService$_setter_$quizleague$web$service$GetService$$observables_$eq__scm_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_leaguetable_LeagueTableService$__f_quizleague$web$service$GetService$$observables = x$1
});
$c_Lquizleague_web_maintain_leaguetable_LeagueTableService$.prototype.quizleague$web$service$GetService$_setter_$quizleague$web$service$GetService$$refObsCache_$eq__scm_Map__V = (function(x$1) {
  this.Lquizleague_web_maintain_leaguetable_LeagueTableService$__f_quizleague$web$service$GetService$$refObsCache = x$1
});
$c_Lquizleague_web_maintain_leaguetable_LeagueTableService$.prototype.recalculateTable__Lquizleague_web_model_LeagueTable__Lrxscalajs_subscription_Subscription = (function(table) {
  $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sci_List$();
  var array = ["entity", "recalculate-table"];
  var i = (((-1) + $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$uI(array.length)) | 0);
  var result = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sci_Nil$();
  while ((i >= 0)) {
    var this$4 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(result);
    var index = i;
    var x = array[index];
    result = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sci_$colon$colon(x, this$4);
    i = (((-1) + i) | 0)
  };
  var pathParts = result;
  var $$x1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_s_Option$();
  var this$5 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_domain_Key$();
  var key = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$as_T(table.key.key);
  var i$1 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($$x1).apply__O__s_Option(this$5.parse__T__Lquizleague_domain_Key(key));
  var decoder = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_util_json_codecs_DomainCodecs$().Lquizleague_util_json_codecs_DomainCodecs$__f_leagueTableDecoder;
  var encoder = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_util_json_codecs_DomainCodecs$().Lquizleague_util_json_codecs_DomainCodecs$__f_keyEncoder;
  var qual$1 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_PostService__command__sci_List__s_Option__Lio_circe_Decoder__Lio_circe_Encoder__Lrxscalajs_Observable(this, pathParts, i$1, decoder, encoder);
  var x$1$1 = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$c_sjsr_AnonFunction1(((x$2) => {
    $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$as_Lquizleague_domain_LeagueTable(x$2)
  }));
  var x$2$2 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(qual$1).subscribe$default$2__F1();
  var x$3 = $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(qual$1).subscribe$default$3__F0();
  return $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n(qual$1).subscribe__F1__F1__F0__Lrxscalajs_subscription_Subscription(x$1$1, x$2$2, x$3)
});
$c_Lquizleague_web_maintain_leaguetable_LeagueTableService$.prototype.mapOutSparse__Lquizleague_domain_Entity__Lquizleague_web_model_Model = (function(domain) {
  var dom = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$as_Lquizleague_domain_LeagueTable(domain);
  return $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$f_Lquizleague_web_service_leaguetable_LeagueTableGetService__mapOutSparse__Lquizleague_domain_LeagueTable__Lquizleague_web_model_LeagueTable(this, dom)
});
$c_Lquizleague_web_maintain_leaguetable_LeagueTableService$.prototype.enc__Lquizleague_domain_Entity__Lio_circe_Json = (function(item) {
  var item$1 = $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$as_Lquizleague_domain_LeagueTable(item);
  return $f_Lquizleague_web_service_leaguetable_LeagueTablePutService__enc__Lquizleague_domain_LeagueTable__Lio_circe_Json(this, item$1)
});
$c_Lquizleague_web_maintain_leaguetable_LeagueTableService$.prototype.make__Lquizleague_domain_Entity = (function() {
  return new $j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$c_Lquizleague_domain_LeagueTable($j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$n($j_internal$002d1f3d120137b98553c4403fc934ecd71776893d36.$m_Lquizleague_web_util_UUID$().randomUUID__Lquizleague_web_util_UUID()).toString__T(), "", $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$m_sci_Nil$(), false)
});
$c_Lquizleague_web_maintain_leaguetable_LeagueTableService$.prototype.mapIn__Lquizleague_web_model_Model__Lquizleague_domain_Entity = (function(model) {
  return $f_Lquizleague_web_service_leaguetable_LeagueTablePutService__mapIn__Lquizleague_web_model_LeagueTable__Lquizleague_domain_LeagueTable(this, model)
});
$c_Lquizleague_web_maintain_leaguetable_LeagueTableService$.prototype.teamService__Lquizleague_web_service_team_TeamGetService = (function() {
  return this.Lquizleague_web_maintain_leaguetable_LeagueTableService$__f_teamService
});
var $d_Lquizleague_web_maintain_leaguetable_LeagueTableService$ = new $j_internal$002dc5448624127961ad25196dc750e04b9e3ec61c81.$TypeData().initClass({
  Lquizleague_web_maintain_leaguetable_LeagueTableService$: 0
}, false, "quizleague.web.maintain.leaguetable.LeagueTableService$", {
  Lquizleague_web_maintain_leaguetable_LeagueTableService$: 1,
  O: 1,
  Lquizleague_web_service_leaguetable_LeagueTableGetService: 1,
  Lquizleague_web_service_GetService: 1,
  Lquizleague_web_names_LeagueTableNames: 1,
  Lquizleague_web_names_ComponentNames: 1,
  Lquizleague_web_service_leaguetable_LeagueTablePutService: 1,
  Lquizleague_web_service_PutService: 1,
  Lquizleague_web_service_PostService: 1
});
export { $d_Lquizleague_web_maintain_leaguetable_LeagueTableService$ as $d_Lquizleague_web_maintain_leaguetable_LeagueTableService$ };
$c_Lquizleague_web_maintain_leaguetable_LeagueTableService$.prototype.$classData = $d_Lquizleague_web_maintain_leaguetable_LeagueTableService$;
var $n_Lquizleague_web_maintain_leaguetable_LeagueTableService$;
function $m_Lquizleague_web_maintain_leaguetable_LeagueTableService$() {
  if ((!$n_Lquizleague_web_maintain_leaguetable_LeagueTableService$)) {
    $n_Lquizleague_web_maintain_leaguetable_LeagueTableService$ = new $c_Lquizleague_web_maintain_leaguetable_LeagueTableService$()
  };
  return $n_Lquizleague_web_maintain_leaguetable_LeagueTableService$
}
export { $m_Lquizleague_web_maintain_leaguetable_LeagueTableService$ as $m_Lquizleague_web_maintain_leaguetable_LeagueTableService$ };
//# sourceMappingURL=internal-c16b25b15348fbd4d2502d07fc6c3c396c33ca0c.js.map
