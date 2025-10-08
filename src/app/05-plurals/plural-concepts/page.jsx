import ChapterTitleCard from '@/components/cards/ChapterTitleCard'
import ExplanationCard from '@/components/cards/ExplanationCard'
import ImageCard from '@/components/cards/ImageCard'
import QuizCard from '@/components/cards/QuizCard'
import { getLessonNavigation } from '@/lib/navigation'

export default function PluralConceptsPage() {
  const navigation = getLessonNavigation('/05-plurals/plural-concepts');
  
  return (
    <div className="space-y-4">
      {/* Chapter & Title Card */}
      <ChapterTitleCard 
        {...navigation}
        title="5.1 - Dealing with Many (Plural Forms)"
        subtitle="Learning to work with multiple items and people"
        level="Beginner"
        progress={50}
      />
      
      {/* Vocabulary and Goal Card */}
      <ExplanationCard 
        title="Goal and Vocabulary"
        content="<p>Learn the fundamental concepts of plural forms in Sanskrit. This lesson covers how to express multiple items, people, and concepts.</p>"
        examples={[
          { sanskrit: "ekavacanam (एकवचनम्)", english: "singular" },
          { sanskrit: "bahuvacanam (बहुवचनम्)", english: "plural" },
          { sanskrit: "vayam (वयम्)", english: "we" },
          { sanskrit: "yūyam (यूयम्)", english: "you (plural)" },
          { sanskrit: "te (ते)", english: "they (masculine)" },
          { sanskrit: "tāḥ (ताः)", english: "they (feminine)" },
          { sanskrit: "tāni (तानि)", english: "they (neuter)" }
        ]}
        tips="Plural forms in Sanskrit change based on gender. Masculine plurals often end in '-āḥ', feminine in '-āḥ', and neuter in '-āni'."
      />
      
      {/* Example Dialogue Card */}
      <ExplanationCard 
        title="Example Dialogue"
        content="<p>Here's how to use plural concepts in conversation:</p>"
        examples={[
          { sanskrit: "Person A: vayam kim karomi? (वयम् किम् करोमि?)", english: "What do we do?" },
          { sanskrit: "Person B: vayam pustakāni paṭhāmaḥ. (वयम् पुस्तकानि पठामः।)", english: "We read books." },
          { sanskrit: "Person A: yūyam kutra gacchatha? (यूयम् कुत्र गच्छथ?)", english: "Where do you (plural) go?" },
          { sanskrit: "Person B: vayam gṛhāni gacchāmaḥ. (वयम् गृहानि गच्छामः।)", english: "We go to houses." }
        ]}
        tips="Notice how plural verbs change: 'karomi' (I do) becomes 'karomaḥ' (we do), and 'gacchāmi' (I go) becomes 'gacchāmaḥ' (we go)."
      />
      
      {/* Image Card for Practice */}
      <ImageCard 
        imageSrc="/images/plural-concepts.png"
        imageAlt="Multiple people and objects representing plural concepts"
        description="<p>Practice using plural forms to describe groups of people and multiple objects. Look at the scene and practice saying what groups of people are doing.</p><p><strong>Practice:</strong> Point to groups of people and practice saying 'vayam [action]' (we do) or 'te [action]' (they do).</p>"
        placeholder="Write sentences using plural forms to describe groups..."
      />
      
      {/* Quiz Cards */}
      <QuizCard 
        question="What does 'vayam' mean?"
        options={["you (plural)", "we", "they", "I"]}
        correctAnswer="we"
        explanation="'Vayam' means 'we' in Sanskrit, used for first person plural (we)."
      />
      
      <QuizCard 
        question="Complete: 'vayam pustakāni _____' (We _____ books)"
        type="text-input"
        correctAnswer="paṭhāmaḥ/likhāmaḥ"
        explanation="You can use 'paṭhāmaḥ' (we read) or 'likhāmaḥ' (we write) depending on the action you want to express with books."
      />
    </div>
  )
}
