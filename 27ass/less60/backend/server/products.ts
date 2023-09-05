import { Router} from 'express'

// [/topProduct, /example ]

export const ProductsRouter = Router(); // create the router

ProductsRouter.get('/topProduct', (req , res) => {
    res.send({
        price: 100,
        name: 'Xw',
        id: 573
    })
})

ProductsRouter.get('/example', (req , response) => {
    response.send({
        price: 100,
        name: 'w',
        id: 573
    })
})

/*
{
    '/x': f1,
    '/y': f2,
    'z' : f3
}

*/