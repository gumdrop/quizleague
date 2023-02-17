package quizleague.rest.calendar

import quizleague.conversions.RefConversions._
import quizleague.data.Storage._
import quizleague.data._
import quizleague.domain._
import quizleague.util.json.codecs.DomainCodecs._

import java.time._
import java.time.format.DateTimeFormatter
import java.util.logging.Logger


object CalendarHandler {
  val log = Logger.getLogger(this.getClass.getName)
  val utc = ZoneOffset.UTC
  val local = ZoneId.of("Europe/London")
  val dateFormat = DateTimeFormatter.ofPattern("yyyyMMdd'T'HHmmss'Z'").withZone(utc)

  def teamCalendar(id:String): String = {

      implicit val context = StorageContext()

      def saveNewIcal() = {
        val ical = makeICal(load[Team](id))
        val cache = CalendarCache(id,LocalDateTime.now(), ical)
        save(cache)
        ical
      }

      val dateTime = LocalDateTime.now().minusDays(1).toString
      val query = collection[CalendarCache](None).whereEqualTo("id",id).whereGreaterThan("updated", dateTime)
      val results = runQuery[CalendarCache](query)

      results.headOption.fold(saveNewIcal())(_.ical)

    }
    
    private def formatEvent(event:BaseEvent, text:String)(implicit context:StorageContext):String = {
      val now = toUtc(LocalDateTime.now())
      val uidPart = text.replaceAll("\\s", "") 
      val address = event.venue.map(_.address.replaceAll("\\n\\r", ",").replaceAll("\\n", ",").replaceAll("\\r", ",")).getOrElse("")
      s"""
BEGIN:VEVENT
DTSTAMP:$now
UID:${event.date}.$uidPart.chilternquizleague.uk
DESCRIPTION:$text
SUMMARY:$text
DTSTART:${toUtc(event.date.atTime(event.time))}
DTEND:${toUtc(event.date.atTime(event.time plus event.duration))}
${event.venue.map(v => s"""LOCATION:${v.name}, $address""").getOrElse("")}
END:VEVENT
"""

    }
    private def duration(competition:Competition) = competition match {
      case l: LeagueCompetition => l.duration
      case c: CupCompetition => c.duration
      case _ => Duration.ZERO
    }
    private def formatFixture(fixture:Fixture, fixtures:Fixtures, competition: Competition, description:String)(implicit context:StorageContext) = {
      val text = s"${fixture.home.shortName} - ${fixture.away.shortName} : $description"
      
      val now = toUtc(LocalDateTime.now())
      val uidPart = fixture.home.shortName.replaceAll("\\s", "") 
      val address = fixture.venue.map(_.address.replaceAll("\\n\\r", ",").replaceAll("\\n", ",").replaceAll("\\r", ",")).getOrElse("")
      s"""
BEGIN:VEVENT
DTSTAMP:$now
UID:${fixtures.date}.$uidPart.chilternquizleague.uk
DESCRIPTION:$text
SUMMARY:$text
DTSTART:${toUtc(fixtures.date.atTime(fixtures.start))}
DTEND:${toUtc(fixtures.date.atTime(fixtures.start plus duration(competition)))}
${fixture.venue.map(v => s"""LOCATION:${v.name}, $address""").getOrElse("")}
END:VEVENT
"""

    }
    private def formatBlankFixtures(fixtures:Fixtures, competition:Competition, description:String)(implicit context:StorageContext) = {
      
      val now = toUtc(LocalDateTime.now)
      val uidPart = (description + fixtures.description).replaceAll("\\s", "")
      s"""
BEGIN:VEVENT
DTSTAMP:$now
UID:${fixtures.date}.$uidPart.chilternquizleague.uk
DESCRIPTION:${description} ${fixtures.description}
SUMMARY:${description} ${fixtures.description}
DTSTART:${toUtc(fixtures.date.atTime(fixtures.start))}
DTEND:${toUtc(fixtures.date.atTime(fixtures.start plus duration(competition)))}
END:VEVENT
"""

    }

    private def makeICal(team:Team)(implicit context:StorageContext):String = {
      val builder = new StringBuilder("BEGIN:VCALENDAR\nVERSION:2.0\n")
      //.append("X-WR-TIMEZONE:UTC\n")
      
        def teamCompetitions(season:Season) = {
          list[Competition](season.key).flatMap(_ match {
            case c:TeamCompetition => List(c)
            case _ => List()
          }
          )
        }
      
      def singletonCompetitions(season:Season) = {
        list[Competition](season.key).flatMap(_ match {
          case c:SingletonCompetition => List(c)
          case _ => List()
        }
        )
      }

        val t = team
        val gap = applicationContext()
        val teamComps = teamCompetitions(gap.currentSeason)
        val teamFixtures = for{
          c <- teamComps
          fixtures <- list[Fixtures](c.key)
          fixtureList = list[Fixture](fixtures.key)
        }
        yield (c, fixtures, fixtureList)

        builder.append(s"X-WR-CALNAME:${gap.leagueName} calendar for ${t.name}\n")
        for{
          (c, fixtures, fixtureList) <- teamFixtures
          fixture <- fixtureList if(fixture.home.id == team.id || fixture.away.id == team.id)
        }
        yield{
          builder.append(formatFixture(fixture, fixtures ,c,s"${c.name} ${fixtures.description}"))
        }
        for{
          c <- singletonCompetitions(gap.currentSeason)
        }
        yield{
          builder.append(c.event.fold("")(formatEvent(_, s"${gap.leagueName} ${c.name}")))
        }
        for{
          (c, fixtures, fixtureList) <- teamFixtures if fixtureList.isEmpty
        }
        yield{
          builder.append(formatBlankFixtures(fixtures, c, c.name))
        }
        for{
          e <- gap.currentSeason.calendar
        }
        yield{
          builder.append(formatEvent(e, e.description))
        }


      builder.append("END:VCALENDAR\n").toString()
    }
  
    def toUtc(dateTime:LocalDateTime) = ZonedDateTime.of(dateTime,local).format(dateFormat)
}