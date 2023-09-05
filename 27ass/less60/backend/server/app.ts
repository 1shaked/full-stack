import express from 'express';
import { ProductsRouter } from './products';



const app = express();

app.use('/products', ProductsRouter)

app.get('/', (request , response) => {
    response.send({
        x: 'hey ma'
    });
});


// [ '/' , '/products',  ],
// /news [/main, /hotNews, /lastNews ]
// /sales [/lastSales, /topSale,  ]
app.listen(3300, () => {
    console.log('I am listening!');
});


