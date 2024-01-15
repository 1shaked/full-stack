import { BlogRouterTrpc } from "./blog/index";
import { BookRouterTrpc } from "./book";
import { subRouter } from "./sub";
import { publicProcedure, router } from "./trpc";
import { UserRouterTrpc } from "./user";

export const appRouter = router({
  blog: BlogRouterTrpc,
  user: UserRouterTrpc,
  book: BookRouterTrpc,
  list: publicProcedure.query(() => {
    return ['s' , 's', 'x']
  }),
  sub: subRouter,
});

export type AppRouter = typeof appRouter;
