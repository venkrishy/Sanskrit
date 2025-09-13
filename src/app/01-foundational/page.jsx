export default function FoundationalPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">01 - Foundational</h1>
        <p className="text-xl text-muted-foreground mt-2">
          Basic Sanskrit concepts and introductions
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Basic Conversations</h2>
          <p className="text-muted-foreground mb-4">Learn fundamental conversation patterns</p>
          <a href="/01-foundational/basic_conversations" className="text-blue-600 hover:underline">
            Start Lesson →
          </a>
        </div>
        
        <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Greetings</h2>
          <p className="text-muted-foreground mb-4">Common Sanskrit greetings and courtesy expressions</p>
          <a href="/01-foundational/greetings" className="text-blue-600 hover:underline">
            Start Lesson →
          </a>
        </div>
        
        <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Introductions</h2>
          <p className="text-muted-foreground mb-4">How to introduce yourself and others</p>
          <a href="/01-foundational/introductions" className="text-blue-600 hover:underline">
            Start Lesson →
          </a>
        </div>
      </div>
    </div>
  )
}
