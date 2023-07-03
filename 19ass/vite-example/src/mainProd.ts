import './style.css'
import { supabase } from './supabaseClient';
let currentId = 0;

async function getData() {
  const {data, error, status} = await supabase.from('countries').select();
  console.log(error);
  if (status === 200 && data != null) {
    console.log(data);
    for (const row of data) {
      const div = document.createElement('div');
      // row.name + ' ------ ' + row.id
      const span = document.createElement('span');
      span.textContent = `${row.name} **** ${row.id}`;
      // div.textContent = `${row.name} **** ${row.id}`;
      div.id = `id-${row.id}`;
      const actionDiv = document.createElement('div');
      const editBtn = document.createElement('button');
      editBtn.classList.add('editBtn');
      editBtn.textContent = 'edit';
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'delete';
      deleteBtn.classList.add('deleteBtn');
      deleteBtn.addEventListener('click', () => {
        deleteCountry(row.id);
      });
      editBtn.addEventListener('click', () => {
        countryList?.classList.toggle('hidden');
        dialogEdit.show();
        // make all the page disabled

        currentId = row.id;
      });
      actionDiv.appendChild(editBtn);
      actionDiv.appendChild(deleteBtn);
      div.appendChild(span);
      div.appendChild(actionDiv);
      countryList?.appendChild(div);
    }
  }
}
async function createCountry(e: Event) {
  e.preventDefault();
  debugger;
  let countryNameValue = countryName?.value;
  if (countryNameValue.length != 0) {
    const { error, data } = await supabase.from('countries').insert({ name: countryNameValue }).select();
    console.log(error);
    // adding a new country to the list of countries
    if (data != null) {
      const div = document.createElement('div');
      div.textContent = `${countryNameValue} **** ${data[0].id}`;
      div.id = data[0].id;
      div.addEventListener('click', () => {
        dialogEdit.show();
        currentId = data[0].id;
        
      });
      countryList?.appendChild(div);
    }

  }
  
}

async function updateCountry(id: number, name: string) {
  const { error } = await supabase
  .from('countries')
  .update({ name: name })
  .eq('id', id);
  console.log(error);
}

async function deleteCountry(id: number) {
  const { error } = await supabase
  .from('countries')
  .delete()
  .eq('id', id);
  // find the country with the id and delete it
  if (error != null) {
    alert(error.message);
    return;
  } 
  if (countryList == null) return ;
  const country = countryList.querySelector(`#id-${id}`);
  if (country != null) {
    alert(`country deleted ${id} and name ${country.textContent}`);
    country.remove();
  }

}

// createCountry();
getData();
// updateCountry();
const countryList = document.getElementById('countryList');
const countryName = document.getElementById('countryName') as HTMLInputElement;
const saveBtn = document.getElementById('saveBtn');
const countryNameDialog = document.getElementById('countryNameDialog') as HTMLInputElement;
const saveBtnDialog = document.getElementById('saveBtnDialog');
const dialogEdit = document.getElementById('dialogEdit') as HTMLDialogElement ;
const closeBtnDialog = document.getElementById('closeBtnDialog');
saveBtn?.addEventListener('click', createCountry);
closeBtnDialog?.addEventListener('click', () => {
  countryList?.classList.toggle('hidden');
  dialogEdit.close();

})


saveBtnDialog?.addEventListener('click', () => {
  // countryNameDialog.value
  updateCountry(currentId, countryNameDialog.value);
  countryList?.classList.toggle('hidden');
  dialogEdit.close();

});


