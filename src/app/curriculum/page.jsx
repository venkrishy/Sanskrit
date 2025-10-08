import TitleCard from '@/components/cards/TitleCard'

export default function CurriculumPage() {
  const curriculum = [
    {
      number: 1,
      title: "Hello! Getting Started",
      description: "Greetings, identity, and basic introductions",
      lessons: [
        "1.1 - Greetings and Identity",
        "1.2 - My Name Is... (The Masculine Name)",
        "1.3 - My Name Is... (The Feminine Name)",
        "1.4 - Asking: Who? and What? (kaḥ and kim)",
        "1.5 - Yes/No: Simple Affirmation and Negation",
        "1.6 - Vocabulary: Top 10 Daily Use Items"
      ]
    },
    {
      number: 2,
      title: "Naming Things & Asking 'Is It There?'",
      description: "Existence, identification, and demonstratives",
      lessons: [
        "2.1 - Existence and Identification",
        "2.2 - Exists and Is Not (asti and nāsti)",
        "2.3 - Demonstrating: This and That (Neuter)",
        "2.4 - Demonstrating: This and That (Masculine)",
        "2.5 - Demonstrating: This and That (Feminine)",
        "2.6 - Vocabulary: Workplace Items"
      ]
    },
    {
      number: 3,
      title: "Where Is It? Describing Location",
      description: "Basic spatial concepts and location vocabulary",
      lessons: [
        "3.1 - Basic Spatial Concepts",
        "3.2 - Location: Where? (kutra)",
        "3.3 - Location: Here and There (atra and tatra)",
        "3.4 - Location: Everywhere and Elsewhere",
        "3.5 - Location: Front, Back, Left, Right",
        "3.6 - Location: Inside and Outside",
        "3.7 - Location: From Here/There/Where"
      ]
    },
    {
      number: 4,
      title: "Action! What People Are Doing",
      description: "Simple actions and present tense verbs",
      lessons: [
        "4.1 - Simple Actions (Present Tense)",
        "4.2 - Action! Simple Verbs (gacchati, likhati)",
        "4.3 - Using I with Action Words (Ahaṃ gacchāmi)",
        "4.4 - Using You with Action Words (Tvaṃ gacchasi)",
        "4.5 - Requests and Simple Commands",
        "4.6 - Necessity: Needs and Sufficiency"
      ]
    },
    {
      number: 5,
      title: "Groups and Plurals",
      description: "Learning to work with multiple items and people",
      lessons: [
        "5.1 - Dealing with Many (Plural Forms)",
        "5.2 - Singular and Plural Concepts",
        "5.3 - Plurals: We and Y'all",
        "5.4 - Plurals: They/Those (Masculine)",
        "5.5 - Plurals: They/Those (Feminine)",
        "5.6 - Plurals: They/Those (Neuter)",
        "5.7 - Plurals: Action Words",
        "5.8 - Asking: How many?"
      ]
    },
    {
      number: 6,
      title: "Going To and Using Directions",
      description: "Movement and directional concepts",
      lessons: [
        "6.1 - Direction and Motion (Accusative/Dvitīyā Vibhakti)",
        "6.2 - Going To: The Direct Object Role",
        "6.3 - Practice: Going to the School, Library, Temple, etc.",
        "6.4 - Conversation Practice: Father and Son Dialogue",
        "6.5 - Movement: Gone and Coming"
      ]
    },
    {
      number: 7,
      title: "The Tool Role (Instrumental Case)",
      description: "Learning to express 'with' and 'by means of'",
      lessons: [
        "7.1 - The Tool Role (Instrumental/Tritīyā Vibhakti)",
        "7.2 - Doing Things With... (The Tool Role)",
        "7.3 - With (saha)",
        "7.4 - Without (vinā)"
      ]
    },
    {
      number: 8,
      title: "Ownership and Possessives",
      description: "Learning to express possession and belonging",
      lessons: [
        "8.1 - Ownership and Belonging (Possessive/Ṣaṣṭhī Vibhakti)",
        "8.2 - My/Your/His/Her/Its",
        "8.3 - Possession: This man's, That man's",
        "8.4 - Possession: This lady's, That lady's",
        "8.5 - Kinship Terms: Father, Mother, Brother, Sister"
      ]
    },
    {
      number: 9,
      title: "Tenses (Beyond Present)",
      description: "Learning past and future time concepts",
      lessons: [
        "9.1 - Time Travel (Past and Future)",
        "9.2 - Past Actions (bhūtakaalam): Simple Forms",
        "9.3 - Past Tense: Forms of 'To Be'",
        "9.4 - Constructing Simple Stories in the Past Tense",
        "9.5 - Future Actions (bhaviṣyatkālaḥ): Simple Forms",
        "9.6 - Future Tense: Special Forms"
      ]
    },
    {
      number: 10,
      title: "Adjectives, Quality, and Comparison",
      description: "Learning to describe and compare things",
      lessons: [
        "10.1 - Describing Things",
        "10.2 - What Kind of? and Like This",
        "10.3 - Speed and Manner: Quickly, Slowly",
        "10.4 - Asking: How? and Why?",
        "10.5 - Comparison: As Much As, So Much",
        "10.6 - Comparison: As, So",
        "10.7 - Comparison: Compared to",
        "10.8 - Opposites: Words with Opposite Meanings"
      ]
    },
    {
      number: 11,
      title: "Time and Numbers",
      description: "Learning to tell time and count",
      lessons: [
        "11.1 - Telling Time and Counting",
        "11.2 - Numbers: Counting 1 through 10",
        "11.3 - Numbers: Counting 11 through 100",
        "11.4 - Time: General Concepts",
        "11.5 - Asking: When?",
        "11.6 - Days of the Week: Sunday through Saturday",
        "11.7 - Time Reference: Yesterday, Today, Tomorrow",
        "11.8 - Time Reference: Day before/after yesterday/tomorrow"
      ]
    },
    {
      number: 12,
      title: "Complex Sentences and Connectors",
      description: "Learning to join ideas and create complex thoughts",
      lessons: [
        "12.1 - Joining Ideas",
        "12.2 - Connecting Ideas: And, Indeed, Thus, Also",
        "12.3 - Contrast: But, Certainly, Mostly",
        "12.4 - Conditional: If, Then",
        "12.5 - Conditional: If, If Not",
        "12.6 - Reason: Because",
        "12.7 - Temporal: When, Then",
        "12.8 - Temporal: From, Until"
      ]
    },
    {
      number: 13,
      title: "Advanced Verbal Concepts",
      description: "Learning complex verb forms and constructions",
      lessons: [
        "13.1 - Verbal Modifiers and Purpose",
        "13.2 - Having Done... (The Past Participle: -tvā)",
        "13.3 - Special Forms of Having Done",
        "13.4 - In Order To... (Expressing Purpose: -tumun)",
        "13.5 - Exercise: Changing 'Having Done' to 'In Order To'",
        "13.6 - Ability and Willingness"
      ]
    },
    {
      number: 14,
      title: "Complex Dialogue and Vocabulary Expansion",
      description: "Putting it all together with advanced conversations",
      lessons: [
        "14.1 - Putting it Together",
        "14.2 - Relative Clauses: Who/That",
        "14.3 - Concession: Although, Yet",
        "14.4 - Conversation: Greetings, Apologies, and Phrases",
        "14.5 - Vocative Forms: Calling Out to Someone",
        "14.6 - Vocabulary Focus: Taste Words",
        "14.7 - Vocabulary Focus: Body Parts",
        "14.8 - Vocabulary Focus: Kitchen and Related Items"
      ]
    }
  ]

  return (
    <div className="space-y-6">
      {/* Title Card */}
      <TitleCard 
        title="Complete Sanskrit Curriculum"
        subtitle="A comprehensive learning path from beginner to advanced"
        level="All Levels"
        progress={0}
      />
      
      {/* Curriculum Overview */}
      <div className="space-y-8">
        {curriculum.map((chapter) => (
          <div key={chapter.number} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Chapter {chapter.number}: {chapter.title}
                </h2>
                <p className="text-gray-600 text-lg">{chapter.description}</p>
              </div>
              <div className="flex space-x-2">
                <a 
                  href={`/0${chapter.number}-${chapter.title.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '')}`}
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Start Chapter
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {chapter.lessons.map((lesson, index) => (
                <div key={index} className="bg-gray-50 rounded-md p-3 text-sm text-gray-700">
                  {lesson}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {/* Progress Summary */}
      <div className="bg-blue-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">Learning Progress</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="bg-white rounded-md p-3">
            <div className="font-medium text-gray-900">Total Chapters</div>
            <div className="text-2xl font-bold text-blue-600">14</div>
          </div>
          <div className="bg-white rounded-md p-3">
            <div className="font-medium text-gray-900">Total Lessons</div>
            <div className="text-2xl font-bold text-green-600">89</div>
          </div>
          <div className="bg-white rounded-md p-3">
            <div className="font-medium text-gray-900">Estimated Time</div>
            <div className="text-2xl font-bold text-purple-600">6-12 months</div>
          </div>
        </div>
      </div>
    </div>
  )
}
