import { removeAllChildNodes } from '../removeAllChildNodes';
import { supabase } from '../supabaseClient';
import { deleteCity } from './deleteCity';
async function getCities (idCountry: number, countryName: string) {
    const countryTitle = document.getElementById('countryTitle');
    if (countryTitle?.textContent) {
        countryTitle.textContent = countryName;
    }
    
    const res = await supabase.from('cities').select().eq('country_id', idCountry); 
    if (res.data == null) return ;
    console.log(res.data);
    const citiesList = document.getElementById('citiesList');
    if (citiesList) {
        removeAllChildNodes(citiesList)
    }
    for (const city of res.data) {
        drawCity(city.city_name, city.id);
    }
}
function drawCity(cityName: string, id: number) {
    const citiesList = document.getElementById('citiesList');
    const divCityRow = document.createElement('div');
    const cityNameSpan = document.createElement('span');
    cityNameSpan.textContent = cityName;
    const actionDivContainer = document.createElement('div');
    const editButton = document.createElement('button');
    editButton.textContent = 'edit'
    editButton.classList.add('editBtn')
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'delete'
    deleteButton.classList.add('deleteBtn')
    // adding the button the the actionDivContainer
    actionDivContainer.appendChild(editButton);
    actionDivContainer.appendChild(deleteButton);
    // adding the actionDivContainer to the
    divCityRow.appendChild(cityNameSpan); 
    divCityRow.appendChild(actionDivContainer);
    // adding the  divCityRow to the citiesList 
    citiesList?.appendChild(divCityRow);

    deleteButton.addEventListener("click", () => {
        deleteCity(id, divCityRow);
    });
}

export {getCities}