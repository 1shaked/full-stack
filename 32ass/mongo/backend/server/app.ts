import express from 'express';
import cors from 'cors'
import * as trpcExpress from '@trpc/server/adapters/express';
import { appRouter } from "./trpc/index";
// import { insertDataPersonAndHomes } from './scripts/insertDataPersonAndHomes';

// insertDataPersonAndHomes(2)

const app = express(); // create the server and save the ref in the app variable
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173']
}));
app.use(
    '/trpc',
    trpcExpress.createExpressMiddleware({
        router: appRouter,
        // createContext,
    }),
); 
app.get('/' , (req, res) => {
    res.send({
        message: 'started my project'
    })
});





app.listen(3301, () => {
    console.log('listening on 3301')
})

