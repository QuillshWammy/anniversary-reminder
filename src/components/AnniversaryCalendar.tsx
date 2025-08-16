import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type AnniversaryCalendarProps = {
  selectedDate: Date | null;
  onDateClick: (date: Date) => void;
};

const AnniversaryCalendar = ({
  selectedDate,
  onDateClick,
}: AnniversaryCalendarProps) => {
  return (
    <div className="max-w-lg mx-auto">
      <Calendar onClickDay={onDateClick} value={selectedDate ?? new Date()} />
    </div>
  );
};

export default AnniversaryCalendar;
