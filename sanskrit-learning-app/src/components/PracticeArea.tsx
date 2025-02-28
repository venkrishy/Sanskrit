import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface PracticeAreaProps {
  chapterId: string | null
}

interface Exercise {
  type: 'multiple-choice' | 'fill-in-blank' | 'translation'
  question: string
  options?: string[]
  correctAnswer: string
}

// This would be replaced with actual exercises from your curriculum
const mockExercises: Record<string, Exercise[]> = {
  "1.1": [
    {
      type: 'multiple-choice',
      question: 'What is the correct way to say "My name is" in Sanskrit?',
      options: [
        'मम नाम अस्ति',
        'तव नाम अस्ति',
        'भवतः नाम अस्ति',
        'अहं नाम अस्ति'
      ],
      correctAnswer: 'मम नाम अस्ति'
    },
    {
      type: 'translation',
      question: 'Translate: "What is your name?" (asking a male)',
      correctAnswer: 'भवतः नाम किम्?'
    },
    {
      type: 'fill-in-blank',
      question: 'Complete: "मम ___ राजेशः अस्ति" (My name is Rajesh)',
      correctAnswer: 'नाम'
    }
  ]
}

export function PracticeArea({ chapterId }: PracticeAreaProps) {
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0)
  const [userAnswer, setUserAnswer] = useState('')
  const [showResult, setShowResult] = useState(false)

  const exercises = chapterId ? mockExercises[chapterId] : null
  const currentExercise = exercises?.[currentExerciseIndex]

  if (!chapterId || !exercises || !currentExercise) {
    return (
      <div className="flex items-center justify-center h-full text-muted-foreground">
        Select a chapter to practice
      </div>
    )
  }

  const handleSubmit = () => {
    setShowResult(true)
  }

  const handleNext = () => {
    setShowResult(false)
    setUserAnswer('')
    setCurrentExerciseIndex((prev) => 
      prev < exercises.length - 1 ? prev + 1 : 0
    )
  }

  const renderExerciseContent = () => {
    switch (currentExercise.type) {
      case 'multiple-choice':
        return (
          <div className="space-y-2">
            {currentExercise.options?.map((option, index) => (
              <Button
                key={index}
                variant={userAnswer === option ? "secondary" : "outline"}
                className="w-full justify-start"
                onClick={() => setUserAnswer(option)}
              >
                {option}
              </Button>
            ))}
          </div>
        )

      case 'fill-in-blank':
        return (
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Type your answer..."
          />
        )

      case 'translation':
        return (
          <textarea
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            className="w-full p-2 border rounded h-24"
            placeholder="Type your translation..."
          />
        )

      default:
        return null
    }
  }

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Practice Exercises</h2>
      
      <Tabs defaultValue="exercise" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="exercise">Exercise</TabsTrigger>
          <TabsTrigger value="flashcards">Flashcards</TabsTrigger>
        </TabsList>
        
        <TabsContent value="exercise">
          <Card className="p-4">
            <div className="space-y-4">
              <p className="font-medium">{currentExercise.question}</p>
              
              {renderExerciseContent()}

              {showResult ? (
                <div className="space-y-2">
                  <p className={userAnswer === currentExercise.correctAnswer ? "text-green-600" : "text-red-600"}>
                    {userAnswer === currentExercise.correctAnswer ? "Correct!" : "Incorrect"}
                  </p>
                  <p className="text-sm">Correct answer: {currentExercise.correctAnswer}</p>
                  <Button onClick={handleNext}>Next Exercise</Button>
                </div>
              ) : (
                <Button onClick={handleSubmit} className="w-full">Submit Answer</Button>
              )}
            </div>
          </Card>
        </TabsContent>
        
        <TabsContent value="flashcards">
          <Card className="p-4">
            <p className="text-center text-muted-foreground">
              Flashcards feature coming soon!
            </p>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 