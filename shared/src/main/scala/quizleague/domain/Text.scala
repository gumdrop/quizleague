package quizleague.domain

import io.circe.Codec

case class Text(
    id:String,
    text:String,
    mimeType:String,
    retired:Boolean = false
) extends Entity derives Codec.AsObject