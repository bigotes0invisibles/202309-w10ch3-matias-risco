import chalk from "chalk";
import { Error } from "mongoose";
import type { ItemsRepositoryStructure } from "./types";
import type { ItemBaseStructure, ItemStructure } from "../types";
import Items from "../model/Items.js";
import { itemMongoosetoItem } from "../utils/itemsFunctions.js";

class ItemsRepository implements ItemsRepositoryStructure {
  public async getItems() {
    const items = await Items.find();

    return items;
  }

  public async getItemsById(id: string) {
    try {
      const item = await Items.findById(id);
      if (!item) {
        throw new Error(chalk.red("Error:item not found: "));
      }

      return item;
    } catch (error) {
      throw new Error("get item mongose error: " + (error as Error).message);
    }
  }

  public async createItem(item: ItemBaseStructure): Promise<ItemStructure> {
    try {
      const newItem = await Items.create<ItemBaseStructure>(item);
      return itemMongoosetoItem(newItem);
    } catch (error) {
      throw new Error("create item mongose error: " + (error as Error).message);
    }
  }
}

export default ItemsRepository;
