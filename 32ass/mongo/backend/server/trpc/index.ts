import { prismaDB } from '../connection';
import { publicProcedure, router } from './trpc';

export const appRouter = router({
  // ...
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