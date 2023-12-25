import { prisma } from "../../connection";
import { publicProcedure } from "../trpc";
import {z} from 'zod'

export const getUser = publicProcedure.input(z.object({
    email: z.string(),
})).query(async (opts) => {
    const user = await prisma.user.findUnique({
        select: {
            email: true,
            id: true,
        },
        where: {
            email: opts.input.email
        }
    });

    return user;
})