export interface ItemsStructure {
  id: number;
  name: string;
  size: string;
  color: string;
  price: string;
}

export interface ItemsDatabaseStructure extends ItemsStructure {
  _id?: string;
}
