function greet(person: { name: string; age: number }) {
  return "Hello " + person.name;
}

let user: { name?: string; age: number } = {
    // name: "Jane User",
    age: 20
}

let user1 = {
    name: "Jane User",
    age: 20
}

interface Person {
  name: string;
  age: number;
}

export {};