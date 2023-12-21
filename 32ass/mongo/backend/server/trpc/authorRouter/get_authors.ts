import { prismaDB } from "../../connection";
import { publicProcedure } from "../trpc";

export const getAuthors =  publicProcedure.query(async () => {
    return await prismaDB.author.findMany();
})