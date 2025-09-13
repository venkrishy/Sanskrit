import { Routes, Route } from 'react-router-dom'
import { createContext, useState } from 'react'
import Navbar from './components/Navbar'
import Layout from './components/Layout'
import LandingPage from './components/pages/LandingPage'
import CurriculumOverview from './components/pages/CurriculumOverview'
import CategoryPage from './components/pages/CategoryPage'
import LessonPage from './components/pages/LessonPage'
import Lessons from './components/pages/Lessons'
import Practice from './components/pages/Practice'
import Quiz from './components/pages/Quiz'
import Settings from './components/Settings'
import './styles/sanskrit.css'

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
      <div className="min-h-screen bg-background">
        <Navbar />
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/curriculum" element={<CurriculumOverview />} />
            <Route path="/curriculum/:categoryId" element={<CategoryPage />} />
            <Route path="/curriculum/:categoryId/:lessonId" element={<LessonPage />} />
            <Route path="/lessons/*" element={<Lessons />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Layout>
      </div>
    </ProgressContext.Provider>
  )
}

export default App 