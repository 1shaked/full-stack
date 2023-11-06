import { z } from "zod";
import { prisma } from "../../connection";
import { router, publicProcedure } from "../trpc";
import { CommentRouterTrpc } from "./comment";

export const BlogRouterTrpc = router({
  comment: CommentRouterTrpc,
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

/**
 * 
 * [ {id : 1, text: 's'}]
 */

/**
 * [{blogID: 1, id: 5, comment: 'suck'}, {blogID: 1, id: 3, comment: 'x'} ]
 */