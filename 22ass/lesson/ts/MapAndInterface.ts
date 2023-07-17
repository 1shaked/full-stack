// Define the User interface
interface User {
    name: string;
    age: number;
  }
  
  // Define the Map with string keys and User values
  let users: Map<string, User> = new Map();
  
  // Now you can only add users that conform to the User interface
  users.set('user1', { name: 'Alice', age: 25 });
  users.set('user2', { name: 'Bob', age: 30 });
  
  // Trying to add an invalid user will result in a compile error
//   users.set('user3', { name: 'Charlie' });  // Error: Property 'age' is missing
  

export {};