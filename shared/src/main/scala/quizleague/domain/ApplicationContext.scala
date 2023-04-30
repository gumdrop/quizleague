package quizleague.domain

import io.circe.Codec

case class ApplicationContext(
  id: String,
  leagueName: String,
  textSet: Ref[GlobalText],
  currentSeason: Ref[Season],
  senderEmail: String,
  emailAliases: List[EmailAlias],
  cloudStoreBucket: String,
  retired: Boolean = false) extends Entity derives Codec.AsObject

object ApplicationContext {
  val singletonId = "5659313586569216"
  def apply(
    leagueName: String,
    textSet: Ref[GlobalText],
    currentSeason: Ref[Season],
    senderEmail: String,
    emailAliases: List[EmailAlias],
    cloudStoreBucket: String): ApplicationContext = ApplicationContext(singletonId,
    leagueName,
    textSet,
    currentSeason,
    senderEmail,
    emailAliases,
    cloudStoreBucket)
}

case class EmailAlias(alias: String, user: Ref[User]) derives Codec.AsObject