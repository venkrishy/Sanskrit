import { useEffect, useState } from 'react'
import { Card } from "@/components/ui/card"
import { marked } from 'marked'

interface ContentViewerProps {
  chapterId: string | null
}

interface ChapterContent {
  title: string
  content: string
  examples: string[]
  exercises: string[]
}

// This would be replaced with actual content loading from markdown files
const loadChapterContent = async (chapterId: string): Promise<ChapterContent | null> => {
  try {
    // In a real implementation, this would load the actual markdown file
    // For now, we'll return mock content
    return {
      title: "Names and Introductions",
      content: `
# Introduction to Sanskrit Names

In Sanskrit, introductions follow a specific pattern. Let's learn the basic phrases:

## Basic Phrases

1. मम नाम [Your Name] अस्ति (mama nāma [Your Name] asti)
   - Meaning: My name is [Your Name]

2. भवतः नाम किम्? (bhavataḥ nāma kim?)
   - Meaning: What is your name? (asking a male)

3. भवत्याः नाम किम्? (bhavatyāḥ nāma kim?)
   - Meaning: What is your name? (asking a female)

## Usage Notes

- The word नाम (nāma) means "name"
- अस्ति (asti) means "is"
- किम् (kim) is used for asking questions, similar to "what"
      `,
      examples: [
        "मम नाम राजेशः अस्ति। (mama nāma rājeśaḥ asti) - My name is Rajesh.",
        "मम नाम सीता अस्ति। (mama nāma sītā asti) - My name is Sita."
      ],
      exercises: [
        "Practice introducing yourself in Sanskrit",
        "Ask your partner their name using the appropriate form (male/female)",
        "Write five different introductions using different names"
      ]
    }
  } catch (error) {
    console.error('Error loading chapter content:', error)
    return null
  }
}

export function ContentViewer({ chapterId }: ContentViewerProps) {
  const [content, setContent] = useState<ChapterContent | null>(null)

  useEffect(() => {
    if (chapterId) {
      loadChapterContent(chapterId).then(setContent)
    } else {
      setContent(null)
    }
  }, [chapterId])

  if (!chapterId || !content) {
    return (
      <div className="flex items-center justify-center h-full text-muted-foreground">
        Please select a chapter from the table of contents
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">{content.title}</h2>
      
      <div 
        className="prose prose-slate dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: marked(content.content) }}
      />

      {content.examples.length > 0 && (
        <Card className="p-4">
          <h3 className="text-lg font-semibold mb-2">Examples</h3>
          <ul className="list-disc list-inside space-y-2">
            {content.examples.map((example, index) => (
              <li key={index}>{example}</li>
            ))}
          </ul>
        </Card>
      )}

      {content.exercises.length > 0 && (
        <Card className="p-4">
          <h3 className="text-lg font-semibold mb-2">Practice Exercises</h3>
          <ul className="list-decimal list-inside space-y-2">
            {content.exercises.map((exercise, index) => (
              <li key={index}>{exercise}</li>
            ))}
          </ul>
        </Card>
      )}
    </div>
  )
} 