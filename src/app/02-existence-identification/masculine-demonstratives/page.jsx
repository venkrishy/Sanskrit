import ChapterTitleCard from '@/components/cards/ChapterTitleCard'
import ExplanationCard from '@/components/cards/ExplanationCard'
import ImageCard from '@/components/cards/ImageCard'
import QuizCard from '@/components/cards/QuizCard'
import { getLessonNavigation } from '@/lib/navigation'

export default function MasculineDemonstrativesPage() {
  const navigation = getLessonNavigation('/02-existence-identification/masculine-demonstratives');
  
  return (
    <div className="space-y-4">
      {/* Chapter & Title Card */}
      <ChapterTitleCard 
        {...navigation}
        title="2.4 - Masculine Demonstratives"
        subtitle="Learning masculine demonstrative pronouns"
        level="Beginner"
        progress={50}
      />
      
      {/* Vocabulary and Goal Card */}
      <ExplanationCard 
        title="Goal and Vocabulary"
        content="<p>Learn masculine demonstrative pronouns in Sanskrit. These words help you point to and identify masculine objects or people.</p>"
        examples={[
          { sanskrit: "saḥ (सः)", english: "he, that (masculine)" },
          { sanskrit: "eṣaḥ (एषः)", english: "this (masculine)" },
          { sanskrit: "saḥ rāmaḥ (सः रामः)", english: "he is Rama" },
          { sanskrit: "eṣaḥ putraḥ (एषः पुत्रः)", english: "this is a son" }
        ]}
        tips="Masculine demonstratives like 'saḥ' and 'eṣaḥ' are used to point to masculine nouns. They agree in gender with the noun they refer to."
      />
      
      {/* Example Dialogue Card */}
      <ExplanationCard 
        title="Example Dialogue"
        content="<p>Here's how you can use masculine demonstratives in conversation:</p>"
        examples={[
          { sanskrit: "Person A: saḥ kaḥ? (सः कः?)", english: "Who is he?" },
          { sanskrit: "Person B: saḥ rāmaḥ. (सः रामः।)", english: "He is Rama." },
          { sanskrit: "Person A: eṣaḥ kaḥ? (एषः कः?)", english: "Who is this?" },
          { sanskrit: "Person B: eṣaḥ putraḥ. (एषः पुत्रः।)", english: "This is a son." }
        ]}
        tips="Notice how 'saḥ' refers to someone distant and 'eṣaḥ' refers to someone nearby. Both are masculine forms."
      />
      
      {/* Image Card for Practice */}
      <ImageCard 
        imageSrc="/images/masculine-demonstratives.png"
        imageAlt="Traditional Indian male figures with demonstrative pronouns"
        description="<p>Practice using masculine demonstratives with the figures in the image. Point to different people and practice saying 'saḥ' and 'eṣaḥ'.</p><p><strong>Practice:</strong> Look at the figures and practice saying 'saḥ [name]' for distant people and 'eṣaḥ [name]' for nearby people.</p>"
        placeholder="Write masculine demonstrative sentences in transliteration..."
      />
      
      {/* Quiz Cards */}
      <QuizCard 
        question="Which demonstrative is used for a distant masculine person?"
        options={["eṣaḥ (this)", "saḥ (that)", "sā (that feminine)", "tad (that neuter)"]}
        correctAnswer="saḥ (that)"
        explanation="'saḥ' is used for distant masculine persons or objects, while 'eṣaḥ' is used for nearby masculine persons or objects."
      />
      
      <QuizCard 
        question="Complete: '_____ rāmaḥ' (This is Rama)"
        type="text-input"
        correctAnswer="eṣaḥ"
        explanation="'eṣaḥ' is the correct masculine demonstrative for 'this' when referring to a nearby masculine person like Rama."
      />
    </div>
  )
}
