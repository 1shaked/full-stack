import { prisma } from "../../connection";
import { publicProcedure } from "../trpc";

export const blogList = publicProcedure.query(async () => {
    return await prisma.blog.findMany({
      select: {
        id: true,
        title: true,
      }
    });
  })