package quizleague.domain.command

import quizleague.domain.Key
import io.circe._


case class ResultsSubmitCommand(fixtures:List[ResultValues], reportText:Option[String], userID:String) derives Codec.AsObject
case class ResultValues(fixtureKey:Key, homeScore:Int, awayScore:Int) derives Codec.AsObject