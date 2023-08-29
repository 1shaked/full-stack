import { Router, Request, Response } from "express";
import { prismaDB } from "./dbConnection";
export const exampleRouter58 = Router();

exampleRouter58.get('/home', async (req: Request, res: Response) => {
    
    

    res.send({
        message: 'hello world',
        data: await prismaDB.film.findFirst()
    })
});

exampleRouter58.get('/chen', (req: Request, res: Response) => {
    res.send({
        message: 'hello chen',
    })
})