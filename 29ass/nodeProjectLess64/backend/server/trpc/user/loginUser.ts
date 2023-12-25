import { prisma } from "../../connection";
import { publicProcedure } from "../trpc";
import {z} from 'zod'

export const loginUser = publicProcedure.input(z.object({
    email: z.string(),
    password: z.string()
})).mutation(async (opts) => {
    const user = await prisma.user.findUnique({
        where: {
            email: opts.input.email,
            password: opts.input.password
        }
    });

    return user;
})