import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import styles from "./index.module.css";
import type { Event } from "./types";

type AnniversaryCalendarProps = {
  selectedDate?: Date;
  events?: Event[];
  onDateClick: (date: Date) => void;
  onEventClick: (id: string) => void;
};

const AnniversaryCalendar = ({
  selectedDate,
  events,
  onDateClick,
  onEventClick,
}: AnniversaryCalendarProps) => {
  return (
    <div className={styles.container}>
      <FullCalendar
        plugins={[interactionPlugin, dayGridPlugin]}
        initialView="dayGridMonth"
        initialDate={selectedDate || new Date()}
        viewClassNames={styles.calendar}
        events={events?.map((event: Event) => ({
          ...event,
          allDay: true,
          className: styles.events,
        }))}
        selectable={true}
        // editable={true}
        dateClick={(info) => {
          console.log("dateClick:", info);
          onDateClick(info.date);
        }}
        eventClick={(e) => {
          console.log("eventClick:", e.event);
          onEventClick(e.event.id);
        }}
        //  TODO: ホバーでツールチップ表示
      />
    </div>
  );
};

export default AnniversaryCalendar;
