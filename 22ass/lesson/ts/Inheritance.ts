class Vehicle {
    protected _brand: string;
    protected _model: string;
  
    constructor(brand: string, model: string) {
      this._brand = brand;
      this._model = model;
    }
  
    public getInfo(): string {
      return `Brand: ${this._brand}, Model: ${this._model}`;
    }
  }
  
  class Car extends Vehicle {
    private _numWheels: number;
  
    constructor(brand: string, model: string, numWheels: number) {
      super(brand, model);
      this._numWheels = numWheels;
    }
  
    public getInfo(): string {
      return super.getInfo() + `, Number of Wheels: ${this._numWheels}`;
    }
  }
  
  class Motorcycle extends Vehicle {
    private _hasSidecar: boolean;
  
    constructor(brand: string, model: string, hasSidecar: boolean) {
      super(brand, model);
      this._hasSidecar = hasSidecar;
    }
  
    public getInfo(): string {
      const sidecarInfo = this._hasSidecar ? 'with Sidecar' : 'without Sidecar';
      return super.getInfo() + `, Sidecar: ${sidecarInfo}`;
    }
  }
  
  // Create instances of Car and Motorcycle
  const myCar = new Car('Toyota', 'Camry', 4);
  const myMotorcycle = new Motorcycle('Honda', 'CBR500R', false);
  
  console.log(myCar.getInfo());         // Output: "Brand: Toyota, Model: Camry, Number of Wheels: 4"
  console.log(myMotorcycle.getInfo());  // Output: "Brand: Honda, Model: CBR500R, Sidecar: without Sidecar"
  


  /*
  In this example, we have a base class Vehicle that represents a generic vehicle with brand and model properties. It has a method getInfo() that returns the information about the vehicle.

The Car class extends the Vehicle class, inheriting its properties and methods. It adds a private _numWheels property to represent the number of wheels specific to a car. It overrides the getInfo() method and calls the parent class's implementation using super.getInfo() while adding the car-specific information.

The Motorcycle class also extends the Vehicle class. It introduces a private _hasSidecar property to indicate whether the motorcycle has a sidecar. The getInfo() method is overridden to include motorcycle-specific information.

By utilizing inheritance, the Car and Motorcycle classes inherit the common properties and behavior from the Vehicle class while allowing specialization and customization for the specific types of vehicles.
 */

export {};