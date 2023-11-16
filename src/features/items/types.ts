export interface ItemStructure {
  _id: string;
  name: string;
  size: string;
  color: string;
  price: string;
}

export interface ItemsRepositoryStructure {
  getItems: () => Promise<ItemStructure[]>;
  getItemsById: (_id: string) => Promise<ItemStructure>;
}
