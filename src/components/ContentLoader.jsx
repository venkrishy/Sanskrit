import { useState, useEffect } from 'react';
import { curriculumData } from '../data/curriculum';

const ContentLoader = ({ categoryId, lessonId }) => {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        setLoading(true);
        setError(null);

        // Find the lesson data
        const category = curriculumData[categoryId];
        if (!category) {
          throw new Error(`Category ${categoryId} not found`);
        }

        const lesson = category.lessons.find(l => l.id === lessonId);
        if (!lesson) {
          throw new Error(`Lesson ${lessonId} not found in category ${categoryId}`);
        }

        // Try to load the markdown file
        const response = await fetch(`/curriculum/${categoryId}/${lesson.file}`);
        if (!response.ok) {
          throw new Error(`Failed to load ${lesson.file}`);
        }

        const markdownContent = await response.text();
        setContent(markdownContent);
      } catch (err) {
        console.error('Error loading content:', err);
        setError(err.message);
        // Fallback content for development
        setContent(`
# ${lessonId.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}

This is a placeholder for the lesson content. The actual markdown file would be loaded from:
\`/curriculum/${categoryId}/${lessonId}.md\`

## Sample Content

Here's some sample Sanskrit content to demonstrate the styling:

### Basic Vocabulary

| Sanskrit | Transliteration | English |
|----------|----------------|---------|
| नमस्ते | namaste | Hello/Greetings |
| धन्यवादः | dhanyavādaḥ | Thank you |
| क्षम्यताम् | kṣamyatām | Excuse me |

### Example Sentences

1. **नमस्ते भवान्** (namaste bhavān) - Hello sir
2. **धन्यवादः भवत्यै** (dhanyavādaḥ bhavatyai) - Thank you madam
3. **क्षम्यताम्** (kṣamyatām) - Excuse me

### Exercise

Fill in the blanks with appropriate Sanskrit words:

- भवतः नाम _____? (What is your name?)
- मम नाम _____। (My name is _____)
- _____ स्वागतम्। (Welcome)

---

*Note: This is placeholder content. The actual lesson content will be loaded from the curriculum markdown files.*
        `);
      } finally {
        setLoading(false);
      }
    };

    if (categoryId && lessonId) {
      loadContent();
    }
  }, [categoryId, lessonId]);

  if (loading) {
    return (
      <div className="lesson-content">
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
          <span className="ml-2 text-gray-600">Loading lesson content...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="lesson-content">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h3 className="text-red-800 font-semibold mb-2">Error Loading Content</h3>
          <p className="text-red-600">{error}</p>
          <p className="text-sm text-red-500 mt-2">
            This might be because the markdown file doesn't exist yet or there's a network issue.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="lesson-content">
      <MarkdownRenderer content={content} />
    </div>
  );
};

// Simple markdown renderer component
const MarkdownRenderer = ({ content }) => {
  const renderMarkdown = (text) => {
    // Basic markdown parsing - in a real app, you'd use a proper markdown library
    let html = text
      // Headers
      .replace(/^### (.*$)/gim, '<h3 class="sanskrit-text text-xl font-semibold mb-3 mt-6">$1</h3>')
      .replace(/^## (.*$)/gim, '<h2 class="sanskrit-text text-2xl font-semibold mb-4 mt-8 border-b-2 border-orange-500 pb-2">$1</h2>')
      .replace(/^# (.*$)/gim, '<h1 class="sanskrit-text text-3xl font-bold mb-6 mt-8 border-b-3 border-orange-500 pb-3">$1</h1>')
      
      // Bold text
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>')
      
      // Italic text
      .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
      
      // Code blocks
      .replace(/```([\s\S]*?)```/g, '<pre class="bg-gray-100 border border-gray-300 rounded-lg p-4 overflow-x-auto my-4"><code>$1</code></pre>')
      
      // Inline code
      .replace(/`(.*?)`/g, '<code class="bg-gray-100 px-2 py-1 rounded text-sm">$1</code>')
      
      // Lists
      .replace(/^\* (.*$)/gim, '<li class="mb-1">$1</li>')
      .replace(/^- (.*$)/gim, '<li class="mb-1">$1</li>')
      
      // Tables (basic support)
      .replace(/\|(.+)\|/g, (match, content) => {
        const cells = content.split('|').map(cell => cell.trim());
        return `<tr>${cells.map(cell => `<td class="border border-gray-300 px-3 py-2">${cell}</td>`).join('')}</tr>`;
      })
      
      // Line breaks
      .replace(/\n\n/g, '</p><p class="mb-4">')
      .replace(/\n/g, '<br>');

    // Wrap in paragraphs
    html = `<p class="mb-4">${html}</p>`;
    
    // Handle tables
    html = html.replace(/(<tr>.*<\/tr>)/g, '<table class="sanskrit-table w-full border-collapse border border-gray-300 my-4"><tbody>$1</tbody></table>');
    
    // Handle lists
    html = html.replace(/(<li.*<\/li>)/g, '<ul class="list-disc list-inside mb-4">$1</ul>');

    return html;
  };

  return (
    <div 
      className="prose prose-lg max-w-none"
      dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }}
    />
  );
};

export default ContentLoader;
