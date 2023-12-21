let middleName = null;
console.log(middleName); // logs null to the console
let PersonObj = {
    firstName: 'Alice',
    lastName: 'Smith',
    middleName: null
};
console.log(PersonObj.middleName); // property is set to null, logs null to the console
function findPerson(name) {
    // implementation omitted for brevity
    return null;
}
let r = findPerson('Bob'); // function returns null to indicate no matching person found
console.log(r); // logs null to the console
export {};
//# sourceMappingURL=null.js.map