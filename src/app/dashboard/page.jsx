import { useAuth } from '@/context/AuthContext'
import Navbar from '@/components/Navbar'

export default function DashboardPage() {
  const { user, session } = (() => { try { return useAuth() } catch { return {} } })()

  return (
    <div className="">
      <Navbar onLoginClick={() => {}} />
      <div className="mx-auto max-w-6xl px-4 py-8 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          {user && (
            <div className="flex items-center gap-2 text-sm text-green-600">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Session active - you'll stay logged in</span>
            </div>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-lg border bg-white p-4">
            <h2 className="font-medium mb-2">Student Dashboard</h2>
            <p className="text-sm text-gray-600">Progress, streaks, upcoming lessons (placeholder).</p>
          </div>
          <div className="rounded-lg border bg-white p-4">
            <h2 className="font-medium mb-2">Account</h2>
            <p className="text-sm text-gray-600">Manage your profile and settings (placeholder).</p>
            {session && (
              <div className="mt-2 text-xs text-gray-500">
                Session expires: {new Date(session.expires_at * 1000).toLocaleString()}
              </div>
            )}
          </div>
          <div className="rounded-lg border bg-white p-4">
            <h2 className="font-medium mb-2">Recent Activity</h2>
            <p className="text-sm text-gray-600">Your latest practice and scores (placeholder).</p>
          </div>
        </div>
      </div>
    </div>
  )
}