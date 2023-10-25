let i = 0;
let j = 0;
arr = [
 
    
     [3 , 4 , 5],
  
  
     [0, -1 , -2],
     [-3 , -4 , -5]
  
];

while (i < arr.length) {
   debugger;
   while (j < arr[i].length) {
      console.log(arr[i][j] * 8)
      j = j + 1;
   }
   i = i + 1;
   j = 0;
}
/**
 * let index = 0;
while (index < y.length) {
    debugger;
    const innerArray = y[index];
    let innerIndex = 0;
    while (innerIndex < innerArray.length) {
         console.log(innerArray[innerIndex] * 3)
         innerIndex = innerIndex + 1
    }
    index = index + 1
}
 */