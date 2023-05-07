package quizleague.web.site

import scalajs.js
import js.Dynamic.literal
import js.JSConverters.*
import com.felstar.scalajs.vue.*
import fragment.Fragment

import java.time.format.{DateTimeFormatter, DateTimeFormatterBuilder}
import quill.VueQuillEditor
import quizleague.web.util.rx.*
import quizleague.web.core.*
import rxscalajs.Observable
import showdown.VueShowdown

import scala.scalajs.js.annotation.{JSExportTopLevel, JSImport}



object SiteApp{

  @JSImport("/vuetify-bootstrap.js")
  @js.native
  def startVue(router:js.Any, rootElement:String):Unit = js.native

  def main():Unit = {
    Vue.use(VueRouter)
    Vue.use(VueShowdown, showdown.defaultOptions)
    Vue.component("fragment",Fragment)
    Vue.filter("date", (date:String, format:String) => DateTimeFormatter.ofPattern(format).format(DateTimeFormatter.ISO_LOCAL_DATE.parse(date)))
    Vue.filter("time", (time:String, format:String) => DateTimeFormatter.ofPattern(format).format(DateTimeFormatter.ISO_LOCAL_TIME.parse(time)))
    Vue.filter("datetime", (datetime:String, format:String) => DateTimeFormatter.ofPattern(format).format(DateTimeFormatter.ISO_LOCAL_DATE_TIME.parse(datetime)))
    Vue.filter("combine", (obs:js.Array[RefObservable[Any]]) => Observable.combineLatest(obs.map(_.obs).toSeq).map(_.toJSArray))
    Vue.filter("wrap", (obj:js.Any) => Observable.just(obj))

    startVue(Router(SiteModule(), scrollBehavior = () => $(x=0,y=0)), "#app")
  }
} 

  
