import { publicProcedure, router } from './trpc';

export const appRouter = router({
  // ...
  posts: publicProcedure.query(async () => {
    return [10, 20 ,30, 40];
  })
});
// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;