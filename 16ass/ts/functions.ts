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



function sum(a: number , b:number):void {
  console.log(a + b);
  
}



// number string boolean void undefined null Array interface