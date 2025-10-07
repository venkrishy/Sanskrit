import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    // Enable persistent sessions - user stays logged in until explicit logout
    persistSession: true,
    // Auto refresh tokens to maintain session
    autoRefreshToken: true,
    // Detect session in URL (for OAuth redirects)
    detectSessionInUrl: true,
    // Store session in localStorage for persistence across browser sessions
    storage: window.localStorage,
    // Flow type for OAuth
    flowType: 'pkce'
  }
})


