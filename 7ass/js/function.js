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

