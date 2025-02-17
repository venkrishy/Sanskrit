import { Button } from "@/components/ui/button"
import { Routes, Route, Link } from "react-router-dom"
import Navbar from "@/components/Navbar"
import LandingPage from "@/components/pages/LandingPage"
import Lessons from "@/components/pages/Lessons"
import Quiz from "@/components/pages/Quiz"
import Practice from "@/components/pages/Practice"

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/lessons/*" element={<Lessons />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/practice" element={<Practice />} />
        </Routes>
      </main>
    </div>
  )
}

export default App 