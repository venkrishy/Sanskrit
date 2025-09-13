# Sanskrit Learning App Improvement Plan

## Overview
Transform the current React app into a comprehensive single-page application that displays the curriculum content from the `/curriculum` folder with proper navigation, styling, and content rendering.

## Current State Analysis

### Existing Structure
- React app with Vite build system
- Uses React Router for navigation
- Has basic components: Navbar, Layout, LandingPage, Lessons, Practice, Quiz, Settings
- Uses Tailwind CSS for styling
- Has shadcn/ui components integrated

### Curriculum Folder Structure
```
curriculum/
├── advanced/ (49 files)
├── conversation/ (3 files)
├── directions/ (2 files)
├── foundation/ (3 files)
├── grammar/ (2 files)
├── numbers/ (3 files)
├── pronouns/ (4 files)
├── reference/ (1 file - table_of_contents.md)
├── time/ (3 files)
├── verbs/ (1 file)
└── vocabulary/ (3 files)
```

## Implementation Plan

### Phase 1: Navigation Structure Update

#### 1.1 Update Navigation Component
- **File**: `src/components/Navbar.jsx`
- **Changes**:
  - Create hierarchical navigation reflecting curriculum folder structure
  - Top-level categories: Foundation, Pronouns, Time, Verbs, Grammar, Numbers, Vocabulary, Directions, Conversation, Advanced
  - Each category expands to show individual lesson files
  - Use collapsible/expandable menu structure

#### 1.2 Create Curriculum Data Structure
- **File**: `src/data/curriculum.js`
- **Purpose**: Map curriculum folder structure to navigation data
- **Structure**:
```javascript
const curriculumData = {
  foundation: {
    title: "Foundation",
    lessons: [
      { id: "basic_conversations", title: "Basic Conversations", file: "basic_conversations.md" },
      { id: "greetings", title: "Greetings", file: "greetings.md" },
      { id: "introductions", title: "Introductions", file: "introductions.md" }
    ]
  },
  pronouns: {
    title: "Pronouns",
    lessons: [
      { id: "basic_pronouns", title: "Basic Pronouns", file: "basic_pronouns.md" },
      { id: "demonstrative_pronouns", title: "Demonstrative Pronouns", file: "demonstrative_pronouns.md" },
      { id: "interrogative_pronouns", title: "Interrogative Pronouns", file: "interrogative_pronouns.md" },
      { id: "pronoun_transformations", title: "Pronoun Transformations", file: "pronoun_transformations.md" }
    ]
  },
  // ... other categories
}
```

### Phase 2: Content Display System

#### 2.1 Create Markdown Content Loader
- **File**: `src/components/ContentLoader.jsx`
- **Purpose**: Load and display markdown content from curriculum files
- **Features**:
  - Fetch markdown files from curriculum folder
  - Parse and render markdown content
  - Apply proper Sanskrit-specific styling
  - Handle Devanagari script rendering
  - Support transliteration display

#### 2.2 Create Lesson Display Component
- **File**: `src/components/LessonDisplay.jsx`
- **Purpose**: Main component for displaying individual lessons
- **Features**:
  - Header with lesson title and navigation
  - Content area with proper Sanskrit typography
  - Sidebar with related lessons
  - Progress tracking
  - Print-friendly layout

#### 2.3 Update Routing System
- **File**: `src/App.jsx`
- **Changes**:
  - Add new routes for curriculum content
  - Implement dynamic routing for lessons
  - Handle category and lesson navigation
  - Maintain single-page app behavior

### Phase 3: Styling and Typography

#### 3.1 Externalize CSS
- **File**: `src/styles/sanskrit.css`
- **Purpose**: Dedicated CSS file for Sanskrit-specific styling
- **Features**:
  - Devanagari font support
  - Proper Sanskrit typography
  - Responsive design for different screen sizes
  - Print styles
  - Dark/light theme support

#### 3.2 Update Tailwind Configuration
- **File**: `tailwind.config.js`
- **Changes**:
  - Add Sanskrit-specific font families
  - Define custom colors for Sanskrit text
  - Add typography plugin for better text rendering
  - Configure responsive breakpoints

#### 3.3 Create Typography Components
- **File**: `src/components/typography/SanskritText.jsx`
- **Purpose**: Specialized components for Sanskrit text rendering
- **Features**:
  - Devanagari script support
  - Transliteration toggle
  - Audio pronunciation (future enhancement)
  - Proper line spacing and character spacing

### Phase 4: Homepage and Table of Contents

#### 4.1 Update Homepage
- **File**: `src/components/pages/LandingPage.jsx`
- **Changes**:
  - Display table of contents from `curriculum/reference/table_of_contents.md`
  - Create interactive navigation to curriculum sections
  - Add search functionality for lessons
  - Show progress overview
  - Add quick access to recent lessons

#### 4.2 Create Table of Contents Component
- **File**: `src/components/TableOfContents.jsx`
- **Purpose**: Display and navigate the curriculum structure
- **Features**:
  - Hierarchical display of curriculum
  - Click-to-navigate functionality
  - Progress indicators
  - Search and filter capabilities
  - Export/print options

### Phase 5: Enhanced Features

#### 5.1 Progress Tracking
- **File**: `src/lib/progress.js`
- **Purpose**: Track user progress through curriculum
- **Features**:
  - Mark lessons as completed
  - Track time spent on each lesson
  - Generate progress reports
  - Recommend next lessons

#### 5.2 Search Functionality
- **File**: `src/components/Search.jsx`
- **Purpose**: Search through curriculum content
- **Features**:
  - Full-text search across all lessons
  - Filter by category or lesson type
  - Search in Sanskrit, transliteration, or English
  - Highlight search results

#### 5.3 Bookmark System
- **File**: `src/lib/bookmarks.js`
- **Purpose**: Allow users to bookmark important lessons
- **Features**:
  - Add/remove bookmarks
  - Organize bookmarks by category
  - Quick access to bookmarked content
  - Export bookmarks

### Phase 6: Technical Implementation Details

#### 6.1 File Structure Updates
```
src/
├── components/
│   ├── navigation/
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │   └── Breadcrumb.jsx
│   ├── content/
│   │   ├── ContentLoader.jsx
│   │   ├── LessonDisplay.jsx
│   │   └── MarkdownRenderer.jsx
│   ├── typography/
│   │   ├── SanskritText.jsx
│   │   ├── Transliteration.jsx
│   │   └── DevanagariText.jsx
│   └── pages/
│       ├── LandingPage.jsx
│       ├── LessonPage.jsx
│       └── CategoryPage.jsx
├── data/
│   ├── curriculum.js
│   └── navigation.js
├── lib/
│   ├── markdown.js
│   ├── progress.js
│   └── bookmarks.js
└── styles/
    ├── sanskrit.css
    └── components.css
```

#### 6.2 Routing Configuration
```javascript
// New route structure
<Routes>
  <Route path="/" element={<LandingPage />} />
  <Route path="/curriculum" element={<CurriculumOverview />} />
  <Route path="/curriculum/:category" element={<CategoryPage />} />
  <Route path="/curriculum/:category/:lesson" element={<LessonPage />} />
  <Route path="/search" element={<SearchPage />} />
  <Route path="/bookmarks" element={<BookmarksPage />} />
  <Route path="/progress" element={<ProgressPage />} />
</Routes>
```

#### 6.3 State Management
- Use React Context for global state
- Implement local storage for progress and bookmarks
- Add URL state management for deep linking

### Phase 7: Content Processing

#### 7.1 Markdown Processing
- **File**: `src/lib/markdown.js`
- **Purpose**: Process markdown files and convert to React components
- **Features**:
  - Parse markdown syntax
  - Handle Sanskrit-specific formatting
  - Convert tables to interactive components
  - Process images and media
  - Generate table of contents

#### 7.2 Content Validation
- **File**: `src/lib/validation.js`
- **Purpose**: Validate curriculum content structure
- **Features**:
  - Check for missing files
  - Validate markdown syntax
  - Ensure proper navigation structure
  - Generate content reports

### Phase 8: Performance Optimization

#### 8.1 Lazy Loading
- Implement code splitting for different curriculum sections
- Lazy load lesson content
- Optimize image loading
- Implement virtual scrolling for large content

#### 8.2 Caching Strategy
- Cache markdown content
- Implement service worker for offline access
- Use browser storage for user preferences
- Optimize bundle size

### Phase 9: Testing and Quality Assurance

#### 9.1 Component Testing
- Unit tests for all new components
- Integration tests for navigation flow
- Accessibility testing
- Cross-browser compatibility testing

#### 9.2 Content Testing
- Validate all curriculum files load correctly
- Test navigation between lessons
- Verify responsive design
- Test search functionality

### Phase 10: Deployment and Documentation

#### 10.1 Build Configuration
- Update Vite configuration for production
- Optimize asset bundling
- Configure environment variables
- Set up deployment pipeline

#### 10.2 Documentation
- Update README with new features
- Create user guide for navigation
- Document component APIs
- Add development setup instructions

## Implementation Timeline

### Week 1: Foundation
- Update navigation structure
- Create curriculum data mapping
- Implement basic content loading

### Week 2: Content Display
- Create markdown renderer
- Implement lesson display component
- Update routing system

### Week 3: Styling and Typography
- Externalize CSS
- Implement Sanskrit typography
- Create responsive design

### Week 4: Enhanced Features
- Implement search functionality
- Add progress tracking
- Create bookmark system

### Week 5: Testing and Optimization
- Performance optimization
- Testing and bug fixes
- Documentation updates

## Success Criteria

1. **Navigation**: Users can easily navigate through all curriculum categories and lessons
2. **Content Display**: All markdown files render correctly with proper Sanskrit typography
3. **Responsive Design**: App works well on desktop, tablet, and mobile devices
4. **Performance**: Fast loading times and smooth navigation
5. **Accessibility**: App is accessible to users with disabilities
6. **User Experience**: Intuitive interface with clear progress tracking

## Technical Considerations

### Font Support
- Ensure proper Devanagari font rendering
- Fallback fonts for different systems
- Web font optimization

### Browser Compatibility
- Support for modern browsers
- Graceful degradation for older browsers
- Mobile browser optimization

### SEO and Accessibility
- Proper meta tags and structured data
- Screen reader compatibility
- Keyboard navigation support

### Future Enhancements
- Audio pronunciation support
- Interactive exercises
- Progress analytics
- Social features (sharing, comments)
- Offline mode
- Multi-language support

This plan provides a comprehensive roadmap for transforming the Sanskrit learning app into a fully-featured curriculum browser with proper navigation, content display, and user experience enhancements.
