import { supabase } from "../supabaseClient";

async function deleteCity(idNumber: number, cityRowElement: HTMLElement) {
    const { error } = await supabase.from('cities').delete().eq('id', idNumber);
    if (error) {
        alert(error);
        return;
    }
    cityRowElement.remove()
}

export {deleteCity}