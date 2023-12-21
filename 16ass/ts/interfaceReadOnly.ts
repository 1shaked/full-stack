interface User {
  readonly id: number;
  name: string;
  age: number;
  cars: Car[];
}
interface Car {
  readonly name: string;
  age: number;
  isUsed: boolean;
  numOrText?: number | string | [boolean , number , string] | (number | string)[] ;
}

const car1: Car = {
  name: "Toyota space cruiser",
  age: 10,
  isUsed: true,
  // numOrText: [2, "hello", 'te', 66, 2],
}

const user: User = {
  id: 1,
  name: "Jane User",
  age: 20,
  cars: [],
}
user.cars.push(car1);
// car1['name'] = "Toyota CHR";
car1['age'] = 12;

function printCar(car: Car): void {
  console.log(`Car name: ${car.name}, age: ${car.age}, isUsed: ${car.isUsed}`);  
}

printCar({
  name: "Toyota space cruiser",
  age: 10,
  isUsed: true,
});

// const arr: readonly number[] = [1, 2, 3, 4, 5];

// user.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.

export { };
