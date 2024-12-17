package quizleague.web.site.other

import quizleague.web.core.{RouteComponent, *}
import quizleague.web.site.*
import quizleague.web.site.login.LoginService
import quizleague.web.site.team.TeamMenuComponent.subscription
import quizleague.web.site.team.TeamService

import scala.scalajs.js

object LinksComponent extends RouteComponent with NoSideMenu with GridSizeComponentConfig{
  val template = """
  <v-container v-bind="gridSize" fluid>
    <v-layout>
    <v-flex><ql-text-box><ql-named-text textName="links-content"></ql-named-text></ql-text-box></v-flex>
    </v-layout>
  </v-container>"""  
}

object LinksTitleComponent extends RouteComponent{
  val template = """
    <v-toolbar
      color="green lighten-3"
      dense
      class="subtitle-background"
      >
      <ql-title>Links</ql-title>
      <v-toolbar-title>
        Links
      </v-toolbar-title>
    </v-toolbar>"""
}

object RulesComponent extends RouteComponent with NoSideMenu with GridSizeComponentConfig{
  val template = """
  <v-container v-bind="gridSize" fluid>
    <ql-title>Rules</ql-title>
    <v-layout>
    <v-flex><ql-text-box><ql-named-text textName="rules-content"></ql-named-text></ql-text-box></v-flex>
    </v-layout>
  </v-container>"""
}

object HelpComponent extends RouteComponent with GridSizeComponentConfig{
  val template = """
  <v-container v-bind="gridSize" fluid>
    <ql-title>Rules</ql-title>
    <v-layout column>
      <v-flex><ql-text-box><h3 id="help-content-main">Overview</h3><ql-named-text textName="help-content-main"></ql-named-text></ql-text-box></v-flex>
      <v-flex><ql-text-box><h3 id="help-content-login">Login</h3><ql-named-text textName="help-content-login"></ql-named-text></ql-text-box></v-flex>
      <v-flex v-if="user"><ql-text-box><h3 id="help-content-chat">Chat</h3><ql-named-text textName="help-content-chat"></ql-named-text></ql-text-box></v-flex>
      <v-flex><ql-text-box><h3 id="help-content-submit">Submitting Results</h3><ql-named-text textName="help-content-submit"></ql-named-text></ql-text-box></v-flex>
      <v-flex v-if="user"><ql-text-box><h3 id="help-content-team">Team Details</h3><ql-named-text textName="help-content-team"></ql-named-text></ql-text-box></v-flex>
    </v-layout>
  </v-container>"""

  subscription("user")(c => LoginService.userProfile)
}

object HelpTitleComponent extends RouteComponent{
  val template = """
    <v-toolbar
      color="blue lighten-1"
      dense
      class="subtitle-background"
      >
      <ql-title>Help</ql-title>
      <v-toolbar-title>
        Help
      </v-toolbar-title>
    </v-toolbar>"""
}

object HelpMenuComponent extends RouteComponent with SideMenu{
  override val template = """
     <ql-side-menu title="Help" icon="mdi-help">
       <v-list-item @click="$vuetify.goTo('#help-content-main')">
        <v-list-item-content><v-list-item-title>Overview</v-list-item-title></v-list-item-content>
      </v-list-item>
      <v-list-item @click="$vuetify.goTo('#help-content-login')">
         <v-list-item-content><v-list-item-title>Login</v-list-item-title></v-list-item-content>
      </v-list-item>
      <v-list-item v-if="user" @click="$vuetify.goTo('#help-content-chat')">
       <v-list-item-content><v-list-item-title>Chat</v-list-item-title></v-list-item-content>
      </v-list-item>
      <v-list-item @click="$vuetify.goTo('#help-content-submit')" >
       <v-list-item-content><v-list-item-title>Submitting Results</v-list-item-title></v-list-item-content>
      </v-list-item>
      <v-list-item v-if="user" @click="$vuetify.goTo('#help-content-team')">
       <v-list-item-content><v-list-item-title>Team Details</v-list-item-title></v-list-item-content>
      </v-list-item>
   </ql-side-menu>
     """

  subscription("user")(c => LoginService.userProfile)

}

object ContactUsComponent extends RouteComponent with NoSideMenu with GridSizeComponentConfig{
  val template = """
  <v-container v-bind="gridSize" fluid>
    <ql-title>Contact Us</ql-title>
    <v-layout column>
      <ql-alias-contact-dialog :show="contact" :alias="alias" :aliasText="aliasText"></ql-alias-contact-dialog>
      <v-flex>
        <ql-text-box>
          <p>
            If you would like to start a new team, please contact the <a v-on:click="alias='secretary';aliasText='League Secretary';contact=true">league secretary</a>.
          </p>
          <p>
            To contact an existing team, go to the <router-link to="/team">teams page</router-link>, find your team and click on the email button at the top of the page.
          </p>
            <br>
          <p>
            For any queries about this website, please contact the <a v-on:click="alias='webmaster';aliasText='the Webmaster';contact=true">webmaster</a>.
          </p>
        </ql-text-box>
      </v-flex>
      <v-flex v-if="user"><ql-text-box><h3 id="help-content-mobile">Team Mobile Numbers</h3><ql-named-text textName="help-content-mobiles"></ql-named-text></ql-text-box></v-flex>
    </v-layout>
  </v-container>"""
  components(AliasContactDialog)
  data("contact",false)
  data("alias",null)
  data("aliasText",null)
  subscription("user")(c => LoginService.userProfile)
}

@js.native
trait AliasContactDialog extends DialogComponent{
  var email:String
  var text:String
  val alias:String
  var show:Boolean
}
object AliasContactDialog extends Component with DialogComponentConfig{

  import quizleague.web.util.validation.Functions._

  type facade = AliasContactDialog
  val name = "ql-alias-contact-dialog"
  val template = """
    <v-dialog v-model="show" max-width="60%" v-bind="dialogSize" persistent>
      <v-card>
        <v-card-title>Contact {{aliasText}}</v-card-title>
        <v-card-text>
          <v-form v-model="valid">
          <v-container>
            <v-layout column>
              <v-text-field required label="Your email address" v-model="email" type="email" :rules="[required('Your email address'), isEmail('Your email address')]"></v-text-field>
              <v-textarea label="Message" v-model="text" outline auto-grow :rules="[required('Message')]" required></v-textarea>
            </v-layout>
          </v-container>
          </v-form>
        </v-card-text>
        <v-card-actions><v-spacer></v-spacer><v-btn text v-on:click="close"><v-icon left>mdi-cancel</v-icon>Cancel</v-btn><v-btn text color="primary" :disabled="!valid" v-on:click="submit">Send<v-icon right>mdi-send</v-icon></v-btn></v-card-actions>
      </v-card>
   </v-dialog>"""

  def submit(c:facade):Unit = {
    TeamService.sendEmailToAlias(c.email, c.text, c.alias)
    c.show = false
    c.text=""
  }


  props("alias")
  props("aliasText")
  data("email","")
  data("text","")
  data("valid",false)
  method("submit")({submit}:js.ThisFunction)
  method("required")(required)
  method("isEmail")(isEmail)

}

