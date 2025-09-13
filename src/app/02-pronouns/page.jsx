export default function PronounsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">02 - Pronouns</h1>
        <p className="text-xl text-muted-foreground mt-2">
          Pronoun forms and usage in Sanskrit
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Basic Pronouns</h2>
          <p className="text-muted-foreground mb-4">Fundamental pronoun forms and usage</p>
          <a href="/02-pronouns/basic_pronouns" className="text-blue-600 hover:underline">
            Start Lesson →
          </a>
        </div>
        
        <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Demonstrative Pronouns</h2>
          <p className="text-muted-foreground mb-4">This, that, these, those in Sanskrit</p>
          <a href="/02-pronouns/demonstrative_pronouns" className="text-blue-600 hover:underline">
            Start Lesson →
          </a>
        </div>
        
        <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Interrogative Pronouns</h2>
          <p className="text-muted-foreground mb-4">Question words and interrogative forms</p>
          <a href="/02-pronouns/interrogative_pronouns" className="text-blue-600 hover:underline">
            Start Lesson →
          </a>
        </div>
        
        <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Pronoun Transformations</h2>
          <p className="text-muted-foreground mb-4">Converting pronouns between forms</p>
          <a href="/02-pronouns/pronoun_transformations" className="text-blue-600 hover:underline">
            Start Lesson →
          </a>
        </div>
      </div>
    </div>
  )
}
