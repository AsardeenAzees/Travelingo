import { useState } from "react";
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  addMonths,
  subMonths,
  format,
  isSameMonth,
  isSameDay
} from "date-fns";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const today = new Date();

  const renderHeader = () => (
    <div className="flex items-center justify-between mb-4">
      <div className="text-[22px] font-semibold">
        {format(currentDate, "MMMM yyyy")}
      </div>
      <div className="flex space-x-2 text-xl text-gray-400">
        <button
          onClick={() => setCurrentDate(subMonths(currentDate, 1))}
          className="w-[42px] h-[42px] rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 hover:text-black transition"
        >
          <FiChevronLeft />
        </button>
        <button
          onClick={() => setCurrentDate(addMonths(currentDate, 1))}
          className="w-[42px] h-[42px] rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 hover:text-black transition"
        >
          <FiChevronRight />
        </button>
      </div>

    </div>
  );

  const renderDays = () => {
    const days = [];
    const dateFormat = "EEE";
    const startDate = startOfWeek(currentDate);

    for (let i = 0; i < 7; i++) {
      const day = format(addDays(startDate, i), dateFormat);
      days.push(
        <div key={i} className="text-center font-medium text-gray-500">
          {day}
        </div>
      );
    }

    return <div className="grid grid-cols-7 mb-1">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const dateFormat = "d";
    const rows = [];
    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const cloneDay = day;
        const isToday = isSameDay(day, today);
        const isCurrentMonth = isSameMonth(day, monthStart);

        days.push(
          <div
            key={cloneDay}
            className={`flex items-center justify-center w-10 h-10 mx-auto text-sm rounded-full transition
              ${isCurrentMonth ? "text-gray-800" : "text-gray-300"}
              ${isToday ? "bg-green-500 text-white" : "hover:bg-gray-200 cursor-pointer"}
            `}
          >
            {format(day, dateFormat)}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div key={day} className="grid grid-cols-7">
          {days}
        </div>
      );
      days = [];
    }

    return <div>{rows}</div>;
  };

  return (
    <div className="p-4 sm:p-6 w-full max-w-full sm:max-w-md mx-auto">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  );
}
