import './style.css'
// import { supabase } from './supabaseClient';
import {getCountries} from './country/getCountries'
import { createCountry } from './country/createCountry';

const addCountryButton = document.getElementById('addCountryButton');

addCountryButton?.addEventListener('click', createCountry);
getCountries();


