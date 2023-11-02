'''
write a function that take an array of map of shape
{ 'name': string, 'lastName': string, age: number}

and calculate the sum of the letters + age

example [ {name: 'j', age:1, lastName: 'x'} ] -> 3

example [ {name: 'jj', age:1, lastName: 'x'} ] -> 4

example [ {name: 'jj', age:2, lastName: 'x'} ] -> 5

example [ {name: 'jj', age:1, lastName: 'xx'} ] -> 5

example [ {name: 'jj', age:2, lastName: 'xy'} ] -> 6

example [ {name: 'jj', age:2, lastName: 'xyw'} ] -> 7

example [ {name: 'jj', age:3, lastName: 'xyw'} ] -> 8

example [ {name: 'jj', age:3, lastName: 'xyw'} , {name: 'j', age:1, lastName: 'x'}] -> 11

'''

def CalculateSumArrObject(array: list[dict[str, any]]): # create the function to calculate the sum
    count = 0 # create the count for the array, to be used
    for human_dict in array: # looping on the human dictionary
        len_name = len(human_dict['name']) # get len of the name 
        len_last = len(human_dict['lastName']) # get the len last name
        count = count +  len_name + human_dict['age'] + len_last # calculate the sum for this human  

    return count # return the count to use


# create the arr1 to use as example
arr1 = [ {'name': 'jj', 'age':3, 'lastName': 'xyw'} , {'name': 'j', 'age':1, 'lastName': 'x'}]
# save the result in a variable res_arr1
res_arr1 = CalculateSumArrObject(array = arr1)
# print the result
print(f'{arr1} --> {res_arr1}')