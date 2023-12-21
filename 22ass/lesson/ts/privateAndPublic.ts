


class Animal {
    name: string;

    constructor(nameOfAnimal: string) {
        this.name= nameOfAnimal
    }
}
class Dog extends Animal {
    color: string;
    constructor(color: string, name: string) {
        super(name);
        this.color =color;
        console.log(this.name)
    }

}




class Person  {
    private _name: string;
    private _lastName: string;
    constructor(name: string, lastName: string) {
        this._name = name;
        this._lastName = lastName;
    }
    get fullName(): string {
        return `${this._name} ${this._lastName}`
    }

    set fullNameSet (full: string)  {
        const arrayOfNames: string[] = full.split(' '); // Banana apple
        this._name = arrayOfNames[0]  // Banana
        this._lastName = arrayOfNames[1] // apple
    }
    
}
let p = new Person('shaked', 'chen');
p.fullNameSet = 'Bananan apple Orange'
// p.fullNameSet('Banana apple')
console.log(p.fullName);

export {}