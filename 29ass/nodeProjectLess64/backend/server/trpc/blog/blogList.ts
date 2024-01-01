import { prisma } from "../../connection";
import { example_middleware, publicProcedure } from "../trpc";

export const blogList = publicProcedure.use(example_middleware).query(async () => {
    return await prisma.blog.findMany({
      select: {
        id: true,
        title: true,
        // content: true,
      }
    });
  })