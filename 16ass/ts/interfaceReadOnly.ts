interface User {
    readonly id: number;
    name: string;
    age: number;
  }
  
  const user: User = {
    id: 1,
    name: "John",
    age: 30,
  };
  
//   user.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.

export {};
