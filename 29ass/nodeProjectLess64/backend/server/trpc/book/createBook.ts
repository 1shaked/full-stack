import { z } from "zod";
import { publicProcedure } from "../trpc";
import { prisma } from "../../connection";

export const createBook = publicProcedure.input(z.object({
    title: z.string(),
    content: z.string(),
    user: z.object({
        id: z.number(),
        email: z.string(),
        password: z.string(),
    })
})).mutation(async (opts) => {
    const user = await prisma.user.findUnique({
        where: {
            email: opts.input.user.email,
            password: opts.input.user.password,
        }
    })
    if (user === null) throw 'User is not logged in';
    const book = await prisma.book.create({
        data: {
            userId: user.id,
            title: opts.input.title,
            content: opts.input.content,
        }
    });

    return book;
})