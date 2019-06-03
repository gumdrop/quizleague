package quizleague.web.site

import quizleague.web.core.Component

import scalajs.js
import js.DynamicImplicits._
import com.felstar.scalajs.vue.VuetifyComponent
import com.felstar.scalajs.vue.VueRxComponent
import quizleague.web.site.login.LoginService
import quizleague.web.core._
import quizleague.web.util.Logging._

@js.native
trait SiteComponent extends VueRxComponent with VuetifyComponent{
  var sidemenu:Boolean
  var drawer:Boolean
  var showMenu:Boolean
}

object SiteComponent extends Component {
     type facade = SiteComponent
  
     val name = "ql-app"

     val template="""
  <v-app
    toolbar 
    style="font-size:16px;"
  >
  <v-navigation-drawer
      clipped
      
      app
      :disable-resize-watcher="true"
	  v-model="drawer">
	  <v-list :expand="true">
    <ql-side-menu title="Main Menu" icon="menu" v-if="$vuetify.breakpoint.mdAndDown">
      <v-list-tile v-for="item in items" :to="item.to" ><v-list-tile-action><v-icon flat left>{{item.icon}}</v-icon></v-list-tile-action><v-list-tile-content><v-list-tile-title>{{item.name}}</v-list-tile-title></v-list-tile-content></v-list-tile>
    </ql-side-menu>
    <router-view name="sidenav"></router-view>
    </v-list>
  </v-navigation-drawer>
    <v-toolbar      
      color="blue darken-3"
      dark
	    fixed 
      app 
      clipped-left
      scroll-off-screen
      >
      <v-toolbar-side-icon @click.stop="drawer = !drawer" v-show="$vuetify.breakpoint.mdAndDown"></v-toolbar-side-icon>
      <v-toolbar-title class="white--text" >
        
        <span v-if="appData" :class="$vuetify.breakpoint.smAndUp?'page-header':'page-header-small'"><ql-title :title="appData.leagueName"></ql-title></span>

      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat fab target="_blank" href="https://www.facebook.com/ChilternQuizLeague/"><v-icon>mdi-facebook-box</v-icon></v-btn>
        <ql-logged-on-menu :user="user"  v-if="user"></ql-logged-on-menu>
        <v-btn to="/login" flat fab v-if="!user" title="Login"><v-icon left>mdi-login</v-icon></v-btn>
      </v-toolbar-items>
      <div slot="extension" v-if="$vuetify.breakpoint.lgAndUp">
        <v-btn v-for="item in items" :to="item.to" flat ><v-icon left>{{item.icon}}</v-icon><span>{{item.name}}</span></v-btn>
      </div>
    </v-toolbar>
    <v-content>
		  <v-container fill-height fluid class="px-0 py-0">
        <v-layout justify-left align-top column>
         <router-view name="title"  style="z-index:2"></router-view>
         <p></p>
         <router-view ></router-view>
        </v-layout>
      <notifications></notifications>
      </v-container>
    </v-content>
  </v-app>"""
     
  components(ResultNotificationsComponent,TitleComponent, LoggedOnMenu)
  
  def drawerGet(c:facade) = (c.sidemenu && c.$vuetify.breakpoint.lgAndUp) || (c.showMenu && c.$vuetify.breakpoint.mdAndDown)
  def drawerSet(c:facade, showMenu:Boolean){c.showMenu = if(c.$vuetify.breakpoint.mdAndDown) showMenu else c.showMenu}

  
  data("showMenu",false)
  data("items",
    @@(menuItem("Home", "/home", "home"),
      menuItem("Teams", "/team", "people"),
      menuItem("Competitons", "/competition", "mdi-trophy"),
      menuItem("Results", "/results", "check"),
      menuItem("Venues", "/venue", "location_on"),
      menuItem("Calendar", "/calendar", "mdi-calendar"),
      menuItem("Rules", "/rules", "mdi-book-open-page-variant"),
      menuItem("Links", "/links", "link"),
      menuItem("Contact Us", "/contact", "contact_mail")

    ))
  subscription("appData")(c => ApplicationContextService.get())
  subscription("sidemenu")(c => SiteService.sidemenu)
  subscription("user")(c => LoginService.userProfile)
  computedGetSet("drawer")({drawerGet _}:js.ThisFunction)({drawerSet _}:js.ThisFunction)

  def menuItem(name:String, to:String, icon:String) = $(name=name, to=to, icon=icon)
}

object LoggedOnMenu extends Component{
  val name = "ql-logged-on-menu"
  val template = """
  <v-menu offset-y>
    <template v-slot:activator="{ on }">
      <v-btn flat fab v-on="on" small><v-avatar size="36" :title="user.siteUser.handle"><img :src="user.siteUser.avatar"></img></v-avatar></v-btn>
    </template>
    <v-list>
        <v-list-tile to="/login/profile" key="1">
          <v-list-tile-action><v-icon flat left>person</v-icon></v-list-tile-action>
          <v-list-tile-content><v-list-tile-title>Edit Profile</v-list-tile-title></v-list-tile-content>
        </v-list-tile>
        <v-list-tile key="2" @click="logout()">
          <v-list-tile-action><v-icon flat left>mdi-logout</v-icon></v-list-tile-action>
          <v-list-tile-content><v-list-tile-title>Logout</v-list-tile-title></v-list-tile-content>
        </v-list-tile>
      </v-list>
  </v-menu>
  """

  props("user")

  method("logout"){LoginService.logout _}
}

trait NoSideMenu{
  this:Component =>
  override def mounted:js.Function = () => { SiteService.sidemenu.next(false)}
}

trait SideMenu{
  this:Component =>
  override def mounted:js.Function = () => {SiteService.sidemenu.next(true)}
}

object TitleComponent extends Component{
  val name = "ql-title"
  val template =
    """
      <span>
        <span class="page-header-first">{{first(title)}}</span>
        <span class="page-header-rest"> {{rest(title)}}</span>
      </span>"""

  prop("title")

  method("first")((title:String) => title.split(" ")(0))
  method("rest")((title:String) => title.split(" ").drop(1).mkString(" "))
}

