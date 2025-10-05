import TitleCard from '@/components/cards/TitleCard'
import ExplanationCard from '@/components/cards/ExplanationCard'
import ImageCard from '@/components/cards/ImageCard'
import QuizCard from '@/components/cards/QuizCard'
import NavigationCard from '@/components/cards/NavigationCard'
import { getLessonNavigation } from '@/lib/navigation'

export default function DailyItemsPage() {
  const navigation = getLessonNavigation('/01-getting-started/daily-items');
  
  return (
    <div className="space-y-6">
      {/* Navigation Card */}
      <NavigationCard {...navigation} />
      
      {/* Title Card */}
      <TitleCard 
        title="1.6 - Vocabulary: Top 10 Daily Use Items"
        subtitle="Essential vocabulary for daily conversations"
        level="Beginner"
        progress={70}
      />
      
      {/* Vocabulary and Goal Card */}
      <ExplanationCard 
        title="Goal and Vocabulary"
        content="<p>Learn essential daily-use vocabulary in Sanskrit. These words will help you describe common objects and have basic conversations.</p>"
        examples={[
          { sanskrit: "pustakam (पुस्तकम्)", english: "book" },
          { sanskrit: "phalam (फलम्)", english: "fruit" },
          { sanskrit: "jalam (जलम्)", english: "water" },
          { sanskrit: "annam (अन्नम्)", english: "food" },
          { sanskrit: "vastraṃ (वस्त्रं)", english: "cloth/clothing" },
          { sanskrit: "ghṛtam (घृतम्)", english: "ghee" },
          { sanskrit: "dūdham (दूधम्)", english: "milk" },
          { sanskrit: "śakam (शकम्)", english: "vegetable" },
          { sanskrit: "mudrā (मुद्रा)", english: "coin/money" },
          { sanskrit: "gṛham (गृहम्)", english: "house" }
        ]}
        tips="Most of these words are neuter nouns ending in '-am'. Practice using them with 'idam' (this) and 'tat' (that)."
      />
      
      {/* Example Dialogue Card */}
      <ExplanationCard 
        title="Example Dialogue"
        content="<p>Here's how to use these vocabulary words in conversation:</p>"
        examples={[
          { sanskrit: "Person A: kim idam?", english: "What is this?" },
          { sanskrit: "Person B: idam pustakam.", english: "This is a book." },
          { sanskrit: "Person A: kim tat?", english: "What is that?" },
          { sanskrit: "Person B: tat phalam.", english: "That is a fruit." }
        ]}
        tips="Notice how 'kim idam?' means 'what is this?' and 'kim tat?' means 'what is that?'. Use these to ask about objects around you."
      />
      
      {/* Image Card for Practice */}
      <ImageCard 
        imageSrc="/images/daily-use-items.jpg"
        imageAlt="Various daily use items like books, fruits, water, food, clothing, etc."
        description="<p>Point to different objects around you and practice naming them in Sanskrit. Use &quot;kim idam?&quot; (What is this?) and &quot;kim tat?&quot; (What is that?) to ask questions.</p><p><strong>Practice:</strong> Look at the objects in the image and practice saying what each one is in Sanskrit.</p>"
        placeholder="Write 'idam [object name]' or 'tat [object name]' in transliteration..."
      />
      
      {/* Quiz Cards */}
      <QuizCard 
        question="What does 'pustakam' mean?"
        options={["fruit", "book", "water", "food"]}
        correctAnswer="book"
        explanation="'Pustakam' means 'book' in Sanskrit. It's a neuter noun ending in '-am'."
      />
      
      <QuizCard 
        question="Complete: 'idam _____' (This is water)"
        type="text-input"
        correctAnswer="jalam"
        explanation="'Idam jalam' means 'This is water'. 'Jalam' is the Sanskrit word for water."
      />
    </div>
  )
}
