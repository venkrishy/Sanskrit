export default function HomePage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Welcome to Sanskrit Learning</h1>
      <p className="text-xl text-muted-foreground">
        Begin your journey into the beautiful world of Sanskrit language.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <div className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-2">01 - Foundational</h2>
          <p className="text-muted-foreground">Basic conversations, greetings, and introductions</p>
          <a href="/01-foundational" className="text-blue-600 hover:underline mt-2 inline-block">Start Learning →</a>
        </div>
        <div className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-2">02 - Pronouns</h2>
          <p className="text-muted-foreground">Pronoun forms and usage in Sanskrit</p>
          <a href="/02-pronouns" className="text-blue-600 hover:underline mt-2 inline-block">Start Learning →</a>
        </div>
        <div className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-2">03 - Numbers</h2>
          <p className="text-muted-foreground">Number systems and counting</p>
          <a href="/03-numbers" className="text-blue-600 hover:underline mt-2 inline-block">Start Learning →</a>
        </div>
        <div className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-2">04 - Vocabulary</h2>
          <p className="text-muted-foreground">Thematic vocabulary collections</p>
          <a href="/04-vocabulary" className="text-blue-600 hover:underline mt-2 inline-block">Start Learning →</a>
        </div>
        <div className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-2">05 - Grammar</h2>
          <p className="text-muted-foreground">Advanced grammatical concepts</p>
          <a href="/05-grammar" className="text-blue-600 hover:underline mt-2 inline-block">Start Learning →</a>
        </div>
        <div className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-2">06 - Time and Calendar</h2>
          <p className="text-muted-foreground">Time expressions and temporal concepts</p>
          <a href="/06-time_and_calendar" className="text-blue-600 hover:underline mt-2 inline-block">Start Learning →</a>
        </div>
        <div className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-2">07 - Verbs</h2>
          <p className="text-muted-foreground">Verb forms and conjugations</p>
          <a href="/07-verbs" className="text-blue-600 hover:underline mt-2 inline-block">Start Learning →</a>
        </div>
        <div className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-2">08 - Directions and Locations</h2>
          <p className="text-muted-foreground">Spatial relationships and directions</p>
          <a href="/08-directions_and_locations" className="text-blue-600 hover:underline mt-2 inline-block">Start Learning →</a>
        </div>
        <div className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-2">09 - Conversation</h2>
          <p className="text-muted-foreground">Dialogue patterns and conversation practice</p>
          <a href="/09-conversation" className="text-blue-600 hover:underline mt-2 inline-block">Start Learning →</a>
        </div>
        <div className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-2">10 - Advanced</h2>
          <p className="text-muted-foreground">Advanced exercises and complex concepts</p>
          <a href="/10-advanced" className="text-blue-600 hover:underline mt-2 inline-block">Start Learning →</a>
        </div>
      </div>
    </div>
  )
}
