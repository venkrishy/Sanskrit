#!/usr/bin/env python3
"""
Substack Content Generator
Creates formatted content files for easy copy-pasting into Substack
"""

import os
import json
import re
from pathlib import Path
from datetime import datetime, timedelta
from typing import List, Dict, Optional
import markdown
from substack_config import SUBSTACK_CONFIG, CONTENT_CONFIG

class SubstackContentGenerator:
    def __init__(self):
        """Initialize the content generator"""
        self.output_dir = Path("substack_content_ready")
        self.output_dir.mkdir(exist_ok=True)
        
        # Create subdirectories
        (self.output_dir / "lessons").mkdir(exist_ok=True)
        (self.output_dir / "schedule").mkdir(exist_ok=True)
        (self.output_dir / "templates").mkdir(exist_ok=True)
        
        # Lesson categories mapping
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

    def extract_lesson_info(self, filename: str) -> Dict[str, str]:
        """Extract lesson information from filename"""
        match = re.match(r'^(\d+)-', filename)
        lesson_number = match.group(1) if match else "00"
        
        category = self.lesson_categories.get(lesson_number, "Advanced")
        
        # Extract title from filename
        title_match = re.match(r'^\d+-\d*-\s*(.+?)(?:\s*-\s*[^-]+)*\.md$', filename)
        if title_match:
            title = title_match.group(1).strip()
        else:
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
                    
                    # Simple YAML parsing
                    for line in yaml_content.split('\n'):
                        if ':' in line:
                            key, value = line.split(':', 1)
                            frontmatter[key.strip()] = value.strip()
            
            # Extract title
            title = frontmatter.get('topic', '')
            if not title:
                lines = content.split('\n')
                for line in lines:
                    if line.startswith('# '):
                        title = line.replace('# ', '').strip()
                        break
            
            return {
                'title': title,
                'content': content,
                'frontmatter': frontmatter
            }
        except Exception as e:
            print(f"Error reading {file_path}: {e}")
            return None

    def format_for_substack(self, file_data: Dict, lesson_info: Dict, lesson_counter: int, publish_date: str) -> str:
        """Format content for Substack publishing"""
        
        # Create title
        title = f"Lesson {lesson_counter}: {lesson_info['title']}"
        
        # Create series info
        series_title = f"{lesson_info['lesson_number']} - {lesson_info['category']}"
        
        # Format the content
        formatted_content = f"""# {title}

**Series:** {series_title}  
**Publish Date:** {publish_date}  
**Lesson:** {lesson_counter}

---

{file_data['content']}

---

## 📚 Sanskrit Learning Journey

This lesson is part of the comprehensive Sanskrit learning curriculum. Each lesson builds upon previous knowledge to help you master Sanskrit step by step.

**Series:** {series_title}  
**Next Lesson:** Coming soon!

---
*Part of the Learn Sanskrit series on [venkrishy.substack.com](https://venkrishy.substack.com/s/learn_sanskrit)*
"""
        
        return formatted_content

    def generate_lesson_files(self, curriculum_path: str = "curriculum_refactoring") -> List[Dict]:
        """Generate formatted lesson files"""
        curriculum_dir = Path(curriculum_path)
        
        if not curriculum_dir.exists():
            print(f"❌ Curriculum directory not found: {curriculum_path}")
            return []
        
        # Get all markdown files and sort them
        md_files = list(curriculum_dir.glob("*.md"))
        md_files.sort()
        
        print(f"📁 Processing {len(md_files)} lessons from {curriculum_dir}")
        
        lessons = []
        lesson_counter = 1
        current_date = datetime.now()
        
        for md_file in md_files:
            print(f"  📄 Processing: {md_file.name}")
            
            # Extract lesson information
            lesson_info = self.extract_lesson_info(md_file.name)
            
            # Read markdown file
            file_data = self.read_markdown_file(str(md_file))
            if not file_data:
                continue
            
            # Format for Substack
            publish_date = current_date.strftime("%Y-%m-%d")
            formatted_content = self.format_for_substack(file_data, lesson_info, lesson_counter, publish_date)
            
            # Save formatted content
            output_filename = f"lesson_{lesson_counter:03d}_{lesson_info['lesson_number']}_{lesson_info['title'].replace(' ', '_')}.md"
            output_path = self.output_dir / "lessons" / output_filename
            
            with open(output_path, 'w', encoding='utf-8') as f:
                f.write(formatted_content)
            
            # Create lesson metadata
            lesson_metadata = {
                'lesson_number': lesson_counter,
                'title': f"Lesson {lesson_counter}: {lesson_info['title']}",
                'series': f"{lesson_info['lesson_number']} - {lesson_info['category']}",
                'publish_date': publish_date,
                'filename': output_filename,
                'original_file': str(md_file),
                'lesson_info': lesson_info
            }
            
            lessons.append(lesson_metadata)
            
            # Move to next date (daily for now, can be adjusted)
            current_date += timedelta(days=1)
            lesson_counter += 1
        
        return lessons

    def generate_publishing_schedule(self, lessons: List[Dict]) -> str:
        """Generate a human-readable publishing schedule"""
        schedule_content = """# Sanskrit Curriculum Publishing Schedule

## Overview
- **Total Lessons:** {total_lessons}
- **Start Date:** {start_date}
- **End Date:** {end_date}
- **Duration:** {duration} days

## Publishing Schedule

""".format(
            total_lessons=len(lessons),
            start_date=lessons[0]['publish_date'] if lessons else "TBD",
            end_date=lessons[-1]['publish_date'] if lessons else "TBD",
            duration=len(lessons)
        )
        
        current_series = None
        for lesson in lessons:
            series = lesson['series']
            if series != current_series:
                current_series = series
                schedule_content += f"\n## {series}\n\n"
            
            schedule_content += f"**{lesson['publish_date']}:** {lesson['title']}\n"
            schedule_content += f"- File: `{lesson['filename']}`\n"
            schedule_content += f"- Original: `{lesson['original_file']}`\n\n"
        
        return schedule_content

    def generate_copy_paste_instructions(self) -> str:
        """Generate instructions for copy-pasting to Substack"""
        instructions = """# How to Publish to Substack

## Quick Start Guide

1. **Go to your Substack dashboard**
   - Visit: https://venkrishy.substack.com/s/learn_sanskrit
   - Click "New post"

2. **Copy content from generated files**
   - Open the lesson files in `lessons/` folder
   - Copy the entire content
   - Paste into Substack editor

3. **Set up the post**
   - Title: Use the title from the file
   - Tags: Add "Sanskrit", "Learning", "Education"
   - Series: Create series for each category

4. **Schedule the post**
   - Use the dates in the publishing schedule
   - Set to publish at your preferred time

## File Organization

- `lessons/` - Formatted content ready for copy-paste
- `schedule/` - Publishing timeline and instructions
- `templates/` - Reusable templates

## Tips for Success

- **Consistent posting:** Follow the schedule for best results
- **Engage readers:** Respond to comments and questions
- **Cross-promote:** Share on social media
- **Track progress:** Monitor analytics and engagement

## Content Features

Each lesson includes:
- ✅ Proper Sanskrit typography
- ✅ Structured learning progression
- ✅ Clear explanations and examples
- ✅ Practice exercises
- ✅ Series organization

## Next Steps

1. Review the publishing schedule
2. Set up your Substack series
3. Start with the first few lessons
4. Build momentum with consistent posting
5. Engage with your audience

Happy publishing! 🚀
"""
        return instructions

    def generate_all_content(self):
        """Generate all content files"""
        print("🚀 Generating Substack Content")
        print("=" * 50)
        
        # Generate lesson files
        lessons = self.generate_lesson_files()
        
        if not lessons:
            print("❌ No lessons found to process")
            return
        
        print(f"✅ Generated {len(lessons)} lesson files")
        
        # Generate publishing schedule
        schedule_content = self.generate_publishing_schedule(lessons)
        schedule_file = self.output_dir / "schedule" / "publishing_schedule.md"
        with open(schedule_file, 'w', encoding='utf-8') as f:
            f.write(schedule_content)
        
        # Generate instructions
        instructions = self.generate_copy_paste_instructions()
        instructions_file = self.output_dir / "schedule" / "copy_paste_instructions.md"
        with open(instructions_file, 'w', encoding='utf-8') as f:
            f.write(instructions)
        
        # Generate JSON metadata
        metadata_file = self.output_dir / "schedule" / "lessons_metadata.json"
        with open(metadata_file, 'w', encoding='utf-8') as f:
            json.dump(lessons, f, indent=2, ensure_ascii=False)
        
        print(f"\n📁 Content generated in: {self.output_dir}")
        print(f"📄 Lessons: {len(lessons)} files in lessons/")
        print(f"📅 Schedule: publishing_schedule.md")
        print(f"📋 Instructions: copy_paste_instructions.md")
        print(f"📊 Metadata: lessons_metadata.json")
        
        return lessons

def main():
    """Main execution function"""
    generator = SubstackContentGenerator()
    lessons = generator.generate_all_content()
    
    if lessons:
        print(f"\n🎯 Ready to publish!")
        print(f"📚 Total lessons: {len(lessons)}")
        print(f"📅 Start: {lessons[0]['publish_date']}")
        print(f"📅 End: {lessons[-1]['publish_date']}")
        print(f"\n💡 Next steps:")
        print(f"1. Open {generator.output_dir}/schedule/copy_paste_instructions.md")
        print(f"2. Review the publishing schedule")
        print(f"3. Start copying content to Substack!")

if __name__ == "__main__":
    main()
