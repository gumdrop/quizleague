package quizleague.domain

import io.circe.Codec

import java.net.URL
import java.time.LocalDateTime
import quizleague.util.json.codecs.ScalaTimeCodecs._

case class Chat(
                 id: String,
                 name:Option[String] = None,
                 retired: Boolean = false
               ) extends Entity derives Codec.AsObject

case class ChatMessage(
                        id:String,
                        user: Ref[SiteUser],
                        message: String,
                        date: LocalDateTime,
                        index: List[String] = List(),
                        retired: Boolean = false
                      ) extends Entity derives Codec.AsObject


