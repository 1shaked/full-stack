// import supabase from "@/utils/supabaseConnection";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from 'next/headers'

export default async function Page(){ 
    const supabase = createServerComponentClient({ cookies })
    const {data } = await supabase.from('todos').select();
    async function toggleDone(formData: FormData) {
        "use server"
        console.log("toggle done");
        const { id , done} = Object.fromEntries(formData.entries());
        console.log(id);
        console.log(done);
        console.log(typeof done);
        // update the record in the database
        const db = createServerComponentClient({ cookies });
        await db.from('todos').update({ done: !(done == 'true') }).match({ id });
        revalidatePath('/todos');
    }
    return <>
        <div>
            <h1>Page</h1>
            <section>
                {data && data.map((todo) => {
                    return <form key={todo.id}  action={toggleDone} className="flex justify-between">
                        <p>{todo.title} </p>
                        <br />
                        <input type="hidden" name="id" value={todo.id} readOnly />
                        <input type="hidden" name="done" value={todo.done} readOnly />
                        <button type="submit">{todo.done ? 'done' : 'not done'}</button>
                    </form>
                })}
            </section>
        </div>
    </>;
}