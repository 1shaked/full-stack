const url = 'https://jsonplaceholder.typicode.com/users';
fetch(url)
    .then(response => response.json())
    .then(data => {
    console.log(data);
})
    .catch(error => {
    console.error('Error fetching data:', error);
});
//# sourceMappingURL=gettingData.js.map