import express from "express";
import * as trpcExpress from '@trpc/server/adapters/express';
import { appRouter } from "./trpc";
import cors from 'cors'
const app = express();

app.use(cors({
    origin: ['http://localhost:5173']
}));

app.get('/', async (req, res) => {    
    console.log('hey')
    res.send({
        message: "hello world",
    })
});

app.post('/addPost', (req, res) => {
    // code that save the data

    // send response

    res.send({
        message: 'data saved'
    })
});

app.use(
    '/trpc',
    trpcExpress.createExpressMiddleware({
        router: appRouter,
        // createContext,
    }),
); 

app.listen(3301, () => {
    console.log('server is running on port 3301')
})