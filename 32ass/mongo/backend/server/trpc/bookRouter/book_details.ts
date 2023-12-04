import { z } from "zod";
import { prismaDB } from "../../connection";
import { publicProcedure } from "../trpc";

export const bookDetails = publicProcedure.input(z.string()).query(async (opts) => {
    const book = await prismaDB.book.findFirst({
        where: {
            id: opts.input
        }
    })
    return book;
})