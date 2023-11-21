# size , wheels , company  , ...

# drive , reverse , park , N , bth  , ac ...

# create blueprint
class Person :
    def __init__(self, nameOfPerson, ageOfPerson):
        self.name = nameOfPerson
        self.age = ageOfPerson
    

# create the object from the blueprint
p1 = Person('shaked', 24)
print(p1.name)
p1.name = 'John'
print(p1.name)
print(p1.age)