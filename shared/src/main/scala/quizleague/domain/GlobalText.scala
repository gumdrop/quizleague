package quizleague.domain

import io.circe.Codec

case class GlobalText(id:String, name:String, text:Map[String,Ref[Text]], retired:Boolean=false) extends Entity derives Codec.AsObject