
import supabase from "@/utils/supabaseConnection";
import { revalidatePath } from "next/cache";
// import { deleteCountry } from "./delete";
// import { revalidatePath } from "next/cache";


export default function CountryExampleAdd (){
    
    async function addTodo(formData: FormData) {
        'use server'
        const name = formData.get('name') as string;
        const {data, error, status, statusText} = (await supabase.from('countries').insert([{name: name}]));
        console.log({data, error, status, statusText})
        if (error != null) {
            console.log(error)
        }
        else {
            console.log(data)
        }
        revalidatePath('/countriesExampleA')
    }

    return <form action={addTodo}>
        <h2>create new country</h2>
    <input type="text" name="name" />
    <button type="submit">add</button>
    <hr />
</form>
} 