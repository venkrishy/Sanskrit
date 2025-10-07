import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    supabase.auth.getSession().then(({ data }) => {
      if (!mounted) return
      setSession(data.session ?? null)
      setLoading(false)
    })
    const { data: sub } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession)
    })
    return () => {
      mounted = false
      sub.subscription?.unsubscribe()
    }
  }, [])

  const user = session?.user ?? null

  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: window.location.origin + '/dashboard' } })
  }

  const signInWithPasskey = async (email) => {
    if (!email) throw new Error('Email required for passkey authentication')
    
    try {
      const { data, error } = await supabase.auth.signInWithWebAuthn({
        email,
        options: {
          redirectTo: window.location.origin + '/dashboard'
        }
      })
      
      if (error) throw error
      return data
    } catch (error) {
      console.error('Passkey authentication failed:', error)
      throw error
    }
  }

  const registerPasskey = async (email) => {
    if (!email) throw new Error('Email required for passkey registration')
    
    try {
      const { data, error } = await supabase.auth.createPasskey({
        email,
        options: {
          redirectTo: window.location.origin + '/dashboard'
        }
      })
      
      if (error) throw error
      return data
    } catch (error) {
      console.error('Passkey registration failed:', error)
      throw error
    }
  }

  const signOut = async () => {
    await supabase.auth.signOut()
    window.location.href = '/'
  }

  const value = useMemo(() => ({ session, user, loading, signInWithGoogle, signInWithPasskey, registerPasskey, signOut }), [session, user, loading])
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}


