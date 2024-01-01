import { prisma } from "../../connection";
import { checkPassword } from "../../utils/checkPassword";
import { example_middleware, publicProcedure } from "../trpc";
import { CreateExpressContextOptions } from '@trpc/server/adapters/express'

import {z} from 'zod'
import moment from "moment";
export const loginUser = publicProcedure.input(z.object({
    email: z.string(),
    password: z.string()
})).use(example_middleware).mutation(async (opts) => {
    const user = await prisma.user.findUnique({
        where: {
            email: opts.input.email,
        }
    });
    if (user === null) return user;
    const is_password_matched = await checkPassword(opts.input.password, user?.password);

    if (!is_password_matched) return null;
    const current_time_plus_2_h = moment().add(2, 'hours').toISOString();
    const session = await prisma.session.create({
        data: {
            userId: user.id,
            expires: current_time_plus_2_h,
        }
    });
    opts.ctx.res.cookie('session', session.id, { maxAge: 1000 * 20 * 60 });

    return session;
})