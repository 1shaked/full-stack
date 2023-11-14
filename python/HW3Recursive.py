'''
create a recursive function that calculates the fibonacci sequence 
fib(0) = 1 
fib(1) = 1
fib(2) = 2
fib(3) = 3
fib(4) = 5
fib(5) = 8
fib(6) = 13
fib(7) = 21
fib(8) = 34

fib(5) = fib(4) + fib(3)
fib(x) = fib(x - 1) + fib(x - 2)

'''

'''
create a recursive function that counts the total numbers of sub arrays

countArray([ [] ]) -> 2
countArray([ [ [] ] ]) -> 3
countArray([ [] , [] ]) -> 3
countArray([ [4] , [2] ]) -> 3
countArray([ [4] , [9], 100 ]) -> 3
countArray([ [-1], 100 , [200], 3 ]) -> 3
countArray([ [] , [ [] ] ]) -> 4
countArray([ [] , [ [] ] ], []) -> 4
countArray([ [] , [ [] ] ], [], []) -> 5
countArray([ [] , [ [] ] ], [], [ [] ]) -> 6
countArray([ [] , [ [] ] ], [], [ [ [] ] ]) -> 8

'''

'''
create a recursive function that counts how many sub objects are there

countSubObject( {} ) -> 1
countSubObject( { 'a': {} } ) -> 2
countSubObject( { 'a': {}, 'b': {} } ) -> 3
countSubObject( { 'a': {}, 'b': { 'c': 2 } } ) -> 3
countSubObject( { 'a': {}, 'b': { 'c':  {} } } ) -> 4
'''

'''
write a recursive function search (binary) function that take a number and search for it in the sorted array

findInArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) -> 2 
findInArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 5) -> 6 
findInArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 5.5) -> -1 
'''

'''
create a recursive function that counts the max depth numbers of sub arrays

countMaxDepth([ [] ] ) -> 1
countMaxDepth([ [] , [ [] ] ] ) -> 2
countMaxDepth([ [] , [ [] ] ] , [ [ [] ] ]) -> 3
countMaxDepth([ [] , [ [] ] ] , [ [ ] ]) -> 2
countMaxDepth([ [ [ [4 , [] ] ] ] , [ [] ] ] , [ [ ] ]) -> 4

'''