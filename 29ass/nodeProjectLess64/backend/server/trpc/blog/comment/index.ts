import { z } from "zod";
import { prisma } from "../../../connection";
import { router, publicProcedure, check_logged_in } from "../../trpc";

export const CommentRouterTrpc = router({
  list: publicProcedure.input(z.object({
    id: z.number(),
  })).use(check_logged_in).query(async (opts) => {
    console.log(opts.input)
    return await prisma.comment.findMany(
        {
            where: {
                id: opts.input.id
            }
        }
    );
  }),
  // to add data to the database
  create: publicProcedure
    .input(
      z.object({
        comment: z.string(),
        blogId: z.number(),
      })
    )
    .mutation(async (opts) => {
      console.log(opts.input)
      try {
        const comment = await prisma.comment.create({
          data: opts.input
        });
        return comment;
      } catch (e) {
        console.log(e)
        return {}
      }
    }),
});
