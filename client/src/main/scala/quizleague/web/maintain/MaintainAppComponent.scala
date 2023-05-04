package quizleague.web.maintain

import quizleague.web.core.Component


object MaintainAppComponent extends Component {
  
  val name = "ql-maintain-app"

     val template="""
  <v-app
    toolbar 
    style="font-size:16px;"
  >
  <v-navigation-drawer
      clipped
      fixed
      app
      v-model="drawer">
    <ql-maintain-menu></ql-maintain-menu>
  </v-navigation-drawer>
    <v-app-bar
      color="blue darken-3"
      dark
	    fixed 
      app 
      clipped-left
      scroll-off-screen
      >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"  v-show="$vuetify.breakpoint.mdAndDown"></v-app-bar-nav-icon>
      <v-toolbar-title class="white--text" >
        
        <span>Quizleague Data Maintenance</span>
      </v-toolbar-title>

    </v-app-bar>
    <v-main>
		  <v-container fill-height fluid class="px-0 py-0">
        <v-layout justify-left align-top column>
         <router-view name="title"  style="z-index:2"></router-view>
         <p></p>
         <router-view ></router-view>
        </v-layout>
        <notifications></notifications>
      </v-container>
    </v-main>
  </v-app>"""
 
  data("drawer",null)
     
  components(MaintainMenuComponent,MaintainNotificationsComponent)

     
}

