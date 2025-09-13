// Simple test to verify curriculum data structure
import { curriculumData, getAllLessons, findLessonById, getLessonsByCategory, getCategoryInfo } from './curriculum.js';

// Test curriculum data structure
console.log('Testing curriculum data structure...');

// Test 1: Check if curriculumData has expected categories
const expectedCategories = ['foundation', 'pronouns', 'time', 'verbs', 'grammar', 'numbers', 'vocabulary', 'directions', 'conversation', 'advanced'];
const actualCategories = Object.keys(curriculumData);

console.log('Expected categories:', expectedCategories);
console.log('Actual categories:', actualCategories);

// Test 2: Check if each category has required properties
Object.entries(curriculumData).forEach(([categoryId, category]) => {
  console.log(`\nTesting category: ${categoryId}`);
  console.log('Has title:', !!category.title);
  console.log('Has description:', !!category.description);
  console.log('Has lessons array:', Array.isArray(category.lessons));
  console.log('Number of lessons:', category.lessons.length);
  
  // Check each lesson
  category.lessons.forEach((lesson, index) => {
    console.log(`  Lesson ${index + 1}: ${lesson.id}`);
    console.log('    Has title:', !!lesson.title);
    console.log('    Has file:', !!lesson.file);
    console.log('    Has description:', !!lesson.description);
  });
});

// Test 3: Test helper functions
console.log('\nTesting helper functions...');

// Test getAllLessons
const allLessons = getAllLessons();
console.log('Total lessons:', allLessons.length);

// Test findLessonById
const testLesson = findLessonById('basic_pronouns');
console.log('Found lesson:', testLesson ? testLesson.title : 'Not found');

// Test getLessonsByCategory
const foundationLessons = getLessonsByCategory('foundation');
console.log('Foundation lessons:', foundationLessons.length);

// Test getCategoryInfo
const foundationInfo = getCategoryInfo('foundation');
console.log('Foundation info:', foundationInfo ? foundationInfo.title : 'Not found');

console.log('\nCurriculum data structure test completed!');
