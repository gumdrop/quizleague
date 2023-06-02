package quizleague.web.service.chat

import io.circe.parser.*
import io.circe.syntax.*
import quizleague.domain.{Ref, ChatMessage as Dom, Key as DomKey}
import quizleague.util.collection.*
import quizleague.web.model.*
import quizleague.web.names.*
import quizleague.web.service.*
import quizleague.web.service.text.*
import quizleague.web.service.user.*
import quizleague.web.service.venue.*
import quizleague.web.site.chat.ChatService
import quizleague.web.store.Storage
import quizleague.web.store.Storage.*
import quizleague.web.util.Logging
import quizleague.util.*
import rxscalajs.Observable

import java.time.{LocalDateTime, ZonedDateTime}
import java.util.regex.Pattern
import scala.scalajs.js
import scala.scalajs.js.JSConverters.*

trait ChatMessageGetService extends GetService[ChatMessage] with ChatMessageNames {

  override type U = Dom

  val userService: SiteUserGetService

  override protected def mapOutSparse(message: Dom) = new ChatMessage(
    message.id,
    userService.refObs(message.user.id), message.message, message.date.withZoneSameInstant(london).toLocalDateTime.toString)

  protected def dec(json:js.Any) = decodeJson[U](json)

}

trait ChatMessagePutService extends PutService[ChatMessage] with ChatMessageGetService {

  val chatService:ChatGetService

  override protected def mapIn(message: ChatMessage) = Dom(
    message.id,
    userService.ref(message.user), message.message, ZonedDateTime.parse(message.date)
    )

  override protected def make() = Dom(newId, null,"", londonZonedTime)

  override def enc(item: Dom) = item.asJson

}