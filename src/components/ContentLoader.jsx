import { useState, useEffect } from 'react'

export default function ContentLoader({ contentPath, fallbackContent, className = "" }) {
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadContent = async () => {
      try {
        setLoading(true)
        setError(null)
        
        if (!contentPath) {
          setLoading(false)
          return
        }
        
        // Try to fetch the content from the specified path
        const contentResponse = await fetch(contentPath)
        
        if (!contentResponse.ok) {
          throw new Error(`Failed to load content: ${contentResponse.status} ${contentResponse.statusText}`)
        }
        
        const text = await contentResponse.text()
        
        // Extract just the body content from the HTML file if it's HTML
        const bodyMatch = text.match(/<body[^>]*>([\s\S]*?)<\/body>/i)
        if (bodyMatch) {
          setContent(bodyMatch[1])
        } else {
          // Fallback: use the entire content if no body tag found
          setContent(text)
        }
      } catch (err) {
        console.error('Error loading content:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    if (contentPath) {
      loadContent()
    } else {
      setLoading(false)
    }
  }, [contentPath])

  if (loading) {
    return (
      <div className={`prose max-w-none ${className}`}>
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <span className="ml-2 text-muted-foreground">Loading content...</span>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className={`prose max-w-none ${className}`}>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h3 className="text-red-800 font-semibold">Error loading content</h3>
          <p className="text-red-600 mt-1">{error}</p>
          <p className="text-sm text-red-500 mt-2">
            Path: <code>{contentPath}</code>
          </p>
        </div>
        {fallbackContent && (
          <div className="mt-4">
            {fallbackContent}
          </div>
        )}
      </div>
    )
  }

  // If we have content, display it
  if (content) {
    return (
      <div className={`prose max-w-none ${className}`}>
        <div 
          className="html-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    )
  }

  // If no content and no loading, show fallback
  if (fallbackContent) {
    return (
      <div className={`prose max-w-none ${className}`}>
        {fallbackContent}
      </div>
    )
  }

  // Final fallback
  return (
    <div className={`prose max-w-none ${className}`}>
      <div className="text-center py-8 text-gray-500">
        No content available
      </div>
    </div>
  )
}
