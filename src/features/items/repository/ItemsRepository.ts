import { getItemsModel } from "../../../database/schema.js";

class ItemsRepository {
  private readonly itemsMongose;
  constructor() {
    this.itemsMongose = getItemsModel();
  }

  public getItemsDatabase = async () => {
    const items = await this.itemsMongose.find();
    return items;
  };
}

export default ItemsRepository;
