'use client'
import { Database } from "@/types/supabase";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

interface CountryProps {
    name: string;
    id: number;  
}
export default function CountryComponent(props: CountryProps) {
    const router = useRouter();
    const supabase = createClientComponentClient<Database>()

    async function deleteCountry() {
        console.log("delete country");
        console.log(props);
        console.log(props.name);
        alert("delete country " + props.name);
        // delete this record from the database
        // const supabase = createServerComponentClient<Database>();
        await supabase.from("countries").delete().match({ id: props.id });
        router.refresh();
    }
    return (
        <li onClick={deleteCountry}>{props.name}</li>
    );
}