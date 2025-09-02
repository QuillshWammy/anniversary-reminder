import "@/global.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import CalendarPage from "@/pages/CalendarPage";

function App() {
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
