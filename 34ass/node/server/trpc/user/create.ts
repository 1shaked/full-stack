import { publicProcedure } from "../trpc";
import {z} from 'zod'
import {prisma } from '../../prisma'
export const ZodUserSchema = z.object({
    email: z.string().email(),
    name: z.string(),  
  });
export const userCreate = publicProcedure.input(ZodUserSchema).mutation(async (opts) => {    
    const newUser = await prisma.user.create({
      data: opts.input
    });
    return newUser
})