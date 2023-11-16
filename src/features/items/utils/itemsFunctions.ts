import type { ItemMongoose, ItemStructure } from "../types";

export const itemMongoosetoItem = ({
  _id: id,
  ...itemData
}: ItemMongoose): ItemStructure => ({
  id,
  ...itemData,
});

export const itemtoItemMongoose = ({
  id: _id,
  ...itemData
}: ItemStructure): ItemMongoose => ({
  _id,
  ...itemData,
});
