import { Router } from "express";
import { prismaDB } from "./dbConnection";
import {z} from 'zod'
export const blogRouter = Router()
// get all blogs (max of 5 blogs)
blogRouter.get('/list', async (req, res) => {
    const data = await prismaDB.blog.findMany({
        take: 10,
    });
    res.send(data)
});
// this will add data // post = add data
blogRouter.post('/add', async (req , res ) => {
    
    const mySchemaString = z.object({
        title: z.string().min(5).max(10),
        content: z.string().min(3)
    });

    const myString = mySchemaString.safeParse(req.body);
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
blogRouter.post('/new', async (req , res ) => {
    console.log('--------------------');
    console.log(req.body);
    const blogSchema = z.object({
        title: z.string().min(3).max(150),
        content: z.string().min(10).max(8000)
    })
    // save the data
    const blogParseRes = blogSchema.safeParse(req.body); 
    if (!blogParseRes.success) return res.status(400).json(blogParseRes.error.message);

    const data = await prismaDB.blog.create({data: blogParseRes.data});
    res.status(201).send(data)
});
