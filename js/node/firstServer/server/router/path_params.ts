import { Router } from "express";

export const path_params_router = Router()

path_params_router.get('/item/:itemId', (req, res) => {
    const {itemId} = req.params;

    res.send({
        message: `The is path params itemId ⤷ ${itemId} 💣💥`
    })
}) 