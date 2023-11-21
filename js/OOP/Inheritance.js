class Animal {
    constructor(species) {
        this.species = species
    }
    makeSound() {
        console.log('making sound')
    }
    x() {
        console.log('x')
    }
}

class Dog extends Animal {
    constructor(name) {
        super('Dog',)
        this.name = name
    }
    bark() {
        console.log('bark bark')
    }
    x() {
        console.log('custom x')
    }
}

const d1 = new Dog('Pako')
console.log(d1.name)
d1.makeSound()
d1.bark()

d1.x()