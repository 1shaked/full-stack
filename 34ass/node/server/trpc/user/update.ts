
import { publicProcedure } from "../trpc";
import {z} from 'zod'
import {prisma } from '../../prisma'


export const userUpdate =  publicProcedure.input(z.object({
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