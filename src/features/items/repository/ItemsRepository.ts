import itemsModel from "../model/itemsModel.js";

class ItemsRepository {
  public async getItems() {
    const items = await itemsModel.find();

    return items;
  }

  public async getItemsById(id: string) {
    const items = await itemsModel.findById(id);
    if (!items) {
      throw new Error();
    }

    return items;
  }
}

export default ItemsRepository;
