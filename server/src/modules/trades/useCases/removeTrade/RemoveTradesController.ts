import { Request, Response } from "express";
import { RemoveTradesUseCase } from "./RemoveTradesUseCase";

class RemoveTradesController {
  constructor(private listTradesUseCase: RemoveTradesUseCase) {}

  handle(req: Request, res: Response): Response {
    try {
      const newTradesArray = this.listTradesUseCase.execute(req.params.id)
      return res.json(newTradesArray);
    } catch(err) {
      return res.json({message: err})
    }
  }
}

export { RemoveTradesController }