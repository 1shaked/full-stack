'''
create a function that take an array and calculate the multiplication 
of all his numbers

example -> [1 , 2 , 4] -> return 8
example -> [1 , 2 , 3] -> return 6
example -> [ 2 , 3] -> return 6
example -> [ 4 ] -> return 4
'''
def multiArr(arr: list[int]):
    multi_arr_res = 1
    for num in arr:
        multi_arr_res = num * multi_arr_res
    
    return multi_arr_res

'''
create a function that take an array of array of numbers and calculate the sum

[[ 1, 2 , 3] , [4 , 5 , 6] , [7 , 8]] -> return 36
[ [4 , 5 , 6] , [7 , 8]] -> return 30
'''
def sumArrOfArr(arr: list[list[int]]):
    total = 0
    for inner_arr in arr:
        for num in inner_arr:
            total = total + num

    return total

print(sumArrOfArr([[1, 10 , 1], [20 , 50 , 30]]))
'''
create a function that take an array of array of numbers and calculate the multiplication

[ [1,  2], [3] ] -> return 6
[ [4], [3] ] -> return 12
[ [4], [3,2] ] -> return 24

'''
def multiArrOfArr(arr: list[list[int]]):
    total = 1
    for inner_arr in arr:
        for num in inner_arr:
            total = total * num

    return total
'''
create a function name fib that a number and calculate the fibonacci sequence 
index 0 , 1 , 2,  3, 4, 5, 6
value 1 , 1 , 2,  3, 5, 8, 13

[1 , 1, 2, 3 , 5 , 8 , 13]

fib(0) -> 1
fib(1) -> 1
fib(2) -> 2
fib(3) -> 3
fib(4) -> 5
fib(5) -> 8
fib(6) -> 13
fib(7) -> 21
'''
def fib_r(index: int):
    if index == 0 or index == 1:
        return 1
    return fib_r(index - 1) + fib_r(index-2) 

def fib(index : int):
    count = 0
    last_num = 1 # prev number in fib
    two_last_num = 1 # two prev in fib
    total = 0
    while count <= index:
        if (count == 0 or count == 1):
            last_num = 1
            two_last_num = 1
            total = 1
        else: 
            two_last_num = last_num
            last_num = total
            total = last_num + two_last_num
        count = count + 1
    
    return total

def fib_arr(location: int):
    '''
    [1 , 1]
    '''
    arr = [1 , 1]
    if location == 0 or location == 1:
        return arr[location]
    init_index = 2
    while init_index <= location:
        prev_val = arr[- 1]
        two_prev_val = arr[ - 2]
        arr.append(prev_val + two_prev_val)
        init_index = init_index + 1
    
    return arr[-1]

'''
given a sorted array of numbers ,and a number find the index of this number 
if the index is in the array return the index 
else return -1

[1 , 2 , 5 , 7 , 8] , 5 -> 2
[1 , 2 , 5 , 7 , 8] , 7 -> 3
[1 , 2 , 5 , 7 , 8] , 4 -> -1
'''

'''
Nested Lists Sum
Write a function that sums all the numbers in a nested list structure.
The list may contain integers or other nested lists.

Example:

Given the list [1, [2, [3, 4], 5], 6], the function should return 21.
Given the list [2, [2, [6], 5], 6], the function should return 21.
Given the list [[6], 5], 6], the function should return 17.
Given the list [[[[1]]]], the function should return 1.
Given the list [[[[1], 2]]], the function should return 3.
Given the list [[[[1], 2], 3]], the function should return 6.
Given the list [[[[1], 2], 3], 4], the function should return 10.
'''

'''
create a function that takes and array of numbers and sort them 
example [8 , 5 , 2 ,1] -> [1 , 2 , 5 ,8]
example [8, 3 , 5 , 2 ,1] -> [1 , 2, 3 , 5 ,8]
'''

'''

'''