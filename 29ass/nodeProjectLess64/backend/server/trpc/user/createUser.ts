import { z } from "zod";
import { publicProcedure } from "../trpc";
import { prisma } from "../../connection";


export const createUser = publicProcedure.input(z.object({
    email: z.string(),
    password: z.string()
})).mutation(async (opts) => {
    const user = await prisma.user.create({
        data: opts.input
    });

    return user;
})