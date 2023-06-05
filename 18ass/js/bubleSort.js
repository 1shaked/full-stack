function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
}
// Example usage:
const arr = [64, 25, 12, 22, 11];
bubbleSort(arr);
console.log("Sorted array:", arr);
export {};
//# sourceMappingURL=bubleSort.js.map