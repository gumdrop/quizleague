package quizleague.web.maintain.results

import angulate2.std._
import angulate2.router.ActivatedRoute
import angulate2.common.Location
import quizleague.web.maintain.component.ItemComponent
import quizleague.web.maintain.component._
import quizleague.web.model._
import scala.scalajs.js
import angulate2.ext.classModeScala
import TemplateElements._
import quizleague.web.maintain.text.TextService
import angulate2.router.Router
import js.Dynamic.{ global => g }
import quizleague.web.util.Logging
import quizleague.web.maintain.text.TextEditMixin


@Component(
  template = s"""
 <div>
    <h2>Reports : {{item.fixture.date}} : {{item.fixture.home.name}} vs item.{{item.fixture.away.name}}</h2>
    <form #fm="ngForm" (submit)="save()">
     <div fxLayout="column">
      <div *ngFor="let report of item.reports" fxLayout="row"><button (click)="editText(report.text)" md-button type="button">{{report.team.shortName}}</button></div>
     </div>
     $formButtons
    </form>
  </div>

  """    
)
@classModeScala
class ReportListComponent(
    override val service:ResultService,
    override val route: ActivatedRoute,
    override val location:Location,
    val router:Router)
    extends ItemComponent[Result] with TextEditMixin[Result] with Logging{
 
    override protected def loadItem(depth:Int = 1) = super.loadItem(3)
}
    