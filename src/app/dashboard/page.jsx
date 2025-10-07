import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import PasskeyPrompt from '@/components/auth/PasskeyPrompt'

export default function DashboardPage() {
  const [showPasskeyPrompt, setShowPasskeyPrompt] = useState(false)

  useEffect(() => {
    // Show passkey prompt for new users (first time login)
    // In a real app, you'd check if user has registered passkeys
    const hasSeenPrompt = localStorage.getItem('passkey-prompt-dismissed')
    if (!hasSeenPrompt) {
      setShowPasskeyPrompt(true)
    }
  }, [])

  const handleDismissPrompt = () => {
    setShowPasskeyPrompt(false)
    localStorage.setItem('passkey-prompt-dismissed', 'true')
  }

  return (
    <div className="">
      <Navbar onLoginClick={() => {}} />
      <div className="mx-auto max-w-6xl px-4 py-8 space-y-6">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-lg border bg-white p-4">
            <h2 className="font-medium mb-2">Student Dashboard</h2>
            <p className="text-sm text-gray-600">Progress, streaks, upcoming lessons (placeholder).</p>
          </div>
          <div className="rounded-lg border bg-white p-4">
            <h2 className="font-medium mb-2">Account</h2>
            <p className="text-sm text-gray-600">Profile info and settings (placeholder).</p>
          </div>
          <div className="rounded-lg border bg-white p-4">
            <h2 className="font-medium mb-2">Recent Activity</h2>
            <p className="text-sm text-gray-600">Your latest practice and scores (placeholder).</p>
          </div>
        </div>
      </div>
      {showPasskeyPrompt && (
        <PasskeyPrompt onDismiss={handleDismissPrompt} />
      )}
    </div>
  )
}


