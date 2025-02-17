import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProgressContext } from '../../App'
import { Button } from '../ui/button'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'

const chapterQuizzes = {
  1: {
    title: "Introduction and Basic Concepts",
    questions: [
      {
        question: "Match the following Sanskrit words with their meanings:",
        type: "matching",
        items: [
          { sanskrit: "दर्पणः", english: "mirror" },
          { sanskrit: "मञ्चः", english: "bed" },
          { sanskrit: "विद्युद्दीपः", english: "electric lamp" },
          { sanskrit: "करदीपः", english: "flashlight" }
        ]
      },
      {
        question: "Which of these is used for 'this' (masculine)?",
        type: "multiple-choice",
        options: ["एषः", "एषा", "एतत्", "सः"],
        correct: "एषः"
      },
      {
        question: "What is the correct way to say 'my name is' in Sanskrit?",
        type: "multiple-choice",
        options: ["मम नाम", "तव नाम", "भवतः नाम", "भवत्याः नाम"],
        correct: "मम नाम"
      }
    ]
  },
  2: {
    title: "Basic Communication",
    questions: [
      {
        question: "Which verb form is used for 'he/she goes'?",
        type: "multiple-choice",
        options: ["गच्छति", "गच्छामि", "गच्छसि", "गच्छन्ति"],
        correct: "गच्छति"
      },
      {
        question: "Match the verbs with their meanings:",
        type: "matching",
        items: [
          { sanskrit: "पठति", english: "reads" },
          { sanskrit: "लिखति", english: "writes" },
          { sanskrit: "वदति", english: "speaks" },
          { sanskrit: "पश्यति", english: "sees" }
        ]
      }
    ]
  },
  3: {
    title: "Numbers and Time",
    questions: [
      {
        question: "What is the Sanskrit word for 'three'?",
        type: "multiple-choice",
        options: ["एकम्", "द्वे", "त्रीणि", "चत्वारि"],
        correct: "त्रीणि"
      },
      {
        question: "Match the time expressions:",
        type: "matching",
        items: [
          { sanskrit: "प्रातः", english: "morning" },
          { sanskrit: "मध्याह्नः", english: "noon" },
          { sanskrit: "सायम्", english: "evening" },
          { sanskrit: "रात्रिः", english: "night" }
        ]
      }
    ]
  }
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

export default function Quiz() {
  const navigate = useNavigate()
  const { progress, setProgress } = useContext(ProgressContext)
  const [selectedChapter, setSelectedChapter] = useState(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  const handleChapterSelect = (chapter) => {
    setSelectedChapter(chapter)
    setCurrentQuestion(0)
    setScore(0)
    setIsComplete(false)
  }

  const handleAnswer = (answer) => {
    const question = chapterQuizzes[selectedChapter].questions[currentQuestion]
    
    if (question.type === "multiple-choice") {
      if (answer === question.correct) {
        setScore(score + 1)
      }
    } else if (question.type === "matching") {
      const isCorrect = question.items.every(
        item => answer[item.sanskrit] === item.english
      )
      if (isCorrect) {
        setScore(score + 1)
      }
    }

    if (currentQuestion < chapterQuizzes[selectedChapter].questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setIsComplete(true)
      // Update progress with quiz score
      setProgress(prev => ({
        ...prev,
        quizScores: {
          ...prev.quizScores,
          [selectedChapter]: score / chapterQuizzes[selectedChapter].questions.length
        }
      }))
    }
  }

  if (!selectedChapter) {
    return (
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">Chapter Quizzes</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(chapterQuizzes).map(([chapter, quiz]) => (
            <div 
              key={chapter}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold mb-4">
                Chapter {chapter}: {quiz.title}
              </h2>
              <p className="text-gray-600 mb-4">
                {quiz.questions.length} questions
              </p>
              {progress.quizScores[chapter] !== undefined && (
                <p className="text-green-600 mb-4">
                  Previous score: {Math.round(progress.quizScores[chapter] * 100)}%
                </p>
              )}
              <Button 
                onClick={() => handleChapterSelect(parseInt(chapter))}
                className="w-full"
              >
                Start Quiz
              </Button>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (isComplete) {
    const percentage = (score / chapterQuizzes[selectedChapter].questions.length) * 100
    return (
      <div className="max-w-2xl mx-auto py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Quiz Complete!</h2>
        <p className="text-xl mb-4">
          You scored {score} out of {chapterQuizzes[selectedChapter].questions.length} ({Math.round(percentage)}%)
        </p>
        <p className="text-lg mb-8">
          {percentage >= 80 
            ? "Excellent work! You've mastered this chapter!" 
            : percentage >= 60 
            ? "Good job! Keep practicing to improve your score."
            : "Keep studying and try again to improve your score."}
        </p>
        <div className="space-x-4">
          <Button onClick={() => setSelectedChapter(null)}>
            Return to Quizzes
          </Button>
          <Button 
            variant="outline"
            onClick={() => {
              setCurrentQuestion(0)
              setScore(0)
              setIsComplete(false)
            }}
          >
            Retry Quiz
          </Button>
        </div>
      </div>
    )
  }

  const quiz = chapterQuizzes[selectedChapter]
  const question = quiz.questions[currentQuestion]

  return (
    <div className="max-w-2xl mx-auto py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">
          Chapter {selectedChapter}: {quiz.title}
        </h2>
        <p className="text-gray-600">
          Question {currentQuestion + 1} of {quiz.questions.length}
        </p>
      </div>

      {question.type === "multiple-choice" ? (
        <MultipleChoice {...question} onAnswer={handleAnswer} />
      ) : question.type === "matching" ? (
        <MatchingExercise {...question} onComplete={handleAnswer} />
      ) : null}
    </div>
  )
} 