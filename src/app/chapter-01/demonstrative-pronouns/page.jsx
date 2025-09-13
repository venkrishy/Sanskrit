const lessonData = {
  title: "Demonstrative Pronouns",
  content: [
    {
      type: "text",
      content: "Learning about demonstrative pronouns in Sanskrit. These pronouns help us point to things near and far."
    }
  ]
}

export default function DemonstrativePronouns() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">{lessonData.title}</h1>
      {lessonData.content.map((section, index) => {
        switch (section.type) {
          case 'text':
            return (
              <div key={index} className="prose max-w-none">
                <p>{section.content}</p>
              </div>
            )
          default:
            return null
        }
      })}
    </div>
  )
} 