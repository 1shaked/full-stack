class MyClass {
    myProperty: string;
  
    constructor(myProperty: string) {
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
    name: string;
    
    constructor(name: string) {
      this.name = name;
    }
  
    move(distanceInMeters: number) {
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
  sam.move();  // Outputs: "Slithering..." and "Sammy the Python moved 5m."

  
  class Car {
    // fields
    private model: string;
    private year: number;
  
    // constructor
    constructor(model: string, year: number) {
      this.model = model;
      this.year = year;
    }
  
    // method
    displayCar() {
      return this.model + " " + this.year;
    }
  }
  
    // export { };

class Dog {
  color: string;
  age: number;
  weight: number | string;
  countBark: number;

  constructor(color: string = 'black', age: number = 0,
   weight: number | string = 100, countBark: number = 0) {
    console.log('you just created a new dog!');
    this.color = color;
    this.age = age;
    this.weight = weight;
    this.countBark = countBark;
  }

  bark(): void {
      // the code for barking 
      console.log('bark bark');
      this.countBark++;
  }
  walk():void {
      console.log('walk')
  }
  run():void {
      console.log('run')
  }
  sit():void {
      console.log('sit')
  }
}

// create new dog name pako

const pako = new Dog();
console.log(pako.age)// 0

console.log(pako.color )// black

pako.color = 'green';
pako.bark()
const beni = new Dog('green')
beni.bark()

export {};
