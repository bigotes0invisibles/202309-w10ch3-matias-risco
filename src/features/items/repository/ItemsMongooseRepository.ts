import chalk from "chalk";
import Items from "../model/Items";
import type { ItemBaseStructure, ItemsRepositoryStructure } from "../types";
import { Error } from "mongoose";

class ItemsRepository implements ItemsRepositoryStructure {
  public async getItems() {
    const items = await Items.find();

    return items;
  }

  public async getItemsById(id: string) {
    const item = await Items.findById(id);
    if (!item) {
      throw new Error(chalk.red("Error:item not found"));
    }

    return item;
  }

  public async createItem(item: ItemBaseStructure): Promise<ItemBaseStructure> {
    try {
      const newItem = await Items.create<ItemBaseStructure>(item);
      return newItem;
    } catch (error) {
      throw new Error("create item mongose error: " + (error as Error).message);
    }
  }
}

export default ItemsRepository;
