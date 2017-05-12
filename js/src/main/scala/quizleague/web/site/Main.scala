package quizleague.web.site

import angulate2.std._
import angulate2.router.{Route, RouterModule, Router}
import angulate2.platformBrowser.BrowserModule
import angular.material.MaterialModule
import angulate2.forms.FormsModule

import scala.scalajs.js
import angular.flexlayout.FlexLayoutModule
import angular.flexlayout.FlexLayoutModule
import angulate2.ext.inMemoryWebApi.{InMemoryWebApiModule,InMemoryBackendConfigArgs}
import angulate2.http.HttpModule
import quizleague.web.mock.MockData
import quizleague.web.site.text.NamedTextComponent
import quizleague.web.site.global.ApplicationContextModule
import quizleague.web.site.text.TextModule
import quizleague.web.site.user.UserModule
import quizleague.web.site.text.NamedTextComponent
import quizleague.web.site.global.ApplicationContextService
import quizleague.web.site.team.TeamModule
import quizleague.web.site.venue.VenueModule
import scala.scalajs.js
import quizleague.web.util.Logging
import angulate2.ext.classModeScala
import quizleague.web.site.common.SideMenuService
import rxjs.Observable
import quizleague.web.site.common.NoMenuComponent
import quizleague.web.site.common.SectionComponent
import quizleague.web.site.results.ResultsModule
import quizleague.web.site.fixtures.FixturesModule
import quizleague.web.site.competition.CompetitionModule
import quizleague.web.site.leaguetable.LeagueTableModule
import quizleague.web.site.season.SeasonModule
import angular.core.BrowserAnimationsModule
import quizleague.web.site.common.CommonAppModule
import quizleague.web.site.common.TitledComponent
import quizleague.web.site.common.TitleService



@NgModule(
  imports = @@[BrowserModule,BrowserAnimationsModule ,MaterialModule, FlexLayoutModule, HttpModule, TextModule, ApplicationModules, AppRoutingModule] :+
  InMemoryWebApiModule.forRoot(%%[MockData],InMemoryBackendConfigArgs(delay = 0)),
  declarations = @@[AppComponent,RootComponent,RootMenuComponent], 
  bootstrap = @@[AppComponent],
  providers = @@[SideMenuService]
)
@classModeScala
class AppModule (router:Router) extends Logging{
  log(router.config, "Routes : ")
}


@NgModule(
  imports = @@[CommonAppModule, ApplicationContextModule, UserModule, VenueModule, TeamModule, SeasonModule, ResultsModule, FixturesModule, CompetitionModule, LeagueTableModule]
)
class ApplicationModules

@Routes(
  root = true,
  Route(path = "home", 
      children = @@@(
          Route(path="", component = %%[RootComponent]), 
          Route(path="", component = %%[RootMenuComponent], outlet="sidemenu"))),
  Route(path = "",   redirectTo = "/home", pathMatch = "full" ))
class AppRoutingModule

@Component( 
  selector = "ql-app",
  template = """
  <div>
   <md-toolbar color='primary' class="mat-elevation-z6">
      <span>
        <button md-icon-button (click)="sidenav.toggle()" [disabled]="!(showSidenav | async)">
          <md-icon class="md-24">menu</md-icon>
        </button>
        <span>{{leagueName}}</span>
      </span>
      <md-toolbar-row>
        <div fxLayout="row" >
          <a routerLink="/home" md-button routerLinkActive="active">Home</a>
          <a routerLink="/team" md-button routerLinkActive="active">Teams</a>
          <a routerLink="/competition" md-button routerLinkActive="active">Competitions</a>
          <a routerLink="/results" md-button routerLinkActive="active">Results</a>
          <a routerLink="/venue" md-button routerLinkActive="active">Venues</a>
        </div>
      </md-toolbar-row>
    </md-toolbar>
    <md-sidenav-container>
      <md-sidenav #sidenav mode="side" [opened]="showSidenav | async">
        <router-outlet name="sidemenu"></router-outlet>
      </md-sidenav>
      <div id="sidenav-content" style="padding-left:1em;height:calc(100vh - 128px);" fxLayout="column">
        <div fxLayout="column" fxLayoutGap="5px">
          <router-outlet name="title"></router-outlet>
          <router-outlet></router-outlet>
        </div>
      </div>
    </md-sidenav-container>
  </div>
  """,
  styles = js.Array("""
    md-sidenav-container{
      margin-top:8px;
    }
  """)
)
class AppComponent(service:ApplicationContextService, sideMenuService:SideMenuService) extends OnInit {
  
  var leagueName:String = _
  
  var showSidenav:Observable[Boolean]  = _ 
  
  override def ngOnInit() = {
    service.get.subscribe(appc => {leagueName = appc.leagueName})
    showSidenav = sideMenuService.showMenu
  }
}

@Component(
  template = """
  <div fxLayout="row">
    <div>League Tables here</div>
    <md-card>
      <ql-named-text name="front_page_main"></ql-named-text>
    </md-card>
  </div>
  """
)
@classModeScala
class RootComponent(
    override val sideMenuService:SideMenuService,
    override val titleService:TitleService) extends SectionComponent with NoMenuComponent with TitledComponent{
  
  setTitle("Home")
}

@Component(
  template = "<div>Root Menu</div>"
)
class RootMenuComponent
