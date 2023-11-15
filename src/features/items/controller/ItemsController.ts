import type { Request, Response } from "express";

class ItemsController {
  public getThings(_req: Request, res: Response) {
    res.status(200).json({});
  }
}

export default ItemsController;
