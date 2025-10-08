import ChapterTitleCard from '@/components/cards/ChapterTitleCard'
import ExplanationCard from '@/components/cards/ExplanationCard'
import ImageCard from '@/components/cards/ImageCard'
import QuizCard from '@/components/cards/QuizCard'
import { getLessonNavigation } from '@/lib/navigation'

export default function DirectionsPage() {
  const navigation = getLessonNavigation('/03-location/directions');
  
  return (
    <div className="space-y-4">
      {/* Chapter & Title Card */}
      <ChapterTitleCard 
        {...navigation}
        title="3.5 - Directions"
        subtitle="Learning directional words and concepts"
        level="Beginner"
        progress={50}
      />
      
      {/* Vocabulary and Goal Card */}
      <ExplanationCard 
        title="Goal and Vocabulary"
        content="<p>Learn directional words and concepts in Sanskrit. These words help you describe movement and direction.</p>"
        examples={[
          { sanskrit: "uttara (उत्तर)", english: "north" },
          { sanskrit: "dakṣiṇa (दक्षिण)", english: "south" },
          { sanskrit: "pūrva (पूर्व)", english: "east" },
          { sanskrit: "paścima (पश्चिम)", english: "west" }
        ]}
        tips="Directional words in Sanskrit are essential for navigation and describing movement. They help you give and follow directions."
      />
      
      {/* Example Dialogue Card */}
      <ExplanationCard 
        title="Example Dialogue"
        content="<p>Here's how you can use directional words in conversation:</p>"
        examples={[
          { sanskrit: "Person A: kutra gacchasi? (कुत्र गच्छसि?)", english: "Where are you going?" },
          { sanskrit: "Person B: uttaraṃ gacchāmi. (उत्तरं गच्छामि।)", english: "I am going north." },
          { sanskrit: "Person A: dakṣiṇaṃ kutra? (दक्षिणं कुत्र?)", english: "Where is the south?" },
          { sanskrit: "Person B: dakṣiṇaṃ tatra. (दक्षिणं तत्र।)", english: "The south is there." }
        ]}
        tips="Notice how directional words work with verbs like 'gacchāmi' (I go) to describe movement and direction."
      />
      
      {/* Image Card for Practice */}
      <ImageCard 
        imageSrc="/images/directions.png"
        imageAlt="Traditional Indian compass with directional concepts"
        description="<p>Practice using directional words with the compass in the image. Point to different directions and practice saying the Sanskrit words.</p><p><strong>Practice:</strong> Look at the compass and practice saying the Sanskrit words for each direction.</p>"
        placeholder="Write directional sentences in transliteration..."
      />
      
      {/* Quiz Cards */}
      <QuizCard 
        question="What does 'uttara' mean?"
        options={["south", "north", "east", "west"]}
        correctAnswer="north"
        explanation="'uttara' means 'north' - one of the four cardinal directions in Sanskrit."
      />
      
      <QuizCard 
        question="Complete: '_____ gacchāmi' (I am going south)"
        type="text-input"
        correctAnswer="dakṣiṇaṃ"
        explanation="'dakṣiṇaṃ' means 'south' in the accusative case, used with verbs of movement."
      />
    </div>
  )
}
