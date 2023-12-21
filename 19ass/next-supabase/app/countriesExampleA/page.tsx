import supabase from "@/utils/supabaseConnection"
import CountryExample from "./coutry";
// import {CountryExampleServer} from "./countryServer";
import ServerActionDelete from "./ServerTest";
import CountryExampleAdd from "./addCountry";
export const revalidate = 0

export default async function Page() {
    const { data } = await supabase.from('countries').select();

    if (data == null) {
        return <main>Empty page error</main>
    }
    
    return <main>
        <h1>country page !</h1>
        {data.map((country, index) => <CountryExample key={index} country={country} />)}
        <hr />
        {data.map((country, index) => <ServerActionDelete key={index} country={country} />)}
        <hr />
        <CountryExampleAdd />
    </main>
}