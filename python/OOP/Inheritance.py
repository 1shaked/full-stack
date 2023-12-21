# parent class
class Animal:
    def __init__(self, species: str, age: int=0):
        self.species = species
        self.age = age
        
    def makeSound(self):
        print('making sound')

    def x(self):
        print('x')

# child class
class Dog(Animal):
    def __init__(self, age: int, name: str):
        super().__init__('Dog', age)
        self.name = name
    def bark(self):
        print('bark bark')

    def x(self):
        print('custom x')

d1 = Dog(3, 'pako')

d1.bark()

d1.x()