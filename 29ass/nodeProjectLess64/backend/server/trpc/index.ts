import { BlogRouterTrpc } from "./blog/index";
import { publicProcedure, router } from "./trpc";
import { UserRouterTrpc } from "./user";

export const appRouter = router({
  blog: BlogRouterTrpc,
  user: UserRouterTrpc,
  list: publicProcedure.query(() => {
    return ['s' , 's', 'x']
  })
});

export type AppRouter = typeof appRouter;
