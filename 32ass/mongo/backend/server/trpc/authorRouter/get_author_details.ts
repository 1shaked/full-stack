import { prismaDB } from "../../connection";
import { publicProcedure } from "../trpc";
import { z } from 'zod'

export const getAuthorsDetails = publicProcedure.input(z.string()).query(async (opts) => {
    const id = opts.input;

    const [authorDetails , books] = await Promise.all(
        [
        prismaDB.author.findFirst({
            where: {
                id
            }
        }), 
        prismaDB.book.findMany({
            where: {
                authorId: id,
            }
        }),
    ])
    return {
        authorDetails,
        books
    };
})