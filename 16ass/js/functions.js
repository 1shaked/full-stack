function multiply(a, b, operation) {
    const result = operation(a, b);
    return result;
}
function add(x, y) {
    return x + y;
}
const product = multiply(3, 4, add);
console.log(product); // Output: 7
export {};
//# sourceMappingURL=functions.js.map