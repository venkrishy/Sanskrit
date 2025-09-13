export default function GrammarPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">05 - Grammar</h1>
        <p className="text-xl text-muted-foreground mt-2">
          Advanced grammatical concepts in Sanskrit
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Plural Forms</h2>
          <p className="text-muted-foreground mb-4">Forming plural forms of nouns and pronouns</p>
          <a href="/05-grammar/plural_forms" className="text-blue-600 hover:underline">
            Start Lesson →
          </a>
        </div>
        
        <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Plural Forms Advanced</h2>
          <p className="text-muted-foreground mb-4">Advanced plural form transformations</p>
          <a href="/05-grammar/plural_forms_advanced" className="text-blue-600 hover:underline">
            Start Lesson →
          </a>
        </div>
      </div>
    </div>
  )
}
