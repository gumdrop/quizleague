package quizleague.web.core

import scalajs.js
import js.Dynamic.literal
import js.JSConverters._
import scala.scalajs.js.|
import scala.scalajs.js.Promise
import scala.scalajs.js.Thenable.Implicits._
import scala.concurrent.ExecutionContext.Implicits.global


object RouteConfig{
  def apply(
   path: String,
   component: js.Any = null,
   name: String = null,
   components: Map[String,Component|Function0[Promise[Component]]]= null,
   redirect: js.Any= null,
   props: js.Any = null,
   alias: js.Any = null,
   children: js.Array[js.Any] = js.Array(),
   beforeEnter: js.Function3[js.Any, js.Any, js.Function0[Unit]|js.Function1[Boolean|String|Exception, Unit], Unit] = null
  ) = literal(
      path = path,
      component = component,
      name = name,
      components = if(components == null) null else components.map{case(k,v) =>
        (v:Any) match {
          case a:Component => (k,a())
          case a:(Function0[Promise[Component]]) => (k,{() => a().map(_()).toJSPromise}:js.Function)
        }
      }.toJSDictionary,
      redirect = redirect,
      props = props,
      //alias = alias,
      children = children,
      beforeEnter = beforeEnter
  )
}