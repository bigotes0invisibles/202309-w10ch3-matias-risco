import chalk from "chalk";
import Items from "../model/Items";

class ItemsRepository {
  public async getItems() {
    const items = await Items.find();

    return items;
  }

  public async getItemsById(id: string) {
    const item = await Items.findById(id);
    if (!item) {
      throw new Error(chalk.red("Error:item not found"));
    }

    return item;
  }
}

export default ItemsRepository;
