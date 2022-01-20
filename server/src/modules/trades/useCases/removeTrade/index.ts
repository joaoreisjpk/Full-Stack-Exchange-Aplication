import { TradesRepository } from "../../repositories/TradesRepository";
import { RemoveTradesController } from "./RemoveTradesController";
import { RemoveTradesUseCase } from "./RemoveTradesUseCase";

export default () => {
  const tradesRepository = new TradesRepository();
  const createTradesUseCase = new RemoveTradesUseCase(tradesRepository);
  
  return new RemoveTradesController(createTradesUseCase)
}