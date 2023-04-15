

// num % 2  -> fizz
// num % 3  -> buzz
// num % 2 and num % 3 ->> FizzBuzz
let fizzBuzz = document.getElementById('fizzBuzz');

let num = prompt('choose your number?'); 
num = parseInt(num);
let count = 1;
while (count <= num) {
    if (count % 2 == 0 && count % 3 == 0) {
        fizzBuzz.textContent = fizzBuzz.textContent + ' count = ' + count + ' FizzBuzz'
    }
    else if (count % 2 == 0) {
        fizzBuzz.textContent = fizzBuzz.textContent + ' count = ' + count + ' Fizz';
    }
    else if (count % 3 == 0) {
        fizzBuzz.textContent =  fizzBuzz.textContent+ ' count = ' + count +  ' Buzz';
    }

    count = count + 1;
}
/*
 text = ''
 ->
 text = '' + count = 2 Fizz
 ->
 text = count = 2 Fizz ' ' count = 3 Buzz
 ->
*/
/*

if (num % 2 == 0 && num % 3 == 0) {
    fizzBuzz.textContent = 'FizzBuzz'
}
else if (num % 2 == 0) {
    fizzBuzz.textContent = 'Fizz';
}
else if (num % 3 == 0) {
    fizzBuzz.textContent = 'Buzz';
}
 */
