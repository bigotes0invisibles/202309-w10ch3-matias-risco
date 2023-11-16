import type { Request, Response } from "express";
import type { ItemsRepositoryStructure } from "../types";

class ItemsController {
  constructor(private readonly itemsRepository: ItemsRepositoryStructure) {}

  getThings = async (_req: Request, res: Response) => {
    const items = await this.itemsRepository.getItems();
    res.status(200).json({ items });
  };
}

export default ItemsController;
