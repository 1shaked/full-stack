
arr = [
    ['a', 'b', 'c'], # 0
    ['d', 'e', 'f', 'g', 'h', 'i', 'j', 'k',], # 1
    ['l', 'm', 'n', 'o', 'p', 'q'], # 2
    ['r', 's', 't', 'u'], # 3
    [1 , 2, 3]
]

# len(arr) # 4

# print(arr[3][2]) # t

for listOfLetters in arr:
    # print(listOfLetters)
    for letter in listOfLetters:
        print(letter)
