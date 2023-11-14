

# fact(8)
# 8 * fact(7)
# fact(7) = 7 * fact(6)

# fact(6) = 6 * fact(5)

# fact(5) = 5 * fact(4)

#...
# fact(1) = 1

def factorial(num: int) -> int:
    if (num == 1):
        return 1
    factorial_num_minus1 = factorial(num - 1 )
    return num * factorial_num_minus1

# factorial(4) = 4 * factorial(3)
# factorial(3) = 3 * factorial(2)
# factorial(2) = 2 * factorial(1)
# factorial(1) = 1
# factorial(2) = 2 * 1
# factorial(3) = 3 * 2
# factorial(4) = 4 * 6

# SUMuntil(num) 
# SUMuntil(3) = 3 + 2 + 1
# SUMuntil(4) = 4 + 3 + 2 + 1
# SUMuntil(5) = 5 + 4 + 3 + 2 + 1

# sumFlip(num) # get a number and sum the number and then is negative
#  sumFlip(3) # 3 -2 + 1
#  sumFlip(4) # 4 -3 + 2 - 1
#  sumFlip(-4) # -4 +3 - 2 + 1
#  sumFlip(5) # 5 -4 + 3 - 2 + 1

# factorial(4) = 4 * 3 * 2 * 1
print(factorial(4))