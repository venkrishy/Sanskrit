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
import MasculineNamePage from './app/01-getting-started/masculine-name/page.jsx'
import FeminineNamePage from './app/01-getting-started/feminine-name/page.jsx'
import WhoWhatPage from './app/01-getting-started/who-what/page.jsx'
import YesNoPage from './app/01-getting-started/yes-no/page.jsx'
import DailyItemsPage from './app/01-getting-started/daily-items/page.jsx'
import DashboardPage from './app/dashboard/page.jsx'



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout><HomePage /></RootLayout>} />
        <Route path="/dashboard" element={<RootLayout><DashboardPage /></RootLayout>} />
        
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
        <Route path="/01-getting-started/masculine-name" element={<RootLayout><MasculineNamePage /></RootLayout>} />
        <Route path="/01-getting-started/feminine-name" element={<RootLayout><FeminineNamePage /></RootLayout>} />
        <Route path="/01-getting-started/who-what" element={<RootLayout><WhoWhatPage /></RootLayout>} />
        <Route path="/01-getting-started/yes-no" element={<RootLayout><YesNoPage /></RootLayout>} />
        <Route path="/01-getting-started/daily-items" element={<RootLayout><DailyItemsPage /></RootLayout>} />
        
        
      </Routes>
    </Router>
  )
}

export default App
