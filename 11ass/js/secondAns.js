

function isPositive(num) {
    console.log('isPositive');
    return num > 0;
}

function isNumberEven(num) {
    console.log('isNumberEven');
    return num % 2 == 0;
}


function collectiveFunc(f1 , f2 , number) {
    debugger;
    let varOfTheFirstFunc = f1(number);
    let varOfTheSecondFunc = f2(number);
    if (varOfTheFirstFunc && varOfTheSecondFunc ) {
        console.log('the number is positive and even');
    }
    else {
        console.log('The function is not');
    }
}
function collectiveFunc2(f1 , f2 , number) {
    debugger; // f1 = false 
    if (f1(number) && f2(number) ) {
        console.log('the number is positive and even');
    }
    else {
        console.log('The function is not');
    }
}

function collectiveFunc3(f1 , f2 , number) {
    debugger; // f1 = false 
    if (f1(number) || f2(number) ) {
        console.log('the number is positive and even');
    }
    else {
        console.log('The function is not');
    }
}
collectiveFunc3(isPositive, isNumberEven , 20)

let isPositiveVar = isPositive(5);