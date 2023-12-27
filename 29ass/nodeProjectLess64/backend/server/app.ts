import express from "express";
import cors from 'cors'
import { blogRouter } from "./blog";
import * as trpcExpress from '@trpc/server/adapters/express';
import { appRouter } from "./trpc/index";
import { Request } from 'express'
import { CreateExpressContextOptions } from "@trpc/server/adapters/express";

type ExpressRequest = Omit<CreateExpressContextOptions, 'req'> & {
  req: Request
}
const app = express();
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173']
}));

app.use('/blog', blogRouter); // /blog give it to the blogRouter 


// created for each request
const createContext = ({
    req,
    res,
  }: trpcExpress.CreateExpressContextOptions) => ({ req }); // no context
export type Context = Awaited<ReturnType<typeof createContext>>;


app.use(
    '/trpc',
    trpcExpress.createExpressMiddleware({
        router: appRouter,
        // createContext,
        createContext: createContext,
    }),
);
// app.use('/books', 
//     trpcExpress.createExpressMiddleware({router: booksAppRouter}))
app.listen(3300, () => {
    console.log('app is running!')
});