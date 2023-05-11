package quizleague.web.site.calendar

import quizleague.web.site.season.SeasonWatchService
import rxscalajs.subjects.BehaviorSubject

import scala.scalajs.js
import quizleague.web.model.*
import rxscalajs.Observable
import rxscalajs.Observable.combineLatest

import js.JSConverters.*
import quizleague.web.site.season.SeasonService
import quizleague.web.site.competition.*
import quizleague.web.core.*
import quizleague.web.core.RouteConfig
import org.scalajs.dom
import quizleague.web.maintain.fixtures.FixturesService
import quizleague.web.site.fixtures
import quizleague.web.util.Logging.*

import java.time.LocalDate

object CalendarModule extends Module{
  override val routes = @@(RouteConfig(path="/calendar" , components=Map("default"->{() => js.dynamicImport{CalendarPage}}, "title"->{() => js.dynamicImport{CalendarTitleComponent}})))
}

object CalendarViewService extends SeasonWatchService{

  private val viewTypeKey: String = "calendar.viewType"
  private def viewTypeFromStorage() = if(dom.window.localStorage.getItem(viewTypeKey) == null) "timeline" else dom.window.localStorage.getItem(viewTypeKey)
  var viewType:BehaviorSubject[String] = BehaviorSubject(viewTypeFromStorage())

  def setViewType(vt:String): Unit ={
    dom.window.localStorage.setItem(viewTypeKey, vt)
    viewType.next(vt)
  }

  def getViewType():String = viewTypeFromStorage()

  def standaloneEvents(seasonId:String):Observable[js.Array[EventWrapper]] = {
    val now = LocalDate.now().toString

    val comps = CompetitionService.firstClassCompetitions(seasonId)
    val season = SeasonService.get(seasonId)
    standaloneEvents(comps, season)
      .map(_.filter(_.date >= now).sortBy(_.date))
  }

  private def standaloneEvents(comps:Observable[js.Array[Competition]], season: Observable[Season]):Observable[js.Array[EventWrapper]] = {
     def singletonEvents(c: Competition): js.Array[EventWrapper] = c match {
      case s: SingletonCompetition => js.Array(EventWrapper(s.event, c))
      case _ => js.Array()
    }

    def singletons = comps.map(cs => cs.flatMap(singletonEvents _))

    def seasons = season.map(s => s.calendar.map(e => EventWrapper(e)))

    singletons.combineLatest(seasons).map((a, b) => a ++ b)
  }



  def events(seasonId:String):Observable[js.Array[DateWrapper]] = {

    val comps = CompetitionService.firstClassCompetitions(seasonId)
    
    def fixtures = comps.flatMap(cs => combineLatest(cs.map(c => c.fixtures.map(f => f.map(EventWrapper(_,c)))).toSeq)).map(_.toJSArray.flatten.toJSArray)
    
    def standalones = standaloneEvents(comps,SeasonService.get(seasonId))

    combineLatest(Seq(fixtures,standalones))
        .map(lists =>  
          lists.flatMap(_.toSeq).toJSArray
          .groupBy(_.date)
          .map{case(d,e) => new DateWrapper(d, e)}
          .toJSArray
          .filter(_.date != null)
          .sortBy(_.date)
    )
  }

  def calendarEvents(seasonId:String):Observable[js.Dictionary[DateWrapper]] =
    events(seasonId).map(_.map(x => (x.date, x)).toMap.toJSDictionary)


  def events:Observable[js.Array[DateWrapper]] = season.flatMap(s => events(s.id))
}




class DateWrapper(val date:String, val events:js.Array[EventWrapper]) extends js.Object

