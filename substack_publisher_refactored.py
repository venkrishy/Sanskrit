#!/usr/bin/env python3
"""
Sanskrit Curriculum Substack Publisher - Refactored Content
Automates publishing of Sanskrit curriculum content from curriculum_refactoring folder to Substack
"""

import os
import json
import time
import re
from pathlib import Path
from datetime import datetime, timedelta
from typing import List, Dict, Optional
import markdown
from substack_api import Newsletter, Post, SubstackAuth
from substack_config import SUBSTACK_CONFIG, CONTENT_CONFIG

class SanskritSubstackPublisherRefactored:
    def __init__(self, substack_url: str = None, cookies_path: Optional[str] = None):
        """
        Initialize the publisher with Substack credentials
        
        Args:
            substack_url: Your Substack publication URL
            cookies_path: Path to cookies.json file for authentication (optional)
        """
        self.substack_url = substack_url or SUBSTACK_CONFIG["publication_url"]
        self.auth = SubstackAuth(cookies_path=cookies_path) if cookies_path else None
        self.newsletter = Newsletter(self.substack_url, auth=self.auth)
        
        # Content structure mapping based on lesson numbers
        self.lesson_categories = {
            "01": "Foundation",
            "04": "Grammar & Vocabulary", 
            "05": "Time & Location",
            "06": "Greetings",
            "07": "Accusative Case",
            "08": "Family & Relationships",
            "09": "Past Tense",
            "10": "Adverbs & Questions",
            "11": "Past Tense Forms",
            "12": "Future Tense",
            "13": "Vocative Forms",
            "14": "Conditional",
            "15": "Conjunctions",
            "16": "Time Expressions",
            "17": "When/Then",
            "18": "Numbers",
            "19": "Instrumental Case",
            "20": "Ability & Time",
            "21": "Movement",
            "22": "Quantity",
            "23": "Comparison",
            "24": "Past Particles",
            "25": "Perfect Tense",
            "26": "Kinship Terms",
            "27": "Taste & Senses",
            "28": "Description",
            "29": "Opposites",
            "30": "Comparison",
            "31": "Purpose",
            "32": "Conjunctions",
            "33": "Conditional",
            "34": "Body Parts",
            "35": "Pronouns",
            "36": "Conjunctions"
        }
        
        # Publishing schedule (days between posts)
        self.publishing_schedule = {
            "Foundation": 1,           # Daily for foundation
            "Grammar & Vocabulary": 2, # Every 2 days
            "Time & Location": 2,
            "Greetings": 1,
            "Accusative Case": 2,
            "Family & Relationships": 2,
            "Past Tense": 3,           # Every 3 days for complex content
            "Adverbs & Questions": 2,
            "Past Tense Forms": 3,
            "Future Tense": 3,
            "Vocative Forms": 2,
            "Conditional": 3,
            "Conjunctions": 2,
            "Time Expressions": 2,
            "When/Then": 2,
            "Numbers": 2,
            "Instrumental Case": 3,
            "Ability & Time": 2,
            "Movement": 2,
            "Quantity": 2,
            "Comparison": 2,
            "Past Particles": 3,
            "Perfect Tense": 3,
            "Kinship Terms": 2,
            "Taste & Senses": 2,
            "Description": 2,
            "Opposites": 2,
            "Comparison": 2,
            "Purpose": 3,
            "Conjunctions": 2,
            "Conditional": 3,
            "Body Parts": 2,
            "Pronouns": 2,
            "Conjunctions": 2
        }

    def extract_lesson_info(self, filename: str) -> Dict[str, str]:
        """Extract lesson information from filename"""
        # Extract lesson number (e.g., "01-3" from "01-3- Objects for the practicing yogi...")
        match = re.match(r'^(\d+)-', filename)
        lesson_number = match.group(1) if match else "00"
        
        # Get category from lesson number
        category = self.lesson_categories.get(lesson_number, "Advanced")
        
        # Extract title from filename (remove numbering and file extension)
        title_match = re.match(r'^\d+-\d*-\s*(.+?)(?:\s*-\s*[^-]+)*\.md$', filename)
        if title_match:
            title = title_match.group(1).strip()
        else:
            # Fallback: use filename without extension
            title = Path(filename).stem
        
        return {
            'lesson_number': lesson_number,
            'category': category,
            'title': title,
            'filename': filename
        }

    def read_markdown_file(self, file_path: str) -> Dict[str, str]:
        """Read and parse markdown file with YAML frontmatter"""
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Parse YAML frontmatter if present
            frontmatter = {}
            if content.startswith('---'):
                parts = content.split('---', 2)
                if len(parts) >= 3:
                    yaml_content = parts[1].strip()
                    content = parts[2].strip()
                    
                    # Simple YAML parsing for basic fields
                    for line in yaml_content.split('\n'):
                        if ':' in line:
                            key, value = line.split(':', 1)
                            frontmatter[key.strip()] = value.strip()
            
            # Extract title from frontmatter or first heading
            title = frontmatter.get('topic', '')
            if not title:
                lines = content.split('\n')
                for line in lines:
                    if line.startswith('# '):
                        title = line.replace('# ', '').strip()
                        break
            
            # Convert markdown to HTML
            html_content = markdown.markdown(content, extensions=['tables', 'fenced_code'])
            
            return {
                'title': title,
                'content': html_content,
                'raw_content': content,
                'frontmatter': frontmatter
            }
        except Exception as e:
            print(f"Error reading {file_path}: {e}")
            return None

    def prepare_substack_post(self, file_data: Dict, lesson_info: Dict, lesson_counter: int) -> Dict:
        """Prepare content for Substack publishing"""
        
        # Create engaging title
        title = f"Lesson {lesson_counter}: {lesson_info['title']}"
        
        # Add series information
        series_title = f"{lesson_info['lesson_number']} - {lesson_info['category']}"
        
        # Create post content with proper formatting
        post_content = f"""
        <div class="sanskrit-lesson">
            <h2>📚 {series_title}</h2>
            <div class="lesson-content">
                {file_data['content']}
            </div>
            
            <div class="lesson-footer">
                <p><strong>Series:</strong> {series_title}</p>
                <p><strong>Lesson:</strong> {lesson_counter}</p>
                <p><strong>Topic:</strong> {lesson_info['title']}</p>
                <p><em>Part of the comprehensive Sanskrit learning curriculum</em></p>
            </div>
        </div>
        """
        
        return {
            'title': title,
            'content': post_content,
            'series': series_title,
            'category': lesson_info['category'],
            'lesson_number': lesson_counter,
            'lesson_info': lesson_info
        }

    def publish_lesson(self, post_data: Dict, publish_date: Optional[datetime] = None) -> bool:
        """Publish a single lesson to Substack"""
        try:
            # Note: The substack_api library is primarily for reading content
            # For publishing, we'll need to use Substack's web interface or API
            # This is a placeholder for the actual publishing logic
            
            print(f"📝 Preparing to publish: {post_data['title']}")
            print(f"📅 Scheduled for: {publish_date or 'Immediate'}")
            print(f"📚 Series: {post_data['series']}")
            print(f"🏷️  Category: {post_data['category']}")
            print("-" * 50)
            
            # TODO: Implement actual publishing using Substack's API
            # This would require authentication and proper API endpoints
            
            return True
            
        except Exception as e:
            print(f"❌ Error publishing {post_data['title']}: {e}")
            return False

    def process_curriculum_directory(self, curriculum_path: str = None) -> List[Dict]:
        """Process all curriculum files and prepare for publishing"""
        curriculum_dir = Path(curriculum_path or CONTENT_CONFIG["curriculum_path"])
        all_lessons = []
        
        if not curriculum_dir.exists():
            print(f"❌ Curriculum directory not found: {curriculum_path}")
            return []
        
        lesson_counter = 1
        
        # Get all markdown files and sort them
        md_files = list(curriculum_dir.glob("*.md"))
        md_files.sort()  # Sort for consistent ordering
        
        print(f"📁 Processing {len(md_files)} lessons from {curriculum_dir}")
        
        for md_file in md_files:
            print(f"  📄 Reading: {md_file.name}")
            
            # Extract lesson information
            lesson_info = self.extract_lesson_info(md_file.name)
            
            # Read and parse the markdown file
            file_data = self.read_markdown_file(str(md_file))
            if not file_data:
                continue
            
            # Prepare for Substack
            post_data = self.prepare_substack_post(file_data, lesson_info, lesson_counter)
            all_lessons.append({
                'file_path': str(md_file),
                'post_data': post_data,
                'lesson_info': lesson_info
            })
            
            lesson_counter += 1
        
        return all_lessons

    def create_publishing_schedule(self, lessons: List[Dict], start_date: datetime = None) -> List[Dict]:
        """Create a publishing schedule for all lessons"""
        if not start_date:
            start_date = datetime.now()
        
        scheduled_lessons = []
        current_date = start_date
        
        for lesson in lessons:
            category = lesson['post_data']['category']
            days_interval = self.publishing_schedule.get(category, 2)
            
            scheduled_lessons.append({
                **lesson,
                'publish_date': current_date,
                'days_interval': days_interval
            })
            
            # Move to next publishing date
            current_date += timedelta(days=days_interval)
        
        return scheduled_lessons

    def generate_publishing_report(self, scheduled_lessons: List[Dict]) -> str:
        """Generate a report of the publishing schedule"""
        report = []
        report.append("📊 SANSKRIT CURRICULUM PUBLISHING SCHEDULE (REFACTORED)")
        report.append("=" * 70)
        
        current_series = None
        for lesson in scheduled_lessons:
            series = lesson['post_data']['series']
            if series != current_series:
                current_series = series
                report.append(f"\n📚 {series}")
                report.append("-" * 50)
            
            publish_date = lesson['publish_date'].strftime("%Y-%m-%d")
            title = lesson['post_data']['title']
            report.append(f"{publish_date}: {title}")
        
        return "\n".join(report)

    def export_schedule_to_json(self, scheduled_lessons: List[Dict], output_file: str = None):
        """Export the publishing schedule to JSON for external use"""
        output_file = output_file or CONTENT_CONFIG["schedule_file"]
        export_data = []
        
        for lesson in scheduled_lessons:
            export_data.append({
                'file_path': lesson['file_path'],
                'title': lesson['post_data']['title'],
                'series': lesson['post_data']['series'],
                'category': lesson['post_data']['category'],
                'lesson_number': lesson['post_data']['lesson_number'],
                'publish_date': lesson['publish_date'].isoformat(),
                'days_interval': lesson['days_interval'],
                'lesson_info': lesson['lesson_info']
            })
        
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(export_data, f, indent=2, ensure_ascii=False)
        
        print(f"📄 Publishing schedule exported to: {output_file}")

def main():
    """Main execution function"""
    print("🚀 Sanskrit Curriculum Substack Publisher - Refactored Content")
    print("=" * 70)
    
    # Initialize publisher
    publisher = SanskritSubstackPublisherRefactored()
    
    # Process curriculum files
    print("📚 Processing curriculum_refactoring files...")
    lessons = publisher.process_curriculum_directory("curriculum_refactoring")
    
    if not lessons:
        print("❌ No lessons found to process")
        return
    
    print(f"✅ Found {len(lessons)} lessons to process")
    
    # Create publishing schedule
    print("📅 Creating publishing schedule...")
    scheduled_lessons = publisher.create_publishing_schedule(lessons)
    
    # Generate and display report
    report = publisher.generate_publishing_report(scheduled_lessons)
    print("\n" + report)
    
    # Export schedule
    publisher.export_schedule_to_json(scheduled_lessons)
    
    print(f"\n🎯 Publishing plan complete!")
    print(f"📊 Total lessons: {len(lessons)}")
    print(f"📅 Publishing duration: {scheduled_lessons[-1]['publish_date'].strftime('%Y-%m-%d')}")
    print(f"📄 Schedule exported to: {CONTENT_CONFIG['schedule_file']}")

if __name__ == "__main__":
    main()
