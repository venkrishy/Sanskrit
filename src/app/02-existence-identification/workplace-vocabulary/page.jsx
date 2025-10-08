import ChapterTitleCard from '@/components/cards/ChapterTitleCard'
import ExplanationCard from '@/components/cards/ExplanationCard'
import ImageCard from '@/components/cards/ImageCard'
import QuizCard from '@/components/cards/QuizCard'
import { getLessonNavigation } from '@/lib/navigation'

export default function WorkplaceVocabularyPage() {
  const navigation = getLessonNavigation('/02-existence-identification/workplace-vocabulary');
  
  return (
    <div className="space-y-4">
      {/* Chapter & Title Card */}
      <ChapterTitleCard 
        {...navigation}
        title="2.6 - Workplace Vocabulary"
        subtitle="Learning workplace and professional vocabulary"
        level="Beginner"
        progress={50}
      />
      
      {/* Vocabulary and Goal Card */}
      <ExplanationCard 
        title="Goal and Vocabulary"
        content="<p>Learn essential workplace and professional vocabulary in Sanskrit. These words will help you describe work environments and professional activities.</p>"
        examples={[
          { sanskrit: "kāryaḥ (कार्यः)", english: "work, duty" },
          { sanskrit: "kāryālayaḥ (कार्यालयः)", english: "office" },
          { sanskrit: "kāryakartā (कार्यकर्ता)", english: "worker, employee" },
          { sanskrit: "kāryaṇīyaḥ (कार्यणीयः)", english: "work to be done" }
        ]}
        tips="Workplace vocabulary in Sanskrit often uses the root 'kārya' (work) combined with other words to form compound terms."
      />
      
      {/* Example Dialogue Card */}
      <ExplanationCard 
        title="Example Dialogue"
        content="<p>Here's how you can use workplace vocabulary in conversation:</p>"
        examples={[
          { sanskrit: "Person A: tava kāryaḥ kim? (तव कार्यः किम्?)", english: "What is your work?" },
          { sanskrit: "Person B: mama kāryaḥ lekhanaṃ. (मम कार्यः लेखनम्।)", english: "My work is writing." },
          { sanskrit: "Person A: kāryālayaḥ kutra? (कार्यालयः कुत्र?)", english: "Where is the office?" },
          { sanskrit: "Person B: kāryālayaḥ atra. (कार्यालयः अत्र।)", english: "The office is here." }
        ]}
        tips="Notice how workplace vocabulary helps you discuss professional activities and work environments in Sanskrit."
      />
      
      {/* Image Card for Practice */}
      <ImageCard 
        imageSrc="/images/workplace-vocabulary.png"
        imageAlt="Traditional Indian workplace scene with professional activities"
        description="<p>Practice using workplace vocabulary with the scene in the image. Describe the work activities and professional environment.</p><p><strong>Practice:</strong> Look at the workplace scene and practice describing the work activities using the vocabulary above.</p>"
        placeholder="Write workplace-related sentences in transliteration..."
      />
      
      {/* Quiz Cards */}
      <QuizCard 
        question="What does 'kāryālayaḥ' mean?"
        options={["work", "office", "worker", "workplace"]}
        correctAnswer="office"
        explanation="'kāryālayaḥ' means 'office' - the place where work is done. It combines 'kārya' (work) with 'ālaya' (place)."
      />
      
      <QuizCard 
        question="Complete: 'mama _____ lekhanaṃ' (My work is writing)"
        type="text-input"
        correctAnswer="kāryaḥ"
        explanation="'kāryaḥ' means 'work' or 'duty'. The complete sentence means 'My work is writing'."
      />
    </div>
  )
}
