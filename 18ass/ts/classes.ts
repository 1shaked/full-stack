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