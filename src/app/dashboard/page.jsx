import { useState } from 'react'
import { useAuth } from '@/context/AuthContext'
import ContinuePage from '@/components/ContinuePage'

export default function DashboardPage() {
  const { user, session } = (() => { try { return useAuth() } catch { return {} } })()
  const [activeTab, setActiveTab] = useState('continue')

  const renderContent = () => {
    switch (activeTab) {
      case 'continue':
        return <ContinuePage />
      case 'dashboard':
        return (
          <div className="mx-auto max-w-6xl px-4 py-8 space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">Student Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Learning Progress</h3>
                    <p className="text-sm text-gray-600">Track your Sanskrit journey</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Lessons Completed</span>
                    <span className="font-medium">12/24</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Current Streak</h3>
                    <p className="text-sm text-gray-600">Keep it going!</p>
                  </div>
                </div>
                <div className="text-2xl font-bold text-green-600">7 days</div>
                <p className="text-sm text-gray-500">Daily practice streak</p>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Time Spent</h3>
                    <p className="text-sm text-gray-600">This week</p>
                  </div>
                </div>
                <div className="text-2xl font-bold text-purple-600">2h 45m</div>
                <p className="text-sm text-gray-500">Total study time</p>
              </div>
            </div>
          </div>
        )
      case 'account':
        return (
          <div className="mx-auto max-w-6xl px-4 py-8 space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">Account</h1>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Profile Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    value={user?.user_metadata?.name || ''} 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    value={user?.email || ''} 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    readOnly
                  />
                </div>
                {session && (
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-medium text-gray-900 mb-2">Session Information</h3>
                    <p className="text-sm text-gray-600">
                      Session expires: {new Date(session.expires_at * 1000).toLocaleString()}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )
      case 'activity':
        return (
          <div className="mx-auto max-w-6xl px-4 py-8 space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">Recent Activity</h1>
            <div className="space-y-4">
              {[
                { action: 'Completed lesson', lesson: 'Basic Greetings', time: '2 hours ago', score: 85 },
                { action: 'Started lesson', lesson: 'Personal Pronouns', time: '1 day ago', score: null },
                { action: 'Completed quiz', lesson: 'Numbers 1-10', time: '3 days ago', score: 92 },
                { action: 'Started lesson', lesson: 'Present Tense Verbs', time: '1 week ago', score: null }
              ].map((activity, index) => (
                <div key={index} className="bg-white rounded-lg border border-gray-200 p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{activity.action}</p>
                      <p className="text-sm text-gray-600">{activity.lesson}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">{activity.time}</p>
                    {activity.score && (
                      <p className="text-sm font-medium text-green-600">{activity.score}%</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      default:
        return <ContinuePage />
    }
  }

  return (
    <div className="">{renderContent()}</div>
  )
}