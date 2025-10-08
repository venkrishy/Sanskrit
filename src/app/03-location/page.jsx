import ChapterTitleCard from '@/components/cards/ChapterTitleCard'
import { getLessonNavigation } from '@/lib/navigation'

export default function LocationPage() {
  const navigation = getLessonNavigation('/03-location');
  
  return (
    <div className="space-y-6">
      {/* Module Title Card */}
      <ChapterTitleCard 
        {...navigation}
        title="Where Is It? Describing Location"
        subtitle="Basic spatial concepts and location vocabulary"
        level="Beginner"
        progress={50}
      />
      
      {/* Module Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <a href="/03-location/spatial-concepts" className="block p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-blue-600">3.1 - Basic Spatial Concepts</h2>
          <p className="text-gray-600 mb-4">Learning fundamental location and spatial concepts</p>
        </a>
        
        <a href="/03-location/where" className="block p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-green-600">3.2 - Location: Where? (kutra)</h2>
          <p className="text-gray-600 mb-4">Learning to ask and answer about location</p>
        </a>
        
        <a href="/03-location/here-there" className="block p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-purple-600">3.3 - Location: Here and There (atra and tatra)</h2>
          <p className="text-gray-600 mb-4">Learning to specify exact locations</p>
        </a>
        
        <a href="/03-location/everywhere-elsewhere" className="block p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-orange-600">3.4 - Location: Everywhere and Elsewhere</h2>
          <p className="text-gray-600 mb-4">Learning universal and alternative locations</p>
        </a>
        
        <a href="/03-location/directions" className="block p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-red-600">3.5 - Location: Front, Back, Left, Right</h2>
          <p className="text-gray-600 mb-4">Learning directional and positional concepts</p>
        </a>
        
        <a href="/03-location/inside-outside" className="block p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-indigo-600">3.6 - Location: Inside and Outside</h2>
          <p className="text-gray-600 mb-4">Learning interior and exterior location concepts</p>
        </a>
        
        <a href="/03-location/from-where" className="block p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-teal-600">3.7 - Location: From Here/There/Where</h2>
          <p className="text-gray-600 mb-4">Learning origin and source location concepts</p>
        </a>
      </div>
    </div>
  )
}
