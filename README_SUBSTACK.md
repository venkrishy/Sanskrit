# Sanskrit Curriculum Substack Publisher

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
