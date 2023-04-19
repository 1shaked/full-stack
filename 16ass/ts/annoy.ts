/*
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function isNumberFive(value: number) {
    console.log(value);
  return value == 5;
}
debugger;
let result = arr.findIndex(isNumberFive);

let res2 = arr.findIndex(function (value) {
    console.log(value);
    
    return value == 5;
});
console.log(isNumberFive(4))
console.log(isNumberFive(8))
console.log(isNumberFive(5))

console.log(result);
 */
const bored = document.getElementById("bored");
// function multiply(el) {
//     const valueString = el.textContent;
//     const value = parseInt(valueString);
//     el.textContent = value * 2;
// }
debugger;
// for (let index = 0; index < bored.children.length; index++) {
    
//     const element = bored.children[index];
//     console.log(element);
//     element.addEventListener("click", function () {
//         debugger;
//         const valueString = element.textContent;
//         const value = parseInt(valueString);
//         element.textContent = String(value * 2);
//         // element.textContent = (value * 2) + '';
//     })
    
// }

for (let index = 0; index < bored.children.length; index++) {
    
    const element = bored.children[index];
    console.log(element);
    element.addEventListener("click", () => {
        debugger;
        const valueString = element.textContent;
        const value = parseInt(valueString);
        element.textContent = String(value * 2);
        // element.textContent = (value * 2) + '';
    })
    
}
