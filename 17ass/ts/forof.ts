// create a for of loop
let arr = ['a', 'b', 'c'];
for (let item of arr) {
    console.log(item);
    
} // output: a b c

for (let index in arr) {
    console.log(index);
    
} // output: 0 1 2

for (let index = 0; index < arr.length; index++){
    console.log(arr[index])
}

arr.forEach((item, index) => {
    console.log(item, index);
    // arr[index] = item + index; // don't do this
}); // a0 , b1 , c2

arr = arr.map((item, index) => {
    return item + index;
})

// for of when to use 
// when you want to iterate over an array and get the actual value

// for in when to use
// when you want to iterate over an object and get the key or when you want to iterate over an array and get the index


let example = [
    { name: 'John', age: 30, hobbies: ['reading', 'coding'] },
    { name: 'Shaked', age: 20, hobbies: ['sky diving'] },
]

for (let person of example) {
    for (let hobby of person.hobbies) {
        console.log(hobby);
    } 
}