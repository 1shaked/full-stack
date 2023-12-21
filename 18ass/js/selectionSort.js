function selectionSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
}
// Example usage:
const arr = [64, 25, 12, 22, 11];
selectionSort(arr);
console.log("Sorted array:", arr);
export {};
//# sourceMappingURL=selectionSort.js.map