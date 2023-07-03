class Car {
    private _brand: string;     // Private property
    protected _model: string;   // Protected property
    public year: number;        // Public property
  
    constructor(brand: string, model: string, year: number) {
      this._brand = brand;
      this._model = model;
      this.year = year;
    }
  
    private getBrand(): string {
      return this._brand;
    }
  
    protected getModel(): string {
      return this._model;
    }
  
    public displayInfo(): void {
      console.log(`Brand: ${this.getBrand()}`);
      console.log(`Model: ${this.getModel()}`);
      console.log(`Year: ${this.year}`);
    }
  }
  
  class SportsCar extends Car {
    public showModel(): void {
      console.log(`Model: ${this.getModel()}`); // Accessible due to protected modifier
    }
  }
  
  // Create instances of Car and SportsCar
  const car = new Car("Toyota", "Camry", 2022);
  const sportsCar = new SportsCar("Ferrari", "458 Italia", 2023);
  
  console.log(car.year);           // Output: 2022 (public property)
  car.displayInfo();               // Output: Brand: Toyota, Model: Camry, Year: 2022
  // console.log(car.getBrand());  // Compilation Error: 'getBrand' is private
  // console.log(car.getModel());  // Compilation Error: 'getModel' is protected
  
  console.log(sportsCar.year);     // Output: 2023 (public property)
  sportsCar.showModel();           // Output: Model: 458 Italia (inherited protected method)

  export {};

  /*
  In this example, we have a Car class with different access modifiers:

The _brand property is marked as private, meaning it can only be accessed within the class itself.
The _model property is marked as protected, allowing it to be accessed within the class and its subclasses.
The year property is marked as public, which means it can be accessed from anywhere.
The getBrand() method is marked as private, so it can only be accessed within the class itself.

The getModel() method is marked as protected, allowing it to be accessed within the class and its subclasses.

The displayInfo() method is marked as public and can be accessed from anywhere. It internally accesses the private _brand property and the protected _model property.

We create instances of Car and SportsCar, and demonstrate the access to properties and methods based on their access modifiers. Note that accessing private or protected members outside of the class or its subclasses will result in a compilation error. */
