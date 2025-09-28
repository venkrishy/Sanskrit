#!/usr/bin/env python3
"""
Setup script for Sanskrit Curriculum Substack Publisher
"""

import os
import sys
import subprocess
from pathlib import Path

def create_virtual_environment():
    """Create a virtual environment for the project"""
    print("🐍 Creating virtual environment...")
    try:
        subprocess.check_call([sys.executable, "-m", "venv", "venv_substack"])
        print("✅ Virtual environment created: venv_substack")
        return True
    except subprocess.CalledProcessError as e:
        print(f"❌ Error creating virtual environment: {e}")
        return False

def install_requirements():
    """Install required Python packages in virtual environment"""
    print("📦 Installing required packages...")
    try:
        # Determine the correct pip path for the virtual environment
        if os.name == 'nt':  # Windows
            pip_path = "venv_substack/Scripts/pip"
        else:  # Unix/Linux/macOS
            pip_path = "venv_substack/bin/pip"
        
        subprocess.check_call([pip_path, "install", "-r", "requirements_substack.txt"])
        print("✅ Requirements installed successfully")
        return True
    except subprocess.CalledProcessError as e:
        print(f"❌ Error installing requirements: {e}")
        print("💡 Try running: source venv_substack/bin/activate && pip install -r requirements_substack.txt")
        return False

def create_directories():
    """Create necessary directories"""
    print("📁 Creating directories...")
    directories = [
        "substack_content",
        "substack_content/published",
        "substack_content/scheduled",
        "substack_content/templates"
    ]
    
    for directory in directories:
        Path(directory).mkdir(parents=True, exist_ok=True)
        print(f"  ✅ Created: {directory}")

def create_cookies_template():
    """Create a template for cookies.json"""
    cookies_template = {
        "instructions": "To use authenticated features, export your browser cookies from a logged-in Substack session",
        "format": [
            {
                "name": "substack.sid",
                "value": "your_session_id_here",
                "domain": ".substack.com",
                "path": "/",
                "secure": True
            },
            {
                "name": "substack.lli",
                "value": "your_lli_value_here", 
                "domain": ".substack.com",
                "path": "/",
                "secure": True
            }
        ],
        "note": "Replace the placeholder values with your actual cookie values from a logged-in Substack session"
    }
    
    with open("cookies_template.json", "w") as f:
        import json
        json.dump(cookies_template, f, indent=2)
    
    print("📄 Created cookies_template.json")

def create_readme():
    """Create a README for the Substack publishing setup"""
    readme_content = """# Sanskrit Curriculum Substack Publisher

This setup automates publishing your Sanskrit curriculum content to Substack.

## Quick Start

1. **Install dependencies:**
   ```bash
   python setup_substack.py
   ```

2. **Configure your Substack:**
   - Edit `substack_config.py` with your Substack URL
   - Set up your publication name and description

3. **Run the publisher:**
   ```bash
   python substack_publisher.py
   ```

## Features

- 📚 **Automated content processing** from markdown files
- 📅 **Smart scheduling** with different intervals per category
- 🎨 **Sanskrit typography** support with proper fonts
- 📊 **Publishing reports** and schedule export
- 🔄 **Series organization** with proper categorization

## Configuration

Edit `substack_config.py` to customize:
- Publication URL and settings
- Publishing schedule intervals
- Series information and colors
- Content templates

## Authentication (Optional)

For advanced features, you can provide authentication cookies:
1. Export cookies from a logged-in Substack session
2. Save as `cookies.json` (use `cookies_template.json` as reference)
3. The publisher will use these for authenticated access

## Content Structure

The publisher expects your curriculum in the `curriculum/` directory with this structure:
```
curriculum/
├── foundation/
├── pronouns/
├── time/
├── verbs/
├── grammar/
├── numbers/
├── vocabulary/
├── directions/
├── conversation/
└── advanced/
```

## Output Files

- `publishing_schedule.json` - Complete publishing schedule
- `publishing_report.txt` - Human-readable schedule report
- `substack_content/` - Processed content ready for publishing

## Next Steps

1. Review the generated publishing schedule
2. Adjust timing in `substack_config.py` if needed
3. Set up your Substack publication
4. Begin publishing according to the schedule

Happy publishing! 🚀
"""
    
    with open("README_SUBSTACK.md", "w") as f:
        f.write(readme_content)
    
    print("📖 Created README_SUBSTACK.md")

def main():
    """Main setup function"""
    print("🚀 Setting up Sanskrit Curriculum Substack Publisher")
    print("=" * 60)
    
    # Check if we're in the right directory
    if not Path("curriculum").exists():
        print("❌ Error: 'curriculum' directory not found")
        print("   Make sure you're running this from the Sanskrit project root")
        return False
    
    # Create virtual environment
    if not create_virtual_environment():
        return False
    
    # Install requirements
    if not install_requirements():
        return False
    
    # Create directories
    create_directories()
    
    # Create template files
    create_cookies_template()
    create_readme()
    
    print("\n✅ Setup complete!")
    print("\n📋 Next steps:")
    print("1. Activate virtual environment: source venv_substack/bin/activate")
    print("2. Edit substack_config.py with your Substack URL")
    print("3. Run: python substack_publisher.py")
    print("4. Review the generated publishing schedule")
    print("5. Set up your Substack publication")
    print("6. Begin publishing!")
    
    return True

if __name__ == "__main__":
    main()
