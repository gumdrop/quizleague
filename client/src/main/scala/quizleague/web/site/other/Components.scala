package quizleague.web.site.other

import quizleague.web.core._
import quizleague.web.site._
import quizleague.web.site.team.TeamService

import scala.scalajs.js

object LinksComponent extends RouteComponent with NoSideMenu with GridSizeComponentConfig{
  val template = """
  <v-container v-bind="gridSize" fluid>
    <v-layout>
    <v-flex><ql-text-box><ql-named-text name="links-content"></ql-named-text></ql-text-box></v-flex>
    </v-layout>
  </v-container>"""  
}

object LinksTitleComponent extends RouteComponent{
  val template = """<v-toolbar      
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
    <v-flex><ql-text-box><ql-named-text name="rules-content"></ql-named-text></ql-text-box></v-flex>
    </v-layout>
  </v-container>"""
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
    </v-layout>
  </v-container>"""
  components(AliasContactDialog)
  data("contact",false)
  data("alias",null)
  data("aliasText",null)
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
  method("submit")({submit _}:js.ThisFunction)
  method("required")(required _)
  method("isEmail")(isEmail _)

}

