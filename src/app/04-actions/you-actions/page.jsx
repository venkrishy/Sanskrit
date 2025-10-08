import ChapterTitleCard from '@/components/cards/ChapterTitleCard'
import ExplanationCard from '@/components/cards/ExplanationCard'
import ImageCard from '@/components/cards/ImageCard'
import QuizCard from '@/components/cards/QuizCard'
import { getLessonNavigation } from '@/lib/navigation'

export default function YouActionsPage() {
  const navigation = getLessonNavigation('/04-actions/you-actions');
  
  return (
    <div className="space-y-4">
      {/* Chapter & Title Card */}
      <ChapterTitleCard 
        {...navigation}
        title="4.4 - You Actions"
        subtitle="Learning second person actions and verbs"
        level="Beginner"
        progress={50}
      />
      {/* Vocabulary and Goal Card */}
      <ExplanationCard 
        title="Goal and Vocabulary"
        content="<p>Learn essential vocabulary and concepts in Sanskrit.</p>"
        examples={[
          { sanskrit: "example (उदाहरण)", english: "example" },
          { sanskrit: "practice (अभ्यास)", english: "practice" }
        ]}
        tips="This is a placeholder content that needs to be customized for each lesson."
      />
      
      {/* Example Dialogue Card */}
      <ExplanationCard 
        title="Example Dialogue"
        content="<p>Here's how you can use the vocabulary in conversation:</p>"
        examples={[
          { sanskrit: "Person A: example question", english: "Example question" },
          { sanskrit: "Person B: example answer", english: "Example answer" }
        ]}
        tips="This is placeholder dialogue content."
      />
      
      {/* Image Card for Practice */}
      <ImageCard 
        imageSrc="/images/placeholder.png"
        imageAlt="Placeholder image for practice"
        description="<p>Practice using the vocabulary with the image.</p><p><strong>Practice:</strong> Use the vocabulary in sentences.</p>"
        placeholder="Write practice sentences in transliteration..."
      />
      
      {/* Quiz Cards */}
      <QuizCard 
        question="What does 'example' mean?"
        options={["option1", "option2", "option3", "option4"]}
        correctAnswer="option1"
        explanation="This is a placeholder explanation."
      />
      
      <QuizCard 
        question="Complete: 'example sentence'"
        type="text-input"
        correctAnswer="answer"
        explanation="This is a placeholder explanation."
      />
    </div>
  )
}