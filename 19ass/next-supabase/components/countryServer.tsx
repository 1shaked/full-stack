import supabase from "@/utils/supabaseConnection";
import { revalidatePath } from "next/cache";

interface CountryProps {
    name: string;
    id: number;  
}
export default function CountryComponentServer(props: CountryProps) {
    

    async function deleteCountry(formData: FormData) {
        'use server'
        const {id } = Object.fromEntries(formData.entries());
        console.log(id);
        await supabase.from("countries").delete().match({ id });
        revalidatePath('/countries');
    }
    return (
        <form action={deleteCountry}>
            <li>{props.name}</li>
            <input readOnly type="text" hidden value={props.id} name="id" />
            <button type="submit">DELETE</button>
        </form>
    );
}