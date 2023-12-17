
import { publicProcedure } from "../trpc";
import {z} from 'zod'
import {prisma } from '../../prisma'


export const userList = publicProcedure.query(async (opts) => {
    
    const users = await prisma.user.findMany()
    console.log(users)
    return users
  }) 