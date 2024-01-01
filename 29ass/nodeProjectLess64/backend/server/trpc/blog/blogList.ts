import { prisma } from "../../connection";
import { example_middleware, login_middleware, publicProcedure } from "../trpc";

export const blogList = publicProcedure.use(login_middleware).query(async () => {
    return await prisma.blog.findMany({
      select: {
        id: true,
        title: true,
        // content: true,
      }
    });
  })