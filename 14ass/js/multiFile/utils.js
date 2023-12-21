function fib(n) {
    if (n <= 1)
        return 1;
    return fib(n - 1) + fib(n - 2);
}
function recursivelySumArray(a) {
    if (a.length === 0)
        return 0;
    return a[0] + recursivelySumArray(a.slice(1));
}
function add(a, b) {
    return a + b;
}
export { fib, recursivelySumArray, add };
//# sourceMappingURL=utils.js.map