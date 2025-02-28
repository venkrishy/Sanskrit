export const lessonsData = {
  "1.1": {
    title: "Names and Basic Introductions",
    content: [
      {
        type: "text",
        content: "In Sanskrit, introductions follow a specific pattern. Let's learn how to introduce yourself and ask others' names."
      },
      {
        type: "vocabulary",
        words: [
          { sanskrit: "नमस्ते", transliteration: "namaste", english: "hello/greetings" },
          { sanskrit: "मम नाम", transliteration: "mama nāma", english: "my name is" },
          { sanskrit: "भवतः नाम किम्?", transliteration: "bhavataḥ nāma kim?", english: "what is your name? (to male)" },
          { sanskrit: "भवत्याः नाम किम्?", transliteration: "bhavatyāḥ nāma kim?", english: "what is your name? (to female)" }
        ]
      },
      {
        type: "example",
        sanskrit: "नमस्ते। मम नाम राजेश।",
        transliteration: "namaste. mama nāma rājeśa.",
        english: "Hello. My name is Rajesh."
      },
      {
        type: "practice",
        exercises: [
          {
            type: "translation",
            question: "Translate: My name is _____ (use your name)",
            answer: "मम नाम _____"
          },
          {
            type: "conversation",
            prompt: "Practice asking someone's name",
            pairs: [
              { 
                q: "भवतः नाम किम्?", 
                a: "मम नाम ____" 
              }
            ]
          }
        ]
      }
    ],
    quiz: {
      questions: [
        {
          type: "multiple-choice",
          question: "What is the Sanskrit phrase for 'my name is'?",
          options: ["मम नाम", "तव नाम", "भवतः नाम", "किम् नाम"],
          correct: 0
        },
        {
          type: "translation",
          question: "Translate 'namaste' to English",
          answer: "hello/greetings"
        }
      ]
    }
  },
  "1.2": {
    title: "Demonstrative Pronouns",
    content: [
      {
        type: "text",
        content: "Demonstrative pronouns in Sanskrit change based on gender and distance. Let's learn the basic forms."
      },
      {
        type: "vocabulary",
        words: [
          { sanskrit: "एषः", transliteration: "eṣaḥ", english: "this (masculine)" },
          { sanskrit: "एषा", transliteration: "eṣā", english: "this (feminine)" },
          { sanskrit: "एतत्", transliteration: "etat", english: "this (neuter)" },
          { sanskrit: "सः", transliteration: "saḥ", english: "that (masculine)" },
          { sanskrit: "सा", transliteration: "sā", english: "that (feminine)" },
          { sanskrit: "तत्", transliteration: "tat", english: "that (neuter)" }
        ]
      },
      {
        type: "example",
        sanskrit: "एषः बालकः। सा बालिका।",
        transliteration: "eṣaḥ bālakaḥ. sā bālikā.",
        english: "This is a boy. That is a girl."
      }
    ],
    quiz: {
      questions: [
        {
          type: "matching",
          pairs: [
            { sanskrit: "एषः", english: "this (masculine)" },
            { sanskrit: "सा", english: "that (feminine)" },
            { sanskrit: "एतत्", english: "this (neuter)" }
          ]
        }
      ]
    }
  }
} 