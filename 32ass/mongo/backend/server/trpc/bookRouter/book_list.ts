import { prismaDB } from "../../connection";
import { publicProcedure } from "../trpc";


export const bookList = publicProcedure.query(async () => {
    const books = await prismaDB.book.findMany();
    return books;
})