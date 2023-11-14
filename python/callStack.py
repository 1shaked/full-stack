

def first(n):
    print(f'first -> {n}')
    second(n-1)

def second(n):
    print(f'second -> {n}')
    third(n-1)


def third(n):
    print(f'third {n}')
    fourth(n-1)

def fourth(n):
    print(f'fourth {n}')


first(4)