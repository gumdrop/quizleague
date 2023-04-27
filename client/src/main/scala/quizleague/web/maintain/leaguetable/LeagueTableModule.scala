package quizleague.web.maintain.leaguetable

import quizleague.domain.{Key => DomKey, LeagueTable => Dom}
import quizleague.web.core.{RouteConfig, _}
import quizleague.web.maintain.team.TeamService
import quizleague.web.model._
import quizleague.web.service.PostService
import quizleague.web.service.leaguetable.{LeagueTableGetService, LeagueTablePutService}
import quizleague.web.util._

object LeagueTableModule extends Module{
    override val routes = @@(     
      RouteConfig(
        path = "/maintain/season/:seasonId/competition/:competitionId/leaguetable/:id",
        components = Map("default" -> LeagueTableComponent)
      ),
      
  )
  
}

object LeagueTableService extends LeagueTableGetService with LeagueTablePutService with PostService {
  import quizleague.util.json.codecs.DomainCodecs._

  override val teamService = TeamService
  
    
  def recalculateTable(table:LeagueTable) = {
    command[Dom,DomKey](List("entity","recalculate-table"),Option(DomKey(table.key.key))).subscribe(unit)
  }
  

}