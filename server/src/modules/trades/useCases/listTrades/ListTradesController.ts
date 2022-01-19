import { Request, Response } from "express";
import { ListTradesUseCase } from "./ListTradesUseCase";

class ListTradesController {
  constructor(private listTradesUseCase: ListTradesUseCase) {}

  handle(req: Request, res: Response): Response {
    try {
      const list = this.listTradesUseCase.execute();
      return res.json(list)
    } catch (err) {
      return res.status(400).json({ message: err });
    }
  }
}

export { ListTradesController }