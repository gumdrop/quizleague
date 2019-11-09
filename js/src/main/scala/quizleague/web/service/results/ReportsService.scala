package quizleague.web.service.results


import quizleague.web.model._
import quizleague.web.model.{Reports => Model}
import quizleague.domain.{Reports => Dom}
import quizleague.domain.{Report => DomReport}

import scala.scalajs.js
import js.JSConverters._
import quizleague.web.service._
import quizleague.web.names.ReportsNames
import quizleague.web.service.text.TextGetService
import quizleague.web.service.team.TeamGetService
import quizleague.web.service.text.TextPutService
import quizleague.web.service.team.TeamPutService
import quizleague.web.service.DirtyListService
import io.circe.parser._
import io.circe.syntax._
import quizleague.util.json.codecs.DomainCodecs._
import quizleague.web.service.chat.{ChatGetService, ChatPutService}
import rxscalajs.Observable


trait ReportsGetService extends GetService[Model] with ReportsNames {
  override type U = Dom
  
  val textService:TextGetService
  val teamService:TeamGetService
  val chatService:ChatGetService

  override protected def mapOutSparse(dom: Dom) = Model(
    dom.id,
    mapReports(dom.reports),
    chatService.list(Key(dom.key)).flatMap(l => if(l.isEmpty) Observable.empty else Observable.just(l.head)),
    dom.reports.isEmpty)

  private def mapReports(reports:List[DomReport]) =
    reports.map(r => Report(
      refObs(r.team, teamService),
      refObs(r.text, textService))
    ).toJSArray
   
  
  override protected def dec(json:js.Any) = decodeJson[U](json)

}

trait ReportsPutService extends PutService[Model] with ReportsGetService with DirtyListService[Model] {
  
  override val textService:TextPutService
  override val teamService:TeamPutService
  override val chatService:ChatPutService
  
  override protected def mapIn(model: Model) = Dom(
      model.id, 
      model.reports.map(r => DomReport(teamService.ref(r.team), textService.ref(r.text))).toList
      )

  override protected def make() = ???
  
  override def save(model:Model) = {textService.saveAllDirty; super.save(model)}

  override def enc(item: Dom) = item.asJson

}
