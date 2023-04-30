package quizleague.domain

import io.circe.Codec

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
   retired: Boolean = false

 ) extends Entity derives Codec.AsObject