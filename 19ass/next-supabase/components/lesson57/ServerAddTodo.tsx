import { Database } from "@/types/supabase";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

// 'use client'
export default function ServerAddTodo () {
    async function addTodo(formData: FormData) {
        'use server'
        const { title } = Object.fromEntries(formData.entries());
        
        const supabase = createServerComponentClient<Database>({ cookies });
        supabase.from('todos').insert({ title: title.toString()});
        revalidatePath('/todoHW57');
    }
    return <>
        <h2>TODO ADD</h2>
        <form action={addTodo}>
            <label htmlFor="title">title</label>
            <input type="text" name="title" />
            <button type="submit">
                Click me
            </button>
        </form>
    </>
}