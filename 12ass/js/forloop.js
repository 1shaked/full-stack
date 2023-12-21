

let count = 0;
while (count < 10) {
    console.log(count);
    count = count + 1;
}

for (let j = 0; j < 10; j = j + 1) {
    console.log(j);
}

let arr = [
    [1 , 2 , 4],
    [7 , 5 , 5, 8],
    [8 , 10 , 12]
];



let array = [
    1 , 2 , 4, 7 , 5 , 5, 8 , 10 , 12
];
let sum = 0
for (let index = 0; index < array.length; index = index + 1) {
    const element = array[index];
    sum = sum + element;
}

console.log(sum);


function sumArray(array) {
    let sum = 0;
    debugger;
    for (let index = 0; index < array.length; index = index + 1) {
        for (let jIndex = 0; jIndex < array[index].length; jIndex = jIndex + 1) {
            let element = array[index][jIndex];
            sum = sum + element;
        }
    }
    return sum;
}


// [ [4 , 2] , [2 , 3] ]

// 4 * 2 = 8 , 2 * 3 = 6 , 8 + 6 = 14



// [ [4 , 2] , [2 , 3 , 1] , [1 , 2 , 2] , [-1, 2, -2] ]



let a = [
    [ [0 , 1, 2] , 3 ], [1 , 2 , [5 , 7, [8 , 4]]]
]