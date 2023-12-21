import { Router, Request, Response } from "express";

const exampleRouter59 = Router();

exampleRouter59.get('/:id', async ( req , res) => {
    res.send(
        req.params
    )
})

