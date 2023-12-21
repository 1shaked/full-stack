import { initTRPC } from "@trpc/server";
const t = initTRPC.create();
export const router = t.router;
export const publicProcedure = t.procedure;
import { z } from "zod";
import { prismaDB } from "./dbConnection";

export const appRouter = router({
  filmById: publicProcedure.input(z.number()).query(async (opts) => {
    const { input } = opts;

    const user = await prismaDB.film.findMany({
      where: {
        film_id: input,
      },
    });
    return user;
  }),
});
export type AppRouter = typeof appRouter;
