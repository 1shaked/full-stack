
'use client'

import supabase from "@/utils/supabaseConnection"
import { useState } from "react"

// 'use client'
export default function ClientAddTodo () {
    const [title, setTitle] = useState('')
    async function addTodo() {
        const {data, error} = await supabase.from('todos').insert({
            title: title,
            user_id: (await supabase.auth.getUser()).data.user?.id,

        }).select();
        console.log({data, error})
    }
    return <>
        <h2>TODO ADD</h2>
        <section>
            <label htmlFor="title">title</label>
            <input type="text" name="title" onChange={(e) => setTitle(e.target.value)} />
            <button onClick={addTodo}>
                Click me
            </button>
        </section>
    </>
}