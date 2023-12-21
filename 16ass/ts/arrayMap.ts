const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
debugger;
const newArr = arr.map((value) => {
    console.log(value);
    return Math.pow(value, 2.5)
})

console.log(newArr);

let arrStr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']

let newArrStr = arrStr.map((value, index) => {
    return value + ' --- ' + index;
})

console.log(newArrStr);


function multiply(value: number, index: number): number {
    return value * (index + 1);
}

const arr2 = arr.map(multiply)
const arr2New = arr.map((value, index) => {
    return value * (index + 1);
})

export {};