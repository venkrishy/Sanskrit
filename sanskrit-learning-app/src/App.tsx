import { useState } from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Card } from "@/components/ui/card"
import { TableOfContents } from './components/TableOfContents'
import { ContentViewer } from './components/ContentViewer'
import { PracticeArea } from './components/PracticeArea'

function App() {
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null)

  return (
    <div className="container mx-auto h-screen p-4">
      <h1 className="text-3xl font-bold mb-6">Sanskrit Learning</h1>
      <div className="grid grid-cols-12 gap-4 h-[calc(100vh-8rem)]">
        {/* Left Column - Table of Contents */}
        <Card className="col-span-3 p-4">
          <ScrollArea className="h-[calc(100vh-12rem)]">
            <TableOfContents onChapterSelect={setSelectedChapter} />
          </ScrollArea>
        </Card>

        {/* Middle Column - Content */}
        <Card className="col-span-6 p-4">
          <ScrollArea className="h-[calc(100vh-12rem)]">
            <ContentViewer chapterId={selectedChapter} />
          </ScrollArea>
        </Card>

        {/* Right Column - Practice Area */}
        <Card className="col-span-3 p-4">
          <ScrollArea className="h-[calc(100vh-12rem)]">
            <PracticeArea chapterId={selectedChapter} />
          </ScrollArea>
        </Card>
      </div>
    </div>
  )
}

export default App
