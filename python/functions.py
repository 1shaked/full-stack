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

fib(0) -> 1
fib(1) -> 1
fib(2) -> 2
fib(3) -> 3
fib(4) -> 5
fib(5) -> 8
fib(6) -> 13
fib(7) -> 21
'''