"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = exports.recursivelySumArray = exports.fib = void 0;
function fib(n) {
    if (n <= 1)
        return 1;
    return fib(n - 1) + fib(n - 2);
}
exports.fib = fib;
function recursivelySumArray(a) {
    if (a.length === 0)
        return 0;
    return a[0] + recursivelySumArray(a.slice(1));
}
exports.recursivelySumArray = recursivelySumArray;
function add(a, b) {
    return a + b;
}
exports.add = add;
//# sourceMappingURL=utils.js.map