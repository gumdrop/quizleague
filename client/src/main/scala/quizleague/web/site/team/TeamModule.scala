package quizleague.web.site.team

import chartjs.chart._
import org.scalajs.dom.ext.Color
import quizleague.domain.command._
import quizleague.util.StringUtils._
import quizleague.web.core.{RouteConfig, _}
import quizleague.web.model._
import quizleague.web.service._
import quizleague.web.service.statistics.StatisticsGetService
import quizleague.web.service.team.TeamGetService
import quizleague.web.site.ApplicationContextService
import quizleague.web.site.competition.CompetitionService
import quizleague.web.site.fixtures.{FixtureService, FixturesService}
import quizleague.web.site.leaguetable.LeagueTableService
import quizleague.web.site.login.LoginService
import quizleague.web.site.season._
import quizleague.web.site.text.TextService
import quizleague.web.site.user.UserService
import quizleague.web.site.venue.VenueService
import quizleague.web.util._
import quizleague.web.util.rx._
import rxscalajs.Observable

import java.time.LocalDate
import java.time.format.DateTimeFormatter
import scala.scalajs.js
import scala.scalajs.js.JSConverters._

import quizleague.web.store.Storage.*



object TeamModule extends Module{
  
  override val components = @@(TeamNameComponent, ResponsiveTeamNameComponent)

  override val routes = @@(
      
      RouteConfig(path = "/team/start", 
          components = Map("default" -> {() => js.dynamicImport{StartTeamPage}}, "title" -> {() => js.dynamicImport{StartTeamTitleComponent}},"sidenav" -> {() => js.dynamicImport{TeamMenuComponent}})),
      RouteConfig(path = "/team/edit",
          components = Map("default" -> {() => js.dynamicImport{TeamEditPage}}, "sidenav" -> {() => js.dynamicImport{TeamMenuComponent}}),
          beforeEnter = LoginService.routeGuard _),
      RouteConfig(path = "/team/:id",
          components = Map("default" -> {() => js.dynamicImport{TeamPage}}, "title" -> {() => js.dynamicImport{TeamTitleComponent}},"sidenav" -> {() => js.dynamicImport{TeamMenuComponent}})),
      RouteConfig(path = "/team/:id/fixtures", 
          components = Map("default" -> {() => js.dynamicImport{TeamFixturesPage}}, "title" -> {() => js.dynamicImport{TeamFixturesTitle}},"sidenav" -> {() => js.dynamicImport{TeamMenuComponent}})),
      RouteConfig(path = "/team/:id/results", 
          components = Map("default" -> {() => js.dynamicImport{TeamResultsPage}}, "title" -> {() => js.dynamicImport{TeamResultsTitle}},"sidenav" -> {() => js.dynamicImport{TeamMenuComponent}})),
      RouteConfig(path = "/team/:id/stats", 
          components = Map("default" -> {() => js.dynamicImport{TeamStatsPage}}, "title" -> {() => js.dynamicImport{TeamStatsTitle}},"sidenav" -> {() => js.dynamicImport{TeamMenuComponent}})),
      RouteConfig(path = "/team", 
          components = Map("default" -> {() => js.dynamicImport{TeamsComponent}}, "title" -> {() => js.dynamicImport{TeamsTitleComponent}},"sidenav" -> {() => js.dynamicImport{TeamMenuComponent}})),
  )

      
}

object TeamService extends TeamGetService with RetiredFilter[Team] with PostService{
  
  override val textService = TextService
  override val userService = UserService
  override val venueService = VenueService
  
  def teamForEmail(email:String):Observable[js.Array[Team]] = {
    command[List[U],String](List("site","team-for-email",email),None).map(_.map(mapOutSparse _).toJSArray)
  }

  def teamForUser(userID:String):Observable[Option[Team]] = {
    list().map(_.filter(_.users.exists(_.id == userID)).headOption)
  }
  
  def sendEmailToTeam(sender:String, text:String, team:Team):Unit = {

    val cmd = TeamEmailCommand(sender,text,team.id)
    command[List[String],TeamEmailCommand](List("site","email","team"),Some(cmd)).subscribe(unit)
  }

  def sendEmailToAlias(sender: String, text: String, alias: String):Unit = {

    val cmd = AliasEmailCommand(sender, text, alias)
    command[List[String], AliasEmailCommand](List("site", "email", "alias"), Some(cmd)).subscribe(unit)
  }
  
  def leagueStanding(teamId:String):Observable[js.Array[Standing]] = ApplicationContextService.get().flatMap(
    s => {
      CompetitionService.competition[LeagueCompetition](s.currentSeason.id, CompetitionType.league.toString)
        .flatMap(c => c.leaguetable)
        .map(_.flatMap(t => t.rows
          .filter(_.team.id == teamId)
          .map(row => new Standing(s"League ${t.description}", toOrdinal(row.position.toInt)))))
     
    }
  )
  def cupStandings(teamId:String):Observable[js.Array[Standing]] = ApplicationContextService.get().flatMap(
    s => {
      FixtureService.fixturesFrom(FixturesService.competitionFixtures(CompetitionService.competitionsOfType[CupCompetition](s.currentSeason.id)), teamId)
        .map(_.filter(_.result == null).map(fx => fx.parent.map(f => f.parent.map(c => new Standing(c.name,f.description)))))
        .map(_.toSeq)
        .map(_.map(_.flatten))
        .flatMap(x => Observable.combineLatest(x))
        .map(_.toJSArray)
    }
  )

  def standings(teamId:String):Observable[js.Array[Standing]] = combineLatest(leagueStanding(teamId),cupStandings(teamId))
      .map(_.flatMap(x => x))
  
}

object TeamViewService extends SeasonWatchService

object StatisticsService extends StatisticsGetService{
  override val teamService = TeamService
  override val seasonService = SeasonService
  override val tableService = LeagueTableService 
  
  def teamStats(teamId:String, seasonId:String):Observable[Statistics] = {
    
    val q = query(collection(uriRoot), where("team.id","==", teamId), where("season.id","==",seasonId))
    
    runQuery(q).map(_.headOption.fold[Statistics](null)(identity))
  }
  
  def allTeamStats(teamId:String):Observable[js.Array[Statistics]] = {
   
    val q = query(collection(uriRoot), where("team.id","==", teamId))
    
    runQuery(q)
  }
  
  def teamsInTable(stats:Statistics):Observable[Int] = stats.table.obs.map(_.rows.size)
  
  def teamsInTables(stats:js.Array[Statistics]):Observable[Int] = Observable.combineLatest(
      stats.map(_.table.obs).toSeq)
      .map(_.foldLeft(0)((max,t) => if(max > t.rows.size) max else t.rows.size))
  
  private val dateFormat = DateTimeFormatter.ofPattern("d MMM")
  
     private def formatDate(date:String):String = LocalDate.parse(date).format(dateFormat)
  
  private def formatDate(stats:WeekStats):String = formatDate(stats.date)
      
      
  def positionData(stats:Statistics):ChartData = {
    ChartData(
        datasets = js.Array(DataSet("League Position", data = stats.weekStats.map(_.leaguePosition.asInstanceOf[js.Any]),lineTension=.2)), 
        xLabels = stats.weekStats.map(formatDate _),
    )
  }
  
  def matchScoresData(stats:Statistics):ChartData = {
    ChartData(
        datasets = js.Array(
            DataSet("For", data = stats.weekStats.map(s => if(s.ignorable) null else s.pointsFor.asInstanceOf[js.Any]),lineTension=.2, fill=true, backgroundColor="rgba(150,150,150,.5)",borderColor=new Color(50,50,50)),
            DataSet("Against", data = stats.weekStats.map(s => if(s.ignorable) null else s.pointsAgainst.asInstanceOf[js.Any]),lineTension=.2,fill=true, backgroundColor="rgba(150,150,150,.7)", borderColor=Color.Red)    
        ), 
        xLabels = stats.weekStats.map(formatDate _),
    )
  }
  
  def cumuDiffData(stats:Statistics):ChartData = {
    ChartData(
        datasets = js.Array(DataSet("", data = stats.weekStats.map(s => if(s.ignorable) null else s.cumuPointsDifference.asInstanceOf[js.Any]),lineTension=.2)), 
        xLabels = stats.weekStats.map(formatDate _),
    )
  }
  
  def cumuScoresData(stats:Statistics):ChartData = {
    
    ChartData(
        datasets = js.Array(
            DataSet("For", data = stats.weekStats.map(s => if(s.ignorable) null else s.cumuPointsFor.asInstanceOf[js.Any]),lineTension=.2, fill=true, backgroundColor="rgba(150,150,150,.5)",borderColor=new Color(50,50,50)),
            DataSet("Against", data = stats.weekStats.map(s => if(s.ignorable) null else s.cumuPointsAgainst.asInstanceOf[js.Any]),lineTension=.2,fill=true, backgroundColor="rgba(150,150,150,.7)", borderColor=Color.Red)    
        ), 
        xLabels = stats.weekStats.map(formatDate _),
    )
  }

  def resultTypeData(stats:js.Array[Statistics]):ChartData = {

    def wins = stats.flatMap(_.weekStats).filter(x => x.pointsFor > x.pointsAgainst).length
    def draws = stats.flatMap(_.weekStats).filter(!_.ignorable).filter(x => x.pointsFor == x.pointsAgainst).length
    def losses = stats.flatMap(_.weekStats).filter(x => x.pointsFor < x.pointsAgainst).length

    ChartData(
      datasets = js.Array(DataSet("",
        data = js.Array(wins,draws,losses),
        backgroundColor = js.Array(Color.Green, Color.Blue, Color.Red),
        hoverBackgroundColor = js.Array(Color(0,200,0), Color(0,0,200), Color(200,0,0)),
        borderWidth = 1,
        fill=true,
        borderColor = Color.White)

      ),
      labels=js.Array("Won", "Drawn", "Lost"))

  }
  
  private def sortStats(stats:js.Array[Statistics], seasons:Seq[Season]) = {
     val seasonYears = seasons.map(s => ((s.id,s.startYear))).toMap
     stats.sortBy(s => seasonYears(s.season.id))
  }

  private def sortAndPadStats(stats:js.Array[Statistics], seasons:Seq[Season]) = {
    val seasonYears = seasons.map(s => ((s.id,s.startYear))).toMap
    val padded = seasons.map(s => stats.find(_.season.id == s.id).getOrElse(Statistics.stub(s)))

    padded.sortBy(s => seasonYears(s.season.id)).toJSArray
  }
  
  def allSeasonsPositionData(stats:js.Array[Statistics]):Observable[ChartData] = {
    
    Observable.combineLatest(stats.map(_.season.obs).toSeq)
      .map(seasons => {
       val sortedStats = sortStats(stats,seasons)
       val data:js.Array[js.Any] =  sortedStats.map(x => (if(x.seasonStats.currentLeaguePosition == 0) null else x.seasonStats.currentLeaguePosition).asInstanceOf[js.Any])
        ChartData(
        datasets = js.Array(DataSet("League Position", data = data,lineTension=.2)),
        xLabels = seasons.map(SeasonFormat.format _).toJSArray.sortBy(identity)
        )
      })
  }


  def multipleTeamsAllSeasonsPositionData(stats:js.Array[js.Array[Statistics]]):Observable[ChartData] = {
    Observable.combineLatest(stats(0).map(_.season.obs).toSeq)
      .flatMap(seasons => {

        val datasets = stats.map(s => {
          val sortedStats = sortAndPadStats(s,seasons)
          val team = sortedStats.find(_.team != null).get.team.obs
          val data:js.Array[js.Any] =  sortedStats.map(x => (if(x.seasonStats.currentLeaguePosition == 0) null else x.seasonStats.currentLeaguePosition).asInstanceOf[js.Any])
          team.map(t => {
            val colour = randomColor

            DataSet(t.shortName, data = data, lineTension = .2, borderColor = colour, backgroundColor = colour)
          })}).toSeq

        Observable.combineLatest(datasets).map(d => ChartData(
          datasets = d.toJSArray,
          xLabels = seasons.map(SeasonFormat.format _).toJSArray.sortBy(identity)
        ))


      })
  }


  private def randomColor = new Color((Math.random*255).toInt, (Math.random*255).toInt, (Math.random*255).toInt)

  def allSeasonsAverageData(stats:js.Array[Statistics]):Observable[ChartData] = {
    
    Observable.combineLatest(stats.map(_.season.obs).toSeq)
      .map(seasons => {
       val sortedStats = sortStats(stats,seasons)
       def fixCount(weekStats:js.Array[WeekStats]) = weekStats.count(!_.ignorable)
       ChartData(
        datasets = js.Array(
            DataSet("Average For", data = sortedStats.map(sts => (sts.seasonStats.runningPointsFor/fixCount(sts.weekStats)).asInstanceOf[js.Any]),lineTension=.2,fill=true,borderColor=new Color(50,50,50),backgroundColor="rgba(150,150,150,.5)"),
            DataSet("Average Against", data = sortedStats.map(sts => (sts.seasonStats.runningPointsAgainst/fixCount(sts.weekStats)).asInstanceOf[js.Any]),lineTension=.2,fill=true,borderColor=Color.Red,backgroundColor="rgba(150,150,150,.7)")
    
        ), 
        xLabels = seasons.map(SeasonFormat.format _).toJSArray.sortBy(identity)
        )
      }
      )
  }

  def multipleTeamsAllSeasonsAverageData(stats:js.Array[js.Array[Statistics]]):Observable[ChartData] = {

    Observable.combineLatest(stats(0).map(_.season.obs).toSeq)
      .flatMap(seasons => {
        val datasets = stats.map(s => {
          val sortedStats = sortAndPadStats(s, seasons)
          val team = sortedStats.find(_.team != null).get.team.obs

          def fixCount(weekStats: js.Array[WeekStats]) = weekStats.count(!_.ignorable)


          team.map(t => {
            val colour = randomColor

            DataSet(t.shortName, data = sortedStats.map(sts => (if(sts.seasonStats.runningPointsFor != 0)(sts.seasonStats.runningPointsFor / fixCount(sts.weekStats)) else null).asInstanceOf[js.Any]), lineTension = .2, borderColor = colour, backgroundColor = colour)
          })
        }).toSeq

        Observable.combineLatest(datasets).map(d => ChartData(
          datasets = d.toJSArray,
          xLabels = seasons.map(SeasonFormat.format _).toJSArray.sortBy(identity)
        ))


      })
  }

}
