package quizleague.web.site.chat

import quizleague.domain.command.ChatNotificationCommand
import quizleague.domain.Key as DomKey
import quizleague.util.collection.*
import quizleague.util.UUID.uuid
import quizleague.web.core.{@@, Module}
import quizleague.web.model.*
import quizleague.web.service.PostService
import quizleague.web.service.chat.{ChatGetService, ChatMessageGetService, ChatMessagePutService, ChatPutService}
import quizleague.web.site.user.SiteUserService
import quizleague.web.store.Storage.*
import rxscalajs.Observable

import scala.scalajs.js
import scala.scalajs.js.JSConverters.*
import org.scalajs.dom.window

import java.util.regex.Pattern

object ChatModule extends Module {

  override val components = @@(ChatComponent, LoginButton, AvatarComponent)
}

object ChatMessageService extends ChatMessageGetService with ChatMessagePutService with PostService {

  val userService = SiteUserService
  val chatService = ChatService

  private val userPattern = Pattern.compile("@[a-zA-Z0-9]*")
  private val hashTagPattern = Pattern.compile("#[a-zA-Z]*")

  def getMatchingMessages(filter: String, chatKey: Key, fetch: Int = 50): Observable[js.Array[ChatMessage]] = {

    val tags = parseTags(filter).toJSArray

    val messagesKey = chatKey / typeName
    val messages = query(collection(messagesKey.key), orderBy("date", "desc"), limit(fetch))
    val chats = if (tags.isEmpty) messages else query(messages, where("index", "array-contains-any", tags))
    runQuery(chats)
  }

  def addMessage(chatKey: Key, text: String, user: SiteUser): Unit = {
    saveMessage(text, user, chatKey)
  }

  private def saveMessage(text: String, siteUser: SiteUser, chatKey: Key): Unit = {
    val msg = make(DomKey(chatKey.key))
    val key = msg.key.get
    val index = parseTags(text)
    save(msg.copy(user = userService.ref(siteUser.id), message = text, index = s"@${siteUser.handle}" :: index).withKey(key))
    sendNotifications(userTags(text).map(_.replace("@","")), key)
  }

  private def sendNotifications(handles: List[String], key: DomKey) = {
    val com = ChatNotificationCommand(handles, key, s"${window.location.protocol}//${window.location.host}")
    command[Unit,ChatNotificationCommand](List("site","chat","notifications"), Option(com)).subscribe((_:Unit)=>())
  }

  private def matches(pattern: Pattern, text: String): List[String] = {
    if (text == null) return Nil
    val matcher = pattern.matcher(text)
    var result = Set[String]()
    while (matcher.find) {
      result = result + matcher.group()
    }
    result.toList
  }

  protected def userTags(text: String) = matches(userPattern, text)

  protected def hashTags(text: String) = matches(hashTagPattern, text)

  protected def parseTags(text: String) = {
    userTags(text) ++ hashTags(text)
  }
}


object ChatService extends ChatGetService with ChatPutService {

  val chatMessageService = ChatMessageService

  private def add(name:String):Observable[Chat] = {
    val chatKey = key(uuid)

    val chat = instance(chatKey,name)

    save(chat).map(_ => chat)

  }

  def getByName(name:String):Observable[Chat] = {
    val retval = for {
      chats <- runQuery(query(collection(typeName), where("name", "==", name))).first
    } yield {
      if (chats.filter(_ != null).isEmpty) {
        add(name)
      } else {
        Observable.of(chats.head)
      }
    }
    retval.flatten
  }
}


