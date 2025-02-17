import { useState } from "react"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)

  // This is a placeholder - we'll populate this with real content from your images
  const questions = [
    {
      type: "multiple-choice",
      question: "Sample Sanskrit Question",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      correctAnswer: 0
    },
    {
      type: "fill-blank",
      question: "Complete this Sanskrit word: ___",
      correctAnswer: "answer"
    },
    {
      type: "true-false",
      question: "Sanskrit statement to evaluate",
      correctAnswer: true
    }
  ]

  const renderQuestion = () => {
    const question = questions[currentQuestion]

    switch (question.type) {
      case "multiple-choice":
        return (
          <RadioGroup className="space-y-4">
            {question.options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2">
                <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                <Label htmlFor={`option-${index}`}>{option}</Label>
              </div>
            ))}
          </RadioGroup>
        )
      
      case "fill-blank":
        return (
          <div className="space-y-4">
            <Input type="text" placeholder="Type your answer" />
          </div>
        )
      
      case "true-false":
        return (
          <RadioGroup className="space-y-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="true" id="true" />
              <Label htmlFor="true">True</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="false" id="false" />
              <Label htmlFor="false">False</Label>
            </div>
          </RadioGroup>
        )
    }
  }

  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-8">Sanskrit Quiz</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl mb-4">{questions[currentQuestion].question}</h2>
        {renderQuestion()}
        <div className="mt-6">
          <Button onClick={() => setCurrentQuestion((prev) => prev + 1)}>
            Next Question
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Quiz 