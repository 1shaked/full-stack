import supabase from "@/utils/supabaseConnection";
import { revalidatePath } from "next/cache";

export default function AddCountryLocal () {
    async function AddCountry(formData: FormData) {
        'use server'
        const name = formData.get('name') as string; 
        await supabase.from('countries').insert([{
            name: name,
        }]);
        revalidatePath('/CountryExampleServer')
    }
    return <form action={AddCountry}>
        <h1>add country</h1>
        <input type="text" name="name" />
        <button type="submit">add country</button>
    </form>
}