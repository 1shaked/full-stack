'use client'

import supabase from "@/utils/supabaseConnection"
import { useEffect, useState } from "react"
import { CountryInter } from "@/types/CountryInter";

export default function CountryExampleClientComponent() {
    // this function how to use client data to crud the todo
    const [isLoading, setIsLoading] = useState(true)
    const [countries, setCountries] = useState<CountryInter[]>([]);
    const [country, setCountry] = useState('');
    async function createNewCountry() {
        setIsLoading(true)
        const {data, error} = await supabase.from('countries').insert([{ name: country }]).select()
        //fetchPosts()
        if (data != null) {
            setCountries([...countries, data[0]])
        }
        setIsLoading(false)

    }
    const fetchPosts = async () => {
        const { data } = await supabase.from('countries').select();
        if (data != null) {
            setCountries(data)
        }
        setIsLoading(false)
    }
    useEffect(() => {
        fetchPosts()
    }, [])

    return isLoading ? <p>Loading</p> : <pre>
        <div>
            {countries.map(country => <div key={country.id}>{country.name}</div>)}
        </div>
        <section>
            <input type="text" onChange={(e) => setCountry(e.target.value)} />
            <button onClick={createNewCountry}>add</button>
        </section>
    </pre>
}