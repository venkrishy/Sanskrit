#!/usr/bin/env python3
"""
Configuration file for Sanskrit Curriculum Substack Publisher
"""

# Substack Configuration
SUBSTACK_CONFIG = {
    "publication_url": "https://venkrishy.substack.com/s/learn_sanskrit",
    "publication_name": "Learn Sanskrit",
    "description": "A comprehensive Sanskrit learning curriculum with structured lessons",
    "cookies_file": "cookies.json",  # Optional: for authenticated access
}

# Content Organization
CONTENT_CONFIG = {
    "curriculum_path": "curriculum_refactoring",
    "output_path": "substack_content",
    "schedule_file": "publishing_schedule.json",
    "report_file": "publishing_report.txt"
}

# Publishing Schedule (days between posts)
PUBLISHING_SCHEDULE = {
    "foundation": 1,      # Daily for foundation content
    "pronouns": 2,        # Every 2 days
    "time": 2,
    "verbs": 3,           # Every 3 days for complex content
    "grammar": 3,
    "numbers": 2,
    "vocabulary": 2,
    "directions": 3,
    "conversation": 2,
    "advanced": 4         # Weekly for advanced content
}

# Series Information
SERIES_MAPPING = {
    "foundation": {
        "title": "01 - Foundation",
        "description": "Basic Sanskrit concepts and introductions",
        "color": "#FF6B6B"
    },
    "pronouns": {
        "title": "02 - Pronouns", 
        "description": "Pronoun forms and usage in Sanskrit",
        "color": "#4ECDC4"
    },
    "time": {
        "title": "03 - Time & Dates",
        "description": "Time expressions and daily routines",
        "color": "#45B7D1"
    },
    "verbs": {
        "title": "04 - Verbs",
        "description": "Verb conjugations and present tense forms",
        "color": "#96CEB4"
    },
    "grammar": {
        "title": "05 - Grammar",
        "description": "Advanced grammatical concepts",
        "color": "#FFEAA7"
    },
    "numbers": {
        "title": "06 - Numbers",
        "description": "Number systems and counting",
        "color": "#DDA0DD"
    },
    "vocabulary": {
        "title": "07 - Vocabulary",
        "description": "Thematic vocabulary building",
        "color": "#98D8C8"
    },
    "directions": {
        "title": "08 - Directions",
        "description": "Spatial relationships and travel",
        "color": "#F7DC6F"
    },
    "conversation": {
        "title": "09 - Conversation",
        "description": "Dialogue patterns and communication",
        "color": "#BB8FCE"
    },
    "advanced": {
        "title": "10 - Advanced",
        "description": "Advanced exercises and mastery",
        "color": "#85C1E9"
    }
}

# Content Templates
CONTENT_TEMPLATES = {
    "lesson_header": """
    <div class="sanskrit-lesson-header">
        <h1>📚 {title}</h1>
        <div class="lesson-meta">
            <span class="series">Series: {series}</span>
            <span class="lesson-number">Lesson {number}</span>
        </div>
    </div>
    """,
    
    "lesson_footer": """
    <div class="sanskrit-lesson-footer">
        <div class="lesson-navigation">
            <p><strong>Series:</strong> {series}</p>
            <p><strong>Lesson:</strong> {number}</p>
            <p><em>Part of the comprehensive Sanskrit learning curriculum</em></p>
        </div>
        <div class="lesson-tags">
            <span class="tag">Sanskrit</span>
            <span class="tag">Learning</span>
            <span class="tag">{category}</span>
        </div>
    </div>
    """,
    
    "series_intro": """
    <div class="series-introduction">
        <h2>🎯 {series_title}</h2>
        <p>{series_description}</p>
        <div class="series-progress">
            <p>This series contains {lesson_count} lessons covering {topics}</p>
        </div>
    </div>
    """
}

# CSS Styling for Sanskrit Content
SANSKRIT_CSS = """
<style>
.sanskrit-lesson {
    font-family: 'Noto Sans Devanagari', 'Noto Serif Devanagari', sans-serif;
    line-height: 1.6;
    color: #333;
}

.sanskrit-lesson-header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 2rem;
    border-radius: 10px;
    margin-bottom: 2rem;
}

.lesson-meta {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
}

.series, .lesson-number {
    background: rgba(255,255,255,0.2);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
}

.sanskrit-content {
    font-size: 1.1rem;
    margin: 2rem 0;
}

.sanskrit-text {
    font-family: 'Noto Sans Devanagari', serif;
    font-size: 1.2rem;
    color: #2c3e50;
}

.lesson-footer {
    background: #f8f9fa;
    padding: 1.5rem;
    border-radius: 8px;
    margin-top: 2rem;
    border-left: 4px solid #667eea;
}

.lesson-tags {
    margin-top: 1rem;
}

.tag {
    background: #667eea;
    color: white;
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
    font-size: 0.8rem;
    margin-right: 0.5rem;
}

.series-introduction {
    background: #e8f4f8;
    padding: 2rem;
    border-radius: 10px;
    margin-bottom: 2rem;
    border: 2px solid #4ECDC4;
}
</style>
"""
