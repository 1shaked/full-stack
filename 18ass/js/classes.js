class MyClass {
    constructor(myProperty) {
        this.myProperty = myProperty;
    }
    myMethod() {
        console.log('Hello, ' + this.myProperty);
    }
}
// Usage:
let instance = new MyClass('World');
instance.myMethod(); // Outputs: 'Hello, World'
class Animal {
    constructor(name) {
        this.name = name;
    }
    move(distanceInMeters) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
class Snake extends Animal {
    // constructor(name: string) {
    //   // super(name);
    // }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}
debugger;
let sam = new Snake("Sammy the Python");
sam.move(); // Outputs: "Slithering..." and "Sammy the Python moved 5m."
class Car {
    // constructor
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }
    // method
    displayCar() {
        return this.model + " " + this.year;
    }
}
// export { };
//# sourceMappingURL=classes.js.map