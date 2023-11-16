import type { Request, Response } from "express";
import type { ItemsRepositoryStructure } from "../../repository/types";
import itemsMock from "../../mocks/ItemsMockData";
import ItemsController from "../ItemsController";

describe("Given the function getItems in ItemsController", () => {
  describe("When it is call with a Response as a parameter", () => {
    const itemsMockRepository: ItemsRepositoryStructure = {
      createItem: jest.fn(),
      getItems: jest.fn().mockReturnValue(itemsMock),
      getItemsById: jest.fn(),
    };
    const req = {};
    const res: Pick<Response, "status" | "json"> = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    test("then it should call status with 200 as a Code", async () => {
      const expectedCode = 200;
      const itemsController = new ItemsController(itemsMockRepository);

      await itemsController.getItems(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedCode);
    });
    test("then it should call json with ball and rank", async () => {
      const expectedMessage = { items: itemsMock };
      const itemsController = new ItemsController(itemsMockRepository);

      await itemsController.getItems(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(expectedMessage);
    });
  });
});
