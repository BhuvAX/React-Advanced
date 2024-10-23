import { Fragment, useState } from "react"
import { Event, EventsContext } from "../context/Events"
import EventForm from "./EventForm"
import { useEvents } from "../context/useEvents"
import { cc } from "../utils/cc"
import { formatDate } from "../utils/formatDate"
import { parse } from "date-fns"

type EventsListProps = {
  events: Event[]
}

export default function EventsList({ events }: EventsListProps) {
  const [isEditFormOpen, setIsEditFormOpen] = useState(false)

  const { editEvent, deleteEvent } = useEvents()

  return (
    <div className="events">
      {events.map((event) => (
        <Fragment key={event.id}>
          <button
            onClick={() => setIsEditFormOpen(true)}
            key={event.id}
            className={cc(
              "event",
              event.color,
              event.allDay && "all-day-event"
            )}
          >
            {event.allDay ? (
              <div className="event-name">{event.name}</div>
            ) : (
              <>
                <div className={`color-dot ${event.color}`}></div>
                <div className="event-time">
                  {formatDate(parse(event.startTime, "HH:mm", event.date), {
                    timeStyle: "short",
                  })}
                </div>
                <div className="event-name">{event.name}</div>
              </>
            )}
          </button>
          <EventForm
            event={event}
            day={event.date}
            onSubmit={(e) => editEvent(event.id, e)}
            onDelete={() => deleteEvent(event.id)}
            isOpen={isEditFormOpen}
            onClose={() => setIsEditFormOpen(false)}
          />
        </Fragment>
      ))}
    </div>
  )
}
