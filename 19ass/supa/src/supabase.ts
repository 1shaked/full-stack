import { createClient } from '@supabase/supabase-js'
// import {config} from 'dotenv'
// config();
// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? ''
// const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''
const supabaseUrl = 'https://chkmdyycksndmpvkmbnx.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNoa21keXlja3NuZG1wdmttYm54Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODExMjU1OTEsImV4cCI6MTk5NjcwMTU5MX0.s3DtWf5vV2WQnwIBvPQbWJ9pvbb_O6pZu9IRuQPBoOk'
export const supabase = createClient(supabaseUrl, supabaseKey)