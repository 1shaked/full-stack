

let arr = [0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 ] 


function whenBiggerThanNumber(array, n) {
    debugger;
    let index = 0;
    while (index < array.length) {
        if (array[index] > n) {
            return index;
        }
        index = index + 1;
    }
    return -1;
}

let indexOfEl = whenBiggerThanNumber(arr , 4);

console.log(indexOfEl);


function findIndex(array, func) {
    let index = 0;
    while (index < array.length) {
        let el = array[index];
        let value = func(el)
        if ( value) {
            return index;
        }
        index = index + 1;
    }
    return -1;
    
}

function findIndexWithFor(array, func){
    
    for (let index = 0; index < array.length; index = index + 1) {
        let element = array[index];
        let value = func(element)
        if (value) {
            return index;
        }
    }
    return -1;
}


function isNumberBigger(number) {
    if (number > 4 ) {
        return true;
    }
    return false;
}


arr.findIndex(function (number) {
    if (number > 4 ) {
        return true;
    }
    return false;
})
findIndexWithFor(arr , isNumberBigger);
