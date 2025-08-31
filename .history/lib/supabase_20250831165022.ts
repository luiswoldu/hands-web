import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey) 

// Add this to your code temporarily to debug
console.log("SUPABASE URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);
console.log("SUPABASE KEY TYPE:", typeof process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
console.log("SUPABASE KEY LENGTH:", process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.length);