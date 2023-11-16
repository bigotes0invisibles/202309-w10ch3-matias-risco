import type { Request, Response } from "express";
import type { ItemStructure } from "../types";
import type { ItemsRepositoryStructure } from "../repository/types";

interface DictionaryParamItem {
  idItem: string;
}

export type RequestById = Request<DictionaryParamItem>;

export type RequestByBody = Request<
  Record<string, unknown>,
  Record<string, unknown>,
  ItemStructure
>;

class ItemsController {
  constructor(private readonly itemsRepository: ItemsRepositoryStructure) {}

  getItems = async (_req: Request, res: Response) => {
    const items = await this.itemsRepository.getItems();
    res.status(200).json({ items });
  };

  addItem = async (req: RequestByBody, res: Response) => {
    try {
      const { id: _id, ...item } = req.body;
      const newitem = await this.itemsRepository.createItem(item);
      res.status(201).json({ newitem });
    } catch {
      res.status(500).json({
        error: "Error no se podido crear item",
      });
    }
  };

  getItemById = async (req: RequestById, res: Response) => {
    try {
      const { idItem } = req.params;
      const item = await this.itemsRepository.getItemsById(idItem);
      res.status(200).json({ item });
    } catch {
      res.status(404).json({
        error: "Error no se ha encontrado item",
      });
    }
  };
}

export default ItemsController;
