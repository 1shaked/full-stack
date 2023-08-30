import { Router, Request, Response } from "express";
// import { prismaDB } from "./dbConnection";
export const exampleRouter58 = Router();

exampleRouter58.get('/home', async (req: Request, res: Response) => {
    const id: number = parseInt(req.query?.id as string ?? '0')
    // const data = await prismaDB.film.findMany({
    //     where: {
    //         film_id: id
    //     }
    // })
    res.send({
        message: 'hello world',
        // data: await prismaDB.film.findFirst(),
        query: req.query,
        // data: data,
    })
});

exampleRouter58.get('/chen', (req: Request, res: Response) => {
    res.send({
        message: 'hello chen',
    })
})