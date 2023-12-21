interface Shape {
    draw(): void;
  }
  
  class Circle implements Shape {
    draw(): void {
      console.log("Drawing a circle.");
    }
  }
  
  class Rectangle implements Shape {
    draw(): void {
      console.log("Drawing a rectangle.");
    }
  }
  
  class ShapeFactory {
    createShape(type: string): Shape {
      if (type === "circle") {
        return new Circle();
      } else if (type === "rectangle") {
        return new Rectangle();
      } else {
        throw new Error("Invalid shape type.");
      }
    }
  }
  
  // Usage
  const factory = new ShapeFactory();
  
  const circle = factory.createShape("circle");
  circle.draw();  // Output: "Drawing a circle."
  
  const rectangle = factory.createShape("rectangle");
  rectangle.draw();  // Output: "Drawing a rectangle."
export { };

/*
In this example, we have implemented the Factory Design Pattern. The Shape interface represents the common behavior that all shapes should have, which is defined by the draw() method.

The Circle and Rectangle classes implement the Shape interface and provide their own implementation of the draw() method.

The ShapeFactory class acts as the factory responsible for creating different shapes based on a given type. It has a createShape() method that accepts a type as an argument and returns the corresponding shape object.

In the usage section, we create an instance of the ShapeFactory. Using the factory, we create a circle and a rectangle object by calling the createShape() method with the respective shape type. Then, we invoke the draw() method on each shape object, which executes the specific drawing logic for that shape.

The Factory Design Pattern allows for the creation of objects without exposing the instantiation logic to the client. It provides a centralized place (the factory) for creating objects based on specific conditions or requirements. This pattern promotes loose coupling and code maintainability by separating object creation from object usage.
*/