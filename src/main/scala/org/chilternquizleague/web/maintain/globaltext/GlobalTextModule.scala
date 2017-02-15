package org.chilternquizleague.web.maintain.globaltext

import angulate2.std._
import angular.material.MaterialModule
import angulate2.forms.FormsModule
import angulate2.platformBrowser.BrowserModule
import angulate2.router.{Route,RouterModule}

import scala.scalajs.js
import org.chilternquizleague.web.model.Venue
import angulate2.http.Http
import org.chilternquizleague.web.service.globaltext._
import angular.flexlayout.FlexLayoutModule
import org.chilternquizleague.web.util.UUID
import org.chilternquizleague.web.maintain.component.ComponentNames
import org.chilternquizleague.web.maintain.text.TextService

import angulate2.ext.classModeScala
import angulate2.common.CommonModule
import rxjs.Observable
import angulate2.router.RouterModule
import angulate2.std.Injectable
import angulate2.ext.classModeScala
import org.chilternquizleague.web.maintain._

@NgModule(
  imports = @@[CommonModule,FormsModule,MaterialModule,RouterModule,FlexLayoutModule, GlobalTextRoutesModule],
  declarations = @@[GlobalTextComponent,GlobalTextListComponent],
  providers = @@[GlobalTextService]
   
)
class GlobalTextModule

@Routes(
  root = false,
  Route(
    path = "globalText/:id",
    component = %%[GlobalTextComponent]
  ),
  Route(
    path = "globalText",
    component = %%[GlobalTextListComponent]
  )
)
class GlobalTextRoutesModule 


trait GlobalTextNames extends ComponentNames{
  override val typeName = "globalText"
}

@Injectable
@classModeScala
class GlobalTextService(override val http:Http, val textService:TextService) extends GlobalTextGetService with GlobalTextPutService  with ServiceRoot


