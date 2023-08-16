import CountryExampleComponent from "@/components/countryExampleComponent";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Index() {
  const supabase = createServerComponentClient({ cookies });

  const { data: countries } = await supabase.from("countries").select();

  return (
    <ul className="my-auto text-foreground">
      {countries?.map((country) => (
        <CountryExampleComponent id={country.id}  name={country.name} key={country.id} />
      ))}
    </ul>
  );
}