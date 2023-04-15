

function helloWorld() {
    console.log("Hello World");
}

function square(x: number) {
    return x * x;
}

function sum(x: number, y: number) {
    return x + y;
}

sum(10, 20);    
sum(50, 440);    

function printText(text: string | number) {
    console.log(text);
}

printText(10);
printText('hey');

function printDetails(name: string| number , age: number) {
    console.log(name);
    console.log(age);
}
printDetails('shaked', 30);
printDetails(40, 20);