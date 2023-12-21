class Dog {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

let counter : number = 0;


let dogVariable = new Dog('Pako', 16);

let dogProxyForVariable = new Proxy<Dog>(dogVariable, {
    get: function (target, p: keyof Dog) {
        counter++;
        return target[p];
    },
    set: function (target, p: keyof Dog, value) {
        counter--;
        if (counter >= 3) {
            target[p] = value as never;
        }
        return true;
    }
});

console.log(counter);

console.log('The age is ' + dogProxyForVariable.age); // counter is 1

console.log(counter);

console.log(dogProxyForVariable.name); // counter is 2
console.log(counter);
console.log('The age is ' + dogProxyForVariable.age); // counter is  3
console.log(dogProxyForVariable.name); // counter is  4

console.log(counter); 

dogProxyForVariable.age = 5; // counter is 3

console.log(counter)

dogProxyForVariable.age = 20; // counter is 2

console.log(counter)

console.log(dogProxyForVariable.age); // 

dogProxyForVariable.name;



export {}