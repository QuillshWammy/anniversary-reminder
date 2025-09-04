import { useState } from "react";
import AnniversaryCalendarView from "./view/AnniversaryCalenderView";
import type { Event } from "@/components/calender/types";

const initialEvents: Event[] = [
  { id: "1", title: "誕生日", date: new Date("2025-09-01") },
  { id: "2", title: "記念日", date: new Date("2025-09-10") },
];

const CalendarPage = () => {
  // TODO: redux 導入
  const [events, setEvents] = useState<Event[]>(initialEvents);

  return (
    <div className="p-4">
      <AnniversaryCalendarView events={events} setEvents={setEvents} />
    </div>
  );
};

export default CalendarPage;
