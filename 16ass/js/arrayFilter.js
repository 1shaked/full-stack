let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
debugger;
let newArr = arr.filter((value) => {
    return (value) % 2.5 == 0;
});
console.log(newArr);
let arrStr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
let newArrStr = arrStr.filter((value, index) => {
    return (value == 'd' || value == 'g' || value == 'j') && index % 2 == 0;
});
console.log(newArrStr);
//# sourceMappingURL=arrayFilter.js.map