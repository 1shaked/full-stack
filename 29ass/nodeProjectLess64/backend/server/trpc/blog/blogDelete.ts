
import { z } from "zod";
import { publicProcedure } from "../trpc";
import { prisma } from "../../connection";


export const blogDelete = publicProcedure.input(
    z.object({
        id: z.number(),
    })
)
    .mutation(async (opts) => {
        // await prisma.comment.delete({
        //     where: {
        //         blogId: opts.input.id,
        //     }
        // });
        await prisma.blog.delete({
            where: {
                id: opts.input.id,
            }
        });
        return {
            status: 'success'
        };
    })