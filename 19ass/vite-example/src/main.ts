import './style.css'
// import { supabase } from './supabaseClient';
import {getCountries} from './country/getCountries'
import { createCountry } from './country/createCountry';
import { createCityFunction } from './city/createCity';

const addCountryButton = document.getElementById('addCountryButton');

addCountryButton?.addEventListener('click', createCountry);
getCountries();


const addCityButton = document.getElementById('addCityButton');

addCityButton?.addEventListener('click', createCityFunction);


