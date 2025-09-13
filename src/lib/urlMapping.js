// Map section IDs to URL-friendly slugs
export const sectionToSlug = {
  "1.1": "chapter-01/names-and-basic-introductions",
  "1.2": "chapter-01/demonstrative-pronouns",
  "1.3": "chapter-01/objects-for-practice",
  "1.4": "chapter-01/is-and-is-not",
  "1.5": "chapter-01/here-and-there",
  "1.6": "chapter-01/everywhere-and-elsewhere",
  "1.7": "chapter-01/personal-pronouns",
  "1.8": "chapter-01/genitive-case",
  "1.9": "chapter-01/genitive-case-practice",
  "1.10": "chapter-01/basic-verbs",
  "1.11": "chapter-01/you-forms",
  "1.12": "chapter-01/necessity-and-sufficiency",
  "1.13": "chapter-01/requests-and-commands",
  "1.14": "chapter-01/technical-terms",
  "1.15": "chapter-01/technical-terms-practice",
  "1.16": "chapter-01/time-concepts",
  
  "4.1": "chapter-04/kitchen-objects",
  "4.2": "chapter-04/plural-forms",
  "4.3": "chapter-04/verbs-in-plural",
  "4.4": "chapter-04/special-exercise",
  "4.5": "chapter-04/counting",
  
  "5.1": "chapter-05/locative-case",
  "5.2": "chapter-05/locative-practice",
  "5.3": "chapter-05/fill-in-blanks",
  "5.4": "chapter-05/when-expressions",
  "5.5": "chapter-05/time-expressions",
  "5.6": "chapter-05/time-practice",
  
  "6.1": "chapter-06/greetings",
  
  "7.1": "chapter-07/accusative-case",
  "7.2": "chapter-07/accusative-practice",
  
  "8.1": "chapter-08/basic-relations",
  "8.2": "chapter-08/directions-and-positions",
  
  "9.1": "chapter-09/source-indicators",
  "9.2": "chapter-09/practice-with-sources",
  
  "10.1": "chapter-10/speed-and-manner",
  "10.2": "chapter-10/purpose",
  
  "11.1": "chapter-11/past-tense",
  "11.2": "chapter-11/forms-of-to-be",
  "11.3": "chapter-11/past-tense-practice",
  
  "12.1": "chapter-12/future-tense",
  "12.2": "chapter-12/special-future-forms",
  
  "13.1": "chapter-13/vocative-forms",
  "13.2": "chapter-13/vocative-practice",
  
  "14.1": "chapter-14/if-then",
  
  "15.1": "chapter-15/basic-particles",
  "15.2": "chapter-15/particle-practice",
  
  "16.1": "chapter-16/from-until",
  
  "17.1": "chapter-17/when-then",
  
  "18.1": "chapter-18/basic-numbers",
  "18.2": "chapter-18/number-practice",
  
  "19.1": "chapter-19/instrumental-case",
  "19.2": "chapter-19/with-saha",
  "19.3": "chapter-19/without-vina",
  
  "20.1": "chapter-20/ability-and-possibility"
}

// Reverse mapping for looking up section IDs from URLs
export const slugToSection = Object.fromEntries(
  Object.entries(sectionToSlug).map(([id, slug]) => [slug, id])
)

export function getSectionFromSlug(slug) {
  return slugToSection[slug]
}

export function getSlugFromSection(sectionId) {
  return sectionToSlug[sectionId]
}

// Get chapter number from section ID
export function getChapterFromSection(sectionId) {
  return parseInt(sectionId.split('.')[0])
}

// Get next and previous section IDs
export function getAdjacentSections(sectionId) {
  const allSections = Object.keys(sectionToSlug).sort()
  const currentIndex = allSections.indexOf(sectionId)
  
  return {
    previous: currentIndex > 0 ? allSections[currentIndex - 1] : null,
    next: currentIndex < allSections.length - 1 ? allSections[currentIndex + 1] : null
  }
} 