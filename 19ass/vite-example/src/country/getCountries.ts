import { getCities } from '../city/getCities';
import { supabase } from '../supabaseClient';
import { deleteCountry } from './deleteCountry';
async function getCountries() {
    // get all the countries and display them
    const res = await supabase.from('countries').select();
    console.log(res)
    if (res.data != null) {
        for (const country of res.data) {
            drawCountry(country?.id, country?.name)
        }
    }
    // const { data, error } = await supabase.from('countries').select();
    // console.log({ data, error });
}

function drawCountry (id: number, country: string) {
    console.log(id)
    const countryList = document.getElementById('countryList');
    if (countryList == null) return ;
    // this is the country container that contain the country
    const divCountryContainer = document.createElement('div');
    // this is the text content (country name)
    const textDivContainer = document.createElement('span');
    textDivContainer.textContent = country;
    divCountryContainer.appendChild(textDivContainer);
    // create the action container
    const divActionContainer = document.createElement('div');
    const actionEditBtn = document.createElement('button');
    actionEditBtn.textContent = 'edit';
    actionEditBtn.classList.add('editBtn')
    const actionDeleteBtn = document.createElement('button');
    actionDeleteBtn.textContent = 'delete';
    actionDeleteBtn.classList.add('deleteBtn')

    // add the edit and delete button to the divActionContainer
    divActionContainer.appendChild(actionEditBtn);
    divActionContainer.appendChild(actionDeleteBtn);
    // adding to the divCountryContainer the  divActionContainer 
    divCountryContainer.appendChild(divActionContainer);
    divCountryContainer.classList.add('countryContainer')
    countryList.appendChild(divCountryContainer);
    // add event listeners to the buttons
    actionEditBtn.addEventListener('click', () => {
        console.log(`The id is ${id} and country name is ${country}`);
    });
    actionDeleteBtn.addEventListener('click', () => {
        debugger;
        console.log(`The DELETE id is ${id} and country name is ${country}`);
        deleteCountry(id, divCountryContainer);

    });
    textDivContainer.addEventListener('click', () => {
        console.log(`SELECT ALL CITIES ${id} , ${country}`)
        getCities(id, country);
    });
}

export {getCountries , drawCountry}