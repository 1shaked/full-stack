import { z } from 'zod'
import {publicProcedure, router} from '../trpc'
import { prismaDB } from '../../connection'

export const BookRouter = router({//
    bookDetails: publicProcedure.input(z.string()).query(async (opts) => {
        const book = await prismaDB.book.findFirst({
            where: {
                id: opts.input
            }
        })
        return book;
    }),
    booksList: publicProcedure.query(async () => {
        const books = await prismaDB.book.findMany();
        return books;
    }),
    bookCreate: publicProcedure.input(z.object({
        title: z.string(),
        description: z.string(),
        authorId: z.string()
    })).mutation(async (opts) => {
        const book = await prismaDB.book.create({
            data: opts.input //  publishedAt: new Date(), }
        });
        return book;
    })
})