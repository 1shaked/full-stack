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



start_time = time.time()
getIndexOfNumberInArray(arr=[i for i in range(10**6)], searchNumber=850000)
end_time = time.time()
execution_time = end_time - start_time
print(f"The function executed in {execution_time} seconds.")
