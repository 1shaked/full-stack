import supabase from "@/utils/supabaseConnection";
import { revalidatePath } from "next/cache";

export default function CreateCountryServerComponent() {
    async function createCountry(formData: FormData) {
        'use server'
        const { name } = Object.fromEntries(formData.entries());
        console.log(name);
        await supabase.from("countries").insert({ name: name.toString() });
        // get current user
        console.log(await supabase.auth.getUser());
        revalidatePath('/countries');
    }
    return (
        <div>
            <h1>Create Country</h1>
            <section>
                <form action={createCountry}>
                    <input type="text" name="name" id="name" />
                    <button type="submit">Create</button>
                </form>
            </section>
        </div>
    );
}