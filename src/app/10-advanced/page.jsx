export default function AdvancedPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">10 - Advanced</h1>
        <p className="text-xl text-muted-foreground mt-2">
          Advanced exercises and complex concepts in Sanskrit
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Advanced Exercises</h2>
          <p className="text-muted-foreground mb-4">Comprehensive advanced practice exercises</p>
          <a href="/10-advanced/advanced_exercises" className="text-blue-600 hover:underline">
            Start Lesson →
          </a>
        </div>
        
        <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Grammar Mastery</h2>
          <p className="text-muted-foreground mb-4">Advanced grammatical concepts and mastery</p>
          <a href="/10-advanced/grammar_mastery" className="text-blue-600 hover:underline">
            Start Lesson →
          </a>
        </div>
        
        <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Reading Comprehension</h2>
          <p className="text-muted-foreground mb-4">Reading and understanding Sanskrit texts</p>
          <a href="/10-advanced/reading_comprehension" className="text-blue-600 hover:underline">
            Start Lesson →
          </a>
        </div>
        
        <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Writing Practice</h2>
          <p className="text-muted-foreground mb-4">Practice writing in Sanskrit</p>
          <a href="/10-advanced/writing_practice" className="text-blue-600 hover:underline">
            Start Lesson →
          </a>
        </div>
      </div>
    </div>
  )
}
