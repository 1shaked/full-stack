
# 3! = 3 * 2 * 1
# 4! = 4 * 3 * 2 * 1
# 5! = 5* 4 * 3 * 2 * 1
# 6! = 6* 5!
# 7! = 7* 6!


def fact(num: int):
    index = 1
    multi_total = 1
    while index <= num:
        multi_total = multi_total * index
        index = index + 1
    
    return multi_total


def fact_r(num: int):
    if num == 0 or num == 1:
        return 1
    prev_fact = fact_r(num - 1) 
    return prev_fact * num


print(fact_r(5))