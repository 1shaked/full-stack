import { Router } from "express";

export const query_params_router = Router()

query_params_router.get('/item', (req, res) => {

    res.send({
        message: `The is path params itemId `,
        query: req.query,
    })
}) 