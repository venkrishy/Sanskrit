import ChapterTitleCard from '@/components/cards/ChapterTitleCard'
import ExplanationCard from '@/components/cards/ExplanationCard'
import ImageCard from '@/components/cards/ImageCard'
import QuizCard from '@/components/cards/QuizCard'
import { getLessonNavigation } from '@/lib/navigation'

export default function FeminineDemonstrativesPage() {
  const navigation = getLessonNavigation('/02-existence-identification/feminine-demonstratives');
  
  return (
    <div className="space-y-4">
      {/* Chapter & Title Card */}
      <ChapterTitleCard 
        {...navigation}
        title="2.5 - Feminine Demonstratives"
        subtitle="Learning feminine demonstrative pronouns"
        level="Beginner"
        progress={50}
      />
      
      {/* Vocabulary and Goal Card */}
      <ExplanationCard 
        title="Goal and Vocabulary"
        content="<p>Learn feminine demonstrative pronouns in Sanskrit. These words help you point to and identify feminine objects or people.</p>"
        examples={[
          { sanskrit: "sā (सा)", english: "she, that (feminine)" },
          { sanskrit: "eṣā (एषा)", english: "this (feminine)" },
          { sanskrit: "sā sītā (सा सीता)", english: "she is Sita" },
          { sanskrit: "eṣā putrī (एषा पुत्री)", english: "this is a daughter" }
        ]}
        tips="Feminine demonstratives like 'sā' and 'eṣā' are used to point to feminine nouns. They agree in gender with the noun they refer to."
      />
      
      {/* Example Dialogue Card */}
      <ExplanationCard 
        title="Example Dialogue"
        content="<p>Here's how you can use feminine demonstratives in conversation:</p>"
        examples={[
          { sanskrit: "Person A: sā kā? (सा का?)", english: "Who is she?" },
          { sanskrit: "Person B: sā sītā. (सा सीता।)", english: "She is Sita." },
          { sanskrit: "Person A: eṣā kā? (एषा का?)", english: "Who is this?" },
          { sanskrit: "Person B: eṣā putrī. (एषा पुत्री।)", english: "This is a daughter." }
        ]}
        tips="Notice how 'sā' refers to someone distant and 'eṣā' refers to someone nearby. Both are feminine forms."
      />
      
      {/* Image Card for Practice */}
      <ImageCard 
        imageSrc="/images/feminine-demonstratives.png"
        imageAlt="Traditional Indian female figures with demonstrative pronouns"
        description="<p>Practice using feminine demonstratives with the figures in the image. Point to different people and practice saying 'sā' and 'eṣā'.</p><p><strong>Practice:</strong> Look at the figures and practice saying 'sā [name]' for distant people and 'eṣā [name]' for nearby people.</p>"
        placeholder="Write feminine demonstrative sentences in transliteration..."
      />
      
      {/* Quiz Cards */}
      <QuizCard 
        question="Which demonstrative is used for a distant feminine person?"
        options={["eṣā (this)", "sā (that)", "saḥ (that masculine)", "tad (that neuter)"]}
        correctAnswer="sā (that)"
        explanation="'sā' is used for distant feminine persons or objects, while 'eṣā' is used for nearby feminine persons or objects."
      />
      
      <QuizCard 
        question="Complete: '_____ sītā' (This is Sita)"
        type="text-input"
        correctAnswer="eṣā"
        explanation="'eṣā' is the correct feminine demonstrative for 'this' when referring to a nearby feminine person like Sita."
      />
    </div>
  )
}
