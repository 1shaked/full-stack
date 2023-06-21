import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = 
createClient('https://vqaomehdggmojgvqohma.supabase.co', 
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZxYW9tZWhkZ2dtb2pndnFvaG1hIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODcxODcxMzUsImV4cCI6MjAwMjc2MzEzNX0.SgCMlRoxm4p6CpwMXXpczePWv1_mmFwOjWYrOjoH020')


async function getData() {
    const { data, error } = await supabase
    .from('countries')
    .select();
    // console.log(data);
    console.log(error);
    const listCountry = document.getElementById('listCountry');
    if (data != null) {
        for(let index = 0; index < data.length; index++) {
            console.log(data[index])
            const li = document.createElement('li');
            li.textContent = data[index].name;
            li.id = data[index].id;
            // data = [ { id : 1 , name: canada }]
            // data[0].name
            listCountry?.appendChild(li);

        }
    }
}

getData();

const submitBtn = document.getElementById('submit');

submitBtn?.addEventListener('click', async () => {
    const countryName = document.getElementById('countryName') as (HTMLInputElement | null);
    console.log(countryName?.value)
    await supabase
    .from('countries')
    .insert({ name: countryName?.value });
});

// const title = document.getElementById('title')  ;
// console.log(title);
// if (title != null) {
//     title.textContent = 'David'
// }
// const btn = document.getElementById('btn');

// //btn?.addEventListener('')

// btn?.addEventListener('click', () => {
//     alert('anon function has run');
// });