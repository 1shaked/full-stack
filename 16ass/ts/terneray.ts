debugger;
let numberOfKids: number  =parseInt( prompt('how many kids do you have?'));
let ifBigFamily: boolean = numberOfKids > 3;

let textContent: string = ifBigFamily ? 'you have a big family' : 'you have a small family';
console.log(textContent);

console.log(ifBigFamily ? 'you have a big family' : 'you have a small family');
// condition ? true : false
if (ifBigFamily) console.log('you have a big family');

else console.log('you have a small family');

// console.log(ifBigFamily);


