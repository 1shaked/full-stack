let writablePerson = {
    name: "Person !",
    age: 42,
};
// works
let readonlyPerson = writablePerson;
console.log(readonlyPerson.age); // prints '42'
writablePerson.age++;
console.log(readonlyPerson.age); // prints '43'
export {};
//# sourceMappingURL=readOnlyChange.js.map