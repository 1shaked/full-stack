let writablePerson = {
    name: "Person McPersonface",
    age: 42,
};
let readonlyPerson = Object.freeze(writablePerson);
console.log(readonlyPerson.age); // prints '42'
writablePerson.age++;
console.log(readonlyPerson.age); // still prints '42' because the object is now immutable
export {};
//# sourceMappingURL=preventReadOnlyChangeOption.js.map