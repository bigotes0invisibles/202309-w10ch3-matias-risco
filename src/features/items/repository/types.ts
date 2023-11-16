import type { ItemBaseStructure, ItemMongoose, ItemStructure } from "../types";

export interface ItemsRepositoryStructure {
  getItems: () => Promise<ItemMongoose[]>;
  getItemsById: (_id: string) => Promise<ItemMongoose>;
  createItem: (item: ItemBaseStructure) => Promise<ItemStructure>;
}
