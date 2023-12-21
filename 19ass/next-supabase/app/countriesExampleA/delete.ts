import supabase from "@/utils/supabaseConnection";

export async function deleteCountry(id: number) {
    'use server'
    console.log(id)
    await supabase.from('countries').delete().match({ id: id });
    // revalidatePath('/countriesExampleA')
}