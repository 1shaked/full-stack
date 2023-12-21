function multiply(a, b, operation) {
    const result = operation(a, b);
    return result;
}
function add(x, y) {
    return x + y;
}
const product = multiply(3, 4, add);
console.log(product); // Output: 7
function sum(a, b) {
    console.log(a + b);
}
export {};
// number string boolean void undefined null Array interface
//# sourceMappingURL=functions.js.map