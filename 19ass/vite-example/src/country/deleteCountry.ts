import { removeAllChildNodes } from '../removeAllChildNodes';
import { supabase } from '../supabaseClient';
async function deleteCountry(idNumber: number, divContainer : HTMLDivElement) {
    // delete a country
    const { error } = await supabase.from('countries').delete().eq('id', idNumber);
    if (error) {
        alert('Error deleting country');
        return ;
    }
    // delete the country from the list of countries
    divContainer.remove();
    const citiesList = document.getElementById('citiesList');
    if (citiesList === null) return ;
    removeAllChildNodes(citiesList);
}

export { deleteCountry } 