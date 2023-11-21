class Animal {
    constructor(species) {
        this.species = species
    }
    makeSound() {
        console.log('making sound')
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
}

const d1 = new Dog('Pako')
console.log(d1.name)
d1.makeSound()
d1.bark()