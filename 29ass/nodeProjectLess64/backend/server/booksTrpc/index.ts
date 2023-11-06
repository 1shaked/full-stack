import { initTRPC } from '@trpc/server';
 const t = initTRPC.create();
const router = t.router;
const publicProcedure = t.procedure;
const appRouter = router({
    booksList: publicProcedure.query(async () => {
        // go to the database and fetch the books
        return [1, 2 ,3]
    }),
    booksListShaked: publicProcedure.query(async () => {
        // go to the database and fetch the books
        return ['x' , 'y']
    }),
       
});


export type AppRouter = typeof appRouter;