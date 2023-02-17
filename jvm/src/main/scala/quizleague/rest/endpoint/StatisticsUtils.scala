package quizleague.rest.endpoint

import quizleague.conversions.RefConversions._
import quizleague.data.Storage._
import quizleague.domain._
import quizleague.domain.stats._
import quizleague.domain.util.LeagueTableRecalculator
import quizleague.util.StringUtils._
import quizleague.util.json.codecs.DomainCodecs._

import java.time.LocalDate
import java.util.UUID.{randomUUID => uuid}
import java.util.logging.Logger
import scala.collection.mutable.Map


object StatsWorker {

  val LOG: Logger = Logger.getLogger(this.getClass.getName)

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

  def fixtures(fixture:Fixture) = load[Fixtures](fixture.key.flatMap(_.parentKey).map(Key.parse(_)).get)

  def seasonStats(season:Season) = list[Statistics].filter(s => s.season.id == season.id)
  
  def perform(fixture: Fixture, season: Season){
    LOG.warning(s"starting stats regen for : $fixture and $season")

    val fixs = fixtures(fixture)
    LOG.warning(s"loaded fixtures : $fixs")


    val competition = leagueComp(season)
    LOG.warning(s"loaded competition : $competition")
    val tables = list[LeagueTable](competition.key)
    LOG.warning(s"loaded tables : $tables")
    val statisticses = seasonStats(season)
    LOG.warning(s"loaded season stats : $statisticses")
    val stats = new StatsWorker(fixture, fixs.date, season, tables, statisticses).doIt
    LOG.warning(s"Regen complete : $stats")

    saveAll(stats)
  }
}

class StatsWorker(fixture: Fixture, date:LocalDate, season: Season, tables: List[LeagueTable], stats:List[Statistics])(implicit context:StorageContext = StorageContext()) {

  val LOG: Logger = Logger.getLogger(this.getClass.getName)
  
  val cache = Map(stats.map(s => (s.team.id,s)): _*)

  def doIt:List[Statistics] = {
    LOG.warning("starting doit")
    if(fixture.result.isDefined){
    
      LOG.warning(s"Building stats for  ${fixture.home.shortName} vs ${fixture.away.shortName} on ${date}")
      val homeStats = find(fixture.home).addWeekStats(date, fixture.result.get.homeScore, fixture.result.get.awayScore).addToHeadToHead(fixture)
      val awayStats = find(fixture.away).addWeekStats(date, fixture.result.get.awayScore, fixture.result.get.homeScore).addToHeadToHead(fixture)
  
      val allStats = (for (t <- tables; row <- t.rows if row.team.id != homeStats.team.id && row.team.id != awayStats.team.id) yield find(row.team))
      
      (homeStats :: awayStats :: allStats).map(s => s.addLeaguePosition(date, leaguePosition(s.team, tables)).withKey(Key(None,"statistics", s.id)))
    }
    else stats

  }

  def doCup = {
    if(fixture.result.isDefined){

      LOG.warning(s"Building stats for  ${fixture.home.shortName} vs ${fixture.away.shortName} on ${date}")
      val homeStats = find(fixture.home).addToHeadToHead(fixture)
      val awayStats = find(fixture.away).addToHeadToHead(fixture)

      val allStats = (for (t <- tables; row <- t.rows if row.team.id != homeStats.team.id && row.team.id != awayStats.team.id) yield find(row.team))

      List(homeStats,awayStats).map(s => s.addLeaguePosition(date, leaguePosition(s.team, tables)))
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

      startingStats = new StatsWorker(r, f.date, season, dummyTables, startingStats).doIt

      
    }
    saveAll(startingStats)
  }

}