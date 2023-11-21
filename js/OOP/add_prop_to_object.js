// create blueprint

class Person {
    constructor(nameOfPerson, ageOfPerson) {
        this.name = nameOfPerson;
        this.age = ageOfPerson;
    }
}

const p1 = new Person('shaked1', 23)

console.log(p1.name)

p1.name = 'john'
p1.x = 'yyyyy'
console.log(p1.x)
