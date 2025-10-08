import ChapterTitleCard from '@/components/cards/ChapterTitleCard'
import ExplanationCard from '@/components/cards/ExplanationCard'
import ImageCard from '@/components/cards/ImageCard'
import QuizCard from '@/components/cards/QuizCard'
import { getLessonNavigation } from '@/lib/navigation'

export default function SimpleActionsPage() {
  const navigation = getLessonNavigation('/04-actions/simple-actions');
  
  return (
    <div className="space-y-4">
      {/* Chapter & Title Card */}
      <ChapterTitleCard 
        {...navigation}
        title="4.1 - Simple Actions (Present Tense)"
        subtitle="Understanding present tense actions in Sanskrit"
        level="Beginner"
        progress={50}
      />
      
      {/* Vocabulary and Goal Card */}
      <ExplanationCard 
        title="Goal and Vocabulary"
        content="<p>Learn to understand and use present tense actions in Sanskrit. This lesson covers the fundamental concept of present tense verbs.</p>"
        examples={[
          { sanskrit: "gacchati (गच्छति)", english: "goes" },
          { sanskrit: "āgacchati (आगच्छति)", english: "comes" },
          { sanskrit: "likhati (लिखति)", english: "writes" },
          { sanskrit: "paṭhati (पठति)", english: "reads" },
          { sanskrit: "tiṣṭhati (तिष्ठति)", english: "stands" },
          { sanskrit: "upaviśati (उपविशति)", english: "sits" }
        ]}
        tips="Present tense verbs in Sanskrit typically end in '-ti' for third person singular (he/she/it). These are the most common verb forms you'll encounter."
      />
      
      {/* Example Dialogue Card */}
      <ExplanationCard 
        title="Example Dialogue"
        content="<p>Here's how present tense actions are used in conversation:</p>"
        examples={[
          { sanskrit: "Person A: saḥ kutra gacchati? (सः कुत्र गच्छति?)", english: "Where does he go?" },
          { sanskrit: "Person B: saḥ gṛhaṃ gacchati. (सः गृहं गच्छति।)", english: "He goes home." },
          { sanskrit: "Person A: sā kim karoti? (सा किम् करोति?)", english: "What does she do?" },
          { sanskrit: "Person B: sā pustakam paṭhati. (सा पुस्तकं पठति।)", english: "She reads a book." }
        ]}
        tips="Notice how present tense verbs describe ongoing or habitual actions. They answer 'what does he/she do?' questions."
      />
      
      {/* Image Card for Practice */}
      <ImageCard 
        imageSrc="/images/simple-actions.png"
        imageAlt="People performing various actions like walking, reading, writing"
        description="<p>Practice identifying and describing present tense actions. Look at the people in the image and practice saying what they are doing.</p><p><strong>Practice:</strong> Point to different people and practice saying what action they are performing using present tense verbs.</p>"
        placeholder="Write sentences about what people are doing using present tense verbs..."
      />
      
      {/* Quiz Cards */}
      <QuizCard 
        question="What does 'gacchati' mean?"
        options={["comes", "goes", "writes", "reads"]}
        correctAnswer="goes"
        explanation="'Gacchati' means 'goes' in Sanskrit, describing the action of going somewhere."
      />
      
      <QuizCard 
        question="Complete: 'saḥ pustakam _____' (He _____ a book)"
        type="text-input"
        correctAnswer="paṭhati/likhati"
        explanation="You can use 'paṭhati' (reads) or 'likhati' (writes) depending on the action being performed with the book."
      />
    </div>
  )
}
