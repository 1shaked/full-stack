import time
# class competition
def getIndexOfNumberInArray(arr: list[int], searchNumber: int) -> int:
    index = 0
    for element in arr:
        if searchNumber == element:
            return index
        else:
            index = index + 1
    return -1


def getIndexOfNumberInArrayWithWhile(arr: list[int], searchNumber: int) -> int:
    index = 0
    while index < len(arr):
        element = arr[index] 
        if (element == searchNumber):
            return index
        index = index + 1
    return -1


def getIndexOfNumberInArrayWithWhileFast(arr: list[int], searchNumber: int) -> int:
    index = 0
    len_arr = len(arr)
    index_middle = int(len_arr / 2)
    if arr[index_middle] < searchNumber: # the number is to the right
        index = index_middle

    while index < len_arr:
        element = arr[index] 
        if (element == searchNumber):
            return index
        index = index + 1
    return -1


arr = [i for i in range(10**9)]
start_time = time.time()
getIndexOfNumberInArrayWithWhileFast(arr=arr, searchNumber=(10**9)/2 + 3)
end_time = time.time()
execution_time = end_time - start_time
print(f"The function executed in {execution_time} seconds.")
