import express from 'express';
import cors from 'cors'
import * as trpcExpress from '@trpc/server/adapters/express';
import { appRouter } from "./trpc/index";
import path from 'path'
// import { insertDataPersonAndHomes } from './scripts/insertDataPersonAndHomes';

// insertDataPersonAndHomes(2)

const app = express(); // create the server and save the ref in the app variable
app.use(express.json());
app.use(cors({
    origin: ['*']
}));

app.use(
    '/trpc',
    trpcExpress.createExpressMiddleware({
        router: appRouter,
        // createContext,
    }),
); 
// app.get('/' , (req, res) => {
//     res.send({
//         message: 'started my project'
//     })
// });

// app.use(
//     express.static(path.join(__dirname , '../client'))
// );

// app.get('*' , (req, res) => {
//     res.sendFile(path.join(__dirname, '../client/index.html'))
// })





app.listen(3301, () => {
    console.log('listening on 3301')
})

