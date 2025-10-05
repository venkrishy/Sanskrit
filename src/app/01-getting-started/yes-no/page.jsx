import TitleCard from '@/components/cards/TitleCard'
import ExplanationCard from '@/components/cards/ExplanationCard'
import ImageCard from '@/components/cards/ImageCard'
import QuizCard from '@/components/cards/QuizCard'
import NavigationCard from '@/components/cards/NavigationCard'
import { getLessonNavigation } from '@/lib/navigation'

export default function YesNoPage() {
  const navigation = getLessonNavigation('/01-getting-started/yes-no');
  
  return (
    <div className="space-y-6">
      {/* Navigation Card */}
      <NavigationCard {...navigation} />
      
      {/* Title Card */}
      <TitleCard 
        title="1.6 - Yes/No: Simple Affirmation and Negation"
        subtitle="Learning to say yes and no in Sanskrit"
        level="Beginner"
        progress={60}
      />
      
      {/* Vocabulary and Goal Card */}
      <ExplanationCard 
        title="Goal and Vocabulary"
        content="<p>Learn how to give simple yes/no answers in Sanskrit. These are essential for basic conversation and confirmation.</p>"
        examples={[
          { sanskrit: "āṃ (आम्)", english: "Yes" },
          { sanskrit: "na (न)", english: "No" },
          { sanskrit: "āṃ, mama nāma rāmaḥ (आम्, मम नाम रामः)", english: "Yes, my name is Rama" },
          { sanskrit: "na, mama nāma sītā (न, मम नाम सीता)", english: "No, my name is Sita" },
          { sanskrit: "kim? āṃ na vā? (किम्? आम् न वा?)", english: "What? Yes or no?" }
        ]}
        tips="'āṃ' is the standard way to say 'yes' in Sanskrit, while 'na' means 'no'. These are simple but essential words for conversation."
      />
      
      {/* Example Dialogue Card */}
      <ExplanationCard 
        title="Example Dialogue"
        content="<p>Here's how to use yes/no responses in conversation:</p>"
        examples={[
          { sanskrit: "Person A: tava nāma rāmaḥ?", english: "Is your name Rama?" },
          { sanskrit: "Person B: āṃ, mama nāma rāmaḥ.", english: "Yes, my name is Rama." },
          { sanskrit: "Person A: tava nāma sītā?", english: "Is your name Sita?" },
          { sanskrit: "Person B: na, mama nāma rāmaḥ.", english: "No, my name is Rama." }
        ]}
        tips="Notice how you can combine 'āṃ' or 'na' with additional information to give complete answers."
      />
      
      {/* Image Card for Practice */}
      <ImageCard 
        imageSrc="/images/yes-no-practice.png"
        imageAlt="People having conversations with yes/no responses"
        description="<p>Practice answering yes/no questions about names. Ask someone &quot;tava nāma [name]?&quot; and they should respond with &quot;āṃ&quot; (yes) or &quot;na&quot; (no) followed by their actual name.</p><p><strong>Practice:</strong> Look at the people in the image and practice asking yes/no questions about their names.</p>"
        placeholder="Write a yes/no question and answer in transliteration..."
      />
      
      {/* Quiz Cards */}
      <QuizCard 
        question="How do you say 'Yes' in Sanskrit?"
        options={["na", "āṃ", "kim", "kaḥ"]}
        correctAnswer="āṃ"
        explanation="'āṃ' is the standard way to say 'yes' in Sanskrit. 'na' means 'no', while 'kim' means 'what' and 'kaḥ' means 'who'."
      />
      
      <QuizCard 
        question="Complete: 'na, mama nāma _____' (No, my name is _____)"
        type="text-input"
        correctAnswer="[Your name]"
        explanation="You can use any name here. The pattern is 'na, mama nāma [name]' meaning 'No, my name is [name]'."
      />
    </div>
  )
}
