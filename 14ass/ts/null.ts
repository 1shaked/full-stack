let middleName: string | null = null;
console.log(middleName); // logs null to the console

let PersonObj = {
  firstName: 'Alice',
  lastName: 'Smith',
  middleName: null
};
console.log(PersonObj.middleName); // property is set to null, logs null to the console

function findPerson(name: string): { firstName: string, lastName: string } | null {
  // implementation omitted for brevity
  return null;
}
let r = findPerson('Bob'); // function returns null to indicate no matching person found
console.log(r); // logs null to the console


export {};
