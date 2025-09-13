import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { curriculumData } from '../data/curriculum';

const CurriculumSidebar = () => {
  const location = useLocation();
  const [expandedCategories, setExpandedCategories] = useState({});

  const toggleCategory = (categoryId) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const isCategoryActive = (categoryId) => {
    return location.pathname.startsWith(`/curriculum/${categoryId}`);
  };

  const isLessonActive = (categoryId, lessonId) => {
    return location.pathname === `/curriculum/${categoryId}/${lessonId}`;
  };

  return (
    <div className="curriculum-nav w-64 bg-white border-r border-gray-200 h-full overflow-y-auto">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-4 sanskrit-text">
          Curriculum
        </h2>
        
        <nav className="space-y-2">
          {Object.entries(curriculumData).map(([categoryId, category]) => (
            <div key={categoryId} className="category">
              <button
                onClick={() => toggleCategory(categoryId)}
                className={`category-title w-full text-left px-3 py-2 rounded-md transition-colors ${
                  isCategoryActive(categoryId)
                    ? 'bg-orange-500 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{category.title}</span>
                  <span className={`transform transition-transform ${
                    expandedCategories[categoryId] ? 'rotate-90' : ''
                  }`}>
                    ▶
                  </span>
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {category.description}
                </div>
              </button>
              
              {expandedCategories[categoryId] && (
                <div className="lessons mt-2 ml-4 space-y-1">
                  {category.lessons.map((lesson) => (
                    <Link
                      key={lesson.id}
                      to={`/curriculum/${categoryId}/${lesson.id}`}
                      className={`lesson-link block px-3 py-2 rounded-md text-sm transition-colors ${
                        isLessonActive(categoryId, lesson.id)
                          ? 'bg-orange-100 text-orange-700 border-l-2 border-orange-500'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
                      }`}
                    >
                      <div className="font-medium">{lesson.title}</div>
                      <div className="text-xs text-gray-500 mt-1">
                        {lesson.description}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default CurriculumSidebar;
