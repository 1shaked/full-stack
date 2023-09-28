import express from "express";
import { blogRouter } from "./blog";

const app = express();

app.use('/blog', blogRouter); // /blog give it to the blogRouter 

app.listen(3300, () => {
    console.log('app is running!')
});