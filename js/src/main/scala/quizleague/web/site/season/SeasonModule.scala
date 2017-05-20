package quizleague.web.site.season

import angulate2.ext.classModeScala
import angulate2.http.Http
import angulate2.std._
import quizleague.web.model.Season
import quizleague.web.service.season.SeasonGetService
import quizleague.web.site.ServiceRoot
import quizleague.web.site.competition.CompetitionService
import quizleague.web.site.text.TextService
import quizleague.web.site.venue.VenueService
import quizleague.web.model.Team
import angulate2.common.CommonModule
import angulate2.forms.FormsModule
import angular.material.MaterialModule


@NgModule(
  imports = @@[CommonModule,FormsModule,MaterialModule],
  declarations = @@[SeasonSelectComponent],
  providers = @@[SeasonService],
  exports = @@[SeasonSelectComponent]
)
class SeasonModule


@Injectable
@classModeScala
class SeasonService(override val http: Http,
    override val textService: TextService,
    override val competitionService: CompetitionService,
    override val venueService: VenueService) extends SeasonGetService with ServiceRoot {
  
    def getResults(season:Season) = get(season.id)(3).map((s,i) => s.competitions.flatMap(_.results))
    
    def getFixtures(season:Season) = get(season.id)(3).map((s,i) => s.competitions.flatMap(_.fixtures))
    
    def getLeagueCompetition(season:Season) = get(season.id)
      .map((s,i) => s.competitions)
      .map((cs,i) => cs.filter(_.typeName == "league").head)
      .switchMap((c,i) => competitionService.get(c.id)(3))
      
    
    
    
}