import { prismaDB } from "../../connection";
import { publicProcedure } from "../trpc";
import { z } from 'zod'

export const deleteAuthor = publicProcedure.input(z.string()).mutation(async (opts) => {
    const id = opts.input;
    const deleteBooks = await prismaDB.book.deleteMany({
        where: {
            authorId: id
        }
    })
   await prismaDB.author.delete({
        where: {
            id: id,
        }
    });
    
    return {
        count: deleteBooks.count,
        status: 'success'
    }
})