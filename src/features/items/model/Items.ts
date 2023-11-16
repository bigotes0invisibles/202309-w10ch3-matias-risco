import mongoose from "mongoose";
import type { ItemMongoose } from "../types";

const itemsSchema = new mongoose.Schema<ItemMongoose>({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Items", itemsSchema, "items");
