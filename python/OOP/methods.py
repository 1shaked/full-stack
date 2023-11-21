# create blueprint
class Person :
    def __init__(self, nameOfPerson, ageOfPerson):
        self.name = nameOfPerson
        self.age = ageOfPerson

    def greet(self):
        print(f'Hello {self.name}')    

# create the object from the blueprint
p1 = Person('y', 24)
p1.greet()