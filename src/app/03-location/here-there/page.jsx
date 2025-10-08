import ChapterTitleCard from '@/components/cards/ChapterTitleCard'
import ExplanationCard from '@/components/cards/ExplanationCard'
import ImageCard from '@/components/cards/ImageCard'
import QuizCard from '@/components/cards/QuizCard'
import { getLessonNavigation } from '@/lib/navigation'

export default function HereTherePage() {
  const navigation = getLessonNavigation('/03-location/here-there');
  
  return (
    <div className="space-y-4">
      {/* Chapter & Title Card */}
      <ChapterTitleCard 
        {...navigation}
        title="3.3 - Here and There"
        subtitle="Learning to express 'here' and 'there' in Sanskrit"
        level="Beginner"
        progress={50}
      />
      
      {/* Vocabulary and Goal Card */}
      <ExplanationCard 
        title="Goal and Vocabulary"
        content="<p>Learn to express 'here' and 'there' in Sanskrit. These words are essential for describing locations and positions.</p>"
        examples={[
          { sanskrit: "atra (अत्र)", english: "here" },
          { sanskrit: "tatra (तत्र)", english: "there" },
          { sanskrit: "atra asti (अत्र अस्ति)", english: "it is here" },
          { sanskrit: "tatra asti (तत्र अस्ति)", english: "it is there" }
        ]}
        tips="'atra' and 'tatra' are fundamental location words in Sanskrit. They help you describe where things are located."
      />
      
      {/* Example Dialogue Card */}
      <ExplanationCard 
        title="Example Dialogue"
        content="<p>Here's how you can use 'here' and 'there' in conversation:</p>"
        examples={[
          { sanskrit: "Person A: kutra asti? (कुत्र अस्ति?)", english: "Where is it?" },
          { sanskrit: "Person B: atra asti. (अत्र अस्ति।)", english: "It is here." },
          { sanskrit: "Person A: tatra asti? (तत्र अस्ति?)", english: "Is it there?" },
          { sanskrit: "Person B: ām, tatra asti. (आम्, तत्र अस्ति।)", english: "Yes, it is there." }
        ]}
        tips="Notice how 'atra' and 'tatra' work with 'asti' to describe location. These are very common in Sanskrit conversation."
      />
      
      {/* Image Card for Practice */}
      <ImageCard 
        imageSrc="/images/here-there.png"
        imageAlt="Traditional Indian scene showing here and there locations"
        description="<p>Practice using 'here' and 'there' with the scene in the image. Point to different locations and practice saying 'atra' and 'tatra'.</p><p><strong>Practice:</strong> Look at the scene and practice describing where different objects are located using 'atra' and 'tatra'.</p>"
        placeholder="Write location sentences in transliteration..."
      />
      
      {/* Quiz Cards */}
      <QuizCard 
        question="What does 'atra' mean?"
        options={["there", "here", "where", "everywhere"]}
        correctAnswer="here"
        explanation="'atra' means 'here' - indicating a location close to the speaker."
      />
      
      <QuizCard 
        question="Complete: '_____ asti' (It is there)"
        type="text-input"
        correctAnswer="tatra"
        explanation="'tatra' means 'there' - indicating a location away from the speaker."
      />
    </div>
  )
}
