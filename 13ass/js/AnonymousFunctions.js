const fruits = [
    { name: "apple", color: "red" },
    { name: "banana", color: "yellow" },
    { name: "grape", color: "purple" }
  ];

// Find the index of the first fruit with color "purple"
const index = fruits.findIndex(function(fruit) {
    return fruit.color === "purple";
});


console.log(index); // 2
