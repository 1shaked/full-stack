import { BlogRouterTrpc } from "./blog";
import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  blog: BlogRouterTrpc,
  list: publicProcedure.query(() => {
    return ['s' , 's', 'x']
  })
});

export type AppRouter = typeof appRouter;
