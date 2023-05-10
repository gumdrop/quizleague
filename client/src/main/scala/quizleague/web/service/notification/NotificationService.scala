package quizleague.web.service.notification

import scalajs.js
import js.JSConverters._
import quizleague.web.service._
import quizleague.web.model._
import quizleague.domain.notification.{ Notification => Dom, ResultPayload => DomRP, MaintainMessagePayload => DomMMP, Payload => DomP }
import quizleague.web.names.NotificationNames
import io.circe._,io.circe.parser._,io.circe.syntax._,io.circe.scalajs.convertJsToJson
import java.time.LocalDateTime
import quizleague.web.store.Storage.*


trait NotificationGetService extends GetService[Notification] with NotificationNames {
  override type U = Dom
  override protected def mapOutSparse(dom: Dom): Notification = new Notification(
      dom.id, 
      dom.typeName, 
      dom.timestamp.toString, 
      mapPayload(dom.payload))
  
  private def mapPayload(payload:DomP) = {
    
    payload match {
      case p: DomRP => new ResultPayload(Key(p.fixtureKey))
      case p: DomMMP => new MaintainMessagePayload(p.message)
      case null => throw new Exception("null payload")
    }
  }
  
  protected def dec(json:js.Any) = decodeJson[U](json)
  
  def messages(typeName:String, threshold:LocalDateTime) = {
    val q = query(collection(uriRoot), where("timestamp", ">=", threshold.toString.asInstanceOf[js.Any]))
    runQuery(q).map(_.filter(_.typeName == typeName)).filter(!_.isEmpty)
  }
}