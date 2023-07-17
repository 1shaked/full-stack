import { supabase } from './supabaseClient';

// get city for a country
async function getCity(id: number) {
    const {data, error, status} = await supabase.from('cities').select().eq('country_id', id);
    console.log(error);
    console.log(data);
    console.log(status);
}
async function createCity(id: number, name: string) {
    const {data, error, status} = await supabase.from('cities').insert({city_name: name, country_id: id}).select();
    console.log(error);
    console.log(data);
    console.log(status);
}
async function updateCity(id: number, name: string) {
    const {data, error, status} = await supabase.from('cities').update({city_name: name}).eq('id', id).select();
    console.log(error);
    console.log(data);
    console.log(status);
}
async function deleteCity(id: number) {
    const {data, error, status} = await supabase.from('cities').delete().eq('id', id).select();
    console.log(error);
    console.log(data);
    console.log(status);
}
  
export {
    deleteCity, updateCity, createCity, getCity
}