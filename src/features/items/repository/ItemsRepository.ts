import { itemsMongose } from "../../../database/schema.js";

class ItemsRepository {
  public async getItemsDatabase() {
    const items = await itemsMongose.find();
    return items;
  }
}

export default ItemsRepository;
