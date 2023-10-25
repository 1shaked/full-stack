import { Request, Response } from "express";
import { prisma } from "../connection";

export async function CreateRouterHandler(req: Request , res: Response) {
    try {
        // add the row
        const newBlog = await prisma.blog.create({
            data: {
                title: req.body.title,
                content: req.body.content,
            }
        })
        console.log('newBlog', newBlog)
        res.send({
            message: 'CreateRouterHandler!',
            body: req.body,
            newBlog
        })
    } catch (error) {
        res.status(400).send({
            message: 'CreateRouterHandler error!',
            body: req.body,
            error
        })
    }
}