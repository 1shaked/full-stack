let array = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
array.map((currentValue, index) => {
  return currentValue * currentValue;
});


array.map(function (currentValue, index) {
  return currentValue * currentValue;
});

array.map(function (currentValue, index) {
  return currentValue * currentValue + index;
});

// array.map((currentValue, index, array) => {
//   return currentValue * 2 + index;
// });

// array.map((currentValue) => {
//   return currentValue;
// });
