async function getData() {
    const response = await fetch('http://localhost:3301/x');
    const data = await response.json()
    console.log(data)
    return data
}

/*
fetch('http://localhost:3301/x').then((res) => {
    console.log(res)
    return res.json()
}).then((data) => {
    console.log(data)
})
 */