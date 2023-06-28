import './style.css'
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://vqaomehdggmojgvqohma.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZxYW9tZWhkZ2dtb2pndnFvaG1hIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODcxODcxMzUsImV4cCI6MjAwMjc2MzEzNX0.SgCMlRoxm4p6CpwMXXpczePWv1_mmFwOjWYrOjoH020'
const supabase = createClient(supabaseUrl, supabaseKey);
let currentId = 0;

class HumanClass {
  name: string | undefined;
  age: number  | undefined;
  id: string   | undefined;

  // constructor
  // constructor (newName: string) {
  //   debugger;
  //   this.name = newName;
  //   // alert('wake up in a ')
  //   console.log(`HUMAN NAME IS ${this.name}`);
  // }

  printName () {
    console.log(`printing name ${this.name}`);
  }

  printAge() {
    
    console.log(`printing age ${this.age}`);
    debugger;
  }

   addAge() {
    debugger;
      if (this.age !== undefined) {
        this.age = this.age + 1;
      }
   }

}
debugger;
const humanClassVariable = new HumanClass();
const h2 = new HumanClass();
humanClassVariable.name = 'h1';
h2.name = 'h2';
h2.age = 5
humanClassVariable.printName();
humanClassVariable.age = 0;
h2.printAge()
h2.addAge()
h2.printAge()
humanClassVariable.printAge();
humanClassVariable.addAge();
humanClassVariable.printAge();

// humanClassVariable.name = 'HUMAN1';
// humanClassVariable.
console.log(humanClassVariable)

async function getData() {
  const {data, error, status} = await supabase.from('countries').select();
  console.log(error);
  if (status === 200 && data != null) {
    console.log(data);
    for (const row of data) {
      const div = document.createElement('div');
      // row.name + ' ------ ' + row.id
      div.textContent = `${row.name} **** ${row.id}`;
      div.id = row.id;
      div.addEventListener('click', () => {
        dialogEdit.show();
        currentId = row.id;
      });
      countryList?.appendChild(div);
    }
  }
}
async function createCountry() {
  debugger;
  let countryNameValue = countryName?.value;
  if (countryNameValue.length != 0) {
    const { error } = await supabase.from('countries').insert({ name: countryNameValue });
    console.log(error);

  }
  
}

async function updateCountry(id: number, name: string) {
  const { error } = await supabase
  .from('countries')
  .update({ name: name })
  .eq('id', id)
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
saveBtn?.addEventListener('click', createCountry);


saveBtnDialog?.addEventListener('click', () => {
  // countryNameDialog.value
  updateCountry(currentId, countryNameDialog.value);
  dialogEdit.close()
});