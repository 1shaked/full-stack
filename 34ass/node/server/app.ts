import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send({
        message: "hello world"
    })
})

app.listen(3301, () => {
    console.log('server is running on port 3301')
})