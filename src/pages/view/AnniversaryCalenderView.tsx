import AnniversaryCalendar from "@/components/calender/AnniversaryCalendar";
import type { Event } from "@/components/calender/types";
import { useState } from "react";

const initialEvents: Event[] = [
  { id: "1", title: "誕生日", date: new Date("2025-09-01") },
  { id: "2", title: "記念日", date: new Date("2025-09-10") },
];

const AnniversaryCalendarView = () => {
  // TODO: FullCalenderのCustomHooks
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [events, setEvents] = useState<Event[]>(initialEvents);

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    // TODO: イベント追加用ダイアログを表示
    setEvents((prev) => [
      ...prev,
      {
        id: `${Date.now()}`,
        title: `New Event (${date.toLocaleDateString()})`,
        date,
      },
    ]);
    console.log(events);
  };

  const handleEventClick = (id: string) => {
    alert(`イベントID: ${id} がクリックされました`);
  };

  return (
    <div>
      <h1
        style={{
          fontFamily: "var(--font-title)",
          fontSize: "var(--font-size-lg)",
          fontWeight: "bold",
        }}
      >
        Anniversary Calendar
      </h1>
      <AnniversaryCalendar
        selectedDate={selectedDate}
        events={events}
        onDateClick={handleDateClick}
        onEventClick={handleEventClick}
      />
    </div>
  );
};

export default AnniversaryCalendarView;
