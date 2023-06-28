import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vqaomehdggmojgvqohma.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZxYW9tZWhkZ2dtb2pndnFvaG1hIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODcxODcxMzUsImV4cCI6MjAwMjc2MzEzNX0.SgCMlRoxm4p6CpwMXXpczePWv1_mmFwOjWYrOjoH020'
const supabase = createClient(supabaseUrl, supabaseKey);

async function signUp() {
    const { data, error } = await supabase.auth.signInWithOtp({
        email: 'shaked1hen@email.com',
        options: {
          emailRedirectTo: 'http://localhost:5173/'
        }
      });
      console.log({data , error});
      
}

const signUpBtn = document.getElementById('signUpBtn');
signUpBtn?.addEventListener('click', signUp);