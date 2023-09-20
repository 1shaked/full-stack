import { Router } from "express";
import { prismaDB } from "./dbConnection";
import {z} from 'zod'
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
    
    const mySchemaString = z.string().min(5).max(10);

    const myString = mySchemaString.safeParse(req.body.title);
    if (myString.success) {
        res.send(myString.data)
    } else {
        res.send(myString.error.message)
    }
    // console.log('--------------------');
    // console.log(req.body);
    
    // // save the data
    // try {
    //     const data = await prismaDB.blog.create({
    //         data: {
    //             title: req.body.title,
    //             content: req.body.content,
    //         }
    //     });
    //     console.log('--------------------');
    //     console.log('save to the db');
    //     res.send({ message: 'worked', data});
    // } catch (e) {
    //     console.log(e);
    //     res.send({message: 'error'})
    // }
});