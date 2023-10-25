import { Request, Response } from "express";
import { prisma } from "../connection";

export async function CreateRouterHandler(req: Request , res: Response) {
    try {
        console.log(req.body)
        // add the row
        const newBlog = await prisma.blog.create({
            data: {
                title: req.body.title,
                content: req.body.content,
            }
        })
        console.log('newBlog', newBlog)
        await new Promise((resolve, reject) => setTimeout(resolve,1000))
        res.send(newBlog)
    } catch (error) {
        res.status(400).send({
            message: 'CreateRouterHandler error!',
            body: req.body,
            error
        })
    }
}