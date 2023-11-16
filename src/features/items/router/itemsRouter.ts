import { Router } from "express";
import ItemsController from "../controller/ItemsController.js";
import ItemsRepository from "../repository/ItemsMongooseRepository.js";

const itemsRepository = new ItemsRepository();
const itemsController = new ItemsController(itemsRepository);
const itemsRouter = Router();

itemsRouter.get("/items", itemsController.getItems);

export default itemsRouter;
