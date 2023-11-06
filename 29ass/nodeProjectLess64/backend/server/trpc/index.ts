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
  listShaked: publicProcedure.query(async () => {
    console.log("list")
    return ["t", "x", "y", "z"];
  }),
  
  // to add data to the database
  blogCreate: publicProcedure.input(z.object({
    title: z.string(),
    content: z.string(),
  })).mutation(async () => {
    const newBlog = await prisma.blog.create({
        data: {
            title: 'req.body.title',
            content: 'req.body.content',
        }
    });
    return newBlog;
  }),
});

export type AppRouter = typeof appRouter;
