import type { ItemBaseStructure, ItemMongoose, ItemStructure } from "../types";

export interface ItemsRepositoryStructure {
  getItems: () => Promise<ItemStructure[]>;
  getItemsById: (_id: string) => Promise<ItemStructure>;
  createItem: (item: ItemBaseStructure) => Promise<ItemStructure>;
}
