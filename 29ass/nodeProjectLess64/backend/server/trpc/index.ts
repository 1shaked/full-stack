import { publicProcedure, router } from "./trpc";
// import { createHTTPServer } from "@trpc/server/adapters/standalone";

export const appRouter = router({
  list: publicProcedure.query(async () => {
    console.log("list")
    return ["t", "x", "y", "z"];
  }),
  listShaked: publicProcedure.query(async () => {
    console.log("list")
    return ["t", "x", "y", "z"];
  }),
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;

// console.log('trpc is running')
// const server = createHTTPServer({
//   router: appRouter,
// });

// server.listen(3500);
