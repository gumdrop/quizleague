package quizleague.domain.command

import quizleague.domain.Key
import io.circe.*

import java.time.LocalDateTime

case class ChatNotificationCommand(handles:List[String], messageKey:Key, hostUrl:String) derives Codec.AsObject