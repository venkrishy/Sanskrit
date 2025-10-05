import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RootLayout from './app/layout.jsx'
import HomePage from './app/page.jsx'

// Import new 14-module structure pages
import GettingStartedPage from './app/01-getting-started/page.jsx'
import ExistenceIdentificationPage from './app/02-existence-identification/page.jsx'
import LocationPage from './app/03-location/page.jsx'
import ActionsPage from './app/04-actions/page.jsx'
import PluralsPage from './app/05-plurals/page.jsx'
import DirectionsPage from './app/06-directions/page.jsx'
import ToolRolePage from './app/07-tool-role/page.jsx'
import OwnershipPage from './app/08-ownership/page.jsx'
import TensesPage from './app/09-tenses/page.jsx'
import AdjectivesPage from './app/10-adjectives/page.jsx'
import TimeNumbersPage from './app/11-time-numbers/page.jsx'
import ComplexSentencesPage from './app/12-complex-sentences/page.jsx'
import AdvancedVerbsPage from './app/13-advanced-verbs/page.jsx'
import ComplexDialoguePage from './app/14-complex-dialogue/page.jsx'

// Import 01-getting-started lesson pages
import GreetingsIdentityPage from './app/01-getting-started/greetings-identity/page.jsx'
import NeuterNamePage from './app/01-getting-started/neuter-name/page.jsx'
import MasculineNamePage from './app/01-getting-started/masculine-name/page.jsx'
import FeminineNamePage from './app/01-getting-started/feminine-name/page.jsx'
import WhoWhatPage from './app/01-getting-started/who-what/page.jsx'
import YesNoPage from './app/01-getting-started/yes-no/page.jsx'
import DailyItemsPage from './app/01-getting-started/daily-items/page.jsx'

// Import legacy category pages (keeping for backward compatibility)
import FoundationalPage from './app/01-foundational/page.jsx'
import PronounsPage from './app/02-pronouns/page.jsx'
import NumbersPage from './app/03-numbers/page.jsx'
import VocabularyPage from './app/04-vocabulary/page.jsx'
import GrammarPage from './app/05-grammar/page.jsx'
import TimeAndCalendarPage from './app/06-time_and_calendar/page.jsx'
import VerbsPage from './app/07-verbs/page.jsx'
import DirectionsAndLocationsPage from './app/08-directions_and_locations/page.jsx'
import ConversationPage from './app/09-conversation/page.jsx'
import AdvancedPage from './app/10-advanced/page.jsx'

// Import all lesson pages
// Foundational lessons
import BasicConversationsPage from './app/01-foundational/basic_conversations/page.jsx'
import GreetingsPage from './app/01-foundational/greetings/page.jsx'
import IntroductionsPage from './app/01-foundational/introductions/page.jsx'

// Pronouns lessons
import BasicPronounsPage from './app/02-pronouns/basic_pronouns/page.jsx'
import DemonstrativePronounsPage from './app/02-pronouns/demonstrative_pronouns/page.jsx'
import InterrogativePronounsPage from './app/02-pronouns/interrogative_pronouns/page.jsx'
import PronounTransformationsPage from './app/02-pronouns/pronoun_transformations/page.jsx'

// Numbers lessons
import BasicNumbersPage from './app/03-numbers/basic_numbers/page.jsx'
import CountingQuestionsPage from './app/03-numbers/counting_questions/page.jsx'
import NumberPracticePage from './app/03-numbers/number_practice/page.jsx'

// Vocabulary lessons
import HouseholdObjectsPage from './app/04-vocabulary/household_objects/page.jsx'
import KitchenUtensilsPage from './app/04-vocabulary/kitchen_utensils/page.jsx'
import WorkplaceVocabularyPage from './app/04-vocabulary/workplace_vocabulary/page.jsx'

// Grammar lessons
import PluralFormsPage from './app/05-grammar/plural_forms/page.jsx'
import PluralFormsAdvancedPage from './app/05-grammar/plural_forms_advanced/page.jsx'

// Time and Calendar lessons
import DailyRoutinesPage from './app/06-time_and_calendar/daily_routines/page.jsx'
import DaysAndDatesPage from './app/06-time_and_calendar/days_and_dates/page.jsx'
import TimeExpressionsPage from './app/06-time_and_calendar/time_expressions/page.jsx'

// Verbs lessons
import PresentTenseFormsPage from './app/07-verbs/present_tense_forms/page.jsx'

// Directions and Locations lessons
import SpatialRelationshipsPage from './app/08-directions_and_locations/spatial_relationships/page.jsx'
import TravelVocabularyPage from './app/08-directions_and_locations/travel_vocabulary/page.jsx'

// Conversation lessons
import BasicDialoguesPage from './app/09-conversation/basic_dialogues/page.jsx'
import ComplexDialoguesPage from './app/09-conversation/complex_dialogues/page.jsx'
import FamilyConversationsPage from './app/09-conversation/family_conversations/page.jsx'

// Advanced lessons
import AdvancedExercisesPage from './app/10-advanced/advanced_exercises/page.jsx'
import GrammarMasteryPage from './app/10-advanced/grammar_mastery/page.jsx'
import ReadingComprehensionPage from './app/10-advanced/reading_comprehension/page.jsx'
import WritingPracticePage from './app/10-advanced/writing_practice/page.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout><HomePage /></RootLayout>} />
        
        {/* New 14-module structure routes */}
        <Route path="/01-getting-started" element={<RootLayout><GettingStartedPage /></RootLayout>} />
        <Route path="/02-existence-identification" element={<RootLayout><ExistenceIdentificationPage /></RootLayout>} />
        <Route path="/03-location" element={<RootLayout><LocationPage /></RootLayout>} />
        <Route path="/04-actions" element={<RootLayout><ActionsPage /></RootLayout>} />
        <Route path="/05-plurals" element={<RootLayout><PluralsPage /></RootLayout>} />
        <Route path="/06-directions" element={<RootLayout><DirectionsPage /></RootLayout>} />
        <Route path="/07-tool-role" element={<RootLayout><ToolRolePage /></RootLayout>} />
        <Route path="/08-ownership" element={<RootLayout><OwnershipPage /></RootLayout>} />
        <Route path="/09-tenses" element={<RootLayout><TensesPage /></RootLayout>} />
        <Route path="/10-adjectives" element={<RootLayout><AdjectivesPage /></RootLayout>} />
        <Route path="/11-time-numbers" element={<RootLayout><TimeNumbersPage /></RootLayout>} />
        <Route path="/12-complex-sentences" element={<RootLayout><ComplexSentencesPage /></RootLayout>} />
        <Route path="/13-advanced-verbs" element={<RootLayout><AdvancedVerbsPage /></RootLayout>} />
        <Route path="/14-complex-dialogue" element={<RootLayout><ComplexDialoguePage /></RootLayout>} />
        
        {/* 01-getting-started lesson routes */}
        <Route path="/01-getting-started/greetings-identity" element={<RootLayout><GreetingsIdentityPage /></RootLayout>} />
        <Route path="/01-getting-started/neuter-name" element={<RootLayout><NeuterNamePage /></RootLayout>} />
        <Route path="/01-getting-started/masculine-name" element={<RootLayout><MasculineNamePage /></RootLayout>} />
        <Route path="/01-getting-started/feminine-name" element={<RootLayout><FeminineNamePage /></RootLayout>} />
        <Route path="/01-getting-started/who-what" element={<RootLayout><WhoWhatPage /></RootLayout>} />
        <Route path="/01-getting-started/yes-no" element={<RootLayout><YesNoPage /></RootLayout>} />
        <Route path="/01-getting-started/daily-items" element={<RootLayout><DailyItemsPage /></RootLayout>} />
        
        {/* Legacy category pages (keeping for backward compatibility) */}
        <Route path="/01-foundational" element={<RootLayout><FoundationalPage /></RootLayout>} />
        <Route path="/02-pronouns" element={<RootLayout><PronounsPage /></RootLayout>} />
        <Route path="/03-numbers" element={<RootLayout><NumbersPage /></RootLayout>} />
        <Route path="/04-vocabulary" element={<RootLayout><VocabularyPage /></RootLayout>} />
        <Route path="/05-grammar" element={<RootLayout><GrammarPage /></RootLayout>} />
        <Route path="/06-time_and_calendar" element={<RootLayout><TimeAndCalendarPage /></RootLayout>} />
        <Route path="/07-verbs" element={<RootLayout><VerbsPage /></RootLayout>} />
        <Route path="/08-directions_and_locations" element={<RootLayout><DirectionsAndLocationsPage /></RootLayout>} />
        <Route path="/09-conversation" element={<RootLayout><ConversationPage /></RootLayout>} />
        <Route path="/10-advanced" element={<RootLayout><AdvancedPage /></RootLayout>} />
        
        {/* Foundational lessons */}
        <Route path="/01-foundational/basic_conversations" element={<RootLayout><BasicConversationsPage /></RootLayout>} />
        <Route path="/01-foundational/greetings" element={<RootLayout><GreetingsPage /></RootLayout>} />
        <Route path="/01-foundational/introductions" element={<RootLayout><IntroductionsPage /></RootLayout>} />
        
        {/* Pronouns lessons */}
        <Route path="/02-pronouns/basic_pronouns" element={<RootLayout><BasicPronounsPage /></RootLayout>} />
        <Route path="/02-pronouns/demonstrative_pronouns" element={<RootLayout><DemonstrativePronounsPage /></RootLayout>} />
        <Route path="/02-pronouns/interrogative_pronouns" element={<RootLayout><InterrogativePronounsPage /></RootLayout>} />
        <Route path="/02-pronouns/pronoun_transformations" element={<RootLayout><PronounTransformationsPage /></RootLayout>} />
        
        {/* Numbers lessons */}
        <Route path="/03-numbers/basic_numbers" element={<RootLayout><BasicNumbersPage /></RootLayout>} />
        <Route path="/03-numbers/counting_questions" element={<RootLayout><CountingQuestionsPage /></RootLayout>} />
        <Route path="/03-numbers/number_practice" element={<RootLayout><NumberPracticePage /></RootLayout>} />
        
        {/* Vocabulary lessons */}
        <Route path="/04-vocabulary/household_objects" element={<RootLayout><HouseholdObjectsPage /></RootLayout>} />
        <Route path="/04-vocabulary/kitchen_utensils" element={<RootLayout><KitchenUtensilsPage /></RootLayout>} />
        <Route path="/04-vocabulary/workplace_vocabulary" element={<RootLayout><WorkplaceVocabularyPage /></RootLayout>} />
        
        {/* Grammar lessons */}
        <Route path="/05-grammar/plural_forms" element={<RootLayout><PluralFormsPage /></RootLayout>} />
        <Route path="/05-grammar/plural_forms_advanced" element={<RootLayout><PluralFormsAdvancedPage /></RootLayout>} />
        
        {/* Time and Calendar lessons */}
        <Route path="/06-time_and_calendar/daily_routines" element={<RootLayout><DailyRoutinesPage /></RootLayout>} />
        <Route path="/06-time_and_calendar/days_and_dates" element={<RootLayout><DaysAndDatesPage /></RootLayout>} />
        <Route path="/06-time_and_calendar/time_expressions" element={<RootLayout><TimeExpressionsPage /></RootLayout>} />
        
        {/* Verbs lessons */}
        <Route path="/07-verbs/present_tense_forms" element={<RootLayout><PresentTenseFormsPage /></RootLayout>} />
        
        {/* Directions and Locations lessons */}
        <Route path="/08-directions_and_locations/spatial_relationships" element={<RootLayout><SpatialRelationshipsPage /></RootLayout>} />
        <Route path="/08-directions_and_locations/travel_vocabulary" element={<RootLayout><TravelVocabularyPage /></RootLayout>} />
        
        {/* Conversation lessons */}
        <Route path="/09-conversation/basic_dialogues" element={<RootLayout><BasicDialoguesPage /></RootLayout>} />
        <Route path="/09-conversation/complex_dialogues" element={<RootLayout><ComplexDialoguesPage /></RootLayout>} />
        <Route path="/09-conversation/family_conversations" element={<RootLayout><FamilyConversationsPage /></RootLayout>} />
        
        {/* Advanced lessons */}
        <Route path="/10-advanced/advanced_exercises" element={<RootLayout><AdvancedExercisesPage /></RootLayout>} />
        <Route path="/10-advanced/grammar_mastery" element={<RootLayout><GrammarMasteryPage /></RootLayout>} />
        <Route path="/10-advanced/reading_comprehension" element={<RootLayout><ReadingComprehensionPage /></RootLayout>} />
        <Route path="/10-advanced/writing_practice" element={<RootLayout><WritingPracticePage /></RootLayout>} />
      </Routes>
    </Router>
  )
}

export default App
