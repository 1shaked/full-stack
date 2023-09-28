import { Request , Response } from "express";


/**
 * 
 * params  { id: number }
 */
export function ItemRouterHandler(req: Request , res: Response) {
    res.send({
        message: 'ItemRouterHandler',
        params: req.params,
    })
}