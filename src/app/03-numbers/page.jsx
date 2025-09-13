export default function NumbersPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">03 - Numbers</h1>
        <p className="text-xl text-muted-foreground mt-2">
          Number systems and counting in Sanskrit
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Basic Numbers</h2>
          <p className="text-muted-foreground mb-4">Numbers 1-10 and basic counting</p>
          <a href="/03-numbers/basic_numbers" className="text-blue-600 hover:underline">
            Start Lesson →
          </a>
        </div>
        
        <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Counting Questions</h2>
          <p className="text-muted-foreground mb-4">Asking and answering counting questions</p>
          <a href="/03-numbers/counting_questions" className="text-blue-600 hover:underline">
            Start Lesson →
          </a>
        </div>
        
        <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Number Practice</h2>
          <p className="text-muted-foreground mb-4">Practice exercises with numbers</p>
          <a href="/03-numbers/number_practice" className="text-blue-600 hover:underline">
            Start Lesson →
          </a>
        </div>
      </div>
    </div>
  )
}
