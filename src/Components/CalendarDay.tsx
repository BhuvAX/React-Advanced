import { endOfDay, format, isBefore, isSameMonth, isToday } from "date-fns"
import { useMemo, useState } from "react"
import EventForm from "./EventForm"
import { Event } from "../context/Events"
import EventsList from "./EventsList"
import { useEvents } from "../context/useEvents"
import { formatDate } from "../utils/formatDate"
import { cc } from "../utils/cc"

type CalendarDayProps = {
  day: Date
  currentMonth: Date
  showWeekDays: boolean
  events: Event[]
}

export default function CalendarDay({
  day,
  currentMonth,
  showWeekDays,
  events,
}: CalendarDayProps) {
  const [isAddFormOpen, setIsAddFormOpen] = useState(false)

  const { addEvent } = useEvents()

  const sortedEvents = useMemo(() => {
    const timeToNumber = (time: string) => parseFloat(time.replace(":", ". "))

    return [...events].sort((a, b) => {
      if (a.allDay && b.allDay) {
        return 0
      } else if (a.allDay) {
        return -1
      } else if (b.allDay) {
        return 1
      } else {
        return timeToNumber(a.startTime) - timeToNumber(b.startTime)
      }
    })
  }, [events])

  return (
    <div
      className={cc(
        "day",
        !isSameMonth(day, currentMonth) && "non-month-day",
        isBefore(endOfDay(day), currentMonth) && "old-month-day"
      )}
    >
      <div className="day-header">
        {showWeekDays && (
          <div className="week-name">
            {formatDate(day, { weekday: "short" })}
          </div>
        )}
        <div className={cc("day-number", isToday(day) && "today")}>
          {formatDate(day, { day: "numeric" })}
        </div>
        <button
          onClick={() => setIsAddFormOpen(true)}
          className="add-event-btn"
        >
          +
        </button>
        <EventForm
          day={day}
          onSubmit={addEvent}
          isOpen={isAddFormOpen}
          onClose={() => setIsAddFormOpen(false)}
        />
      </div>
      <EventsList events={events} />
    </div>
  )
}
