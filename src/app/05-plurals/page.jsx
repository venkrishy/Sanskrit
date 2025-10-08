import ChapterTitleCard from '@/components/cards/ChapterTitleCard'
import { getLessonNavigation } from '@/lib/navigation'

export default function PluralsPage() {
  const navigation = getLessonNavigation('/05-plurals');
  
  return (
    <div className="space-y-6">
      {/* Module Title Card */}
      <ChapterTitleCard 
        {...navigation}
        title="Groups and Plurals"
        subtitle="Learning to work with multiple items and people"
        level="Beginner"
        progress={50}
      />
      
      {/* Module Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <a href="/05-plurals/plural-concepts" className="block p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-blue-600">5.1 - Dealing with Many (Plural Forms)</h2>
          <p className="text-gray-600 mb-4">Learning to work with multiple items and people</p>
        </a>
        
        <a href="/05-plurals/singular-plural" className="block p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-green-600">5.2 - Singular and Plural Concepts</h2>
          <p className="text-gray-600 mb-4">Understanding the difference between one and many</p>
        </a>
        
        <a href="/05-plurals/we-you-plural" className="block p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-purple-600">5.3 - Plurals: We and Y'all</h2>
          <p className="text-gray-600 mb-4">Learning first and second person plural pronouns</p>
        </a>
        
        <a href="/05-plurals/masculine-they" className="block p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-orange-600">5.4 - Plurals: They/Those (Masculine)</h2>
          <p className="text-gray-600 mb-4">Learning masculine plural demonstratives</p>
        </a>
        
        <a href="/05-plurals/feminine-they" className="block p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-red-600">5.5 - Plurals: They/Those (Feminine)</h2>
          <p className="text-gray-600 mb-4">Learning feminine plural demonstratives</p>
        </a>
        
        <a href="/05-plurals/neuter-they" className="block p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-indigo-600">5.6 - Plurals: They/Those (Neuter)</h2>
          <p className="text-gray-600 mb-4">Learning neuter plural demonstratives</p>
        </a>
        
        <a href="/05-plurals/plural-verbs" className="block p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-teal-600">5.7 - Plurals: Action Words</h2>
          <p className="text-gray-600 mb-4">Learning plural verb conjugations</p>
        </a>
        
        <a href="/05-plurals/how-many" className="block p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-pink-600">5.8 - Asking: How many?</h2>
          <p className="text-gray-600 mb-4">Learning to ask and answer about quantities</p>
        </a>
      </div>
    </div>
  )
}
