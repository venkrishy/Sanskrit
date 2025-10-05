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
      
      {/* Course Categories - Optimized 14-Module Structure */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-blue-600">01 - Hello! Getting Started</h2>
          <p className="text-gray-600 mb-4">Greetings, identity, and basic introductions</p>
          <a href="/01-getting-started" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
            Start Learning 
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-green-600">02 - Naming Things & Asking 'Is It There?'</h2>
          <p className="text-gray-600 mb-4">Existence, identification, and demonstratives</p>
          <a href="/02-existence-identification" className="inline-flex items-center text-green-600 hover:text-green-800 font-medium">
            Start Learning 
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-purple-600">03 - Where Is It? Describing Location</h2>
          <p className="text-gray-600 mb-4">Spatial concepts and location vocabulary</p>
          <a href="/03-location" className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium">
            Start Learning 
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-orange-600">04 - Action! What People Are Doing</h2>
          <p className="text-gray-600 mb-4">Simple actions and present tense verbs</p>
          <a href="/04-actions" className="inline-flex items-center text-orange-600 hover:text-orange-800 font-medium">
            Start Learning 
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-red-600">05 - Groups and Plurals</h2>
          <p className="text-gray-600 mb-4">Dealing with many - plural forms and concepts</p>
          <a href="/05-plurals" className="inline-flex items-center text-red-600 hover:text-red-800 font-medium">
            Start Learning 
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-indigo-600">06 - Going To and Using Directions</h2>
          <p className="text-gray-600 mb-4">Direction, motion, and accusative case</p>
          <a href="/06-directions" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium">
            Start Learning 
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-pink-600">07 - The Tool Role (Instrumental Case)</h2>
          <p className="text-gray-600 mb-4">Doing things with... the instrumental case</p>
          <a href="/07-tool-role" className="inline-flex items-center text-pink-600 hover:text-pink-800 font-medium">
            Start Learning 
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-teal-600">08 - Ownership and Possessives</h2>
          <p className="text-gray-600 mb-4">Ownership, belonging, and genitive case</p>
          <a href="/08-ownership" className="inline-flex items-center text-teal-600 hover:text-teal-800 font-medium">
            Start Learning 
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-cyan-600">09 - Tenses (Beyond Present)</h2>
          <p className="text-gray-600 mb-4">Time travel - past and future tenses</p>
          <a href="/09-tenses" className="inline-flex items-center text-cyan-600 hover:text-cyan-800 font-medium">
            Start Learning 
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-yellow-600">10 - Adjectives, Quality, and Comparison</h2>
          <p className="text-gray-600 mb-4">Describing things and making comparisons</p>
          <a href="/10-adjectives" className="inline-flex items-center text-yellow-600 hover:text-yellow-800 font-medium">
            Start Learning 
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-emerald-600">11 - Time and Numbers</h2>
          <p className="text-gray-600 mb-4">Telling time and counting</p>
          <a href="/11-time-numbers" className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium">
            Start Learning 
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-violet-600">12 - Complex Sentences and Connectors</h2>
          <p className="text-gray-600 mb-4">Joining ideas and complex structures</p>
          <a href="/12-complex-sentences" className="inline-flex items-center text-violet-600 hover:text-violet-800 font-medium">
            Start Learning 
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-rose-600">13 - Advanced Verbal Concepts</h2>
          <p className="text-gray-600 mb-4">Verbal modifiers and purpose expressions</p>
          <a href="/13-advanced-verbs" className="inline-flex items-center text-rose-600 hover:text-rose-800 font-medium">
            Start Learning 
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-slate-600">14 - Complex Dialogue and Vocabulary Expansion</h2>
          <p className="text-gray-600 mb-4">Putting it all together</p>
          <a href="/14-complex-dialogue" className="inline-flex items-center text-slate-600 hover:text-slate-800 font-medium">
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
