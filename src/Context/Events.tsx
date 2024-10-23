import { ReactNode, createContext, useEffect, useState } from "react"
import { EVENT_COLORS } from "./useEvents"
import { UnionOmit } from "../utils/types"

export type Event = {
  id: string
  name: string
  color: (typeof EVENT_COLORS)[number]
  date: Date
} & (
  | {
      allDay: false
      startTime: string
      endTime: string
    }
  | {
      allDay: true
      startTime?: never
      endTime?: never
    }
)

type EventsContextProps = {
  events: Event[]
  addEvent: (event: UnionOmit<Event, "id">) => void
  editEvent: (id: string, eventDetails: Event) => void
  deleteEvent: (id: string) => void
}

export const EventsContext = createContext<EventsContextProps | null>(null)

type EventProviderProps = {
  children: ReactNode
}

export default function EventsProvider({ children }: EventProviderProps) {
  const [events, setEvents] = useState<Event[]>(() => {
    const eventsJson = localStorage.getItem("EVENTS")
    if (eventsJson == null) return []

    return (JSON.parse(eventsJson) as Event[]).map((event) => {
      if (event.date instanceof Date) return event
      return { ...event, date: new Date(event.date) }
    })
  })

  useEffect(() => {
    localStorage.setItem("EVENTS", JSON.stringify(events))
  }, [events])

  function addEvent(eventData: UnionOmit<Event, "id">) {
    setEvents((e) => [...e, { ...eventData, id: crypto.randomUUID() }])
  }

  function editEvent(id: string, eventDetails: Event) {
    setEvents((e) => {
      return e.map((event) => {
        return event.id === id ? { id, ...eventDetails } : event
      })
    })
  }

  function deleteEvent(id: string) {
    setEvents((e) => e.filter((event) => event.id !== id))
  }

  return (
    <EventsContext.Provider
      value={{ events, addEvent, editEvent, deleteEvent }}
    >
      {children}
    </EventsContext.Provider>
  )
}
