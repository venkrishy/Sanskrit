import TitleCard from '@/components/cards/TitleCard'

export default function ComplexDialoguePage() {
  return (
    <div className="space-y-6">
      {/* Module Title Card */}
      <TitleCard 
        title="Complex Dialogue and Vocabulary Expansion"
        subtitle="Putting it all together"
        level="Advanced"
        progress={0}
      />
      
      {/* Module Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-slate-600">14.1 - Putting it Together</h2>
          <p className="text-gray-600 mb-4">Integrating all learned concepts</p>
          <a href="/14-complex-dialogue/putting-together" className="inline-flex items-center text-slate-600 hover:text-slate-800 font-medium">
            Start Learning 
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-blue-600">14.2 - Relative Clauses: Who/That (yaḥ / saḥ, yat / tat)</h2>
          <p className="text-gray-600 mb-4">Learning relative pronouns and clauses</p>
          <a href="/14-complex-dialogue/relative-clauses" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
            Start Learning 
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-green-600">14.3 - Concession: Although, Yet (yadyapi and tathāpi)</h2>
          <p className="text-gray-600 mb-4">Expressing concession and contrast</p>
          <a href="/14-complex-dialogue/concession" className="inline-flex items-center text-green-600 hover:text-green-800 font-medium">
            Start Learning 
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-purple-600">14.4 - Conversation: Greetings, Apologies, and Phrases</h2>
          <p className="text-gray-600 mb-4">Essential conversation phrases and etiquette</p>
          <a href="/14-complex-dialogue/conversation-phrases" className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium">
            Start Learning 
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-orange-600">14.5 - Vocative Forms: Calling Out to Someone</h2>
          <p className="text-gray-600 mb-4">Learning the vocative case for addressing people</p>
          <a href="/14-complex-dialogue/vocative" className="inline-flex items-center text-orange-600 hover:text-orange-800 font-medium">
            Start Learning 
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-red-600">14.6 - Vocabulary Focus: Taste Words</h2>
          <p className="text-gray-600 mb-4">Expanding vocabulary with taste-related words</p>
          <a href="/14-complex-dialogue/taste-words" className="inline-flex items-center text-red-600 hover:text-red-800 font-medium">
            Start Learning 
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-indigo-600">14.7 - Vocabulary Focus: Body Parts</h2>
          <p className="text-gray-600 mb-4">Learning body part vocabulary</p>
          <a href="/14-complex-dialogue/body-parts" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium">
            Start Learning 
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-teal-600">14.8 - Vocabulary Focus: Kitchen and Related Items</h2>
          <p className="text-gray-600 mb-4">Kitchen vocabulary and household items</p>
          <a href="/14-complex-dialogue/kitchen-items" className="inline-flex items-center text-teal-600 hover:text-teal-800 font-medium">
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
