function printName(name: string, age: number, printer: (name: string, age: number) => void): void {
    console.log('printName called');
    
    printer(name, age);
}

function printName2(name: string, age: number) {
    console.log('printName2 called');
    
    console.log(name, age);
}

function printName3(name: string, age: number) {
    console.log('printName3 called');
    
    console.log(name, age);
}

printName('John', 30, printName3);
function example () {

}
document.getElementById('').addEventListener('click', example);