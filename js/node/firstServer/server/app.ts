import express from "express";
import cors from 'cors'
import {router_product} from './router/product'
import {test_router} from './router/test'
const app = express();


app.use(cors({
    origin: '*'
}));

app.use('/product', router_product)
app.use('/test', test_router )

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
    console.log('server is running on port 3301!')
});