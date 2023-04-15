

debugger;
let newEl = document.createElement('div');
newEl.textContent = 'Hello world';

let secondEl = document.getElementById('second');

let source = document.getElementById('source');

source.replaceChild(newEl, secondEl)