import { createClient } from '@supabase/supabase-js';

const url =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  process.env.REACT_APP_SUPABASE_URL ||
  '';

const anon =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  process.env.REACT_APP_SUPABASE_ANON_KEY ||
  '';

// Debug logging
if (!url || !anon) {
  console.warn('⚠️ Supabase credentials missing:', { url: !!url, anon: !!anon });
} else {
  console.log('✅ Supabase client initialized with URL:', url);
}

export const supabase = createClient(url, anon);
export default supabase;
