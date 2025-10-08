import ChapterTitleCard from '@/components/cards/ChapterTitleCard'
import { getLessonNavigation } from '@/lib/navigation'

export default function ExistenceIdentificationPage() {
  const navigation = getLessonNavigation('/02-existence-identification');
  
  return (
    <div className="space-y-6">
      {/* Module Title Card */}
      <ChapterTitleCard 
        {...navigation}
        title="Naming Things & Asking 'Is It There?'"
        subtitle="Existence, identification, and demonstratives"
        level="Beginner"
        progress={50}
      />
      
      {/* Module Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <a href="/02-existence-identification/existence" className="block p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-blue-600">2.1 - Existence and Identification</h2>
          <p className="text-gray-600 mb-4">Learning to express existence and identify objects</p>
        </a>
        
        <a href="/02-existence-identification/exists-not" className="block p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-green-600">2.2 - Exists and Is Not (asti and nāsti)</h2>
          <p className="text-gray-600 mb-4">Learning positive and negative existence</p>
        </a>
        
        <a href="/02-existence-identification/neuter-demonstratives" className="block p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-purple-600">2.3 - Demonstrating: This and That (Neuter)</h2>
          <p className="text-gray-600 mb-4">Learning neuter demonstrative pronouns</p>
        </a>
        
        <a href="/02-existence-identification/masculine-demonstratives" className="block p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-orange-600">2.4 - Demonstrating: This and That (Masculine)</h2>
          <p className="text-gray-600 mb-4">Learning masculine demonstrative pronouns</p>
        </a>
        
        <a href="/02-existence-identification/feminine-demonstratives" className="block p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-red-600">2.5 - Demonstrating: This and That (Feminine)</h2>
          <p className="text-gray-600 mb-4">Learning feminine demonstrative pronouns</p>
        </a>
        
        <a href="/02-existence-identification/workplace-vocabulary" className="block p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-indigo-600">2.6 - Vocabulary: Workplace Items</h2>
          <p className="text-gray-600 mb-4">Essential workplace and office vocabulary</p>
        </a>
      </div>
    </div>
  )
}
