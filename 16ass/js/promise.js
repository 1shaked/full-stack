function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = "Hello, world!";
            if (data) {
                resolve(data);
            }
            else {
                reject(new Error("No data found"));
            }
        }, 1000);
    });
}
fetchData()
    .then((result) => {
    console.log(result);
})
    .catch((error) => {
    console.error(error);
});
/*
In this example, we create a new Promise object using the new keyword and pass in a function that performs some asynchronous operation.

If the operation is successful, we call the resolve function and pass in the result value. If the operation fails, we call the reject function and pass in an Error object with an error message.

So, yes, you need to use the new keyword to create a new Promise object in JavaScript.
 */ 
//# sourceMappingURL=promise.js.map