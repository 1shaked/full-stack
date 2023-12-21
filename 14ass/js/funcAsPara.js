function printName(name, age, printer) {
    console.log('printName called');
    printer(name, age);
}
function printName2(name, age) {
    console.log('printName2 called');
    console.log(name, age);
}
function printName3(name, age) {
    console.log('printName3 called');
    console.log(name, age);
}
printName('John', 30, printName3);
function example() {
}
document.getElementById('').addEventListener('click', example);
//# sourceMappingURL=funcAsPara.js.map