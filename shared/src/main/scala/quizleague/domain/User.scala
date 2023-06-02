package quizleague.domain

import io.circe.Codec

import java.time.ZonedDateTime

case class User(
    id:String,
    name:String,
    email:String,
    retired:Boolean = false
) extends Entity derives Codec.AsObject

case class SiteUser(
   id: String,
   handle: String,
   avatar:String,
   user: Option[Ref[User]],
   uid:Option[String],
   heartbeat:Option[ZonedDateTime],
   retired: Boolean = false

 ) extends Entity derives Codec.AsObject {
  def isActive = heartbeat.fold(false)(hb => hb.isAfter(ZonedDateTime.now().minusMinutes(1))) 
}