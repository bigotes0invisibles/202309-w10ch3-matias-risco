import type { ItemMongoose, ItemStructure } from "../types";

export const itemMongoosetoItem = ({
  _id: id,
  ...itemData
}: ItemMongoose): ItemStructure => ({
  id,
  ...itemData,
});
