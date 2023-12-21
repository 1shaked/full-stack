function a() {
  console.log("Entering function a");
  b();
  console.log("Leaving function a");
}

function b() {
  console.log("Entering function b");
  console.log("Leaving function b");
}

console.log("Starting");
a();
console.log("Finishing");