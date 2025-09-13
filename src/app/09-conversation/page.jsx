export default function ConversationPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">09 - Conversation</h1>
        <p className="text-xl text-muted-foreground mt-2">
          Dialogue patterns and conversation practice in Sanskrit
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Basic Dialogues</h2>
          <p className="text-muted-foreground mb-4">Simple conversation patterns and dialogues</p>
          <a href="/09-conversation/basic_dialogues" className="text-blue-600 hover:underline">
            Start Lesson →
          </a>
        </div>
        
        <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Complex Dialogues</h2>
          <p className="text-muted-foreground mb-4">Advanced conversation structures</p>
          <a href="/09-conversation/complex_dialogues" className="text-blue-600 hover:underline">
            Start Lesson →
          </a>
        </div>
        
        <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Family Conversations</h2>
          <p className="text-muted-foreground mb-4">Family-related conversation scenarios</p>
          <a href="/09-conversation/family_conversations" className="text-blue-600 hover:underline">
            Start Lesson →
          </a>
        </div>
      </div>
    </div>
  )
}
