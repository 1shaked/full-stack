class Shape {
    protected _name: string;
  
    constructor(name: string) {
      this._name = name;
    }
  
    public getInfo(): string {
      return `Shape: ${this._name}`;
    }
  
    public calculateArea(): number {
      return 0;
    }
  }
  
  class Circle extends Shape {
    private _radius: number;
  
    constructor(name: string, radius: number) {
      super(name);
      this._radius = radius;
    }
  
    public getInfo(): string {
      return `${super.getInfo()}, Radius: ${this._radius}`;
    }
  
    public calculateArea(): number {
      return Math.PI * this._radius * this._radius;
    }
  }
  
  class Rectangle extends Shape {
    private _length: number;
    private _width: number;
  
    constructor(name: string, length: number, width: number) {
      super(name);
      this._length = length;
      this._width = width;
    }
  
    public getInfo(): string {
      return `${super.getInfo()}, Length: ${this._length}, Width: ${this._width}`;
    }
  
    public calculateArea(): number {
      return this._length * this._width;
    }
  }
  
  // Create instances of Circle and Rectangle
  const circle = new Circle("Circle", 5);
  const rectangle = new Rectangle("Rectangle", 4, 6);
  
  console.log(circle.getInfo());
  console.log("Area:", circle.calculateArea());
  
  console.log(rectangle.getInfo());
  console.log("Area:", rectangle.calculateArea());

  
  export { };

  /*
  n this example, we have a base class Shape that has a method getInfo() and a method calculateArea().

The Circle and Rectangle classes extend the Shape class and override both getInfo() and calculateArea() methods.

The getInfo() method is overridden in both subclasses to include additional information specific to each shape.

The calculateArea() method is overridden to provide the respective area calculation formulas for circles and rectangles.

We create instances of Circle and Rectangle and call the getInfo() and calculateArea() methods on each object.

This demonstrates method overriding, as the subclasses provide their own implementation of the base class methods, using the super keyword to access the base class implementation.

Method overloading is not explicitly demonstrated in this example. Method overloading in TypeScript involves providing multiple method signatures with different parameter combinations within a single class, enabling flexible invocation of methods with different argument types or numbers.
 */