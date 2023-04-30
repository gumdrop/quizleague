package quizleague.domain.command

import io.circe._
case class TeamEmailCommand(sender:String, text:String, teamId:String) derives Codec.AsObject

case class AliasEmailCommand(sender:String, text:String, alias:String) derives Codec.AsObject