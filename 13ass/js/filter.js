const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
});
console.log(filteredNumbers); // [2, 4, 6, 8, 10]

function filter(array, func) {
  const newArr = [];
  for (let index = 0; index < array.length; index++) {

    const element = array[index];

    const value = func(element, 'a');

    if (value) {
      newArr.push(element);
    }
  }
  return newArr;
}

filter(numbers, (number) => {
  return number % 2 === 0;
});

filter(numbers, (number) => number % 2 === 0);


numbers.filter((value) => {
  return value % 2 === 0;
});