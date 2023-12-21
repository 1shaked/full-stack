debugger;
try {
    // code that may throw an exception
    const result = 10 / 0;
    console.log(`The result is ${result}`);
  } catch (e) {
    // handle the exception
    console.error(`An error occurred: ${e.message}`);
  }

/*
Using try/catch in TypeScript allows you to gracefully handle exceptions that may occur during the execution of your code. 
It can help make your code more resilient and less likely to crash or produce unexpected behavior.
 */