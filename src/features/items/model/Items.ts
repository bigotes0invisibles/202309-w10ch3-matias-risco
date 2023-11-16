import mongoose from "mongoose";
import type { ItemStructure } from "../types";

const itemsSchema = new mongoose.Schema<ItemStructure>({
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