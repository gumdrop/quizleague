package quizleague.rest.endpoint

import quizleague.domain._
import quizleague.util.json.codecs.DomainCodecs._
import sttp.tapir.generic.auto._
import sttp.tapir.json.circe._
import sttp.tapir.server.ServerEndpoint
import sttp.tapir.{endpoint, stringBody, _}

import scala.concurrent.Future
import scala.concurrent.Future.successful
private object EntityEndpointDefinitions {
  val base = endpoint
    .in("rest" / "entity")

    .errorOut(stringBody)

  val dbupload = base
    .post
    .in("dbupload")
    .in(stringJsonBody)
    .out(emptyOutput)

  val dbdownload = base
    .get
    .in("dbdownload")
    .in(emptyInput)
    .out(stringJsonBody)

  val recalculateTable = base
    .post
    .in("recalculate-table")
    .in(jsonBody[Key])
    .out(emptyOutput)

  val regenerateStats = base
    .post
    .in("regenerate-stats" / path[String]("seasonId"))
    .in(emptyInput)
    .out(emptyOutput)
 }

object EntityEndpointImplementations{
  import EntityEndpointDefinitions._

  private val postDbUpload = dbupload
    .serverLogic(db => {
      successful[Either[String, Unit]](Right(new EntityFunctions().nestedDbUpload(db)))
    })

  private val getDbDownload = dbdownload
    .serverLogic(_ => {
      successful[Either[String, String]](Right(new EntityFunctions().dbDownload()))
    })

  private val postRecalculateTable = recalculateTable
    .serverLogic(key => {
      successful[Either[String, Unit]](Right(new EntityFunctions().recalculateTable(key)))
    })

  private val postRegenerateStats = regenerateStats
    .serverLogic(seasonId => {
      successful[Either[String, Unit]](Right(new EntityFunctions().regenerateStats(seasonId)))
    })

  def entityEndpoints: List[ServerEndpoint[Any, Future]] = List(
    postDbUpload,
    getDbDownload,
    postRecalculateTable,
    postRegenerateStats)
}
