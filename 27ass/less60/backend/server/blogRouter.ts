import { Router } from "express";
import { prismaDB } from "./dbConnection";

export const blogRouter = Router()
// get all blogs (max of 5 blogs)
blogRouter.get('/list', async (req, res) => {
    const data = await prismaDB.blog.findMany({
        take: 5,
    });
    res.send(data)
});
// this will add data // post = add data
blogRouter.post('/add', async (req , res ) => {
    
});