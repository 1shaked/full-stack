function fib(n: number): number {
  if (n <= 1) return 1;
  return fib(n - 1) + fib(n - 2);
}

function recursivelySumArray(a: number[]): number {
  if (a.length === 0) return 0;
  return a[0] + recursivelySumArray(a.slice(1));
}

function add(a:number, b:number):number {
    return a + b;
}


export { 
  fib, recursivelySumArray, add
  
};