package quizleague.web.site.chat

import java.time.{LocalDateTime, ZonedDateTime}
import com.felstar.scalajs.vue.VueRxComponent
import quizleague.util.collection.*
import quizleague.web.core.*
import quizleague.web.model.*
import quizleague.web.site.login.{LoggedInUser, LoginService}
import rxscalajs.Observable
import quizleague.web.util.rx.*
import quizleague.web.site.user.*

import scala.scalajs.js
import scala.scalajs.js.UndefOr
import org.scalajs.dom.window
import quizleague.web.site.chat.ChatComponent.subscription

import scala.concurrent.duration.*

@js.native
trait ChatComponent extends VueRxComponent {
  val chat:Chat
  val user:SiteUser
  var text:String
  val name:String
  val filter:String
  val lockedFilter:String
}

object ChatComponent extends Component{
  type facade = ChatComponent
  val name = "ql-chat"
  val template = """
  <v-row>
    <v-col>
      <v-text-field v-if="!lockedFilter"
              label="Filter"
              v-model="filter"
              :clearable="true">
      </v-text-field>
      <div v-if="lockedFilter">{{lockedFilter}}</div>
      <div v-if="user" >
        <v-textarea label="Your message here"
          :clearable="false"
          solo
          outline
          auto-grow
          v-model="text"
          hide-details
          rows="1"
          >
          <template v-slot:append v-if="text" >
            <v-tooltip top >
              <template v-slot:activator="{ on }">
                <v-btn v-on="on" small icon @click="addMessage(text)" style="top:-2px;">
                <v-icon color="primary">mdi-send</v-icon>
                </v-btn>
              </template>
              <span>Send</span>
            </v-tooltip>
          </template>
        </v-textarea>
       </div>
       <ql-chat-messages v-if="chat"  :chatKey="chat.key" :filter="lockedFilter || filter"></ql-chat-messages>
    </v-col>
  </v-row>"""

  components(ChatMessages)

  prop("name")
  prop("lockedFilter")
  data("text",null)
  data("filter","")
  data("user", null)
  subscription("chat")(c => ChatService.getByName(c.name))
  subscription("user")(c => LoginService.userProfile.filter(_ != null).map(_.siteUser))
  method("addMessage")({addMessage _}:js.ThisFunction)


  def addMessage(c:facade, text:String) = {
    val factoredtext = if(text.contains(c.lockedFilter)) text else s"${c.lockedFilter} $text"
    ChatMessageService.addMessage(c.chat.key, factoredtext, c.user)
    c.text = null
  }
}

@js.native
trait ChatMessages extends VueRxComponent {
  val chatKey:Key
  val user:UndefOr[LoggedInUser]
  val filter:String
}

object ChatMessages extends Component{

  type facade = ChatMessages

  val name = "ql-chat-messages"
  val template = """
    <v-timeline v-if="messages">
      <v-timeline-item v-bind="align(message)"
        v-for="message in messages"
        :key="message.id"
        small
         transition="fade-transition"
        >
        <template v-slot:icon>
          <ql-user-avatar :user="message.user"></ql-user-avatar>
        </template>
        <template v-slot:opposite>
          <div>
            <span>{{async(message.user).handle}}</span>
            <div class="caption">{{message.date | datetime('d MMM yyy - kk:mm')}}</div>
          </div>
        </template>
        <v-card class="elevation-2">
          <v-card-text class="pb-1"><ql-markdown :text="message.message" ></ql-markdown></v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  """

  prop("chatKey")
  prop("filter")

  subscription("messages","filter")(c => ChatMessageService.getMatchingMessages(c.filter, c.chatKey))
  subscription("user")(c => LoginService.userProfile)

  method("isLeft")({(c:facade,m:ChatMessage) => c.user.fold(true)(_.siteUser.id != m.user.id)}:js.ThisFunction)
  method("date"){(d:String) => LocalDateTime.parse(d).toLocalDate.toString}
  method("time"){(d:String) => LocalDateTime.parse(d).toLocalTime.toString}
  method("align")({(c:facade,m:ChatMessage) => c.user.filter(_!=null).fold(js.Object())(u => if(u.siteUser.id != m.user.id)$(left=true)else $(right=true))}:js.ThisFunction)

}

@js.native
trait AvatarComponent extends VueRxComponent {
  val user:RefObservable[SiteUser]
}

object AvatarComponent extends Component{
  type facade = AvatarComponent

  val name = "ql-user-avatar"
  val template = """
  <fragment>
    <div v-if="loggedIn" style="display:none">{{heartbeat}}</div>
    <v-badge bordered v-if="siteUser"
       top
       :color="badgeColour(siteUser)"
       :value="loggedIn"
       dot
       offset-x="10"
       offset-y="10">
       <v-avatar size="36">
         <img :src="siteUser.avatar">
       </v-avatar>
    </v-badge>
  </fragment>
"""
  prop("user")
  data("heartbeat", 1)
  subscription("siteUser")(c => c.user.obs)
  subscription("heartbeat")(_ => SiteUserService.heartbeat)
  subscription("loggedIn")(c => LoginService.userProfile.map(_ != null))
  method("badgeColour")((user:SiteUser) => if(user.isActive) "green accent-4" else "black")

}

object LoginButton extends Component{

  val name = "ql-login-button"
  val template="""
  <div v-if="!user">
    <v-tooltip left>
     <template #activator="{ on }">
      <v-btn color="primary" fab small :to="'/login?forward=' + window.location.pathname" v-on="on">

        <v-icon>mdi-login</v-icon>
       </v-btn>
     </template>
     <span>{{label}}</span>
    </v-tooltip>
  </div>
  """
  prop("label")
  data("window", window)
  subscription("user")(c => LoginService.userProfile)

}
