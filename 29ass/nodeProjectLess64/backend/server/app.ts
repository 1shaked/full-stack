import express from "express";
import cors from 'cors'
import { blogRouter } from "./blog";
import * as trpcExpress from '@trpc/server/adapters/express';
import { appRouter } from "./trpc/index";
import { createContext } from "./utils/trpcExpressContent";
import cookieParser from "cookie-parser";
const app = express();
app.use(express.json());
app.use(cookieParser())
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true,
}));
app.use(cookieParser()); // parse the cookies
app.use('/blog', blogRouter); // /blog give it to the blogRouter 




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