import { useState } from "react";
import AnniversaryCalendar from "@/components/calender/AnniversaryCalendar";
import type { Event } from "@/components/calender/types";
import { Dialog } from "@/components/dialog/Dialog";
import { Typography } from "@/components/typography/Typography";

type Props = {
  events: Event[];
  setEvents: (events: Event[]) => void;
};

const AnniversaryCalendarView = ({ events, setEvents }: Props) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [showDialog, setShowDialog] = useState(false);

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    setShowDialog(true);
  };

  const handleEventClick = (id: string) => {
    alert(`イベントID: ${id} がクリックされました`);
  };

  const handleDialogClose = () => {
    setShowDialog(false);
  };

  const handleDialogConfirm = () => {
    setShowDialog(false);
  };

  return (
    <div>
      <Typography size="xl" bold>
        Anniversary Calendar
      </Typography>
      <AnniversaryCalendar
        selectedDate={selectedDate}
        events={events}
        onDateClick={handleDateClick}
        onEventClick={handleEventClick}
      />
      {showDialog && selectedDate && (
        <Dialog
          title="イベント追加"
          date={selectedDate.toLocaleDateString()}
          contents="この日にイベントを追加します"
          onClose={handleDialogClose}
          onConfirm={handleDialogConfirm}
        />
      )}
    </div>
  );
};

export default AnniversaryCalendarView;
