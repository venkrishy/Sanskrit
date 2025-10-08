import ChapterTitleCard from '@/components/cards/ChapterTitleCard'
import ExplanationCard from '@/components/cards/ExplanationCard'
import ImageCard from '@/components/cards/ImageCard'
import QuizCard from '@/components/cards/QuizCard'
import { getLessonNavigation } from '@/lib/navigation'

export default function WhoWhatPage() {
  const navigation = getLessonNavigation('/01-getting-started/who-what');
  
  return (
    <div className="space-y-4">
      {/* Chapter & Title Card */}
      <ChapterTitleCard 
        {...navigation}
        title="1.4 - Asking: Who? and What? (kaḥ and kim)"
        subtitle="Learning interrogative pronouns"
        level="Beginner"
        progress={50}
      />
      
      {/* Vocabulary and Goal Card */}
      <ExplanationCard 
        title="Goal and Vocabulary"
        content="<p>Learn how to ask questions using interrogative pronouns in Sanskrit. These words help you gather information in conversations.</p>"
        examples={[
          { sanskrit: "kaḥ (कः)", english: "Who (masculine)" },
          { sanskrit: "kā (का)", english: "Who (feminine)" },
          { sanskrit: "kim (किम्)", english: "What" },
          { sanskrit: "tava nāma kim? (तव नाम किम्?)", english: "What is your name?" },
          { sanskrit: "saḥ kaḥ? (सः कः?)", english: "Who is he?" },
          { sanskrit: "sā kā? (सा का?)", english: "Who is she?" }
        ]}
        tips="Interrogative pronouns change based on gender: 'kaḥ' for masculine, 'kā' for feminine, and 'kim' for 'what'."
      />
      
      {/* Example Dialogue Card */}
      <ExplanationCard 
        title="Example Dialogue"
        content="<p>Here's how to use interrogative pronouns in conversation:</p>"
        examples={[
          { sanskrit: "Person A: tava nāma kim?", english: "What is your name?" },
          { sanskrit: "Person B: mama nāma rāmaḥ. tava nāma kim?", english: "My name is Rama. What is your name?" },
          { sanskrit: "Person A: mama nāma sītā.", english: "My name is Sita." }
        ]}
        tips="Notice how 'tava nāma kim?' means 'what is your name?' and 'mama nāma' means 'my name'."
      />
      
      {/* Image Card for Practice */}
      <ImageCard 
        imageSrc="/images/question-words.png"
        imageAlt="Visual representation of question words and interrogative pronouns"
        description="<p>Practice asking and answering questions about names. Use &quot;tava nāma kim?&quot; to ask &quot;What is your name?&quot; and respond with &quot;mama nāma [name]&quot;.</p><p><strong>Practice:</strong> Look at the people in the image and practice asking &quot;Who is he/she?&quot; using the appropriate interrogative pronoun.</p>"
        placeholder="Write a question using 'kaḥ', 'kā', or 'kim' in transliteration..."
      />
      
      {/* Quiz Cards */}
      <QuizCard 
        question="How do you ask 'What is your name?'?"
        options={["mama nāma kim?", "tava nāma kim?", "saḥ kaḥ?", "sā kā?"]}
        correctAnswer="tava nāma kim?"
        explanation="'Tava nāma kim?' means 'What is your name?' - 'tava' means 'your', 'nāma' means 'name', and 'kim' means 'what'."
      />
      
      <QuizCard 
        question="Complete: 'saḥ _____' (Who is he?)"
        type="text-input"
        correctAnswer="kaḥ"
        explanation="'Saḥ kaḥ?' means 'Who is he?' - 'saḥ' means 'he' and 'kaḥ' means 'who' (masculine)."
      />
    </div>
  )
}
