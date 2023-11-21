# create blueprint
class Person :
    def __init__(self, nameOfPerson, ageOfPerson):
        self.name = nameOfPerson
        self.age = ageOfPerson

    def greet(self):
        print(f'Hello {self.name}')

    def incrementAge(self):
        self.age = self.age + 1

# create the object from the blueprint
p1 = Person('y', 24)
print(p1.age)
p1.incrementAge()
print(p1.age)
p1.greet()