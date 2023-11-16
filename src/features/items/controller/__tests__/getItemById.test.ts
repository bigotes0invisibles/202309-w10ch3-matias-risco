import type { Request, Response } from "express";
import type { ItemsRepositoryStructure } from "../../repository/types";
import itemsMock from "../../mocks/ItemsMockData";
import ItemsController, { type RequestById } from "../ItemsController";
import {
  itemMongoosetoItem,
  itemtoItemMongoose,
} from "../../utils/itemsFunctions";
import { findItem } from "../../utils/itemsTest";

describe("Given the function getItemsById in ItemsController", () => {
  describe("When it is call with a Request with a parameter idItem of ball and a Response as a parameter", () => {
    const itemBall = itemsMock[0];
    const req: Pick<RequestById, "params"> = {
      params: {
        idItem: itemBall.id,
      },
    };
    const res: Pick<Response, "status" | "json"> = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const itemsMockRepository: ItemsRepositoryStructure = {
      createItem: jest.fn(),
      getItems: jest.fn(),
      getItemsById: jest.fn(async (idString) =>
        itemMongoosetoItem(findItem(idString)),
      ),
    };
    test("then it should call status with 200 as a Code", async () => {
      const expectedCode = 200;
      const itemsController = new ItemsController(itemsMockRepository);

      await itemsController.getItemById(req as RequestById, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedCode);
    });
    test("then it should call json with ball", async () => {
      const expectedMessage = { item: itemBall };
      const itemsController = new ItemsController(itemsMockRepository);

      await itemsController.getItemById(req as RequestById, res as Response);

      expect(res.json).toHaveBeenCalledWith(expectedMessage);
    });
  });
});
