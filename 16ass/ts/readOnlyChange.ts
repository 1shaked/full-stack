interface Person {
    name: string;
    age: number;
  }
   
interface ReadonlyPerson {
    readonly name: string;
    readonly age: number;
}
   
  let writablePerson: Person = {
    name: "Person !",
    age: 42,
  };
   
  // works
  let readonlyPerson: ReadonlyPerson = writablePerson;
   
  console.log(readonlyPerson.age); // prints '42'
  writablePerson.age++;
  console.log(readonlyPerson.age); // prints '43'

  export {};