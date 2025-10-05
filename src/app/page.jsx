import { useState } from 'react'
import Navbar from '@/components/Navbar'
import LoginModal from '@/components/auth/LoginModal'

export default function HomePage() {
  const [loginOpen, setLoginOpen] = useState(false)
  return (
    <div className="">
      <Navbar onLoginClick={() => setLoginOpen(true)} />
      <div className="mx-auto max-w-6xl px-4 py-10">
        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
              The educational Platform to learn spoken sanskrit.
            </h1>
            <p className="mt-4 text-gray-600">
              Join the 100+ students that use Samskritavak to improve their mastery over Spoken Sanskrit.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={() => setLoginOpen(true)}
                className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-5 py-3 text-white hover:bg-black"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="h-5 w-5" aria-hidden>
                  <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303C33.676 31.659 29.223 35 24 35 16.82 35 11 29.18 11 22S16.82 9 24 9c3.17 0 6.066 1.203 8.262 3.162l5.657-5.657C34.676 2.676 29.676 1 24 1 10.745 1 0 11.745 0 25s10.745 24 24 24 24-10.745 24-24c0-1.627-.174-3.214-.389-4.917z"/>
                  <path fill="#FF3D00" d="M6.306 14.691l6.571 4.817C14.26 15.108 18.76 12 24 12c3.17 0 6.066 1.203 8.262 3.162l5.657-5.657C34.676 5.676 29.676 4 24 4 15.319 4 7.846 8.717 6.306 14.691z"/>
                  <path fill="#4CAF50" d="M24 46c5.166 0 9.86-1.977 13.393-5.197l-6.19-5.238C29.145 37.488 26.7 38 24 38c-5.196 0-9.632-3.305-11.24-7.943l-6.51 5.02C8.737 41.74 15.86 46 24 46z"/>
                  <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-1.091 3.159-3.48 5.651-6.503 7.014.001-.001 6.19 5.238 6.19 5.238C37.43 38.162 40 32.5 40 26c0-2.033-.222-3.984-.389-5.917z"/>
                </svg>
                Continue with Google
              </button>
              <button
                onClick={() => setLoginOpen(true)}
                className="text-sm text-gray-600 underline"
              >
                Use Passkey
              </button>
            </div>
          </div>
          {/* Image placeholder card */}
          <div className="border rounded-xl bg-white aspect-[4/3] w-full flex items-center justify-center text-gray-400">
            Image placeholder
          </div>
        </div>

        {/* Course Categories - keep existing boxes below hero */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-blue-600">01 - Hello! Getting Started</h2>
          <p className="text-gray-600 mb-4">Greetings, identity, and basic introductions</p>
          <a href="/01-getting-started" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
            Start Learning 
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-green-600">02 - Naming Things & Asking 'Is It There?'</h2>
          <p className="text-gray-600 mb-4">Existence, identification, and demonstratives</p>
          <a href="/02-existence-identification" className="inline-flex items-center text-green-600 hover:text-green-800 font-medium">
            Start Learning 
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-purple-600">03 - Where Is It? Describing Location</h2>
          <p className="text-gray-600 mb-4">Spatial concepts and location vocabulary</p>
          <a href="/03-location" className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium">
            Start Learning 
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-orange-600">04 - Action! What People Are Doing</h2>
          <p className="text-gray-600 mb-4">Simple actions and present tense verbs</p>
          <a href="/04-actions" className="inline-flex items-center text-orange-600 hover:text-orange-800 font-medium">
            Start Learning 
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-red-600">05 - Groups and Plurals</h2>
          <p className="text-gray-600 mb-4">Dealing with many - plural forms and concepts</p>
          <a href="/05-plurals" className="inline-flex items-center text-red-600 hover:text-red-800 font-medium">
            Start Learning 
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-indigo-600">06 - Going To and Using Directions</h2>
          <p className="text-gray-600 mb-4">Direction, motion, and accusative case</p>
          <a href="/06-directions" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium">
            Start Learning 
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-pink-600">07 - The Tool Role (Instrumental Case)</h2>
          <p className="text-gray-600 mb-4">Doing things with... the instrumental case</p>
          <a href="/07-tool-role" className="inline-flex items-center text-pink-600 hover:text-pink-800 font-medium">
            Start Learning 
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-teal-600">08 - Ownership and Possessives</h2>
          <p className="text-gray-600 mb-4">Ownership, belonging, and genitive case</p>
          <a href="/08-ownership" className="inline-flex items-center text-teal-600 hover:text-teal-800 font-medium">
            Start Learning 
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-cyan-600">09 - Tenses (Beyond Present)</h2>
          <p className="text-gray-600 mb-4">Time travel - past and future tenses</p>
          <a href="/09-tenses" className="inline-flex items-center text-cyan-600 hover:text-cyan-800 font-medium">
            Start Learning 
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-yellow-600">10 - Adjectives, Quality, and Comparison</h2>
          <p className="text-gray-600 mb-4">Describing things and making comparisons</p>
          <a href="/10-adjectives" className="inline-flex items-center text-yellow-600 hover:text-yellow-800 font-medium">
            Start Learning 
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-emerald-600">11 - Time and Numbers</h2>
          <p className="text-gray-600 mb-4">Telling time and counting</p>
          <a href="/11-time-numbers" className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium">
            Start Learning 
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-violet-600">12 - Complex Sentences and Connectors</h2>
          <p className="text-gray-600 mb-4">Joining ideas and complex structures</p>
          <a href="/12-complex-sentences" className="inline-flex items-center text-violet-600 hover:text-violet-800 font-medium">
            Start Learning 
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-rose-600">13 - Advanced Verbal Concepts</h2>
          <p className="text-gray-600 mb-4">Verbal modifiers and purpose expressions</p>
          <a href="/13-advanced-verbs" className="inline-flex items-center text-rose-600 hover:text-rose-800 font-medium">
            Start Learning 
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-slate-600">14 - Complex Dialogue and Vocabulary Expansion</h2>
          <p className="text-gray-600 mb-4">Putting it all together</p>
          <a href="/14-complex-dialogue" className="inline-flex items-center text-slate-600 hover:text-slate-800 font-medium">
            Start Learning 
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
