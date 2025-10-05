import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'

// Table of contents with optimized flat structure from gemini recommendations
const tableOfContents = [
  {
    number: 1,
    title: "Hello! Getting Started",
    url: "/01-getting-started",
    sections: [
      { 
        number: 1, 
        title: "Greetings and Identity",
        url: "/01-getting-started/greetings-identity"
      },
      { 
        number: 2, 
        title: "Hello! My Name Is... (The Neuter Name)",
        url: "/01-getting-started/neuter-name"
      },
      { 
        number: 3, 
        title: "My Name Is... (The Masculine Name)",
        url: "/01-getting-started/masculine-name"
      },
      { 
        number: 4, 
        title: "My Name Is... (The Feminine Name)",
        url: "/01-getting-started/feminine-name"
      },
      { 
        number: 5, 
        title: "Asking: Who? and What? (kaḥ and kim)",
        url: "/01-getting-started/who-what"
      },
      { 
        number: 6, 
        title: "Yes/No: Simple Affirmation and Negation",
        url: "/01-getting-started/yes-no"
      },
      { 
        number: 7, 
        title: "Vocabulary: Top 10 Daily Use Items",
        url: "/01-getting-started/daily-items"
      }
    ]
  },
  {
    number: 2,
    title: "Naming Things & Asking 'Is It There?'",
    url: "/02-existence-identification",
    sections: [
      { 
        number: 1, 
        title: "Existence and Identification",
        url: "/02-existence-identification/existence"
      },
      { 
        number: 2, 
        title: "Exists and Is Not (asti and nāsti)",
        url: "/02-existence-identification/exists-not"
      },
      { 
        number: 3, 
        title: "Demonstrating: This and That (Neuter: etat and tat)",
        url: "/02-existence-identification/neuter-demonstratives"
      },
      { 
        number: 4, 
        title: "Demonstrating: This and That (Masculine: eṣaḥ and saḥ)",
        url: "/02-existence-identification/masculine-demonstratives"
      },
      { 
        number: 5, 
        title: "Demonstrating: This and That (Feminine: eṣā and sā)",
        url: "/02-existence-identification/feminine-demonstratives"
      },
      { 
        number: 6, 
        title: "Vocabulary: Workplace Items",
        url: "/02-existence-identification/workplace-vocabulary"
      }
    ]
  },
  {
    number: 3,
    title: "Where Is It? Describing Location",
    url: "/03-location",
    sections: [
      { 
        number: 1, 
        title: "Basic Spatial Concepts",
        url: "/03-location/spatial-concepts"
      },
      { 
        number: 2, 
        title: "Location: Where? (kutra)",
        url: "/03-location/where"
      },
      { 
        number: 3, 
        title: "Location: Here and There (atra and tatra)",
        url: "/03-location/here-there"
      },
      { 
        number: 4, 
        title: "Location: Everywhere and Elsewhere (sarvatra and anyatra)",
        url: "/03-location/everywhere-elsewhere"
      },
      { 
        number: 5, 
        title: "Location: Front, Back, Left, Right (purataḥ, pṛṣṭhataḥ, etc.)",
        url: "/03-location/directions"
      },
      { 
        number: 6, 
        title: "Location: Inside and Outside (antaḥ and bahiḥ)",
        url: "/03-location/inside-outside"
      },
      { 
        number: 7, 
        title: "Location: From Here/There/Where (itaḥ, tataḥ, yataḥ)",
        url: "/03-location/from-where"
      }
    ]
  },
  {
    number: 4,
    title: "Action! What People Are Doing",
    url: "/04-actions",
    sections: [
      { 
        number: 1, 
        title: "Simple Actions (Present Tense)",
        url: "/04-actions/simple-actions"
      },
      { 
        number: 2, 
        title: "Action! Simple Verbs (gacchati, likhati)",
        url: "/04-actions/simple-verbs"
      },
      { 
        number: 3, 
        title: "Using I with Action Words (Ahaṃ gacchāmi)",
        url: "/04-actions/i-actions"
      },
      { 
        number: 4, 
        title: "Using You with Action Words (Tvaṃ gacchasi)",
        url: "/04-actions/you-actions"
      },
      { 
        number: 5, 
        title: "Requests and Simple Commands (Gacchati vs. Gacchatu)",
        url: "/04-actions/requests-commands"
      },
      { 
        number: 6, 
        title: "Necessity: Needs and Sufficiency (āvaśyakam and paryāptam)",
        url: "/04-actions/necessity"
      }
    ]
  },
  {
    number: 5,
    title: "Groups and Plurals",
    url: "/05-plurals",
    sections: [
      { 
        number: 1, 
        title: "Dealing with Many (Plural Forms)",
        url: "/05-plurals/plural-concepts"
      },
      { 
        number: 2, 
        title: "Singular and Plural Concepts (ekavacanam and bahuvacanam)",
        url: "/05-plurals/singular-plural"
      },
      { 
        number: 3, 
        title: "Plurals: We and Y'all (Ahaṃ / Vayam and Tvam / Yūyam)",
        url: "/05-plurals/we-you-plural"
      },
      { 
        number: 4, 
        title: "Plurals: They/Those (Masculine: te and ete)",
        url: "/05-plurals/masculine-they"
      },
      { 
        number: 5, 
        title: "Plurals: They/Those (Feminine: tāḥ and etāḥ)",
        url: "/05-plurals/feminine-they"
      },
      { 
        number: 6, 
        title: "Plurals: They/Those (Neuter: tāni and etāni)",
        url: "/05-plurals/neuter-they"
      },
      { 
        number: 7, 
        title: "Plurals: Action Words (Nrityati vs. Nrityanti)",
        url: "/05-plurals/plural-verbs"
      },
      { 
        number: 8, 
        title: "Asking: How many? (kati santi)",
        url: "/05-plurals/how-many"
      }
    ]
  },
  {
    number: 6,
    title: "Going To and Using Directions",
    url: "/06-directions",
    sections: [
      { 
        number: 1, 
        title: "Direction and Motion (Accusative/Dvitīyā Vibhakti)",
        url: "/06-directions/direction-motion"
      },
      { 
        number: 2, 
        title: "Going To: The Direct Object Role",
        url: "/06-directions/direct-object"
      },
      { 
        number: 3, 
        title: "Practice: Going to the School, Library, Temple, etc.",
        url: "/06-directions/practice-locations"
      },
      { 
        number: 4, 
        title: "Conversation Practice: Father and Son Dialogue",
        url: "/06-directions/father-son-dialogue"
      },
      { 
        number: 5, 
        title: "Movement: Gone and Coming (gata and āgāmi)",
        url: "/06-directions/movement"
      }
    ]
  },
  {
    number: 7,
    title: "The Tool Role (Instrumental Case)",
    url: "/07-tool-role",
    sections: [
      { 
        number: 1, 
        title: "The Tool Role (Instrumental/Tritīyā Vibhakti)",
        url: "/07-tool-role/tool-role"
      },
      { 
        number: 2, 
        title: "Doing Things With... (The Tool Role)",
        url: "/07-tool-role/doing-with"
      },
      { 
        number: 3, 
        title: "With (saha)",
        url: "/07-tool-role/with"
      },
      { 
        number: 4, 
        title: "Without (vinā)",
        url: "/07-tool-role/without"
      }
    ]
  },
  {
    number: 8,
    title: "Ownership and Possessives",
    url: "/08-ownership",
    sections: [
      { 
        number: 1, 
        title: "Ownership and Belonging (Possessive/Ṣaṣṭhī Vibhakti)",
        url: "/08-ownership/ownership-belonging"
      },
      { 
        number: 2, 
        title: "My/Your/His/Her/Its",
        url: "/08-ownership/possessive-pronouns"
      },
      { 
        number: 3, 
        title: "Possession: This man's, That man's (etasya and tasya)",
        url: "/08-ownership/masculine-possession"
      },
      { 
        number: 4, 
        title: "Possession: This lady's, That lady's (etasyāḥ and tasyāḥ)",
        url: "/08-ownership/feminine-possession"
      },
      { 
        number: 5, 
        title: "Kinship Terms: Father, Mother, Brother, Sister",
        url: "/08-ownership/kinship-terms"
      }
    ]
  },
  {
    number: 9,
    title: "Tenses (Beyond Present)",
    url: "/09-tenses",
    sections: [
      { 
        number: 1, 
        title: "Time Travel (Past and Future)",
        url: "/09-tenses/time-travel"
      },
      { 
        number: 2, 
        title: "Past Actions (bhūtakaalam): Simple Forms",
        url: "/09-tenses/past-actions"
      },
      { 
        number: 3, 
        title: "Past Tense: Forms of 'To Be' (āsīt, āsan)",
        url: "/09-tenses/past-to-be"
      },
      { 
        number: 4, 
        title: "Constructing Simple Stories in the Past Tense",
        url: "/09-tenses/past-stories"
      },
      { 
        number: 5, 
        title: "Future Actions (bhaviṣyatkālaḥ): Simple Forms",
        url: "/09-tenses/future-actions"
      },
      { 
        number: 6, 
        title: "Future Tense: Special Forms",
        url: "/09-tenses/future-special"
      }
    ]
  },
  {
    number: 10,
    title: "Adjectives, Quality, and Comparison",
    url: "/10-adjectives",
    sections: [
      { 
        number: 1, 
        title: "Describing Things",
        url: "/10-adjectives/describing"
      },
      { 
        number: 2, 
        title: "What Kind of? and Like This (kīdṛśaḥ and īdṛśaḥ)",
        url: "/10-adjectives/what-kind"
      },
      { 
        number: 3, 
        title: "Speed and Manner: Quickly, Slowly (śīghram and mandam)",
        url: "/10-adjectives/speed-manner"
      },
      { 
        number: 4, 
        title: "Asking: How? (katham) and Why? (kimartham)",
        url: "/10-adjectives/how-why"
      },
      { 
        number: 5, 
        title: "Comparison: As Much As, So Much (yāvat and tāvat)",
        url: "/10-adjectives/comparison-basic"
      },
      { 
        number: 6, 
        title: "Comparison: As, So (yathā and tathā)",
        url: "/10-adjectives/comparison-advanced"
      },
      { 
        number: 7, 
        title: "Comparison: Compared to (apekṣayā)",
        url: "/10-adjectives/comparison-compared"
      },
      { 
        number: 8, 
        title: "Opposites: Words with Opposite Meanings",
        url: "/10-adjectives/opposites"
      }
    ]
  },
  {
    number: 11,
    title: "Time and Numbers",
    url: "/11-time-numbers",
    sections: [
      { 
        number: 1, 
        title: "Telling Time and Counting",
        url: "/11-time-numbers/time-counting"
      },
      { 
        number: 2, 
        title: "Numbers: Counting 1 through 10",
        url: "/11-time-numbers/numbers-1-10"
      },
      { 
        number: 3, 
        title: "Numbers: Counting 11 through 100",
        url: "/11-time-numbers/numbers-11-100"
      },
      { 
        number: 4, 
        title: "Time: General Concepts (samayaḥ)",
        url: "/11-time-numbers/time-concepts"
      },
      { 
        number: 5, 
        title: "Asking: When? (kadā)",
        url: "/11-time-numbers/when"
      },
      { 
        number: 6, 
        title: "Days of the Week: Sunday through Saturday",
        url: "/11-time-numbers/days-week"
      },
      { 
        number: 7, 
        title: "Time Reference: Yesterday, Today, Tomorrow (hyaḥ, adya, śvaḥ)",
        url: "/11-time-numbers/time-reference"
      },
      { 
        number: 8, 
        title: "Time Reference: Day before/after yesterday/tomorrow",
        url: "/11-time-numbers/extended-time"
      }
    ]
  },
  {
    number: 12,
    title: "Complex Sentences and Connectors",
    url: "/12-complex-sentences",
    sections: [
      { 
        number: 1, 
        title: "Joining Ideas",
        url: "/12-complex-sentences/joining-ideas"
      },
      { 
        number: 2, 
        title: "Connecting Ideas: And, Indeed, Thus, Also (ca, eva, iti, api)",
        url: "/12-complex-sentences/connecting-ideas"
      },
      { 
        number: 3, 
        title: "Contrast: But, Certainly, Mostly (kintu, niścayena, prāyaśaḥ)",
        url: "/12-complex-sentences/contrast"
      },
      { 
        number: 4, 
        title: "Conditional: If, Then (yadi and tarhi)",
        url: "/12-complex-sentences/conditional-if-then"
      },
      { 
        number: 5, 
        title: "Conditional: If, If Not (cet and no cet)",
        url: "/12-complex-sentences/conditional-if-not"
      },
      { 
        number: 6, 
        title: "Reason: Because (yataḥ)",
        url: "/12-complex-sentences/reason-because"
      },
      { 
        number: 7, 
        title: "Temporal: When, Then (yadā and tadā)",
        url: "/12-complex-sentences/temporal-when-then"
      },
      { 
        number: 8, 
        title: "Temporal: From, Until (taḥ paryantam)",
        url: "/12-complex-sentences/temporal-from-until"
      }
    ]
  },
  {
    number: 13,
    title: "Advanced Verbal Concepts",
    url: "/13-advanced-verbs",
    sections: [
      { 
        number: 1, 
        title: "Verbal Modifiers and Purpose",
        url: "/13-advanced-verbs/verbal-modifiers"
      },
      { 
        number: 2, 
        title: "Having Done... (The Past Participle: -tvā)",
        url: "/13-advanced-verbs/past-participle"
      },
      { 
        number: 3, 
        title: "Special Forms of Having Done",
        url: "/13-advanced-verbs/special-past-participle"
      },
      { 
        number: 4, 
        title: "In Order To... (Expressing Purpose: -tumun)",
        url: "/13-advanced-verbs/purpose"
      },
      { 
        number: 5, 
        title: "Exercise: Changing 'Having Done' to 'In Order To'",
        url: "/13-advanced-verbs/past-to-purpose"
      },
      { 
        number: 6, 
        title: "Ability and Willingness (aśakta, aśakya, chandata)",
        url: "/13-advanced-verbs/ability-willingness"
      }
    ]
  },
  {
    number: 14,
    title: "Complex Dialogue and Vocabulary Expansion",
    url: "/14-complex-dialogue",
    sections: [
      { 
        number: 1, 
        title: "Putting it Together",
        url: "/14-complex-dialogue/putting-together"
      },
      { 
        number: 2, 
        title: "Relative Clauses: Who/That (yaḥ / saḥ, yat / tat)",
        url: "/14-complex-dialogue/relative-clauses"
      },
      { 
        number: 3, 
        title: "Concession: Although, Yet (yadyapi and tathāpi)",
        url: "/14-complex-dialogue/concession"
      },
      { 
        number: 4, 
        title: "Conversation: Greetings, Apologies, and Phrases (hariḥ om, suprabhātam, kṣamyatām)",
        url: "/14-complex-dialogue/conversation-phrases"
      },
      { 
        number: 5, 
        title: "Vocative Forms: Calling Out to Someone",
        url: "/14-complex-dialogue/vocative"
      },
      { 
        number: 6, 
        title: "Vocabulary Focus: Taste Words",
        url: "/14-complex-dialogue/taste-words"
      },
      { 
        number: 7, 
        title: "Vocabulary Focus: Body Parts",
        url: "/14-complex-dialogue/body-parts"
      },
      { 
        number: 8, 
        title: "Vocabulary Focus: Kitchen and Related Items",
        url: "/14-complex-dialogue/kitchen-items"
      }
    ]
  }
]

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-gray-50">
          {/* Mobile Navigation */}
          <nav className="lg:hidden bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="px-4 py-3">
              <div className="flex items-center justify-between">
                <h1 className="text-lg font-semibold text-gray-900">Sanskrit Learning</h1>
                <button className="p-2 rounded-md text-gray-600 hover:bg-gray-100">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </nav>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-[300px_1fr_300px] lg:h-screen">
            {/* Left Sidebar - Table of Contents */}
            <ScrollArea className="h-screen border-r bg-white">
              <div className="p-4">
                <h2 className="mb-4 text-lg font-semibold">Table of Contents</h2>
                {tableOfContents.map((chapter) => (
                  <div key={chapter.number} className="mb-2">
                    <div className="flex w-full items-center justify-between rounded-lg p-2 text-left">
                      <span>Chapter {chapter.number}: {chapter.title}</span>
                    </div>
                    <div className="ml-4 mt-2 space-y-1">
                      {chapter.sections.map((section) => (
                        <a
                          key={section.url}
                          href={section.url}
                          className="flex w-full items-center justify-between rounded-lg p-2 text-left text-sm hover:bg-accent"
                        >
                          <span>{section.title}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Main Content */}
            <main className="h-screen overflow-y-auto">
              <div className="container mx-auto p-8">
                {children}
              </div>
            </main>

            {/* Right Sidebar - Practice Area */}
            <ScrollArea className="h-screen border-l bg-white">
              <div className="p-4">
                <h2 className="mb-4 text-lg font-semibold">Practice</h2>
                <div className="text-muted-foreground">
                  Practice content coming soon...
                </div>
              </div>
            </ScrollArea>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden">
            <main className="min-h-screen">
              <div className="container mx-auto px-4 py-6">
                {children}
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}
