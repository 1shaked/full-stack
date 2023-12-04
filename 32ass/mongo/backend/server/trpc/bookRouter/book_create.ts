import { z } from "zod";
import { publicProcedure } from "../trpc";
import { prismaDB } from "../../connection";


export const bookCreate = publicProcedure.input(z.object({
    title: z.string(),
    description: z.string(),
    authorId: z.string()
})).mutation(async (opts) => {
    const book = await prismaDB.book.create({
        data: opts.input //  publishedAt: new Date(), }
    });
    return book;
})