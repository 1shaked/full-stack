let arr = ['a' , 'b' , 'c' , 'd', -1  , -2]

for (const item of arr) {
    console.log(item)
}

let index = 0;
while (index < arr.length) {
    console.log(arr[index])
    index = index + 1 // index++;
}

for (let index = 0; index < arr.length; index++) {
    console.log(arr[index])
}