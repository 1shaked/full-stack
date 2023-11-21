// create blueprint

class Person {
    constructor(nameOfPerson, ageOfPerson) {
        this.name = nameOfPerson;
        this.age = ageOfPerson;
    }

    greet() {
        console.log(`Hello ${this.name}`)
    }
}

const p1 = new Person('shaked1', 23)
p1.greet()
