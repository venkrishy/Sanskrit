import ChapterTitleCard from '@/components/cards/ChapterTitleCard'
import ExplanationCard from '@/components/cards/ExplanationCard'
import ImageCard from '@/components/cards/ImageCard'
import QuizCard from '@/components/cards/QuizCard'
import { getLessonNavigation } from '@/lib/navigation'

export default function NeuterDemonstrativesPage() {
  const navigation = getLessonNavigation('/02-existence-identification/neuter-demonstratives');
  
  return (
    <div className="space-y-4">
      {/* Chapter & Title Card */}
      <ChapterTitleCard 
        {...navigation}
        title="2.3 - Neuter Demonstratives"
        subtitle="Learning neuter demonstrative pronouns"
        level="Beginner"
        progress={50}
      />
      
      {/* Vocabulary and Goal Card */}
      <ExplanationCard 
        title="Goal and Vocabulary"
        content="<p>Learn neuter demonstrative pronouns in Sanskrit. These words help you point to and identify neuter objects or concepts.</p>"
        examples={[
          { sanskrit: "tat (तत्)", english: "that (neuter)" },
          { sanskrit: "etat (एतत्)", english: "this (neuter)" },
          { sanskrit: "tat pustakam (तत् पुस्तकम्)", english: "that is a book" },
          { sanskrit: "etat mitram (एतत् मित्रम्)", english: "this is a friend" }
        ]}
        tips="Neuter demonstratives like 'tat' and 'etat' are used to point to neuter nouns. They agree in gender with the noun they refer to."
      />
      
      {/* Example Dialogue Card */}
      <ExplanationCard 
        title="Example Dialogue"
        content="<p>Here's how you can use neuter demonstratives in conversation:</p>"
        examples={[
          { sanskrit: "Person A: tat kim? (तत् किम्?)", english: "What is that?" },
          { sanskrit: "Person B: tat pustakam. (तत् पुस्तकम्।)", english: "That is a book." },
          { sanskrit: "Person A: etat kim? (एतत् किम्?)", english: "What is this?" },
          { sanskrit: "Person B: etat mitram. (एतत् मित्रम्।)", english: "This is a friend." }
        ]}
        tips="Notice how 'tat' refers to something distant and 'etat' refers to something nearby. Both are neuter forms."
      />
      
      {/* Image Card for Practice */}
      <ImageCard 
        imageSrc="/images/neuter-demonstratives.png"
        imageAlt="Traditional Indian objects with demonstrative pronouns"
        description="<p>Practice using neuter demonstratives with the objects in the image. Point to different items and practice saying 'tat' and 'etat'.</p><p><strong>Practice:</strong> Look at the objects and practice saying 'tat [object]' for distant items and 'etat [object]' for nearby items.</p>"
        placeholder="Write neuter demonstrative sentences in transliteration..."
      />
      
      {/* Quiz Cards */}
      <QuizCard 
        question="Which demonstrative is used for a distant neuter object?"
        options={["etat (this)", "tat (that)", "saḥ (that masculine)", "sā (that feminine)"]}
        correctAnswer="tat (that)"
        explanation="'tat' is used for distant neuter objects or concepts, while 'etat' is used for nearby neuter objects or concepts."
      />
      
      <QuizCard 
        question="Complete: '_____ pustakam' (This is a book)"
        type="text-input"
        correctAnswer="etat"
        explanation="'etat' is the correct neuter demonstrative for 'this' when referring to a nearby neuter object like a book."
      />
    </div>
  )
}
