
function findMiss(arr: number[]) {
    let sum_arr = 0;
    let multi_arr = 1; 
    for (let i = 0; i < arr.length; i++) {
        sum_arr += arr[i];
        multi_arr =  multi_arr * arr[i];
    }
    let sum_n = 55;
    let multi_n = 3628800; // 10!
    let x_plus_y = sum_n - sum_arr;
    let x_multi_y = multi_n / multi_arr;



}

// [8 , 2, 3, 4, 5, 6, 7, 1, 10, 9]


// [100 , 150 , 200 , 220, 300 , 320] -> 150