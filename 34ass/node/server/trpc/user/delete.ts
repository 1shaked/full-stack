
import { publicProcedure } from "../trpc";
import {z} from 'zod'
import {prisma } from '../../prisma'

export const userDelete =  publicProcedure.input(z.number()).mutation(async (opts) => {  
    const deleteUser = await prisma.user.delete({
      where: {
        id: opts.input
      }
    });
    return deleteUser
  })