import './App.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import CalendarPage from './pages/CalendarPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* トップページ */}
        <Route path="/" element={
          <div className="p-4 text-xl font-bold">
            ようこそ<br />
            <Link to="/calendar" className="mt-4 inline-block text-blue-600 underline">カレンダーページへ</Link>
          </div>
        } />
        {/* カレンダーページ */}
        <Route path="/calendar" element={<CalendarPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
