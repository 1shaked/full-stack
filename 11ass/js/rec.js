


function printAll(n) {
    if (n < 1) {
        
    }
    else {
        console.log(n);
        printAll(n - 1);
    }
}


// 1 1 -> 2 -> 3 -> 5 -> 8 -> 13

// fib(6) // 1 , 1 , 2 , 3 , 5 , 8