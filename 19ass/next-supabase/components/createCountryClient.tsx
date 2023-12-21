'use client'

import { Database } from "@/types/supabase";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateCountryComponent() {
    const router = useRouter();
    const [name, setName] = useState("");
    async function createCountry() {
        console.log("create country " + name);
        const supabase = createClientComponentClient<Database>()
        await supabase.from("countries").insert({ name });
        router.refresh();

    }
    return (
        <div>
            <h1>Create Country</h1>
            <p>
                
                <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)} />
                <button onClick={createCountry}>Create</button>
            </p>
        </div>
    );
}