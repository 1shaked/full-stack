/**
 * 
 * @param {number[]} arr 
 * @returns {number}
 */
function sum_array(arr) {
    let sum = 0;
    for (const number of arr) {
        sum += number
    }
    return sum;
}

/**
 * 
 * @param {number[][]} arr 
 * @returns {number}
 */
function sum_nested_array(arr) {
    let sum = 0;
    for (const inner_array of arr) {
        for (const number of inner_array) {
            sum += number
        }
    }
    return sum;
}

