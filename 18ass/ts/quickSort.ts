function quickSort(arr: number[], left = 0, right = arr.length - 1): number[] {
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

function partition(arr: number[], pivot: number, left: number, right: number): number {
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

function swap(arr: number[], firstIndex: number, secondIndex: number): void {
    let temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
}

// Usage
let arr = [11,8,14,3,6,2,1, 7];
console.log('Original array: ' + arr);
let sortedArray = quickSort(arr);
console.log('Sorted array: ' + sortedArray);

export { };