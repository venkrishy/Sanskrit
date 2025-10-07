import { useState } from 'react'
import { useAuth } from '@/context/AuthContext'

export default function PasskeyPrompt({ onDismiss }) {
  const [loading, setLoading] = useState(false)
  const { registerPasskey } = useAuth()

  const handleRegister = async () => {
    setLoading(true)
    try {
      // Get user email from the current session
      const { user } = useAuth()
      const userEmail = user?.email || 'user@example.com'
      await registerPasskey(userEmail)
      onDismiss()
    } catch (error) {
      console.error('Passkey registration failed:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onDismiss} />
      <div className="relative z-10 w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mb-4">
            <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Set up Passkey for faster sign-in
          </h3>
          <p className="text-sm text-gray-600 mb-6">
            You can use your device's built-in security (fingerprint, face ID, or PIN) to sign in quickly and securely.
          </p>
          
          <div className="flex gap-3">
            <button
              onClick={handleRegister}
              disabled={loading}
              className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? 'Setting up...' : 'Set up Passkey'}
            </button>
            <button
              onClick={onDismiss}
              className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
            >
              Maybe later
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
