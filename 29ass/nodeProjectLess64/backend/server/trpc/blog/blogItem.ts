import { z } from "zod";
import { publicProcedure } from "../trpc";
import { prisma } from "../../connection";


export const blogItem = publicProcedure.input(z.object({
    id: z.number()
})).query(async (opts) => {
    console.log('blogItem')
    const blogData = await  prisma.blog.findFirst({
        where: {
            id: opts.input.id,
        }
    });
    const blogComments = await prisma.comment.findMany({
        // select: {
            
        // },
        where: {
            blogId: opts.input.id
        }
    });
    return {blogData, blogComments};
})