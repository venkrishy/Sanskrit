import TitleCard from '@/components/cards/TitleCard'
import ExplanationCard from '@/components/cards/ExplanationCard'
import ImageCard from '@/components/cards/ImageCard'
import QuizCard from '@/components/cards/QuizCard'
import NavigationCard from '@/components/cards/NavigationCard'
import { getLessonNavigation } from '@/lib/navigation'

export default function GreetingsIdentityPage() {
  const navigation = getLessonNavigation('/01-getting-started/greetings-identity');
  
  return (
    <div className="space-y-6">
      {/* Navigation Card */}
      <NavigationCard {...navigation} />
      
      {/* Title Card */}
      <TitleCard 
        title="1.1 - Greetings and Identity"
        subtitle="Basic greetings and introducing yourself in Sanskrit"
        level="Beginner"
        progress={10}
      />
      
      {/* Vocabulary and Goal Card */}
      <ExplanationCard 
        title="Goal and Vocabulary"
        content="<p>Learn essential Sanskrit greetings and how to introduce yourself. These are the building blocks of Sanskrit conversation.</p>"
        examples={[
          { sanskrit: "namaste (नमस्ते)", english: "Hello, greetings" },
          { sanskrit: "Namo Namah", english: "Salutations" },
        ]}
        tips="Remember: Sanskrit has different forms for Salutations."
      />
      
      {/* Example Dialogue Card */}
      <ExplanationCard 
        title="Example Dialogue"
        content="<p>Here's how a typical introduction conversation would go in Sanskrit:</p>"
        examples={[
          { sanskrit: "Person A: namaste!", english: "Hello!" },
          { sanskrit: "Person B: namaste! mama nāma rāmaḥ. tava nāma kim?", english: "Hello! My name is Rama. What is your name?" },
          { sanskrit: "Person A: mama nāma sītā.", english: "My name is Sita." }
        ]}
        tips="Notice how 'mama nāma' means 'my name' and 'tava nāma' means 'your name'. The word order is flexible in Sanskrit."
      />
      
      {/* Image Card for Practice */}
      <ImageCard 
        imageSrc="/images/greetings-practice.png"
        imageAlt="Two people greeting each other in traditional Indian style"
        description="<p>Practice the greeting conversation with a partner. Use the vocabulary you've learned to introduce yourself and ask for their name.</p><p><strong>Role Playing Prompt:</strong> Imagine you're meeting someone new at a Sanskrit class. Practice introducing yourself and asking for their name. Use the vocabulary above to have a natural conversation!</p>"
        placeholder="Write a Sanskrit greeting and introduction in transliteration..."
      />
      
      {/* Quiz Cards */}
      <QuizCard 
        question="What does 'namaste' mean?"
        options={["Goodbye", "Hello", "Thank you", "Please"]}
        correctAnswer="Hello"
        explanation="'Namaste' is the most common Sanskrit greeting, meaning 'hello' or 'greetings'. It's used throughout India and in Sanskrit learning."
      />
      
      <QuizCard 
        question="Complete this sentence: 'mama nāma _____' (My name is _____)"
        type="text-input"
        correctAnswer="[Your name]"
        explanation="'Mama nāma' means 'my name' in Sanskrit. You can follow it with any name or noun."
      />
    </div>
  )
}
