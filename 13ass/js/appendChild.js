

let source = document.getElementById('source');
let newDiv = document.createElement('div');

newDiv.textContent = 'Hello world';

newDiv.classList.add('yee');
// newDiv.classList.remove('yee');

source.appendChild(newDiv);
