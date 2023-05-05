fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        debugger;
        const el = document.getElementById('body');
        console.log(data);
        const title = document.createElement('h2');
        title.textContent = data.title;
        const content = document.createElement('p');
        content.textContent = data.body;
        el.appendChild(title);
        el.appendChild(content);
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });

