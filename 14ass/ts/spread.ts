// Spreading an array into another array
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combinedArr = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// Spreading an array into a function call
let numbers = [1, 2, 3];
let max = Math.max(...numbers); // 3

// Spreading an object into another object
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let combinedObj = { ...obj1, ...obj2 }; // { a: 1, b: 2, c: 3, d: 4 }