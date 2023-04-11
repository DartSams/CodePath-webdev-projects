import {createClient} from "@supabase/supabase-js"

// let url = "https://qojjkrsotqfidloaqqif.supabase.co"
// let apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFvamprcnNvdHFmaWRsb2FxcWlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODExNzk5NjQsImV4cCI6MTk5Njc1NTk2NH0.wtAjnu5g_rGDezDNjOtBW50gWcJOO23nJpstVmUmhrc"
// export const supabase = createClient(
//     "https://qojjkrsotqfidloaqqif.supabase.co",
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFvamprcnNvdHFmaWRsb2FxcWlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODExNzk5NjQsImV4cCI6MTk5Njc1NTk2NH0.wtAjnu5g_rGDezDNjOtBW50gWcJOO23nJpstVmUmhrc"
// )

const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFvamprcnNvdHFmaWRsb2FxcWlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODExNzk5NjQsImV4cCI6MTk5Njc1NTk2NH0.wtAjnu5g_rGDezDNjOtBW50gWcJOO23nJpstVmUmhrc'
const SUPABASE_URL = "https://qojjkrsotqfidloaqqif.supabase.co"
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);