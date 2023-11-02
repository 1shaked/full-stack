'''
write a function that take array of numbers and calculates the multiplication of all of them

example [1 ,  2, 3 ] -> 6

example [1 ,  2, 4 ] -> 8

example [2 ,  2, 4 ] -> 16

example [2 ,  3, 4 ] -> 24

'''

def MultiArray(array: list[int]):
    count_multi = 1
    for num in array:
        count_multi = count_multi * num

    return count_multi


arr1 = [1 , 2 , 3]
res_arr1 = MultiArray(arr1)
print(f'example {arr1} - {res_arr1}')


arr2 = [1 , 2 , 3]
res_arr2 = MultiArray(arr2)
print(f'example {arr2} - {res_arr2}')