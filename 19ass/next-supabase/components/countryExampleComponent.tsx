

import '@/app/styles/countryComponent.css'
import supabase from '@/utils/supabaseConnection';
import { revalidatePath } from "next/cache";

interface CountryInter {
    id: number;
    name: string;
}
export default function  CountryExampleComponent(props : CountryInter) {
    async function deleteCountry () {
        'use server';
        console.log('delete country');
        console.log(props);
        
        await supabase.from('countries').delete().match({ id: props.id });
        revalidatePath('/exampleCountry');

    }

    return <form className='country' action={deleteCountry}>
        <li key={props.id}>{props.name}</li>
        <button type='submit' className='btnDel'>delete</button>
        <hr />
    </form>
}