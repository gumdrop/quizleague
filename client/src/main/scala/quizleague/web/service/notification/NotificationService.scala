package quizleague.web.service.notification

import io.circe.*
import io.circe.parser.*
import io.circe.scalajs.convertJsToJson
import io.circe.syntax.*
import quizleague.domain.notification.{ChatNotificationPayload as DomCNP, MaintainMessagePayload as DomMMP, Notification as Dom, Payload as DomP, ResultPayload as DomRP}
import quizleague.web.model.*
import quizleague.web.names.NotificationNames
import quizleague.web.service.*
import quizleague.web.service.chat.ChatMessageGetService
import quizleague.web.store.Storage.*

import java.time.LocalDateTime
import scala.scalajs.js
import scala.scalajs.js.JSConverters.*


trait NotificationGetService extends GetService[Notification] with NotificationNames {
  override type U = Dom

  val chatMessageService:ChatMessageGetService

  override protected def mapOutSparse(dom: Dom): Notification = new Notification(
      dom.id, 
      dom.typeName, 
      dom.timestamp.toString, 
      mapPayload(dom.payload))
  
  private def mapPayload(payload:DomP) = {
    
    payload match {
      case p: DomRP => ResultPayload(Key(p.fixtureKey))
      case p: DomMMP => MaintainMessagePayload(p.message)
      case p: DomCNP => ChatNotificationPayload(Key(p.siteUserKey), chatMessageService.refObs(Key(p.chatMessageKey)))
      case null => throw new Exception("null payload")
    }
  }
  
  protected def dec(json:js.Any) = decodeJson[U](json)
  
  def messages(typeName:String, threshold:LocalDateTime) = {
    val q = query(collection(uriRoot), where("timestamp", ">=", threshold.toString.asInstanceOf[js.Any]))
    runQuery(q).map(_.filter(_.typeName == typeName)).filter(!_.isEmpty)
  }
}