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
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to Sanskrit Learning</h1>
        <p className="text-xl text-gray-600 mb-8">Begin your journey into the beautiful world of Sanskrit language</p>
        <Button 
          size="lg"
          onClick={() => navigate('/lessons/1.1')}
          className="bg-blue-600 hover:bg-blue-700"
        >
          Start Learning
        </Button>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-8">Why Learn Sanskrit?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium mb-4">Cultural Heritage</h3>
            <p className="text-gray-600">
              Sanskrit is the key to understanding ancient Indian literature, philosophy, 
              and cultural traditions spanning thousands of years. It opens doors to 
              timeless wisdom and profound knowledge systems.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium mb-4">Linguistic Benefits</h3>
            <p className="text-gray-600">
              Sanskrit's systematic grammar and rich vocabulary enhance understanding 
              of language structures and etymology. Its precise nature helps develop 
              analytical thinking.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium mb-4">Personal Growth</h3>
            <p className="text-gray-600">
              Learning Sanskrit develops cognitive skills, memory, and appreciation 
              for classical literature. It provides a unique perspective on human 
              thought and expression.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium mb-4">Modern Applications</h3>
            <p className="text-gray-600">
              Sanskrit's logical structure makes it relevant for computational 
              linguistics and artificial intelligence research. Its principles find 
              applications in modern language processing.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 