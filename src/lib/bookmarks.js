const BOOKMARK_KEY = 'sanskrit_bookmarks'
const LAST_VISITED_KEY = 'sanskrit_last_visited'

export function saveBookmark(sectionId) {
  const bookmarks = getBookmarks()
  if (!bookmarks.includes(sectionId)) {
    bookmarks.push(sectionId)
    localStorage.setItem(BOOKMARK_KEY, JSON.stringify(bookmarks))
  }
}

export function removeBookmark(sectionId) {
  const bookmarks = getBookmarks()
  const filtered = bookmarks.filter(id => id !== sectionId)
  localStorage.setItem(BOOKMARK_KEY, JSON.stringify(filtered))
}

export function getBookmarks() {
  const stored = localStorage.getItem(BOOKMARK_KEY)
  return stored ? JSON.parse(stored) : []
}

export function isBookmarked(sectionId) {
  return getBookmarks().includes(sectionId)
}

export function saveLastVisited(sectionId) {
  localStorage.setItem(LAST_VISITED_KEY, sectionId)
}

export function getLastVisited() {
  return localStorage.getItem(LAST_VISITED_KEY) || '1.1'
}

// Progress tracking
const PROGRESS_KEY = 'sanskrit_progress'

export function markSectionComplete(sectionId) {
  const progress = getProgress()
  if (!progress.completed.includes(sectionId)) {
    progress.completed.push(sectionId)
    progress.lastCompleted = sectionId
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress))
  }
}

export function getProgress() {
  const stored = localStorage.getItem(PROGRESS_KEY)
  return stored ? JSON.parse(stored) : {
    completed: [],
    lastCompleted: null
  }
}

export function isSectionCompleted(sectionId) {
  const progress = getProgress()
  return progress.completed.includes(sectionId)
}

export function getCompletionPercentage() {
  const progress = getProgress()
  const totalSections = Object.keys(sectionToSlug).length
  return Math.round((progress.completed.length / totalSections) * 100)
} 