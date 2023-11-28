import express from "express";

const app = express();


app.get('/', (req , res) => {
    console.log('hey ma!')
    res.send({
        message: 'hey ma', "arr": [1 , 2 , 3]
    })
})

app.get('/x', (req , res) => {
    console.log('request was sent')
    res.send({
        message: 'hello Dror',
        arr: [true, 9, [0 , 1,  2 , 3] ]
    })
})


app.listen(3301, () => {
    console.log('server is running on port 3301')
});