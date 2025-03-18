import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://uvluxhonljpmzdezzept.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2bHV4aG9ubGpwbXpkZXp6ZXB0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA3NjU4MTYsImV4cCI6MjA1NjM0MTgxNn0.AeEG5xaSLEIAbSd2GIHI9GxLrZiI4unJerprG2Ql4qY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey) 

// Add this to your code temporarily to debug
console.log("SUPABASE URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);
console.log("SUPABASE KEY TYPE:", typeof process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
console.log("SUPABASE KEY LENGTH:", process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.length);