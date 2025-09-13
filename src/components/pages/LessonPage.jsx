import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import ContentLoader from '../ContentLoader';
import { getCategoryInfo, findLessonById } from '../../data/curriculum';

const LessonPage = () => {
  const { categoryId, lessonId } = useParams();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const category = getCategoryInfo(categoryId);
  const lesson = findLessonById(lessonId);
  const currentLessonIndex = category?.lessons.findIndex(l => l.id === lessonId) || 0;

  if (!category || !lesson) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Lesson Not Found</h1>
          <p className="text-gray-600 mb-4">The requested lesson does not exist.</p>
          <Link to="/curriculum" className="text-orange-500 hover:text-orange-600">
            ← Back to Curriculum
          </Link>
        </div>
      </div>
    );
  }

  const nextLesson = category.lessons[currentLessonIndex + 1];
  const prevLesson = category.lessons[currentLessonIndex - 1];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Sidebar Toggle */}
      <div className="lg:hidden bg-white border-b px-4 py-3">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          Menu
        </button>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className={`${sidebarOpen ? 'block' : 'hidden'} lg:block lg:w-64 bg-white border-r border-gray-200 h-screen overflow-y-auto fixed lg:relative z-10`}>
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800 sanskrit-text">
                {category.title}
              </h2>
              <button
                onClick={() => setSidebarOpen(false)}
                className="lg:hidden text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            
            <nav className="space-y-1">
              {category.lessons.map((lessonItem, index) => (
                <Link
                  key={lessonItem.id}
                  to={`/curriculum/${categoryId}/${lessonItem.id}`}
                  className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                    lessonItem.id === lessonId
                      ? 'bg-orange-100 text-orange-700 border-l-2 border-orange-500'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <div className="flex items-center">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold mr-3 ${
                      lessonItem.id === lessonId
                        ? 'bg-orange-500 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {index + 1}
                    </div>
                    <div>
                      <div className="font-medium">{lessonItem.title}</div>
                      <div className="text-xs text-gray-500 mt-1">
                        {lessonItem.description}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 lg:ml-0">
          {/* Lesson Header */}
          <div className="bg-white border-b px-4 py-6">
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <nav className="mb-4">
                <ol className="flex items-center space-x-2 text-sm text-gray-500">
                  <li><Link to="/" className="hover:text-gray-700">Home</Link></li>
                  <li>›</li>
                  <li><Link to="/curriculum" className="hover:text-gray-700">Curriculum</Link></li>
                  <li>›</li>
                  <li><Link to={`/curriculum/${categoryId}`} className="hover:text-gray-700">{category.title}</Link></li>
                  <li>›</li>
                  <li className="text-gray-900 font-medium">{lesson.title}</li>
                </ol>
              </nav>

              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2 sanskrit-text">
                    {lesson.title}
                  </h1>
                  <p className="text-gray-600">
                    {lesson.description}
                  </p>
                </div>
                <div className="text-sm text-gray-500">
                  Lesson {currentLessonIndex + 1} of {category.lessons.length}
                </div>
              </div>
            </div>
          </div>

          {/* Lesson Content */}
          <div className="max-w-4xl mx-auto">
            <ContentLoader categoryId={categoryId} lessonId={lessonId} />
          </div>

          {/* Navigation */}
          <div className="bg-white border-t px-4 py-6">
            <div className="max-w-4xl mx-auto flex justify-between">
              <div>
                {prevLesson ? (
                  <Link
                    to={`/curriculum/${categoryId}/${prevLesson.id}`}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Previous: {prevLesson.title}
                  </Link>
                ) : (
                  <Link
                    to={`/curriculum/${categoryId}`}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to {category.title}
                  </Link>
                )}
              </div>
              
              <div>
                {nextLesson ? (
                  <Link
                    to={`/curriculum/${categoryId}/${nextLesson.id}`}
                    className="inline-flex items-center px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
                  >
                    Next: {nextLesson.title}
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ) : (
                  <Link
                    to="/curriculum"
                    className="inline-flex items-center px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
                  >
                    Complete Category
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonPage;
