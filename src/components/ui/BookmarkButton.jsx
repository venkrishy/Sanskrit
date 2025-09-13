import { useState, useEffect } from 'react'
import { BookmarkIcon } from '@heroicons/react/24/outline'
import { BookmarkIcon as BookmarkSolidIcon } from '@heroicons/react/24/solid'
import { saveBookmark, removeBookmark, isBookmarked } from '@/lib/bookmarks'

export function BookmarkButton({ sectionId, className = '' }) {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    setIsActive(isBookmarked(sectionId))
  }, [sectionId])

  const toggleBookmark = () => {
    if (isActive) {
      removeBookmark(sectionId)
    } else {
      saveBookmark(sectionId)
    }
    setIsActive(!isActive)
  }

  return (
    <button
      onClick={toggleBookmark}
      className={`inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 ${className}`}
      title={isActive ? 'Remove bookmark' : 'Add bookmark'}
    >
      {isActive ? (
        <BookmarkSolidIcon className="h-5 w-5" />
      ) : (
        <BookmarkIcon className="h-5 w-5" />
      )}
    </button>
  )
} 