import { createClient, type SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const hasSupabaseEnv = Boolean(supabaseUrl && supabaseAnonKey)

let cachedClient: SupabaseClient | null = null

export function getSupabase(): SupabaseClient {
  if (!hasSupabaseEnv) {
    throw new Error(
      'Supabase environment variables are missing. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.'
    )
  }
  if (!cachedClient) {
    cachedClient = createClient(supabaseUrl as string, supabaseAnonKey as string)
  }
  return cachedClient
}