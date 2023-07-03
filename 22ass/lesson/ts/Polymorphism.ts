class Animal {
    protected _name: string;
  
    constructor(name: string) {
      this._name = name;
    }
  
    public makeSound(): void {
      console.log("Animal makes a sound");
    }
  }
  
  class Cat extends Animal {
    public makeSound(): void {
      console.log("Meow");
    }
  }
  
  class Dog extends Animal {
    public makeSound(): void {
      console.log("Woof");
    }
  }
  
  // Create an array of Animal objects
  const animals: Animal[] = [
    new Cat("Whiskers"),
    new Dog("Buddy"),
    new Cat("Fluffy"),
  ];
  
  // Call makeSound() method on each object
  animals.forEach((animal: Animal) => {
    animal.makeSound();
  });
  
  /*
  In this example, we have a base class Animal that represents an animal with a _name property and a makeSound() method. The makeSound() method is implemented with a generic message in the base class.

The Cat and Dog classes extend the Animal class. They override the makeSound() method with their own specific sound implementations.

We then create an array animals containing instances of both Cat and Dog objects. By calling the makeSound() method on each object, we can observe polymorphic behavior. The specific sound implementation of each subclass is invoked based on the object type at runtime.



This demonstrates polymorphism, where objects of different classes are treated as instances of their base class (Animal), but each object's specific behavior (method implementation) is invoked dynamically based on its actual type at runtime.
 */