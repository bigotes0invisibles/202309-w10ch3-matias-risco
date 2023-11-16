import itemsMock from "../mocks/ItemsMockData";
import { itemtoItemMongoose } from "./itemsFunctions";

export const findItem = (idItem: string) => {
  const item = itemsMock.find((item) => idItem === item.id);
  if (!item) {
    throw new Error("");
  }

  return itemtoItemMongoose(item);
};
