#!/usr/bin/env python3
"""
Sanskrit Curriculum Substack Publisher
Automates publishing of Sanskrit curriculum content to Substack using substack_api
"""

import os
import json
import time
from pathlib import Path
from datetime import datetime, timedelta
from typing import List, Dict, Optional
import markdown
from substack_api import Newsletter, Post, SubstackAuth

class SanskritSubstackPublisher:
    def __init__(self, substack_url: str, cookies_path: Optional[str] = None):
        """
        Initialize the publisher with Substack credentials
        
        Args:
            substack_url: Your Substack publication URL (e.g., "https://yoursite.substack.com")
            cookies_path: Path to cookies.json file for authentication (optional)
        """
        self.substack_url = substack_url
        self.auth = SubstackAuth(cookies_path=cookies_path) if cookies_path else None
        self.newsletter = Newsletter(substack_url, auth=self.auth)
        
        # Content structure mapping
        self.series_mapping = {
            "foundation": "01 - Foundation",
            "pronouns": "02 - Pronouns", 
            "time": "03 - Time & Dates",
            "verbs": "04 - Verbs",
            "grammar": "05 - Grammar",
            "numbers": "06 - Numbers",
            "vocabulary": "07 - Vocabulary",
            "directions": "08 - Directions",
            "conversation": "09 - Conversation",
            "advanced": "10 - Advanced"
        }
        
        # Publishing schedule (days between posts)
        self.publishing_schedule = {
            "foundation": 1,      # Daily for foundation
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

    def read_markdown_file(self, file_path: str) -> Dict[str, str]:
        """Read and parse markdown file"""
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Extract title from first line or filename
            lines = content.split('\n')
            title = lines[0].replace('#', '').strip() if lines[0].startswith('#') else Path(file_path).stem.replace('_', ' ').title()
            
            # Convert markdown to HTML
            html_content = markdown.markdown(content, extensions=['tables', 'fenced_code'])
            
            return {
                'title': title,
                'content': html_content,
                'raw_content': content
            }
        except Exception as e:
            print(f"Error reading {file_path}: {e}")
            return None

    def prepare_substack_post(self, file_data: Dict, category: str, lesson_number: int) -> Dict:
        """Prepare content for Substack publishing"""
        
        # Create engaging title with Sanskrit elements
        title = f"Lesson {lesson_number}: {file_data['title']}"
        
        # Add series information
        series_title = self.series_mapping.get(category, category.title())
        
        # Create post content with proper formatting
        post_content = f"""
        <div class="sanskrit-lesson">
            <h2>📚 {series_title}</h2>
            <div class="lesson-content">
                {file_data['content']}
            </div>
            
            <div class="lesson-footer">
                <p><strong>Series:</strong> {series_title}</p>
                <p><strong>Lesson:</strong> {lesson_number}</p>
                <p><em>Part of the comprehensive Sanskrit learning curriculum</em></p>
            </div>
        </div>
        """
        
        return {
            'title': title,
            'content': post_content,
            'series': series_title,
            'category': category,
            'lesson_number': lesson_number
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
            print("-" * 50)
            
            # TODO: Implement actual publishing using Substack's API
            # This would require authentication and proper API endpoints
            
            return True
            
        except Exception as e:
            print(f"❌ Error publishing {post_data['title']}: {e}")
            return False

    def process_curriculum_directory(self, curriculum_path: str = "curriculum") -> List[Dict]:
        """Process all curriculum files and prepare for publishing"""
        curriculum_dir = Path(curriculum_path)
        all_lessons = []
        
        if not curriculum_dir.exists():
            print(f"❌ Curriculum directory not found: {curriculum_path}")
            return []
        
        lesson_counter = 1
        
        # Process each category directory
        for category_dir in curriculum_dir.iterdir():
            if not category_dir.is_dir() or category_dir.name.startswith('.'):
                continue
                
            category = category_dir.name
            print(f"📁 Processing category: {category}")
            
            # Get all markdown files in the category
            md_files = list(category_dir.glob("*.md"))
            md_files.sort()  # Sort for consistent ordering
            
            for md_file in md_files:
                print(f"  📄 Reading: {md_file.name}")
                
                # Read and parse the markdown file
                file_data = self.read_markdown_file(str(md_file))
                if not file_data:
                    continue
                
                # Prepare for Substack
                post_data = self.prepare_substack_post(file_data, category, lesson_counter)
                all_lessons.append({
                    'file_path': str(md_file),
                    'post_data': post_data,
                    'category': category
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
            category = lesson['category']
            days_interval = self.publishing_schedule.get(category, 3)
            
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
        report.append("📊 SANSKRIT CURRICULUM PUBLISHING SCHEDULE")
        report.append("=" * 60)
        
        current_series = None
        for lesson in scheduled_lessons:
            series = lesson['post_data']['series']
            if series != current_series:
                current_series = series
                report.append(f"\n📚 {series}")
                report.append("-" * 40)
            
            publish_date = lesson['publish_date'].strftime("%Y-%m-%d")
            title = lesson['post_data']['title']
            report.append(f"{publish_date}: {title}")
        
        return "\n".join(report)

    def export_schedule_to_json(self, scheduled_lessons: List[Dict], output_file: str = "publishing_schedule.json"):
        """Export the publishing schedule to JSON for external use"""
        export_data = []
        
        for lesson in scheduled_lessons:
            export_data.append({
                'file_path': lesson['file_path'],
                'title': lesson['post_data']['title'],
                'series': lesson['post_data']['series'],
                'category': lesson['category'],
                'publish_date': lesson['publish_date'].isoformat(),
                'days_interval': lesson['days_interval']
            })
        
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(export_data, f, indent=2, ensure_ascii=False)
        
        print(f"📄 Publishing schedule exported to: {output_file}")

def main():
    """Main execution function"""
    print("🚀 Sanskrit Curriculum Substack Publisher")
    print("=" * 50)
    
    # Configuration
    SUBSTACK_URL = "https://yoursite.substack.com"  # Replace with your Substack URL
    COOKIES_PATH = "cookies.json"  # Optional: path to your Substack cookies
    
    # Initialize publisher
    publisher = SanskritSubstackPublisher(SUBSTACK_URL, COOKIES_PATH)
    
    # Process curriculum files
    print("📚 Processing curriculum files...")
    lessons = publisher.process_curriculum_directory("curriculum")
    
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
    print(f"📄 Schedule exported to: publishing_schedule.json")

if __name__ == "__main__":
    main()
