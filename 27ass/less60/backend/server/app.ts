import express from 'express';
import { ProductsRouter } from './productsRouter';
// import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()
import cors from 'cors'
import { blogRouter } from './blogRouter';


const app = express();
app.use(express.json()); // add this so the data is as json


app.use(cors({
    origin: ['http://localhost:5173', 'http://127.0.0.1:5173']
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


app.use('/blog', blogRouter)
// [ '/' , '/products',  ],
// /news [/main, /hotNews, /lastNews ]
// /sales [/lastSales, /topSale,  ]
app.listen(3300, () => {
    console.log('I am listening!');
});


