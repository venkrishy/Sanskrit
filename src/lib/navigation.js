// Navigation utility for lesson pages
export const getLessonNavigation = (currentPath) => {
  // Define the lesson structure
  const lessons = {
    "/01-getting-started/greetings-identity": {
      chapterNumber: 1,
      lessonNumber: 1,
      totalLessons: 6,
      chapterTitle: "Hello! Getting Started",
      prevLesson: null,
      nextLesson: {
        title: "My Name Is... (The Masculine Name)",
        url: "/01-getting-started/masculine-name"
      }
    },
    "/01-getting-started/masculine-name": {
      chapterNumber: 1,
      lessonNumber: 2,
      totalLessons: 6,
      chapterTitle: "Hello! Getting Started",
      prevLesson: {
        title: "Greetings and Identity",
        url: "/01-getting-started/greetings-identity"
      },
      nextLesson: {
        title: "My Name Is... (The Feminine Name)",
        url: "/01-getting-started/feminine-name"
      }
    },
    "/01-getting-started/feminine-name": {
      chapterNumber: 1,
      lessonNumber: 3,
      totalLessons: 6,
      chapterTitle: "Hello! Getting Started",
      prevLesson: {
        title: "My Name Is... (The Masculine Name)",
        url: "/01-getting-started/masculine-name"
      },
      nextLesson: {
        title: "Asking: Who? and What? (kaḥ and kim)",
        url: "/01-getting-started/who-what"
      }
    },
    "/01-getting-started/who-what": {
      chapterNumber: 1,
      lessonNumber: 4,
      totalLessons: 6,
      chapterTitle: "Hello! Getting Started",
      prevLesson: {
        title: "My Name Is... (The Feminine Name)",
        url: "/01-getting-started/feminine-name"
      },
      nextLesson: {
        title: "Yes/No: Simple Affirmation and Negation",
        url: "/01-getting-started/yes-no"
      }
    },
    "/01-getting-started/yes-no": {
      chapterNumber: 1,
      lessonNumber: 5,
      totalLessons: 6,
      chapterTitle: "Hello! Getting Started",
      prevLesson: {
        title: "Asking: Who? and What? (kaḥ and kim)",
        url: "/01-getting-started/who-what"
      },
      nextLesson: {
        title: "Vocabulary: Top 10 Daily Use Items",
        url: "/01-getting-started/daily-items"
      }
    },
    "/01-getting-started/daily-items": {
      chapterNumber: 1,
      lessonNumber: 6,
      totalLessons: 6,
      chapterTitle: "Hello! Getting Started",
      prevLesson: {
        title: "Yes/No: Simple Affirmation and Negation",
        url: "/01-getting-started/yes-no"
      },
      nextLesson: null
    }
  };

  return lessons[currentPath] || null;
};

