package quizleague.domain.command

case class TeamEmailCommand(sender:String, text:String, teamId:String)

case class AliasEmailCommand(sender:String, text:String, alias:String)