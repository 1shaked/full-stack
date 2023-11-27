import express from 'express';
import cors from 'cors'
import {run} from './test'

const app = express(); // create the server and save the ref in the app variable
run()
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173']
}));

app.get('/' , (req, res) => {
    res.send({
        message: 'started my project'
    })
})

app.listen(3301, () => {
    console.log('listening on 3301')
})
