package quizleague.util

import java.time.{ZoneId, ZonedDateTime}

def londonTime = londonZonedTime.toLocalDateTime
def londonZonedTime = ZonedDateTime.now(london)

val london = ZoneId.of("Europe/London")