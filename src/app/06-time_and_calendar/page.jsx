export default function TimeAndCalendarPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">06 - Time and Calendar</h1>
        <p className="text-xl text-muted-foreground mt-2">
          Time expressions and temporal concepts in Sanskrit
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Daily Routines</h2>
          <p className="text-muted-foreground mb-4">Expressing daily activities and routines</p>
          <a href="/06-time_and_calendar/daily_routines" className="text-blue-600 hover:underline">
            Start Lesson →
          </a>
        </div>
        
        <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Days and Dates</h2>
          <p className="text-muted-foreground mb-4">Days of the week and date expressions</p>
          <a href="/06-time_and_calendar/days_and_dates" className="text-blue-600 hover:underline">
            Start Lesson →
          </a>
        </div>
        
        <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Time Expressions</h2>
          <p className="text-muted-foreground mb-4">Complex time expressions and clock time</p>
          <a href="/06-time_and_calendar/time_expressions" className="text-blue-600 hover:underline">
            Start Lesson →
          </a>
        </div>
      </div>
    </div>
  )
}
