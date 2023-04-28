package quizleague.web.site.calendar

import quizleague.web.model._
import scala.scalajs.js.annotation.JSExportAll
import scala.scalajs.js.annotation.JSExport
import scalajs.js



trait EventWrapper{

  val eventType:String
  
  val date:String
}


class CalendarEventWrapper(@JSExport val event:CalendarEvent) extends EventWrapper{
  @JSExport
  override val eventType = "calendar"
  @JSExport
  override val date = if(event == null) null else event.date
}

@JSExportAll
class CompetitionEventWrapper(val event:Event, val competition:Competition) extends EventWrapper{
  @JSExport
  override val eventType = "competition"
  @JSExport
  override val date = if(event == null) null else event.date
}


@JSExportAll
class FixturesEventWrapper(val fixtures:Fixtures, val competition:Competition) extends EventWrapper{
  @JSExport
  override val eventType = "fixtures"
  @JSExport
  override val date = fixtures.date
}

object EventWrapper{
  
  def apply(event:Event, competition:Competition):EventWrapper = new CompetitionEventWrapper(event, competition)
  def apply(event:CalendarEvent):EventWrapper  = new CalendarEventWrapper(event)
  def apply(fixtures:Fixtures, competition:Competition):EventWrapper = new FixturesEventWrapper(fixtures, competition)
  
}