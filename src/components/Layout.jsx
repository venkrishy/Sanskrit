import { ScrollArea } from "@/components/ui/scroll-area"
import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import LessonContent from "./lesson/LessonContent"
import QuizSection from "./quiz/QuizSection"

const tableOfContents = [
  {
    chapter: 1,
    title: "Introduction and Basic Concepts",
    sections: [
      { id: "1.1", title: "Names and Basic Introductions" },
      { id: "1.2", title: "Demonstrative Pronouns" },
      { id: "1.3", title: "Objects for Practice" },
      { id: "1.4", title: "Is, Is not (asti, nāsti)" },
      { id: "1.5", title: "Here and There (atra, tatra)" },
      { id: "1.6", title: "Everywhere and Elsewhere" },
      { id: "1.7", title: "Personal Pronouns" },
      { id: "1.8", title: "Genitive Case" },
      { id: "1.9", title: "Genitive Case Practice" },
      { id: "1.10", title: "Basic Verbs" },
      { id: "1.11", title: "You Forms" },
      { id: "1.12", title: "Necessity and Sufficiency" },
      { id: "1.13", title: "Requests and Commands" },
      { id: "1.14", title: "Technical Terms" },
      { id: "1.15", title: "Technical Terms Practice" },
      { id: "1.16", title: "Time Concepts" }
    ]
  },
  {
    chapter: 4,
    title: "Kitchen and Objects",
    sections: [
      { id: "4.1", title: "Kitchen-related Objects" },
      { id: "4.2", title: "Plural Forms" },
      { id: "4.3", title: "Verbs in Plural" },
      { id: "4.4", title: "Special Exercise" },
      { id: "4.5", title: "Counting (kati?)" }
    ]
  },
  {
    chapter: 5,
    title: "Location and Time",
    sections: [
      { id: "5.1", title: "Locative Case Exercise" },
      { id: "5.2", title: "More Locative Practice" },
      { id: "5.3", title: "Fill in the Blanks" },
      { id: "5.4", title: "When (kadā)" },
      { id: "5.5", title: "Yesterday, Today, Tomorrow" },
      { id: "5.6", title: "Time Practice" }
    ]
  },
  {
    chapter: 6,
    title: "Greetings",
    sections: [
      { id: "6.1", title: "Hari Om and Greetings" }
    ]
  },
  {
    chapter: 7,
    title: "Accusative Case",
    sections: [
      { id: "7.1", title: "Accusative Case Introduction" },
      { id: "7.2", title: "Accusative Practice" }
    ]
  },
  {
    chapter: 8,
    title: "Directions and Relations",
    sections: [
      { id: "8.1", title: "Basic Relations" },
      { id: "8.2", title: "Directions and Positions" }
    ]
  },
  {
    chapter: 9,
    title: "Origins and Sources",
    sections: [
      { id: "9.1", title: "Source Indicators" },
      { id: "9.2", title: "Practice with Sources" }
    ]
  },
  {
    chapter: 10,
    title: "Manner and Purpose",
    sections: [
      { id: "10.1", title: "Speed and Manner" },
      { id: "10.2", title: "Purpose (kimartham)" }
    ]
  },
  {
    chapter: 11,
    title: "Past Tense",
    sections: [
      { id: "11.1", title: "Past Tense Forms" },
      { id: "11.2", title: "Forms of 'To Be'" },
      { id: "11.3", title: "Past Tense Practice" }
    ]
  },
  {
    chapter: 12,
    title: "Future Tense",
    sections: [
      { id: "12.1", title: "Future Tense Forms" },
      { id: "12.2", title: "Special Future Forms" }
    ]
  },
  {
    chapter: 13,
    title: "Vocative Case",
    sections: [
      { id: "13.1", title: "Vocative Forms" },
      { id: "13.2", title: "Vocative Practice" }
    ]
  },
  {
    chapter: 14,
    title: "Conditionals",
    sections: [
      { id: "14.1", title: "If-Then (yadi-tarhi)" }
    ]
  },
  {
    chapter: 15,
    title: "Particles",
    sections: [
      { id: "15.1", title: "Basic Particles" },
      { id: "15.2", title: "Particle Practice" }
    ]
  },
  {
    chapter: 16,
    title: "Time Expressions",
    sections: [
      { id: "16.1", title: "From-Until and Starting From" }
    ]
  },
  {
    chapter: 17,
    title: "Time Correlatives",
    sections: [
      { id: "17.1", title: "When-Then (yadā-tadā)" }
    ]
  },
  {
    chapter: 18,
    title: "Numbers",
    sections: [
      { id: "18.1", title: "Basic Numbers" },
      { id: "18.2", title: "Number Practice" }
    ]
  },
  {
    chapter: 19,
    title: "Instrumental Case",
    sections: [
      { id: "19.1", title: "Instrumental Case Introduction" },
      { id: "19.2", title: "With (saha)" },
      { id: "19.3", title: "Without (vinā)" }
    ]
  },
  {
    chapter: 20,
    title: "Ability and Possibility",
    sections: [
      { id: "20.1", title: "Expressing Ability and Possibility" }
    ]
  }
]

export default function Layout({ children }) {
  const [selectedChapter, setSelectedChapter] = useState(1)
  const [selectedSection, setSelectedSection] = useState("1.1")
  const location = useLocation()
  const navigate = useNavigate()

  const handleSectionClick = (sectionId) => {
    setSelectedSection(sectionId)
    navigate(`/lessons/${sectionId}`)
  }

  const handleChapterClick = (chapter) => {
    setSelectedChapter(chapter)
    const firstSection = tableOfContents.find(c => c.chapter === chapter)?.sections[0]?.id
    if (firstSection) {
      handleSectionClick(firstSection)
    }
  }

  const isLearningPage = location.pathname.startsWith('/lessons/')
  const currentSectionId = location.pathname.split('/lessons/')[1]

  return (
    <div className="flex h-[calc(100vh-4rem)] overflow-hidden">
      {/* Left Sidebar - Table of Contents */}
      <div className="w-64 border-r bg-gray-50/50">
        <ScrollArea className="h-full">
          <div className="p-4 space-y-4">
            <h2 className="font-semibold text-lg">Table of Contents</h2>
            {tableOfContents.map((chapter) => (
              <div key={chapter.chapter} className="space-y-2">
                <h3 
                  className={`font-medium cursor-pointer hover:text-blue-600 ${
                    selectedChapter === chapter.chapter ? "text-blue-600" : ""
                  }`}
                  onClick={() => handleChapterClick(chapter.chapter)}
                >
                  Chapter {chapter.chapter}: {chapter.title}
                </h3>
                {chapter.sections.map((section) => (
                  <div
                    key={section.id}
                    className={`pl-4 cursor-pointer text-sm hover:text-blue-600 ${
                      selectedSection === section.id ? "text-blue-600" : ""
                    }`}
                    onClick={() => handleSectionClick(section.id)}
                  >
                    {section.title}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Middle - Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-6">
          {isLearningPage ? (
            <LessonContent sectionId={currentSectionId} />
          ) : (
            children
          )}
        </div>
      </main>

      {/* Right Sidebar - Practice/Quiz Area */}
      <div className="w-80 border-l bg-gray-50/50">
        <ScrollArea className="h-full">
          <div className="p-4">
            <h2 className="font-semibold text-lg mb-4">Practice Area</h2>
            {isLearningPage ? (
              <QuizSection sectionId={currentSectionId} />
            ) : (
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h3 className="font-medium mb-2">Quick Practice</h3>
                  <p className="text-sm text-gray-600">
                    Select a lesson to start practicing.
                  </p>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
} 