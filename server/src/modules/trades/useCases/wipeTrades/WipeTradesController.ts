import { Request, Response } from "express";
import { WipeTradesUseCase } from "./WipeTradesUseCase";

class WipeTradesController {
  constructor(private listTradesUseCase: WipeTradesUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const newTradesArray = await this.listTradesUseCase.execute()
      return res.send(newTradesArray);
    } catch(err) {
      return res.send({message: err});
    }
  }
}

export { WipeTradesController }
