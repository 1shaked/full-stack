
def sum_array(arr):
    sum_arr = 0
    for number in arr:
        sum_arr = sum_arr + number
    
    return sum_arr


def sum_nested_array(arr) :
    sum_arr = 0
    for inner_array in arr:
        for number in inner_array:
            sum_arr = sum_arr + number
    
    return sum_arr


def sum_nested_array_one_loop(arr) :
    sum_arr = 0

    index = 0

    while index < len(arr):
        if isinstance(arr[index], list): # check if arr[index] is a list of numbers
            for item in arr[index]:
                arr.append(item)
            # arr.append(*arr[index])
        else:
            sum_arr = sum_arr + arr[index]
        index = index + 1
    return sum_arr

sum_nested = sum_nested_array_one_loop([
    [1 , 2],
    [-1 , [5 , [7]]]
])

print(sum_nested)