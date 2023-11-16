export interface ItemBaseStructure {
  name: string;
  size: string;
  color: string;
  price: string;
}

export interface ItemMongoose extends ItemBaseStructure {
  _id: string;
}

export interface ItemStructure extends ItemBaseStructure {
  id: string;
}

export interface ItemsRepositoryStructure {
  getItems: () => Promise<ItemMongoose[]>;
  getItemsById: (_id: string) => Promise<ItemMongoose>;
  createItem: (item: ItemBaseStructure) => Promise<ItemBaseStructure>;
}
