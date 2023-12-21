// create blueprint

class Person {
    constructor(nameOfPerson, ageOfPerson) {
        this.name = nameOfPerson;
        this.age = ageOfPerson;
    }

    greet() {
        console.log(`Hello ${this.name}`)
    }

    incrementAge() {
        this.age = this.age + 1;
    }
}
// create the object from the blueprint
const p1 = new Person('shaked1', 23)
p1.greet()
console.log(p1.age)
p1.incrementAge()
console.log(p1.age)
