import express from "express";

const app = express();

app.get('/', (req , res) => {
    console.log('hey ma!')
    res.send({
        message: 'hey ma'
    })
})

app.get('/x', (req , res) => {
    res.send({
        message: 'hello world'
    })
})


app.listen(3301, () => {
    console.log('server is running on port 3301')
});