import { Request , Response } from "express";
import { prisma } from "../connection";


export async function ListRouterHandler(req: Request, res: Response) {
    const blogs = await prisma.blog.findMany()
    res.send({
        message: 'This is a list router handler',
        blogs
    })
}