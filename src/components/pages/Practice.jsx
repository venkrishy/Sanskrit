import { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProgressContext } from '../../App'
import { Button } from '../ui/button'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'

const practiceExercises = {
  "1.1": [
    {
      type: "multiple-choice",
      question: "What is the Sanskrit word for 'Hello'?",
      options: ["नमस्ते", "धन्यवादः", "पुनर्मिलामः", "शुभरात्रिः"],
      correct: "नमस्ते"
    }
  ],
  "1.2": [
    {
      type: "multiple-choice",
      question: "Which demonstrative pronoun means 'this' (masculine)?",
      options: ["एषः", "सः", "एषा", "तत्"],
      correct: "एषः"
    }
  ],
  "1.3": [
    {
      type: "matching",
      items: [
        { sanskrit: "दर्पणः", english: "mirror" },
        { sanskrit: "मञ्चः", english: "bed" },
        { sanskrit: "विद्युद्दीपः", english: "electric lamp" },
        { sanskrit: "करदीपः", english: "flashlight" }
      ]
    }
  ]
}

function MultipleChoice({ question, options, onAnswer }) {
  const [selected, setSelected] = useState("")

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">{question}</h3>
      <RadioGroup value={selected} onValueChange={setSelected}>
        {options.map((option, index) => (
          <div key={index} className="flex items-center space-x-2">
            <RadioGroupItem value={option} id={`option-${index}`} />
            <label htmlFor={`option-${index}`} className="text-lg">
              {option}
            </label>
          </div>
        ))}
      </RadioGroup>
      <Button 
        onClick={() => onAnswer(selected)}
        disabled={!selected}
        className="mt-4"
      >
        Submit Answer
      </Button>
    </div>
  )
}

function MatchingExercise({ items, onComplete }) {
  const [matches, setMatches] = useState({})
  const [selected, setSelected] = useState(null)

  const handleClick = (item, type) => {
    if (!selected) {
      setSelected({ item, type })
    } else if (selected.type !== type) {
      const newMatches = { ...matches }
      if (type === 'english') {
        newMatches[selected.item] = item
      } else {
        newMatches[item] = selected.item
      }
      setMatches(newMatches)
      setSelected(null)

      if (Object.keys(newMatches).length === items.length) {
        onComplete(newMatches)
      }
    }
  }

  return (
    <div className="grid grid-cols-2 gap-8">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Sanskrit Words</h3>
        {items.map(item => (
          <Button
            key={item.sanskrit}
            variant={selected?.item === item.sanskrit ? "default" : "outline"}
            className="w-full"
            onClick={() => handleClick(item.sanskrit, 'sanskrit')}
            disabled={Object.keys(matches).includes(item.sanskrit)}
          >
            {item.sanskrit}
          </Button>
        ))}
      </div>
      <div className="space-y-4">
        <h3 className="text-lg font-medium">English Meanings</h3>
        {items.map(item => (
          <Button
            key={item.english}
            variant={selected?.item === item.english ? "default" : "outline"}
            className="w-full"
            onClick={() => handleClick(item.english, 'english')}
            disabled={Object.values(matches).includes(item.english)}
          >
            {item.english}
          </Button>
        ))}
      </div>
    </div>
  )
}

export default function Practice() {
  const navigate = useNavigate()
  const { progress } = useContext(ProgressContext)
  const [currentExercise, setCurrentExercise] = useState(0)
  const [score, setScore] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  const lessonKey = `${progress.currentChapter}.${progress.currentSection}`
  const exercises = practiceExercises[lessonKey] || []

  const handleAnswer = (answer) => {
    const exercise = exercises[currentExercise]
    if (exercise.type === "multiple-choice") {
      if (answer === exercise.correct) {
        setScore(score + 1)
      }
    } else if (exercise.type === "matching") {
      const isCorrect = exercise.items.every(
        item => answer[item.sanskrit] === item.english
      )
      if (isCorrect) {
        setScore(score + 1)
      }
    }

    if (currentExercise < exercises.length - 1) {
      setCurrentExercise(currentExercise + 1)
    } else {
      setIsComplete(true)
    }
  }

  if (!exercises.length) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">No practice exercises available</h2>
        <Button onClick={() => navigate('/lessons')}>
          Return to Lessons
        </Button>
      </div>
    )
  }

  if (isComplete) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">
          Practice Complete!
        </h2>
        <p className="text-xl mb-8">
          You scored {score} out of {exercises.length}
        </p>
        <div className="space-x-4">
          <Button onClick={() => navigate('/lessons')}>
            Return to Lessons
          </Button>
          <Button 
            variant="outline"
            onClick={() => {
              setCurrentExercise(0)
              setScore(0)
              setIsComplete(false)
            }}
          >
            Practice Again
          </Button>
        </div>
      </div>
    )
  }

  const exercise = exercises[currentExercise]
  return (
    <div className="max-w-2xl mx-auto py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Practice Exercise</h2>
        <p className="text-gray-600">
          Exercise {currentExercise + 1} of {exercises.length}
        </p>
      </div>

      {exercise.type === "multiple-choice" ? (
        <MultipleChoice {...exercise} onAnswer={handleAnswer} />
      ) : exercise.type === "matching" ? (
        <MatchingExercise {...exercise} onComplete={handleAnswer} />
      ) : null}
    </div>
  )
} 