

const isNumberEven = (num) => {
    return num % 2 == 0;
}



let arr = [0, 1 , 2, 3, 4, 5, 6, 7, 8, 9];

// arr.map((currentValue) => {
//     return currentValue * 2;
// })

// if the number is bigger than 4 and odd
arr.findIndex(function(value) {
    return value > 4 && value % 2 == 1;
});
arr.findIndex((value) => {
    return value > 4 && value % 2 == 1;
});


