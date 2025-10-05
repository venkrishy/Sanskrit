import TitleCard from '@/components/cards/TitleCard'
import ExplanationCard from '@/components/cards/ExplanationCard'
import ImageCard from '@/components/cards/ImageCard'
import QuizCard from '@/components/cards/QuizCard'
import NavigationCard from '@/components/cards/NavigationCard'
import { getLessonNavigation } from '@/lib/navigation'

export default function FeminineNamePage() {
  const navigation = getLessonNavigation('/01-getting-started/feminine-name');
  
  return (
    <div className="space-y-6">
      {/* Navigation Card */}
      <NavigationCard {...navigation} />
      
      {/* Title Card */}
      <TitleCard 
        title="1.3 - My Name Is... (The Feminine Name)"
        subtitle="Learning feminine gender names and introductions"
        level="Beginner"
        progress={40}
      />
      
      {/* Vocabulary and Goal Card */}
      <ExplanationCard 
        title="Goal and Vocabulary"
        content="<p>Learn how to introduce yourself using feminine names in Sanskrit. Feminine names typically end in '-ā' and represent female persons or feminine concepts.</p>"
        examples={[
          { sanskrit: "mama nāma (मम नाम)", english: "My name" },
          { sanskrit: "sītā (सीता)", english: "Sita (feminine name)" },
          { sanskrit: "pārvatī (पार्वती)", english: "Parvati (feminine name)" },
          { sanskrit: "lakṣmī (लक्ष्मी)", english: "Lakshmi (feminine name)" },
          { sanskrit: "putrī (पुत्री)", english: "daughter (feminine)" }
        ]}
        tips="Feminine names in Sanskrit typically end in '-ā' in the nominative case. These represent female persons or feminine concepts."
      />
      
      {/* Example Dialogue Card */}
      <ExplanationCard 
        title="Example Dialogue"
        content="<p>Here's how you can introduce yourself using feminine names:</p>"
        examples={[
          { sanskrit: "Person A: mama nāma sītā.", english: "My name is Sita." },
          { sanskrit: "Person B: mama nāma pārvatī.", english: "My name is Parvati." }
        ]}
        tips="Notice how feminine names end in '-ā'. This is the standard ending for feminine nouns in the nominative case."
      />
      
      {/* Image Card for Practice */}
      <ImageCard 
        imageSrc="/images/feminine-names.png"
        imageAlt="Traditional Indian female figures representing feminine names"
        description="<p>Practice introducing yourself using feminine names. Try: sītā, pārvatī, or lakṣmī.</p><p><strong>Practice:</strong> Look at the figures in the image and practice saying 'mama nāma [name]' for each one.</p>"
        placeholder="Write 'mama nāma [feminine name]' in transliteration..."
      />
      
      {/* Quiz Cards */}
      <QuizCard 
        question="Which is a feminine name?"
        options={["rāmaḥ (Rama)", "sītā (Sita)", "mitram (friend)", "pustakam (book)"]}
        correctAnswer="sītā (Sita)"
        explanation="Feminine names in Sanskrit typically end in '-ā'. 'sītā' is feminine, while 'rāmaḥ' is masculine and 'mitram' is neuter."
      />
      
      <QuizCard 
        question="Complete: 'mama nāma _____' (using a feminine name)"
        type="text-input"
        correctAnswer="sītā/pārvatī/lakṣmī"
        explanation="Any feminine name ending in '-ā' works here. Common examples include sītā, pārvatī, or lakṣmī."
      />
    </div>
  )
}
