import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'

// Table of contents with standardized URLs matching curriculum structure
const tableOfContents = [
  {
    number: 1,
    title: "Foundational",
    url: "/01-foundational",
    sections: [
      { 
        number: 1, 
        title: "Basic Conversations",
        url: "/01-foundational/basic_conversations"
      },
      { 
        number: 2, 
        title: "Greetings",
        url: "/01-foundational/greetings"
      },
      { 
        number: 3, 
        title: "Introductions",
        url: "/01-foundational/introductions"
      }
    ]
  },
  {
    number: 2,
    title: "Pronouns",
    url: "/02-pronouns",
    sections: [
      { 
        number: 1, 
        title: "Basic Pronouns",
        url: "/02-pronouns/basic_pronouns"
      },
      { 
        number: 2, 
        title: "Demonstrative Pronouns",
        url: "/02-pronouns/demonstrative_pronouns"
      },
      { 
        number: 3, 
        title: "Interrogative Pronouns",
        url: "/02-pronouns/interrogative_pronouns"
      },
      { 
        number: 4, 
        title: "Pronoun Transformations",
        url: "/02-pronouns/pronoun_transformations"
      }
    ]
  },
  {
    number: 3,
    title: "Numbers",
    url: "/03-numbers",
    sections: [
      { 
        number: 1, 
        title: "Basic Numbers",
        url: "/03-numbers/basic_numbers"
      },
      { 
        number: 2, 
        title: "Counting Questions",
        url: "/03-numbers/counting_questions"
      },
      { 
        number: 3, 
        title: "Number Practice",
        url: "/03-numbers/number_practice"
      }
    ]
  },
  {
    number: 4,
    title: "Vocabulary",
    url: "/04-vocabulary",
    sections: [
      { 
        number: 1, 
        title: "Household Objects",
        url: "/04-vocabulary/household_objects"
      },
      { 
        number: 2, 
        title: "Kitchen Utensils",
        url: "/04-vocabulary/kitchen_utensils"
      },
      { 
        number: 3, 
        title: "Workplace Vocabulary",
        url: "/04-vocabulary/workplace_vocabulary"
      }
    ]
  },
  {
    number: 5,
    title: "Grammar",
    url: "/05-grammar",
    sections: [
      { 
        number: 1, 
        title: "Plural Forms",
        url: "/05-grammar/plural_forms"
      },
      { 
        number: 2, 
        title: "Plural Forms Advanced",
        url: "/05-grammar/plural_forms_advanced"
      }
    ]
  },
  {
    number: 6,
    title: "Time and Calendar",
    url: "/06-time_and_calendar",
    sections: [
      { 
        number: 1, 
        title: "Daily Routines",
        url: "/06-time_and_calendar/daily_routines"
      },
      { 
        number: 2, 
        title: "Days and Dates",
        url: "/06-time_and_calendar/days_and_dates"
      },
      { 
        number: 3, 
        title: "Time Expressions",
        url: "/06-time_and_calendar/time_expressions"
      }
    ]
  },
  {
    number: 7,
    title: "Verbs",
    url: "/07-verbs",
    sections: [
      { 
        number: 1, 
        title: "Present Tense Forms",
        url: "/07-verbs/present_tense_forms"
      }
    ]
  },
  {
    number: 8,
    title: "Directions and Locations",
    url: "/08-directions_and_locations",
    sections: [
      { 
        number: 1, 
        title: "Spatial Relationships",
        url: "/08-directions_and_locations/spatial_relationships"
      },
      { 
        number: 2, 
        title: "Travel Vocabulary",
        url: "/08-directions_and_locations/travel_vocabulary"
      }
    ]
  },
  {
    number: 9,
    title: "Conversation",
    url: "/09-conversation",
    sections: [
      { 
        number: 1, 
        title: "Basic Dialogues",
        url: "/09-conversation/basic_dialogues"
      },
      { 
        number: 2, 
        title: "Complex Dialogues",
        url: "/09-conversation/complex_dialogues"
      },
      { 
        number: 3, 
        title: "Family Conversations",
        url: "/09-conversation/family_conversations"
      }
    ]
  },
  {
    number: 10,
    title: "Advanced",
    url: "/10-advanced",
    sections: [
      { 
        number: 1, 
        title: "Advanced Exercises",
        url: "/10-advanced/advanced_exercises"
      },
      { 
        number: 2, 
        title: "Grammar Mastery",
        url: "/10-advanced/grammar_mastery"
      },
      { 
        number: 3, 
        title: "Reading Comprehension",
        url: "/10-advanced/reading_comprehension"
      },
      { 
        number: 4, 
        title: "Writing Practice",
        url: "/10-advanced/writing_practice"
      }
    ]
  }
]

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="grid h-screen grid-cols-[300px_1fr_300px]">
          {/* Left Sidebar - Table of Contents */}
          <ScrollArea className="h-screen border-r">
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
          <ScrollArea className="h-screen border-l">
            <div className="p-4">
              <h2 className="mb-4 text-lg font-semibold">Practice</h2>
              <div className="text-muted-foreground">
                Practice content coming soon...
              </div>
            </div>
          </ScrollArea>
        </div>
      </body>
    </html>
  )
}
