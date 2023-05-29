// example of for-in loop
let person = {
    name: 'John',
    age: 30,
    city: 'New York'
}
for (let key in person) {
    console.log(key, person[key]);
}
