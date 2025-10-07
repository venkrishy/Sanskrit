import { useState, useEffect } from 'react'
import { getProgress, saveProgress } from '@/lib/cookies'

export default function ContinuePage() {
  const [progress, setProgress] = useState(null)
  const [mockLessons] = useState([
    { id: 'greetings-1', title: 'Basic Greetings', progress: 75, lastAccessed: '2 hours ago' },
    { id: 'pronouns-2', title: 'Personal Pronouns', progress: 45, lastAccessed: '1 day ago' },
    { id: 'numbers-1', title: 'Numbers 1-10', progress: 90, lastAccessed: '3 days ago' },
    { id: 'verbs-1', title: 'Present Tense Verbs', progress: 30, lastAccessed: '1 week ago' }
  ])

  useEffect(() => {
    const savedProgress = getProgress()
    setProgress(savedProgress)
  }, [])

  const handleContinueLesson = (lessonId) => {
    // Save progress when user continues a lesson
    saveProgress(lessonId, {
      completed: false,
      score: 0,
      timeSpent: 0,
      lastPosition: 0
    })
    setProgress({ lessonId, timestamp: new Date().toISOString() })
    
    // In a real app, this would navigate to the lesson
    alert(`Continuing lesson: ${lessonId}`)
  }

  const handleStartNew = () => {
    // Clear any existing progress and start fresh
    setProgress(null)
    alert('Starting fresh! Choose a lesson to begin.')
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Continue where I left off</h1>
          <p className="text-gray-600 mt-2">Pick up your Sanskrit learning journey right where you left off</p>
        </div>
        {progress && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center gap-2 text-blue-700">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Last lesson: {progress.lessonId}</span>
            </div>
            <p className="text-sm text-blue-600 mt-1">
              Last accessed: {new Date(progress.timestamp).toLocaleString()}
            </p>
          </div>
        )}
      </div>

      {/* Recent Progress */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockLessons.map((lesson) => (
          <div key={lesson.id} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-semibold text-gray-900">{lesson.title}</h3>
                <p className="text-sm text-gray-500 mt-1">Last accessed: {lesson.lastAccessed}</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-blue-600">{lesson.progress}%</div>
                <div className="text-xs text-gray-500">Complete</div>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                <span>Progress</span>
                <span>{lesson.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${lesson.progress}%` }}
                ></div>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => handleContinueLesson(lesson.id)}
                className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-200"
              >
                Continue
              </button>
              <button className="px-3 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-50 transition-colors duration-200">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Start Fresh Option */}
      <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-gray-200 p-8 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Start Fresh</h3>
          <p className="text-gray-600 mb-4">Begin a new learning journey or explore different topics</p>
          <button
            onClick={handleStartNew}
            className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200"
          >
            Browse All Lessons
          </button>
        </div>
      </div>
    </div>
  )
}
