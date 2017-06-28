package quizleague.web.site.competition

import angulate2.ext.classModeScala
import angulate2.router.ActivatedRoute
import angulate2.std._
import quizleague.web.site.common.{ MenuComponent, SectionComponent, SideMenuService, TitleService, TitledComponent }
import quizleague.web.site.global.ApplicationContextService
import scalajs.js
import quizleague.web.model._
import quizleague.web.util.rx._

@Component(
  template = s"""
  <div *ngIf="itemObs | async as item; else loading" fxLayout="column" fxLayoutGap="5px">
    <md-card *ngFor="let results of sort(item.results)">
      <md-card-title>{{results.fixtures.date | date:"d MMM yyyy"}}</md-card-title>
      <md-card-content>
          <ql-results-simple [results]="results.results" ></ql-results-simple>
      </md-card-content>
    </md-card>
  </div>
  <ng-template #loading>Loading...</ng-template>
  """)
@classModeScala
class CompetitionResultsComponent(
  route: ActivatedRoute,
  service: CompetitionService,
  viewService: CompetitionViewService,
  applicationContextService: ApplicationContextService,
  override val titleService: TitleService,
  override val sideMenuService: SideMenuService)
    extends SectionComponent
    with MenuComponent
    with TitledComponent{
  
  val itemObs = route.params.switchMap((params, i) => service.get(params("id"))(4))

  itemObs.subscribe(t => setTitle(s"${t.name} - All Results"))
  
  def sortit(results:js.Array[Results]) = sort[Results,Fixtures](results, _.fixtures, (r1,r2) => r2._2.date compareTo r1._2.date,1)

}

@Component(
  template = s"""
  <ql-section-title>
     <span *ngIf="itemObs | async as item; else loading">
      {{item.name}} Results 
    </span>
    <ng-template #loading>Loading...</ng-template>
  </ql-section-title>
  """    
)
@classModeScala
class CompetitionResultsTitleComponent(
    route:ActivatedRoute,
    service:CompetitionService){  
  
  val itemObs = route.params.switchMap((params,i) => service.get(params("id")))

  
}

   
