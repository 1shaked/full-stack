interface Box<T> {
  value: T;
  logValue: () => void;
}

// Example usage
const numberBox: Box<number> = {
  value: 42,
  logValue: () => console.log(`The value is: ${numberBox.value}`),
};

const stringBox: Box<string> = {
  value: "Hello, TypeScript!",
  logValue: () => console.log(`The value is: ${stringBox.value}`),
};

numberBox.logValue(); // Output: The value is: 42
stringBox.logValue(); // Output: The value is: Hello, TypeScript!

export {};
