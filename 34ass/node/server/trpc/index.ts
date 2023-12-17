import { prisma } from '../prisma';
import { publicProcedure, router } from './trpc';
import {z} from 'zod'
export const ZodUserSchema = z.object({
  email: z.string().email(),
  name: z.string(),  
});

export type UserSchemaType = z.infer<typeof ZodUserSchema>;

export const appRouter = router({
  userList: publicProcedure.query(async (opts) => {
    
    const users = await prisma.user.findMany()
    console.log(users)
    return users
  }),
  userCreate: publicProcedure.input(ZodUserSchema).mutation(async (opts) => {    
    const newUser = await prisma.user.create({
      data: opts.input
    });
    return newUser
  }),
  userDelete: publicProcedure.input(z.number()).mutation(async (opts) => {  
    const deleteUser = await prisma.user.delete({
      where: {
        id: opts.input
      }
    });
    return deleteUser
  }),

});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;