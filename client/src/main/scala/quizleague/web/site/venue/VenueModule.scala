package quizleague.web.site.venue



import scala.scalajs.js

import quizleague.web.model.Venue

import quizleague.web.names.ComponentNames

import quizleague.web.service._
import quizleague.web.service.venue.VenueGetService
import quizleague.web.site._
import quizleague.web.site.text.TextModule
import quizleague.web.core.Module
import quizleague.web.core.RouteConfig
import quizleague.web.core._


object VenueModule extends Module{

  override val components = @@(VenueComponent,VenueTitle)

  private val menu = {() => js.dynamicImport{VenueMenuComponent}}
  
  override val routes = @@(
      RouteConfig(path = "/venue", 
          components = Map("default" -> {() => js.dynamicImport{VenuesComponent}}, "title" -> {() => js.dynamicImport{VenuesTitleComponent}},"sidenav" -> menu)),
      RouteConfig(path = "/venue/:id", 
          components = Map("default" -> {() => js.dynamicImport{VenuePage}}, "title" -> {() => js.dynamicImport{VenueTitleComponent}},"sidenav" -> menu)))

      
   
}


object VenueService extends VenueGetService with RetiredFilter[Venue]

