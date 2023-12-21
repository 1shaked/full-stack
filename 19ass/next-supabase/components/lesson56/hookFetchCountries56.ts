import { CountryInter } from "@/types/CountryInter";
import { StateType } from "@/types/StateType";
import supabase from "@/utils/supabaseConnection";
import { useEffect, useState } from "react"

// type TableToFetchType = 'countries' | 'todos' | 'cities'
export function useFetchCountries() {
    const [countries, setCountries] = useState<CountryInter[]>([]);
    const [fetchState, setFetchState] = useState<StateType>('done');
    // useDebugValue('start')
    async function fetchCountries() {
        setFetchState('loading');
        // fetch the countries from supabase
        const { data, error } = await supabase.from('countries').select();
        if (data != null && error == null) {
            setCountries(data);
            setFetchState('done');
            // useDebugValue('the fetch done loading with x amount of data')
        } else {
            // log the error
            setFetchState('error');
            // useDebugValue('the fetch had an error')

        }
    }
    useEffect(() => {
        // fetch the countries from supabase
        fetchCountries();
    }, []);
    return {
        countries,
        fetchState
    }
}
