import { prismaDB } from "../../connection";
import { publicProcedure } from "../trpc";

export const GetAuthors =  publicProcedure.query(() => {
    return prismaDB.author.findMany();
})