import dayGridPlugin from "@fullcalendar/daygrid";
import FullCalendar from "@fullcalendar/react";
import styles from "./index.module.css";

type AnniversaryCalendarProps = {
  selectedDate: Date | null;
  onDateClick: (date: Date) => void;
};

const AnniversaryCalendar = ({
  selectedDate,
  onDateClick,
}: AnniversaryCalendarProps) => {
  return (
    <div className={styles.container}>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        viewClassNames={styles.calendar}
        events={[
          {
            title: "テスト記念日",
            date: "2025-08-25",
            className: styles.events,
          },
        ]}
      />
    </div>
  );
};

export default AnniversaryCalendar;
