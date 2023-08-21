'use client'

import { useFetchCountries } from "./hookFetchCountries56";


export default function CountryListClientOutsideHook56() {
    const {fetchState , countries}  = useFetchCountries();
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