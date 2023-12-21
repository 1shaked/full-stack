let myMap: Map<string, number> = new Map<string, number>();
myMap.set('one', 1);
myMap.set('two', 2);
myMap.set('three', 3);

// Get a value from the Map
let one = myMap.get('one');  // one = 1

// Check if a key exists in the Map
let hasTwo = myMap.has('two');  // hasTwo = true

// Remove a key-value pair from the Map
myMap.delete('three'); 

// Iterate over the Map
for (let [key, value] of myMap) {
  console.log(key, value);
}

// Clear the Map
myMap.clear();  
export {};