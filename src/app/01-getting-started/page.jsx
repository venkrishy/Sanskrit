import TitleCard from '@/components/cards/TitleCard'

export default function GettingStartedPage() {
  return (
    <div className="space-y-6">
      {/* Module Title Card */}
      <TitleCard 
        title="Hello! Getting Started"
        subtitle="Greetings, identity, and basic introductions"
        level="Beginner"
        progress={0}
      />
      
      {/* Module Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-blue-600">1.1 - Greetings and Identity</h2>
          <p className="text-gray-600 mb-4">Basic greetings and introducing yourself</p>
          <a href="/01-getting-started/greetings-identity" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
            Start Learning 
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-green-600">1.2 - Hello! My Name Is... (The Neuter Name)</h2>
          <p className="text-gray-600 mb-4">Learning neuter gender names and introductions</p>
          <a href="/01-getting-started/neuter-name" className="inline-flex items-center text-green-600 hover:text-green-800 font-medium">
            Start Learning 
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-purple-600">1.3 - My Name Is... (The Masculine Name)</h2>
          <p className="text-gray-600 mb-4">Learning masculine gender names and introductions</p>
          <a href="/01-getting-started/masculine-name" className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium">
            Start Learning 
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-orange-600">1.4 - My Name Is... (The Feminine Name)</h2>
          <p className="text-gray-600 mb-4">Learning feminine gender names and introductions</p>
          <a href="/01-getting-started/feminine-name" className="inline-flex items-center text-orange-600 hover:text-orange-800 font-medium">
            Start Learning 
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-red-600">1.5 - Asking: Who? and What? (kaḥ and kim)</h2>
          <p className="text-gray-600 mb-4">Learning interrogative pronouns</p>
          <a href="/01-getting-started/who-what" className="inline-flex items-center text-red-600 hover:text-red-800 font-medium">
            Start Learning 
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-indigo-600">1.6 - Yes/No: Simple Affirmation and Negation</h2>
          <p className="text-gray-600 mb-4">Learning to say yes and no in Sanskrit</p>
          <a href="/01-getting-started/yes-no" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium">
            Start Learning 
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-teal-600">1.7 - Vocabulary: Top 10 Daily Use Items</h2>
          <p className="text-gray-600 mb-4">Essential vocabulary for daily conversations</p>
          <a href="/01-getting-started/daily-items" className="inline-flex items-center text-teal-600 hover:text-teal-800 font-medium">
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
