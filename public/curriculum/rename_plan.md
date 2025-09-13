# Curriculum File Reorganization Plan

## Overview
This plan reorganizes all curriculum files into logical directories with meaningful names based on the HTML app structure. All directory and file names will be lowercase, and number prefixes will be removed unless there are conflicts.

## Directory Structure

```
curriculum/
├── foundation/
│   ├── introductions.md
│   ├── greetings.md
│   └── basic_conversations.md
├── pronouns/
│   ├── basic_pronouns.md
│   ├── demonstrative_pronouns.md
│   ├── interrogative_pronouns.md
│   └── pronoun_transformations.md
├── numbers/
│   ├── basic_numbers.md
│   ├── number_practice.md
│   └── counting_questions.md
├── vocabulary/
│   ├── kitchen_utensils.md
│   ├── household_objects.md
│   └── workplace_vocabulary.md
├── grammar/
│   ├── plural_forms.md
│   └── plural_forms_advanced.md
├── time/
│   ├── time_expressions.md
│   ├── daily_routines.md
│   └── days_and_dates.md
├── verbs/
│   └── present_tense_forms.md
├── directions/
│   ├── spatial_relationships.md
│   └── travel_vocabulary.md
├── conversation/
│   ├── basic_dialogues.md
│   ├── family_conversations.md
│   └── complex_dialogues.md
├── advanced/
│   ├── reading_comprehension.md
│   ├── writing_practice.md
│   ├── grammar_mastery.md
│   └── advanced_exercises.md
└── reference/
    └── table_of_contents.md
```

## File Mapping and Commands

### 1. Foundation Module
```bash
# Create foundation directory
mkdir -p curriculum/foundation

# Move and rename files
mv "curriculum/110 Introduction and Names.md" "curriculum/foundation/introductions.md"
mv "curriculum/IMG_0422.md" "curriculum/foundation/greetings.md"
mv "curriculum/IMG_0423.md" "curriculum/foundation/basic_conversations.md"
```

### 2. Pronouns Module
```bash
# Create pronouns directory
mkdir -p curriculum/pronouns

# Move and rename files
mv "curriculum/120 Pronouns.md" "curriculum/pronouns/basic_pronouns.md"
mv "curriculum/121 Pronouns.md" "curriculum/pronouns/demonstrative_pronouns.md"
mv "curriculum/122 Pronouns.md" "curriculum/pronouns/interrogative_pronouns.md"
mv "curriculum/143 Pronoun Transformation.md" "curriculum/pronouns/pronoun_transformations.md"
```

### 3. Numbers Module
```bash
# Create numbers directory
mkdir -p curriculum/numbers

# Move and rename files
mv "curriculum/131 Numbers.md" "curriculum/numbers/basic_numbers.md"
mv "curriculum/132 Numbers Practice.md" "curriculum/numbers/number_practice.md"
mv "curriculum/145  Kati - Number-based Questions.md" "curriculum/numbers/counting_questions.md"
```

### 4. Vocabulary Module
```bash
# Create vocabulary directory
mkdir -p curriculum/vocabulary

# Move and rename files
mv "curriculum/141 Paakashaala Sambandhi Vastuni.md" "curriculum/vocabulary/kitchen_utensils.md"
mv "curriculum/IMG_0418.md" "curriculum/vocabulary/household_objects.md"
mv "curriculum/IMG_0419.md" "curriculum/vocabulary/workplace_vocabulary.md"
```

### 5. Grammar Module
```bash
# Create grammar directory
mkdir -p curriculum/grammar

# Move and rename files
mv "curriculum/142 Bahuvachanam.md" "curriculum/grammar/plural_forms.md"
mv "curriculum/142 Bahuvachanam Part 2.md" "curriculum/grammar/plural_forms_advanced.md"
```

### 6. Time Module
```bash
# Create time directory
mkdir -p curriculum/time

# Move and rename files
mv "curriculum/143 Samayah.md" "curriculum/time/time_expressions.md"
mv "curriculum/IMG_0420.md" "curriculum/time/daily_routines.md"
mv "curriculum/IMG_0421.md" "curriculum/time/days_and_dates.md"
```

### 7. Verbs Module
```bash
# Create verbs directory
mkdir -p curriculum/verbs

# Move and rename files
mv "curriculum/144 Present Tense - Person Verb Forms.md" "curriculum/verbs/present_tense_forms.md"
```

### 8. Directions Module
```bash
# Create directions directory
mkdir -p curriculum/directions

# Move and rename files
mv "curriculum/IMG_0426.md" "curriculum/directions/spatial_relationships.md"
mv "curriculum/IMG_0427.md" "curriculum/directions/travel_vocabulary.md"
```

### 9. Conversation Module
```bash
# Create conversation directory
mkdir -p curriculum/conversation

# Move and rename files
mv "curriculum/IMG_0424.md" "curriculum/conversation/basic_dialogues.md"
mv "curriculum/IMG_0425.md" "curriculum/conversation/family_conversations.md"
mv "curriculum/IMG_0428.md" "curriculum/conversation/complex_dialogues.md"
```

### 10. Advanced Module
```bash
# Create advanced directory
mkdir -p curriculum/advanced

# Move and rename files
mv "curriculum/IMG_0429.md" "curriculum/advanced/reading_comprehension.md"
mv "curriculum/IMG_0430.md" "curriculum/advanced/writing_practice.md"
mv "curriculum/IMG_0431.md" "curriculum/advanced/grammar_mastery.md"
mv "curriculum/IMG_0432.md" "curriculum/advanced/advanced_exercises.md"
mv "curriculum/IMG_0433.md" "curriculum/advanced/advanced_exercises_2.md"
mv "curriculum/IMG_0434.md" "curriculum/advanced/advanced_exercises_3.md"
mv "curriculum/IMG_0435.md" "curriculum/advanced/advanced_exercises_4.md"
mv "curriculum/IMG_0436.md" "curriculum/advanced/advanced_exercises_5.md"
mv "curriculum/IMG_0437.md" "curriculum/advanced/advanced_exercises_6.md"
mv "curriculum/IMG_0438.md" "curriculum/advanced/advanced_exercises_7.md"
mv "curriculum/IMG_0439.md" "curriculum/advanced/advanced_exercises_8.md"
mv "curriculum/IMG_0440.md" "curriculum/advanced/advanced_exercises_9.md"
mv "curriculum/IMG_0441.md" "curriculum/advanced/advanced_exercises_10.md"
mv "curriculum/IMG_0442.md" "curriculum/advanced/advanced_exercises_11.md"
mv "curriculum/IMG_0443.md" "curriculum/advanced/advanced_exercises_12.md"
mv "curriculum/IMG_0444.md" "curriculum/advanced/advanced_exercises_13.md"
mv "curriculum/IMG_0445.md" "curriculum/advanced/advanced_exercises_14.md"
mv "curriculum/IMG_0446.md" "curriculum/advanced/advanced_exercises_15.md"
mv "curriculum/IMG_0447.md" "curriculum/advanced/advanced_exercises_16.md"
mv "curriculum/IMG_0448.md" "curriculum/advanced/advanced_exercises_17.md"
mv "curriculum/IMG_0449.md" "curriculum/advanced/advanced_exercises_18.md"
mv "curriculum/IMG_0450.md" "curriculum/advanced/advanced_exercises_19.md"
mv "curriculum/IMG_0451.md" "curriculum/advanced/advanced_exercises_20.md"
mv "curriculum/IMG_0452.md" "curriculum/advanced/advanced_exercises_21.md"
mv "curriculum/IMG_0453.md" "curriculum/advanced/advanced_exercises_22.md"
mv "curriculum/IMG_0454.md" "curriculum/advanced/advanced_exercises_23.md"
mv "curriculum/IMG_0456.md" "curriculum/advanced/advanced_exercises_24.md"
mv "curriculum/IMG_0457.md" "curriculum/advanced/advanced_exercises_25.md"
mv "curriculum/IMG_0458.md" "curriculum/advanced/advanced_exercises_26.md"
mv "curriculum/IMG_0459.md" "curriculum/advanced/advanced_exercises_27.md"
mv "curriculum/IMG_0460.md" "curriculum/advanced/advanced_exercises_28.md"
mv "curriculum/IMG_0461.md" "curriculum/advanced/advanced_exercises_29.md"
mv "curriculum/IMG_0462.md" "curriculum/advanced/advanced_exercises_30.md"
mv "curriculum/IMG_0463.md" "curriculum/advanced/advanced_exercises_31.md"
mv "curriculum/IMG_0464.md" "curriculum/advanced/advanced_exercises_32.md"
mv "curriculum/IMG_0465.md" "curriculum/advanced/advanced_exercises_33.md"
mv "curriculum/IMG_0466.md" "curriculum/advanced/advanced_exercises_34.md"
mv "curriculum/IMG_0467.md" "curriculum/advanced/advanced_exercises_35.md"
mv "curriculum/IMG_0468.md" "curriculum/advanced/advanced_exercises_36.md"
mv "curriculum/IMG_0469.md" "curriculum/advanced/advanced_exercises_37.md"
mv "curriculum/IMG_0470.md" "curriculum/advanced/advanced_exercises_38.md"
mv "curriculum/IMG_0471.md" "curriculum/advanced/advanced_exercises_39.md"
mv "curriculum/IMG_0472.md" "curriculum/advanced/advanced_exercises_40.md"
mv "curriculum/IMG_0473.md" "curriculum/advanced/advanced_exercises_41.md"
mv "curriculum/IMG_0474.md" "curriculum/advanced/advanced_exercises_42.md"
mv "curriculum/IMG_0475.md" "curriculum/advanced/advanced_exercises_43.md"
mv "curriculum/IMG_0476.md" "curriculum/advanced/advanced_exercises_44.md"
mv "curriculum/IMG_0477.md" "curriculum/advanced/advanced_exercises_45.md"
mv "curriculum/IMG_0478.md" "curriculum/advanced/advanced_exercises_46.md"
```

### 11. Reference Module
```bash
# Create reference directory
mkdir -p curriculum/reference

# Move and rename files
mv "curriculum/Sanskrit Table of Contents.md" "curriculum/reference/table_of_contents.md"
```

## Complete Execution Script

Here's the complete script to execute all the reorganization:

```bash
#!/bin/bash

# Create all directories
mkdir -p curriculum/foundation
mkdir -p curriculum/pronouns
mkdir -p curriculum/numbers
mkdir -p curriculum/vocabulary
mkdir -p curriculum/grammar
mkdir -p curriculum/time
mkdir -p curriculum/verbs
mkdir -p curriculum/directions
mkdir -p curriculum/conversation
mkdir -p curriculum/advanced
mkdir -p curriculum/reference

# Foundation Module
mv "curriculum/110 Introduction and Names.md" "curriculum/foundation/introductions.md"
mv "curriculum/IMG_0422.md" "curriculum/foundation/greetings.md"
mv "curriculum/IMG_0423.md" "curriculum/foundation/basic_conversations.md"

# Pronouns Module
mv "curriculum/120 Pronouns.md" "curriculum/pronouns/basic_pronouns.md"
mv "curriculum/121 Pronouns.md" "curriculum/pronouns/demonstrative_pronouns.md"
mv "curriculum/122 Pronouns.md" "curriculum/pronouns/interrogative_pronouns.md"
mv "curriculum/143 Pronoun Transformation.md" "curriculum/pronouns/pronoun_transformations.md"

# Numbers Module
mv "curriculum/131 Numbers.md" "curriculum/numbers/basic_numbers.md"
mv "curriculum/132 Numbers Practice.md" "curriculum/numbers/number_practice.md"
mv "curriculum/145  Kati - Number-based Questions.md" "curriculum/numbers/counting_questions.md"

# Vocabulary Module
mv "curriculum/141 Paakashaala Sambandhi Vastuni.md" "curriculum/vocabulary/kitchen_utensils.md"
mv "curriculum/IMG_0418.md" "curriculum/vocabulary/household_objects.md"
mv "curriculum/IMG_0419.md" "curriculum/vocabulary/workplace_vocabulary.md"

# Grammar Module
mv "curriculum/142 Bahuvachanam.md" "curriculum/grammar/plural_forms.md"
mv "curriculum/142 Bahuvachanam Part 2.md" "curriculum/grammar/plural_forms_advanced.md"

# Time Module
mv "curriculum/143 Samayah.md" "curriculum/time/time_expressions.md"
mv "curriculum/IMG_0420.md" "curriculum/time/daily_routines.md"
mv "curriculum/IMG_0421.md" "curriculum/time/days_and_dates.md"

# Verbs Module
mv "curriculum/144 Present Tense - Person Verb Forms.md" "curriculum/verbs/present_tense_forms.md"

# Directions Module
mv "curriculum/IMG_0426.md" "curriculum/directions/spatial_relationships.md"
mv "curriculum/IMG_0427.md" "curriculum/directions/travel_vocabulary.md"

# Conversation Module
mv "curriculum/IMG_0424.md" "curriculum/conversation/basic_dialogues.md"
mv "curriculum/IMG_0425.md" "curriculum/conversation/family_conversations.md"
mv "curriculum/IMG_0428.md" "curriculum/conversation/complex_dialogues.md"

# Advanced Module
mv "curriculum/IMG_0429.md" "curriculum/advanced/reading_comprehension.md"
mv "curriculum/IMG_0430.md" "curriculum/advanced/writing_practice.md"
mv "curriculum/IMG_0431.md" "curriculum/advanced/grammar_mastery.md"
mv "curriculum/IMG_0432.md" "curriculum/advanced/advanced_exercises.md"
mv "curriculum/IMG_0433.md" "curriculum/advanced/advanced_exercises_2.md"
mv "curriculum/IMG_0434.md" "curriculum/advanced/advanced_exercises_3.md"
mv "curriculum/IMG_0435.md" "curriculum/advanced/advanced_exercises_4.md"
mv "curriculum/IMG_0436.md" "curriculum/advanced/advanced_exercises_5.md"
mv "curriculum/IMG_0437.md" "curriculum/advanced/advanced_exercises_6.md"
mv "curriculum/IMG_0438.md" "curriculum/advanced/advanced_exercises_7.md"
mv "curriculum/IMG_0439.md" "curriculum/advanced/advanced_exercises_8.md"
mv "curriculum/IMG_0440.md" "curriculum/advanced/advanced_exercises_9.md"
mv "curriculum/IMG_0441.md" "curriculum/advanced/advanced_exercises_10.md"
mv "curriculum/IMG_0442.md" "curriculum/advanced/advanced_exercises_11.md"
mv "curriculum/IMG_0443.md" "curriculum/advanced/advanced_exercises_12.md"
mv "curriculum/IMG_0444.md" "curriculum/advanced/advanced_exercises_13.md"
mv "curriculum/IMG_0445.md" "curriculum/advanced/advanced_exercises_14.md"
mv "curriculum/IMG_0446.md" "curriculum/advanced/advanced_exercises_15.md"
mv "curriculum/IMG_0447.md" "curriculum/advanced/advanced_exercises_16.md"
mv "curriculum/IMG_0448.md" "curriculum/advanced/advanced_exercises_17.md"
mv "curriculum/IMG_0449.md" "curriculum/advanced/advanced_exercises_18.md"
mv "curriculum/IMG_0450.md" "curriculum/advanced/advanced_exercises_19.md"
mv "curriculum/IMG_0451.md" "curriculum/advanced/advanced_exercises_20.md"
mv "curriculum/IMG_0452.md" "curriculum/advanced/advanced_exercises_21.md"
mv "curriculum/IMG_0453.md" "curriculum/advanced/advanced_exercises_22.md"
mv "curriculum/IMG_0454.md" "curriculum/advanced/advanced_exercises_23.md"
mv "curriculum/IMG_0456.md" "curriculum/advanced/advanced_exercises_24.md"
mv "curriculum/IMG_0457.md" "curriculum/advanced/advanced_exercises_25.md"
mv "curriculum/IMG_0458.md" "curriculum/advanced/advanced_exercises_26.md"
mv "curriculum/IMG_0459.md" "curriculum/advanced/advanced_exercises_27.md"
mv "curriculum/IMG_0460.md" "curriculum/advanced/advanced_exercises_28.md"
mv "curriculum/IMG_0461.md" "curriculum/advanced/advanced_exercises_29.md"
mv "curriculum/IMG_0462.md" "curriculum/advanced/advanced_exercises_30.md"
mv "curriculum/IMG_0463.md" "curriculum/advanced/advanced_exercises_31.md"
mv "curriculum/IMG_0464.md" "curriculum/advanced/advanced_exercises_32.md"
mv "curriculum/IMG_0465.md" "curriculum/advanced/advanced_exercises_33.md"
mv "curriculum/IMG_0466.md" "curriculum/advanced/advanced_exercises_34.md"
mv "curriculum/IMG_0467.md" "curriculum/advanced/advanced_exercises_35.md"
mv "curriculum/IMG_0468.md" "curriculum/advanced/advanced_exercises_36.md"
mv "curriculum/IMG_0469.md" "curriculum/advanced/advanced_exercises_37.md"
mv "curriculum/IMG_0470.md" "curriculum/advanced/advanced_exercises_38.md"
mv "curriculum/IMG_0471.md" "curriculum/advanced/advanced_exercises_39.md"
mv "curriculum/IMG_0472.md" "curriculum/advanced/advanced_exercises_40.md"
mv "curriculum/IMG_0473.md" "curriculum/advanced/advanced_exercises_41.md"
mv "curriculum/IMG_0474.md" "curriculum/advanced/advanced_exercises_42.md"
mv "curriculum/IMG_0475.md" "curriculum/advanced/advanced_exercises_43.md"
mv "curriculum/IMG_0476.md" "curriculum/advanced/advanced_exercises_44.md"
mv "curriculum/IMG_0477.md" "curriculum/advanced/advanced_exercises_45.md"
mv "curriculum/IMG_0478.md" "curriculum/advanced/advanced_exercises_46.md"

# Reference Module
mv "curriculum/Sanskrit Table of Contents.md" "curriculum/reference/table_of_contents.md"

echo "Curriculum reorganization completed successfully!"
```

## Notes

1. **Number Prefixes Removed**: All number prefixes (110, 120, IMG_0418, etc.) have been removed from filenames
2. **Lowercase Names**: All directory and file names are in lowercase
3. **Meaningful Names**: Files are named based on their content and purpose
4. **Logical Grouping**: Files are organized into modules that match the HTML app structure
5. **Conflict Resolution**: For the many IMG files in the advanced module, I've numbered them sequentially (advanced_exercises_2.md, etc.) to avoid conflicts
6. **Content-Based Naming**: Each file is named based on its actual content rather than arbitrary numbers

## Verification

After execution, the curriculum directory should contain:
- 10 main module directories
- 1 reference directory
- All files properly renamed and organized
- No remaining files with number prefixes (except where necessary for conflicts)

This reorganization will make the curriculum much more maintainable and easier to navigate for the HTML app development.
