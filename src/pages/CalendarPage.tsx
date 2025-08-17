import AnniversaryCalendar from "@/components/calender/AnniversaryCalendar";
import { Card } from "@/components/ui/Card";
import { Dialog } from "@/components/ui/Dialog";
import { useState } from "react";

type Event = {
  date: Date;
  title: string;
  category?: string;
};

export default function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showDialog, setShowDialog] = useState(false);
  const [events, setEvents] = useState<Event[]>([]);

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    setShowDialog(true);
  };

  const addEvent = (title: string, category?: string) => {
    if (!selectedDate) return;
    setEvents([...events, { date: selectedDate, title, category }]);
    setShowDialog(false);
  };

  // 選択日付のイベントを取得
  const eventsForSelectedDate = events.filter(
    (e) => selectedDate && e.date.toDateString() === selectedDate.toDateString()
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">カレンダー</h1>
      <AnniversaryCalendar
        selectedDate={selectedDate}
        onDateClick={handleDateClick}
      />

      <h2 className="text-xl mt-6">イベントリスト</h2>
      {events.map((e, i) => (
        <Card key={i} className="mb-2">
          <div>
            <strong>{e.title}</strong> - {e.date.toLocaleDateString()}{" "}
            {e.category && `(${e.category})`}
          </div>
        </Card>
      ))}

      <Dialog open={showDialog} onClose={() => setShowDialog(false)}>
        <EventForm onSubmit={addEvent} date={selectedDate} />
      </Dialog>
    </div>
  );
}

// シンプルなイベントフォーム
function EventForm({
  onSubmit,
  date,
}: {
  onSubmit: (title: string, category?: string) => void;
  date: Date | null;
}) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  if (!date) return null;

  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-lg font-bold mb-2">
        {date.toLocaleDateString()} のイベント追加
      </h3>
      <input
        type="text"
        placeholder="イベント名"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-1 rounded"
      />
      <input
        type="text"
        placeholder="カテゴリ (任意)"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-1 rounded"
      />
      <button
        onClick={() => {
          if (title.trim()) onSubmit(title, category.trim() || undefined);
        }}
        className="mt-2 bg-blue-500 text-white p-2 rounded"
      >
        追加
      </button>
    </div>
  );
}
