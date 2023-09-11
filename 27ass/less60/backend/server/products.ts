import { Router} from 'express'
import { prismaDB } from './dbConnection';

// [/topProduct, /example ]

export const ProductsRouter = Router(); // create the router

ProductsRouter.get('/topProduct', (req , res) => {
    res.send({
        price: 100,
        name: 'Xw',
        id: 573
    })
})

ProductsRouter.get('/example', async (req , response) => {
    const data = await prismaDB.films.findMany(); // select data from db    
    response.send(data);
})

/*
{
    '/x': f1,
    '/y': f2,
    'z' : f3
}

*/