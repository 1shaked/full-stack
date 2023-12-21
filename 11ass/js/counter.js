

let count = 0;

let decrement = document.getElementById('decrement');
let increment = document.getElementById('increment');
let counterBtn = document.getElementById('counter');
let reset = document.getElementById('reset');

function incrementFunction() {
    count = count + 1;
    counterBtn.textContent = count;
    if (count > 0) {
        decrement.style.fontSize = '25px';        // decrement.setAttribute('font-size', '0rem');
        decrement.style.border = '1px solid currentColor';  
    }
}
function decrementFunction() {
    count = count - 1;
    if (count == -1) {
        count = 0;
    }
    counterBtn.textContent = count;
    if (count == 0) {
        decrement.style.fontSize = '0px';        // decrement.setAttribute('font-size', '0rem');
        decrement.style.border = 'none';        // decrement.setAttribute('font-size', '0rem');
        // decrement.style.display = 'none';
    }
}

function resetFunction() {
    count = 0;
    counterBtn.textContent = count;
}


increment.addEventListener('click', incrementFunction);
decrement.addEventListener('click', decrementFunction);
reset.addEventListener('click', resetFunction);