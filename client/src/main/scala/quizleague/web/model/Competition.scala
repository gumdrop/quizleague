package quizleague.web.model

import rxscalajs.Observable

import scala.scalajs.js

object CompetitionType extends Enumeration {
  type CompetitionType = Value
  val league, cup, subsidiary, singleton = Value
}

import quizleague.web.model.CompetitionType._
import quizleague.web.util.rx.RefObservable

sealed trait Competition extends Model{
  val id: String
  val name: String
  val typeName: String
  val fixtures: Observable[js.Array[Fixtures]]
  val leaguetable: Observable[js.Array[LeagueTable]]
  val text: RefObservable[Text]
  val textName:String
  val icon:String
  val subsidiary:Boolean
}

class LeagueCompetition(
  override val id: String,
  override val name: String,
  val startTime: String,
  val duration: Float,
  override val fixtures: Observable[js.Array[Fixtures]],
  override val leaguetable: Observable[js.Array[LeagueTable]],
  override val text: RefObservable[Text],
  override val textName:String,
  val icon:String) extends Competition {
  override val typeName = league.toString()
  override val subsidiary = false
}

class CupCompetition(
  override val id: String,
  override val name: String,
  val startTime: String,
  val duration: Float,
  override val fixtures: Observable[js.Array[Fixtures]],
  override val text: RefObservable[Text],  
  override val textName:String,
  val icon:String
  )  extends Competition {
  override val typeName = cup.toString()
  override val leaguetable: Observable[js.Array[LeagueTable]] = Observable.just(js.Array())
  override val subsidiary = false
}

class SubsidiaryLeagueCompetition(
  override val id: String,
  override val name: String,
  override val fixtures: Observable[js.Array[Fixtures]],
  override val leaguetable: Observable[js.Array[LeagueTable]],
  override val text: RefObservable[Text],
  override val textName:String,
  val icon:String) extends Competition {
  override val typeName = CompetitionType.subsidiary.toString()
  override val subsidiary = true
}
object SubsidiaryLeagueCompetition {
  def addFixtures(sub:Competition,fixtures: Observable[js.Array[Fixtures]]) = {
    new SubsidiaryLeagueCompetition(sub.id,sub.name, fixtures, sub.leaguetable, sub.text, sub.textName, sub.icon)
  }
}

class SingletonCompetition(
  override val id: String,
  override val name: String,
  override val text: RefObservable[Text],
  val textName: String,
  val event: Event,
  val icon:String) extends Competition {
  override val typeName = singleton.toString()
  override val fixtures = Observable.just(js.Array())
  override val leaguetable: Observable[js.Array[LeagueTable]] = Observable.just(js.Array())
  override val subsidiary = false
}
    

