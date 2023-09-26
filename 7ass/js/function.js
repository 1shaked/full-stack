// function
// function nameOfFunction () { /* out code */}
function print() {
    console.log('hey');
}

function printTo100() {
    let count = 0;
    while (count < 100) {
        console.log(count);
        count = count + 1;
    }
}

print()
print()


function sum3Numbers(num1 , num2 , num3) {
    console.log(num1 + num2 + num3)
}

// create a function that get the user name and print it to the screen

function greet(name) {
    console.log('hey ' + name)
}


// create a function that get an array and print the sum of all the numbers
function sumArray(arr) {
    let count = 0;
    debugger;
    let sumOfArray = 0;
    while (count < arr.length) {
        sumOfArray = sumOfArray + arr[count];
        count = count + 1;
    }
    console.log(arr)
    return sumOfArray;
}

let sumArr = sumArray([10 , 20 ,53, 37]) // sumArr = 120
let totalBankBalance = sumArray([50 , -10, 30 , -20]) //  totalBankBalance = 50


// create the function, but did not use it
function printFullName(firstName, lastName) {
    console.log(firstName, lastName)
}

printFullName('hps', 'nf')// print hps nf

function arrMulti(arr) {
    let index = 0;
    let multi = 1;

    while (index < arr.length) {
        multi = multi * arr[index];
        index = index + 1
    }
    console.log(multi);
    return multi;
}


// create a factorial function
// 5! = 5 * 4 * 3 * 2 , 3! = 3 * 2
function factorial(num){
    let sum = 1; 
    while(num> 0){
        sum = sum * num 
        num = num - 1;
    }
    console.log(sum)
}