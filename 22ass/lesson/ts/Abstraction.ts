abstract class Shape {
    protected _name: string;
  
    constructor(name: string) {
      this._name = name;
    }
  
    abstract calculateArea(): number;
  
    public display(): void {
      console.log(`Shape: ${this._name}`);
      console.log(`Area: ${this.calculateArea()}`);
    }
  }
  
  class Circle extends Shape {
    private _radius: number;
  
    constructor(name: string, radius: number) {
      super(name);
      this._radius = radius;
    }
  
    calculateArea(): number {
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
  
    calculateArea(): number {
      return this._length * this._width;
    }
  }
  
  // Create instances of Circle and Rectangle
  const circle = new Circle("Circle", 5);
  const rectangle = new Rectangle("Rectangle", 4, 6);
  
  circle.display();
  console.log("--------------------");
  rectangle.display();
  /*
  In this example, we have an abstract class Shape that represents a generic shape. It has a protected property _name and an abstract method calculateArea().

The calculateArea() method is declared as abstract in the Shape class, which means it does not have an implementation in the base class. The concrete subclasses (Circle and Rectangle) are responsible for providing their own implementation of the calculateArea() method.

The display() method in the Shape class provides a common behavior to display the shape's name and calculated area.

The Circle and Rectangle classes extend the Shape class and implement the calculateArea() method according to their specific shape formulas.

We create instances of Circle and Rectangle, and call the display() method. This demonstrates abstraction, as the Shape class provides an abstraction of a generic shape, while the concrete subclasses provide specific implementations of the abstract method. The caller can interact with the Shape class and its common behavior without needing to know the specific details of each shape's calculation.
 */

export { };