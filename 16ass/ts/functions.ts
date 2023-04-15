function multiply(
  a: number,
  b: number,
  operation: (x: number, y: number) => number
): number {
  const result = operation(a, b);
  return result;
}

function add(x: number, y: number): number {
  return x + y;
}

const product = multiply(3, 4, add);
console.log(product); // Output: 7
export {};
