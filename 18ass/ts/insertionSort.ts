function insertionSort(arr: number[]): void {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
      const key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = key;
    }
  }
  
  // Example usage:
  const arr: number[] = [64, 25, 12, 22, 11];
  insertionSort(arr);
  console.log("Sorted array:", arr);
// time complexity: O(n^2)  

export {};