
// [1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987]
// [0 1 2 3 4 5 6 7 8 9]
function fib(k) {
    if (k == 1 || k == 0) {
        return 1;
    }
    let lastEl = fib(k - 1)
    let secondLastEl = fib(k - 2)
    return  lastEl + secondLastEl


}
console.log(fib(4)); 


// k = 10 -> 144 -> 89 + 55



