export default function VerbsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">07 - Verbs</h1>
        <p className="text-xl text-muted-foreground mt-2">
          Verb forms and conjugations in Sanskrit
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-6">
        <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Present Tense Forms</h2>
          <p className="text-muted-foreground mb-4">Present tense verb conjugations and usage</p>
          <a href="/07-verbs/present_tense_forms" className="text-blue-600 hover:underline">
            Start Lesson →
          </a>
        </div>
      </div>
    </div>
  )
}
