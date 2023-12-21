import { z } from "zod";
import { publicProcedure } from "../trpc";
import { prisma } from "../../connection";


export const blogCreate = publicProcedure.input(
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
    })