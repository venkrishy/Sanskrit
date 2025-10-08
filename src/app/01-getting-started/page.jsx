import ChapterTitleCard from '@/components/cards/ChapterTitleCard'
import { getLessonNavigation } from '@/lib/navigation'

export default function GettingStartedPage() {
  const navigation = getLessonNavigation('/01-getting-started');
  
  return (
    <div className="space-y-6">
      {/* Module Title Card */}
      <ChapterTitleCard 
        {...navigation}
        title="Hello! Getting Started"
        subtitle="Greetings, identity, and basic introductions"
        level="Beginner"
        progress={50}
      />
      
      {/* Module Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <a href="/01-getting-started/greetings-identity" className="block p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-blue-600">1.1 - Greetings and Identity</h2>
          <p className="text-gray-600 mb-4">Basic greetings and introducing yourself</p>
        </a>
        
        <a href="/01-getting-started/neuter-name" className="block p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-green-600">1.2 - Hello! My Name Is... (The Neuter Name)</h2>
          <p className="text-gray-600 mb-4">Learning neuter gender names and introductions</p>
        </a>
        
        <a href="/01-getting-started/masculine-name" className="block p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-purple-600">1.3 - My Name Is... (The Masculine Name)</h2>
          <p className="text-gray-600 mb-4">Learning masculine gender names and introductions</p>
        </a>
        
        <a href="/01-getting-started/feminine-name" className="block p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-orange-600">1.4 - My Name Is... (The Feminine Name)</h2>
          <p className="text-gray-600 mb-4">Learning feminine gender names and introductions</p>
        </a>
        
        <a href="/01-getting-started/who-what" className="block p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-red-600">1.5 - Asking: Who? and What? (kaḥ and kim)</h2>
          <p className="text-gray-600 mb-4">Learning interrogative pronouns</p>
        </a>
        
        <a href="/01-getting-started/yes-no" className="block p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-indigo-600">1.6 - Yes/No: Simple Affirmation and Negation</h2>
          <p className="text-gray-600 mb-4">Learning to say yes and no in Sanskrit</p>
        </a>
        
        <a href="/01-getting-started/daily-items" className="block p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-teal-600">1.7 - Vocabulary: Top 10 Daily Use Items</h2>
          <p className="text-gray-600 mb-4">Essential vocabulary for daily conversations</p>
        </a>
      </div>
    </div>
  )
}
