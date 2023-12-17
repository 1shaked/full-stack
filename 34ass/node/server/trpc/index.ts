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
  userUpdate: publicProcedure.input(z.object({
    id: z.number(),
    name: z.string().optional(),
    email: z.string().optional(),
  })).mutation(async (opts) => {
    const updateUser = await prisma.user.update({
      where: {
        id : opts.input.id,
      },
      data: {
        name: opts.input.name,
        email: opts.input.email,
      }
    })
    return updateUser;
  })

});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;