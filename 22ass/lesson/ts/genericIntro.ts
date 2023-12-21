class Dog {

}
interface WInterface {
    age: number;
}
type gender = 'Male' | 'Female';
function returnMe(arg: number ) : string  {
    return arg.toString();
}
function returnMe2 <T, GZ> (arg: T, arg2?: GZ): T {
    console.log(arg2);
    return arg;
}
function test(arg: any) {
    return arg
}
const t = test(100)

const n = returnMe(10);
const n2 = returnMe2<number, null>(20)
const arrString = returnMe2<string[], string>(['ggg', 'e', 'sa'], 'this is')
returnMe2<string[], null>(['ggg', 'e', 'sa'], )

function returnMe3<T extends string | string[] | number>(arg: T ) : T  {
    return arg;
}


const arrString3 = returnMe3<string[]>(['s' , 'w'])
const w = returnMe2<WInterface, null>({age: 10});
const g = returnMe2<gender, null>('Male');
const d = returnMe2<Dog, undefined>(new Dog(),);

interface BoxInterface<T> {
    value: T;
}

function boxUser<T>(box: BoxInterface<T>) : T {
    return box.value;
}

export {};