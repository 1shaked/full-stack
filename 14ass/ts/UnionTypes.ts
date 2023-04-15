// Union type for a function parameter
function padLeft(value: string, padding: string | number) {
    // implementation omitted for brevity
  }
  
// Union type for a variable
let age: number | null = null;
age = 30;

let example: number | string = 'shaked';

console.log(example);

example = 64;
console.log(example);

// let arr: [number| string, string | boolean, number[]?] = [74, 'shaked', [1,2,3,4,5]];
// let arr: [number| string, string | boolean, number[]?] = ['wow', 'shaked'];
// let arr: [number| string, string | boolean, number[]?] = ['wow', false];
let arr: [number| string, string | boolean, number[]?] = [74, 'shaked'];

export {};
