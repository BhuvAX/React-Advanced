import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  isToday,
  startOfMonth,
  startOfWeek,
  subMonths,
} from "date-fns";
import React, { useEffect, useState } from "react";

export default function DatePicker({ value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    onChange(new Date());
  }, []);

  return (
    <div className="date-picker-container">
      <button
        className="date-picker-button"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        {value == null ? "Select a date" : format(value, "MMM do, y")}
      </button>
      {isOpen && <DatePickerModal value={value} onChange={onChange} />}
    </div>
  );
}

function DatePickerModal({ value, onChange }) {
  const [currentDate, setCurrentDate] = useState(value);

  const visibleDates = eachDayOfInterval({
    start: startOfWeek(startOfMonth(currentDate)),
    end: endOfWeek(endOfMonth(currentDate)),
  });

  function showPreviousMonth() {
    setCurrentDate((date) => {
      return subMonths(date, 1);
    });
  }

  function showNextMonth() {
    setCurrentDate((date) => {
      return addMonths(date, 1);
    });
  }

  return (
    <div className="date-picker">
      <div className="date-picker-header">
        <button
          onClick={showPreviousMonth}
          className="prev-month-button month-button"
        >
          &larr;
        </button>
        <div className="current-month">{format(currentDate, "LLL - y")}</div>
        <button
          onClick={showNextMonth}
          className="next-month-button month-button"
        >
          &rarr;
        </button>
      </div>
      <div className="date-picker-grid-header date-picker-grid">
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>
      <div className="date-picker-grid-dates date-picker-grid">
        {visibleDates.map((date) => (
          <button
            className={`date ${
              !isSameMonth(date, currentDate) && "date-picker-other-month-date"
            }  ${isSameDay(value, date) && "selected"} ${
              isToday(date) && "today"
            }`}
            key={date.toDateString()}
            onClick={() => {
              onChange(date);
            }}
          >
            {format(date, "dd")}
          </button>
        ))}
      </div>
    </div>
  );
}
