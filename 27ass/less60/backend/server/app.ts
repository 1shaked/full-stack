import express from 'express';
import { ProductsRouter } from './products';
// import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()
import cors from 'cors'


const app = express();
app.use(cors({
    origin: ['http://localhost:5173']
}))
// app.use(cors(
//     {
//       origin: ['http://127.0.0.1:5173', 'http://another-domain.com']
//     }
//   ));
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


