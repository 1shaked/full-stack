function quickSort(arr, left = 0, right = arr.length - 1) {
    let pivot;
    let partitionIndex;
    if (left < right) {
        pivot = right;
        partitionIndex = partition(arr, pivot, left, right);
        // sort left and right
        quickSort(arr, left, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, right);
    }
    return arr;
}
function partition(arr, pivot, left, right) {
    let pivotValue = arr[pivot];
    let partitionIndex = left;
    for (let i = left; i < right; i++) {
        if (arr[i] < pivotValue) {
            swap(arr, i, partitionIndex);
            partitionIndex++;
        }
    }
    swap(arr, right, partitionIndex);
    return partitionIndex;
}
function swap(arr, firstIndex, secondIndex) {
    let temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
}
// Usage
let arr = [11, 8, 14, 3, 6, 2, 1, 7];
console.log('Original array: ' + arr);
let sortedArray = quickSort(arr);
console.log('Sorted array: ' + sortedArray);
export {};
//# sourceMappingURL=quickSort.js.map