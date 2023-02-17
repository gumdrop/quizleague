package quizleague.rest.endpoint

import sttp.tapir._
import sttp.tapir.static._

import scala.concurrent.Future

object ResourceEndpoints {

  private val resources = resourcesGetServerEndpoint[Future](emptyInput)(this.getClass.getClassLoader,
    "webapp",
    ResourcesOptions.default.defaultResource(List("index.html")))

  private val maintain = resourcesGetServerEndpoint[Future]("maintain")(this.getClass.getClassLoader,
    "webapp/maintain",
    ResourcesOptions.default.defaultResource(List("index.html")))

  def resourceEndpoints = List(maintain, resources)

}
