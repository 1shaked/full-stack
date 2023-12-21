import { Router, Request, Response } from 'express';
// import { prismaDB } from './dbConnection';

export const userRouter = Router();

userRouter.get('/', async (req: Request, res: Response) => {
    // return res.send( await prismaDB.film.findMany({
    //     where: {
    //         'film_id': 5
    //     }
    // }))
    
    res.send('List of users');
});

userRouter.get('/:id', (req: Request, res: Response) => {
    res.send('Details of user with ID: ' + req.params.id);
});

// export userRouter;
