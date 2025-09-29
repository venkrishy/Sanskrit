import TitleCard from '@/components/cards/TitleCard'

export default function HomePage() {
  return (
    <div className="space-y-6">
      {/* Welcome Title Card */}
      <TitleCard 
        title="Welcome to Sanskrit Learning"
        subtitle="Begin your journey into the beautiful world of Sanskrit language"
        level="Beginner"
        progress={0}
      />
      
      {/* Course Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-blue-600">01 - Foundational</h2>
          <p className="text-gray-600 mb-4">Basic conversations, greetings, and introductions</p>
          <a href="/01-foundational" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
            Start Learning 
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-green-600">02 - Pronouns</h2>
          <p className="text-gray-600 mb-4">Pronoun forms and usage in Sanskrit</p>
          <a href="/02-pronouns" className="inline-flex items-center text-green-600 hover:text-green-800 font-medium">
            Start Learning 
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-purple-600">03 - Numbers</h2>
          <p className="text-gray-600 mb-4">Number systems and counting</p>
          <a href="/03-numbers" className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium">
            Start Learning 
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-orange-600">04 - Vocabulary</h2>
          <p className="text-gray-600 mb-4">Thematic vocabulary collections</p>
          <a href="/04-vocabulary" className="inline-flex items-center text-orange-600 hover:text-orange-800 font-medium">
            Start Learning 
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-red-600">05 - Grammar</h2>
          <p className="text-gray-600 mb-4">Advanced grammatical concepts</p>
          <a href="/05-grammar" className="inline-flex items-center text-red-600 hover:text-red-800 font-medium">
            Start Learning 
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-indigo-600">06 - Time and Calendar</h2>
          <p className="text-gray-600 mb-4">Time expressions and temporal concepts</p>
          <a href="/06-time_and_calendar" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium">
            Start Learning 
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-pink-600">07 - Verbs</h2>
          <p className="text-gray-600 mb-4">Verb forms and conjugations</p>
          <a href="/07-verbs" className="inline-flex items-center text-pink-600 hover:text-pink-800 font-medium">
            Start Learning 
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-teal-600">08 - Directions and Locations</h2>
          <p className="text-gray-600 mb-4">Spatial relationships and directions</p>
          <a href="/08-directions_and_locations" className="inline-flex items-center text-teal-600 hover:text-teal-800 font-medium">
            Start Learning 
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-cyan-600">09 - Conversation</h2>
          <p className="text-gray-600 mb-4">Dialogue patterns and conversation practice</p>
          <a href="/09-conversation" className="inline-flex items-center text-cyan-600 hover:text-cyan-800 font-medium">
            Start Learning 
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-gray-600">10 - Advanced</h2>
          <p className="text-gray-600 mb-4">Advanced exercises and complex concepts</p>
          <a href="/10-advanced" className="inline-flex items-center text-gray-600 hover:text-gray-800 font-medium">
            Start Learning 
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
