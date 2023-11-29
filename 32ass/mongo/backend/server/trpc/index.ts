import { prismaDB } from '../connection';
import { publicProcedure, router } from './trpc';
import {AuthorRouter} from './authorRouter'
export const appRouter = router({
  // ...
  author: AuthorRouter,
  posts: publicProcedure.query(async () => {
    
    return prismaDB.post.findMany();
  }),
  authors: publicProcedure.query(async () => {
    
    return prismaDB.author.findMany();
  }),
});
// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;