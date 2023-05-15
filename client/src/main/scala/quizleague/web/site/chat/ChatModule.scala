package quizleague.web.site.chat

import quizleague.util.collection.*
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

  def getMatchingMessages(filter: String, chatKey: Key, fetch:Int = 50): Observable[js.Array[ChatMessage]] = {

    val tags = parseTags(filter).toJSArray

    val messagesKey = chatKey / typeName
    val messages = query(collection(messagesKey.key), orderBy("date", "desc"), limit(fetch))
    val chats = if(tags.isEmpty) messages else query(messages, where("index", "array-contains-any", tags))
    runQuery(chats)
  }

  def addMessage(chatKey:Key, text: String, user:SiteUser, chat:Option[Chat]):Unit = {

    def saveMessage(chatKey: Key): Unit = {
      ChatMessageService.saveMessage(text, user, chatKey)
    }

    if (chat.filter(_ != null).isEmpty) {
      ChatService.add(chatKey, "").first.subscribe(saveMessage _)
    }
    else {
      saveMessage(chatKey)
    }
  }
}


object ChatService extends ChatGetService with ChatPutService {

  val chatMessageService = ChatMessageService

  def add(key:Key, name:String):Observable[Key] = {
    val chat = instance(key,name)

    save(chat).map(_ => chat.key)

  }
}


