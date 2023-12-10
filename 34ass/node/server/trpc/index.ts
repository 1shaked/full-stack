import { prisma } from '../prisma';
import { publicProcedure, router } from './trpc';
import {z} from 'zod'
export const appRouter = router({
  userList: publicProcedure.input(z.string()).query(async (opts) => {
    console.log(opts.input)
    const users = await prisma.user.findMany()
    console.log(users)
    return users
  })
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;