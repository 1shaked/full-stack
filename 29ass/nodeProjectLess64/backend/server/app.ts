import express from "express";
import cors from 'cors'
import { blogRouter } from "./blog";
import * as trpcExpress from '@trpc/server/adapters/express';
import { appRouter } from "./trpc";
import {appRouter as booksAppRouter} from './booksTrpc/index'
const app = express();
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173']
}));

app.use('/blog', blogRouter); // /blog give it to the blogRouter 

app.use(
    '/trpc',
    trpcExpress.createExpressMiddleware({
        router: appRouter,
        // createContext,
    }),
);
app.use('/books', 
    trpcExpress.createExpressMiddleware({router: booksAppRouter}))
app.listen(3300, () => {
    console.log('app is running!')
});