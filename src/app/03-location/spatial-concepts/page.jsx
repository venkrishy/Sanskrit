import ChapterTitleCard from '@/components/cards/ChapterTitleCard'
import ExplanationCard from '@/components/cards/ExplanationCard'
import ImageCard from '@/components/cards/ImageCard'
import QuizCard from '@/components/cards/QuizCard'
import { getLessonNavigation } from '@/lib/navigation'

export default function SpatialConceptsPage() {
  const navigation = getLessonNavigation('/03-location/spatial-concepts');
  
  return (
    <div className="space-y-4">
      {/* Chapter & Title Card */}
      <ChapterTitleCard 
        {...navigation}
        title="3.1 - Basic Spatial Concepts"
        subtitle="Learning fundamental location and spatial concepts"
        level="Beginner"
        progress={50}
      />
      
      {/* Vocabulary and Goal Card */}
      <ExplanationCard 
        title="Goal and Vocabulary"
        content="<p>Learn basic spatial concepts in Sanskrit. These fundamental location words will help you describe where things are.</p>"
        examples={[
          { sanskrit: "atra (अत्र)", english: "here" },
          { sanskrit: "tatra (तत्र)", english: "there" },
          { sanskrit: "kutra (कुत्र)", english: "where" },
          { sanskrit: "sarvatra (सर्वत्र)", english: "everywhere" },
          { sanskrit: "anyatra (अन्यत्र)", english: "elsewhere" }
        ]}
        tips="These basic spatial words are essential for describing locations and asking about places in Sanskrit."
      />
      
      {/* Example Dialogue Card */}
      <ExplanationCard 
        title="Example Dialogue"
        content="<p>Here's how to use spatial concepts in conversation:</p>"
        examples={[
          { sanskrit: "Person A: kutra pustakam? (कुत्र पुस्तकम्?)", english: "Where is the book?" },
          { sanskrit: "Person B: atra pustakam asti. (अत्र पुस्तकम् अस्ति।)", english: "The book is here." },
          { sanskrit: "Person A: tatra kim asti? (तत्र किम् अस्ति?)", english: "What is there?" },
          { sanskrit: "Person B: tatra kalam asti. (तत्र कलमम् अस्ति।)", english: "There is a pen." }
        ]}
        tips="Notice how 'kutra' (where) is used to ask about location, and 'atra' (here) and 'tatra' (there) are used to answer."
      />
      
      {/* Image Card for Practice */}
      <ImageCard 
        imageSrc="/images/spatial-concepts.png"
        imageAlt="A room layout showing different spatial relationships"
        description="<p>Practice using spatial concepts to describe locations. Look at the room layout and practice saying where different objects are.</p><p><strong>Practice:</strong> Point to different objects and practice saying 'atra [object]' (here is) or 'tatra [object]' (there is).</p>"
        placeholder="Write sentences about locations using spatial concepts..."
      />
      
      {/* Quiz Cards */}
      <QuizCard 
        question="What does 'kutra' mean?"
        options={["here", "there", "where", "everywhere"]}
        correctAnswer="where"
        explanation="'Kutra' is the Sanskrit word for 'where', used to ask about location."
      />
      
      <QuizCard 
        question="Complete: '_____ pustakam asti' (_____ the book is)"
        type="text-input"
        correctAnswer="atra/tatra"
        explanation="You can use either 'atra' (here) or 'tatra' (there) depending on where the book is located."
      />
    </div>
  )
}
