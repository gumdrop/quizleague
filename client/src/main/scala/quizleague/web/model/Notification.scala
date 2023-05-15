package quizleague.web.model

import quizleague.web.util.rx.RefObservable

import scala.scalajs.js.annotation.JSExportAll

class Notification(
  val id:String,
  val typeName:String,
  val timestamp:String,
  val payload:Payload
  
) extends Model


sealed trait Payload

case class ResultPayload(fixtureKey:Key) extends Payload
case class MaintainMessagePayload(message:String) extends Payload
@JSExportAll
case class ChatNotificationPayload(siteUserKey:Key, chatMessage:RefObservable[ChatMessage]) extends Payload