package quizleague.web.site.venue

import quizleague.web.core.RouteComponent
import quizleague.web.core.GridSizeComponentConfig


object VenuesComponent extends RouteComponent with GridSizeComponentConfig{
   override val template="""
     <v-container v-bind="gridSize" fluid>
       <v-layout column>
         <v-flex><ql-text-box><ql-named-text textName="venues-front-page"></ql-named-text></ql-text-box></v-flex>
         <v-flex v-if="$vuetify.breakpoint.smAndDown">
         <v-list>
           <v-list-item :to="'/venue/' + venue.id"  v-for="venue in venues " :key="venue.id">
             <v-list-item-content><v-list-item-title>{{venue.name}}</v-list-item-title></v-list-item-content>
           </v-list-item>
         </v-list>
         </v-flex>
       </v-layout>
     </v-container>
       """
    subscription("venues")(v => VenueService.list().map(_.sortBy(_.name)))
}
object VenuesTitleComponent extends RouteComponent{
   override val  template="""<v-toolbar      
      color="orange lighten-3"
      dense
      class="subtitle-background"
      >
      <ql-title>Venues</ql-title>
      <v-toolbar-title>
        Venues
      </v-toolbar-title>
   </v-toolbar>"""
       

}