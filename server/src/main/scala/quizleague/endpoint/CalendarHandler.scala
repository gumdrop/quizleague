package quizleague.endpoint

import quizleague.data.Storage._
import quizleague.data._
import quizleague.domain._

import java.time._
import java.time.format.DateTimeFormatter
import cps.monads.{*, given}
import cps._
import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future
import scala.concurrent.Future._
import java.lang.StringBuilder


object CalendarHandler {


  val utc = ZoneOffset.UTC
  val local = ZoneId.of("Europe/London")
  val dateFormat = DateTimeFormatter.ofPattern("yyyyMMdd'T'HHmmss'Z'").withZone(utc)

  def teamCalendar(id:String):Future[String] = async[Future]{

    def saveNewIcal(): Future[String] = async[Future] {
      val ical = await(makeICal(await(load[Team](id))))
      val cache = CalendarCache(id, LocalDateTime.now(), ical)
      save(cache)
      ical
    }

      val dateTime = LocalDateTime.now().minusDays(1).toString
      val query = collection[CalendarCache](None).where("id","=",id).where("updated",">",dateTime)
      val results = await(runQuery[CalendarCache](query))

      await(results.headOption.fold(saveNewIcal())(cache => Future{cache.ical}))
    }

    private def formatEvent(event:BaseEvent, text:String):Future[String] = async[Future]{
      val now = toUtc(LocalDateTime.now())
      val uidPart = text.replaceAll("\\s", "")
      val venue = if(event.venue.isDefined)
        Some(await(load(event.venue.get)))
      else
        None
      val address = venue.map(_.address.replaceAll("\\n\\r", ",").replaceAll("\\n", ",").replaceAll("\\r", ",")).getOrElse("")
      s"""
BEGIN:VEVENT
DTSTAMP:$now
UID:${event.date}.$uidPart.chilternquizleague.uk
DESCRIPTION:$text
SUMMARY:$text
DTSTART:${toUtc(event.date.atTime(event.time))}
DTEND:${toUtc(event.date.atTime(event.time `plus` event.duration))}
${venue.map(v => s"""LOCATION:${v.name}, $address""").getOrElse("")}
END:VEVENT
"""

    }
    private def duration(competition:Competition) = competition match {
      case l: LeagueCompetition => l.duration
      case c: CupCompetition => c.duration
      case _ => Duration.ZERO
    }
    private def formatFixture(fixture:Fixture, fixtures:Fixtures, competition: Competition, description:String) = async[Future]{

      val home = await(load(fixture.home))
      val away = await(load(fixture.away))
      val venue = if (fixture.venue.isDefined)
        Some(await(load(fixture.venue.get)))
      else
        None

      val text = s"${home.shortName} - ${away.shortName} : $description"

      val now = toUtc(LocalDateTime.now())
      val uidPart = home.shortName.replaceAll("\\s", "")
      val address = venue.map(_.address.replaceAll("\\n\\r", ",").replaceAll("\\n", ",").replaceAll("\\r", ",")).getOrElse("")
      s"""
BEGIN:VEVENT
DTSTAMP:$now
UID:${fixtures.date}.$uidPart.chilternquizleague.uk
DESCRIPTION:$text
SUMMARY:$text
DTSTART:${toUtc(fixtures.date.atTime(fixtures.start))}
DTEND:${toUtc(fixtures.date.atTime(fixtures.start `plus` duration(competition)))}
${venue.map(v => s"""LOCATION:${v.name}, $address""").getOrElse("")}
END:VEVENT
"""

    }
    private def formatBlankFixtures(fixtures:Fixtures, competition:Competition, description:String) = {

      val now = toUtc(LocalDateTime.now)
      val uidPart = (description + fixtures.description).replaceAll("\\s", "")
      s"""
BEGIN:VEVENT
DTSTAMP:$now
UID:${fixtures.date}.$uidPart.chilternquizleague.uk
DESCRIPTION:${description} ${fixtures.description}
SUMMARY:${description} ${fixtures.description}
DTSTART:${toUtc(fixtures.date.atTime(fixtures.start))}
DTEND:${toUtc(fixtures.date.atTime(fixtures.start `plus` duration(competition)))}
END:VEVENT
"""

    }

    private def makeICal(team:Team) = async[Future] {
      val header ="BEGIN:VCALENDAR\nVERSION:2.0\n"
      var builder = header

        def teamCompetitions(season:Season):Future[List[Competition & TeamCompetition]] = {
          async[Future] {
            await {
              list[Competition](season.key)
            }.flatMap(_ match {
              case c: TeamCompetition => List(c)
              case _ => List()
            }
            )
          }
        }

      def singletonCompetitions(season:Season):Future[List[SingletonCompetition]] = async[Future]{
        await{list[Competition](season.key)}.flatMap(_ match {
          case c:SingletonCompetition => List(c)
          case _ => List()
        }
        )
      }

        var teamFixtures:List[(Competition & TeamCompetition, Fixtures, List[Fixture])] = List()

        val t = team
        val gap = await{applicationContext()}
        val currentSeason = await(load(gap.currentSeason))
        val teamComps = await(teamCompetitions(currentSeason))

        val it = teamComps.iterator
        while(it.hasNext){
          val c = it.next()
          val fixtures = await{list[Fixtures](c.key)}
          val fixturesIt = fixtures.iterator
          while(fixturesIt.hasNext){
            val fixs = fixturesIt.next()
            val fixtureList = await{list[Fixture](fixs.key)}
            teamFixtures = ((c,fixs,fixtureList)) :: teamFixtures
          }

        }
        builder += s"X-WR-CALNAME:${gap.leagueName} calendar for ${t.name}\n"

        val entries = await{sequence(for{
          (c, fixtures, fixtureList) <- teamFixtures
          fixture <- fixtureList if(fixture.home.id == team.id || fixture.away.id == team.id)
        }
        yield{
          formatFixture(fixture, fixtures ,c,s"${c.name} ${fixtures.description}")
        })}
        entries.foreach(entry => builder += entry)

        val singletonComps = await{singletonCompetitions(currentSeason)}.iterator

        while(singletonComps.hasNext){
          val c = singletonComps.next()
          if(c.event.isDefined){
            val text = await{formatEvent(c.event.get, s"${gap.leagueName} ${c.name}")}
            builder += text
          }
        }

        for{
          (c, fixtures, fixtureList) <- teamFixtures if fixtureList.isEmpty
        }
        yield{
          builder += formatBlankFixtures(fixtures, c, c.name)
        }

        val calendarIt = currentSeason.calendar.iterator
        while(calendarIt.hasNext){
          val e = calendarIt.next()
          builder += await(formatEvent(e, e.description))
        }

      builder + ("END:VCALENDAR\n")
    }

    def toUtc(dateTime:LocalDateTime) = ZonedDateTime.of(dateTime,local).format(dateFormat)
}