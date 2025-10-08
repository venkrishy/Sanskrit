const fs = require('fs');
const path = require('path');

// List of broken files that need to be fixed
const brokenFiles = [
  'src/app/03-location/where/page.jsx',
  'src/app/03-location/everywhere-elsewhere/page.jsx',
  'src/app/03-location/inside-outside/page.jsx',
  'src/app/04-actions/simple-verbs/page.jsx',
  'src/app/04-actions/necessity/page.jsx',
  'src/app/04-actions/you-actions/page.jsx',
  'src/app/04-actions/requests-commands/page.jsx',
  'src/app/04-actions/i-actions/page.jsx',
  'src/app/05-plurals/singular-plural/page.jsx',
  'src/app/05-plurals/plural-verbs/page.jsx',
  'src/app/05-plurals/how-many/page.jsx',
  'src/app/05-plurals/neuter-they/page.jsx',
  'src/app/05-plurals/feminine-they/page.jsx',
  'src/app/05-plurals/masculine-they/page.jsx',
  'src/app/05-plurals/we-you-plural/page.jsx'
];

// Template for the missing content
const missingContent = `
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

// Fix each broken file
brokenFiles.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  
  try {
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Check if the file is broken (ends abruptly)
    if (content.trim().endsWith('      />')) {
      console.log(`Fixing ${filePath}...`);
      
      // Remove the incomplete line and add the missing content
      content = content.replace(/\s*\/>\s*$/, '') + missingContent;
      
      fs.writeFileSync(fullPath, content);
      console.log(`Fixed ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('Done fixing broken files!');

