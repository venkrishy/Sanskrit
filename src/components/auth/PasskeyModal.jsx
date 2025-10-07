import { useState } from 'react'
import { useAuth } from '@/context/AuthContext'

export default function PasskeyModal({ open, onClose }) {
  const [email, setEmail] = useState('')
  const [mode, setMode] = useState('signin') // 'signin' or 'register'
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { signInWithPasskey, registerPasskey } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return

    setLoading(true)
    setError('')

    try {
      if (mode === 'signin') {
        await signInWithPasskey(email)
        onClose()
      } else {
        await registerPasskey(email)
        setError('Passkey registered successfully! You can now use it to sign in.')
        setMode('signin')
      }
    } catch (err) {
      setError(err.message || 'Passkey operation failed')
    } finally {
      setLoading(false)
    }
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative z-10 w-full max-w-sm rounded-lg bg-white p-6 shadow-lg">
        <div className="mb-4 text-center">
          <h2 className="text-lg font-semibold">
            {mode === 'signin' ? 'Sign in with Passkey' : 'Register Passkey'}
          </h2>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
              autoComplete="username webauthn"
            />
          </div>
          
          {error && (
            <div className="text-sm text-red-600 bg-red-50 p-2 rounded">
              {error}
            </div>
          )}
          
          <div className="flex gap-2">
            <button
              type="submit"
              disabled={loading || !email}
              className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? 'Processing...' : (mode === 'signin' ? 'Sign in' : 'Register')}
            </button>
            <button
              type="button"
              onClick={() => setMode(mode === 'signin' ? 'register' : 'signin')}
              className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
            >
              {mode === 'signin' ? 'Register' : 'Sign in'}
            </button>
          </div>
        </form>
        
        <div className="mt-4 text-center">
          <button onClick={onClose} className="text-xs text-gray-500 hover:text-gray-700">
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
