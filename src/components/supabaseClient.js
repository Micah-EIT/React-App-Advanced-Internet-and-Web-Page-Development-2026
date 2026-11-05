import { createClient } from "@supabase/supabase-js"

const supabaseURL = "https://bxtubzkynbjqfutiqznz.supabase.co"
const supabaseKey = "sb_publishable_fpKW2NU8vjKXkk6ACalu0A_d4QwlUFp"

export const supabase = createClient(supabaseURL, supabaseKey);