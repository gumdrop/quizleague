package quizleague.endpoint

import quizleague.data.Storage.{list, _}
import quizleague.domain._
import quizleague.domain.stats._
import quizleague.domain.util.LeagueTableRecalculator
import quizleague.util.StringUtils._
import quizleague.util.UUID.{randomUUID => uuid}

import java.time.LocalDate
import cps.monads.{*, given}
import cps._
import scala.collection.mutable.Map
import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future
import io.circe.*, io.circe.generic.auto._


object StatsWorker {

  //val LOG: Logger = Logger.getLogger(this.getClass.getName)

  def leagueComp(season:Season) = {
    list[Competition](season.key).map(l => l.flatMap((c:Competition) => c match{
      case a:LeagueCompetition => List(a)
      case _  => List()
    }).head)
  }

  def cupComps(season:Season) = list[Competition](season.key).map(_.flatMap((c:Competition) => c match{
    case a:KnockoutCompetition => List(a)
    case _  => List()
  }))

  def fixtures(fixture:Fixture) = load[Fixtures](fixture.key.flatMap(_.parentKey).map(Key.parse(_)).get)

  def seasonStats(season:Season) = list[Statistics].map(_.filter(s => s.season.id == season.id))
  
  def perform(fixture: Fixture, season: Season):Unit = {
    //LOG.warning(s"starting stats regen for : $fixture and $season")


    //LOG.warning(s"loaded fixtures : $fixs")

    for{
      fixs <- fixtures(fixture)
      competition <- leagueComp(season)
      //LOG.warning(s"loaded competition : $competition")
      tables <- list[LeagueTable] (competition.key)
      //LOG.warning(s"loaded tables : $tables")
      statisticses <- seasonStats(season)
      stats <- new StatsWorker(fixture, fixs.date, season, tables, statisticses).doIt
    }
    yield {
      //LOG.warning(s"Regen complete : $stats")
      saveAll(stats)
    }
  }
}

class StatsWorker(fixture: Fixture, date:LocalDate, season: Season, tables: List[LeagueTable], stats:List[Statistics]) {

  //val LOG: Logger = Logger.getLogger(this.getClass.getName)
  
  val cache = Map(stats.map(s => (s.team.id,s)): _*)

  def doIt:Future[List[Statistics]] = {
    //LOG.warning("starting doit")
    if(fixture.result.isDefined){
      for {
        hs <- find(fixture.home)
        as <- find(fixture.away)
        allStats <- Future.sequence (for (t <- tables; row <- t.rows if row.team.id != hs.team.id && row.team.id != as.team.id) yield find(row.team))
      } yield {
        val homeStats = hs.addWeekStats(date, fixture.result.get.homeScore, fixture.result.get.awayScore).addToHeadToHead(fixture)
        val awayStats = as.addWeekStats(date, fixture.result.get.awayScore, fixture.result.get.homeScore).addToHeadToHead(fixture)
        (homeStats :: awayStats :: allStats).map(s => s.addLeaguePosition(date, leaguePosition(s.team, tables)).withKey(Key(None,"statistics", s.id)))
      }
    }
    else Future{stats}

  }

  def doCup = {
    if(fixture.result.isDefined){
      for {
        hs <- find(fixture.home)
        as <- find(fixture.away)
      }yield {
        val homeStats = hs.addToHeadToHead(fixture).addLeaguePosition(date, leaguePosition(hs.team, tables))
        val awayStats = as.addToHeadToHead(fixture).addLeaguePosition(date, leaguePosition(as.team, tables))
        List(homeStats,awayStats)
      }
    }
    else Future{stats}
  }

  private def find(team: Ref[Team]): Future[Statistics] = {

    for {
      comp <- StatsWorker.leagueComp(season)
      tables <- list[LeagueTable](comp.key)
    } yield {
      val table = tables.filter(_.rows.exists(_.team.id == team.id)).map(ref _).head
      cache.getOrElseUpdate(team.id, Statistics(uuid().toString, team, Ref[Season]("season", season.id), table))
    }
  }

  private def leaguePosition(team: Ref[Team], tables: List[LeagueTable]): Int = {

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

  def perform(season: Season) = async[Future] {

      val ss = await(list[Statistics])
      val seasonStats = ss.filter(_.season.id == season.id)
      await(deleteAll(seasonStats))
      val c = await(StatsWorker.leagueComp(season))
      val tables = await(list[LeagueTable](c.key))


      var dummyTables: List[LeagueTable] = tables.map(t => t.copy(rows = t.rows.map(r => r.copy(team = r.team, "", 0, 0, 0, 0, 0, 0, 0))).withKey(t.key))
      var startingStats:List[Statistics] = List()
      val fixtures = await(list[Fixtures](c.key)).sortBy(f => f.date.toString)
      val fixturesIt = fixtures.iterator
      while(fixturesIt.hasNext){
        val f = fixturesIt.next()
        val fixtureList = await(list[Fixture](f.key))
        val fixtureListIt = fixtureList.iterator
        while (fixtureListIt.hasNext) {
          val r = fixtureListIt.next()
          dummyTables = LeagueTableRecalculator.recalculate(dummyTables, List(r))
          startingStats = await(new StatsWorker(r, f.date, season, dummyTables, startingStats).doIt)
        }
      }
      await(saveAll(startingStats))

  }
}