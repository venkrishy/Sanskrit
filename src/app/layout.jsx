import { ScrollArea } from '@/components/ui/scroll-area'
import { BookmarkIcon } from '@heroicons/react/24/outline'
import { cn } from '@/lib/utils'

// Table of contents with standardized URLs
const tableOfContents = [
  {
    number: 1,
    title: "Introduction and Basic Concepts",
    sections: [
      { 
        number: 1, 
        title: "Basic Introductions",
        url: "/chapter-01/basic-introductions"
      },
      { 
        number: 2, 
        title: "Demonstrative Pronouns",
        url: "/chapter-01/demonstrative-pronouns"
      },
      { 
        number: 3, 
        title: "Common Objects",
        url: "/chapter-01/common-objects"
      },
      { 
        number: 4, 
        title: "Is and Is Not",
        url: "/chapter-01/is-and-is-not"
      },
      { 
        number: 5, 
        title: "Here and There",
        url: "/chapter-01/here-and-there"
      },
      { 
        number: 6, 
        title: "Locations",
        url: "/chapter-01/locations"
      },
      { 
        number: 7, 
        title: "Personal Pronouns",
        url: "/chapter-01/personal-pronouns"
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