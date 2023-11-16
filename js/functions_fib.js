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
/**
 * 
 * @param {number} index 
 */
function fib_rec(index) {
    if (index == 0 || index == 1) {
        return 1;
    }
    const prev = fib_rec(index - 1)
    const prev_of_prev = fib_rec(index - 2)
    return prev + prev_of_prev
}

// fib(index=7)