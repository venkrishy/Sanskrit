import ChapterTitleCard from '@/components/cards/ChapterTitleCard'
import ExplanationCard from '@/components/cards/ExplanationCard'
import ImageCard from '@/components/cards/ImageCard'
import QuizCard from '@/components/cards/QuizCard'
import { getLessonNavigation } from '@/lib/navigation'

export default function ExistsNotPage() {
  const navigation = getLessonNavigation('/02-existence-identification/exists-not');
  
  return (
    <div className="space-y-4">
      {/* Chapter & Title Card */}
      <ChapterTitleCard 
        {...navigation}
        title="2.2 - Exists/Does Not Exist"
        subtitle="Learning to express existence and non-existence"
        level="Beginner"
        progress={50}
      />
      
      
      {/* Vocabulary and Goal Card */}
      <ExplanationCard 
        title="Goal and Vocabulary"
        content="<p>Learn to express both positive and negative existence in Sanskrit. This lesson focuses on the contrast between 'asti' (is) and 'nāsti' (is not).</p>"
        examples={[
          { sanskrit: "asti (अस्ति)", english: "is, exists" },
          { sanskrit: "nāsti (नास्ति)", english: "is not, does not exist" },
          { sanskrit: "kim nāsti? (किम् नास्ति?)", english: "What is not there?" },
          { sanskrit: "atra nāsti (अत्र नास्ति)", english: "Here is not" },
          { sanskrit: "tatra nāsti (तत्र नास्ति)", english: "There is not" }
        ]}
        tips="'Nāsti' is the negative form of 'asti'. It's formed by adding 'nā' (not) before 'asti' (is)."
      />
      
      {/* Example Dialogue Card */}
      <ExplanationCard 
        title="Example Dialogue"
        content="<p>Here's how to use both positive and negative existence in conversation:</p>"
        examples={[
          { sanskrit: "Person A: pustakam asti atra? (पुस्तकम् अस्ति अत्र?)", english: "Is there a book here?" },
          { sanskrit: "Person B: ām, pustakam asti. (आम्, पुस्तकम् अस्ति।)", english: "Yes, there is a book." },
          { sanskrit: "Person A: kalam asti? (कलमम् अस्ति?)", english: "Is there a pen?" },
          { sanskrit: "Person B: na, kalam nāsti. (न, कलमम् नास्ति।)", english: "No, there is no pen." }
        ]}
        tips="Notice how we use 'ām' (yes) with 'asti' and 'na' (no) with 'nāsti' to give complete answers."
      />
      
      {/* Image Card for Practice */}
      <ImageCard 
        imageSrc="/images/exists-not-practice.png"
        imageAlt="A table with some objects present and some missing"
        description="<p>Practice identifying what exists and what doesn't. Look at the image and practice saying what is present and what is missing.</p><p><strong>Practice:</strong> Make a list of what 'asti' (is) and what 'nāsti' (is not) in the scene.</p>"
        placeholder="Write sentences about what exists and what doesn't exist..."
      />
      
      {/* Quiz Cards */}
      <QuizCard 
        question="What is the negative form of 'asti'?"
        options={["asti", "nāsti", "kim", "atra"]}
        correctAnswer="nāsti"
        explanation="'Nāsti' is the negative form of 'asti', meaning 'is not' or 'does not exist'."
      />
      
      <QuizCard 
        question="Complete: 'kalam _____' (The pen _____)"
        type="text-input"
        correctAnswer="asti/nāsti"
        explanation="You can use either 'asti' (is) or 'nāsti' (is not) depending on whether the pen exists or not."
      />
    </div>
  )
}
