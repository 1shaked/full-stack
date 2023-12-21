import { selectedCountry } from '../country/getCountries';
import { supabase } from '../supabaseClient';
import { drawCity } from './getCities';

async function createCityFunction() {
    // get the city name from input
    const addCityForCountry = document.getElementById('addCityForCountry') as HTMLInputElement | null;
    if (addCityForCountry == null) return ;
    // addCityForCountry.value
    // get the current country selected 
    console.log(selectedCountry)
    // upload the data to supabase 
    const { data, error } = await supabase
        .from('cities')
        .insert([
            { city_name: addCityForCountry.value, country_id: selectedCountry  },
        ])
        .select();

    console.log(data, error);
    // add the element to the screen
    if (data == null || data.length == 0) {
        return ;
    }
    drawCity(data[0].city_name, data[0].id);

    addCityForCountry.value = '';
    addCityForCountry.focus();
}
export {createCityFunction};