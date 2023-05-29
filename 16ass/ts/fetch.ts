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

// console.log('wow');

async function paintPost () {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    const el = document.getElementById('body');
    console.log(data);
    const title = document.createElement('h2');
    title.textContent = data.title;
    const content = document.createElement('p');
    content.textContent = data.body;
    el.appendChild(title);
    el.appendChild(content);
}
async function printName () {

    for (let i = 0; i < 10; i++) {
        console.log(i);
        
    }
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    console.log(response);
    
}

console.log('fetch.ts'); // 1 
printName(); // 1.5 until the await     
// paintPost(); // 3

console.log('wow'); // 2
for (let i = 0; i < 10000000; i++) {
    
}
console.log(10000000);
