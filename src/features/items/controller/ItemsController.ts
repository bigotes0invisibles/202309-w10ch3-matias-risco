import type { Request, Response } from "express";
import ItemsRepository from "../repository/ItemsRepository.js";

const itemsRepository = new ItemsRepository();
class ItemsController {
  public async getThings(_req: Request, res: Response) {
    const items = itemsRepository.getItemsDatabase();
    res.status(200).json({ items });
  }
}

export default ItemsController;
