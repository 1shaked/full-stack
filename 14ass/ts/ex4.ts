let arr: number[] = [0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9]


let a = ['s', 'a']

let b: (string | number)[] = [1, 's' , 2]

let c: (string | number | boolean)[] = [1, 's' , 2 , true]

let d: [number, string, boolean] = [1, 's' , true]

function exampleFunc(a: number | string, b: number | string): number | string {

    return a
}