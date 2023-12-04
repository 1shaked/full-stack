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
    })
})