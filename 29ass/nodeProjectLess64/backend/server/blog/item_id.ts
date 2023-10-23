import { Request , Response } from "express";
import { prisma } from "../connection";


/**
 * 
 * params  { id: number }
 */
export async function ItemRouterHandler(req: Request , res: Response) {
    const { id } = req.params;
    if (id === undefined || Number.isNaN(parseInt(id))) return res.status(415).send({message: 'id is not defined',});
    const data = await  prisma.blog.findUnique({
        where: {
            id: Number(id)
        }
    })
    res.send({
        message: 'ItemRouterHandler',
        params: req.params,
        data,
        query: req.query
    })
}