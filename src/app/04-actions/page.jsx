import TitleCard from '@/components/cards/TitleCard'

export default function ActionsPage() {
  return (
    <div className="space-y-6">
      {/* Module Title Card */}
      <TitleCard 
        title="Action! What People Are Doing"
        subtitle="Simple actions and present tense verbs"
        level="Beginner"
        progress={0}
      />
      
      {/* Module Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-orange-600">4.1 - Simple Actions (Present Tense)</h2>
          <p className="text-gray-600 mb-4">Understanding present tense actions</p>
          <a href="/04-actions/simple-actions" className="inline-flex items-center text-orange-600 hover:text-orange-800 font-medium">
            Start Learning 
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-green-600">4.2 - Action! Simple Verbs (gacchati, likhati)</h2>
          <p className="text-gray-600 mb-4">Learning basic action verbs</p>
          <a href="/04-actions/simple-verbs" className="inline-flex items-center text-green-600 hover:text-green-800 font-medium">
            Start Learning 
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-purple-600">4.3 - Using I with Action Words (Ahaṃ gacchāmi)</h2>
          <p className="text-gray-600 mb-4">First person actions and conjugations</p>
          <a href="/04-actions/i-actions" className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium">
            Start Learning 
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-blue-600">4.4 - Using You with Action Words (Tvaṃ gacchasi)</h2>
          <p className="text-gray-600 mb-4">Second person actions and conjugations</p>
          <a href="/04-actions/you-actions" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
            Start Learning 
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-red-600">4.5 - Requests and Simple Commands (Gacchati vs. Gacchatu)</h2>
          <p className="text-gray-600 mb-4">Making requests and giving commands</p>
          <a href="/04-actions/requests-commands" className="inline-flex items-center text-red-600 hover:text-red-800 font-medium">
            Start Learning 
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-indigo-600">4.6 - Necessity: Needs and Sufficiency (āvaśyakam and paryāptam)</h2>
          <p className="text-gray-600 mb-4">Expressing necessity and sufficiency</p>
          <a href="/04-actions/necessity" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium">
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
