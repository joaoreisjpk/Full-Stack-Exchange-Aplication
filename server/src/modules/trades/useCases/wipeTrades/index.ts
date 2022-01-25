import { TradesRepository } from "../../repositories/TradesRepository";
import { WipeTradesController } from "./WipeTradesController";
import { WipeTradesUseCase } from "./WipeTradesUseCase";

export default () => {
  const tradesRepository = new TradesRepository();
  const createTradesUseCase = new WipeTradesUseCase(tradesRepository);
  
  return new WipeTradesController(createTradesUseCase)
}