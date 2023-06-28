class Animal {
    color: string;
    age: number;

    constructor(color: string = 'black', age: number = 1) {
        console.log('animal constructor run ')
        this.color = color;
        this.age = age;
    }

    showColor() {
        // 'my color is ' + this.color
        console.log(`My color is ${this.color}`);
    }
    getOlder () {
        console.log(`My age is ${this.age}`);
        this.age++;
    }
}

class Mammal extends Animal{
    amountOfMilk: number;

    constructor(milk: number, color: string, age: number) {
        super(color, age);
        console.log('Mammal constructor run ')
        this.amountOfMilk = milk;

    }
    getMoreMilk() {
        console.log(`We are getting ${this.amountOfMilk} liters of milk`);
    }
}


