const num = 4;

function print() {
    console.log(`Number: --> `);
}
// setTimeout(print, 1000 * 60 * 4);
for (let index = 0; index < num; index ++) {
    setTimeout(() => {
        console.log(`hey -> ${index}`);
    }, 2000 * (index + 1));
}

