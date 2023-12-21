import supabase from "@/utils/supabaseConnection";
import { revalidatePath } from "next/cache";

export function CountryServerExampleLocal(props: {name: string, id: number}) {
    async function DelCountry() {
        'use server'
        const { error } = await supabase.from('countries').delete().eq('id', props.id);
        console.log(error)
        revalidatePath('/CountryExampleServer')
    } 
    return <div>
        {props.name}
        {props.id}
        <form action={DelCountry}>
            <button type="submit">DELETE</button>
        </form>
    </div>
}