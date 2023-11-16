const arr = ['apple', 5, 'MSI', true]
//             0      1    2      3
// arr.length = 4

// while loop
let index = 0
while (index < arr.length) {
    console.log(`The value at ${index} is ${arr[index]}`)
    index = index + 1
}

// for loop
for (const item of arr) {
    console.log(`The value is ${item}`)
}
