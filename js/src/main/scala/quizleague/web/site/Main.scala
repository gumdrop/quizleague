package quizleague.web.site

import scala.scalajs.js

import angular.core.BrowserAnimationsModule
import angular.flexlayout.FlexLayoutModule
import angular.material.MaterialModule
import angulate2.ext.classModeScala
import angulate2.ext.inMemoryWebApi.{ InMemoryBackendConfigArgs, InMemoryWebApiModule }
import angulate2.http.HttpModule
import angulate2.platformBrowser.BrowserModule
import angulate2.router.{ Route, Router }
import angulate2.std._
import quizleague.web.mock.MockData
import quizleague.web.site.common.{ CommonAppModule, NoMenuComponent, SectionComponent, SideMenuService, TitleService, TitledComponent }
import quizleague.web.site.competition.CompetitionModule
import quizleague.web.site.fixtures.FixturesModule
import quizleague.web.site.global.{ ApplicationContextModule, ApplicationContextService }
import quizleague.web.site.leaguetable.LeagueTableModule
import quizleague.web.site.results.ResultsModule
import quizleague.web.site.season.SeasonModule
import quizleague.web.site.team.TeamModule
import quizleague.web.site.text.TextModule
import quizleague.web.site.user.UserModule
import quizleague.web.site.venue.VenueModule
import quizleague.web.util.Logging
import rxjs.Observable
import quizleague.web.site.season.SeasonService
import angulate2.common.CommonModule
import quizleague.web.site.leaguetable.LeagueTableModule




@NgModule(
  imports = @@[BrowserModule,BrowserAnimationsModule ,MaterialModule, FlexLayoutModule, HttpModule, RootModule, ApplicationModules, AppRoutingModule] :+
  InMemoryWebApiModule.forRoot(%%[MockData],InMemoryBackendConfigArgs(delay = 0)),
  declarations = @@[AppComponent], 
  bootstrap = @@[AppComponent],
  providers = @@[SideMenuService]
)
@classModeScala
class AppModule (router:Router) extends Logging{
  log(router.config, "Routes : ")
}


@NgModule(
  imports = @@[CommonAppModule, ApplicationContextModule, UserModule, VenueModule, TeamModule, SeasonModule, ResultsModule, FixturesModule, CompetitionModule]
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
        <span>{{(context | async).leagueName}}</span>
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
class AppComponent(service:ApplicationContextService, sideMenuService:SideMenuService){
  
  val context = service.get
  
  val showSidenav:Observable[Boolean]  = sideMenuService.showMenu 
  
}

@NgModule(
  imports = @@[MaterialModule, FlexLayoutModule, CommonModule,TextModule, LeagueTableModule],
  declarations = @@[RootComponent, RootMenuComponent],
  exports = @@[RootComponent, RootMenuComponent]
)
class RootModule

@Component(
  template = """
  <div fxLayout="row" fxLayoutGap="10px">
    <div>
    <md-tab-group>
      <md-tab label="League Tables">
          <div class="pad"></div>
          <ql-league-table *ngFor="let table of (league | async).tables" [table]="table"></ql-league-table>
      </md-tab>
      <md-tab label="Last Results">
        
      </md-tab>
      <md-tab label="Next Fixtures">
        
      </md-tab>
    </md-tab-group>
    </div>
    <md-card>
      <ql-named-text name="front_page_main"></ql-named-text>
    </md-card>
  </div>
  """,
  styles = @@@("""
    .pad {padding-top:1em;}
  """)
)
@classModeScala
class RootComponent(
    override val sideMenuService:SideMenuService,
    override val titleService:TitleService,
    val applicationContextService:ApplicationContextService,
    val seasonService:SeasonService) extends SectionComponent with NoMenuComponent with TitledComponent{
  
  setTitle("Home")
  val league = applicationContextService.get.switchMap((ac,i) => seasonService.getLeagueCompetition(ac.currentSeason))
}

@Component(
  template = "<div>Root Menu</div>"
)
class RootMenuComponent