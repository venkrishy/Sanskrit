import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { lessonsData } from "@/data/lessons"

function MultipleChoice({ question, options, correct, onAnswer }) {
  return (
    <div className="space-y-4">
      <p className="font-medium">{question}</p>
      <div className="space-y-2">
        {options.map((option, index) => (
          <Button
            key={index}
            variant="outline"
            className="w-full justify-start"
            onClick={() => onAnswer(index === correct)}
          >
            {option}
          </Button>
        ))}
      </div>
    </div>
  )
}

function Translation({ question, answer, onAnswer }) {
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const isCorrect = input.toLowerCase().trim() === answer.toLowerCase().trim()
    onAnswer(isCorrect)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <p className="font-medium">{question}</p>
      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your answer..."
      />
      <Button type="submit" className="w-full">
        Check Answer
      </Button>
    </form>
  )
}

function Matching({ pairs, onAnswer }) {
  const [selected, setSelected] = useState(null)
  const [matched, setMatched] = useState(new Set())

  const handleClick = (index, type) => {
    if (type === 'sanskrit') {
      if (selected?.type === 'english' && selected.index === index) {
        setMatched(prev => new Set([...prev, index]))
        setSelected(null)
        if (matched.size + 1 === pairs.length) {
          onAnswer(true)
        }
      } else {
        setSelected({ type: 'sanskrit', index })
      }
    } else {
      if (selected?.type === 'sanskrit' && selected.index === index) {
        setMatched(prev => new Set([...prev, index]))
        setSelected(null)
        if (matched.size + 1 === pairs.length) {
          onAnswer(true)
        }
      } else {
        setSelected({ type: 'english', index })
      }
    }
  }

  return (
    <div className="space-y-4">
      <p className="font-medium">Match the pairs:</p>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          {pairs.map((pair, index) => (
            <Button
              key={index}
              variant={matched.has(index) ? "success" : selected?.type === 'sanskrit' && selected.index === index ? "default" : "outline"}
              className="w-full"
              onClick={() => !matched.has(index) && handleClick(index, 'sanskrit')}
              disabled={matched.has(index)}
            >
              {pair.sanskrit}
            </Button>
          ))}
        </div>
        <div className="space-y-2">
          {pairs.map((pair, index) => (
            <Button
              key={index}
              variant={matched.has(index) ? "success" : selected?.type === 'english' && selected.index === index ? "default" : "outline"}
              className="w-full"
              onClick={() => !matched.has(index) && handleClick(index, 'english')}
              disabled={matched.has(index)}
            >
              {pair.english}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function QuizSection({ sectionId }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showResults, setShowResults] = useState(false)

  const lesson = lessonsData[sectionId]
  const questions = lesson?.quiz?.questions || []

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1)
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  if (!lesson || !lesson.quiz) {
    return (
      <Card className="p-6">
        <p>No quiz available for this section.</p>
      </Card>
    )
  }

  if (showResults) {
    return (
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4">Quiz Results</h3>
        <p className="text-lg mb-4">
          You scored {score} out of {questions.length}!
        </p>
        <Button
          onClick={() => {
            setCurrentQuestion(0)
            setScore(0)
            setShowResults(false)
          }}
        >
          Try Again
        </Button>
      </Card>
    )
  }

  const question = questions[currentQuestion]

  return (
    <Card className="p-6">
      <div className="mb-4">
        <p className="text-sm text-gray-600">
          Question {currentQuestion + 1} of {questions.length}
        </p>
      </div>

      {question.type === 'multiple-choice' && (
        <MultipleChoice {...question} onAnswer={handleAnswer} />
      )}
      {question.type === 'translation' && (
        <Translation {...question} onAnswer={handleAnswer} />
      )}
      {question.type === 'matching' && (
        <Matching {...question} onAnswer={handleAnswer} />
      )}
    </Card>
  )
} 