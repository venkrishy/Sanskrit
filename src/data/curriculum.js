// Curriculum data structure mapping the folder organization
export const curriculumData = {
  foundation: {
    title: "Foundation",
    description: "Basic Sanskrit concepts and introductions",
    lessons: [
      { 
        id: "basic_conversations", 
        title: "Basic Conversations", 
        file: "basic_conversations.md",
        description: "Learn fundamental conversation patterns"
      },
      { 
        id: "greetings", 
        title: "Greetings", 
        file: "greetings.md",
        description: "Common Sanskrit greetings and courtesy expressions"
      },
      { 
        id: "introductions", 
        title: "Introductions", 
        file: "introductions.md",
        description: "How to introduce yourself and others"
      }
    ]
  },
  pronouns: {
    title: "Pronouns",
    description: "Pronoun forms and usage in Sanskrit",
    lessons: [
      { 
        id: "basic_pronouns", 
        title: "Basic Pronouns", 
        file: "basic_pronouns.md",
        description: "Fundamental pronoun forms and usage"
      },
      { 
        id: "demonstrative_pronouns", 
        title: "Demonstrative Pronouns", 
        file: "demonstrative_pronouns.md",
        description: "This, that, these, those in Sanskrit"
      },
      { 
        id: "interrogative_pronouns", 
        title: "Interrogative Pronouns", 
        file: "interrogative_pronouns.md",
        description: "Question words and interrogative forms"
      },
      { 
        id: "pronoun_transformations", 
        title: "Pronoun Transformations", 
        file: "pronoun_transformations.md",
        description: "Converting pronouns between forms"
      }
    ]
  },
  time: {
    title: "Time",
    description: "Time expressions and temporal concepts",
    lessons: [
      { 
        id: "daily_routines", 
        title: "Daily Routines", 
        file: "daily_routines.md",
        description: "Expressing daily activities and routines"
      },
      { 
        id: "days_and_dates", 
        title: "Days and Dates", 
        file: "days_and_dates.md",
        description: "Days of the week and date expressions"
      },
      { 
        id: "time_expressions", 
        title: "Time Expressions", 
        file: "time_expressions.md",
        description: "Complex time expressions and clock time"
      }
    ]
  },
  verbs: {
    title: "Verbs",
    description: "Verb forms and conjugations",
    lessons: [
      { 
        id: "present_tense_forms", 
        title: "Present Tense Forms", 
        file: "present_tense_forms.md",
        description: "Present tense verb conjugations and usage"
      }
    ]
  },
  grammar: {
    title: "Grammar",
    description: "Advanced grammatical concepts",
    lessons: [
      { 
        id: "plural_forms", 
        title: "Plural Forms", 
        file: "plural_forms.md",
        description: "Forming plural forms of nouns and pronouns"
      },
      { 
        id: "plural_forms_advanced", 
        title: "Plural Forms Advanced", 
        file: "plural_forms_advanced.md",
        description: "Advanced plural form transformations"
      }
    ]
  },
  numbers: {
    title: "Numbers",
    description: "Number systems and counting",
    lessons: [
      { 
        id: "basic_numbers", 
        title: "Basic Numbers", 
        file: "basic_numbers.md",
        description: "Numbers 1-10 and basic counting"
      },
      { 
        id: "counting_questions", 
        title: "Counting Questions", 
        file: "counting_questions.md",
        description: "Asking and answering counting questions"
      },
      { 
        id: "number_practice", 
        title: "Number Practice", 
        file: "number_practice.md",
        description: "Practice exercises with numbers"
      }
    ]
  },
  vocabulary: {
    title: "Vocabulary",
    description: "Thematic vocabulary collections",
    lessons: [
      { 
        id: "household_objects", 
        title: "Household Objects", 
        file: "household_objects.md",
        description: "Common household items and objects"
      },
      { 
        id: "kitchen_utensils", 
        title: "Kitchen Utensils", 
        file: "kitchen_utensils.md",
        description: "Kitchen and cooking related vocabulary"
      },
      { 
        id: "workplace_vocabulary", 
        title: "Workplace Vocabulary", 
        file: "workplace_vocabulary.md",
        description: "Professional and workplace terminology"
      }
    ]
  },
  directions: {
    title: "Directions",
    description: "Spatial relationships and directions",
    lessons: [
      { 
        id: "spatial_relationships", 
        title: "Spatial Relationships", 
        file: "spatial_relationships.md",
        description: "Describing spatial positions and relationships"
      },
      { 
        id: "travel_vocabulary", 
        title: "Travel Vocabulary", 
        file: "travel_vocabulary.md",
        description: "Travel and movement related vocabulary"
      }
    ]
  },
  conversation: {
    title: "Conversation",
    description: "Dialogue patterns and conversation practice",
    lessons: [
      { 
        id: "basic_dialogues", 
        title: "Basic Dialogues", 
        file: "basic_dialogues.md",
        description: "Simple conversation patterns and dialogues"
      },
      { 
        id: "complex_dialogues", 
        title: "Complex Dialogues", 
        file: "complex_dialogues.md",
        description: "Advanced conversation structures"
      },
      { 
        id: "family_conversations", 
        title: "Family Conversations", 
        file: "family_conversations.md",
        description: "Family-related conversation scenarios"
      }
    ]
  },
  advanced: {
    title: "Advanced",
    description: "Advanced exercises and complex concepts",
    lessons: [
      { 
        id: "advanced_exercises", 
        title: "Advanced Exercises", 
        file: "advanced_exercises.md",
        description: "Comprehensive advanced practice exercises"
      },
      { 
        id: "grammar_mastery", 
        title: "Grammar Mastery", 
        file: "grammar_mastery.md",
        description: "Advanced grammatical concepts and mastery"
      },
      { 
        id: "reading_comprehension", 
        title: "Reading Comprehension", 
        file: "reading_comprehension.md",
        description: "Reading and understanding Sanskrit texts"
      },
      { 
        id: "writing_practice", 
        title: "Writing Practice", 
        file: "writing_practice.md",
        description: "Practice writing in Sanskrit"
      }
    ]
  }
};

// Helper function to get all lessons as a flat array
export const getAllLessons = () => {
  const lessons = [];
  Object.values(curriculumData).forEach(category => {
    category.lessons.forEach(lesson => {
      lessons.push({
        ...lesson,
        category: category.title,
        categoryId: Object.keys(curriculumData).find(key => curriculumData[key] === category)
      });
    });
  });
  return lessons;
};

// Helper function to find a lesson by ID
export const findLessonById = (lessonId) => {
  const allLessons = getAllLessons();
  return allLessons.find(lesson => lesson.id === lessonId);
};

// Helper function to get lessons by category
export const getLessonsByCategory = (categoryId) => {
  return curriculumData[categoryId]?.lessons || [];
};

// Helper function to get category info
export const getCategoryInfo = (categoryId) => {
  return curriculumData[categoryId] || null;
};
