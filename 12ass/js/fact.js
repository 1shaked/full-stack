


function fact(n) {
    if (n == 1) {
        return 1;
    }
    return n * fact(n - 1);
}
// fact(n) -> n * (n-1) * (n-2) ... * 1