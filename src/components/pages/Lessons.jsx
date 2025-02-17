import { useContext, useState } from 'react'
import { Routes, Route, useNavigate, useParams } from 'react-router-dom'
import { ProgressContext } from '../../App'
import { Button } from '../ui/button'

const chapters = [
  {
    id: 1,
    title: "Introduction and Basic Concepts",
    sections: [
      { id: 1, title: "Introductions (परिचयः)", image: "/images/1.1 Introductions.jpeg" },
      { id: 2, title: "Demonstrative Pronouns", image: "/images/1.2.jpeg" },
      { id: 3, title: "Daily Use Items (नित्योपयोगिनि वस्तूनि)", image: "/images/1.3 Daily Use Items.jpeg" },
      { id: 4, title: "List Items", image: "/images/1.4 List Items shown in picture.jpeg" },
    ]
  },
  {
    id: 2,
    title: "Basic Communication",
    sections: [
      { id: 1, title: "Verb Forms", image: "/images/2.1 Verb.jpeg" },
      { id: 2, title: "Practice Talking", image: "/images/2.2 Practice Talking.jpeg" },
      { id: 3, title: "Describe the Scene", image: "/images/2.3 Describe the scene.jpeg" }
    ]
  },
  {
    id: 3,
    title: "Numbers and Time",
    sections: [
      { id: 1, title: "Numbers", image: "/images/3.1 Numbers.jpeg" },
      { id: 2, title: "Numbers Practice", image: "/images/3.2 Numbers Practice.jpeg" },
      { id: 3, title: "Time", image: "/images/3.3 Time.jpeg" }
    ]
  }
]

function ChapterList() {
  const navigate = useNavigate()
  const { progress } = useContext(ProgressContext)

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Sanskrit Lessons</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {chapters.map((chapter) => (
          <div 
            key={chapter.id}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-4">
              Chapter {chapter.id}: {chapter.title}
            </h2>
            <div className="space-y-2">
              {chapter.sections.map((section) => {
                const isCompleted = progress.completedLessons.has(`${chapter.id}.${section.id}`)
                const isCurrent = progress.currentChapter === chapter.id && progress.currentSection === section.id

                return (
                  <Button
                    key={section.id}
                    variant={isCompleted ? "success" : isCurrent ? "default" : "secondary"}
                    className="w-full text-left justify-start"
                    onClick={() => navigate(`/lessons/${chapter.id}/${section.id}`)}
                  >
                    {section.id}. {section.title}
                  </Button>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function LessonContent() {
  const navigate = useNavigate()
  const { progress, setProgress } = useContext(ProgressContext)
  const { chapter, section } = useParams()
  const currentChapter = chapters.find(c => c.id === parseInt(chapter))
  const currentSection = currentChapter?.sections.find(s => s.id === parseInt(section))

  if (!currentChapter || !currentSection) {
    return <div>Lesson not found</div>
  }

  const markComplete = () => {
    setProgress(prev => ({
      ...prev,
      completedLessons: new Set([...prev.completedLessons, `${chapter}.${section}`])
    }))
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">
          Chapter {chapter}: {currentChapter.title}
        </h1>
        <Button onClick={() => navigate('/lessons')}>Back to Chapters</Button>
      </div>
      
      <h2 className="text-2xl font-semibold">
        Section {section}: {currentSection.title}
      </h2>

      {currentSection.image && (
        <div className="my-6">
          <img 
            src={currentSection.image} 
            alt={currentSection.title}
            className="max-w-full rounded-lg shadow-md"
          />
        </div>
      )}

      <div className="mt-8 flex justify-between">
        <Button
          onClick={() => navigate('/practice')}
          variant="outline"
        >
          Practice this lesson
        </Button>
        <Button onClick={markComplete}>
          Mark as Complete
        </Button>
      </div>
    </div>
  )
}

export default function Lessons() {
  return (
    <Routes>
      <Route path="/" element={<ChapterList />} />
      <Route path="/:chapter/:section" element={<LessonContent />} />
    </Routes>
  )
} 