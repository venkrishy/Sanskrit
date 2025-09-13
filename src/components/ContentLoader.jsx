import { useState, useEffect } from 'react'

export default function ContentLoader({ route, className = "" }) {
  const [content, setContent] = useState('')
  const [pageInfo, setPageInfo] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadContent = async () => {
      try {
        setLoading(true)
        setError(null)
        
        // First, load the sitemap to get the page info and markdown file path
        const sitemapResponse = await fetch('/sitemap.json')
        if (!sitemapResponse.ok) {
          throw new Error(`Failed to load sitemap: ${sitemapResponse.status} ${sitemapResponse.statusText}`)
        }
        
        const sitemap = await sitemapResponse.json()
        const pageData = sitemap[route]
        
        if (!pageData) {
          throw new Error(`Route not found in sitemap: ${route}`)
        }
        
        setPageInfo(pageData)
        
        // Then fetch the HTML file (prefer HTML over markdown)
        const htmlFile = pageData.htmlFile || `/curriculum/${pageData.markdownFile}`
        const contentResponse = await fetch(htmlFile)
        
        if (!contentResponse.ok) {
          throw new Error(`Failed to load content: ${contentResponse.status} ${contentResponse.statusText}`)
        }
        
        const text = await contentResponse.text()
        
        // Extract just the body content from the HTML file
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

    if (route) {
      loadContent()
    }
  }, [route])

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
            Route: <code>{route}</code>
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className={`prose max-w-none ${className}`}>
      {/* Display the HTML content directly */}
      <div 
        className="html-content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
