package quizleague.domain

import io.circe
import io.circe.Codec

case class Venue(
    id:String,
    name:String,
    address:String,
    phone:Option[String],
    email:Option[String],
    website:Option[String],
    imageURL:Option[String],
    retired:Boolean = false
) extends Entity derives Codec.AsObject