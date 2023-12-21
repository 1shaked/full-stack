

let count = 0;

let loremEl = document.getElementById('lorem');

let increment = document.getElementById('increment');

let decrement = document.getElementById('decrement');

function buttonClicked() {
    count = count + 1;
    // alert('the button clicked ' + count);
    loremEl.textContent = 'you clicked ' + count + ' times'
}

function buttonDecrementClicked() {
    count = count - 1;
    // alert('the button clicked ' + count);
    loremEl.textContent = 'you clicked ' + count + ' times'
}


increment.addEventListener('click', buttonClicked);

decrement.addEventListener('click', buttonDecrementClicked);





