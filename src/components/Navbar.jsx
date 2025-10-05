import { useAuth } from '@/context/AuthContext'

export default function Navbar({ onLoginClick, showDashboardLink = true }) {
  let user, signOut
  try {
    const ctx = useAuth()
    user = ctx.user
    signOut = ctx.signOut
  } catch {
    user = null
  }
  return (
    <nav className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="/" className="text-lg font-semibold text-gray-900">Samskritavak</a>
        <div className="flex items-center gap-2">
          {showDashboardLink && !user && (
            <a href="/dashboard" className="hidden sm:inline-flex px-3 py-2 text-sm text-gray-700 hover:text-gray-900">Dashboard</a>
          )}
          {!user ? (
            <button
              onClick={onLoginClick}
              className="inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-black"
            >
              Log in
            </button>
          ) : (
            <div className="flex items-center gap-3">
              <a href="/dashboard" className="hidden sm:inline-flex px-3 py-2 text-sm text-gray-700 hover:text-gray-900">Dashboard</a>
              <button onClick={signOut} className="text-sm text-gray-700 hover:text-gray-900">Sign out</button>
              <img src={user?.user_metadata?.avatar_url} alt="avatar" className="h-8 w-8 rounded-full border" />
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}


