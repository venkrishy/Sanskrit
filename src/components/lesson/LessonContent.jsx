import { Card } from "@/components/ui/card"
import { lessonsData } from "@/data/lessons"

function VocabularySection({ words }) {
  return (
    <div className="my-6">
      <h3 className="text-lg font-semibold mb-4">Vocabulary</h3>
      <div className="grid gap-4">
        {words.map((word, index) => (
          <Card key={index} className="p-4">
            <div className="flex flex-col space-y-2">
              <span className="text-xl">{word.sanskrit}</span>
              <span className="text-sm text-gray-600">{word.transliteration}</span>
              <span className="text-sm text-gray-700">{word.english}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

function ExampleSection({ sanskrit, transliteration, english }) {
  return (
    <Card className="my-6 p-6">
      <h3 className="text-lg font-semibold mb-4">Example</h3>
      <div className="space-y-3">
        <p className="text-xl">{sanskrit}</p>
        <p className="text-sm text-gray-600">{transliteration}</p>
        <p className="text-sm text-gray-700">{english}</p>
      </div>
    </Card>
  )
}

function PracticeSection({ exercises }) {
  return (
    <div className="my-6">
      <h3 className="text-lg font-semibold mb-4">Practice Exercises</h3>
      <div className="space-y-6">
        {exercises.map((exercise, index) => (
          <Card key={index} className="p-6">
            <div className="space-y-4">
              <h4 className="font-medium">{exercise.type === 'translation' ? 'Translation Exercise' : 'Conversation Practice'}</h4>
              {exercise.type === 'translation' ? (
                <>
                  <p>{exercise.question}</p>
                  <p className="text-gray-600">{exercise.answer}</p>
                </>
              ) : (
                <>
                  <p>{exercise.prompt}</p>
                  {exercise.pairs.map((pair, pairIndex) => (
                    <div key={pairIndex} className="ml-4 space-y-2">
                      <p>Q: {pair.q}</p>
                      <p>A: {pair.a}</p>
                    </div>
                  ))}
                </>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default function LessonContent({ sectionId }) {
  const lesson = lessonsData[sectionId]
  
  if (!lesson) {
    return <div>Lesson not found</div>
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{lesson.title}</h1>
      
      <div className="space-y-6">
        {lesson.content.map((section, index) => {
          switch (section.type) {
            case 'text':
              return (
                <div key={index} className="prose max-w-none">
                  <p>{section.content}</p>
                </div>
              )
            case 'vocabulary':
              return <VocabularySection key={index} words={section.words} />
            case 'example':
              return <ExampleSection key={index} {...section} />
            case 'practice':
              return <PracticeSection key={index} exercises={section.exercises} />
            default:
              return null
          }
        })}
      </div>
    </div>
  )
} 