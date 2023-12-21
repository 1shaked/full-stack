interface Person {
    name: string;
    age: number;
  }
   
  interface ReadonlyPerson {
    readonly name: string;
    readonly age: number;
  }
   
  let writablePerson: Person = {
    name: "Person McPersonface",
    age: 42,
  };
   
  let readonlyPerson: ReadonlyPerson = Object.freeze(writablePerson);
   
  console.log(readonlyPerson.age); // prints '42'
  writablePerson.age++;
  console.log(readonlyPerson.age); // still prints '42' because the object is now immutable

  export {}