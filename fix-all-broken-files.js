const fs = require('fs');
const path = require('path');

// List of all broken files that need to be fixed
const brokenFiles = [
  'src/app/05-plurals/neuter-they/page.jsx',
  'src/app/05-plurals/feminine-they/page.jsx',
  'src/app/05-plurals/masculine-they/page.jsx',
  'src/app/05-plurals/we-you-plural/page.jsx',
  'src/app/05-plurals/plural-verbs/page.jsx',
  'src/app/04-actions/simple-verbs/page.jsx',
  'src/app/04-actions/necessity/page.jsx',
  'src/app/04-actions/you-actions/page.jsx',
  'src/app/04-actions/requests-commands/page.jsx',
  'src/app/04-actions/i-actions/page.jsx',
  'src/app/03-location/where/page.jsx',
  'src/app/03-location/everywhere-elsewhere/page.jsx',
  'src/app/03-location/inside-outside/page.jsx'
];

// Template for the missing content
const getMissingContent = (filePath) => {
  const fileName = path.basename(filePath, '.jsx');
  const chapterNumber = filePath.split('/')[2].split('-')[0];
  
  // Extract lesson number and title from file path
  let lessonNumber = '1';
  let title = 'Lesson Title';
  let subtitle = 'Learning essential concepts';
  
  if (fileName.includes('neuter-they')) {
    lessonNumber = '5';
    title = '5.5 - Neuter They';
    subtitle = 'Learning neuter plural pronouns';
  } else if (fileName.includes('feminine-they')) {
    lessonNumber = '4';
    title = '5.4 - Feminine They';
    subtitle = 'Learning feminine plural pronouns';
  } else if (fileName.includes('masculine-they')) {
    lessonNumber = '3';
    title = '5.3 - Masculine They';
    subtitle = 'Learning masculine plural pronouns';
  } else if (fileName.includes('we-you-plural')) {
    lessonNumber = '6';
    title = '5.6 - We and You (Plural)';
    subtitle = 'Learning first and second person plural pronouns';
  } else if (fileName.includes('plural-verbs')) {
    lessonNumber = '7';
    title = '5.7 - Plural Verbs';
    subtitle = 'Learning plural verb forms';
  } else if (fileName.includes('simple-verbs')) {
    lessonNumber = '2';
    title = '4.2 - Simple Verbs';
    subtitle = 'Learning basic verb forms and conjugations';
  } else if (fileName.includes('necessity')) {
    lessonNumber = '6';
    title = '4.6 - Necessity and Obligation';
    subtitle = 'Learning to express necessity and obligation';
  } else if (fileName.includes('you-actions')) {
    lessonNumber = '4';
    title = '4.4 - You Actions';
    subtitle = 'Learning second person actions and verbs';
  } else if (fileName.includes('requests-commands')) {
    lessonNumber = '5';
    title = '4.5 - Requests and Commands';
    subtitle = 'Learning imperative forms and commands';
  } else if (fileName.includes('i-actions')) {
    lessonNumber = '3';
    title = '4.3 - I Actions';
    subtitle = 'Learning first person actions and verbs';
  } else if (fileName.includes('where')) {
    lessonNumber = '2';
    title = '3.2 - Where?';
    subtitle = 'Learning to ask and answer \'Where?\' questions';
  } else if (fileName.includes('everywhere-elsewhere')) {
    lessonNumber = '4';
    title = '3.4 - Everywhere and Elsewhere';
    subtitle = 'Learning to express \'everywhere\' and \'elsewhere\'';
  } else if (fileName.includes('inside-outside')) {
    lessonNumber = '6';
    title = '3.6 - Inside and Outside';
    subtitle = 'Learning to express \'inside\' and \'outside\'';
  }

  return `
      {/* Vocabulary and Goal Card */}
      <ExplanationCard 
        title="Goal and Vocabulary"
        content="<p>Learn essential vocabulary and concepts in Sanskrit.</p>"
        examples={[
          { sanskrit: "example (उदाहरण)", english: "example" },
          { sanskrit: "practice (अभ्यास)", english: "practice" }
        ]}
        tips="This is a placeholder content that needs to be customized for each lesson."
      />
      
      {/* Example Dialogue Card */}
      <ExplanationCard 
        title="Example Dialogue"
        content="<p>Here's how you can use the vocabulary in conversation:</p>"
        examples={[
          { sanskrit: "Person A: example question", english: "Example question" },
          { sanskrit: "Person B: example answer", english: "Example answer" }
        ]}
        tips="This is placeholder dialogue content."
      />
      
      {/* Image Card for Practice */}
      <ImageCard 
        imageSrc="/images/placeholder.png"
        imageAlt="Placeholder image for practice"
        description="<p>Practice using the vocabulary with the image.</p><p><strong>Practice:</strong> Use the vocabulary in sentences.</p>"
        placeholder="Write practice sentences in transliteration..."
      />
      
      {/* Quiz Cards */}
      <QuizCard 
        question="What does 'example' mean?"
        options={["option1", "option2", "option3", "option4"]}
        correctAnswer="option1"
        explanation="This is a placeholder explanation."
      />
      
      <QuizCard 
        question="Complete: 'example sentence'"
        type="text-input"
        correctAnswer="answer"
        explanation="This is a placeholder explanation."
      />
    </div>
  )
}`;
};

// Fix each broken file
brokenFiles.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  
  try {
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Check if the file is broken (ends abruptly)
    if (content.trim().endsWith('      />') || content.trim().endsWith('      <TopicCard {...navigation} />')) {
      console.log(`Fixing ${filePath}...`);
      
      // Replace the old structure with new ChapterTitleCard structure
      const newContent = `import ChapterTitleCard from '@/components/cards/ChapterTitleCard'
import ExplanationCard from '@/components/cards/ExplanationCard'
import ImageCard from '@/components/cards/ImageCard'
import QuizCard from '@/components/cards/QuizCard'
import { getLessonNavigation } from '@/lib/navigation'

export default function ${path.basename(filePath, '.jsx').split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')}Page() {
  const navigation = getLessonNavigation('${filePath.replace('src/app/', '').replace('/page.jsx', '')}');
  
  return (
    <div className="space-y-4">
      {/* Chapter & Title Card */}
      <ChapterTitleCard 
        {...navigation}
        title="${getMissingContent(filePath).match(/title="([^"]+)"/)?.[1] || 'Lesson Title'}"
        subtitle="${getMissingContent(filePath).match(/subtitle="([^"]+)"/)?.[1] || 'Learning essential concepts'}"
        level="Beginner"
        progress={50}
      />${getMissingContent(filePath)}`;
      
      fs.writeFileSync(fullPath, newContent);
      console.log(`Fixed ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('Done fixing all broken files!');

