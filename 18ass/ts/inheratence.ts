
class Animal {
    color: string;

    constructor(color: string) {
        this.color = color;
    }

    showColor() {
        console.log(`My color is ${this.color}`);
    }

}

type GenderType = 'Male' | 'Female' 
type ColorType = 'Black' | 'Red' | 'Green' | 'Gray' | 'Blue'


let color: ColorType = 'Red' 

class Bunny extends Animal {
    age: number;
    name: string;
    gender: GenderType;

    constructor(color: string, age: number=0, name: string='', gender: GenderType='Female') {
        super(color);
        this.age = age;
        this.name = name;
        this.gender = gender;
    }
    eat() {
        console.log('I am eating food')
    }
    gettingOld () {
        this.age++;
        console.log(`I am ${this.age} years old`);
    }
}
const b = new Bunny('Blue', 30, 'bar', 'Female');

console.log(b)

export {};