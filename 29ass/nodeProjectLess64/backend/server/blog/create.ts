import { Request, Response } from "express";

export function CreateRouterHandler(req: Request , res: Response) {
    res.send({
        message: 'CreateRouterHandler',
    })
}