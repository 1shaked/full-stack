import { prisma } from "../connection";
import { publicProcedure, router } from "./trpc";
import {z} from 'zod'

export const appRouter = router({
  list: publicProcedure.query(async () => {
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
