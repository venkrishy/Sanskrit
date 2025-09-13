const lessonData = {
  title: "Basic Introductions",
  content: [
    {
      type: "text",
      content: "In Sanskrit, introductions follow a simple yet respectful pattern. We'll learn how to say 'My name is...' and ask others for their names."
    }
  ]
}

export default function BasicIntroductions() {
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