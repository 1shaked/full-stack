import express, { Router, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
    const queryParams = req.query;
    res.send(queryParams);
});

router.post('/',
    [
        body('name').isLength({ min: 5 }),
        body('email').isEmail()
    ],
    (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        res.send(req.body);
    }
);

router.put('/', (req: Request, res: Response) => {
    res.send(req.body);
});

router.delete('/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    res.send(`Delete data with ID: ${id}`);
});

export default router;
