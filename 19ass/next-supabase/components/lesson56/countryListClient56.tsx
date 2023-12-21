'use client'

import { CountryInter } from "@/types/CountryInter";
import { StateType } from "@/types/StateType";
import supabase from "@/utils/supabaseConnection";
import { useEffect, useState } from "react"


export default function CountryListClient56() {
    const [countries, setCountries] = useState<CountryInter[]>([]);
    const [fetchState, setFetchState] = useState<StateType>('done');
    async function fetchCountries() {
        setFetchState('loading');
        // fetch the countries from supabase
        const { data, error } = await supabase.from('countries').select();
        if (data != null && error == null) {
            setCountries(data);
            setFetchState('done')
        } else {
            // log the error
            setFetchState('error')
        }
    }
    useEffect(() => {
        // fetch the countries from supabase
        fetchCountries();
    }, []);
    return <>
        {
        fetchState === 'loading' ? 
        <div>loading we are</div> : 
        fetchState == 'done' ?
            <>
                <h2>Client side country list</h2>
                <section>
                    {countries.map((country) => <div key={country.id}>{country.name}</div>)}
                </section>
            </> 
            : <h1>error</h1>
        } 

    </>

}