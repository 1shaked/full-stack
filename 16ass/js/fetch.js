// console.log('fetch.ts');
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then((response) => {
//         return response.json()
//     })
//     .then((data) => {
//         debugger;
//         const el = document.getElementById('body');
//         console.log(data);
//         const title = document.createElement('h2');
//         title.textContent = data.title;
//         const content = document.createElement('p');
//         content.textContent = data.body;
//         el.appendChild(title);
//         el.appendChild(content);
//     })
//     .catch(error => {
//         console.error('There has been a problem with your fetch operation:', error);
//     });
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// console.log('wow');
function paintPost() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = yield response.json();
        const el = document.getElementById('body');
        console.log(data);
        const title = document.createElement('h2');
        title.textContent = data.title;
        const content = document.createElement('p');
        content.textContent = data.body;
        el.appendChild(title);
        el.appendChild(content);
    });
}
function printName() {
    return __awaiter(this, void 0, void 0, function* () {
        for (let i = 0; i < 10; i++) {
            console.log(i);
        }
        const response = yield fetch('https://jsonplaceholder.typicode.com/posts/1');
        console.log(response);
    });
}
console.log('fetch.ts'); // 1 
printName(); // 1.5 until the await     
// paintPost(); // 3
console.log('wow'); // 2
for (let i = 0; i < 10000000; i++) {
}
console.log(10000000);
//# sourceMappingURL=fetch.js.map