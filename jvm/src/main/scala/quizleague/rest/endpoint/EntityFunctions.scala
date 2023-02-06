package quizleague.rest.endpoint

import io.circe._
import quizleague.conversions.RefConversions._
import quizleague.data.Storage
import quizleague.data.Storage._
import quizleague.domain._
import quizleague.domain.container.NestedDomainContainer
import quizleague.domain.stats._
import quizleague.domain.util._
import quizleague.rest.deser
import quizleague.rest.task.TaskQueue.taskQueue
import quizleague.util.json.codecs.DomainCodecs._

import java.util.logging.Logger
import scala.reflect.ClassTag
import io.circe.syntax.EncoderOps

class EntityFunctions {
  
  val LOG:Logger = Logger.getLogger(this.getClass.getName)
  
  implicit val context = StorageContext()
  


  def nestedDbUpload(json:String): Unit = {

    val container = deser[NestedDomainContainer](json)

    def withKey[T <: Entity](pair:(String,T)):T =  {val (key,entity) = pair; entity.withKey(Key(key))}

    def saveAll[T <: Entity](list:Map[String, T])(implicit tag:ClassTag[T], encoder:Encoder[T]) = {
      Storage.saveAll[T](list.toList.map(withKey _))(tag,encoder)
    }

    def deleteAll[T <: Entity](implicit tag:ClassTag[T], decoder:Decoder[T]){
      try{
        Storage.deleteAll(Storage.list[T])
      }
      catch{case e:Throwable => LOG.info(s"exception deleting collection $tag")}
    }

    deleteAll[ApplicationContext]
    deleteAll[Competition]
    deleteAll[Fixture]
    deleteAll[Fixtures]
    deleteAll[GlobalText]
    deleteAll[LeagueTable]
    deleteAll[Season]
    deleteAll[Team]
    deleteAll[Text]
    deleteAll[User]
    deleteAll[Venue]
    deleteAll[Statistics]
    deleteAll[CompetitionStatistics]

    saveAll(container.applicationcontext)
    saveAll(container.competition)
    saveAll(container.fixture)
    saveAll(container.fixtures)
    saveAll(container.globaltext)
    saveAll(container.leaguetable)
    saveAll(container.report)
    saveAll(container.season)
    saveAll(container.team)
    saveAll(container.text)
    saveAll(container.user)
    saveAll(container.venue)
    saveAll(container.competitionStatistics)
    saveAll(container.chat)
    saveAll(container.chatMessage)
  }

  def dbDownload(): String = {
    import Storage.list

    import scala.language.implicitConversions

    def toTuple[T <: Entity](entity: T) = (entity.key.get.key, entity)

    implicit def toMap[T <: Entity](entities: Iterable[T]) = entities.map(toTuple _).toMap

    val container = NestedDomainContainer(
      applicationcontext = list[ApplicationContext],
      season = list[Season],
      competition = group[Competition],
      leaguetable = group[LeagueTable],
      team = list[Team],
      venue = list[Venue],
      chat = group[Chat],
      chatMessage = group[ChatMessage],
      globaltext = list[GlobalText],
      text = list[Text],
      user = list[User],
      fixtures = group[Fixtures],
      fixture = group[Fixture],
      report = group[Report],
      competitionStatistics = list[CompetitionStatistics]
    )

    container.asJson.noSpaces
  }
  
  def recalculateTable(key:Key):Unit = {

        val table = load[LeagueTable](key)
        val fixtures = list[Fixtures](key.parentKey.map(Key(_))).flatMap(fxs => list[Fixture](fxs.key))

        LOG.info(s"fixtures : $fixtures")
        
        val blankTable = table.copy(rows = table.rows.map(_.copy(won=0,lost=0,drawn=0,leaguePoints=0,matchPointsFor=0, matchPointsAgainst=0, played=0))).withKey(key)
        
        val recalcTable = LeagueTableRecalculator.recalculate(List(blankTable), fixtures)
        
        recalcTable.foreach(Storage.save(_))
  }
  
  def regenerateStats(seasonId: String) {

    taskQueue.send(() => new TaskFunctions().statsRegenerate(seasonId))
  }
}