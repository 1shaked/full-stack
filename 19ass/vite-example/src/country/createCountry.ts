import { supabase } from "../supabaseClient";
import { drawCountry } from "./getCountries";

async function createCountry() {
    // create a country
    const addCountryTextField = document.getElementById('addCountryTextField') as (HTMLInputElement | null);
    if (addCountryTextField == null) return;
    if (addCountryTextField.value === '') {
        alert('please enter country name')
        return ;
    }
    // 
    const { data, error } = await supabase
    .from('countries')
    .insert(
        [
            { name:  addCountryTextField.value },
        ]
    )
    .select();
    if (data == null || error != null ) {
        alert('there was an error creating the country');
        return ;
    }
    drawCountry(data[0].id, data[0].name);
}


export { createCountry };