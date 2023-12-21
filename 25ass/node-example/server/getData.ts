import express, { Router, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

export const routerData: Router = express.Router();

routerData.get('/', (req: Request, res: Response) => {
    const queryParams = req.query;
    res.send(queryParams);
});

routerData.post('/',
    [
        body('name').isLength({ min: 5 }),
        body('email').isEmail(),
        body('age').isNumeric(),
    ],
    (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        res.send(req.body);
    }
);

routerData.post('/postData', (req: Request, res: Response) => {
        res.send(req.body);
    }
);


routerData.put('/', (req: Request, res: Response) => {
    res.send(req.body);
});

routerData.delete('/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    res.send(`Delete data with ID: ${id}`);
});

