import ServerAddTodo from "@/components/lesson57/ServerAddTodo";
import ClientAddTodo from "@/components/lesson57/clientSideTodo";
import { Database } from "@/types/supabase";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";



export default async function Page() {
    const supabase = createServerComponentClient<Database>({cookies});
    const {data , error} = await supabase.from('todos').select();
    const {data: { user }}= await supabase.auth.getUser();
    if (data == null || error != null) {
        return <h2>ERROR {error.code}</h2>
    }

    return <main>
        <section>
            {user == null ? 'not logged in' : user.email + ' '+ user.id}
        </section>
        <hr />
        <section>
            {data.map(todo => <>
                <div key={todo.id}>
                    <h1>{todo.title}</h1>
                    <h3>{todo.user_id}</h3>
                </div>
                <hr />
            </>)}
        </section>
        <section>
            <ServerAddTodo />
            <ClientAddTodo />
        </section>
    </main>
}