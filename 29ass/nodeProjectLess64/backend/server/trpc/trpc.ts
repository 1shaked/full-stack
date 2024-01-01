import { initTRPC } from '@trpc/server';
import { Context } from '../utils/trpcExpressContent';

/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
const t = initTRPC.context<Context>().create();

export const example_middleware = t.middleware(async (opts) => {
    console.log(`example_middleware, ${opts.path}`);
    console.log(opts.ctx.req.cookies)
    opts.ctx.res.cookie('session', 'chen')
    return opts.next();
});
/**
 * Export reusable router and procedure helpers
 * that can be used throughout the router
 */
export const router = t.router;
export const publicProcedure = t.procedure;