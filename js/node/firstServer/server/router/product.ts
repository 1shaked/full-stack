import { Router } from "express";

export const router_product = Router()

router_product.get('/y', (req , res) => {
    res.send({
        message: 'the product router'
    })
})