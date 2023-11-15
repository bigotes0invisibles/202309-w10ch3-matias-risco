import { Router } from "express";
import ItemsController from "../controller/ItemsController.js";

const itemsController = new ItemsController();
const itemsRouter = Router();

itemsRouter.get("/items", itemsController.getThings);

export default itemsRouter;
