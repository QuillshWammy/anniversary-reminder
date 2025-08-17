import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
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
    <div className={styles.calendarWrapper}>
      <Calendar
        onClickDay={onDateClick}
        value={selectedDate ?? new Date()}
        className={styles.reactCalendar}
      />
    </div>
  );
};

export default AnniversaryCalendar;
