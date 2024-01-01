import { TRPCError, initTRPC } from '@trpc/server';
import { Context } from '../app';

/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
const t = initTRPC.context<Context>().create();

export const example_middleware = t.middleware(async (opts) => {
    console.log(`example_middleware, ${opts.path}`);
    //    const ctx = opts.ctx as Context;
    try {
        opts.ctx.res.cookie('session', 'x1x1');
        console.log(Object.keys(opts.ctx.req.cookies));
        console.log(opts.ctx.req.cookies);
        // opts.ctx.req.
        opts.ctx.res.cookie('session', 'wow');
    } catch (e) {
        console.log(e);
        console.log('error in example_middleware');
    }

    return opts.next();
});

export const check_logged_in = t.middleware(async (opts) => {
    console.log(`check_logged_in, ${opts.path}`);
    //    const ctx = opts.ctx as Context;
    if (opts.ctx.req.cookies.session === undefined) {
        console.log('session is undefined');
        throw new TRPCError({
            code: 'UNAUTHORIZED',
            message: 'You must be logged in to access this resource',
          });
        
    }
    console.log(Object.keys(opts.ctx.req.cookies));
    console.log(opts.ctx.req.cookies);
    return opts.next();
})
/**
 * Export reusable router and procedure helpers
 * that can be used throughout the router
 */
export const router = t.router;
export const publicProcedure = t.procedure;