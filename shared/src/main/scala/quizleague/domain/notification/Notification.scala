package quizleague.domain.notification

import quizleague.domain._
import java.time.LocalDateTime


object NotificationTypeNames{
  
  val result = "result"
  val maintain = "maintain"
  
}


case class Notification(
  id:String,
  typeName:String,
  timestamp:LocalDateTime,
  payload:Payload,
  retired:Boolean = false
  
) extends Entity

sealed trait Payload

case class ResultPayload(fixtureKey:String) extends Payload
case class MaintainMessagePayload(message:String) extends Payload