class Box<T> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }

  setValue(newValue: T): void {
    this.value = newValue;
  }
}

// Example usage
const numberBox = new Box<number>(42);
console.log(numberBox.getValue()); // Output: 42

const stringBox = new Box<string>("Hello, TypeScript!");
console.log(stringBox.getValue()); // Output: Hello, TypeScript!
export {};
