const car1 = {
    name: "Toyota space cruiser",
    age: 10,
    isUsed: true,
    // numOrText: [2, "hello", 'te', 66, 2],
};
const user = {
    id: 1,
    name: "Jane User",
    age: 20,
    cars: [],
};
user.cars.push(car1);
// car1['name'] = "Toyota CHR";
car1['age'] = 12;
function printCar(car) {
    console.log(`Car name: ${car.name}, age: ${car.age}, isUsed: ${car.isUsed}`);
}
printCar({
    name: "Toyota space cruiser",
    age: 10,
    isUsed: true,
});
export {};
//# sourceMappingURL=interfaceReadOnly.js.map