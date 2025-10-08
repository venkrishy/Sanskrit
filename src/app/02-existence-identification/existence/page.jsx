import ChapterTitleCard from '@/components/cards/ChapterTitleCard'
import ExplanationCard from '@/components/cards/ExplanationCard'
import ImageCard from '@/components/cards/ImageCard'
import QuizCard from '@/components/cards/QuizCard'
import { getLessonNavigation } from '@/lib/navigation'

export default function ExistencePage() {
  const navigation = getLessonNavigation('/02-existence-identification/existence');
  
  return (
    <div className="space-y-4">
      {/* Chapter & Title Card */}
      <ChapterTitleCard 
        {...navigation}
        title="2.1 - Existence and Identification"
        subtitle="Learning to express existence and identify objects"
        level="Beginner"
        progress={50}
      />
      
      {/* Vocabulary and Goal Card */}
      <ExplanationCard 
        title="Goal and Vocabulary"
        content="<p>Learn how to express existence and identify objects in Sanskrit. This lesson covers the fundamental concepts of 'is' and 'is not' in Sanskrit.</p>"
        examples={[
          { sanskrit: "asti (अस्ति)", english: "is, exists" },
          { sanskrit: "nāsti (नास्ति)", english: "is not, does not exist" },
          { sanskrit: "kim asti? (किम् अस्ति?)", english: "What is there?" },
          { sanskrit: "atra asti (अत्र अस्ति)", english: "Here is" },
          { sanskrit: "tatra asti (तत्र अस्ति)", english: "There is" }
        ]}
        tips="The word 'asti' is one of the most fundamental verbs in Sanskrit, meaning 'is' or 'exists'. Its negative form is 'nāsti'."
      />
      
      {/* Example Dialogue Card */}
      <ExplanationCard 
        title="Example Dialogue"
        content="<p>Here's how to use existence verbs in conversation:</p>"
        examples={[
          { sanskrit: "Person A: kim asti atra? (किम् अस्ति अत्र?)", english: "What is here?" },
          { sanskrit: "Person B: pustakam asti atra. (पुस्तकम् अस्ति अत्र।)", english: "A book is here." },
          { sanskrit: "Person A: kalam asti? (कलमम् अस्ति?)", english: "Is there a pen?" },
          { sanskrit: "Person B: na, kalam nāsti. (न, कलमम् नास्ति।)", english: "No, there is no pen." }
        ]}
        tips="Notice how 'kim asti?' means 'what is?' and can be used to ask about existence. The word order is flexible in Sanskrit."
      />
      
      {/* Image Card for Practice */}
      <ImageCard 
        imageSrc="/images/existence-practice.png"
        imageAlt="Various objects on a table showing existence concepts"
        description="<p>Practice identifying objects and expressing their existence. Look at the objects in the image and practice saying what is and isn't there.</p><p><strong>Practice:</strong> Point to different objects and practice saying 'asti' (is) or 'nāsti' (is not) for each one.</p>"
        placeholder="Write sentences about what exists using 'asti' and 'nāsti'..."
      />
      
      {/* Quiz Cards */}
      <QuizCard 
        question="What does 'asti' mean?"
        options={["is not", "is, exists", "here", "there"]}
        correctAnswer="is, exists"
        explanation="'Asti' is the Sanskrit verb meaning 'is' or 'exists'. It's one of the most fundamental words in Sanskrit."
      />
      
      <QuizCard 
        question="Complete: 'pustakam _____' (The book _____)"
        type="text-input"
        correctAnswer="asti/nāsti"
        explanation="You can use either 'asti' (is) or 'nāsti' (is not) depending on whether the book exists or not."
      />
    </div>
  )
}
