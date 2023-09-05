import supabase from "@/utils/supabaseConnection";
import { CountryServerExampleLocal } from "./CountryServerLocal";
import AddCountryLocal from "./addCountryServerLocal";

export const revalidate = 0
export default async function Page() {
    const {data} = await supabase.from('countries').select();
    if (data == null) {
        return <div> error .. </div>
    }
    return <main>
        <h2>countries</h2>
        {data.map((country, index) => <div key={index}>
            <hr />
            <CountryServerExampleLocal id={country.id} name={country.name} />

        </div>)}
        <hr />
        <AddCountryLocal />
    </main>
}

