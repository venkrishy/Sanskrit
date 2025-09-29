import TitleCard from '@/components/cards/TitleCard'
import ExplanationCard from '@/components/cards/ExplanationCard'
import QuizCard from '@/components/cards/QuizCard'
import ImageCard from '@/components/cards/ImageCard'

export default function BasicConversationsPage() {
  return (
    <div className="space-y-6">
      {/* Title Card */}
      <TitleCard 
        title="Basic Conversations"
        subtitle="Learn essential Sanskrit greetings and conversation starters"
        level="Beginner"
        progress={25}
      />

      {/* Explanation Card */}
      <ExplanationCard 
        title="Sanskrit Greetings"
        content="<p>Sanskrit greetings are an important part of daily conversation. The most common greeting is <strong>नमस्ते (namaste)</strong>, which means 'I bow to you' and is used both as hello and goodbye.</p><p>Other common greetings include:</p><ul><li><strong>सुप्रभातम् (suprabhātam)</strong> - Good morning</li><li><strong>सुस्वागतम् (susvāgatam)</strong> - Welcome</li><li><strong>धन्यवादः (dhanyavādaḥ)</strong> - Thank you</li></ul>"
        examples={[
          { sanskrit: "नमस्ते", english: "Hello/Goodbye" },
          { sanskrit: "सुप्रभातम्", english: "Good morning" },
          { sanskrit: "धन्यवादः", english: "Thank you" }
        ]}
        tips="Remember that Sanskrit is a phonetic language, so pronunciation is very important. Practice speaking these greetings aloud."
      />

      {/* Quiz Card */}
      <QuizCard 
        question="What does 'नमस्ते' mean in English?"
        options={[
          "Good morning",
          "Hello/Goodbye", 
          "Thank you",
          "Welcome"
        ]}
        correctAnswer="Hello/Goodbye"
        explanation="नमस्ते (namaste) is the most common Sanskrit greeting, used both for hello and goodbye. It literally means 'I bow to you'."
      />

      {/* Image Card */}
      <ImageCard 
        imageSrc="/images/IMG_0418.jpeg"
        imageAlt="Sanskrit learning scene"
        description="<p>This image shows a traditional Sanskrit learning environment. Notice the ancient script and the scholarly atmosphere.</p><p>In traditional Sanskrit education, students would learn through memorization and recitation, often in beautiful settings like this one.</p>"
        placeholder="Write a sentence describing this learning scene in Sanskrit (transliteration)..."
        onSubmit={(sanskritText) => {
          console.log('User submitted:', sanskritText);
        }}
      />

      {/* Another Quiz Card */}
      <QuizCard 
        question="How do you say 'Good morning' in Sanskrit?"
        type="text-input"
        correctAnswer="सुप्रभातम्"
        explanation="सुप्रभातम् (suprabhātam) is the Sanskrit phrase for 'Good morning'. It's a compound word meaning 'auspicious dawn'."
      />

      {/* Another Explanation Card */}
      <ExplanationCard 
        title="Conversation Starters"
        content="<p>Once you've mastered basic greetings, you can start simple conversations. Here are some useful phrases:</p><ul><li><strong>कथं भवान्? (kathaṃ bhavān?)</strong> - How are you? (to a man)</li><li><strong>कथं भवती? (kathaṃ bhavatī?)</strong> - How are you? (to a woman)</li><li><strong>अहं कुशलः (ahaṃ kuśalaḥ)</strong> - I am well</li><li><strong>भवतः नाम किम्? (bhavataḥ nāma kim?)</strong> - What is your name?</li></ul>"
        examples={[
          { sanskrit: "कथं भवान्?", english: "How are you? (to man)" },
          { sanskrit: "अहं कुशलः", english: "I am well" },
          { sanskrit: "भवतः नाम किम्?", english: "What is your name?" }
        ]}
        tips="Notice how Sanskrit changes the form of words based on gender. 'भवान्' is used when speaking to a man, while 'भवती' is used when speaking to a woman."
      />
    </div>
  )
}