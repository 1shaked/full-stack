import { z } from "zod";
import { publicProcedure } from "../trpc";
import { prisma } from "../../connection";
import { hashPassword } from "../../utils/hashPassword";


export const createUser = publicProcedure.input(z.object({
    email: z.string(),
    password: z.string()
})).mutation(async (opts) => {
    const password_hashed = await hashPassword(opts.input.password);
    console.log(password_hashed)
    const user = await prisma.user.create({
        data: {
            email: opts.input.email,
            password: password_hashed,
        }
    });

    return user;
})