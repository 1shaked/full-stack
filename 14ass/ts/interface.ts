interface Person {
  firstName: string;
  lastName: string;
  age: number;
  sayHello(): void;
}


let person: Person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    sayHello: () => console.log(`Hello, my name is ${person.firstName} ${person.lastName}.`)
  };
  
person.sayHello(); // logs "Hello, my name is John Doe." to the console

/*
In this example, 
we define a person object that conforms to the Person interface. 
We can use the person object to call the sayHello method, 
which logs a greeting to the console.

Interfaces can be very useful in TypeScript 
for defining contracts that your code must conform to. 
They can help catch errors at compile-time, provide better tooling and editor support,
and make your code more robust and maintainable.
*/


export {};
