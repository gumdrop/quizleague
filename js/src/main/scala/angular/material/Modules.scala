package angular.material

import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport
import angulate2.std._






@NgModule(
 imports = @@[MaterialForms, MaterialLayout],
 exports = @@[MaterialForms, MaterialLayout]
)
class MaterialModule


@NgModule(
 imports = @@[
   MdSelectModule,
   MdCheckboxModule,
   MdChipsModule,
   MdInputModule,
   MdButtonModule
],
 exports = @@[
   MdSelectModule,
   MdCheckboxModule,
   MdChipsModule,
   MdInputModule,
   MdButtonModule
 ]
)
class MaterialForms

@NgModule(
 imports = @@[
   MdCardModule,
   MdMenuModule,
   MdSidenavModule,
   MdToolbarModule,
   MdTabsModule,
   MdIconModule,
   MdTooltipModule
],
 exports = @@[
   MdCardModule,
   MdMenuModule,
   MdSidenavModule,
   MdToolbarModule,
   MdTabsModule,
   MdIconModule,
   MdTooltipModule
 ]
)
class MaterialLayout

@js.native
@JSImport("hammerjs",JSImport.Default)
class ExternalDeps extends js.Any

@js.native
@JSImport("@angular/material","MdSelectModule")
class MdSelectModule extends js.Any

@js.native
@JSImport("@angular/material","MdCheckboxModule")
class MdCheckboxModule extends js.Any

@js.native
@JSImport("@angular/material","MdInputModule")
class MdInputModule extends js.Any

@js.native
@JSImport("@angular/material","MdMenuModule")
class MdMenuModule extends js.Any

@js.native
@JSImport("@angular/material","MdSidenavModule")
class MdSidenavModule extends js.Any

@js.native
@JSImport("@angular/material","MdToolbarModule")
class MdToolbarModule extends js.Any

@js.native
@JSImport("@angular/material","MdCardModule")
class MdCardModule extends js.Any

@js.native
@JSImport("@angular/material","MdTabsModule")
class MdTabsModule extends js.Any

@js.native
@JSImport("@angular/material","MdButtonModule")
class MdButtonModule extends js.Any

@js.native
@JSImport("@angular/material","MdChipsModule")
class MdChipsModule extends js.Any

@js.native
@JSImport("@angular/material","MdIconModule")
class MdIconModule extends js.Any


@js.native
@JSImport("@angular/material","MdTooltipModule")
class MdTooltipModule extends js.Any

