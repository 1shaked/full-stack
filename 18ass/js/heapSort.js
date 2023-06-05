function heapify(arr, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    if (left < n && arr[left] > arr[largest])
        largest = left;
    if (right < n && arr[right] > arr[largest])
        largest = right;
    if (largest !== i) {
        swap(arr, i, largest);
        heapify(arr, n, largest);
    }
}
function heapSort(arr) {
    let n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--)
        heapify(arr, n, i);
    for (let i = n - 1; i > 0; i--) {
        swap(arr, 0, i);
        heapify(arr, i, 0);
    }
}
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
// Usage
let arr = [12, 11, 13, 5, 6, 7];
console.log('Original array: ' + arr);
heapSort(arr);
console.log('Sorted array: ' + arr);
export {};
//# sourceMappingURL=heapSort.js.map