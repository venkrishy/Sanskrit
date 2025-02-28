import { Routes, Route } from 'react-router-dom'
import { createContext, useState } from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/pages/LandingPage'
import Lessons from './components/pages/Lessons'
import Practice from './components/pages/Practice'
import Quiz from './components/pages/Quiz'
import Settings from './components/Settings'

export const ProgressContext = createContext()

function App() {
  const [progress, setProgress] = useState({
    currentChapter: 1,
    currentSection: 1,
    completedLessons: new Set(),
    quizScores: {},
  })

  return (
    <ProgressContext.Provider value={{ progress, setProgress }}>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/lessons/*" element={<Lessons />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </ProgressContext.Provider>
  )
}

export default App 