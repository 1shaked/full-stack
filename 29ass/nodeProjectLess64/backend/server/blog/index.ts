import { Router } from "express";
import { ListRouterHandler } from "./list";
import { ItemRouterHandler } from "./item_id";
import { CreateRouterHandler } from "./create";

export const blogRouter = Router();

blogRouter.get('/list', ListRouterHandler);

blogRouter.get('/item/:id', ItemRouterHandler);

blogRouter.post('/create', CreateRouterHandler);
