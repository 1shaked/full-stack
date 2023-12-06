import { z } from "zod";
import { prismaDB } from "../../connection";
import { publicProcedure, router } from "../trpc";

export const homeRouter = router({
    list: publicProcedure.query(async () => {
        const homes = await prismaDB.home.findMany()
        return homes
    }),
    get: publicProcedure.input(z.string()).query(async (opts) => {
        const home = await prismaDB.home.findUnique({
            where: {
                id: opts.input
            }
        });
        return home;
    })
})