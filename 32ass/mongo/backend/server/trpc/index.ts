import { publicProcedure, router } from './trpc';

const appRouter = router({
  // ...
  posts: publicProcedure.query(async () => {
    return [];
  })
});
// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;