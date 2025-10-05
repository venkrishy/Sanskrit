import TitleCard from '@/components/cards/TitleCard'
import ExplanationCard from '@/components/cards/ExplanationCard'
import ImageCard from '@/components/cards/ImageCard'
import QuizCard from '@/components/cards/QuizCard'
import NavigationCard from '@/components/cards/NavigationCard'
import { getLessonNavigation } from '@/lib/navigation'

export default function MasculineNamePage() {
  const navigation = getLessonNavigation('/01-getting-started/masculine-name');
  
  return (
    <div className="space-y-6">
      {/* Navigation Card */}
      <NavigationCard {...navigation} />
      
      {/* Title Card */}
      <TitleCard 
        title="1.2 - My Name Is... (The Masculine Name)"
        subtitle="Learning masculine gender names and introductions"
        level="Beginner"
        progress={30}
      />
      
      {/* Vocabulary and Goal Card */}
      <ExplanationCard 
        title="Goal and Vocabulary"
        content="<p>Learn how to introduce yourself using masculine names in Sanskrit. Masculine names typically end in '-aḥ' and represent male persons or masculine concepts.</p>"
        examples={[
          { sanskrit: "mama nāma (मम नाम)", english: "My name" },
          { sanskrit: "rāmaḥ (रामः)", english: "Rama (masculine name)" },
          { sanskrit: "kṛṣṇaḥ (कृष्णः)", english: "Krishna (masculine name)" },
          { sanskrit: "arjunaḥ (अर्जुनः)", english: "Arjuna (masculine name)" },
          { sanskrit: "putraḥ (पुत्रः)", english: "son (masculine)" }
        ]}
        tips="Masculine names in Sanskrit typically end in '-aḥ' in the nominative case. These represent male persons or masculine concepts."
      />
      
      {/* Example Dialogue Card */}
      <ExplanationCard 
        title="Example Dialogue"
        content="<p>Here's how you can introduce yourself using masculine names:</p>"
        examples={[
          { sanskrit: "Person A: mama nāma rāmaḥ.", english: "My name is Rama." },
          { sanskrit: "Person B: mama nāma kṛṣṇaḥ.", english: "My name is Krishna." }
        ]}
        tips="Notice how masculine names end in '-aḥ'. This is the standard ending for masculine nouns in the nominative case."
      />
      
      {/* Image Card for Practice */}
      <ImageCard 
        imageSrc="/images/masculine-names.png"
        imageAlt="Traditional Indian male figures representing masculine names"
        description="<p>Practice introducing yourself using masculine names. Try: rāmaḥ, kṛṣṇaḥ, or arjunaḥ.</p><p><strong>Practice:</strong> Look at the figures in the image and practice saying 'mama nāma [name]' for each one.</p>"
        placeholder="Write 'mama nāma [masculine name]' in transliteration..."
      />
      
      {/* Quiz Cards */}
      <QuizCard 
        question="Which is a masculine name?"
        options={["sītā (Sita)", "rāmaḥ (Rama)", "mitram (friend)", "pustakam (book)"]}
        correctAnswer="rāmaḥ (Rama)"
        explanation="Masculine names in Sanskrit typically end in '-aḥ'. 'rāmaḥ' is masculine, while 'sītā' is feminine and 'mitram' is neuter."
      />
      
      <QuizCard 
        question="Complete: 'mama nāma _____' (using a masculine name)"
        type="text-input"
        correctAnswer="rāmaḥ/kṛṣṇaḥ/arjunaḥ"
        explanation="Any masculine name ending in '-aḥ' works here. Common examples include rāmaḥ, kṛṣṇaḥ, or arjunaḥ."
      />
    </div>
  )
}
