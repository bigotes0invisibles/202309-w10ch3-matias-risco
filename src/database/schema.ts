import mongoose from "mongoose";

export const itemsDatabase = {
  id: Number,
  name: String,
  size: String,
  color: String,
  price: String,
};

const itemsSchema = new mongoose.Schema(itemsDatabase);
export const itemsMongose = mongoose.model("item", itemsSchema);
