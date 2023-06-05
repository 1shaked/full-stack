class Shape {
    calculateArea(): number {
      return 0;
    }
  }
  
  class Circle extends Shape {
    radius: number;
  
    constructor(radius: number) {
      super();
      this.radius = radius;
    }
  
    calculateArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  class Rectangle extends Shape {
    width: number;
    height: number;
  
    constructor(width: number, height: number) {
      super();
      this.width = width;
      this.height = height;
    }
  
    calculateArea(): number {
      return this.width * this.height;
    }
  }
  function printArea(shape: Shape) {
    console.log('Area:', shape.calculateArea());
  }
  
  const circle = new Circle(5);
  const rectangle = new Rectangle(4, 6);
  
  printArea(circle); // Output: Area: 78.53981633974483
  printArea(rectangle); // Output: Area: 24
  