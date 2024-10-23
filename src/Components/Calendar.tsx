import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  startOfMonth,
  startOfWeek,
  subMonths,
} from "date-fns";
import { useMemo, useState } from "react";
import CalendarDay from "./CalendarDay";
import { useEvents } from "../context/useEvents";
import { formatDate } from "../utils/formatDate";

export default function Calendar() {
  // Set the default month to current ongoing month
  const [currentMonth, setCurrentMonth] = useState(new Date());

  /* Calculate days to be shown in current month on calendar based on start of first week and end of last week */
  const days = useMemo(() => {
    const firstWeekStart = startOfWeek(startOfMonth(currentMonth));
    const lastWeekEnd = endOfWeek(endOfMonth(currentMonth));
    return eachDayOfInterval({ start: firstWeekStart, end: lastWeekEnd });
  }, [currentMonth]);

  /* Fetch the events using the custom hook, events are stored and managed via context in order to be access anywhere in the project  */
  const { events } = useEvents();

  return (
    <>
      <div className="calendar">
        <div className="header">
          <button
            className="btn"
            onClick={() => {
              setCurrentMonth(new Date());
            }}
          >
            Today
          </button>
          <div>
            <button
              className="month-change-btn"
              onClick={() => {
                setCurrentMonth((month) => subMonths(month, 1));
              }}
            >
              &lt;
            </button>
            <button
              className="month-change-btn"
              onClick={() => {
                setCurrentMonth((month) => addMonths(month, 1));
              }}
            >
              &gt;
            </button>
          </div>
          <span className="month-title">
            {formatDate(currentMonth, { month: "long", year: "numeric" })}
          </span>
        </div>
        <div className="days">
          {days.map((day, index) => (
            <CalendarDay
              key={day.toDateString()}
              day={day}
              events={events.filter((event) => isSameDay(day, event.date))}
              currentMonth={currentMonth}
              showWeekDays={index < 7}
            />
          ))}
        </div>
      </div>
    </>
  );
}
