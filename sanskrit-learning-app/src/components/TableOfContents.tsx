import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

interface TableOfContentsProps {
  onChapterSelect: (chapterId: string) => void
}

interface Chapter {
  id: string
  title: string
  children?: Chapter[]
}

const chapters: Chapter[] = [
  {
    id: "1",
    title: "Introduction",
    children: [
      { id: "1.1", title: "Names and Introductions" },
      { id: "1.2", title: "Basic Pronouns" },
    ]
  },
  {
    id: "2",
    title: "Pronouns",
    children: [
      { id: "2.1", title: "Personal Pronouns" },
      { id: "2.2", title: "Demonstrative Pronouns" },
      { id: "2.3", title: "Interrogative Pronouns" },
    ]
  },
  {
    id: "3",
    title: "Numbers and Counting",
    children: [
      { id: "3.1", title: "Cardinal Numbers" },
      { id: "3.2", title: "Ordinal Numbers" },
    ]
  },
  {
    id: "4",
    title: "Verbs",
    children: [
      { id: "4.1", title: "Present Tense" },
      { id: "4.2", title: "Past Tense" },
      { id: "4.3", title: "Future Tense" },
    ]
  },
]

export function TableOfContents({ onChapterSelect }: TableOfContentsProps) {
  const renderChapter = (chapter: Chapter, depth = 0) => {
    return (
      <div key={chapter.id} className={`ml-${depth * 4}`}>
        <Button
          variant="ghost"
          className="w-full justify-start"
          onClick={() => onChapterSelect(chapter.id)}
        >
          <ChevronRight className="mr-2 h-4 w-4" />
          {chapter.title}
        </Button>
        {chapter.children?.map((child) => renderChapter(child, depth + 1))}
      </div>
    )
  }

  return (
    <div className="space-y-1">
      <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
      {chapters.map((chapter) => renderChapter(chapter))}
    </div>
  )
} 