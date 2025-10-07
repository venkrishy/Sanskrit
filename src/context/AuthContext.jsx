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
      // Check if user exists and has passkeys registered
      const { data: { user: existingUser } } = await supabase.auth.getUser()
      
      if (existingUser && existingUser.email === email) {
        // User exists, try passkey authentication
        const credential = await navigator.credentials.get({
          publicKey: {
            challenge: new Uint8Array(32),
            allowCredentials: [],
            userVerification: 'required',
            timeout: 60000,
          }
        })
        
        if (credential) {
          // For now, create a session with the existing user
          // In a full implementation, you'd verify the passkey signature
          return { user: existingUser }
        }
      }
      
      throw new Error('No passkey found for this email')
    } catch (error) {
      console.error('Passkey authentication failed:', error)
      throw error
    }
  }

  const registerPasskey = async (email) => {
    if (!email) throw new Error('Email required for passkey registration')
    
    try {
      const credential = await navigator.credentials.create({
        publicKey: {
          challenge: new Uint8Array(32),
          rp: {
            name: "Samskritavak",
            id: window.location.hostname,
          },
          user: {
            id: new TextEncoder().encode(email),
            name: email,
            displayName: email,
          },
          pubKeyCredParams: [
            { type: "public-key", alg: -7 }, // ES256
            { type: "public-key", alg: -257 }, // RS256
          ],
          authenticatorSelection: {
            authenticatorAttachment: "platform",
            userVerification: "required",
          },
          timeout: 60000,
        }
      })
      
      if (credential) {
        // In a full implementation, you'd store the passkey credential
        // For now, we'll just return success
        return { success: true, credential }
      }
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


