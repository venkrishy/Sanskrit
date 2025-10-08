import ChapterTitleCard from '@/components/cards/ChapterTitleCard'
import ExplanationCard from '@/components/cards/ExplanationCard'
import ImageCard from '@/components/cards/ImageCard'
import QuizCard from '@/components/cards/QuizCard'
import { getLessonNavigation } from '@/lib/navigation'

export default function SingularPluralPage() {
  const navigation = getLessonNavigation('/05-plurals/singular-plural');
  
  return (
    <div className="space-y-4">
      {/* Chapter & Title Card */}
      <ChapterTitleCard 
        {...navigation}
        title="5.2 - Singular and Plural"
        subtitle="Learning the difference between singular and plural forms"
        level="Beginner"
        progress={20}
      />
      
      {/* Vocabulary and Goal Card */}
      <ExplanationCard 
        title="Goal and Vocabulary"
        content="<p>Learn the difference between singular and plural forms in Sanskrit. This lesson focuses on understanding when to use singular vs plural.</p>"
        examples={[
          { sanskrit: "ekaḥ (एकः)", english: "one (singular)" },
          { sanskrit: "bahavaḥ (बहवः)", english: "many (plural)" },
          { sanskrit: "putraḥ (पुत्रः)", english: "son (singular)" },
          { sanskrit: "putrāḥ (पुत्राः)", english: "sons (plural)" }
        ]}
        tips="Singular forms refer to one item, while plural forms refer to multiple items. The endings change based on number."
      />
      
      {/* Example Dialogue Card */}
      <ExplanationCard 
        title="Example Dialogue"
        content="<p>Here's how you can use singular and plural forms in conversation:</p>"
        examples={[
          { sanskrit: "Person A: ekaḥ putraḥ? (एकः पुत्रः?)", english: "One son?" },
          { sanskrit: "Person B: ām, ekaḥ putraḥ. (आम्, एकः पुत्रः।)", english: "Yes, one son." },
          { sanskrit: "Person A: bahavaḥ putrāḥ? (बहवः पुत्राः?)", english: "Many sons?" },
          { sanskrit: "Person B: ām, bahavaḥ putrāḥ. (आम्, बहवः पुत्राः।)", english: "Yes, many sons." }
        ]}
        tips="Notice how the endings change from 'putraḥ' (singular) to 'putrāḥ' (plural) to indicate number."
      />
      
      {/* Image Card for Practice */}
      <ImageCard 
        imageSrc="/images/singular-plural.png"
        imageAlt="Traditional Indian scene showing singular and plural objects"
        description="<p>Practice using singular and plural forms with the objects in the image. Count items and practice saying the correct forms.</p><p><strong>Practice:</strong> Look at the objects and practice saying 'ekaḥ [object]' for single items and 'bahavaḥ [objects]' for multiple items.</p>"
        placeholder="Write singular and plural sentences in transliteration..."
      />
      
      {/* Quiz Cards */}
      <QuizCard 
        question="What is the plural form of 'putraḥ' (son)?"
        options={["putrāḥ", "putrau", "putrāṇi", "putrāḥ"]}
        correctAnswer="putrāḥ"
        explanation="'putrāḥ' is the plural form of 'putraḥ' (son), meaning 'sons'."
      />
      
      <QuizCard 
        question="Complete: '_____ putrāḥ' (Many sons)"
        type="text-input"
        correctAnswer="bahavaḥ"
        explanation="'bahavaḥ' means 'many' and is used with plural nouns like 'putrāḥ' (sons)."
      />
    </div>
  )
}
