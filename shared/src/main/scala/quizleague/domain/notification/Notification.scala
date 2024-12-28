package quizleague.domain.notification

import io.circe.Codec
import quizleague.domain.*

import java.time.{LocalDateTime, ZonedDateTime}
import quizleague.util.json.codecs.ScalaTimeCodecs.*


object NotificationTypeNames{
  
  val result = "result"
  val maintain = "maintain"
  val chat = "chat"
  
}


case class Notification(
     id:String,
     typeName:String,
     timestamp:LocalDateTime,
     payload:Payload,
     retired:Boolean = false
  
) extends Entity derives Codec.AsObject

sealed trait Payload derives Codec.AsObject

case class ResultPayload(fixtureKey:String) extends Payload derives Codec.AsObject
case class MaintainMessagePayload(message:String) extends Payload derives Codec.AsObject
case class ChatNotificationPayload(siteUserKey:Key, chatMessageKey: Key) extends Payload derives Codec.AsObject