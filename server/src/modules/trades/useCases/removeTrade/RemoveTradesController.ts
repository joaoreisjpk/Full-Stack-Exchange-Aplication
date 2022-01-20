import { Request, Response } from "express";
import { RemoveTradesUseCase } from "./RemoveTradesUseCase";

class RemoveTradesController {
  constructor(private listTradesUseCase: RemoveTradesUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const newTradesArray = await this.listTradesUseCase.execute(req.params.id)
      return res.json(newTradesArray);
    } catch(err) {
      return res.json({message: err})
    }
  }
}

export { RemoveTradesController }