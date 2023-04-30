package quizleague.web.maintain.stats

import quizleague.web.core.*
import quizleague.web.service.PostService

object StatsModule extends Module {
  override val routes = @@(
    RouteConfig(path = "/maintain/stats", components = Map("default" -> StatsComponent)))

}


object StatsService extends PostService{
  
  def rebuild(seasonId:String) = {
    
    command[String,String](List("entity","regenerate-stats",seasonId))
    
  }
}
