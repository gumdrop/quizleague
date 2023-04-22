package quizleague.web.maintain.component

import com.felstar.scalajs.vue.VueRxComponent

import scalajs.js
import js.JSConverters._
import quizleague.web.service.PutService
import quizleague.web.core.IdComponent
import quizleague.web.service.GetService
import quizleague.web.core.Component
import quizleague.web.model.{Key, Model}
import quizleague.web.names.ComponentNames
import rxscalajs.Observable
import quizleague.web.util.rx.RefObservable
import quizleague.web.util.Logging.log

import scala.scalajs.js.{ThisFunction, ThisFunction0}

@js.native
trait ItemComponent[T] extends VueRxComponent{
  val valid:Boolean
  val item:T
  val pkey:String
}

trait ItemComponentConfig[T <: Model] extends Component{
  type facade <: ItemComponent[T]
  
  val paramName = "id"

  val service:GetService[T] with PutService[T]
  def parentKey(c:facade):String
  
  def editText(c:facade, textId:String) = {
      c.$router.push(s"/maintain/text/$textId")
  }
  
  def obsFromParam[X <: Model](c:facade, param:String, service:GetService[X] with PutService[X] = service) = service.get(service.key(c.pkey,c.$route.params(param))).map(i => service.cache(i))
  def item(c:facade):Observable[T] = obsFromParam(c, paramName)

  def save(c:facade) = {
    val item = c.item
    item.key = service.key(parentKey(c),item.id)
    service.save(c.item)
    c.$router.back()
  }

  def cancel(c:facade) = {service.flush();c.$router.back()}
  
  subscription("item")(c => obsFromParam(c,paramName))

  method("save")({save _}:js.ThisFunction)
  method("cancel")({cancel _}:js.ThisFunction)
  method("editText")({editText _}:js.ThisFunction)

  data("valid",false)
  data("pkey")(parentKey _)
}

@js.native
trait ItemListComponent[T <: Model] extends VueRxComponent{
  val valid:Boolean
  val item:T
}


trait ItemListComponentConfig[T <: Model] extends Component{

  this:ComponentNames =>
    
  type facade <: ItemListComponent[T]
 
  def sort(items:js.Array[T]) = items.sortBy(_.id)
  
  val service:GetService[T] with PutService[T]
  
  subscription("items")(c => service.list().map(sort _))
  
  method("add")({(c:facade) => {
    val i = service.instance()
    c.$router.push(s"$typeName/${i.id}")}}:js.ThisFunction)
}

object ItemComponentConfig {
  import scala.language.implicitConversions
}