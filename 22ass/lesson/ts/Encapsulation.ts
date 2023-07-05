class Car {
    private _brand: string;
    private _model: string;
    private _year: number;
  
    constructor(brand: string, model: string, year: number) {
      this._brand = brand;
      this._model = model;
      this._year = year;
    }
  
    public getBrand(): string {
      return this._brand;
    }
    get model () : string {
      return this._model;
    }
    public getModel(): string {
      return this._model;
    }
  
    public getYear(): number {
      return this._year;
    }
    set year (year: number) {
      if (year > 1900 && year <= new Date().getFullYear()) {
        this._year = year;
      } else {
        console.log('Invalid year!');
      }
    }

    public setYear(year: number): void {
      if (year > 1900 && year <= new Date().getFullYear()) {
        this._year = year;
      } else {
        console.log('Invalid year!');
      }
    }
  }
  
  const myCar = new Car('Toyota', 'Camry', 2022);
  
  console.log(myCar.getBrand()); // Output: "Toyota"
  console.log(myCar.getModel()); // Output: "Camry"
  console.log(myCar.getYear());  // Output: 2022
  
  myCar.setYear(2023);
  console.log(myCar.getYear());  // Output: 2023
  
  myCar.setYear(1800); // Output: "Invalid year!"
  console.log(myCar.getYear());  // Output: 2023 (unchanged)

  
  export { };
  /*
  In this example, the Car class encapsulates the brand, model, and year of a car. The properties _brand, _model, and _year are private, meaning they can only be accessed within the class itself.

The public getter methods getBrand(), getModel(), and getYear() provide access to retrieve the values of the private properties. These methods allow controlled access to the encapsulated data.

The public setter method setYear(year) allows updating the _year property with a new value. However, before updating, it performs a validation check to ensure that the provided year is valid (between 1900 and the current year). If the year is invalid, it logs an error message.

By encapsulating the data and exposing it through getter and setter methods, the Car class maintains control over how the properties are accessed and updated. This helps maintain data integrity and allows for additional logic or validation to be implemented.
 */