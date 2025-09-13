import { useContext, useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { ProgressContext } from '../../App'
import { Button } from '../ui/button'
import { curriculumData } from '../../data/curriculum'

export default function LandingPage() {
  const navigate = useNavigate()
  const { progress } = useContext(ProgressContext)
  const [tableOfContents, setTableOfContents] = useState('')

  useEffect(() => {
    // Load table of contents from the reference file
    const loadTableOfContents = async () => {
      try {
        const response = await fetch('/curriculum/reference/table_of_contents.md')
        if (response.ok) {
          const content = await response.text()
          setTableOfContents(content)
        }
      } catch (error) {
        console.log('Table of contents not available, using fallback')
        setTableOfContents(`
# अनुक्रमणिका (Table of Contents)

## Foundation
- Basic Conversations
- Greetings  
- Introductions

## Pronouns
- Basic Pronouns
- Demonstrative Pronouns
- Interrogative Pronouns
- Pronoun Transformations

## Time
- Daily Routines
- Days and Dates
- Time Expressions

## Verbs
- Present Tense Forms

## Grammar
- Plural Forms
- Plural Forms Advanced

## Numbers
- Basic Numbers
- Counting Questions
- Number Practice

## Vocabulary
- Household Objects
- Kitchen Utensils
- Workplace Vocabulary

## Directions
- Spatial Relationships
- Travel Vocabulary

## Conversation
- Basic Dialogues
- Complex Dialogues
- Family Conversations

## Advanced
- Advanced Exercises
- Grammar Mastery
- Reading Comprehension
- Writing Practice
        `)
      }
    }
    loadTableOfContents()
  }, [])

  const totalLessons = Object.values(curriculumData).reduce(
    (acc, category) => acc + category.lessons.length,
    0
  )
  const completedLessons = progress.completedLessons.size
  const progressPercentage = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto py-12 px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 sanskrit-text text-gray-900">
            संस्कृतम् (Sanskrit Learning)
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Begin your journey into the beautiful world of Sanskrit language. 
            Explore our comprehensive curriculum designed to take you from beginner to advanced levels.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => navigate('/curriculum')}
              className="bg-orange-500 hover:bg-orange-600 text-white"
            >
              Explore Curriculum
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => navigate('/curriculum/foundation/basic_conversations')}
            >
              Start Learning
            </Button>
          </div>
        </div>

        {/* Progress Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Your Progress</h2>
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-600">Completed Lessons</span>
            <span className="font-semibold">{completedLessons} / {totalLessons}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-orange-500 h-3 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-500 mt-2">{progressPercentage}% Complete</p>
        </div>

        {/* Quick Access to Categories */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-8 text-gray-900 sanskrit-text">Quick Access</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {Object.entries(curriculumData).map(([categoryId, category]) => (
              <Link
                key={categoryId}
                to={`/curriculum/${categoryId}`}
                className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow text-center"
              >
                <h3 className="font-semibold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-sm text-gray-600">{category.lessons.length} lessons</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Table of Contents */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-gray-900 sanskrit-text">
            अनुक्रमणिका (Table of Contents)
          </h2>
          {tableOfContents ? (
            <div className="prose prose-lg max-w-none">
              <pre className="whitespace-pre-wrap font-sans text-sm text-gray-700 leading-relaxed">
                {tableOfContents}
              </pre>
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading table of contents...</p>
            </div>
          )}
        </div>

        {/* Why Learn Sanskrit Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-8 text-gray-900 sanskrit-text">Why Learn Sanskrit?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-4 text-gray-900">Cultural Heritage</h3>
              <p className="text-gray-600">
                Sanskrit is the key to understanding ancient Indian literature, philosophy, 
                and cultural traditions spanning thousands of years. It opens doors to 
                timeless wisdom and profound knowledge systems.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-4 text-gray-900">Linguistic Benefits</h3>
              <p className="text-gray-600">
                Sanskrit's systematic grammar and rich vocabulary enhance understanding 
                of language structures and etymology. Its precise nature helps develop 
                analytical thinking.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-4 text-gray-900">Personal Growth</h3>
              <p className="text-gray-600">
                Learning Sanskrit develops cognitive skills, memory, and appreciation 
                for classical literature. It provides a unique perspective on human 
                thought and expression.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-4 text-gray-900">Modern Applications</h3>
              <p className="text-gray-600">
                Sanskrit's logical structure makes it relevant for computational 
                linguistics and artificial intelligence research. Its principles find 
                applications in modern language processing.
              </p>
            </div>
          </div>
        </div>

        {/* Getting Started Guide */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg shadow-md p-8 text-white">
          <h2 className="text-3xl font-semibold mb-4">Ready to Begin?</h2>
          <p className="text-xl mb-6 opacity-90">
            Start with our Foundation section to learn basic greetings and introductions, 
            then progress through our structured curriculum at your own pace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg"
              variant="secondary"
              onClick={() => navigate('/curriculum/foundation')}
              className="bg-white text-orange-600 hover:bg-gray-100"
            >
              Start with Foundation
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => navigate('/curriculum')}
              className="border-white text-white hover:bg-white hover:text-orange-600"
            >
              Browse All Categories
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
} 