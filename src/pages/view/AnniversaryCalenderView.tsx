import { useState } from "react";
import AnniversaryCalendar from "@/components/calender/AnniversaryCalendar";
import type { Event } from "@/components/calender/types";

type Props = {
  events: Event[];
  setEvents: (events: Event[]) => void;
};

const AnniversaryCalendarView = ({ events, setEvents }: Props) => {
  // TODO: FullCalenderのCustomHooks
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    // TODO: イベント追加用ダイアログを表示
    console.log(date);
    setEvents([
      ...events,
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
      <h1>Anniversary Calendar</h1>
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
