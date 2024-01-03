
function pow(a: number , b: number) {
    return Math.pow(a , b)
}

describe('Testing Power func' , () => {

    test('test 1 to 1', () => {
        expect(pow(1 , 1)).toBe(1)
    } );

    test('test 1 to any', () => {
        for (let index = 0; index < 1000; index++) {
            expect(pow(index , 1)).toBe(index)
        }
    } );

    test('test 0 to any', () => {
        for (let index = 0; index < 1000; index++) {
            expect(pow(index , 0)).toBe(1)
        }
    } );

    test('test 5 to 2', () => {
        expect(pow(5 , 2)).toBe(25)
    } );
})