import { useState } from 'react'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

export default function Practice() {
  const [currentStep, setCurrentStep] = useState(0)
  const [userAnswer, setUserAnswer] = useState('')
  const [showFeedback, setShowFeedback] = useState(false)

  const lessons = [
    {
      id: 1,
      image: "/lessons/1.1-introductions.jpg",
      title: "Lesson 1: Introductions",
      description: "Learn how to introduce yourself and ask others' names in Sanskrit",
      questions: [
        {
          question: "भवतः नाम किम् ? (Bhavataḥ nāma kim?)",
          correctAnswer: "Rāmaḥ",
          options: ["Rāmaḥ", "Sureśaḥ", "Kṛṣṇaḥ", "Latā"],
          explanation: "In the first conversation, the person responds with 'Mama nāma Rāmaḥ'"
        },
        {
          question: "भवत्याः नाम किम् ? (Bhavatyāḥ nāma kim?)",
          correctAnswer: "Latā",
          options: ["Rādhā", "Latā", "Sureśaḥ", "Rāmaḥ"],
          explanation: "The woman responds with 'Mama nāma Latā'"
        },
        {
          question: "What is Kṛṣṇaḥ's response to 'Bhavataḥ nāma kim?'",
          correctAnswer: "Mama nāma Kṛṣṇaḥ",
          options: [
            "Mama nāma Kṛṣṇaḥ",
            "Bhavataḥ nāma kim",
            "Mama nāma Rāmaḥ",
            "Mama nāma Latā"
          ],
          explanation: "Kṛṣṇaḥ responds with 'Mama nāma Kṛṣṇaḥ' (My name is Kṛṣṇaḥ)"
        }
      ]
    }
  ]

  const currentLesson = lessons[0]
  const currentQuestion = currentLesson.questions[currentStep]

  const handleAnswer = () => {
    setShowFeedback(true)
  }

  const handleNext = () => {
    if (currentStep < currentLesson.questions.length - 1) {
      setCurrentStep(currentStep + 1)
      setUserAnswer('')
      setShowFeedback(false)
    }
  }

  const isCorrect = userAnswer === currentQuestion.correctAnswer

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-4">{currentLesson.title}</h1>
        <p className="text-gray-600 mb-6">{currentLesson.description}</p>

        {/* Lesson Image */}
        <div className="mb-8">
          <img
            src={currentLesson.image}
            alt="Sanskrit Lesson"
            className="w-full max-w-2xl mx-auto rounded-lg shadow-md"
          />
        </div>
        
        <div className="space-y-6">
          {/* Question Display */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-lg font-semibold mb-2">Question {currentStep + 1}:</p>
            <p className="text-lg">{currentQuestion.question}</p>
          </div>

          {/* Answer Options */}
          <RadioGroup
            value={userAnswer}
            onValueChange={setUserAnswer}
            className="space-y-3"
          >
            {currentQuestion.options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2">
                <RadioGroupItem value={option} id={`option-${index}`} />
                <Label htmlFor={`option-${index}`} className="text-lg">
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>

          {/* Feedback */}
          {showFeedback && (
            <div className={`p-4 rounded-lg ${isCorrect ? 'bg-green-100' : 'bg-red-100'}`}>
              <p className="font-semibold">
                {isCorrect ? 'Correct! 🎉' : 'Not quite right. Try again!'}
              </p>
              <p className="mt-2">{currentQuestion.explanation}</p>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-6">
            <button
              onClick={() => {
                setCurrentStep(Math.max(0, currentStep - 1))
                setUserAnswer('')
                setShowFeedback(false)
              }}
              disabled={currentStep === 0}
              className="px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50"
            >
              Previous
            </button>
            <button
              onClick={showFeedback ? handleNext : handleAnswer}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              {showFeedback ? 'Next Question' : 'Check Answer'}
            </button>
          </div>

          {/* Progress Indicator */}
          <div className="mt-4 text-center text-gray-600">
            Question {currentStep + 1} of {currentLesson.questions.length}
          </div>
        </div>
      </div>
    </div>
  )
} 