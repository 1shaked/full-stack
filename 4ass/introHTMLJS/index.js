
// const age = prompt("What is your age?");
// if (age >= 18) {
//     alert("You are an adult");
// } else {
//     alert("You are too young");
// }



const arr = JSON.parse(prompt("What is your array?")); // ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
if (arr.length >= 5) {
    alert("There is to many elements");
} else {
    alert("not enough elements");
}
console.log(arr);