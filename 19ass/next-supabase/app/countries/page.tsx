import CountryComponent from "@/components/country";
import CountryComponentServer from "@/components/countryServer";
import CreateCountryComponent from "@/components/createCountryClient";
import CreateCountryServerComponent from "@/components/createCountryServer";
import { Database } from "@/types/supabase";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Index() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data } = await supabase.from("countries").select();
 
  return (
    <ul className="my-auto">
      {data?.map((country) => (
        <CountryComponent key={country.id} name={country.name} id={country.id} />
      ))}
      <hr />
      {data?.map((country) => (
        <CountryComponentServer key={country.id} name={country.name} id={country.id} />
      ))}
      <hr />
      <h2>Client</h2>
      <CreateCountryComponent />
      <hr />
      <h2>Server</h2>
      <CreateCountryServerComponent />
    </ul>
  );
}