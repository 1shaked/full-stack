'''
write a function that take array of numbers and calculates the multiplication of all of them

example [1 ,  2, 3 ] -> 6

example [1 ,  2, 4 ] -> 8

example [2 ,  2, 4 ] -> 16

example [2 ,  3, 4 ] -> 24

'''

def MultiArray(array: list[int]):
    count_multi = 1
    for num_in_arr in array:
        count_multi = count_multi * num_in_arr

    return count_multi


arr1 = [1 , 2 , 3]
res_arr1 = MultiArray(array = arr1)
# print(arr1)
# print(res_arr1)
print(f'{arr1} ---> {res_arr1}')


arr2 = [1 , 2 , 3]
res_arr2 = MultiArray(array = arr2)
print(f'{arr2} ---> {res_arr2}')