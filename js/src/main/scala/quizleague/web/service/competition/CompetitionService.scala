package quizleague.web.service.competition

import angulate2.std.Injectable
import angulate2.ext.classModeScala
import angulate2.http.Http
import quizleague.web.service.EntityService
import quizleague.web.model._
import quizleague.domain.{ Competition => Dom }
import quizleague.domain.Ref
import quizleague.domain.{Event => DomEvent}
import rxjs.Observable
import quizleague.web.names.ComponentNames
import scala.scalajs.js
import quizleague.web.util.DateTimeConverters._
import quizleague.web.service.fixtures._
import quizleague.web.service.results._
import quizleague.web.service.leaguetable._
import quizleague.web.model.CompetitionType.CompetitionType
import java.time.LocalTime
import java.time.Duration
import quizleague.web.model.CompetitionType
import java.util.concurrent.TimeUnit
import java.time.temporal.ChronoUnit
import quizleague.web.service._
import quizleague.web.service.text._
import quizleague.web.util.Logging
import quizleague.web.service.venue.VenueGetService
import quizleague.web.service.venue.VenuePutService
import java.time.LocalDate
import quizleague.web.names.CompetitionNames

trait CompetitionGetService extends GetService[Competition] with CompetitionNames with Logging {
  override type U = Dom

  val textService: TextGetService
  val resultsService: ResultsGetService
  val fixturesService: FixturesGetService
  val leagueTableService: LeagueTableGetService
  val venueService: VenueGetService
  val competitionService = this

  import Helpers._
  override protected def mapOutSparse(comp: Dom) = doMapOutSparse(comp)

  import io.circe._, io.circe.generic.auto._, io.circe.parser._, io.circe.syntax._

  override def deser(jsonString: String) = decode[Dom](jsonString).merge.asInstanceOf[Dom]

  object Helpers {
    import quizleague.web.util.DateTimeConverters._
    import quizleague.domain
    import domain.{ LeagueCompetition => DLC }
    import domain.{ CupCompetition => DCC }
    import domain.{ SubsidiaryLeagueCompetition => DSC }
    import domain.{ SingletonCompetition => DSiC }  
   

    def doMapOutSparse(dom: Dom):Competition = {
      if (dom == null) return null
      dom match {
        case c: DLC => new LeagueCompetition(
          c.id,
          c.name,
          c.startTime,
          c.duration,
          refObsList(c.fixtures,fixturesService),
          refObsList(c.results, resultsService),
          refObsList(c.tables, leagueTableService),
          refObs(c.text, textService),
          refObs(c.subsidiary))
        case c: DCC => new CupCompetition(
          c.id,
          c.name,
          c.startTime,
          c.duration,
          refObsList(c.fixtures,fixturesService),
          refObsList(c.results, resultsService),
          refObs(c.text, textService))
        case c: DSC => new SubsidiaryLeagueCompetition(
          c.id,
          c.name,
          refObsList(c.results, resultsService),
          refObsList(c.tables, leagueTableService),
          refObs(c.text, textService))
        case c : DSiC => new SingletonCompetition(
          c.id,
          c.name,
          refObs(c.text, textService),
          c.textName,
          Event(refObs(c.event.venue,venueService),c.event.date,c.event.time,c.event.duration)
        )
      }
    }

  }

}

trait CompetitionPutService extends CompetitionGetService with DirtyListService[Competition] {
  import PutHelpers._
  override val textService: TextPutService
  override val resultsService: ResultsPutService
  override val fixturesService: FixturesPutService
  override val leagueTableService:LeagueTablePutService
  override val venueService:VenuePutService

  override protected def mapIn(comp: Competition) = doMapIn(comp)
  override protected def make() = ???

  override def save(comp: Dom) = { textService.saveAllDirty; fixturesService.saveAllDirty; resultsService.saveAllDirty; super.save(comp) }

  import io.circe._, io.circe.generic.auto._, io.circe.parser._, io.circe.syntax._

  override def ser(item: Dom) = item.asJson.noSpaces

  def instance[A <: Competition](compType: CompetitionType): A = {
    val comp = compType match {
      case CompetitionType.league => makeLeague
      case CompetitionType.cup => makeCup
      case CompetitionType.subsidiary => makeSubsidiary
      case CompetitionType.singleton => makeSingleton
    }
    add(comp).asInstanceOf[A]
  }

  object PutHelpers {
    import quizleague.web.util.DateTimeConverters._
    import quizleague.domain
    import domain.{ LeagueCompetition => DLC }
    import domain.{ CupCompetition => DCC }
    import domain.{ SubsidiaryLeagueCompetition => DSC }
    import domain.{ SingletonCompetition => DSiC }      

    def makeLeague = DLC(
      newId(),
      "League",
      LocalTime.of(20, 30),
      Duration.ofSeconds(5400),
      List(),
      List(),
      List(),
      textService.getRef(textService.instance()),
      None)

    def makeCup = DCC(
      newId(),
      "Cup",
      LocalTime.of(20, 30),
      Duration.ofSeconds(5400),
      List(),
      List(),
      textService.getRef(textService.instance()))

    def makeSubsidiary = DSC(
      newId(),
      "Subsidiary",
      List(),
      List(),
      textService.getRef(textService.instance()))
    
    def makeSingleton = DSiC(
      newId(),
      "Singleton",
      DomEvent(null,LocalDate.now, LocalTime.of(20,30), Duration.ofMinutes(90)),
      "",
      textService.getRef(textService.instance()))


    def doMapIn(comp: Competition) = {
      comp match {
        case l: LeagueCompetition => DLC(
          l.id,
          l.name,
          l.startTime,
          l.duration,
          l.fixtures.map(fixturesService.ref(_)).toList,
          l.results.map(resultsService.ref(_)).toList,
          l.tables.map(leagueTableService.ref(_)).toList,
          textService.ref(l.text),
          if (l.subsidiary == null) None else Option(ref(l.subsidiary)))

        case c: CupCompetition => DCC(
          c.id,
          c.name,
          c.startTime,
          c.duration,
          c.fixtures.map(fixturesService.ref(_)).toList,
          c.results.map(resultsService.ref(_)).toList,
          textService.ref(c.text))

        case s: SubsidiaryLeagueCompetition => DSC(
          s.id,
          s.name,
          s.results.map(resultsService.ref(_)).toList,
          s.tables.map(leagueTableService.ref(_)).toList,
          textService.ref(s.text))
        
        case s: SingletonCompetition => DSiC(
          s.id,
          s.name,
          DomEvent(venueService.ref(s.event.venue), s.event.date, s.event.time, s.event.duration),
          s.textName,
          textService.ref(s.text))
      }

    }

  }
}






