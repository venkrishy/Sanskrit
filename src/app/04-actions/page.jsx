import ChapterTitleCard from '@/components/cards/ChapterTitleCard'
import { getLessonNavigation } from '@/lib/navigation'

export default function ActionsPage() {
  const navigation = getLessonNavigation('/04-actions');
  
  return (
    <div className="space-y-6">
      {/* Module Title Card */}
      <ChapterTitleCard 
        {...navigation}
        title="Action! What People Are Doing"
        subtitle="Simple actions and present tense verbs"
        level="Beginner"
        progress={50}
      />
      
      {/* Module Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <a href="/04-actions/simple-actions" className="block p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-orange-600">4.1 - Simple Actions (Present Tense)</h2>
          <p className="text-gray-600 mb-4">Understanding present tense actions</p>
        </a>
        
        <a href="/04-actions/simple-verbs" className="block p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-green-600">4.2 - Action! Simple Verbs (gacchati, likhati)</h2>
          <p className="text-gray-600 mb-4">Learning basic action verbs</p>
        </a>
        
        <a href="/04-actions/i-actions" className="block p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-purple-600">4.3 - Using I with Action Words (Ahaṃ gacchāmi)</h2>
          <p className="text-gray-600 mb-4">First person actions and conjugations</p>
        </a>
        
        <a href="/04-actions/you-actions" className="block p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-blue-600">4.4 - Using You with Action Words (Tvaṃ gacchasi)</h2>
          <p className="text-gray-600 mb-4">Second person actions and conjugations</p>
        </a>
        
        <a href="/04-actions/requests-commands" className="block p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-red-600">4.5 - Requests and Simple Commands (Gacchati vs. Gacchatu)</h2>
          <p className="text-gray-600 mb-4">Making requests and giving commands</p>
        </a>
        
        <a href="/04-actions/necessity" className="block p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-indigo-600">4.6 - Necessity: Needs and Sufficiency (āvaśyakam and paryāptam)</h2>
          <p className="text-gray-600 mb-4">Expressing necessity and sufficiency</p>
        </a>
      </div>
    </div>
  )
}
