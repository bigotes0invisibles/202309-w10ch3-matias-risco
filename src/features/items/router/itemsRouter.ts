import { Router } from "express";
import ItemsController from "../controller/ItemsController.js";
import ItemsRepository from "../repository/ItemsRepository.js";

const itemsRepository = new ItemsRepository();
const itemsController = new ItemsController(itemsRepository);
const itemsRouter = Router();

itemsRouter.get("/items", itemsController.getThings);

export default itemsRouter;
