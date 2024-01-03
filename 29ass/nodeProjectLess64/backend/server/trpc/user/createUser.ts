import { z } from "zod";
import { publicProcedure } from "../trpc";
import { prisma } from "../../connection";
import { hashPassword } from "../../utils/hashPassword";
import moment from "moment";


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
    const current_time_plus_2_h = moment().add(2, 'hours').toISOString();
    const session = await prisma.session.create({
        data: {
            userId: user.id,
            expires: current_time_plus_2_h,
        }
    });
    opts.ctx.res.cookie('session', session.id, { maxAge: 1000 * 20 * 60 });


    return user;
})