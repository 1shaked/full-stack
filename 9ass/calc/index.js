let keepAsking = true;

while (keepAsking) {
  //1) get the first number from the user
  let firstNumber = prompt("Please enter the first number");
  firstNumber = parseInt(firstNumber);
  //2) get the operator from the user
  let operator = prompt("Please the operator"); // + - % * /
  //3) get the other number from the user
  let secondNumber = prompt("Please enter the second number");
  secondNumber = parseInt(secondNumber);
  //4) calculate the result and alert it to the screen
  if (operator == "+") {
    alert(firstNumber + secondNumber);
  }
  if (operator == "-") {
    alert(firstNumber - secondNumber);
  }
  if (operator == "*") {
    alert(firstNumber * secondNumber);
  }
  if (operator == "/") {
    alert(firstNumber / secondNumber);
  }
  if (operator == "%") {
    alert(firstNumber % secondNumber);
  }

  let answer = prompt('do you want to keep calculations yes or no')

  if (answer == "no") {
    keepAsking = false;
  }
}
