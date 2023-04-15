debugger;
interface Car {
    model: string | number,
    year: number,
    isElectric?: boolean
}


let car1: Car = {
    model: 'bmw super v8',
    year: 2020,
}

let car2: Car = {
    year: 2022,
    model: 'Bugatti Chiron',
    isElectric: true,
}

console.log(car1.isElectric)