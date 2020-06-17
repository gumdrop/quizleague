package quizleague.rest.endpoint

import quizleague.domain._
import quizleague.domain.stats._
import quizleague.util.json.codecs.DomainCodecs._
import quizleague.data.Storage._
import java.util.logging.Logger
import quizleague.conversions.RefConversions._
import javax.servlet.http._
import quizleague.domain.LeagueCompetition
import quizleague.domain.util.LeagueTableRecalculator
import quizleague.util.StringUtils._
import java.util.UUID.{randomUUID => uuid}
import scala.collection.mutable.Map


object StatsWorker {

  def leagueComp(season:Season) = {
    list[Competition](season.key).flatMap((c:Competition) => c match{
      case a:LeagueCompetition => List(a)
      case _  => List()
    }).head
  }

  def cupComps(season:Season) = list[Competition](season.key).flatMap((c:Competition) => c match{
    case a:KnockoutCompetition => List(a)
    case _  => List()
  })
  
  def toComp(c:Ref[Competition]):Competition = c
  
  def seasonStats(season:Season) = list[Statistics].filter(s => s.season.id == season.id)
  
  def perform(fixture: Fixture, season: Season){
    val stats = new StatsWorker(fixture, season, leagueComp(season).tables, seasonStats(season)).doIt
    saveAll(stats)
  }
}

class StatsWorker(fixture: Fixture, season: Season, tables: List[LeagueTable], stats:List[Statistics])(implicit context:StorageContext = StorageContext()) {

  val LOG: Logger = Logger.getLogger(this.getClass.getName)
  
  val cache = Map(stats.map(s => (s.team.id,s)): _*)

  def doIt:List[Statistics] = {

    if(fixture.result.isDefined){
    
      LOG.warning(s"Building stats for  ${fixture.home.shortName} vs ${fixture.away.shortName} on ${fixture.date}")
      val homeStats = find(fixture.home).addWeekStats(fixture.date, fixture.result.get.homeScore, fixture.result.get.awayScore).addToHeadToHead(fixture)
      val awayStats = find(fixture.away).addWeekStats(fixture.date, fixture.result.get.awayScore, fixture.result.get.homeScore).addToHeadToHead(fixture)
  
      val allStats = (for (t <- tables; row <- t.rows if row.team.id != homeStats.team.id && row.team.id != awayStats.team.id) yield find(row.team))
      
      (homeStats :: awayStats :: allStats).map(s => s.addLeaguePosition(fixture.date, leaguePosition(s.team, tables)))
    }
    else stats

  }

  def doCup = {
    if(fixture.result.isDefined){

      LOG.warning(s"Building stats for  ${fixture.home.shortName} vs ${fixture.away.shortName} on ${fixture.date}")
      val homeStats = find(fixture.home).addToHeadToHead(fixture)
      val awayStats = find(fixture.away).addToHeadToHead(fixture)

      val allStats = (for (t <- tables; row <- t.rows if row.team.id != homeStats.team.id && row.team.id != awayStats.team.id) yield find(row.team))

      List(homeStats,awayStats).map(s => s.addLeaguePosition(fixture.date, leaguePosition(s.team, tables)))
    }
    else stats

  }

  private def find(team: Ref[Team]): Statistics = {

    def comp = StatsWorker.leagueComp(season)
    def table = list[LeagueTable](comp.key).filter(_.rows.exists(_.team.id == team.id)).map(ref _).head
    
    cache.getOrElseUpdate(team.id, Statistics(uuid.toString,team, Ref[Season]("season", season.id), table))
    


  }

  private def leaguePosition(team: Team, tables: List[LeagueTable]): Int = {

    val res = for {
      l <- tables;
      row <- l.rows if row.team.id == team.id
      pos = String.valueOf(row.position).replace("=", "").toIntOpt.getOrElse(l.rows.indexOf(row) + 1)
    } yield {
      pos
    }

    res.head
  }
}

object HistoricalStatsAggregator {

  def perform(season: Season) = {

    implicit val context = StorageContext()
    
    val seasonStats = list[Statistics].filter(_.season.id == season.id)

    deleteAll(seasonStats)

    val c = StatsWorker.leagueComp(season)
    val tables = list[LeagueTable](c.key)
    var dummyTables:List[LeagueTable] = tables.map(t => t.copy(rows = t.rows.map(r => r.copy(team = r.team, "",0,0,0,0,0,0,0))).withKey(t.key))

    var startingStats:List[Statistics] = List()
    
    val stats = for (
      f <- list[Fixtures](c.key).sortBy(f => f.date.toString);
      r <- list[Fixture](f.key)
 
  ) yield {
      dummyTables = LeagueTableRecalculator.recalculate(dummyTables,List(r))

      startingStats = new StatsWorker(r, season, dummyTables, startingStats).doIt

      
    }
    saveAll(startingStats)
  }

}