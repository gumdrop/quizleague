package quizleague.web.site.chat

import java.time.{LocalDateTime, ZonedDateTime}
import com.felstar.scalajs.vue.VueRxComponent
import quizleague.util.collection.*
import quizleague.web.core.{DialogComponentConfig, *}
import quizleague.web.model.*
import quizleague.web.site.login.{LoggedInUser, LoginService}
import rxscalajs.Observable
import quizleague.web.util.rx.*
import quizleague.web.site.user.*

import scala.scalajs.js
import scala.scalajs.js.UndefOr
import org.scalajs.dom.window
import quizleague.web.site.chat.ChatComponent.subscription
import quizleague.web.site.chat.ChatContent.watch

import scala.concurrent.duration.*

@js.native
trait ChatComponent extends VueRxComponent {
  val chat:Chat
  val user:SiteUser
  var text:String
  val name:String
  val filter:String
  val lockedFilter:UndefOr[String]
  val outlined:UndefOr[Boolean]
  var popout:Boolean
}

object ChatComponent extends Component with DialogComponentConfig{
  type facade = ChatComponent with DialogComponent
  val name = "ql-chat"
  val template = """
  <fragment v-if="chat" >
    <fragment v-if="!popout">
      <chat-content
        v-bind:popout.sync="popout"
        v-bind:text.sync="text"
        v-bind:filter.sync="filter"
        :filter="filter" :text="text"
        :popout="false"
        :lockedFilter="lockedFilter"
        :displayName="displayName"
        :user="user"
        :chat="chat"
        :outlined="outline">
      </chat-content>
    </fragment>
    <v-dialog v-model="popout" max-width="60%" v-bind="dialogSize">
      <chat-content
        v-if="popout"
        v-bind:popout.sync="popout"
        v-bind:text.sync="text"
        v-bind:filter.sync="filter"
        :filter="filter"
        :text="text"
        :popout="popout"
        :lockedFilter="lockedFilter"
        :displayName="displayName"
        :user="user"
        :chat="chat"
        :outlined="outline">
      </chat-content>
    </v-dialog>
  </fragment>"""

  components(ChatMessages, ChatContent)

  prop("name")
  prop("lockedFilter")
  prop("displayName")
  prop("outlined")
  data("filter","")
  data("popout", false)
  data("text", null)
  data("user", null)
  data("outline")(c => c.outlined.getOrElse(true))

  subscription("chat")(c => ChatService.getByName(c.name))
  subscription("user")(c => LoginService.userProfile.filter(_ != null).map(_.siteUser))
  method("togglePopout")({(c:facade) => {println(s"popout = ${c.popout}");c.popout = !c.popout}}:js.ThisFunction)

}

@js.native
trait ChatContent extends VueRxComponent{
  val chat:Chat
  val user:SiteUser
  var text:String
  val filter:String
  val lockedFilter:UndefOr[String]
  var chatText:String
  var chatFilter:String
}

object ChatContent extends Component {
  type facade = ChatContent
  val name = "chat-content"
  override val template = """
   <v-card :outlined="outlined" elevation="0">
     <v-card-title>
       <v-row>
         <v-col><h3>{{displayName}}</h3></v-col>
         <v-spacer></v-spacer>
         <v-col style="text-align:right;">
          <v-tooltip top v-if="user">
           <template v-slot:activator="{ on }">
            <v-btn icon to="/help"  v-on="on" >
              <v-icon>mdi-help</v-icon>
            </v-btn>
            </template>
            <span>Help</span>
          </v-tooltip>

           <v-tooltip top>
            <template v-slot:activator="{ on }">
             <v-btn icon @click="$emit('update:popout',!popout)"  v-on="on" >
               <v-icon v-if="popout">mdi-close</v-icon>
               <v-icon v-if="!popout">mdi-open-in-new</v-icon>
             </v-btn>
             </template>
             <span v-if="popout">Close</span>
             <span v-if="!popout">Popout</span>
           </v-tooltip>
         </v-col>
       </v-row>
     </v-card-title>
     <v-card-text>
       <v-row>
         <v-col>
           <v-text-field v-if="!lockedFilter"
                   label="Filter"
                   v-model="chatFilter"
                   :clearable="true"
                   @change="$emit('update:filter',chatFilter)">
           </v-text-field>
           <div v-if="lockedFilter">{{lockedFilter}}</div>
           <div v-if="user" >
             <v-textarea label="Your message here"
               :clearable="false"
               solo
               outline
               auto-grow
               v-model="chatText"
               hide-details
               rows="1"
               @change="$emit('update:text',chatText)"
               >
               <template v-slot:append v-if="chatText" >
                 <v-tooltip top >
                   <template v-slot:activator="{ on }">
                     <v-btn v-on="on" small icon @click="addMessage(chatText)" style="top:-2px;">
                     <v-icon color="primary">mdi-send</v-icon>
                     </v-btn>
                   </template>
                   <span>Send</span>
                 </v-tooltip>
               </template>
             </v-textarea>
            </div>
            <ql-chat-messages v-if="chat"  :chatKey="chat.key" :filter="lockedFilter || chatFilter"></ql-chat-messages>
         </v-col>
       </v-row>
     </v-card-text>
   </v-card>"""

  prop("lockedFilter")
  prop("displayName")
  prop("popout")
  prop("outlined")
  prop("text")
  prop("filter")
  prop("chat")
  prop("user")

  data("chatText")(_.text)
  data("chatFilter")(_.filter)

  components(ChatMessages)

  method("addMessage")({addMessage}: js.ThisFunction)

  //watch("chatText")((c,_) => c.$emit("update:text", c.chatText) )
  //watch("chatFilter")((c,_) => c.$emit("update:filter", c.chatFilter) )

  def addMessage(c: facade, text: String) = {
    val factoredtext = c.lockedFilter.map(lf => if (text.contains(lf)) text else s"$lf $text").getOrElse(text)
    ChatMessageService.addMessage(c.chat.key, factoredtext, c.user)
    c.chatText = null
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
    <v-timeline v-if="messages" dense>
      <v-timeline-item right
        v-for="message in messages"
        :key="message.id"
        small
        transition="fade-transition"
        >
        <template v-slot:icon>
          <ql-user-avatar :user="message.user"></ql-user-avatar>
        </template>

        <v-card class="elevation-2" :class="colour(message)">
          <div style="width:100%" class="px-4 py-1 d-flex">
            <span class="text-caption justify-start">{{handle(async(message.user))}}</span>
            <span class="flex-grow-1"></span>
            <span class="text-caption justify-end">{{message.date | datetime('d MMM yyy - kk:mm')}}</span>
          </div>
          <div class="px-4 pb-1">
            <ql-markdown :text="message.message"></ql-markdown>
          </div>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  """

  prop("chatKey")
  prop("filter")

  subscription("messages","filter")(c => ChatMessageService.getMatchingMessages(c.filter, c.chatKey))
  subscription("user")(c => LoginService.userProfile)

  method("colour")({(c:facade,m:ChatMessage) => c.user.filter(_!=null).fold("")(u => if(u.siteUser.id == m.user.id)"blue lighten-4" else "")}:js.ThisFunction)
  method("handle")({(c:facade,siteUser:SiteUser) => c.user.filter(_!=null).fold("anonymous")(u => if(u.siteUser.id == siteUser.id) "You" else siteUser.handle)}:js.ThisFunction)

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
