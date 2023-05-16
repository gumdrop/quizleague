package quizleague.web.site.chat

import quizleague.util.collection.*
import quizleague.util.UUID.uuid
import quizleague.web.core.{@@, Module}
import quizleague.web.model.*
import quizleague.web.service.chat.{ChatGetService, ChatMessageGetService, ChatMessagePutService, ChatPutService}
import quizleague.web.site.user.SiteUserService
import quizleague.web.store.Storage.*
import rxscalajs.Observable

import scala.scalajs.js
import scala.scalajs.js.JSConverters.*

object ChatModule extends Module {

  override val components = @@(ChatComponent, LoginButton, AvatarComponent)
}

object ChatMessageService extends ChatMessageGetService with ChatMessagePutService {

  val userService = SiteUserService
  val chatService = ChatService

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


