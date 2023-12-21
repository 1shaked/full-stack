let arr = [
    [0 , 1 , 2],
    [-1 , -1 , -2],
    [-1 , 1 , -2, 5, 7],
    ['wow', 'there', 'are'],
]

// console.log(arr[3][1])
for (const inner_arr of arr) {
    for (item of inner_arr) {
        console.log(item)
    }
}
