#!/usr/bin/env python3
"""
Example usage of the Sanskrit Curriculum Substack Publisher
"""

from substack_publisher import SanskritSubstackPublisher
from substack_config import SUBSTACK_CONFIG, PUBLISHING_SCHEDULE
import json

def example_basic_usage():
    """Example of basic usage without authentication"""
    print("📚 Example: Basic Sanskrit Curriculum Publishing")
    print("=" * 50)
    
    # Initialize publisher (replace with your actual Substack URL)
    publisher = SanskritSubstackPublisher("https://yoursite.substack.com")
    
    # Process curriculum files
    lessons = publisher.process_curriculum_directory("curriculum")
    
    if lessons:
        print(f"✅ Found {len(lessons)} lessons")
        
        # Create publishing schedule
        scheduled_lessons = publisher.create_publishing_schedule(lessons)
        
        # Generate report
        report = publisher.generate_publishing_report(scheduled_lessons)
        print("\n" + report)
        
        # Export schedule
        publisher.export_schedule_to_json(scheduled_lessons)
        
        return True
    else:
        print("❌ No lessons found")
        return False

def example_with_authentication():
    """Example with authentication (requires cookies.json)"""
    print("🔐 Example: Publishing with Authentication")
    print("=" * 50)
    
    # Check if cookies file exists
    import os
    if not os.path.exists("cookies.json"):
        print("❌ cookies.json not found")
        print("💡 Create cookies.json with your Substack session cookies")
        return False
    
    # Initialize with authentication
    publisher = SanskritSubstackPublisher(
        "https://yoursite.substack.com",
        cookies_path="cookies.json"
    )
    
    # Process and schedule lessons
    lessons = publisher.process_curriculum_directory("curriculum")
    if lessons:
        scheduled_lessons = publisher.create_publishing_schedule(lessons)
        
        # Example: Publish first few lessons
        print("📝 Publishing first 3 lessons...")
        for i, lesson in enumerate(scheduled_lessons[:3]):
            success = publisher.publish_lesson(lesson['post_data'])
            if success:
                print(f"✅ Published: {lesson['post_data']['title']}")
            else:
                print(f"❌ Failed: {lesson['post_data']['title']}")
        
        return True
    else:
        print("❌ No lessons found")
        return False

def example_custom_schedule():
    """Example with custom publishing schedule"""
    print("⏰ Example: Custom Publishing Schedule")
    print("=" * 50)
    
    # Custom schedule (more aggressive)
    custom_schedule = {
        "foundation": 1,      # Daily
        "pronouns": 1,        # Daily
        "time": 1,            # Daily
        "verbs": 2,           # Every 2 days
        "grammar": 2,
        "numbers": 1,
        "vocabulary": 1,
        "directions": 2,
        "conversation": 1,
        "advanced": 3         # Every 3 days
    }
    
    publisher = SanskritSubstackPublisher("https://yoursite.substack.com")
    
    # Override the default schedule
    publisher.publishing_schedule = custom_schedule
    
    lessons = publisher.process_curriculum_directory("curriculum")
    if lessons:
        scheduled_lessons = publisher.create_publishing_schedule(lessons)
        
        # Show the accelerated schedule
        report = publisher.generate_publishing_report(scheduled_lessons)
        print("\n" + report)
        
        return True
    else:
        print("❌ No lessons found")
        return False

def example_content_analysis():
    """Example of analyzing content before publishing"""
    print("📊 Example: Content Analysis")
    print("=" * 50)
    
    publisher = SanskritSubstackPublisher("https://yoursite.substack.com")
    lessons = publisher.process_curriculum_directory("curriculum")
    
    if not lessons:
        print("❌ No lessons found")
        return False
    
    # Analyze content by category
    category_stats = {}
    for lesson in lessons:
        category = lesson['category']
        if category not in category_stats:
            category_stats[category] = 0
        category_stats[category] += 1
    
    print("📈 Content Analysis:")
    print("-" * 30)
    for category, count in sorted(category_stats.items()):
        series_name = publisher.series_mapping.get(category, category.title())
        print(f"{series_name}: {count} lessons")
    
    total_lessons = sum(category_stats.values())
    print(f"\n📊 Total: {total_lessons} lessons")
    
    # Estimate publishing duration
    scheduled_lessons = publisher.create_publishing_schedule(lessons)
    if scheduled_lessons:
        start_date = scheduled_lessons[0]['publish_date']
        end_date = scheduled_lessons[-1]['publish_date']
        duration = (end_date - start_date).days
        
        print(f"⏱️  Publishing duration: {duration} days")
        print(f"📅 Start: {start_date.strftime('%Y-%m-%d')}")
        print(f"📅 End: {end_date.strftime('%Y-%m-%d')}")
    
    return True

def main():
    """Run all examples"""
    print("🚀 Sanskrit Curriculum Substack Publisher - Examples")
    print("=" * 60)
    
    examples = [
        ("Basic Usage", example_basic_usage),
        ("Content Analysis", example_content_analysis),
        ("Custom Schedule", example_custom_schedule),
        ("With Authentication", example_with_authentication),
    ]
    
    for name, example_func in examples:
        print(f"\n🔹 {name}")
        print("-" * 40)
        try:
            example_func()
        except Exception as e:
            print(f"❌ Error in {name}: {e}")
        print()

if __name__ == "__main__":
    main()
