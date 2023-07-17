// Defining an interface
interface User {
    name: string;
    age: number;
  }
  
  // Creating a User object
  let user: User = {
    name: 'Alice',
    age: 25
  };
  
  // Creating a Proxy for the User
  let userProxy = new Proxy<User>(user, {
    get: function(target, prop) {
      if (prop in target) {
        return target[prop as keyof User];
      } else {
        throw new Error(`No such property: ${String(prop)}`);
      }
    },
    
    set: function(target, prop, value) {
      if (prop in target) {
        (target as any)[prop] = value;
      } else {
        throw new Error(`No such property: ${String(prop)}`);
      }
      return true;  // indicates successful assignment
    }
  });
  
  // Working with the Proxy
  console.log(userProxy.name);  // Alice
  
  userProxy.age = 30;  // successful assignment
  console.log(userProxy.age);  // 30
  
  try {
    // console.log(userProxy.job);  // throws Error: No such property: job
  } catch (error) {
    console.error(error);
  }
  
  try {
    // userProxy.job = 'developer';  // throws Error: No such property: job
  } catch (error) {
    console.error(error);
  }
  