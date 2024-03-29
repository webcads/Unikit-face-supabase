
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient('https://xyzcompany.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxieXZ6eXNvY29zeWpwdmVjd3dtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTExMTQyMTksImV4cCI6MjAyNjY5MDIxOX0.dz2KgedU7R3n0sdW4nHbmW7DBvUBN8tzAVD37j_mLj4')