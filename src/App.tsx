import "@/global.css";
import { useEffect } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import CalendarPage from "@/pages/CalendarPage";
import { db } from "./db";

function App() {
  // debug
  useEffect(() => {
    db.events.toArray().then(events => {
      console.log("DB Events:", events);
    });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        {/* トップページ */}
        <Route
          path="/"
          element={
            <div className="p-4 text-xl text-primary text-bold">
              ようこそ
              <br />
              <Link
                to="/calendar"
                className="mt-4 inline-block text-blue-600 underline font-bold"
              >
                カレンダーページへ
              </Link>
            </div>
          }
        />
        {/* カレンダーページ */}
        <Route path="/calendar" element={<CalendarPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
