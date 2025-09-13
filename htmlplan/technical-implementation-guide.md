# Technical Implementation Guide for Sanskrit Learning App

## Project Structure

```
sanskrit-learning-app/
├── index.html
├── css/
│   ├── main.css
│   ├── modules.css
│   ├── exercises.css
│   └── responsive.css
├── js/
│   ├── main.js
│   ├── modules/
│   │   ├── foundation.js
│   │   ├── pronouns.js
│   │   ├── numbers.js
│   │   ├── vocabulary.js
│   │   ├── grammar.js
│   │   ├── time.js
│   │   ├── verbs.js
│   │   ├── directions.js
│   │   ├── conversation.js
│   │   └── advanced.js
│   ├── utils/
│   │   ├── audio.js
│   │   ├── progress.js
│   │   ├── validation.js
│   │   └── transliteration.js
│   └── data/
│       ├── curriculum.js
│       ├── exercises.js
│       └── assessments.js
├── assets/
│   ├── audio/
│   │   ├── numbers/
│   │   ├── vocabulary/
│   │   ├── conversations/
│   │   └── pronunciations/
│   ├── images/
│   │   ├── objects/
│   │   ├── scenes/
│   │   ├── exercises/
│   │   └── cultural/
│   └── fonts/
│       ├── devanagari.woff2
│       └── sanskrit.woff2
└── modules/
    ├── foundation/
    │   ├── index.html
    │   ├── exercises.html
    │   └── assessment.html
    ├── pronouns/
    │   ├── index.html
    │   ├── exercises.html
    │   └── assessment.html
    └── [other modules...]
```

## Core HTML Structure

### Main Index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sanskrit Learning App</title>
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/modules.css">
    <link rel="stylesheet" href="css/exercises.css">
    <link rel="stylesheet" href="css/responsive.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <header class="app-header">
        <nav class="main-nav">
            <div class="logo">
                <h1>संस्कृतम्</h1>
                <span class="subtitle">Sanskrit Learning</span>
            </div>
            <div class="nav-menu">
                <a href="#modules" class="nav-link">Modules</a>
                <a href="#progress" class="nav-link">Progress</a>
                <a href="#settings" class="nav-link">Settings</a>
            </div>
        </nav>
    </header>

    <main class="app-main">
        <section class="module-selector">
            <h2>Choose Your Learning Path</h2>
            <div class="module-grid">
                <div class="module-card" data-module="foundation">
                    <div class="module-icon">👋</div>
                    <h3>Foundation</h3>
                    <p>Basic Introductions & Greetings</p>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 0%"></div>
                    </div>
                </div>
                <!-- More module cards... -->
            </div>
        </section>

        <section class="module-content" id="moduleContent">
            <!-- Dynamic content loaded here -->
        </section>
    </main>

    <footer class="app-footer">
        <div class="footer-content">
            <p>&copy; 2024 Sanskrit Learning App. All rights reserved.</p>
        </div>
    </footer>

    <script src="js/main.js"></script>
    <script src="js/utils/audio.js"></script>
    <script src="js/utils/progress.js"></script>
    <script src="js/utils/validation.js"></script>
    <script src="js/utils/transliteration.js"></script>
</body>
</html>
```

## CSS Architecture

### Main.css (Base Styles)
```css
/* CSS Variables for consistent theming */
:root {
    --primary-color: #2c5530;
    --secondary-color: #4a7c59;
    --accent-color: #8b4513;
    --text-color: #2c2c2c;
    --background-color: #f8f9fa;
    --card-background: #ffffff;
    --border-color: #e0e0e0;
    --success-color: #28a745;
    --error-color: #dc3545;
    --warning-color: #ffc107;
    
    --font-family: 'Noto Sans Devanagari', sans-serif;
    --font-size-base: 16px;
    --font-size-large: 20px;
    --font-size-small: 14px;
    
    --border-radius: 8px;
    --box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    --transition: all 0.3s ease;
}

/* Base styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: var(--font-family);
    font-size: var(--font-size-base);
    line-height: 1.6;
    color: var(--text-color);
    background-color: var(--background-color);
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--primary-color);
}

.sanskrit-text {
    font-family: var(--font-family);
    font-size: 1.2em;
    line-height: 1.8;
}

.transliteration {
    font-style: italic;
    color: var(--secondary-color);
    font-size: 0.9em;
}

.translation {
    color: var(--text-color);
    font-size: 0.95em;
}

/* Layout */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.grid {
    display: grid;
    gap: 2rem;
}

.grid-2 { grid-template-columns: repeat(2, 1fr); }
.grid-3 { grid-template-columns: repeat(3, 1fr); }
.grid-4 { grid-template-columns: repeat(4, 1fr); }

/* Cards */
.card {
    background: var(--card-background);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    padding: 1.5rem;
    transition: var(--transition);
}

.card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.15);
}

/* Buttons */
.btn {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: var(--border-radius);
    font-size: var(--font-size-base);
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
}

.btn-primary {
    background-color: var(--primary-color);
    color: white;
}

.btn-primary:hover {
    background-color: var(--secondary-color);
}

.btn-secondary {
    background-color: var(--secondary-color);
    color: white;
}

.btn-outline {
    background-color: transparent;
    border: 2px solid var(--primary-color);
    color: var(--primary-color);
}

.btn-outline:hover {
    background-color: var(--primary-color);
    color: white;
}

/* Forms */
.form-group {
    margin-bottom: 1rem;
}

.form-label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: var(--text-color);
}

.form-input {
    width: 100%;
    padding: 0.75rem;
    border: 2px solid var(--border-color);
    border-radius: var(--border-radius);
    font-size: var(--font-size-base);
    transition: var(--transition);
}

.form-input:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(44, 85, 48, 0.1);
}

/* Progress indicators */
.progress-bar {
    width: 100%;
    height: 8px;
    background-color: var(--border-color);
    border-radius: 4px;
    overflow: hidden;
}

.progress-fill {
    height: 100%;
    background-color: var(--success-color);
    transition: width 0.3s ease;
}

/* Audio controls */
.audio-controls {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin: 1rem 0;
}

.audio-btn {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--primary-color);
    transition: var(--transition);
}

.audio-btn:hover {
    color: var(--secondary-color);
}

/* Responsive design */
@media (max-width: 768px) {
    .grid-2, .grid-3, .grid-4 {
        grid-template-columns: 1fr;
    }
    
    .container {
        padding: 0 15px;
    }
    
    .card {
        padding: 1rem;
    }
}
```

### Modules.css (Module-specific styles)
```css
/* Module selector */
.module-selector {
    padding: 2rem 0;
}

.module-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.module-card {
    background: var(--card-background);
    border-radius: var(--border-radius);
    padding: 2rem;
    text-align: center;
    cursor: pointer;
    transition: var(--transition);
    border: 2px solid transparent;
}

.module-card:hover {
    border-color: var(--primary-color);
    transform: translateY(-4px);
}

.module-card.active {
    border-color: var(--primary-color);
    background-color: rgba(44, 85, 48, 0.05);
}

.module-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.module-card h3 {
    color: var(--primary-color);
    margin-bottom: 0.5rem;
}

.module-card p {
    color: var(--text-color);
    margin-bottom: 1rem;
}

/* Module content */
.module-content {
    padding: 2rem 0;
    min-height: 60vh;
}

.module-header {
    text-align: center;
    margin-bottom: 3rem;
}

.module-title {
    font-size: 2.5rem;
    color: var(--primary-color);
    margin-bottom: 1rem;
}

.module-description {
    font-size: 1.1rem;
    color: var(--text-color);
    max-width: 600px;
    margin: 0 auto;
}

/* Exercise containers */
.exercise-container {
    background: var(--card-background);
    border-radius: var(--border-radius);
    padding: 2rem;
    margin-bottom: 2rem;
    box-shadow: var(--box-shadow);
}

.exercise-title {
    font-size: 1.5rem;
    color: var(--primary-color);
    margin-bottom: 1.5rem;
    border-bottom: 2px solid var(--border-color);
    padding-bottom: 0.5rem;
}

/* Interactive elements */
.interactive-exercise {
    margin: 2rem 0;
}

.drag-drop-area {
    min-height: 200px;
    border: 2px dashed var(--border-color);
    border-radius: var(--border-radius);
    padding: 2rem;
    text-align: center;
    transition: var(--transition);
}

.drag-drop-area.drag-over {
    border-color: var(--primary-color);
    background-color: rgba(44, 85, 48, 0.05);
}

.draggable-item {
    display: inline-block;
    padding: 0.5rem 1rem;
    background-color: var(--primary-color);
    color: white;
    border-radius: var(--border-radius);
    margin: 0.25rem;
    cursor: move;
    transition: var(--transition);
}

.draggable-item:hover {
    background-color: var(--secondary-color);
}

.drop-zone {
    min-height: 60px;
    border: 2px solid var(--border-color);
    border-radius: var(--border-radius);
    padding: 1rem;
    margin: 0.5rem 0;
    transition: var(--transition);
}

.drop-zone.drag-over {
    border-color: var(--primary-color);
    background-color: rgba(44, 85, 48, 0.05);
}

/* Flashcards */
.flashcard {
    width: 300px;
    height: 200px;
    perspective: 1000px;
    margin: 1rem;
}

.flashcard-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
}

.flashcard.flipped .flashcard-inner {
    transform: rotateY(180deg);
}

.flashcard-front, .flashcard-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
}

.flashcard-front {
    background-color: var(--primary-color);
    color: white;
}

.flashcard-back {
    background-color: var(--card-background);
    color: var(--text-color);
    transform: rotateY(180deg);
}

/* Matching games */
.matching-game {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin: 2rem 0;
}

.matching-column {
    background: var(--card-background);
    border-radius: var(--border-radius);
    padding: 1.5rem;
    box-shadow: var(--box-shadow);
}

.matching-item {
    padding: 1rem;
    margin: 0.5rem 0;
    background: var(--background-color);
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: var(--transition);
    border: 2px solid transparent;
}

.matching-item:hover {
    border-color: var(--primary-color);
}

.matching-item.selected {
    border-color: var(--primary-color);
    background-color: rgba(44, 85, 48, 0.1);
}

.matching-item.matched {
    border-color: var(--success-color);
    background-color: rgba(40, 167, 69, 0.1);
}

/* Progress tracking */
.progress-section {
    background: var(--card-background);
    border-radius: var(--border-radius);
    padding: 2rem;
    margin: 2rem 0;
    box-shadow: var(--box-shadow);
}

.progress-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin-top: 1rem;
}

.stat-card {
    text-align: center;
    padding: 1rem;
    background: var(--background-color);
    border-radius: var(--border-radius);
}

.stat-number {
    font-size: 2rem;
    font-weight: 700;
    color: var(--primary-color);
}

.stat-label {
    color: var(--text-color);
    font-size: 0.9rem;
}

/* Feedback system */
.feedback {
    padding: 1rem;
    border-radius: var(--border-radius);
    margin: 1rem 0;
    font-weight: 500;
}

.feedback.success {
    background-color: rgba(40, 167, 69, 0.1);
    color: var(--success-color);
    border: 1px solid var(--success-color);
}

.feedback.error {
    background-color: rgba(220, 53, 69, 0.1);
    color: var(--error-color);
    border: 1px solid var(--error-color);
}

.feedback.warning {
    background-color: rgba(255, 193, 7, 0.1);
    color: var(--warning-color);
    border: 1px solid var(--warning-color);
}

/* Assessment styles */
.assessment-container {
    background: var(--card-background);
    border-radius: var(--border-radius);
    padding: 2rem;
    margin: 2rem 0;
    box-shadow: var(--box-shadow);
}

.question {
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--border-color);
}

.question-text {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: var(--text-color);
}

.answer-options {
    display: grid;
    gap: 0.5rem;
}

.answer-option {
    padding: 1rem;
    border: 2px solid var(--border-color);
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: var(--transition);
    background: var(--background-color);
}

.answer-option:hover {
    border-color: var(--primary-color);
    background-color: rgba(44, 85, 48, 0.05);
}

.answer-option.selected {
    border-color: var(--primary-color);
    background-color: rgba(44, 85, 48, 0.1);
}

.answer-option.correct {
    border-color: var(--success-color);
    background-color: rgba(40, 167, 69, 0.1);
}

.answer-option.incorrect {
    border-color: var(--error-color);
    background-color: rgba(220, 53, 69, 0.1);
}
```

## JavaScript Architecture

### Main.js (Core Application Logic)
```javascript
class SanskritLearningApp {
    constructor() {
        this.currentModule = null;
        this.userProgress = this.loadProgress();
        this.audioManager = new AudioManager();
        this.progressTracker = new ProgressTracker();
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadModuleSelector();
        this.updateProgressDisplay();
    }

    setupEventListeners() {
        // Module selection
        document.addEventListener('click', (e) => {
            if (e.target.closest('.module-card')) {
                const moduleCard = e.target.closest('.module-card');
                const moduleName = moduleCard.dataset.module;
                this.loadModule(moduleName);
            }
        });

        // Audio controls
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('audio-btn')) {
                const sanskritText = e.target.dataset.sanskrit;
                this.audioManager.playSanskrit(sanskritText);
            }
        });

        // Exercise interactions
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('exercise-btn')) {
                this.handleExerciseInteraction(e.target);
            }
        });
    }

    loadModule(moduleName) {
        this.currentModule = moduleName;
        this.showModuleContent(moduleName);
        this.updateActiveModule(moduleName);
    }

    showModuleContent(moduleName) {
        const moduleContent = document.getElementById('moduleContent');
        const moduleData = this.getModuleData(moduleName);
        
        moduleContent.innerHTML = this.generateModuleHTML(moduleData);
        this.initializeModuleInteractions(moduleName);
    }

    getModuleData(moduleName) {
        // Load module-specific data
        const moduleData = {
            foundation: {
                title: 'Foundation - Basic Introductions & Greetings',
                description: 'Learn basic Sanskrit introductions and greetings',
                exercises: this.getFoundationExercises(),
                assessments: this.getFoundationAssessments()
            },
            pronouns: {
                title: 'Pronouns & Demonstratives',
                description: 'Master Sanskrit pronouns and demonstratives',
                exercises: this.getPronounExercises(),
                assessments: this.getPronounAssessments()
            },
            // ... other modules
        };

        return moduleData[moduleName];
    }

    generateModuleHTML(moduleData) {
        return `
            <div class="module-header">
                <h1 class="module-title">${moduleData.title}</h1>
                <p class="module-description">${moduleData.description}</p>
            </div>
            
            <div class="module-content">
                ${this.generateExercisesHTML(moduleData.exercises)}
                ${this.generateAssessmentsHTML(moduleData.assessments)}
            </div>
        `;
    }

    generateExercisesHTML(exercises) {
        return exercises.map(exercise => `
            <div class="exercise-container">
                <h3 class="exercise-title">${exercise.title}</h3>
                <div class="exercise-content">
                    ${this.generateExerciseHTML(exercise)}
                </div>
            </div>
        `).join('');
    }

    generateExerciseHTML(exercise) {
        switch (exercise.type) {
            case 'flashcard':
                return this.generateFlashcardHTML(exercise);
            case 'matching':
                return this.generateMatchingHTML(exercise);
            case 'fill-in-blank':
                return this.generateFillInBlankHTML(exercise);
            case 'drag-drop':
                return this.generateDragDropHTML(exercise);
            default:
                return '<p>Exercise type not implemented</p>';
        }
    }

    generateFlashcardHTML(exercise) {
        return `
            <div class="flashcard-container">
                ${exercise.items.map(item => `
                    <div class="flashcard" data-sanskrit="${item.sanskrit}">
                        <div class="flashcard-inner">
                            <div class="flashcard-front">
                                <div class="sanskrit-text">${item.sanskrit}</div>
                                <div class="audio-controls">
                                    <button class="audio-btn" data-sanskrit="${item.sanskrit}">🔊</button>
                                </div>
                            </div>
                            <div class="flashcard-back">
                                <div class="transliteration">${item.transliteration}</div>
                                <div class="translation">${item.translation}</div>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    generateMatchingHTML(exercise) {
        return `
            <div class="matching-game">
                <div class="matching-column">
                    <h4>${exercise.leftColumn.title}</h4>
                    ${exercise.leftColumn.items.map(item => `
                        <div class="matching-item" data-id="${item.id}">
                            ${item.content}
                        </div>
                    `).join('')}
                </div>
                <div class="matching-column">
                    <h4>${exercise.rightColumn.title}</h4>
                    ${exercise.rightColumn.items.map(item => `
                        <div class="matching-item" data-id="${item.id}">
                            ${item.content}
                        </div>
                    `).join('')}
                </div>
            </div>
            <button class="btn btn-primary" onclick="checkMatching()">Check Answers</button>
        `;
    }

    generateFillInBlankHTML(exercise) {
        return `
            <div class="fill-in-blank-exercise">
                <div class="exercise-text">
                    ${exercise.text.replace(/\{blank\}/g, '<input type="text" class="blank-input" data-answer="">')}
                </div>
                <button class="btn btn-primary" onclick="checkFillInBlank()">Check Answers</button>
            </div>
        `;
    }

    generateDragDropHTML(exercise) {
        return `
            <div class="drag-drop-exercise">
                <div class="draggable-items">
                    ${exercise.draggableItems.map(item => `
                        <div class="draggable-item" draggable="true" data-id="${item.id}">
                            ${item.content}
                        </div>
                    `).join('')}
                </div>
                <div class="drop-zones">
                    ${exercise.dropZones.map(zone => `
                        <div class="drop-zone" data-zone-id="${zone.id}">
                            <h4>${zone.title}</h4>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    initializeModuleInteractions(moduleName) {
        // Initialize module-specific interactions
        switch (moduleName) {
            case 'foundation':
                this.initializeFoundationInteractions();
                break;
            case 'pronouns':
                this.initializePronounInteractions();
                break;
            // ... other modules
        }
    }

    initializeFoundationInteractions() {
        // Foundation-specific interactions
        const flashcards = document.querySelectorAll('.flashcard');
        flashcards.forEach(card => {
            card.addEventListener('click', () => {
                card.classList.toggle('flipped');
            });
        });
    }

    initializePronounInteractions() {
        // Pronoun-specific interactions
        const matchingItems = document.querySelectorAll('.matching-item');
        matchingItems.forEach(item => {
            item.addEventListener('click', () => {
                this.handleMatchingSelection(item);
            });
        });
    }

    handleMatchingSelection(item) {
        item.classList.toggle('selected');
        
        const selectedItems = document.querySelectorAll('.matching-item.selected');
        if (selectedItems.length === 2) {
            this.checkMatching(selectedItems);
        }
    }

    checkMatching(selectedItems) {
        const [item1, item2] = selectedItems;
        const isMatch = this.isMatchingPair(item1, item2);
        
        if (isMatch) {
            item1.classList.add('matched');
            item2.classList.add('matched');
            this.showFeedback('success', 'Correct match!');
        } else {
            this.showFeedback('error', 'Try again!');
        }
        
        // Clear selection after a delay
        setTimeout(() => {
            selectedItems.forEach(item => {
                item.classList.remove('selected');
            });
        }, 1000);
    }

    isMatchingPair(item1, item2) {
        // Check if two items form a correct matching pair
        const pair1 = item1.dataset.pair;
        const pair2 = item2.dataset.pair;
        return pair1 === pair2;
    }

    showFeedback(type, message) {
        const feedback = document.createElement('div');
        feedback.className = `feedback ${type}`;
        feedback.textContent = message;
        
        const container = document.querySelector('.module-content');
        container.appendChild(feedback);
        
        setTimeout(() => {
            feedback.remove();
        }, 3000);
    }

    updateProgress(moduleName, exerciseId, score) {
        if (!this.userProgress[moduleName]) {
            this.userProgress[moduleName] = {};
        }
        
        this.userProgress[moduleName][exerciseId] = {
            score: score,
            completed: true,
            timestamp: new Date().toISOString()
        };
        
        this.saveProgress();
        this.updateProgressDisplay();
    }

    loadProgress() {
        const saved = localStorage.getItem('sanskritLearningProgress');
        return saved ? JSON.parse(saved) : {};
    }

    saveProgress() {
        localStorage.setItem('sanskritLearningProgress', JSON.stringify(this.userProgress));
    }

    updateProgressDisplay() {
        const moduleCards = document.querySelectorAll('.module-card');
        moduleCards.forEach(card => {
            const moduleName = card.dataset.module;
            const progress = this.calculateModuleProgress(moduleName);
            const progressFill = card.querySelector('.progress-fill');
            progressFill.style.width = `${progress}%`;
        });
    }

    calculateModuleProgress(moduleName) {
        const moduleProgress = this.userProgress[moduleName];
        if (!moduleProgress) return 0;
        
        const exercises = Object.keys(moduleProgress);
        const completed = exercises.filter(exercise => moduleProgress[exercise].completed);
        
        return (completed.length / exercises.length) * 100;
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.sanskritApp = new SanskritLearningApp();
});
```

### Audio Manager (audio.js)
```javascript
class AudioManager {
    constructor() {
        this.audioCache = new Map();
        this.isPlaying = false;
    }

    async playSanskrit(sanskritText) {
        if (this.isPlaying) {
            this.stopCurrentAudio();
        }

        try {
            const audioUrl = await this.getAudioUrl(sanskritText);
            const audio = new Audio(audioUrl);
            
            audio.onplay = () => {
                this.isPlaying = true;
            };
            
            audio.onended = () => {
                this.isPlaying = false;
            };
            
            audio.onerror = () => {
                this.isPlaying = false;
                console.error('Audio playback failed');
            };
            
            await audio.play();
        } catch (error) {
            console.error('Error playing audio:', error);
            this.isPlaying = false;
        }
    }

    async getAudioUrl(sanskritText) {
        // Check cache first
        if (this.audioCache.has(sanskritText)) {
            return this.audioCache.get(sanskritText);
        }

        // Generate audio URL (using text-to-speech service)
        const audioUrl = await this.generateAudioUrl(sanskritText);
        this.audioCache.set(sanskritText, audioUrl);
        
        return audioUrl;
    }

    async generateAudioUrl(sanskritText) {
        // This would integrate with a text-to-speech service
        // For now, return a placeholder
        return `audio/generated/${encodeURIComponent(sanskritText)}.mp3`;
    }

    stopCurrentAudio() {
        // Stop any currently playing audio
        const audioElements = document.querySelectorAll('audio');
        audioElements.forEach(audio => {
            audio.pause();
            audio.currentTime = 0;
        });
        this.isPlaying = false;
    }
}
```

### Progress Tracker (progress.js)
```javascript
class ProgressTracker {
    constructor() {
        this.progressData = this.loadProgressData();
    }

    recordExerciseCompletion(moduleName, exerciseId, score, timeSpent) {
        if (!this.progressData[moduleName]) {
            this.progressData[moduleName] = {};
        }

        this.progressData[moduleName][exerciseId] = {
            score: score,
            timeSpent: timeSpent,
            completed: true,
            timestamp: new Date().toISOString()
        };

        this.saveProgressData();
        this.updateProgressDisplay();
    }

    getModuleProgress(moduleName) {
        const moduleData = this.progressData[moduleName];
        if (!moduleData) return 0;

        const exercises = Object.keys(moduleData);
        const completed = exercises.filter(exercise => moduleData[exercise].completed);
        
        return {
            completed: completed.length,
            total: exercises.length,
            percentage: (completed.length / exercises.length) * 100
        };
    }

    getOverallProgress() {
        const modules = Object.keys(this.progressData);
        let totalExercises = 0;
        let completedExercises = 0;

        modules.forEach(module => {
            const moduleProgress = this.getModuleProgress(module);
            totalExercises += moduleProgress.total;
            completedExercises += moduleProgress.completed;
        });

        return {
            completed: completedExercises,
            total: totalExercises,
            percentage: totalExercises > 0 ? (completedExercises / totalExercises) * 100 : 0
        };
    }

    generateProgressReport() {
        const overallProgress = this.getOverallProgress();
        const moduleProgress = {};

        Object.keys(this.progressData).forEach(module => {
            moduleProgress[module] = this.getModuleProgress(module);
        });

        return {
            overall: overallProgress,
            modules: moduleProgress,
            generatedAt: new Date().toISOString()
        };
    }

    loadProgressData() {
        const saved = localStorage.getItem('sanskritLearningProgress');
        return saved ? JSON.parse(saved) : {};
    }

    saveProgressData() {
        localStorage.setItem('sanskritLearningProgress', JSON.stringify(this.progressData));
    }

    updateProgressDisplay() {
        // Update progress bars and statistics
        const progressBars = document.querySelectorAll('.progress-fill');
        progressBars.forEach(bar => {
            const moduleName = bar.closest('.module-card').dataset.module;
            const progress = this.getModuleProgress(moduleName);
            bar.style.width = `${progress.percentage}%`;
        });
    }
}
```

## Data Structure

### Curriculum Data (curriculum.js)
```javascript
const curriculumData = {
    foundation: {
        title: 'Foundation - Basic Introductions & Greetings',
        description: 'Learn basic Sanskrit introductions and greetings',
        difficulty: 'beginner',
        estimatedTime: '30 minutes',
        prerequisites: [],
        exercises: [
            {
                id: 'intro-1',
                type: 'flashcard',
                title: 'Basic Greetings',
                items: [
                    {
                        sanskrit: 'नमस्ते',
                        transliteration: 'namaste',
                        translation: 'Hello/Greetings'
                    },
                    {
                        sanskrit: 'स्वागतम्',
                        transliteration: 'svāgatam',
                        translation: 'Welcome'
                    }
                ]
            },
            {
                id: 'intro-2',
                type: 'fill-in-blank',
                title: 'Introduction Practice',
                text: 'मम नाम {blank}। भवतः नाम किम्?',
                answers: ['सुरेशः', 'रामः', 'कृष्णः']
            }
        ],
        assessments: [
            {
                id: 'intro-assessment',
                type: 'quiz',
                title: 'Introduction Assessment',
                questions: [
                    {
                        question: 'How do you say "Hello" in Sanskrit?',
                        options: ['नमस्ते', 'स्वागतम्', 'धन्यवादः'],
                        correct: 0
                    }
                ]
            }
        ]
    },
    pronouns: {
        title: 'Pronouns & Demonstratives',
        description: 'Master Sanskrit pronouns and demonstratives',
        difficulty: 'beginner',
        estimatedTime: '45 minutes',
        prerequisites: ['foundation'],
        exercises: [
            {
                id: 'pronoun-1',
                type: 'matching',
                title: 'Pronoun Matching',
                leftColumn: {
                    title: 'Objects',
                    items: [
                        { id: 'boy', content: 'बालकः (boy)' },
                        { id: 'girl', content: 'बालिका (girl)' },
                        { id: 'book', content: 'पुस्तकम् (book)' }
                    ]
                },
                rightColumn: {
                    title: 'Pronouns',
                    items: [
                        { id: 'boy', content: 'एषः (this)' },
                        { id: 'girl', content: 'एषा (this)' },
                        { id: 'book', content: 'एतत् (this)' }
                    ]
                }
            }
        ]
    }
    // ... other modules
};
```

## Deployment Considerations

### Performance Optimization
1. **Lazy Loading**: Load module content only when needed
2. **Audio Caching**: Cache audio files for better performance
3. **Image Optimization**: Use WebP format for images
4. **Code Splitting**: Split JavaScript into smaller chunks

### Accessibility
1. **Screen Reader Support**: Proper ARIA labels and roles
2. **Keyboard Navigation**: Full keyboard accessibility
3. **High Contrast**: Support for high contrast mode
4. **Font Scaling**: Respect user font size preferences

### Browser Compatibility
1. **Modern Browsers**: Chrome, Firefox, Safari, Edge
2. **Mobile Support**: Responsive design for mobile devices
3. **Progressive Enhancement**: Works without JavaScript for basic functionality

### Offline Support
1. **Service Worker**: Cache resources for offline use
2. **Local Storage**: Save progress locally
3. **Offline Indicators**: Show when offline/online

This technical implementation guide provides a comprehensive foundation for building the Sanskrit learning app with modern web technologies and best practices.
