interface Shape {
    getArea(): number;
  }
  
  class Circle implements Shape {
    private _radius: number;
  
    constructor(radius: number) {
      this._radius = radius;
    }
  
    getArea(): number {
      return Math.PI * this._radius * this._radius;
    }
  }
  
  class Rectangle implements Shape {
    private _length: number;
    private _width: number;
  
    constructor(length: number, width: number) {
      this._length = length;
      this._width = width;
    }
  
    getArea(): number {
      return this._length * this._width;
    }
  }
  
  // Create instances of Circle and Rectangle
  const circle: Shape = new Circle(5);
  const rectangle: Shape = new Rectangle(4, 6);
  
  console.log(circle.getArea());      // Output: 78.53981633974483
  console.log(rectangle.getArea());   // Output: 24
  
  export { };

  /*
  In this example, we define an Shape interface that declares a getArea() method. Both the Circle and Rectangle classes implement this Shape interface and provide their own implementation for the getArea() method.

The Circle class represents a circle and calculates its area based on the provided radius.

The Rectangle class represents a rectangle and calculates its area based on the provided length and width.

We create instances of Circle and Rectangle and assign them to variables of type Shape, which is the interface type. This allows us to treat these objects polymorphically, accessing the common getArea() method defined in the Shape interface.

By utilizing interfaces, we establish a polymorphic relationship where objects of different classes (Circle and Rectangle) are treated as instances of a common type (Shape). This enables us to invoke the getArea() method on each object, even though they have different implementations, providing flexibility and code reusability.




 */