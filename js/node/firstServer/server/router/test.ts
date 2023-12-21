import { Router } from "express";

export const test_router = Router();

test_router.get('/y', (req, res) => {
    res.send({
        message: 'wow'
    })
})