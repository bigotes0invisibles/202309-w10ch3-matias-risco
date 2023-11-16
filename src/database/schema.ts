import mongoose from "mongoose";

export const itemsDatabase = {
  id: Number,
  name: String,
  size: String,
  color: String,
  price: String,
};

export const getItemsModel = () => {
  const itemsSchema = new mongoose.Schema(itemsDatabase);
  return mongoose.model("items", itemsSchema);
};
