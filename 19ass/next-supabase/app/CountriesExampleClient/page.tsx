'use client'

import supabase from "@/utils/supabaseConnection";
import { useEffect, useState } from "react"
interface CountryInter {
    name: string,
    id: number
}


export default function Page() {
    const [data , setData] = useState<CountryInter[]>([]);
    const [loading, setLoading] = useState(false);
    const [text, setText] = useState('');
    async function fetchData() {
        setLoading(true)
        const {data} = await supabase.from('countries').select()
        if (data != null) {
            setData(data)
        }
        setLoading(false)

    }
    async function deleteCountry(id: number) {
        const { error } = await supabase.from('countries').delete().eq('id', id);
        console.log(error)
        fetchData();
    }
    async function createCountry() {
        const { data: newCountry, error } = await supabase.from('countries')
        .insert([{ name: text, },]).select();
        if (newCountry != null) {
            console.log(newCountry)
            setData([...data, ...newCountry])
        }
            
    }

    useEffect(() => {
        fetchData();
    }, [])
    
    return <main>
        <h1>country page !</h1>
        {loading ? <div>Loading...</div> : data.map((country, index) => <div key={index}>
            {country.name} - 
            {country.id} - 
            <button onClick={() => deleteCountry(country.id)}>DEL</button>
        </div>)}
        <h2>client side</h2>
        <input type="text" onChange={(e) => setText(e.target.value)} />
        <button onClick={createCountry}>add</button>
    </main>
}