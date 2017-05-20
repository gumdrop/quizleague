package quizleague.web.site.team

import angulate2.ext.classModeScala
import angulate2.router.ActivatedRoute
import angulate2.std.Component
import quizleague.web.site.common.{ MenuComponent, SectionComponent, SideMenuService, TitleService, TitledComponent }
import quizleague.web.site.global.ApplicationContextService
import quizleague.web.util.Logging


@Component(
  template = s"""
  <div *ngIf="itemObs | async as item; else loading" fxLayout="column" fxLayoutGap="5px">
    <md-card>
      <md-card-title>All Results</md-card-title>
      <md-card-content>
        <ql-results-simple [results]="results | async" [inlineDetails]="true"></ql-results-simple>
      </md-card-content>
    </md-card>
  </div>
  <ng-template #loading>Loading...</ng-template>
  """    
)
@classModeScala
class TeamResultsComponent(
    route:ActivatedRoute,
    service:TeamService,
    viewService:TeamViewService,
    applicationContextService:ApplicationContextService,
    override val titleService:TitleService,
    override val sideMenuService:SideMenuService) extends SectionComponent with MenuComponent with TitledComponent with Logging{
  
  
  
  val itemObs = route.params.switchMap( (params,i) => service.get(params("id")))
  
  itemObs.subscribe(t => setTitle(s"${t.name} - Results"))
  
  val results = viewService.season.switchMap((s,j) => itemObs.switchMap((t,i) => viewService.getResults(t, s)))

  
  
}

@Component(
  template = """
  <ql-section-title>
     <span *ngIf="itemObs | async as item; else loading">
      {{item.name}} - Results
    </span>
    <ql-season-select [currentSeason]="season"></ql-season-select>
    <ng-template #loading>Loading...</ng-template>
  </ql-section-title>
  """    
)
@classModeScala
class TeamResultsTitleComponent(
    route:ActivatedRoute,
    service:TeamService,
    viewService:TeamViewService) extends Logging{  
  
  val itemObs = route.params.switchMap((params,i) => service.get(params("id")))
  
  val season = viewService.season
  
}