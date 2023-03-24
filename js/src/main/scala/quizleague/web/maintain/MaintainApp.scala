package quizleague.web.maintain
import com.felstar.scalajs.vue._
import quill.VueQuillEditor
import quizleague.web.store.Firestore
import quizleague.web.util.rx._
import rxscalajs.Observable
import showdown._

import java.time.format.DateTimeFormatter
import scala.scalajs.js
import scala.scalajs.js.Dynamic.literal
import scala.scalajs.js.JSConverters._
import scala.scalajs.js.annotation.{JSExport, JSExportTopLevel}
import scala.concurrent.ExecutionContext.Implicits.global


object MaintainApp{

  @JSExportTopLevel("maintain","dummy-module")
  def main():Unit = {

    val resultPromise: js.Promise[Vue] = js.dynamicImport {
      App()
    }
    for (result <- resultPromise.toFuture) {
      //noop
    }
} }

object App {
  def apply() = {
    //set up firebase auth context
    Firestore.setAuthContext()

    Vue.use(VueQuillEditor)
    Vue.use(VueShowdown, showdown.defaultOptions)
    Vue.filter("date", (date: String, format: String) => DateTimeFormatter.ofPattern(format).format(DateTimeFormatter.ISO_LOCAL_DATE.parse(date)))
    Vue.filter("combine", (obs: js.Array[RefObservable[Any]]) => Observable.combineLatest(obs.map(_.obs)).map(_.toJSArray))
    Vue.filter("wrap", (obj: js.Any) => Observable.just(obj))

    new Vue(
      literal(el = "#maintain-app",
        router = Router(MaintainAppModule()),
        vuetify = new Vuetify()
      )
    )

  }
}


  
