import { z } from "zod";
import { prisma } from "../connection";
import { router, publicProcedure } from "./trpc";

export const BlogRouterTrpc = router({
  list: publicProcedure.query(async () => {
    return await prisma.blog.findMany();
  }),
  // to add data to the database
  create: publicProcedure
    .input(
      z.object({
        title: z.string(),
        content: z.string(),
      })
    )
    .mutation(async (opts) => {
      const newBlog = await prisma.blog.create({
        data: opts.input,
      });
      return newBlog;
    }),
});
