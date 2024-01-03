function fib(n: number) : number {
    if (n === 1) return 1;
    if (n < 1 ) return 0;
    return fib(n - 1) + fib(n - 2); 
}

function fib_not_rec(n: number) : number {
    if (n == 1) return 1;
    if (n < 1) return 0;

    let prev_one = 1;
    let prev_two = 0;

    let count = 0;

    while (count <  n) {
        const current = prev_one + prev_two;
        prev_two = prev_one;
        prev_one = current;
        count ++;
    }

    return prev_one ;
}

describe('testing fib functions' , () => {
    test('testing fib with array of values', () => {
        const fib_values = [ 0 , 1 , 1 ,  2 , 3 , 5 , 8 , 13 , 21 , 34 , 55 ]
        for (let index = 0; index < fib_values.length; index++) {
            const element = fib_values[index];
            expect(fib(index)).toBe(element);
            // expect(fib_not_rec(index)).toBe(element);
        }
    });

    test('testing fib with negative', () => {
        expect(fib(-1)).toBe(0);
        expect(fib(-2)).toBe(0);
    });

    test('testing fib with float point numbers', () => {
        expect(fib(5.1)).toBe(0);
        expect(fib(-2.2)).toBe(0);
    });
})