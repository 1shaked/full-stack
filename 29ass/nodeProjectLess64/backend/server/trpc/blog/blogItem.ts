import { z } from "zod";
import { check_logged_in, publicProcedure } from "../trpc";
import { prisma } from "../../connection";


export const blogItem = publicProcedure.input(z.object({
    id: z.number()
})).use(check_logged_in).query(async (opts) => {
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