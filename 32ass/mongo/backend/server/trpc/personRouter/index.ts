import { z } from "zod";
import { prismaDB } from "../../connection";
import { publicProcedure, router } from "../trpc";

export const personRouter = router({
    list: publicProcedure.query(async () => {
        const persons = await prismaDB.person.findMany({
            select: {
                id: true,
                name: true,
                bio: true
            }
        })
        return persons
    }),
    get: publicProcedure.input(z.string()).query(async (opts) => {
        const person = await prismaDB.person.findUnique({
            where: {
                id: opts.input
            }
        });
        return person ?? undefined;
    }),
    list_names: publicProcedure.query(async () => {
        const persons = await prismaDB.person.findMany({
            select: {
                id: true,
                name: true,
            }
        })
        return persons
    }),
})