package quizleague.web.service.chat

import java.time.LocalDateTime
import quizleague.web.service.EntityService
import quizleague.web.model.*
import quizleague.domain.{ChatMessage as Dom, Key as DomKey}
import quizleague.domain.Ref
import quizleague.web.names.ComponentNames
import quizleague.web.store.Storage.*
import quizleague.util.collection.*

import scala.scalajs.js.JSConverters.*
import quizleague.web.service.*
import quizleague.web.service.venue.*
import quizleague.web.service.text.*
import quizleague.web.service.user.*
import quizleague.web.names.*
import io.circe.parser.*
import io.circe.syntax.*
import quizleague.web.site.chat.ChatService
import quizleague.web.store.Storage
import quizleague.web.util.Logging
import rxscalajs.Observable

import java.util.regex.Pattern
import scalajs.js

trait ChatMessageGetService extends GetService[ChatMessage] with ChatMessageNames {

  override type U = Dom

  val userService: SiteUserGetService

  override protected def mapOutSparse(message: Dom) = new ChatMessage(
    message.id,
    userService.refObs(message.user.id), message.message, message.date.toString)

  protected def dec(json:js.Any) = decodeJson[U](json)

}

trait ChatMessagePutService extends PutService[ChatMessage] with ChatMessageGetService {

  val userPattern = Pattern.compile("@[a-zA-Z0-9]*")
  val hashTagPattern = Pattern.compile("#[a-zA-Z]*")

  val chatService:ChatGetService

  override protected def mapIn(message: ChatMessage) = Dom(
    message.id,
    userService.ref(message.user), message.message, LocalDateTime.parse(message.date)
    )

  override protected def make() = Dom(newId, null,"", LocalDateTime.now())

  override def enc(item: Dom) = item.asJson

  private def matches(pattern: Pattern, text:String):List[String] = {
    if(text == null) return Nil
    val matcher = pattern.matcher(text)
    var result = Set[String]()
    while (matcher.find) {
      result = result + matcher.group()
    }
    result.toList
  }

  protected def userTags(text:String) = matches(userPattern, text)
  protected def hashTags(text:String) = matches(hashTagPattern, text)

  protected def parseTags(text:String) = {
    userTags(text) ++ hashTags(text)
  }

  def saveMessage(text:String, siteUser:SiteUser, chatKey:Key):Unit = {
      val msg = make(DomKey(chatKey.key))
      val key = msg.key.get
      val index = parseTags(text)
      save(msg.copy(user=userService.ref(siteUser.id), message=text, index = s"@${siteUser.handle}" :: index ).withKey(key))
      //sendNotifications
  }

  private def sendNotifications(handles: List[String], key:DomKey) = ???

}