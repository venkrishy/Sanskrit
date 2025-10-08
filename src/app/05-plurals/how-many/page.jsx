import ChapterTitleCard from '@/components/cards/ChapterTitleCard'
import ExplanationCard from '@/components/cards/ExplanationCard'
import ImageCard from '@/components/cards/ImageCard'
import QuizCard from '@/components/cards/QuizCard'
import { getLessonNavigation } from '@/lib/navigation'

export default function HowManyPage() {
  const navigation = getLessonNavigation('/05-plurals/how-many');
  
  return (
    <div className="space-y-4">
      {/* Chapter & Title Card */}
      <ChapterTitleCard 
        {...navigation}
        title="5.8 - How Many?"
        subtitle="Learning to ask and answer 'How many?' questions"
        level="Beginner"
        progress={80}
      />
      
      {/* Vocabulary and Goal Card */}
      <ExplanationCard 
        title="Goal and Vocabulary"
        content="<p>Learn to ask and answer 'How many?' questions in Sanskrit. This lesson focuses on counting and quantity expressions.</p>"
        examples={[
          { sanskrit: "kati (कति)", english: "how many" },
          { sanskrit: "ekaḥ (एकः)", english: "one" },
          { sanskrit: "dve (द्वे)", english: "two" },
          { sanskrit: "trayaḥ (त्रयः)", english: "three" }
        ]}
        tips="'Kati' is used to ask 'how many' questions. Numbers in Sanskrit have different forms for masculine, feminine, and neuter nouns."
      />
      
      {/* Example Dialogue Card */}
      <ExplanationCard 
        title="Example Dialogue"
        content="<p>Here's how you can use 'how many' questions in conversation:</p>"
        examples={[
          { sanskrit: "Person A: kati pustakāni? (कति पुस्तकानि?)", english: "How many books?" },
          { sanskrit: "Person B: trayāṇi pustakāni. (त्रयाणि पुस्तकानि।)", english: "Three books." },
          { sanskrit: "Person A: kati putrāḥ? (कति पुत्राः?)", english: "How many sons?" },
          { sanskrit: "Person B: dvau putrau. (द्वौ पुत्रौ।)", english: "Two sons." }
        ]}
        tips="Notice how numbers change form based on the gender and number of the noun they describe."
      />
      
      {/* Image Card for Practice */}
      <ImageCard 
        imageSrc="/images/how-many.png"
        imageAlt="Traditional Indian scene with countable objects"
        description="<p>Practice using 'how many' questions with the objects in the image. Count different items and practice saying the numbers.</p><p><strong>Practice:</strong> Look at the objects and practice asking 'kati [object]?' and answering with the correct numbers.</p>"
        placeholder="Write counting sentences in transliteration..."
      />
      
      {/* Quiz Cards */}
      <QuizCard 
        question="What does 'kati' mean?"
        options={["how many", "how much", "where", "when"]}
        correctAnswer="how many"
        explanation="'Kati' is used to ask 'how many' questions about countable items in Sanskrit."
      />
      
      <QuizCard 
        question="Complete: '_____ pustakāni?' (How many books?)"
        type="text-input"
        correctAnswer="kati"
        explanation="'Kati' is the correct word to ask 'how many' questions in Sanskrit."
      />
    </div>
  )
}
