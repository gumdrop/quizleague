package quizleague.web.maintain
import com.felstar.scalajs.vue.*
import quill.VueQuillEditor
import quizleague.web.site.SiteApp.startVue
import quizleague.web.store.Storage
import quizleague.web.util.rx.*
import rxscalajs.Observable
import showdown.*

import java.time.format.DateTimeFormatter
import scala.scalajs.js
import scala.scalajs.js.Dynamic.literal
import scala.scalajs.js.JSConverters.*
import scala.scalajs.js.annotation.{JSExport, JSExportTopLevel, JSImport}
import scala.concurrent.ExecutionContext.Implicits.global


object MaintainApp{

 // @JSExportTopLevel("maintain", "maintain")
  def main():Unit = {
  App()
} }

object App {
  @JSImport("/vuetify-bootstrap.js")
  @js.native
  def startVue(router: js.Any, rootElement: String): Unit = js.native

  def apply() = {

    Vue.use(VueRouter)
    Vue.use(VueQuillEditor)
    Vue.use(VueShowdown, showdown.defaultOptions)
    Vue.filter("date", (date: String, format: String) => DateTimeFormatter.ofPattern(format).format(DateTimeFormatter.ISO_LOCAL_DATE.parse(date)))
    Vue.filter("combine", (obs: js.Array[RefObservable[Any]]) => Observable.combineLatest(obs.toSeq.map(_.obs)).map(_.toJSArray))
    Vue.filter("wrap", (obj: js.Any) => Observable.just(obj))

    startVue(Router(MaintainAppModule()),"#maintain-app")

    Storage.setAuthContext()
  }
}


  
