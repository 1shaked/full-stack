'''
create a variable name first_name with the value 'wow' and print his value
'''
first_name = 'wow'
print(first_name)
'''
create a variable name age with the value 48 and print his value
'''
age = 48
print(age)

'''
create a variable name  first_name ,last_name with the values 'x' and 'y' respective value
print the values as the following 'x -- y'
'''
first_name = 'x'
last_name = 'y'
print(first_name + ' -- ' + last_name) # option
print(f'{first_name} -- {last_name}') # option

'''
create a variable name arr with the value [0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8]
and calculate his sum
'''
arr = [0 , 1 , 2, 3, 4, 5 , 6 , 7 ,8]
print(sum(arr))
sum_arr = 0
for num in arr:
    sum_arr = sum_arr + num
print(sum_arr)

'''
create a variable name arr with the value [ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8]
and calculate his multiplication
'''
arr = [ 1 , 2, 3, 4, 5 , 6 , 7 ,8]
multi_arr = 1
for x in arr:
    multi_arr = multi_arr * x


print(multi_arr)

# index = 0
# multi_arr = 1
# while index < len(arr):
#     multi_arr = multi_arr * arr[index]
#     index = index + 1


'''
create a variable name obj with the value { name: 'x' , lastName: 'y' } 
and print his value
'''
obj = { "name": 'x', 'lastName': 'y'} # dict(name='x', lastName=y)
print(obj)
'''
create a variable name obj with the value { name: 'x' , lastName: 'y' } 
and print his value as the following 'x -- y'
'''
obj = dict(name='x', lastName='y')
print(f'{obj["name"]} -- {obj["lastName"]}')

'''
create a variable name arr with the value [ { name: 'x' , lastName: 'y' } , { name: 'w' , lastName: 'z' } ] 
and print his value as the following 
'x -- y'
'w -- z'
'''
arr = [ { 'name': 'x' , 'lastName': 'y' } , { 'name': 'w' , 'lastName': 'z' } ]
for obj in arr:
    print(f'{obj["name"]} -- {obj["lastName"]}')

'''
create a variable name arr with the value [ 's1' , 's2' , 's3' , 's4' , 's5' , 's6' , 's7' , 's8' ] 
and print his value as the following 
's1'
's2'
's3'
's4'
's5'
's6'
's7'
's8'
'''
arr = [ 's1' , 's2' , 's3' , 's4' , 's5' , 's6' , 's7' , 's8' ] 
for text in arr:
    print(text)
'''
create a while loop that loops over an array and print all the indexes
example = [1, 2] -> 0 ,1
example = [3, 4] -> 0 ,1
example = [3, 4, 5] -> 0 ,1, 2
example = [3, 8, 5] -> 0 ,1, 2
example = [3, 4, 5, 10] -> 0 ,1, 2, 3
'''

index = 0
arr = ['x', 1 , 's', 'y']
while index < len(arr):
    print(index)
    index = index  + 1

'''
create a while loop that loops over an array and print all the values
example = [1, 2] -> 1 ,2
example = [3, 4] -> 3 ,4
example = [3, 4, 5] -> 3 ,4, 5
example = [3, 8, 5] -> 3 ,8, 5
example = [3, 4, 5, 10] -> 3 ,4, 5, 10
'''
example = [3, 4, 5, 10] 
index = 0 
while index < len(example):
    print(example[index] , end=', ')
    index = index + 1


'''
create a while loop that loops over an array and print all the values and indexes
example = [1, 2] -> 0 1 ,1 2
example = [3, 4] -> 0 3 ,1 4
example = [3, 4, 5] -> 0 3 ,1 4, 2 5
example = [3, 8, 5] -> 0 3 ,1 8, 2 5
example = [3, 4, 5, 10] -> 0 3 ,1 4, 2 5, 3 10
'''

'''
create a function that take a string and returns his len
example = 'x' -> 1
example = 'xy' -> 2
example = 'xyz' -> 3
example = 'xyzw' -> 4
'''
def printLen(s: str):
    return len(s)
print(printLen('x'))
print(printLen('xy'))
print(printLen('xyz'))
print(printLen('xyzw'))

'''
create a function that take a string and returns his len + 1
example = 'x' -> 2
example = 'xy' -> 3
example = 'xyz' -> 4
example = 'xyzw' -> 5
'''
def printLenPlusOne(s: str):
    return len(s) + 1

'''
create a function that take a string and reverse it
example = 'x' -> 'x'
example = 'xy' -> 'yx'
example = 'xyz' -> 'zyx'
example = 'xyzw' -> 'wzyx'
'''

def reverseString(s: str):
    return s[::-1]

def reverseString2(s: str):
    text_rev = ''
    for letter in s:
        text_rev = f'{letter}{text_rev}'

print('----------')
print(reverseString2('ABCD')) 

'''
create a function that take a string and count how many spaces there is in the string
example = 'x' -> 0
example = 'xy' -> 0
example = 'x yz' -> 1
example = 'x y z' -> 2
example = 'x y z w' -> 3
'''
def countSpaces(s: str):
    count_space = 0
    for letter in s:
        if letter == ' ':
            count_space = count_space + 1
    
    return count_space

'''
create a function that take two string and count how many time this string apers in the other string
example = 'x' , 'x' -> 1
example = 'xy' , 'x' -> 1
example = 'x yz' , 'x' -> 1
example = 'x y z' , 'x' -> 1
example = 'x y x w' , 'x' -> 2
example = 'x y x x' , 'x' -> 3
example = 'x x x x' , 'x' -> 4
example = 'x x x x' , 'x' -> 4
'''
def countCharInString(longStr: str, char: str):
    count_char = 0
    for letter in longStr:
        if letter == char:
            count_char = count_char + 1
    
    return count_char
