# [1 , 1 , 2 , 3 , 5 , 8 , 13 , 21 , 34 , 55 , 89]
#  0   1   2   3   4   5   6    7    8    9    10

def fib(index: int):
    arr = [1 , 1]
    for currentIndex in range(2, index + 1):
        arr.append(arr[-1] + arr[-2])

    return arr[-1]




def fib_rec(index: int):
    if index == 0 or index == 1:
        return 1
    prev = fib_rec(index - 1)
    prev_of_prev = fib_rec(index - 2)
    return prev + prev_of_prev

# print(fib(index = 7))

# print(fib_rec(7))