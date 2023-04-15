
let bgColor = prompt('which color do you want') 

let root = document.querySelector(':root');

root.style.setProperty('--back', bgColor);

let fontSize = prompt('which font size do you want') 

root.style.setProperty('--fontSize', fontSize);

