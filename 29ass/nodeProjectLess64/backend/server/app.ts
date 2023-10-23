import express from "express";
import cors from 'cors'
import { blogRouter } from "./blog";
const app = express();

app.use(cors({
    origin: ['http://localhost:5173']
}));

app.use('/blog', blogRouter); // /blog give it to the blogRouter 

app.listen(3300, () => {
    console.log('app is running!')
});