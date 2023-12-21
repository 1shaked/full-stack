'use client'

import supabase from "@/utils/supabaseConnection"

// import supabase from '@/utils/supabaseConnection'
// import { Auth } from '@supabase/auth-ui-react'
// import { ThemeSupa } from '@supabase/auth-ui-shared'

import { useRouter } from "next/navigation";

export default function AuthComponent() {
    const router = useRouter();

    async function googleSignIn() {
        const data = await supabase.auth.signInWithOAuth({
            provider: 'google',
        });
        console.log(data)
        router.refresh();
        // redirect('/');
    }
    return <>

        <h2>auth</h2>
        <button onClick={googleSignIn}>google sign in</button>
        {/* <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            providers={['google']}
            redirectTo='/'
        /> */}
    </>
} 