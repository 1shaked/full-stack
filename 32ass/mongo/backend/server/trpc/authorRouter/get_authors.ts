import { prismaDB } from "../../connection";
import { publicProcedure } from "../trpc";

export const getAuthors =  publicProcedure.query(() => {
    return prismaDB.author.findMany();
})