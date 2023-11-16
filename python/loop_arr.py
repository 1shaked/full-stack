arr = ['apple', 5 , 'MSI', True]
#        0      1    2      3
# len(arr) = 4

# while loop
index = 0
while index < len(arr):
    print(f'The value at {index} is {arr[index]}')
    index = index + 1

# for loop
for item in arr: 
    print(f'The value is {item}')

# for loop with enumerate