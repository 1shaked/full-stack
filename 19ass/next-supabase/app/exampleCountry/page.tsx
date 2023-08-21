import CountryExampleComponent from "@/components/countryExampleComponent";
import CountryListClient56 from "@/components/lesson56/countryListClient56";
import CountryListClientOutsideHook56 from "@/components/lesson56/countryListClientOutsidehook56";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Index() {
  const supabase = createServerComponentClient({ cookies });

  const { data: countries } = await supabase.from("countries").select();

  return (
   <>
      <CountryListClient56 />
      <hr />
      <CountryListClientOutsideHook56 />
      <hr />
    <ul className="my-auto text-foreground">
      {/* {countries?.map((country) => (
        <CountryExampleComponent id={country.id}  name={country.name} key={country.id} />
      ))} */}
    </ul>
    <hr />
    </>
  );
}