'use server'

import supabase from "@/utils/supabaseConnection";
import { revalidatePath } from "next/cache";
// import { deleteCountry } from "./delete";
// import { revalidatePath } from "next/cache";
// export const dynamic = 'force-dynamic'


export function CountryExampleServer ({country} : {country: {name: string, id: number}}){
    
    async function deleteCountry() {
        "use server"
        console.log('delete country');
        const {data, error, status, statusText} = (await supabase.from('countries').delete().eq('id', country.id));
        console.log({data, error, status, statusText})
        if (error != null) {
            console.log(error)
        }
        else {
            console.log(data)
        }
        revalidatePath('/countriesExampleA')
    }

    return <form action={deleteCountry}>
    <h2>{country.name}</h2>
    <p>{country.id}</p>
    <button type="submit">DELETE</button>
    <hr />
</form>
} 