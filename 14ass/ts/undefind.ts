let example: string; // uninitialized variable, value is undefined
console.log(example); // logs undefined to the console

// let person = {
//   firstName: 'Alice',
//   lastName: 'Smith'
// };
// console.log(person.middleName); // property doesn't exist, logs undefined to the console

function sayHello(name: string): void {
  console.log(`Hello, ${name}!`);
}
let result = sayHello('Alice'); // function doesn't return a value, result is undefined
console.log(result); // logs undefined to the console

export {};
