import { Link } from 'react-router-dom';
import { curriculumData } from '../../data/curriculum';

const CurriculumOverview = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 sanskrit-text">
              Sanskrit Curriculum
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive Sanskrit learning curriculum organized by topics. 
              Each section contains carefully structured lessons to help you master Sanskrit step by step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(curriculumData).map(([categoryId, category]) => (
              <div key={categoryId} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3 sanskrit-text">
                    {category.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {category.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="text-sm text-gray-500 mb-2">
                      {category.lessons.length} lessons
                    </div>
                    <div className="space-y-1">
                      {category.lessons.slice(0, 3).map((lesson) => (
                        <div key={lesson.id} className="text-sm text-gray-700">
                          • {lesson.title}
                        </div>
                      ))}
                      {category.lessons.length > 3 && (
                        <div className="text-sm text-gray-500">
                          +{category.lessons.length - 3} more lessons
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <Link
                    to={`/curriculum/${categoryId}`}
                    className="inline-flex items-center px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
                  >
                    Explore Category
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 sanskrit-text">
              Getting Started
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Recommended Learning Path
                </h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-600">
                  <li>Start with <strong>Foundation</strong> - Learn basic greetings and introductions</li>
                  <li>Move to <strong>Pronouns</strong> - Master pronoun forms and usage</li>
                  <li>Practice <strong>Numbers</strong> - Learn counting and number expressions</li>
                  <li>Study <strong>Verbs</strong> - Understand verb conjugations</li>
                  <li>Expand <strong>Vocabulary</strong> - Build your word knowledge</li>
                  <li>Practice <strong>Conversation</strong> - Apply what you've learned</li>
                </ol>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Tips for Success
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Practice regularly, even if just for 15-20 minutes daily</li>
                  <li>Focus on pronunciation and Devanagari script</li>
                  <li>Complete exercises and review previous lessons</li>
                  <li>Use the transliteration to help with pronunciation</li>
                  <li>Don't rush - take time to understand each concept</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurriculumOverview;
