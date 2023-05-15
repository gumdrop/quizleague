package quizleague.util

import java.time.{ZoneId, ZonedDateTime}

def londonTime = ZonedDateTime.now(ZoneId.of("Europe/London")).toLocalDateTime