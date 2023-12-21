import { prisma } from "../connection";
import { publicProcedure, router } from "./trpc";
// import { createHTTPServer } from "@trpc/server/adapters/standalone";
import {z} from 'zod'
interface BlogExampleInter {
  title: string;
}
export const appRouter = router({
  list: publicProcedure.query(async () => {
    console.log("list")
    return ["t", "x", "y", "z"];
  }),
  listShaked: publicProcedure.input(z.object({
    title: z.string(),
    content: z.string(),
  })).query(async (opts) => {
    console.log(opts.input)
    console.log("list")
    return ["t", "x", "y", "z"];
  }),
  
  // to add data to the database
  blogCreate: publicProcedure.input(z.object({
    title: z.string(),
    content: z.string(),
  })).mutation(async (opts) => {
    const newBlog = await prisma.blog.create({
        data: opts.input
    });
    return newBlog;
  }),
});

export type AppRouter = typeof appRouter;
