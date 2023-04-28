package quizleague.domain

import io.circe.Codec

import java.net.URL
import java.time.LocalDateTime

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
                        retired: Boolean = false
                      ) extends Entity derives Codec.AsObject


