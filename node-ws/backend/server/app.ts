import express from 'express'


const app = express();



app.get('/example', (req, res) => {
    res.send({
        message: 'wow',
        title: 'no title'
    })
})

const PORT = process?.env?.PORT ?? 8080
app.listen(PORT, () => {
    console.log(`app is running on ${PORT}`)
})