

const arr = [
    { name: 'John', age: 20 },
    { name: 'Shaked', age: 22 },
    { name: 'din', age: 25 },
    { name: 'Amir', age: 28 },
]

arr.findIndex(function (obj) {
    return obj.name === 'din'
})