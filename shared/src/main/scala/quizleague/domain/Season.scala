package quizleague.domain

import io.circe.Codec

import java.time.Year

case class Season(
    id:String,
    startYear:Year,
    endYear:Year,
    text:Ref[Text],
    calendar:List[CalendarEvent],
    retired:Boolean = false
) extends Entity derives Codec.AsObject