import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProgressContext } from '../../App'
import { Button } from '../ui/button'

export default function LandingPage() {
  const navigate = useNavigate()
  const { progress } = useContext(ProgressContext)

  const courseOverview = [
    {
      title: "Introduction and Basic Concepts",
      description: "Learn basic Sanskrit vocabulary, pronouns, and everyday items.",
      topics: ["Introductions", "Demonstrative Pronouns", "Daily Use Items"]
    },
    {
      title: "Basic Communication",
      description: "Master essential communication skills and verb forms.",
      topics: ["Verb Forms", "Practice Talking", "Scene Descriptions"]
    },
    {
      title: "Numbers and Time",
      description: "Learn to count and tell time in Sanskrit.",
      topics: ["Numbers", "Time Expressions", "Practice"]
    }
  ]

  const calculateProgress = () => {
    const totalLessons = courseOverview.reduce(
      (acc, chapter) => acc + chapter.topics.length,
      0
    )
    const completedLessons = progress.completedLessons.size
    return Math.round((completedLessons / totalLessons) * 100)
  }

  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Sanskrit Learning
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Begin your journey into the beautiful world of Sanskrit language
        </p>
        {progress.completedLessons.size > 0 && (
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-semibold mb-4">Your Progress</h2>
            <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
              <div
                className="bg-blue-600 h-4 rounded-full"
                style={{ width: `${calculateProgress()}%` }}
              />
            </div>
            <p className="text-lg">
              {calculateProgress()}% Complete
            </p>
          </div>
        )}
        <div className="space-x-4">
          <Button 
            onClick={() => navigate('/lessons')}
            size="lg"
          >
            Start Learning
          </Button>
          {progress.completedLessons.size > 0 && (
            <Button 
              onClick={() => navigate('/practice')}
              variant="outline"
              size="lg"
            >
              Continue Practice
            </Button>
          )}
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {courseOverview.map((chapter, index) => (
          <div 
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-4">
              Chapter {index + 1}: {chapter.title}
            </h2>
            <p className="text-gray-600 mb-4">
              {chapter.description}
            </p>
            <ul className="space-y-2">
              {chapter.topics.map((topic, topicIndex) => {
                const isCompleted = progress.completedLessons.has(`${index + 1}.${topicIndex + 1}`)
                return (
                  <li 
                    key={topicIndex}
                    className="flex items-center space-x-2"
                  >
                    <span className={`w-4 h-4 rounded-full ${
                      isCompleted ? 'bg-green-500' : 'bg-gray-200'
                    }`} />
                    <span className={isCompleted ? 'text-gray-600' : ''}>
                      {topic}
                    </span>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6">
          Why Learn Sanskrit?
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-medium mb-2">
              Cultural Heritage
            </h3>
            <p className="text-gray-600">
              Sanskrit is the key to understanding ancient Indian literature,
              philosophy, and cultural traditions spanning thousands of years.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">
              Linguistic Benefits
            </h3>
            <p className="text-gray-600">
              Sanskrit's systematic grammar and rich vocabulary enhance
              understanding of language structures and etymology.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">
              Personal Growth
            </h3>
            <p className="text-gray-600">
              Learning Sanskrit develops cognitive skills, memory, and
              appreciation for classical literature.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">
              Modern Applications
            </h3>
            <p className="text-gray-600">
              Sanskrit's logical structure makes it relevant for computational
              linguistics and artificial intelligence research.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 