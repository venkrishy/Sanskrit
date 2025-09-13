export default function VocabularyPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">04 - Vocabulary</h1>
        <p className="text-xl text-muted-foreground mt-2">
          Thematic vocabulary collections in Sanskrit
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Household Objects</h2>
          <p className="text-muted-foreground mb-4">Common household items and objects</p>
          <a href="/04-vocabulary/household_objects" className="text-blue-600 hover:underline">
            Start Lesson →
          </a>
        </div>
        
        <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Kitchen Utensils</h2>
          <p className="text-muted-foreground mb-4">Kitchen and cooking related vocabulary</p>
          <a href="/04-vocabulary/kitchen_utensils" className="text-blue-600 hover:underline">
            Start Lesson →
          </a>
        </div>
        
        <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Workplace Vocabulary</h2>
          <p className="text-muted-foreground mb-4">Professional and workplace terminology</p>
          <a href="/04-vocabulary/workplace_vocabulary" className="text-blue-600 hover:underline">
            Start Lesson →
          </a>
        </div>
      </div>
    </div>
  )
}
