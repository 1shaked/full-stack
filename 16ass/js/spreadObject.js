let car = {
    brand: 'BMW',
    model: 'X5',
    year: 2019,
    color: 'red',
    sp: 200,
};
debugger;
let car2 = {
    brand: 'BMW1',
    model: 'X53',
    year: 2018,
    color: 'black',
    horsePower: 200,
};
let car3 = Object.assign(Object.assign({}, car), car2);
car.color = 'blue';
car2.color = 'yellow';
car3.color = 'green';
console.log(car3);
//# sourceMappingURL=spreadObject.js.map