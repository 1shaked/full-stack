'use client'

import supabase from "@/utils/supabaseConnection";
import { revalidate } from "./page";
import { revalidatePath } from "next/cache";
// import { deleteCountry } from "./delete";
// import { revalidatePath } from "next/cache";


export default function CountryExample ({country} : {country: {name: string, id: number}}){
    
    async function deleteCountry() {
        console.log('delete country');
        const {data, error, status, statusText} = (await supabase.from('countries').delete().eq('id', country.id));
        console.log({data, error, status, statusText})
        if (error != null) {
            console.log(error)
        }
        else {
            console.log(data)
        }
        // revalidatePath('/countriesExampleA')
    }

    return <div>
    <h2>{country.name}</h2>
    <p>{country.id}</p>
    <button onClick={() => deleteCountry()}>DELETE</button>
    <hr />
</div>
} 