// boolean
let isDone: boolean = false;

// number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// string
let color: string = 'blue';
let fullName: string = `Alice Bob`;
let age: number = 30;
let sentence: string = `Hello, my name is ${fullName}.\n\nI'll be ${age + 1} years old next month.`;

// array
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];
let list3: string[] = ['apple', 'banana', 'orange'];
let list4: Array<string> = ['apple', 'banana', 'orange'];

// number array
let numbers: number[] = [1, 2, 3, 4, 5];

// string array
let fruits: string[] = ['apple', 'banana', 'orange'];

let exampleMix: [number, string, number] = [0, 'shaked', 5]
let exampleMix2: [number, string, number?] = [0, 'chen'] // this is a optional parameter
// object
let Car: { year: number, brand: string } = {
  brand: 'toyota',
  year: 30
};

export {};
