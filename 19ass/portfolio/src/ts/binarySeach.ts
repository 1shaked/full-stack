// const arr = [1, 2 , 3, 4 , 50, 600, 701, 899, 999];

// function findValue(arr: number[], value: number) : number {
//     // you get a sorted array and a value your objective is to find 
//     // the index of the value, if it's not in the array return -1
//     return  -1;
// }

// console.log(`the index of 4 is in ${findValue(arr , 4)}`);


function arrCreate(amount: number) : number[] {
    const arr: number[] = [];
    for (let i = 0; i < amount; i++) {
        if (i % 2 === 0) {
            arr.push(i)
        }
        arr.push(i);
    }
    return arr;
}
// const arr = arrCreate(100_000_000_000);


const arr = [1, 2 , 4 ,8 , 12, 16 , 18 , 26, 32  , 64]


function binarySearch(arr: number[], valueToSearch: number): number {
    debugger;
 if (arr.length == 1) {
    if (arr[0] == valueToSearch) return 0;
    return -1;
 }
 const middle_index = Math.floor(arr.length / 2); 
 if (arr[middle_index] == valueToSearch) {
     return middle_index;
    }
  else if (arr[middle_index] < valueToSearch) {
     const arr_slice = arr.slice(middle_index + 1 , arr.length);
     const small_index = binarySearch(arr_slice , valueToSearch);
     if (small_index == -1 ) return -1;
     return middle_index + small_index + 1;
    // return  
 }
 else if (arr[middle_index] > valueToSearch) {
    const arr_slice = arr.slice(0 ,middle_index );
    return binarySearch(arr_slice, valueToSearch) 
 }
 return -1;

}

// console.log(binarySearch(arr, 26));
// console.log(binarySearch(arr, 32));

// for(let i = 0; i < arr.length; i++) {
//     console.log(binarySearch(arr, arr[i]));
// }

console.log(binarySearch(arr, -100));
console.log(binarySearch(arr, 5));
console.log(binarySearch(arr, 30));
