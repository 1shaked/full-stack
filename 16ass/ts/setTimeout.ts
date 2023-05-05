const num = 4;

// function print() {
//     console.log(`Number: --> `);
// }

// setTimeout(print, 1000 * 2);
// setTimeout(print, 1000 * 60 * 4);
for (let index = 0; index < num; index ++) {
    setTimeout(() => {
        console.log(`hey -> ${index}`);
    }, 2000 * (index + 1));
}

const mileSecond = 1000 * 3;
const count = 3;
for (let index = 0; index < count; index++) {
    
    setTimeout(() => {
        console.log(`hey -> ${index}`);
    }, mileSecond * (index + 1));
}