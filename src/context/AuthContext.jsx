import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    
    // Get initial session (this will restore from localStorage if available)
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!mounted) return
      setSession(session)
      setLoading(false)
    })

    // Listen for auth state changes (login, logout, token refresh)
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (!mounted) return
        
        console.log('Auth state changed:', event, session?.user?.email)
        setSession(session)
        setLoading(false)
        
        // Handle successful login
        if (event === 'SIGNED_IN' && session) {
          console.log('User signed in:', session.user.email)
        }
        
        // Handle logout
        if (event === 'SIGNED_OUT') {
          console.log('User signed out')
        }
        
        // Handle token refresh
        if (event === 'TOKEN_REFRESHED') {
          console.log('Token refreshed for:', session?.user?.email)
        }
      }
    )

    return () => {
      mounted = false
      subscription?.unsubscribe()
    }
  }, [])

  const user = session?.user ?? null

  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: window.location.origin + '/dashboard' } })
  }


  const signOut = async () => {
    await supabase.auth.signOut()
    window.location.href = '/'
  }

  const value = useMemo(() => ({ session, user, loading, signInWithGoogle, signOut }), [session, user, loading])
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}


