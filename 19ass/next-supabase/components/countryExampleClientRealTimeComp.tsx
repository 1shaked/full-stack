'use client'

import supabase from "@/utils/supabaseConnection"
import { useEffect, useState } from "react"
import { CountryInter } from "@/types/CountryInter";
import { RealtimeChannel, RealtimePostgresChangesPayload } from "@supabase/supabase-js";
import '@/app/styles/countryComponent.css'
export default function CountryExampleClientRealTimeComponent() {
    // this function how to use client data to crud the todo
    const [isLoading, setIsLoading] = useState(true)
    const [countries, setCountries] = useState<CountryInter[]>([]);
    let channel: RealtimeChannel = supabase.channel('channel-supabase-country').on('postgres_changes'
    ,{event: '*', schema: 'public', table: 'countries'
    // , filter: 'id=1'
    },
    (payload) => {
        updateFunction(payload)
    }).subscribe();

    const fetchPosts = async () => {

        const { data } = await supabase.from('countries').select();
        if (data != null) {
            setCountries(data)
        }
        setIsLoading(false)
    }
    function updateFunction(payload: RealtimePostgresChangesPayload<{
        [key: string]: any;
    }>) {
        setIsLoading(true)
        console.log('Change received!', payload)
            // fetchPosts()
            console.log(countries)
            if (payload.eventType === 'INSERT') {
                // insert the data
                payload.new.id = payload.new.id.toString();
                setCountries([...countries, {id: payload.new.id, name: payload.new.name}])
            }
            else if (payload.eventType === 'UPDATE') {
                // update the data
                setCountries([...countries.map(country => {
                    if (country.id === payload.new.id) {
                        country.name = payload.new.name
                    }
                    return country
                })])
            }
            else if (payload.eventType === 'DELETE') {
                // delete the data
                setCountries([...countries.filter(country => country.id !== payload.old.id)])
            }
            setIsLoading(false)
    }
    useEffect(() => {
        fetchPosts()
    }, [])

    async function deleteCounty(id: number) {
        console.log('delete country');
        
        await supabase.from('countries').delete().match({ id: id });

    }
    return isLoading ? <p>Loading</p> : <pre>
        <div>
            <h2>client real time</h2>
            {countries.map(country => <div key={country.id}>
                <p className="country">
                    {country.name}
                <button className="btnDel" onClick={() => deleteCounty(country.id)}>DELETE</button>
                </p>    
            </div>)}
        </div>
        <section>

        </section>
    </pre>
}