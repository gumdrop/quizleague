package quizleague.domain

import io.circe._, io.circe.generic.semiauto._


case class Team (
    id:String,
    name:String,
    shortName:String,
    venue:Ref[Venue],
    text:Ref[Text],
    users:List[Ref[User]] = List(),
    retired:Boolean = false) extends Entity derives Codec.AsObject{
  
  def emailName = if(shortName == null) null else shortName.replace(' ', '.').toLowerCase
}
