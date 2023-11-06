import { BlogRouterTrpc } from "./blog";
import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  blog: BlogRouterTrpc,
  list: publicProcedure.query(async () => {
    console.log("list")
    return ["t", "x", "y", "z"];
  }),
});

export type AppRouter = typeof appRouter;
