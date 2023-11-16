import type { Request, Response } from "express";
import type {
  ItemBaseStructure,
  ItemStructure,
  ItemsRepositoryStructure,
} from "../types";

interface DictionaryParamItem {
  idThing: string;
}

type RequestById = Request<DictionaryParamItem>;

type RequestByBody = Request<
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
    const { id, ...item } = req.body;
    const newitem = await this.itemsRepository.createItem(item);
    res.status(200).json({ newitem });
  };
}

export default ItemsController;
