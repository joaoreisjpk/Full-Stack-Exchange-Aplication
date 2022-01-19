import { Request, Response } from "express";
import { CreateTradesUseCase } from "./CreateTradesUseCase";

class CreateTradesController {
  constructor(private createTradesUseCase: CreateTradesUseCase) {}

  handle(req: Request, res: Response): Response {
    const newTrade = this.createTradesUseCase.execute(req.body)

    return res.status(201).json({ newTrade });
  }
}

export { CreateTradesController }