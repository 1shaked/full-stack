function mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) {
      return arr;
    }
  
    const mid = Math.floor(arr.length / 2);
    const leftArr = mergeSort(arr.slice(0, mid));
    const rightArr = mergeSort(arr.slice(mid));
  
    return merge(leftArr, rightArr);
  }
  
  function merge(leftArr: number[], rightArr: number[]): number[] {
    const mergedArr: number[] = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
      if (leftArr[leftIndex] < rightArr[rightIndex]) {
        mergedArr.push(leftArr[leftIndex]);
        leftIndex++;
      } else {
        mergedArr.push(rightArr[rightIndex]);
        rightIndex++;
      }
    }
  
    while (leftIndex < leftArr.length) {
      mergedArr.push(leftArr[leftIndex]);
      leftIndex++;
    }
  
    while (rightIndex < rightArr.length) {
      mergedArr.push(rightArr[rightIndex]);
      rightIndex++;
    }
  
    return mergedArr;
  }
  
  // Example usage:
  const arr: number[] = [64, 25, 12, 22, 11];
  const sortedArr = mergeSort(arr);
  console.log("Sorted array:", sortedArr);

  export {};
  