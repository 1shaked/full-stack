// [1 , 1 , 2 , 3 , 5 , 8 , 13 , 21 , 34 , 55 , 89]
//  0   1   2   3   4   5   6    7    8    9    10
function fib(index) {
    const arr = [1 , 1]
    for (let currentIndex = 2; currentIndex < index + 1; currentIndex++) {
        arr.push(arr.at(-1) + arr.at(-2))
    }
    // arr[2] = arr[1] + arr[0]
    return arr.at(-1)
}

fib(index=7)