// Navigation utility for lesson pages
export const getLessonNavigation = (currentPath) => {
  // Define chapter navigation
  const chapters = {
    1: { title: "Hello! Getting Started", url: "/01-getting-started", nextChapter: 2, prevChapter: null },
    2: { title: "Naming Things & Asking 'Is It There?'", url: "/02-existence-identification", nextChapter: 3, prevChapter: 1 },
    3: { title: "Where Is It? Describing Location", url: "/03-location", nextChapter: 4, prevChapter: 2 },
    4: { title: "Action! What People Are Doing", url: "/04-actions", nextChapter: 5, prevChapter: 3 },
    5: { title: "Groups and Plurals", url: "/05-plurals", nextChapter: 6, prevChapter: 4 },
    6: { title: "Going To and Using Directions", url: "/06-directions", nextChapter: 7, prevChapter: 5 },
    7: { title: "The Tool Role (Instrumental Case)", url: "/07-tool-role", nextChapter: 8, prevChapter: 6 },
    8: { title: "Ownership and Possessives", url: "/08-ownership", nextChapter: 9, prevChapter: 7 },
    9: { title: "Tenses (Beyond Present)", url: "/09-tenses", nextChapter: 10, prevChapter: 8 },
    10: { title: "Adjectives, Quality, and Comparison", url: "/10-adjectives", nextChapter: 11, prevChapter: 9 },
    11: { title: "Time and Numbers", url: "/11-time-numbers", nextChapter: 12, prevChapter: 10 },
    12: { title: "Complex Sentences and Connectors", url: "/12-complex-sentences", nextChapter: 13, prevChapter: 11 },
    13: { title: "Advanced Verbal Concepts", url: "/13-advanced-verbs", nextChapter: 14, prevChapter: 12 },
    14: { title: "Complex Dialogue and Vocabulary Expansion", url: "/14-complex-dialogue", nextChapter: null, prevChapter: 13 }
  };

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
      nextLesson: {
        title: "Existence and Identification",
        url: "/02-existence-identification/existence"
      }
    },
    
    // Chapter 1: Hello! Getting Started - Main Chapter Page
    "/01-getting-started": {
      chapterNumber: 1,
      lessonNumber: 0,
      totalLessons: 7,
      chapterTitle: "Hello! Getting Started",
      prevLesson: null,
      nextLesson: {
        title: "Greetings and Identity",
        url: "/01-getting-started/greetings-identity"
      }
    },
    
    // Chapter 2: Naming Things & Asking 'Is It There?' - Main Chapter Page
    "/02-existence-identification": {
      chapterNumber: 2,
      lessonNumber: 0,
      totalLessons: 6,
      chapterTitle: "Naming Things & Asking 'Is It There?'",
      prevLesson: {
        title: "Vocabulary: Top 10 Daily Use Items",
        url: "/01-getting-started/daily-items"
      },
      nextLesson: {
        title: "Existence and Identification",
        url: "/02-existence-identification/existence"
      }
    },
    
    // Chapter 2: Naming Things & Asking 'Is It There?' - Individual Lessons
    "/02-existence-identification/existence": {
      chapterNumber: 2,
      lessonNumber: 1,
      totalLessons: 6,
      chapterTitle: "Naming Things & Asking 'Is It There?'",
      prevLesson: {
        title: "Vocabulary: Top 10 Daily Use Items",
        url: "/01-getting-started/daily-items"
      },
      nextLesson: {
        title: "Exists and Is Not (asti and nāsti)",
        url: "/02-existence-identification/exists-not"
      }
    },
    "/02-existence-identification/exists-not": {
      chapterNumber: 2,
      lessonNumber: 2,
      totalLessons: 6,
      chapterTitle: "Naming Things & Asking 'Is It There?'",
      prevLesson: {
        title: "Existence and Identification",
        url: "/02-existence-identification/existence"
      },
      nextLesson: {
        title: "Demonstrating: This and That (Neuter)",
        url: "/02-existence-identification/neuter-demonstratives"
      }
    },
    "/02-existence-identification/neuter-demonstratives": {
      chapterNumber: 2,
      lessonNumber: 3,
      totalLessons: 6,
      chapterTitle: "Naming Things & Asking 'Is It There?'",
      prevLesson: {
        title: "Exists and Is Not (asti and nāsti)",
        url: "/02-existence-identification/exists-not"
      },
      nextLesson: {
        title: "Demonstrating: This and That (Masculine)",
        url: "/02-existence-identification/masculine-demonstratives"
      }
    },
    "/02-existence-identification/masculine-demonstratives": {
      chapterNumber: 2,
      lessonNumber: 4,
      totalLessons: 6,
      chapterTitle: "Naming Things & Asking 'Is It There?'",
      prevLesson: {
        title: "Demonstrating: This and That (Neuter)",
        url: "/02-existence-identification/neuter-demonstratives"
      },
      nextLesson: {
        title: "Demonstrating: This and That (Feminine)",
        url: "/02-existence-identification/feminine-demonstratives"
      }
    },
    "/02-existence-identification/feminine-demonstratives": {
      chapterNumber: 2,
      lessonNumber: 5,
      totalLessons: 6,
      chapterTitle: "Naming Things & Asking 'Is It There?'",
      prevLesson: {
        title: "Demonstrating: This and That (Masculine)",
        url: "/02-existence-identification/masculine-demonstratives"
      },
      nextLesson: {
        title: "Vocabulary: Workplace Items",
        url: "/02-existence-identification/workplace-vocabulary"
      }
    },
    "/02-existence-identification/workplace-vocabulary": {
      chapterNumber: 2,
      lessonNumber: 6,
      totalLessons: 6,
      chapterTitle: "Naming Things & Asking 'Is It There?'",
      prevLesson: {
        title: "Demonstrating: This and That (Feminine)",
        url: "/02-existence-identification/feminine-demonstratives"
      },
      nextLesson: {
        title: "Basic Spatial Concepts",
        url: "/03-location/spatial-concepts"
      }
    },
    
    // Chapter 3: Where Is It? Describing Location - Main Chapter Page
    "/03-location": {
      chapterNumber: 3,
      lessonNumber: 0,
      totalLessons: 7,
      chapterTitle: "Where Is It? Describing Location",
      prevLesson: {
        title: "Vocabulary: Workplace Items",
        url: "/02-existence-identification/workplace-vocabulary"
      },
      nextLesson: {
        title: "Basic Spatial Concepts",
        url: "/03-location/spatial-concepts"
      }
    },
    
    // Chapter 3: Where Is It? Describing Location - Individual Lessons
    "/03-location/spatial-concepts": {
      chapterNumber: 3,
      lessonNumber: 1,
      totalLessons: 7,
      chapterTitle: "Where Is It? Describing Location",
      prevLesson: {
        title: "Vocabulary: Workplace Items",
        url: "/02-existence-identification/workplace-vocabulary"
      },
      nextLesson: {
        title: "Location: Where? (kutra)",
        url: "/03-location/where"
      }
    },
    "/03-location/where": {
      chapterNumber: 3,
      lessonNumber: 2,
      totalLessons: 7,
      chapterTitle: "Where Is It? Describing Location",
      prevLesson: {
        title: "Basic Spatial Concepts",
        url: "/03-location/spatial-concepts"
      },
      nextLesson: {
        title: "Location: Here and There (atra and tatra)",
        url: "/03-location/here-there"
      }
    },
    "/03-location/here-there": {
      chapterNumber: 3,
      lessonNumber: 3,
      totalLessons: 7,
      chapterTitle: "Where Is It? Describing Location",
      prevLesson: {
        title: "Location: Where? (kutra)",
        url: "/03-location/where"
      },
      nextLesson: {
        title: "Location: Everywhere and Elsewhere",
        url: "/03-location/everywhere-elsewhere"
      }
    },
    "/03-location/everywhere-elsewhere": {
      chapterNumber: 3,
      lessonNumber: 4,
      totalLessons: 7,
      chapterTitle: "Where Is It? Describing Location",
      prevLesson: {
        title: "Location: Here and There (atra and tatra)",
        url: "/03-location/here-there"
      },
      nextLesson: {
        title: "Location: Front, Back, Left, Right",
        url: "/03-location/directions"
      }
    },
    "/03-location/directions": {
      chapterNumber: 3,
      lessonNumber: 5,
      totalLessons: 7,
      chapterTitle: "Where Is It? Describing Location",
      prevLesson: {
        title: "Location: Everywhere and Elsewhere",
        url: "/03-location/everywhere-elsewhere"
      },
      nextLesson: {
        title: "Location: Inside and Outside",
        url: "/03-location/inside-outside"
      }
    },
    "/03-location/inside-outside": {
      chapterNumber: 3,
      lessonNumber: 6,
      totalLessons: 7,
      chapterTitle: "Where Is It? Describing Location",
      prevLesson: {
        title: "Location: Front, Back, Left, Right",
        url: "/03-location/directions"
      },
      nextLesson: {
        title: "Location: From Here/There/Where",
        url: "/03-location/from-where"
      }
    },
    "/03-location/from-where": {
      chapterNumber: 3,
      lessonNumber: 7,
      totalLessons: 7,
      chapterTitle: "Where Is It? Describing Location",
      prevLesson: {
        title: "Location: Inside and Outside",
        url: "/03-location/inside-outside"
      },
      nextLesson: {
        title: "Simple Actions (Present Tense)",
        url: "/04-actions/simple-actions"
      }
    },
    
    // Chapter 4: Action! What People Are Doing - Main Chapter Page
    "/04-actions": {
      chapterNumber: 4,
      lessonNumber: 0,
      totalLessons: 6,
      chapterTitle: "Action! What People Are Doing",
      prevLesson: {
        title: "Location: From Here/There/Where",
        url: "/03-location/from-where"
      },
      nextLesson: {
        title: "Simple Actions (Present Tense)",
        url: "/04-actions/simple-actions"
      }
    },
    
    // Chapter 4: Action! What People Are Doing - Individual Lessons
    "/04-actions/simple-actions": {
      chapterNumber: 4,
      lessonNumber: 1,
      totalLessons: 6,
      chapterTitle: "Action! What People Are Doing",
      prevLesson: {
        title: "Location: From Here/There/Where",
        url: "/03-location/from-where"
      },
      nextLesson: {
        title: "Action! Simple Verbs (gacchati, likhati)",
        url: "/04-actions/simple-verbs"
      }
    },
    "/04-actions/simple-verbs": {
      chapterNumber: 4,
      lessonNumber: 2,
      totalLessons: 6,
      chapterTitle: "Action! What People Are Doing",
      prevLesson: {
        title: "Simple Actions (Present Tense)",
        url: "/04-actions/simple-actions"
      },
      nextLesson: {
        title: "Using I with Action Words (Ahaṃ gacchāmi)",
        url: "/04-actions/i-actions"
      }
    },
    "/04-actions/i-actions": {
      chapterNumber: 4,
      lessonNumber: 3,
      totalLessons: 6,
      chapterTitle: "Action! What People Are Doing",
      prevLesson: {
        title: "Action! Simple Verbs (gacchati, likhati)",
        url: "/04-actions/simple-verbs"
      },
      nextLesson: {
        title: "Using You with Action Words (Tvaṃ gacchasi)",
        url: "/04-actions/you-actions"
      }
    },
    "/04-actions/you-actions": {
      chapterNumber: 4,
      lessonNumber: 4,
      totalLessons: 6,
      chapterTitle: "Action! What People Are Doing",
      prevLesson: {
        title: "Using I with Action Words (Ahaṃ gacchāmi)",
        url: "/04-actions/i-actions"
      },
      nextLesson: {
        title: "Requests and Simple Commands",
        url: "/04-actions/requests-commands"
      }
    },
    "/04-actions/requests-commands": {
      chapterNumber: 4,
      lessonNumber: 5,
      totalLessons: 6,
      chapterTitle: "Action! What People Are Doing",
      prevLesson: {
        title: "Using You with Action Words (Tvaṃ gacchasi)",
        url: "/04-actions/you-actions"
      },
      nextLesson: {
        title: "Necessity: Needs and Sufficiency",
        url: "/04-actions/necessity"
      }
    },
    "/04-actions/necessity": {
      chapterNumber: 4,
      lessonNumber: 6,
      totalLessons: 6,
      chapterTitle: "Action! What People Are Doing",
      prevLesson: {
        title: "Requests and Simple Commands",
        url: "/04-actions/requests-commands"
      },
      nextLesson: {
        title: "Dealing with Many (Plural Forms)",
        url: "/05-plurals/plural-concepts"
      }
    },
    
    // Chapter 5: Groups and Plurals - Main Chapter Page
    "/05-plurals": {
      chapterNumber: 5,
      lessonNumber: 0,
      totalLessons: 8,
      chapterTitle: "Groups and Plurals",
      prevLesson: {
        title: "Necessity: Needs and Sufficiency",
        url: "/04-actions/necessity"
      },
      nextLesson: {
        title: "Dealing with Many (Plural Forms)",
        url: "/05-plurals/plural-concepts"
      }
    },
    
    // Chapter 5: Groups and Plurals - Individual Lessons
    "/05-plurals/plural-concepts": {
      chapterNumber: 5,
      lessonNumber: 1,
      totalLessons: 8,
      chapterTitle: "Groups and Plurals",
      prevLesson: {
        title: "Necessity: Needs and Sufficiency",
        url: "/04-actions/necessity"
      },
      nextLesson: {
        title: "Singular and Plural Concepts",
        url: "/05-plurals/singular-plural"
      }
    },
    "/05-plurals/singular-plural": {
      chapterNumber: 5,
      lessonNumber: 2,
      totalLessons: 8,
      chapterTitle: "Groups and Plurals",
      prevLesson: {
        title: "Dealing with Many (Plural Forms)",
        url: "/05-plurals/plural-concepts"
      },
      nextLesson: {
        title: "Plurals: We and Y'all",
        url: "/05-plurals/we-you-plural"
      }
    },
    "/05-plurals/we-you-plural": {
      chapterNumber: 5,
      lessonNumber: 3,
      totalLessons: 8,
      chapterTitle: "Groups and Plurals",
      prevLesson: {
        title: "Singular and Plural Concepts",
        url: "/05-plurals/singular-plural"
      },
      nextLesson: {
        title: "Plurals: They/Those (Masculine)",
        url: "/05-plurals/masculine-they"
      }
    },
    "/05-plurals/masculine-they": {
      chapterNumber: 5,
      lessonNumber: 4,
      totalLessons: 8,
      chapterTitle: "Groups and Plurals",
      prevLesson: {
        title: "Plurals: We and Y'all",
        url: "/05-plurals/we-you-plural"
      },
      nextLesson: {
        title: "Plurals: They/Those (Feminine)",
        url: "/05-plurals/feminine-they"
      }
    },
    "/05-plurals/feminine-they": {
      chapterNumber: 5,
      lessonNumber: 5,
      totalLessons: 8,
      chapterTitle: "Groups and Plurals",
      prevLesson: {
        title: "Plurals: They/Those (Masculine)",
        url: "/05-plurals/masculine-they"
      },
      nextLesson: {
        title: "Plurals: They/Those (Neuter)",
        url: "/05-plurals/neuter-they"
      }
    },
    "/05-plurals/neuter-they": {
      chapterNumber: 5,
      lessonNumber: 6,
      totalLessons: 8,
      chapterTitle: "Groups and Plurals",
      prevLesson: {
        title: "Plurals: They/Those (Feminine)",
        url: "/05-plurals/feminine-they"
      },
      nextLesson: {
        title: "Plurals: Action Words",
        url: "/05-plurals/plural-verbs"
      }
    },
    "/05-plurals/plural-verbs": {
      chapterNumber: 5,
      lessonNumber: 7,
      totalLessons: 8,
      chapterTitle: "Groups and Plurals",
      prevLesson: {
        title: "Plurals: They/Those (Neuter)",
        url: "/05-plurals/neuter-they"
      },
      nextLesson: {
        title: "Asking: How many?",
        url: "/05-plurals/how-many"
      }
    },
    "/05-plurals/how-many": {
      chapterNumber: 5,
      lessonNumber: 8,
      totalLessons: 8,
      chapterTitle: "Groups and Plurals",
      prevLesson: {
        title: "Plurals: Action Words",
        url: "/05-plurals/plural-verbs"
      },
      nextLesson: null
    }
  };

  const lessonData = lessons[currentPath];
  if (!lessonData) return null;

  // Add chapter navigation
  const currentChapter = chapters[lessonData.chapterNumber];
  const nextChapter = currentChapter.nextChapter ? chapters[currentChapter.nextChapter] : null;
  const prevChapter = currentChapter.prevChapter ? chapters[currentChapter.prevChapter] : null;

  return {
    ...lessonData,
    currentLesson: lessonData.chapterTitle,
    nextChapter: nextChapter ? { title: nextChapter.title, url: nextChapter.url } : null,
    prevChapter: prevChapter ? { title: prevChapter.title, url: prevChapter.url } : null
  };
};


