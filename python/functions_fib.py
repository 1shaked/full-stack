# [1 , 1 , 2 , 3 , 5 , 8 , 13 , 21 , 34 , 55]
#  0   1   2   3   4   5   6    7    8    9

def fib(index: int):
    arr = [1 , 1]
    for currentIndex in range(2, index + 1):
        arr.append(arr[-1] + arr[-2])

    # arr[2] = arr[1] + arr[0]
    return arr[-1]

fib(index = 7)