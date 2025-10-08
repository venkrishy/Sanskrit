import ChapterTitleCard from '@/components/cards/ChapterTitleCard'
import ExplanationCard from '@/components/cards/ExplanationCard'
import ImageCard from '@/components/cards/ImageCard'
import QuizCard from '@/components/cards/QuizCard'
import { getLessonNavigation } from '@/lib/navigation'

export default function FromWherePage() {
  const navigation = getLessonNavigation('/03-location/from-where');
  
  return (
    <div className="space-y-4">
      {/* Chapter & Title Card */}
      <ChapterTitleCard 
        {...navigation}
        title="3.7 - From Where?"
        subtitle="Learning to ask and answer 'From where?' questions"
        level="Beginner"
        progress={50}
      />
      
      
      {/* Vocabulary and Goal Card */}
      <ExplanationCard 
        title="Goal and Vocabulary"
        content="<p>Learn to express origin and source locations in Sanskrit. These words help you describe where something comes from.</p>"
        examples={[
          { sanskrit: "itaḥ (इतः)", english: "from here" },
          { sanskrit: "tataḥ (ततः)", english: "from there" },
          { sanskrit: "yataḥ (यतः)", english: "from where" },
          { sanskrit: "itaḥ āgacchati (इतः आगच्छति)", english: "comes from here" },
          { sanskrit: "tataḥ āgacchati (ततः आगच्छति)", english: "comes from there" },
          { sanskrit: "yataḥ āgacchati (यतः आगच्छति)", english: "comes from where" }
        ]}
        tips="These words express the origin or source of movement. 'Itaḥ' (from here), 'tataḥ' (from there), and 'yataḥ' (from where) are used to indicate starting points."
      />
      
      {/* Example Dialogue Card */}
      <ExplanationCard 
        title="Example Dialogue"
        content="<p>Here's how to use origin location concepts in conversation:</p>"
        examples={[
          { sanskrit: "Person A: kutra āgacchasi? (कुत्र आगच्छसि?)", english: "Where do you come from?" },
          { sanskrit: "Person B: ahaṃ itaḥ āgacchāmi. (अहं इतः आगच्छामि।)", english: "I come from here." },
          { sanskrit: "Person A: saḥ kutra āgacchati? (सः कुत्र आगच्छति?)", english: "Where does he come from?" },
          { sanskrit: "Person B: saḥ tataḥ āgacchati. (सः ततः आगच्छति।)", english: "He comes from there." }
        ]}
        tips="Notice how origin words are combined with verbs like 'āgacchati' (comes) to express the source of movement."
      />
      
      {/* Image Card for Practice */}
      <ImageCard 
        imageSrc="/images/from-where.png"
        imageAlt="A map showing different origin points and destinations"
        description="<p>Practice using origin location words to describe where people or things come from. Look at the map and practice saying where different objects or people originate.</p><p><strong>Practice:</strong> Point to different locations and practice saying 'itaḥ āgacchati' (comes from here) or 'tataḥ āgacchati' (comes from there).</p>"
        placeholder="Write sentences using 'itaḥ', 'tataḥ', and 'yataḥ' to describe origins..."
      />
      
      {/* Quiz Cards */}
      <QuizCard 
        question="What does 'itaḥ' mean?"
        options={["from there", "from here", "from where", "to here"]}
        correctAnswer="from here"
        explanation="'Itaḥ' means 'from here' in Sanskrit, indicating the origin point near the speaker."
      />
      
      <QuizCard 
        question="Complete: 'ahaṃ _____ āgacchāmi' (I come _____)"
        type="text-input"
        correctAnswer="itaḥ/tataḥ/yataḥ"
        explanation="You can use 'itaḥ' (from here), 'tataḥ' (from there), or 'yataḥ' (from where) depending on the origin point you want to express."
      />
    </div>
  )
}
